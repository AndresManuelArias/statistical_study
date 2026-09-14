/**
 * grafo-ejercicio.js
 * Ejercicios interactivos de grafos con Cytoscape.js.
 *
 * Convierte un bloque HTML como este en un ejercicio completo:
 *
 *   <div class="grafo-ejercicio"
 *        data-tipo="adyacencia|incidencia"
 *        data-nodos="A,B,C,D"
 *        data-matriz="0,1,1,0|1,0,1,0|1,1,0,1|0,0,1,0">
 *     ... título / instrucciones (markdown o HTML) ...
 *   </div>
 *
 * Genera:
 *   - la tabla 0/1 de la matriz (data del ejercicio)
 *   - el lienzo Cytoscape para CONECTAR los nodos con clics
 *   - botones: Comprobar / Reiniciar / Ayuda y un área de resultado
 *
 * Funciona igual que quiz.js con la navegación instantánea de Material.
 */
(function () {
  "use strict";

  var marcados = 0; // ids únicos para los elementos generados

  /* ---------- utilidades ---------- */

  function parseMatriz(str) {
    return String(str || "")
      .split("|")
      .map(function (fila) {
        return fila.split(",").map(function (v) {
          return Number(v.trim());
        });
      });
  }

  function parseNodos(str) {
    return String(str || "")
      .split(",")
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
  }

  /** índice de un nodo dentro de la lista; -1 si no está. */
  function idxDe(nodos, id) {
    for (var i = 0; i < nodos.length; i++) {
      if (nodos[i] === id) return i;
    }
    return -1;
  }

  /** clave canónica de una arista no dirigida: "idx1-idx2" con idx1<idx2 */
  function claveArista(nodos, a, b) {
    var i = idxDe(nodos, a);
    var j = idxDe(nodos, b);
    return (i < j ? i + "-" + j : j + "-" + i);
  }

  /** aristas esperadas según la matriz. Cada par es [nodoA, nodoB]. */
  function aristasEsperadas(tipo, nodos, matriz) {
    var res = [];
    if (tipo === "incidencia") {
      // Cada fila es una arista; los 1s marcan sus dos extremos.
      for (var f = 0; f < matriz.length; f++) {
        var extremos = [];
        for (var c = 0; c < nodos.length; c++) {
          if (matriz[f][c]) extremos.push(nodos[c]);
        }
        if (extremos.length >= 2) res.push([extremos[0], extremos[1]]);
      }
    } else {
      // Matriz de adyacencia simétrica.
      for (var i = 0; i < nodos.length; i++) {
        for (var j = i + 1; j < nodos.length; j++) {
          if (matriz[i] && matriz[i][j]) res.push([nodos[i], nodos[j]]);
        }
      }
    }
    return res;
  }

  /* ---------- construcción de la tabla ---------- */

  function crearTabla(tipo, nodos, matriz) {
    var tabla = document.createElement("table");
    tabla.className = "ge-tabla";

    var thead = document.createElement("thead");
    var filaEnc = document.createElement("tr");
    var celdaEsq = document.createElement("th");
    celdaEsq.textContent = tipo === "incidencia" ? "arista" : "v\\A";
    filaEnc.appendChild(celdaEsq);
    nodos.forEach(function (n) {
      var th = document.createElement("th");
      th.textContent = n;
      filaEnc.appendChild(th);
    });
    thead.appendChild(filaEnc);
    tabla.appendChild(thead);

    var tbody = document.createElement("tbody");
    if (tipo === "incidencia") {
      matriz.forEach(function (fila, f) {
        var tr = document.createElement("tr");
        var tdEt = document.createElement("td");
        tdEt.className = "ge-etiqueta";
        tdEt.textContent = "e" + (f + 1);
        tr.appendChild(tdEt);
        fila.forEach(function (v) {
          var td = document.createElement("td");
          td.className = v ? "ge-uno" : "ge-cero";
          td.textContent = v;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    } else {
      matriz.forEach(function (fila, i) {
        var tr = document.createElement("tr");
        var tdEt = document.createElement("td");
        tdEt.className = "ge-etiqueta";
        tdEt.textContent = nodos[i];
        tr.appendChild(tdEt);
        fila.forEach(function (v, j) {
          var td = document.createElement("td");
          td.textContent = v;
          if (i === j) {
            td.className = "ge-etiqueta";
          } else {
            td.className = v ? "ge-uno" : "ge-cero";
          }
          td.setAttribute("data-fila", i);
          td.setAttribute("data-col", j);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    }
    tabla.appendChild(tbody);
    return tabla;
  }

  /* ---------- el ejercicio ---------- */

  function crearEjercicio(contenedor) {
    var tipo = contenedor.getAttribute("data-tipo") || "adyacencia";
    if (tipo === "prim") { crearEjercicioPrim(contenedor); return; }
    var nodos = parseNodos(contenedor.getAttribute("data-nodos"));
    var matriz = parseMatriz(contenedor.getAttribute("data-matriz"));
    if (!nodos.length || !matriz.length) return;

    var esperadas = aristasEsperadas(tipo, nodos, matriz);
    var id = "ge-" + (++marcados);

    // 1) tabla con la matriz
    var tabla = crearTabla(tipo, nodos, matriz);
    contenedor.appendChild(tabla);

    // 2) instrucción corta
    var p = document.createElement("p");
    p.className = "ge-instruccion";
    p.innerHTML =
      "🖱️ <strong>Conecta el grafo:</strong> haz clic en un nodo y luego en otro " +
      "para crear la arista. Clic sobre una arista la elimina.";
    contenedor.appendChild(p);

    // 3) lienzo Cytoscape
    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = id + "-lienzo";
    contenedor.appendChild(lienzo);

    // 4) botones + resultado
    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";

    var btnCheck = document.createElement("button");
    btnCheck.type = "button";
    btnCheck.className = "ge-boton ge-boton-comprobar";
    btnCheck.textContent = "✅ Comprobar";

    var btnReset = document.createElement("button");
    btnReset.type = "button";
    btnReset.className = "ge-boton ge-boton-reiniciar";
    btnReset.textContent = "🔄 Reiniciar";

    var btnAyuda = document.createElement("button");
    btnAyuda.type = "button";
    btnAyuda.className = "ge-boton ge-boton-ayuda";
    btnAyuda.textContent = "💡 Ayuda";

    cajaBotones.appendChild(btnCheck);
    cajaBotones.appendChild(btnReset);
    cajaBotones.appendChild(btnAyuda);
    contenedor.appendChild(cajaBotones);

    var resultado = document.createElement("div");
    resultado.className = "ge-resultado";
    contenedor.appendChild(resultado);

    // 5) Cytoscape
    if (typeof cytoscape === "undefined") {
      resultado.textContent = "⚠️ Cytoscape.js no cargó. Revisa extra_javascript.";
      resultado.className = "ge-resultado ge-error";
      return;
    }

    var elements = {
      nodes: nodos.map(function (n) {
        return { data: { id: n, label: n } };
      }),
      edges: []
    };

    var cy = cytoscape({
      container: lienzo,
      elements: elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#3f51b5",
            "border-color": "#283593",
            "border-width": 2,
            label: "data(label)",
            color: "#283593",
            "font-size": 16,
            "text-valign": "bottom",
            "text-margin-y": 8,
            width: 34,
            height: 34
          }
        },
        {
          selector: "node.ge-seleccionado",
          style: {
            "background-color": "#ff9800",
            "border-color": "#e65100",
            "border-width": 3
          }
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#9e9e9e",
            "target-arrow-shape": "none",
            "curve-style": "bezier"
          }
        },
        {
          selector: "edge.ge-correcta",
          style: { "line-color": "#2e7d32", width: 4 }
        },
        {
          selector: "edge.ge-incorrecta",
          style: { "line-color": "#c62828", width: 4, "line-style": "dashed" }
        },
        {
          selector: "edge.ge-sobrante",
          style: { "line-color": "#e65100", width: 4, "line-style": "dashed" }
        }
      ],
      layout: { name: "circle", padding: 40 },
      wheelSensitivity: 0.2,
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: false
    });

    contenedor._cy = cy; // expuesto para pruebas/depuración
    var pendiente = null;

    function limpiarMarcas() {
      cy.edges().removeClass("ge-correcta ge-incorrecta ge-sobrante");
      cy.nodes().removeClass("ge-seleccionado");
      resultado.className = "ge-resultado";
      resultado.textContent = "";
    }

    function toggleArista(a, b) {
      var clave = claveArista(nodos, a, b);
      var esistente = cy.edges("[id='" + clave + "']");
      if (esistente.length) {
        esistente.remove();
      } else {
        cy.add({ data: { id: clave, source: a, target: b } });
      }
      limpiarMarcas();
    }

    cy.on("tap", "node", function (ev) {
      var nodo = ev.target;
      if (pendiente === null) {
        pendiente = nodo.id();
        nodo.addClass("ge-seleccionado");
      } else if (pendiente === nodo.id()) {
        pendiente = null;
        nodo.removeClass("ge-seleccionado");
      } else {
        var a = pendiente;
        pendiente = null;
        toggleArista(a, nodo.id());
      }
    });

    cy.on("tap", "edge", function (ev) {
      ev.target.remove();
      limpiarMarcas();
    });

    // 6) acciones de botones
    btnReset.addEventListener("click", function () {
      cy.remove(cy.edges());
      limpiarMarcas();
      cy.nodes().forEach(function (n) {
        n.style("background-color", "#3f51b5");
        n.style("border-color", "#283593");
      });
    });

    btnAyuda.addEventListener("click", function () {
      var actuales = cy.edges().map(function (e) {
        return claveArista(nodos, e.data("source"), e.data("target"));
      });
      var estable = new Set(actuales);
      var faltan = esperadas.filter(function (par) {
        return !estable.has(claveArista(nodos, par[0], par[1]));
      });
      if (!faltan.length) {
        resultado.textContent = "🎉 Ya están todas las aristas. Pulsa Comprobar.";
        resultado.className = "ge-resultado ge-ok";
      } else {
        var hecho = esperadas.length - faltan.length;
        resultado.textContent =
          "Te faltan " + faltan.length + " de " + esperadas.length +
          " aristas. Conecta: " + faltan.map(function (par) {
            return par[0] + "-" + par[1];
          }).join(", ");
        resultado.className = "ge-resultado ge-error";
      }
    });

    btnCheck.addEventListener("click", function () {
      limpiarMarcas();
      var actuales = cy.edges().map(function (e) {
        return claveArista(nodos, e.data("source"), e.data("target"));
      });
      var conjunto = new Set(actuales);
      var espClaves = esperadas.map(function (par) {
        return claveArista(nodos, par[0], par[1]);
      });
      var espSet = new Set(espClaves);

      var faltan = espClaves.filter(function (k) {
        return !conjunto.has(k);
      });
      var sobrantes = actuales.filter(function (k) {
        return !espSet.has(k);
      });

      cy.edges().forEach(function (e) {
        var k = claveArista(nodos, e.data("source"), e.data("target"));
        if (espSet.has(k)) {
          e.addClass("ge-correcta");
        } else if (sobrantes.indexOf(k) !== -1) {
          e.addClass("ge-sobrante");
        } else {
          e.addClass("ge-incorrecta");
        }
      });

      if (!faltan.length && !sobrantes.length) {
        resultado.textContent =
          "✅ ¡Correcto! Conectaste las " + esperadas.length +
          " aristas. La matriz coincide con el grafo.";
        resultado.className = "ge-resultado ge-ok";
      } else {
        var mensaje = "❌ Aún no coincide. ";
        if (faltan.length) {
          mensaje += "Faltan: " + faltan.map(function (k) {
            var p = k.split("-");
            return nodos[Number(p[0])] + "-" + nodos[Number(p[1])];
          }).join(", ") + ". ";
        }
        if (sobrantes.length) {
          mensaje += "Sobran: " + sobrantes.map(function (k) {
            var p = k.split("-");
            return nodos[Number(p[0])] + "-" + nodos[Number(p[1])];
          }).join(", ") + ".";
        }
        resultado.textContent = mensaje;
        resultado.className = "ge-resultado ge-error";
      }
    });
  }

  /* ---------- inicialización (compatible con Material) ---------- */


  /* ---------- ejercicio interactivo: Algoritmo de Prim ----------
   * El usuario hace clic en las aristas EN ORDEN, como ejecutaría Prim:
   *   - empieza en la semilla (data-semilla)
   *   - en cada paso debe elegir la arista de MENOR PESO que sale del
   *     árbol actual hacia un vértice nuevo (la "frontera")
   *   - si elige bien, el árbol crece; si no, recibe una pista.
   * Params: data-nodos="A,B,C", data-semilla="A",
   *         data-aristas="A-B:7,A-C:5,B-C:3"
   */
  function crearEjercicioPrim(contenedor) {
    var nodos = parseNodos(contenedor.getAttribute("data-nodos"));
    var semilla = (contenedor.getAttribute("data-semilla") || nodos[0]).trim();
    var aristas = (contenedor.getAttribute("data-aristas") || "").split(",")
      .map(function (s) {
        var m = s.trim().match(/^([A-Za-z0-9]+)-([A-Za-z0-9]+):(\d+(?:\.\d+)?)$/);
        if (!m) return null;
        return { u: m[1], v: m[2], w: Number(m[3]) };
      })
      .filter(Boolean);
    if (!nodos.length || !aristas.length) return;

    // clave canónica (orden independiente): "idx1-idx2"
    function clave(a, b) {
      var i = idxDe(nodos, a);
      var j = idxDe(nodos, b);
      return (i < j ? i + "-" + j : j + "-" + i);
    }
    function pesoDe(a, b) {
      for (var k = 0; k < aristas.length; k++) {
        if (clave(aristas[k].u, aristas[k].v) === clave(a, b)) return aristas[k].w;
      }
      return Infinity;
    }
    function aristaPorPar(a, b) {
      for (var k = 0; k < aristas.length; k++) {
        if (clave(aristas[k].u, aristas[k].v) === clave(a, b)) return aristas[k];
      }
      return null;
    }

    var enArbol = {};
    enArbol[semilla] = true;
    var mst = [];           // aristas elegidas
    var costo = 0;

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    titulo.innerHTML = "<strong>Árbol actual:</strong> {" + semilla + "} · " +
                       "<strong>Costo:</strong> 0 · " +
                       "<strong>Faltan:</strong> " + (nodos.length - 1) + " aristas";
    contenedor.appendChild(titulo);

    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = "ge-prim-" + (++marcados) + "-lienzo";
    contenedor.appendChild(lienzo);

    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";
    var btnReiniciar = document.createElement("button");
    btnReiniciar.type = "button";
    btnReiniciar.className = "ge-boton ge-boton-reiniciar";
    btnReiniciar.textContent = "🔄 Reiniciar";
    var btnAyuda = document.createElement("button");
    btnAyuda.type = "button";
    btnAyuda.className = "ge-boton ge-boton-ayuda";
    btnAyuda.textContent = "💡 Ayuda";
    cajaBotones.appendChild(btnReiniciar);
    cajaBotones.appendChild(btnAyuda);
    contenedor.appendChild(cajaBotones);

    var resultado = document.createElement("div");
    resultado.className = "ge-resultado";
    contenedor.appendChild(resultado);

    if (typeof cytoscape === "undefined") {
      resultado.textContent = "⚠️ Cytoscape.js no cargó.";
      resultado.className = "ge-resultado ge-error";
      return;
    }

    var cy = cytoscape({
      container: lienzo,
      elements: {
        nodes: nodos.map(function (n) {
          return { data: { id: n, label: n } };
        }),
        edges: aristas.map(function (a) {
          return { data: { id: clave(a.u, a.v), source: a.u, target: a.v, peso: a.w, label: String(a.w) } };
        })
      },
      style: [
        { selector: "node", style: {
            "background-color": "#3f51b5",
            "border-color": "#283593",
            "border-width": 2,
            label: "data(label)",
            color: "#283593",
            "font-size": 16,
            "text-valign": "bottom",
            "text-margin-y": 8,
            width: 30, height: 30
        }},
        { selector: "node.ge-enarbol", style: {
            "background-color": "#2e7d32",
            "border-color": "#1b5e20",
            "border-width": 4
        }},
        { selector: "node.ge-semilla", style: {
            "background-color": "#ff9800",
            "border-color": "#e65100",
            "border-width": 4
        }},
        { selector: "edge", style: {
            width: 2.5,
            "line-color": "#9e9e9e",
            "curve-style": "bezier",
            label: "data(label)",
            color: "#424242",
            "font-size": 13,
            "text-rotation": "autorotate",
            "text-background-color": "#fff",
            "text-background-opacity": 1,
            "text-background-padding": 2
        }},
        { selector: "edge.ge-frontera", style: {
            "line-color": "#ff9800",
            width: 4,
            "line-style": "dashed"
        }},
        { selector: "edge.ge-mst", style: {
            "line-color": "#2e7d32",
            width: 5
        }},
        { selector: "edge.ge-ciclo", style: {
            "line-color": "#c62828",
            width: 4,
            "line-style": "dashed"
        }}
      ],
      layout: { name: "circle", padding: 40 },
      wheelSensitivity: 0.2,
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: false
    });
    contenedor._cy = cy;

    function repintar() {
      cy.nodes().removeClass("ge-enarbol ge-semilla");
      cy.nodes().forEach(function (n) {
        if (n.id() === semilla) n.addClass("ge-semilla");
        else if (enArbol[n.id()]) n.addClass("ge-enarbol");
      });
      // aristas del MST en verde
      cy.edges().removeClass("ge-mst ge-frontera ge-ciclo");
      mst.forEach(function (e) {
        cy.$("#" + clave(e.u, e.v)).addClass("ge-mst");
      });
      // frontera: aristas que salen del árbol a un vértice nuevo
      aristas.forEach(function (a) {
        var uIn = enArbol[a.u], vIn = enArbol[a.v];
        if ((uIn && !vIn) || (!uIn && vIn)) {
          cy.$("#" + clave(a.u, a.v)).addClass("ge-frontera");
        }
      });
      // estado textual
      var dentro = nodos.filter(function (n) { return enArbol[n]; });
      titulo.innerHTML =
        "<strong>Árbol actual:</strong> {" + dentro.join(", ") + "} · " +
        "<strong>Costo:</strong> " + costo + " · " +
        "<strong>Faltan:</strong> " + (nodos.length - dentro.length) + " aristas";
    }

    function ayuda() {
      // la arista de menor peso que sale del árbol hacia afuera
      var candidatas = [];
      aristas.forEach(function (a) {
        var uIn = enArbol[a.u], vIn = enArbol[a.v];
        if ((uIn && !vIn) || (!uIn && vIn)) candidatas.push(a);
      });
      if (!candidatas.length) {
        resultado.textContent = "🎉 Ya completaste el MST. ¡Pulsa Reiniciar para intentar de nuevo!";
        resultado.className = "ge-resultado ge-ok";
        return;
      }
      var mejor = candidatas.reduce(function (m, a) { return a.w < m.w ? a : m; });
      resultado.innerHTML =
        "💡 La frontera actual tiene estas aristas: " +
        candidatas.map(function (a) { return a.u + "-" + a.v + " (" + a.w + ")"; }).join(", ") +
        ". Prim elige la más barata: <strong>" + mejor.u + "-" + mejor.v + " (" + mejor.w + ")</strong>.";
      resultado.className = "ge-resultado ge-error";
    }

    cy.on("tap", "edge", function (ev) {
      var e = ev.target;
      var a = aristaPorPar(e.data("source"), e.data("target"));
      if (!a) return;
      var uIn = enArbol[a.u], vIn = enArbol[a.v];

      // ¿misma arista ya elegida?
      if (mst.some(function (x) { return clave(x.u, x.v) === clave(a.u, a.v); })) {
        resultado.textContent = "⚠️ Esa arista ya está en tu árbol. Elige otra de la frontera.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ¿ambos vértices fuera? (crearía componente aislado, Prim no hace eso)
      if (!uIn && !vIn) {
        resultado.textContent = "❌ " + a.u + "-" + a.v + " no toca tu árbol: ambos extremos están afuera. Saca la arista de la frontera.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ¿ambos dentro? (crearía ciclo)
      if (uIn && vIn) {
        resultado.textContent = "❌ " + a.u + "-" + a.v + " cierra un ciclo (ambos extremos ya están en el árbol). Prim nunca elige esa.";
        resultado.className = "ge-resultado ge-error";
        return;
      }

      // frontera legítima: un extremo dentro y otro fuera → debe ser el mínimo
      var candidatas = [];
      aristas.forEach(function (x) {
        var xU = enArbol[x.u], xV = enArbol[x.v];
        if ((xU && !xV) || (!xU && xV)) candidatas.push(x);
      });
      var mejor = candidatas.reduce(function (m, x) { return x.w < m.w ? x : m; });

      if (a.w === mejor.w) {
        // ✅ correcto
        mst.push(a);
        costo += a.w;
        if (!uIn) enArbol[a.u] = true;
        if (!vIn) enArbol[a.v] = true;
        repintar();
        resultado.textContent = "✅ ¡Correcto! Agregaste " + a.u + "-" + a.v + " (" + a.w + "). Costo: " + costo + ".";
        resultado.className = "ge-resultado ge-ok";
        if (mst.length === nodos.length - 1) {
          resultado.innerHTML =
            "🎉 <strong>¡Completaste el MST de Prim! Costo total = " + costo + ".</strong> " +
            "Aristas: " + mst.map(function (x) { return x.u + "-" + x.v + "(" + x.w + ")"; }).join(", ");
          resultado.className = "ge-resultado ge-ok";
          return;
        }
      } else {
        resultado.textContent =
          "❌ Casi. Prim no elige " + a.u + "-" + a.v + " (" + a.w + "): hoy la frontera tiene una más barata, " +
          mejor.u + "-" + mejor.v + " (" + mejor.w + ").";
        resultado.className = "ge-resultado ge-error";
      }
    });

    btnReiniciar.addEventListener("click", function () {
      mst = [];
      costo = 0;
      enArbol = {};
      enArbol[semilla] = true;
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      repintar();
    });

    btnAyuda.addEventListener("click", ayuda);

    repintar();
  }


  function init() {
    var raiz =
      document.querySelector('[role="main"]') ||
      document.querySelector("article") ||
      document.body;
    if (!raiz) return;
    Array.prototype.forEach.call(
      raiz.querySelectorAll(".grafo-ejercicio"),
      function (caja) {
        if (caja.getAttribute("data-ge") === "hecho") return;
        caja.setAttribute("data-ge", "hecho");
        try {
          crearEjercicio(caja);
        } catch (e) {
          if (window.console && console.error) console.error(e);
        }
      }
    );
  }

  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  window.addEventListener("load", init);

  window.grafoEjercicio = { init: init };
})();
