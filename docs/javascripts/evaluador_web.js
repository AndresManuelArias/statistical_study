/**
 * evaluador_web.js
 * Porta el evaluador.py (Tkinter) a la web dentro de mkdocs.
 *
 * La página ya contiene las preguntas en el HTML generado por mkdocs:
 *   <h3>Pregunta N</h3>, opciones en <p class="quiz-option"> (creados por
 *   quiz.js) y la respuesta correcta en el blockquote (oculto por quiz.js
 *   con display:none pero accesible desde el DOM).
 *
 * Flujo:
 *   - Botón flotante "Iniciar evaluación" (solo si hay preguntas).
 *   - El examen se muestra en un PANEL autónomo: la pregunta y sus opciones
 *     se pintan dentro del panel (opciones clicables), sin depender de la
 *     visibilidad del contenido de la página.
 *   - Sin feedback hasta "Finalizar": calificación, tabla de resultados y
 *     descarga del JSON (mismo esquema que evaluador.py).
 *   - guarda la última nota y todo el historial en IndexedDB (BD
 *     "etapa2_evaluador", tabla "evaluaciones").
 *
 * NO modifica los archivos .md. Convive con quiz.js (feedback inline).
 */
(function () {
  "use strict";

  var RE_PREGUNTA = /^Pregunta\s+\d+$/;
  var RE_OPCION = /^([a-h])\)/;

  var estado = null; // null = no hay preguntas en esta página
  var panel = null;  // elemento del panel del examen
  var indice = 0;
  var fab = null;

  function esPregunta(h) {
    return h.tagName === "H3" && RE_PREGUNTA.test((h.textContent || "").trim());
  }

  function nombreTema() {
    var partes = (location.pathname || "").split("/").filter(function (s) {
      return s;
    });
    var ultima = partes[partes.length - 1] || "";
    return ultima.replace(/\.html$/, "") || "tema";
  }

  var DB_NAME = "etapa2_evaluador";
  var DB_VERSION = 1;
  var STORE = "evaluaciones";

  function abrirBD() {
    return new Promise(function (resolve, reject) {
      if (!window.indexedDB) {
        reject(new Error("indexedDB no disponible"));
        return;
      }
      var req = window.indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains(STORE)) {
          var st = db.createObjectStore(STORE, { keyPath: "id" });
          st.createIndex("tema", "tema", { unique: false });
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function transaccion(modo, fncion) {
    return abrirBD().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE, modo);
        var store = tx.objectStore(STORE);
        var req = fncion(store);
        req.onsuccess = function () { resolve(req.result); };
        req.onerror = function () { reject(req.error); };
        tx.oncomplete = function () { db.close(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  /** Guarda un resultado de evaluación en IndexedDB. */
  function guardarResultado(datos) {
    return transaccion("readwrite", function (store) {
      return store.put(datos);
    });
  }

  /** Devuelve el historial de evaluaciones de un tema (orden reciente). */
  function listarHistorial(tema) {
    return transaccion("readonly", function (store) {
      return store.index("tema").getAll(tema);
    }).then(function (registros) {
      return (registros || []).sort(function (a, b) {
        return String(b.id).localeCompare(String(a.id));
      });
    });
  }

  function limpiarEnunciado(texto) {
    return (texto || "")
      .split("\n")
      .map(function (l) {
        return l.replace(/\*\*(.+?)\*\*/g, "$1").replace(/^\s+|\s+$/g, "");
      })
      .filter(function (l) {
        return l;
      })
      .join("\n");
  }

  /**
   * Recoge la pregunta empezando en el h3 y devuelve:
   *   { id_pregunta, h3, elEnunciado:[elementos de enunciado ya renderizados],
   *     opciones:[{letra, texto}], respuesta_correcta:{...}, letra_correcta,
   *     enunciado (texto), respuesta_usuario, es_correcta }
   */
  function recolectarPregunta(h3) {
    var bloques = [];
    var el = h3.nextElementSibling;
    while (el && !esPregunta(el)) {
      bloques.push(el);
      el = el.nextElementSibling;
    }

    var opciones = bloques
      .filter(function (b) {
        return b.classList && b.classList.contains("quiz-option");
      })
      .map(function (b) {
        var texto = (b.textContent || "")
          .replace(/[\u25cb\u25cf\u2714\u2713]/g, "")
          .replace(/^\s+/, "")
          .trim();
        var letra = b.getAttribute("data-letra") ||
          (texto.match(RE_OPCION) || [])[1] || "";
        return { letra: letra, texto: texto, el: b };
      })
      .filter(function (o) {
        return o.letra;
      });
    if (!opciones.length) return null;

    var blockquote = null;
    for (var i = 0; i < bloques.length; i++) {
      if (bloques[i].tagName === "BLOCKQUOTE") {
        blockquote = bloques[i];
        break;
      }
    }
    if (!blockquote) return null;
    var mLetra = (blockquote.textContent || "").trim().match(RE_OPCION);
    if (!mLetra) return null;

    var elEnunciado = [];
    for (var j = 0; j < bloques.length; j++) {
      var b = bloques[j];
      if (b.tagName === "P" && RE_OPCION.test((b.textContent || "").trim())) {
        break;
      }
      if (b.tagName === "BLOCKQUOTE") continue;
      if (b.classList && (b.classList.contains("quiz-option") ||
          b.classList.contains("quiz-check-btn") ||
          b.classList.contains("quiz-result"))) continue;
      elEnunciado.push(b);
    }

    var textoEnunciado = (h3.textContent || "").trim() + "\n" +
      elEnunciado.map(function (e) {
        return (e.textContent || "").trim();
      }).filter(function (t) {
        return t;
      }).join("\n");

    var idTexto = (h3.textContent || "").match(/\d+/);
    return {
      id_pregunta: idTexto ? parseInt(idTexto[0], 10) : 0,
      h3: h3,
      elEnunciado: elEnunciado,
      opciones: opciones,
      respuesta_correcta: opciones.filter(function (o) {
        return o.letra === mLetra[1];
      })[0] || {
        letra: mLetra[1],
        texto: (blockquote.textContent || "").trim()
      },
      letra_correcta: mLetra[1],
      enunciado: limpiarEnunciado(textoEnunciado),
      respuesta_usuario: null,
      es_correcta: null
    };
  }

  function extraerTodas() {
    var raiz =
      document.querySelector('[role="main"]') ||
      document.querySelector("article") ||
      document.body;
    if (!raiz) return [];
    var h3s = Array.prototype.filter.call(
      raiz.querySelectorAll("h3"),
      esPregunta
    );
    var preguntas = [];
    h3s.forEach(function (h3) {
      try {
        var p = recolectarPregunta(h3);
        if (p) preguntas.push(p);
      } catch (e) {
        if (window.console && console.error) console.error(e);
      }
    });
    return preguntas;
  }

  /* ------------------------------------------------------------------ */
  /* Estilos                                                             */
  /* ------------------------------------------------------------------ */
  var CSS =
    "#evaluador-fab{position:fixed;z-index:9000;right:20px;bottom:20px;" +
    "background:#1a73e8;color:#fff;border:none;border-radius:24px;padding:12px 18px;" +
    "font-size:14px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);font-family:inherit}" +
    "#evaluador-fab:hover{background:#1663c4}" +
    "#evaluador-fab .ev-nota{display:block;font-size:11px;opacity:.85;text-align:center}" +
    "#evaluador-fondo{position:fixed;z-index:9300;inset:0;background:rgba(15,25,45,.55);" +
    "display:flex;align-items:center;justify-content:center;padding:16px;font-family:inherit}" +
    "#evaluador-panel{background:#fff;color:#1c2733;border-radius:12px;width:min(94vw,860px);" +
    "max-height:88vh;display:flex;flex-direction:column;overflow:hidden;" +
    "box-shadow:0 12px 40px rgba(0,0,0,.35)}" +
    "#evaluador-panel .ev-cab{background:#1a73e8;color:#fff;padding:10px 18px;" +
    "display:flex;align-items:center;gap:12px}" +
    "#evaluador-panel .ev-titulo{font-weight:bold;font-size:15px;margin-right:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    "#evaluador-panel .ev-cerrar{background:transparent;color:#fff;border:none;font-size:20px;cursor:pointer;line-height:1}" +
    "#evaluador-panel .ev-historial-btn{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.6);" +
    "border-radius:14px;padding:4px 12px;font-size:12px;cursor:pointer;font-family:inherit}" +
    "#evaluador-panel .ev-progress{height:5px;background:#cfe0fb}" +
    "#evaluador-panel .ev-progressbar{height:100%;width:0%;background:#ffffff;transition:width .25s}" +
    "#evaluador-cuerpo{padding:16px 22px;overflow-y:auto}" +
    "#evaluador-cuerpo .ev-qtitle{margin:0 0 8px;font-size:17px}" +
    "#evaluador-cuerpo .ev-opt{display:flex;width:100%;text-align:left;align-items:flex-start;" +
    "border:1px solid #d4dbe6;background:#f7f9fc;color:#1c2733;margin:7px 0;padding:10px 12px;" +
    "border-radius:8px;cursor:pointer;font-size:14px;line-height:1.5;font-family:inherit}" +
    "#evaluador-cuerpo .ev-opt:hover{background:#e8eef7;border-color:#1a73e8}" +
    "#evaluador-cuerpo .ev-opt.ev-opt-selected{background:#1a73e8;color:#fff;border-color:#1a73e8}" +
    "#evaluador-panel .ev-pie{border-top:1px solid #e3e8f0;padding:10px 18px;display:flex;gap:8px;align-items:center}" +
    "#evaluador-panel .ev-pie button{border:none;border-radius:18px;padding:8px 16px;cursor:pointer;" +
    "font-size:14px;font-family:inherit}" +
    "#evaluador-panel .ev-btn-nav{background:#e8eef7;color:#1a73e8}" +
    "#evaluador-panel .ev-btn-nav[disabled]{opacity:.45;cursor:default}" +
    "#evaluador-panel .ev-btn-fin{background:#0a7d2c;color:#fff;margin-left:auto;font-weight:bold}" +
    "#evaluador-overlay{position:fixed;z-index:9500;inset:0;background:rgba(0,0,0,.5);" +
    "display:flex;align-items:center;justify-content:center;font-family:inherit}" +
    "#evaluador-modal{background:#fff;color:#222;border-radius:10px;padding:20px 24px;" +
    "max-width:760px;width:92%;max-height:86vh;overflow:auto;box-shadow:0 6px 20px rgba(0,0,0,.35)}" +
    "#evaluador-modal h2{margin-top:0}" +
    "#evaluador-modal .ev-score{font-size:20px;font-weight:bold;margin-bottom:12px}" +
    "#evaluador-modal table{border-collapse:collapse;width:100%;margin:10px 0}" +
    "#evaluador-modal th,#evaluador-modal td{border:1px solid #d0d5dd;padding:6px 8px;" +
    "text-align:left;font-size:13px}" +
    "#evaluador-modal .ev-ok{color:#0a7d2c;font-weight:bold}" +
    "#evaluador-modal .ev-mal{color:#c62828;font-weight:bold}" +
    "#evaluador-modal .ev-buttons{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}" +
    "#evaluador-modal .ev-buttons button{border:none;border-radius:18px;padding:8px 16px;" +
    "cursor:pointer;font-size:14px;font-family:inherit}" +
    "#evaluador-modal .ev-primario{background:#1a73e8;color:#fff}" +
    "#evaluador-modal .ev-secundario{background:#e8eef7;color:#1a73e8}" +
    "#evaluador-historial-overlay{position:fixed;z-index:9600;inset:0;background:rgba(0,0,0,.45);" +
    "display:flex;align-items:center;justify-content:center;font-family:inherit}" +
    "#evaluador-historial{background:#fff;color:#1c2733;border-radius:12px;width:min(94vw,600px);" +
    "max-height:80vh;overflow:auto;padding:18px 22px;box-shadow:0 12px 40px rgba(0,0,0,.35)}" +
    "#evaluador-historial h2{margin-top:0;font-size:18px}" +
    "#evaluador-historial .ev-h-item{border:1px solid #e3e8f0;border-radius:8px;padding:8px 12px;" +
    "margin:8px 0;display:flex;justify-content:space-between;align-items:center;gap:10px}" +
    "#evaluador-historial .ev-h-datos{display:flex;flex-direction:column}" +
    "#evaluador-historial .ev-h-fecha{font-size:12px;color:#6b7686}" +
    "#evaluador-historial .ev-h-nota{font-weight:bold;color:#1a73e8;font-size:16px;white-space:nowrap}" +
    "#evaluador-historial .ev-h-calif{font-size:12px;color:#6b7686}" +
    "#evaluador-historial .ev-h-vacio{color:#6b7686;font-style:italic}" +
    "#evaluador-historial .ev-h-cerrar{background:#1a73e8;color:#fff;border:none;border-radius:16px;" +
    "padding:8px 16px;cursor:pointer;font-size:13px;font-family:inherit}";

  /* ------------------------------------------------------------------ */
  /* Modo examen (panel autónomo)                                        */
  /* ------------------------------------------------------------------ */

  function pintarPregunta(i) {
    var p = estado.preguntas[i];
    var cuerpo = document.getElementById("evaluador-cuerpo");
    if (!cuerpo) return;
    cuerpo.textContent = "";

    var titulo = document.createElement("h3");
    titulo.className = "ev-qtitle";
    titulo.textContent = "Pregunta " + p.id_pregunta;
    cuerpo.appendChild(titulo);

    // enunciado: clona el DOM ya renderizado (conserva el math de MathJax)
    p.elEnunciado.forEach(function (el) {
      var clon = el.cloneNode(true);
      if (clon.id) clon.removeAttribute("id");
      cuerpo.appendChild(clon);
    });

    p.opciones.forEach(function (o) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ev-opt";
      btn.setAttribute("data-letra", o.letra);
      // clona el contenido de la opción (conserva el math tipografiado)
      if (o.el) {
        Array.prototype.forEach.call(o.el.childNodes, function (n) {
          if (n.nodeType === 3 && !(n.textContent || "").trim()) return;
          if (n.nodeType === 1 && n.classList &&
              n.classList.contains("quiz-radio")) {
            return;
          }
          btn.appendChild(n.cloneNode(true));
        });
      } else {
        btn.textContent = o.texto;
      }
      if (p.respuesta_usuario === o.letra) {
        btn.classList.add("ev-opt-selected");
      }
      btn.addEventListener("click", function () {
        p.respuesta_usuario = o.letra;
        Array.prototype.forEach.call(
          cuerpo.querySelectorAll(".ev-opt"),
          function (b) {
            b.classList.remove("ev-opt-selected");
          }
        );
        btn.classList.add("ev-opt-selected");
      });
      cuerpo.appendChild(btn);
    });

    var prog = panel.querySelector(".ev-prog");
    if (prog) prog.textContent =
      "Pregunta " + (i + 1) + " de " + estado.preguntas.length;
    var pbar = panel.querySelector(".ev-progressbar");
    if (pbar) {
      pbar.style.width =
        Math.round(((i + 1) / estado.preguntas.length) * 100) + "%";
    }
    var prev = panel.querySelector(".ev-btn-prev");
    if (prev) prev.disabled = i <= 0;
    var next = panel.querySelector(".ev-btn-next");
    if (next) next.disabled = i >= estado.preguntas.length - 1;
  }

  function iniciarExamen() {
    if (!estado || !estado.preguntas.length || estado.activo) return;
    estado.activo = true;
    indice = 0;

    estado.preguntas.forEach(function (p) {
      p.respuesta_usuario = null;
      p.es_correcta = null;
    });

    var fondo = document.createElement("div");
    fondo.id = "evaluador-fondo";

    panel = document.createElement("div");
    panel.id = "evaluador-panel";

    var cab = document.createElement("div");
    cab.className = "ev-cab";
    var titulo = document.createElement("span");
    titulo.className = "ev-titulo";
    titulo.textContent = "Evaluaci\u00f3n: " + nombreTema();
    var cerrar = document.createElement("button");
    cerrar.type = "button";
    cerrar.className = "ev-cerrar";
    cerrar.textContent = "\u2715";
    cerrar.title = "Cerrar examen";
    cerrar.addEventListener("click", function () { salirExamen(); });
    var btnHistorial = document.createElement("button");
    btnHistorial.type = "button";
    btnHistorial.className = "ev-historial-btn";
    btnHistorial.textContent = "Historial";
    btnHistorial.addEventListener("click", mostrarHistorial);
    cab.appendChild(titulo);
    cab.appendChild(btnHistorial);
    cab.appendChild(cerrar);

    var progress = document.createElement("div");
    progress.className = "ev-progress";
    var progressbar = document.createElement("div");
    progressbar.className = "ev-progressbar";
    progress.appendChild(progressbar);

    var cuerpo = document.createElement("div");
    cuerpo.id = "evaluador-cuerpo";

    var pie = document.createElement("div");
    pie.className = "ev-pie";
    var prog = document.createElement("span");
    prog.className = "ev-prog";
    prog.style.marginRight = "auto";
    var btnPrev = document.createElement("button");
    btnPrev.type = "button";
    btnPrev.className = "ev-btn-nav ev-btn-prev";
    btnPrev.textContent = "\u2190 Anterior";
    var btnNext = document.createElement("button");
    btnNext.type = "button";
    btnNext.className = "ev-btn-nav ev-btn-next";
    btnNext.textContent = "Siguiente \u2192";
    var btnFin = document.createElement("button");
    btnFin.type = "button";
    btnFin.className = "ev-btn-fin";
    btnFin.textContent = "Finalizar";

    btnPrev.addEventListener("click", function () {
      if (indice > 0) { indice--; pintarPregunta(indice); }
    });
    btnNext.addEventListener("click", function () {
      if (indice < estado.preguntas.length - 1) { indice++; pintarPregunta(indice); }
    });
    btnFin.addEventListener("click", finalizarExamen);

    pie.appendChild(prog);
    pie.appendChild(btnPrev);
    pie.appendChild(btnNext);
    pie.appendChild(btnFin);

    panel.appendChild(cab);
    panel.appendChild(progress);
    panel.appendChild(cuerpo);
    panel.appendChild(pie);

    fondo.appendChild(panel);
    document.body.appendChild(fondo);
    if (fab) fab.style.display = "none";

    pintarPregunta(0);
  }

  function salirExamen(callback) {
    var fondo = document.getElementById("evaluador-fondo");
    if (fondo && fondo.parentNode) fondo.parentNode.removeChild(fondo);
    panel = null;
    // el modal de resultados (mostrarResultados) cuelga del body y debe
    // eliminarse también al salir, o bloquearía los clics del resto
    var res = document.getElementById("evaluador-overlay");
    if (res && res.parentNode) res.parentNode.removeChild(res);
    if (estado) estado.activo = false;
    if (fab) fab.style.display = "";
    if (callback) callback();
  }

  function finalizarExamen() {
    var sinResponder = estado.preguntas.filter(function (p) {
      return !p.respuesta_usuario;
    });
    if (sinResponder.length &&
        !window.confirm(
          "A\u00fan hay " + sinResponder.length +
          " pregunta(s) sin responder. \u00bfFinalizar de todos modos?"
        )) {
      return;
    }
    estado.preguntas.forEach(function (p) {
      p.es_correcta = (p.respuesta_usuario || "") === p.letra_correcta;
    });
    var total = estado.preguntas.length;
    var correctas = estado.preguntas.filter(function (p) {
      return p.es_correcta;
    }).length;
    var calificacion = total
      ? Math.round((correctas * 100 / total) * 100) / 100 : 0;
    var nota = total ? Math.round((correctas * 10 / total) * 10) / 10 : 0;

    var id = nombreTema() + "-" + (new Date()
      .toISOString().replace(/[-T:.Z]/g, "").slice(0, 14));
    guardarResultado({
      id: id,
      tema: nombreTema(),
      fecha: new Date().toISOString(),
      calificacion: calificacion,
      nota: nota,
      total_correctas: correctas,
      total_preguntas: total,
      preguntas: estado.preguntas.map(function (p) {
        return {
          id_pregunta: p.id_pregunta,
          enunciado: p.enunciado,
          opciones: p.opciones.map(function (o) { return o.texto; }),
          respuesta_correcta: p.respuesta_correcta.texto,
          respuesta_usuario: p.respuesta_usuario || null,
          es_correcta: p.es_correcta
        };
      })
    }).then(actualizarNotaFAB).catch(function () {
      /* si no se pudo guardar en IndexedDB, solo se muestra el resultado */
    });

    mostrarResultados(total, correctas, calificacion);
  }

  function formatoFecha(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString("es-ES", {
        day: "2-digit", month: "short", year: "numeric"
      }) + " " + d.toLocaleTimeString("es-ES", {
        hour: "2-digit", minute: "2-digit"
      });
    } catch (e) {
      return iso || "";
    }
  }

  /** Lista el historial de notas del tema en un overlay. */
  function mostrarHistorial() {
    listarHistorial(nombreTema()).then(function (registros) {
      var overlay = document.createElement("div");
      overlay.id = "evaluador-historial-overlay";

      var caja = document.createElement("div");
      caja.id = "evaluador-historial";

      var h2 = document.createElement("h2");
      h2.textContent = "Historial de notas \u2014 " + nombreTema();
      caja.appendChild(h2);

      if (!registros.length) {
        var vacio = document.createElement("p");
        vacio.className = "ev-h-vacio";
        vacio.textContent =
          "A\u00fan no hay evaluaciones guardadas para este tema.";
        caja.appendChild(vacio);
      } else {
        registros.forEach(function (r) {
          var item = document.createElement("div");
          item.className = "ev-h-item";

          var datos = document.createElement("div");
          datos.className = "ev-h-datos";
          var fecha = document.createElement("span");
          fecha.className = "ev-h-fecha";
          fecha.textContent = formatoFecha(r.fecha);
          var calif = document.createElement("span");
          calif.className = "ev-h-calif";
          calif.textContent = r.calificacion + "/100 \u00b7 " +
            r.total_correctas + " de " + r.total_preguntas + " correctas";
          datos.appendChild(fecha);
          datos.appendChild(calif);

          var nota = document.createElement("span");
          nota.className = "ev-h-nota";
          nota.textContent = r.nota + "/10";
          nota.style.color = r.nota >= 7 ? "#0a7d2c"
            : r.nota >= 5 ? "#b26a00" : "#c62828";

          item.appendChild(datos);
          item.appendChild(nota);
          caja.appendChild(item);
        });
      }

      var cerrar = document.createElement("button");
      cerrar.type = "button";
      cerrar.className = "ev-h-cerrar";
      cerrar.textContent = "Cerrar";
      cerrar.addEventListener("click", function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      });
      caja.appendChild(cerrar);

      overlay.appendChild(caja);
      document.body.appendChild(overlay);
    }).catch(function (e) {
      if (window.console && console.error) console.error("ev-historial:", e);
    });
  }

  /** Actualiza (o crea) la nota de la última evaluación en el botón flotante. */
  function actualizarNotaFAB() {
    listarHistorial(nombreTema()).then(function (registros) {
      if (!fab || !registros.length) return;
      var ultimo = registros[0];
      var nota = fab.querySelector(".ev-nota");
      if (!nota) {
        nota = document.createElement("span");
        nota.className = "ev-nota";
        fab.appendChild(nota);
      }
      nota.textContent = "Ultima: " + ultimo.nota + "/10";
    }).catch(function () {});
  }

  function mostrarResultados(total, correctas, calificacion) {
    var overlay = document.createElement("div");
    overlay.id = "evaluador-overlay";

    var modal = document.createElement("div");
    modal.id = "evaluador-modal";

    var h2 = document.createElement("h2");
    h2.textContent = "Resultados";
    var score = document.createElement("p");
    score.className = "ev-score";
    score.textContent =
      "Calificaci\u00f3n: " + calificacion + " / 100  (" + correctas +
      " de " + total + " correctas)";

    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var trHead = document.createElement("tr");
    ["#", "Estado", "Tu respuesta", "Respuesta correcta"].forEach(function (c) {
      var th = document.createElement("th");
      th.textContent = c;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    var tbody = document.createElement("tbody");
    estado.preguntas.forEach(function (p) {
      var tr = document.createElement("tr");
      var tdN = document.createElement("td");
      tdN.textContent = p.id_pregunta;
      var tdE = document.createElement("td");
      tdE.textContent = p.es_correcta ? "Correcta" : "Incorrecta";
      tdE.className = p.es_correcta ? "ev-ok" : "ev-mal";
      var tdU = document.createElement("td");
      var opcionUsuario = p.opciones.filter(function (o) {
        return o.letra === p.respuesta_usuario;
      })[0];
      tdU.textContent = opcionUsuario ? opcionUsuario.texto : "(sin responder)";
      var tdC = document.createElement("td");
      tdC.textContent = p.respuesta_correcta.texto;
      tr.appendChild(tdN);
      tr.appendChild(tdE);
      tr.appendChild(tdU);
      tr.appendChild(tdC);
      tbody.appendChild(tr);
    });
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    var botones = document.createElement("div");
    botones.className = "ev-buttons";
    var btnJson = document.createElement("button");
    btnJson.className = "ev-primario";
    btnJson.textContent = "Descargar JSON";
    var btnRepetir = document.createElement("button");
    btnRepetir.className = "ev-secundario";
    btnRepetir.textContent = "Repetir";
    var btnCerrar = document.createElement("button");
    btnCerrar.className = "ev-secundario";
    btnCerrar.textContent = "Cerrar";

    btnJson.addEventListener("click", descargarJSON);
    btnRepetir.addEventListener("click", function () {
      salirExamen(function () { iniciarExamen(); });
    });
    btnCerrar.addEventListener("click", function () {
      salirExamen();
    });

    botones.appendChild(btnJson);
    botones.appendChild(btnRepetir);
    botones.appendChild(btnCerrar);

    modal.appendChild(h2);
    modal.appendChild(score);
    modal.appendChild(tabla);
    modal.appendChild(botones);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  function descargarJSON() {
    var datos = {
      evaluacion_id: nombreTema() + "-" + (new Date()
        .toISOString().replace(/[-T:.Z]/g, "").slice(0, 14)),
      titulo: "Evaluaci\u00f3n " + nombreTema(),
      usuario: { nombre: "" },
      preguntas: estado.preguntas.map(function (p) {
        return {
          id_pregunta: p.id_pregunta,
          enunciado: p.enunciado,
          opciones: p.opciones.map(function (o) { return o.texto; }),
          respuesta_correcta: p.respuesta_correcta.texto,
          respuesta_usuario: p.respuesta_usuario || null,
          es_correcta: p.es_correcta
        };
      }),
      resultado_final: (function () {
        var total = estado.preguntas.length;
        var correctas = estado.preguntas.filter(function (p) {
          return p.es_correcta;
        }).length;
        return {
          calificacion: total
            ? Math.round((correctas * 100 / total) * 100) / 100 : 0,
          total_correctas: correctas,
          total_preguntas: total
        };
      })()
    };

    var blob = new Blob([JSON.stringify(datos, null, 2)], {
      type: "application/json;charset=utf-8"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = datos.evaluacion_id + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  function crearFAB() {
    if (fab || !estado || !estado.preguntas.length) return;
    fab = document.createElement("button");
    fab.id = "evaluador-fab";
    fab.type = "button";
    fab.textContent = "Iniciar evaluaci\u00f3n";
    fab.addEventListener("click", function () {
      iniciarExamen();
    });
    document.body.appendChild(fab);
    actualizarNotaFAB();
  }

  function init() {
    if (estado) return;
    var preguntas = extraerTodas();
    if (!preguntas.length) return;
    estado = { preguntas: preguntas, activo: false };

    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    crearFAB();
  }

  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    document$.subscribe(function () {
      if (!estado) init();
    });
  }
  if (typeof window !== "undefined" && window) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  window.evaluadorWeb = {
    init: init,
    iniciarExamen: iniciarExamen,
    salirExamen: salirExamen,
    estado: function () { return estado; },
    listarHistorial: listarHistorial,
    guardarResultado: guardarResultado,
    mostrarHistorial: mostrarHistorial
  };
})();