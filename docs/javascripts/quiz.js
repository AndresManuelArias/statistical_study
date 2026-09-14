/**
 * quiz.js
 * Convierte las preguntas escritas en Markdown (formato del evaluador.py)
 * en quizzes interactivos en la web.
 *
 * Formato soportado (idéntico al que parsea evaluador.py):
 *   ### Pregunta 1
 *   <enunciado>
 *   a) opción 1
 *   b) opción 2
 *   c) opción 3
 *   d) opción 4
 *   > **b) ...**      <- respuesta correcta (blockquote)
 *
 * NO modifica los archivos .md: lee el HTML ya generado por mkdocs, con lo
 * que evaluador.py (que lee el Markdown fuente) nunca se ve afectado.
 */
(function () {
  "use strict";

  var RE_PREGUNTA = /^Pregunta\s+\d+$/;
  var RE_OPCION = /^([a-h])\)/;

  function esPregunta(h) {
    return h.tagName === "H3" && RE_PREGUNTA.test((h.textContent || "").trim());
  }

  /** divide un <p> con <br> entre las opciones en filas (array de nodos). */
  function dividirEnFilas(p) {
    var filas = [];
    var actual = [];
    Array.prototype.forEach.call(p.childNodes, function (n) {
      if (n.nodeName === "BR") {
        if (actual.length) {
          filas.push(actual);
          actual = [];
        }
      } else {
        actual.push(n);
      }
    });
    if (actual.length) filas.push(actual);
    return filas
      .map(function (fil) {
        return fil.filter(function (n) {
          return !(n.nodeType === 3 && !(n.textContent || "").trim());
        });
      })
      .filter(function (fil) {
        return fil.length;
      });
  }

  function transformarQuiz(h3) {
    // 1) recolectar hermanos hasta el siguiente <h3> de pregunta
    var bloques = [];
    var el = h3.nextElementSibling;
    while (el && !esPregunta(el)) {
      bloques.push(el);
      var siguiente = el.nextElementSibling;
      el = siguiente;
    }

    // 2) localizar el párrafo de opciones (empieza con "a)")
    var pOpciones = null;
    for (var i = 0; i < bloques.length; i++) {
      var b = bloques[i];
      if (b.tagName === "P" &&
          RE_OPCION.test((b.textContent || "").trim())) {
        pOpciones = b;
        break;
      }
    }
    if (!pOpciones) return;

    // 3) la respuesta correcta está en el blockquote
    var blockquote = null;
    for (var j = 0; j < bloques.length; j++) {
      if (bloques[j].tagName === "BLOCKQUOTE") {
        blockquote = bloques[j];
        break;
      }
    }
    if (!blockquote) return;
    var textoResp = (blockquote.textContent || "").trim();
    var mLetra = textoResp.match(RE_OPCION);
    if (!mLetra) return;
    var letraCorrecta = mLetra[1];

    // 4) ocultar la respuesta (para no "spoilear" el quiz)
    blockquote.style.display = "none";

    // 5) dividir el párrafo de opciones en filas clicables
    var filas = dividirEnFilas(pOpciones);
    if (!filas.length) return;

    var opciones = [];
    filas.forEach(function (nodos) {
      var p = document.createElement("p");
      p.className = "quiz-option";
      p.setAttribute("role", "radio");
      p.setAttribute("tabindex", "0");
      nodos.forEach(function (n) {
        p.appendChild(n);
      });
      var texto = (p.textContent || "").trim();
      var m = texto.match(RE_OPCION);
      if (m) p.setAttribute("data-letra", m[1]);
      pOpciones.parentNode.insertBefore(p, pOpciones);
      opciones.push(p);
    });
    pOpciones.parentNode.removeChild(pOpciones);

    var grupo = "quiz-" + Math.random().toString(36).slice(2, 8);

    function elegir(opt) {
      opciones.forEach(function (o) {
        o.classList.remove("quiz-selected");
        o.style.color = "";
        var radio = o.querySelector(".quiz-radio");
        if (radio) radio.textContent = "\u25CB"; // ○
      });
      opt.classList.add("quiz-selected");
      var radio = opt.querySelector(".quiz-radio");
      if (radio) radio.textContent = "\u25CF"; // ●
    }

    opciones.forEach(function (opt) {
      opt.addEventListener("click", function () {
        elegir(opt);
      });
      opt.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          elegir(opt);
        }
      });
      var marcador = document.createElement("span");
      marcador.className = "quiz-radio";
      marcador.textContent = "\u25CB"; // ○
      opt.insertBefore(marcador, opt.firstChild);
    });

    // 6) botón "Comprobar respuesta" + área de resultado
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-check-btn";
    btn.textContent = "Comprobar respuesta";

    var resultado = document.createElement("p");
    resultado.className = "quiz-result";

    var ultima = opciones[opciones.length - 1];
    ultima.insertAdjacentElement("afterend", btn);
    btn.insertAdjacentElement("afterend", resultado);

    btn.addEventListener("click", function () {
      var seleccionada = null;
      opciones.forEach(function (o) {
        if (o.classList.contains("quiz-selected")) seleccionada = o;
      });
      if (!seleccionada) {
        resultado.textContent = "⚠️ Por favor, selecciona una opción.";
        resultado.style.color = "orange";
        return;
      }
      if (seleccionada.getAttribute("data-letra") === letraCorrecta) {
        resultado.textContent = "✅ ¡Correcto! Acertaste.";
        resultado.style.color = "green";
        opciones.forEach(function (o) {
          if (o.getAttribute("data-letra") === letraCorrecta) {
            o.style.color = "green";
            var radio = o.querySelector(".quiz-radio");
            if (radio) radio.textContent = "\u2714"; // ✔
          } else {
            o.classList.remove("quiz-selected");
          }
        });
      } else {
        resultado.textContent = "❌ Incorrecto. Vuelve a intentarlo.";
        resultado.style.color = "red";
        seleccionada.style.color = "red";
      }
    });

    h3.setAttribute("data-quiz", "hecho");
  }

  function init() {
    var raiz =
      document.querySelector('[role="main"]') ||
      document.querySelector("article") ||
      document.body;
    if (!raiz) return;
    var h3s = Array.prototype.slice.call(
      raiz.querySelectorAll("h3")
    ).filter(esPregunta);

    h3s.forEach(function (h3) {
      if (h3.getAttribute("data-quiz") === "hecho") return;
      try {
        transformarQuiz(h3);
      } catch (e) {
        // no romper el resto de la página si una pregunta falla
        /* eslint-disable no-console */
        if (window.console && console.error) console.error(e);
      }
    });

    // retipografía de fórmulas que hayan quedado dentro de las opciones
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise().catch(function () {});
    }
  }

  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    // tema Material (re-render por navegación instantánea)
    document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Sobra si DOMContentLoaded ya se disparó; es idempotente (data-quiz).
  window.addEventListener("load", init);

  // Expuesto para pruebas (node + jsdom) y depuración.
  window.quizInteractivo = { init: init };
})();