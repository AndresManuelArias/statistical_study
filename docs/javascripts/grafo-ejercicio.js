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
    if (tipo === "dijkstra") { crearEjercicioDijkstra(contenedor); return; }
    if (tipo === "kruskal") { crearEjercicioKruskal(contenedor); return; }
    if (tipo === "floyd") { crearEjercicioFloyd(contenedor); return; }
    if (tipo === "flujo") { crearEjercicioFlujo(contenedor); return; }
    if (tipo === "tabla") { crearEjercicioTabla(contenedor); return; }
    if (tipo === "tablaverdad") { crearEjercicioTablaVerdad(contenedor); return; }
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



  /* ---------- ejercicio interactivo: Dijkstra ----------
   * El usuario finaliza vértices haciendo clic en la arista que une el
   * vértice ya finalizado con el SPT. Se precomputa dijkstra real.
   */
  function crearEjercicioDijkstra(contenedor) {
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

    function idxDe(nn, x) { return nn.indexOf(x); }
    function clave(a, b) {
      var i = idxDe(nodos, a), j = idxDe(nodos, b);
      return (i < j ? i + "-" + j : j + "-" + i);
    }
    function aristaPorPar(a, b) {
      for (var k = 0; k < aristas.length; k++) {
        if (clave(aristas[k].u, aristas[k].v) === clave(a, b)) return aristas[k];
      }
      return null;
    }

    // Dijkstra para precomputar distancias y padres
    var dist = {}, padre = {};
    nodos.forEach(function (n) { dist[n] = Infinity; padre[n] = null; });
    dist[semilla] = 0;
    var visitado = {};
    for (var i = 0; i < nodos.length; i++) {
      var u = null, minD = Infinity;
      nodos.forEach(function (n) {
        if (!visitado[n] && dist[n] < minD) { minD = dist[n]; u = n; }
      });
      if (u === null) break;
      visitado[u] = true;
      aristas.forEach(function (a) {
        var v = null;
        if (a.u === u && !visitado[a.v]) v = a.v;
        if (a.v === u && !visitado[a.u]) v = a.u;
        if (v !== null && dist[u] + a.w < dist[v]) {
          dist[v] = dist[u] + a.w;
          padre[v] = u;
        }
      });
    }

    var finalizados = {};
    finalizados[semilla] = true;
    var orden = [semilla];

    // --- UI (igual que prim) ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = "ge-dijkstra-" + (++marcados) + "-lienzo";
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
            "background-color": "#3f51b5", "border-color": "#283593", "border-width": 2,
            label: "data(label)", color: "#283593", "font-size": 16,
            "text-valign": "bottom", "text-margin-y": 8, width: 30, height: 30
        }},
        { selector: "node.ge-finalizado", style: {
            "background-color": "#2e7d32", "border-color": "#1b5e20", "border-width": 4
        }},
        { selector: "node.ge-semilla", style: {
            "background-color": "#ff9800", "border-color": "#e65100", "border-width": 4
        }},
        { selector: "edge", style: {
            width: 2.5, "line-color": "#9e9e9e", "curve-style": "bezier",
            label: "data(label)", color: "#424242", "font-size": 13,
            "text-rotation": "autorotate", "text-background-color": "#fff",
            "text-background-opacity": 1, "text-background-padding": 2
        }},
        { selector: "edge.ge-frontera", style: {
            "line-color": "#ff9800", width: 4, "line-style": "dashed"
        }},
        { selector: "edge.ge-mst", style: { "line-color": "#2e7d32", width: 5 }},
        { selector: "edge.ge-ciclo", style: {
            "line-color": "#c62828", width: 4, "line-style": "dashed"
        }}
      ],
      layout: { name: "circle", padding: 40 },
      wheelSensitivity: 0.2,
      boxSelectionEnabled: false
    });
    contenedor._cy = cy;

    function siguiente() {
      var sig = null, minD = Infinity;
      nodos.forEach(function (n) {
        if (!finalizados[n] && dist[n] < minD) { minD = dist[n]; sig = n; }
      });
      return sig;
    }

    function repintar() {
      cy.nodes().removeClass("ge-finalizado ge-semilla");
      cy.nodes().forEach(function (n) {
        if (n.id() === semilla) n.addClass("ge-semilla");
        else if (finalizados[n.id()]) {
          n.addClass("ge-finalizado");
          n.data("label", n.id() + " (" + dist[n.id()] + ")");
        }
      });
      cy.edges().removeClass("ge-mst ge-frontera ge-ciclo");
      // aristas del SPT (padre -> hijo) para los finalizados

      nodos.forEach(function (n) {
        if (n !== semilla && finalizados[n] && padre[n] !== null) {
          cy.$("#" + clave(padre[n], n)).addClass("ge-mst");
        }
      });
      // frontera: aristas salientes de finalizados hacia no finalizados
      aristas.forEach(function (a) {
        var uIn = finalizados[a.u], vIn = finalizados[a.v];
        if ((uIn && !vIn) || (!uIn && vIn)) {
          cy.$("#" + clave(a.u, a.v)).addClass("ge-frontera");
        }
      });
      var sig = siguiente();
      var fin = nodos.filter(function (n) { return finalizados[n]; });
      titulo.innerHTML =
        "<strong>Finalizados:</strong> {" + fin.join(", ") + "} · " +
        (sig ? "<strong>Siguiente:</strong> " + sig + " (dist " + dist[sig] + ") vía " + padre[sig] + "-" + sig
             : "🎉 ¡todos finalizados!");
    }

    function ayuda() {
      var sig = siguiente();
      if (!sig) {
        resultado.innerHTML = "🎉 ¡Completaste todos los vértices! Distancias: " +
          nodos.map(function (n) { return n + "=" + dist[n]; }).join(", ") + ". " +
          "Ruta a G (" + dist["G"] + "): " + (padre["G"] ? padre["G"] + " → " : "") + "G";
        resultado.className = "ge-resultado ge-ok";
        return;
      }
      resultado.innerHTML =
        "💡 El siguiente vértice a finalizar es <strong>" + sig + " (dist " + dist[sig] + ")</strong>. " +
        "Haz clic en la arista <strong>" + padre[sig] + "-" + sig + "</strong>.";
      resultado.className = "ge-resultado ge-error";
    }

    cy.on("tap", "edge", function (ev) {
      var e = ev.target;
      var a = aristaPorPar(e.data("source"), e.data("target"));
      if (!a) return;
      var uIn = finalizados[a.u], vIn = finalizados[a.v];
      var sig = siguiente();
      if (!sig) return;

      if (uIn && vIn) {
        resultado.textContent = "⚠️ Ambos vértices ya están finalizados. Elige una arista de la frontera.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      if (!uIn && !vIn) {
        resultado.textContent = "❌ Ninguno de los dos extremos está finalizado. Dijkstra trabaja desde la frontera.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // un extremo finalizado, otro no
      var extNuevo = uIn ? a.v : a.u;
      if (extNuevo !== sig) {
        resultado.textContent =
          "❌ Casi. Dijkstra finaliza primero el de <strong>menor</strong> distancia: " + sig +
          " (" + dist[sig] + "), no " + extNuevo + " (" + dist[extNuevo] + ").";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // es el siguiente correcto; verificar que la arista es la del padre
      if (a.u !== padre[sig] && a.v !== padre[sig]) {
        resultado.textContent =
          "❌ Sí, toca finalizar " + sig + ", pero por la arista de su padre: <strong>" +
          padre[sig] + "-" + sig + "</strong>.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ✅ correcto
      if (!uIn) finalizados[a.u] = true;
      if (!vIn) finalizados[a.v] = true;
      orden.push(sig);
      repintar();
      resultado.textContent =
        "✅ ¡Correcto! Finalizaste " + sig + " con distancia " + dist[sig] + " desde " + semilla + ".";
      resultado.className = "ge-resultado ge-ok";
      if (nodos.every(function (n) { return finalizados[n]; })) {
        resultado.innerHTML =
          "🎉 <strong>¡Completaste el SPT de Dijkstra!</strong> Distancias desde " + semilla + ": " +
          nodos.map(function (n) { return n + "=" + dist[n]; }).join(", ") + ". " +
          "La ruta más corta a G es <strong>A → D → F → G = " + dist["G"] + "</strong>.";
        resultado.className = "ge-resultado ge-ok";
      }
    });

    btnReiniciar.addEventListener("click", function () {
      finalizados = {};
      finalizados[semilla] = true;
      orden = [semilla];
      cy.nodes().forEach(function (n) { n.data("label", n.id()); });
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      repintar();
    });
    btnAyuda.addEventListener("click", ayuda);
    repintar();
  }



  /* ---------- ejercicio interactivo: Kruskal ----------
   * El usuario agrega aristas de menor peso a mayor, sin formar ciclos.
   * union-find (DSU) para detectar ciclos; acepta empates de peso mínimo.
   */
  function crearEjercicioKruskal(contenedor) {
    var nodos = parseNodos(contenedor.getAttribute("data-nodos"));
    var aristas = (contenedor.getAttribute("data-aristas") || "").split(",")
      .map(function (s) {
        var m = s.trim().match(/^([A-Za-z0-9]+)-([A-Za-z0-9]+):(\d+(?:\.\d+)?)$/);
        if (!m) return null;
        return { u: m[1], v: m[2], w: Number(m[3]) };
      })
      .filter(Boolean);
    if (!nodos.length || !aristas.length) return;

    function idxDe(nn, x) { return nn.indexOf(x); }
    function clave(a, b) {
      var i = idxDe(nodos, a), j = idxDe(nodos, b);
      return (i < j ? i + "-" + j : j + "-" + i);
    }
    function aristaPorPar(a, b) {
      for (var k = 0; k < aristas.length; k++) {
        if (clave(aristas[k].u, aristas[k].v) === clave(a, b)) return aristas[k];
      }
      return null;
    }

    var mst = [];       // aristas elegidas
    var costo = 0;

    // union-find
    var dsuPadre;
    function dsuInit() {
      dsuPadre = {};
      nodos.forEach(function (n) { dsuPadre[n] = n; });
    }
    function dsuFind(x) {
      while (dsuPadre[x] !== x) { dsuPadre[x] = dsuPadre[dsuPadre[x]]; x = dsuPadre[x]; }
      return x;
    }
    function dsuUnir(a, b) {
      var ra = dsuFind(a), rb = dsuFind(b);
      if (ra === rb) return false;
      dsuPadre[ra] = rb;
      return true;
    }
    function formaCiclo(a) {
      // ¿unir a.u y a.v formaría ciclo con el mst actual?
      var p = {};
      nodos.forEach(function (n) { p[n] = n; });
      function f(x) { while (p[x] !== x) { p[x] = p[p[x]]; x = p[x]; } return x; }
      function un(x, y) { var rx = f(x), ry = f(y); if (rx === ry) return false; p[rx] = ry; return true; }
      mst.forEach(function (e) { un(e.u, e.v); });
      return !un(a.u, a.v);
    }

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = "ge-kruskal-" + (++marcados) + "-lienzo";
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
            "background-color": "#3f51b5", "border-color": "#283593", "border-width": 2,
            label: "data(label)", color: "#283593", "font-size": 16,
            "text-valign": "bottom", "text-margin-y": 8, width: 30, height: 30
        }},
        { selector: "edge", style: {
            width: 2.5, "line-color": "#9e9e9e", "curve-style": "bezier",
            label: "data(label)", color: "#424242", "font-size": 13,
            "text-rotation": "autorotate", "text-background-color": "#fff",
            "text-background-opacity": 1, "text-background-padding": 2
        }},
        { selector: "edge.ge-mst", style: { "line-color": "#2e7d32", width: 5 }},
        { selector: "edge.ge-ciclo", style: {
            "line-color": "#c62828", width: 4, "line-style": "dashed"
        }},
        { selector: "edge.ge-sugerida", style: {
            "line-color": "#ff9800", width: 4, "line-style": "dashed"
        }}
      ],
      layout: { name: "circle", padding: 40 },
      wheelSensitivity: 0.2,
      boxSelectionEnabled: false
    });
    contenedor._cy = cy;

    function candidatasValidas() {
      // aristas no elegidas que NO forman ciclo
      return aristas.filter(function (a) {
        if (mst.some(function (x) { return clave(x.u, x.v) === clave(a.u, a.v); })) return false;
        return !formaCiclo(a);
      });
    }
    function repintar() {
      cy.edges().removeClass("ge-mst ge-ciclo ge-sugerida");
      mst.forEach(function (e) { cy.$("#" + clave(e.u, e.v)).addClass("ge-mst"); });
      // hermanar conexos: pintar nodos según componente
      var comp = {};
      nodos.forEach(function (n) { comp[n] = dsuFind(n); });
      cy.nodes().forEach(function (n) {
        n.style("border-color", "#283593");
        n.style("border-width", 2);
      });
      var sugerida = siguienteSugerida();
      if (sugerida) cy.$("#" + clave(sugerida.u, sugerida.v)).addClass("ge-sugerida");
      var unidas = mst.length;
      titulo.innerHTML =
        "<strong>Elegidas:</strong> " + unidas + "/" + (nodos.length - 1) + " aristas · " +
        "<strong>Costo:</strong> " + costo + " · " +
        (sugerida ? "<strong>Sugerida:</strong> " + sugerida.u + "-" + sugerida.v + " (" + sugerida.w + ")"
                  : "🎉 MST completo");
    }
    function siguienteSugerida() {
      var validas = candidatasValidas();
      if (!validas.length) return null;
      var minW = Infinity;
      validas.forEach(function (a) { if (a.w < minW) minW = a.w; });
      var men = validas.filter(function (a) { return a.w === minW; });
      return men[0];
    }
    function ayuda() {
      var s = siguienteSugerida();
      if (!s) {
        resultado.innerHTML = "🎉 ¡MST completo! Costo total = <strong>39</strong>. " +
          "Aristas: " + mst.map(function (x) { return x.u + "-" + x.v + "(" + x.w + ")"; }).join(", ");
        resultado.className = "ge-resultado ge-ok";
        return;
      }
      var validas = candidatasValidas();
      var minW = Infinity;
      validas.forEach(function (a) { if (a.w < minW) minW = a.w; });
      var pos = validas.filter(function (a) { return a.w === minW; })
        .map(function (a) { return a.u + "-" + a.v + " (" + a.w + ")"; });
      resultado.innerHTML =
        "💡 Kruskal va de barato a caro. Las aristas del peso mínimo (" + minW + ") que no forman ciclo: " +
        pos.join(", ") + ".";
      resultado.className = "ge-resultado ge-error";
    }

    cy.on("tap", "edge", function (ev) {
      var e = ev.target;
      var a = aristaPorPar(e.data("source"), e.data("target"));
      if (!a) return;
      // ¿ya elegida?
      if (mst.some(function (x) { return clave(x.u, x.v) === clave(a.u, a.v); })) {
        resultado.textContent = "⚠️ Esa arista ya está en tu MST.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ¿forma ciclo?
      if (formaCiclo(a)) {
        resultado.textContent =
          "❌ " + a.u + "-" + a.v + " (" + a.w + ") formaría un ciclo: ambos extremos ya están conectados.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // peso mínimo entre candidatas válidas
      var validas = candidatasValidas();   // incluye a
      var minW = Infinity;
      validas.forEach(function (x) { if (x.w < minW) minW = x.w; });
      if (a.w > minW) {
        var otras = validas.filter(function (x) { return x.w === minW; });
        resultado.textContent =
          "❌ Kruskal ordena por peso: primero va " +
          otras.map(function (x) { return x.u + "-" + x.v + " (" + x.w + ")"; }).join(" o ") +
          ", no " + a.u + "-" + a.v + " (" + a.w + ").";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ✅ correcta
      mst.push(a);
      costo += a.w;
      dsuUnir(a.u, a.v);
      repintar();
      resultado.textContent = "✅ ¡Correcto! Agregaste " + a.u + "-" + a.v + " (" + a.w + "). Costo: " + costo + ".";
      resultado.className = "ge-resultado ge-ok";
      if (mst.length === nodos.length - 1) {
        resultado.innerHTML =
          "🎉 <strong>¡Completaste el MST de Kruskal! Costo total = " + costo + ".</strong> " +
          "Aristas: " + mst.map(function (x) { return x.u + "-" + x.v + "(" + x.w + ")"; }).join(", ");
        resultado.className = "ge-resultado ge-ok";
      }
    });

    btnReiniciar.addEventListener("click", function () {
      mst = [];
      costo = 0;
      dsuInit();
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      repintar();
    });
    btnAyuda.addEventListener("click", ayuda);

    dsuInit();
    repintar();
  }



  /* ---------- ejercicio interactivo: Floyd-Warshall ----------
   * El usuario construye la ruta más corta entre pares de ciudades
   * (aristas dirigidas). Se precomputa Floyd con matriz "siguiente"
   * para conocer distancias óptimas y reconstruir la ruta en la ayuda.
   */
  function crearEjercicioFloyd(contenedor) {
    var nodos = parseNodos(contenedor.getAttribute("data-nodos"));
    var aristas = (contenedor.getAttribute("data-aristas") || "").split(",")
      .map(function (s) {
        var m = s.trim().match(/^([A-Za-z0-9]+)-([A-Za-z0-9]+):(\d+(?:\.\d+)?)$/);
        if (!m) return null;
        return { u: m[1], v: m[2], w: Number(m[3]) };
      })
      .filter(Boolean);
    var pares = (contenedor.getAttribute("data-pares") || "")
      .split(",").map(function (s) { return s.trim(); })
      .map(function (s) { var p = s.split("-"); return { o: p[0], d: p[1] }; })
      .filter(function (p) { return p.o && p.d; });
    if (!nodos.length || !aristas.length || !pares.length) return;

    function idxDe(nn, x) { return nn.indexOf(x); }
    // Floyd con matriz next para reconstruir rutas
    var n = nodos.length, INF = Infinity;
    var D = [], next = [];
    for (var i = 0; i < n; i++) {
      D.push(new Array(n).fill(INF));
      next.push(new Array(n).fill(null));
      D[i][i] = 0;
    }
    aristas.forEach(function (a) {
      var i = idxDe(nodos, a.u), j = idxDe(nodos, a.v);
      if (a.w < D[i][j]) { D[i][j] = a.w; next[i][j] = j; }
    });
    for (var k = 0; k < n; k++)
      for (var i = 0; i < n; i++)
        for (var j = 0; j < n; j++)
          if (D[i][k] + D[k][j] < D[i][j]) {
            D[i][j] = D[i][k] + D[k][j];
            next[i][j] = next[i][k];
          }
    function rutaOptima(o, d) {
      var i = idxDe(nodos, o), j = idxDe(nodos, d);
      if (next[i][j] === null) return null;
      var r = [o];
      while (i !== j) { i = next[i][j]; r.push(nodos[i]); }
      return r;
    }

    var indicePar = 0;
    var camino = [];      // aristas del camino actual
    var costo = 0;
    var actual;           // ciudad donde estás parado

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = "ge-floyd-" + (++marcados) + "-lienzo";
    contenedor.appendChild(lienzo);

    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";
    var btnReiniciar = document.createElement("button");
    btnReiniciar.type = "button";
    btnReiniciar.className = "ge-boton ge-boton-reiniciar";
    btnReiniciar.textContent = "🔄 Reiniciar";
    var btnDeshacer = document.createElement("button");
    btnDeshacer.type = "button";
    btnDeshacer.className = "ge-boton ge-boton-reiniciar";
    btnDeshacer.textContent = "↩️ Quitar última";
    var btnAyuda = document.createElement("button");
    btnAyuda.type = "button";
    btnAyuda.className = "ge-boton ge-boton-ayuda";
    btnAyuda.textContent = "💡 Ayuda";
    cajaBotones.appendChild(btnReiniciar);
    cajaBotones.appendChild(btnDeshacer);
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

    var edgeId = 0;
    var cy = cytoscape({
      container: lienzo,
      elements: {
        nodes: nodos.map(function (nn) {
          return { data: { id: nn, label: nn } };
        }),
        edges: aristas.map(function (a) {
          return { data: { id: "e" + (edgeId++), source: a.u, target: a.v, peso: a.w, label: String(a.w) } };
        })
      },
      style: [
        { selector: "node", style: {
            "background-color": "#3f51b5", "border-color": "#283593", "border-width": 2,
            label: "data(label)", color: "#283593", "font-size": 16,
            "text-valign": "bottom", "text-margin-y": 8, width: 30, height: 30
        }},
        { selector: "node.ge-inicio", style: {
            "background-color": "#ff9800", "border-color": "#e65100", "border-width": 4
        }},
        { selector: "node.ge-destino", style: {
            "background-color": "#c62828", "border-color": "#8e0000", "border-width": 4
        }},
        { selector: "node.ge-actual", style: {
            "border-color": "#ff9800", "border-width": 5
        }},
        { selector: "edge", style: {
            width: 2.5, "line-color": "#9e9e9e", "curve-style": "bezier",
            "target-arrow-shape": "triangle", "target-arrow-color": "#9e9e9e",
            label: "data(label)", color: "#424242", "font-size": 13,
            "text-rotation": "autorotate", "text-background-color": "#fff",
            "text-background-opacity": 1, "text-background-padding": 2
        }},
        { selector: "edge.ge-mst", style: { "line-color": "#2e7d32", "target-arrow-color": "#2e7d32", width: 5 }},
        { selector: "edge.ge-error", style: { "line-color": "#c62828", "target-arrow-color": "#c62828", width: 4 }}
      ],
      layout: { name: "circle", padding: 50 },
      wheelSensitivity: 0.2,
      boxSelectionEnabled: false
    });
    contenedor._cy = cy;

    function parActual() { return pares[indicePar]; }
    function costoOptimo() {
      var p = parActual();
      return D[idxDe(nodos, p.o)][idxDe(nodos, p.d)];
    }
    function repintar() {
      var p = parActual();
      cy.nodes().removeClass("ge-inicio ge-destino ge-actual");
      cy.nodes("#" + p.o).addClass("ge-inicio");
      cy.nodes("#" + p.d).addClass("ge-destino");
      if (actual) cy.nodes("#" + actual).addClass("ge-actual");
      cy.edges().removeClass("ge-mst ge-error");
      camino.forEach(function (e) {
        cy.$("#" + e.id).addClass("ge-mst");
      });
      titulo.innerHTML =
        "<strong>Par " + (indicePar + 1) + "/" + pares.length + ":</strong> " + p.o + " → " + p.d +
        " · <strong>Óptimo:</strong> " + costoOptimo() +
        " · <strong>Vas:</strong> " + (camino.length ? costo + "" : "sin empezar") +
        (actual ? " (estás en " + actual + ")" : "");
    }

    function ayuda() {
      var p = parActual();
      var r = rutaOptima(p.o, p.d);
      resultado.innerHTML =
        "💡 La ruta más corta de " + p.o + " a " + p.d + " es <strong>" +
        (r ? r.join(" → ") : "—") + " = " + costoOptimo() + "</strong>. " +
        "Haz clic en la primera arista de ese camino (" + r[0] + " → " + r[1] + ").";
      resultado.className = "ge-resultado ge-error";
    }

    cy.on("tap", "edge", function (ev) {
      var e = ev.target;
      // encontrar la arista por sus datos (source/target/peso)
      var ar = aristas.filter(function (x) {
        return x.u === e.data("source") && x.v === e.data("target") && x.w === Number(e.data("peso"));
      })[0];
      if (!ar) return;
      var p = parActual();
      // ¿ya en el camino?
      if (camino.some(function (x) { return x.u === ar.u && x.v === ar.v; })) {
        resultado.textContent = "⚠️ Esa arista ya la usaste en esta ruta.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      if (!actual) {
        if (ar.u !== p.o) {
          resultado.textContent = "❌ Debes empezar en " + p.o + ". Elige una arista que salga de " + p.o + ".";
          resultado.className = "ge-resultado ge-error";
          return;
        }
      } else {
        if (ar.u !== actual) {
          resultado.textContent = "❌ Estás en " + actual + ". Elige una arista que salga de " + actual + " (empezó en " + ar.u + ").";
          resultado.className = "ge-resultado ge-error";
          return;
        }
      }
      // ciclo local: ¿volver a un nodo ya visitado?
      var visitados = {};
      visitados[p.o] = true;
      camino.forEach(function (x) { visitados[x.v] = true; });
      if (visitados[ar.v]) {
        resultado.textContent = "❌ Esa arista te devuelve a una ciudad ya visitada (formarías un ciclo).";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      camino.push({ u: ar.u, v: ar.v, w: ar.w, id: e.id() });
      costo += ar.w;
      actual = ar.v;
      repintar();
      if (ar.v === p.d) {
        var opt = costoOptimo();
        if (costo === opt) {
          resultado.textContent = "✅ ¡Correcto! " + p.o + " → " + p.d + " = " + costo + " (óptimo).";
          resultado.className = "ge-resultado ge-ok";
          indicePar++;
          camino = []; costo = 0; actual = null;
          if (indicePar >= pares.length) {
            resultado.innerHTML =
              "🎉 <strong>¡Completaste Floyd-Warshall para todos los pares!</strong> " +
              "Distancias: A→C=7, A→D=9, B→D=5. " +
              "Nota cómo el atajo A→B→C→D (9) es mucho mejor que el vuelo directo (20).";
            resultado.className = "ge-resultado ge-ok";
            return;
          }
          repintar();
          var sig = parActual();
          resultado.textContent += " Siguiente par: " + sig.o + " → " + sig.d + ".";
        } else {
          var r = rutaOptima(p.o, p.d);
          resultado.innerHTML =
            "❌ Llegaste con costo <strong>" + costo + "</strong>, pero Floyd encuentra <strong>" + opt + "</strong> via " +
            (r ? r.join(" → ") : "—") + ". Reinicia el par o revisa la ayuda.";
          resultado.className = "ge-resultado ge-error";
          camino = []; costo = 0; actual = null;
          repintar();
        }
      } else if (costo > costoOptimo()) {
        resultado.textContent = "⚠️ Ojo: tu recorrido ya acumula " + costo + ", más que el óptimo (" + costoOptimo() + "). Quizá te convenga deshacer.";
        resultado.className = "ge-resultado ge-error";
      } else {
        resultado.textContent = "➡️ Vas bien: " + costo + " acumulados. Sigue hacia " + p.d + ".";
        resultado.className = "ge-resultado ge-ok";
      }
    });

    btnReiniciar.addEventListener("click", function () {
      indicePar = 0; camino = []; costo = 0; actual = null;
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      repintar();
    });
    btnDeshacer.addEventListener("click", function () {
      var ult = camino.pop();
      if (ult) { costo -= ult.w; actual = camino.length ? camino[camino.length - 1].v : null; }
      repintar();
      resultado.textContent = "↩️ Quité la última arista. Sigue tú.";
      resultado.className = "ge-resultado";
    });
    btnAyuda.addEventListener("click", ayuda);
    repintar();
  }



  /* ---------- ejercicio interactivo: Flujo máximo (Ford-Fulkerson) ----------
   * El usuario elige caminos aumentantes s→t clic a clic; el sistema
   * calcula el cuello de botella, actualiza residuales y, cuando BFS
   * ya no encuentra camino, muestra flujo máximo + corte mínimo.
   */
  function crearEjercicioFlujo(contenedor) {
    var nodos = parseNodos(contenedor.getAttribute("data-nodos"));
    var fuente = (contenedor.getAttribute("data-fuente") || "s").trim();
    var sumidero = (contenedor.getAttribute("data-sumidero") || "t").trim();
    var aristas = (contenedor.getAttribute("data-aristas") || "").split(",")
      .map(function (s) {
        var m = s.trim().match(/^([A-Za-z0-9]+)-([A-Za-z0-9]+):(\d+(?:\.\d+)?)$/);
        if (!m) return null;
        return { id: "", u: m[1], v: m[2], cap: Number(m[3]) };
      })
      .filter(Boolean);
    aristas.forEach(function (a, i) { a.id = "f" + i; });
    if (!nodos.length || !aristas.length) return;

    var capRes = {};   // capacidad residual por id
    var flujo = {};    // flujo acumulado por id
    aristas.forEach(function (a) { capRes[a.id] = a.cap; flujo[a.id] = 0; });

    var camino = [];   // aristas del camino aumentante actual
    var actual = fuente;
    var flujoTotal = 0;

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var lienzo = document.createElement("div");
    lienzo.className = "ge-lienzo";
    lienzo.id = "ge-flujo-" + (++marcados) + "-lienzo";
    contenedor.appendChild(lienzo);

    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";
    var btnReiniciar = document.createElement("button");
    btnReiniciar.type = "button";
    btnReiniciar.className = "ge-boton ge-boton-reiniciar";
    btnReiniciar.textContent = "🔄 Reiniciar";
    var btnDeshacer = document.createElement("button");
    btnDeshacer.type = "button";
    btnDeshacer.className = "ge-boton ge-boton-reiniciar";
    btnDeshacer.textContent = "↩️ Quitar última";
    var btnAyuda = document.createElement("button");
    btnAyuda.type = "button";
    btnAyuda.className = "ge-boton ge-boton-ayuda";
    btnAyuda.textContent = "💡 Ayuda";
    cajaBotones.appendChild(btnReiniciar);
    cajaBotones.appendChild(btnDeshacer);
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
        nodes: nodos.map(function (nn) {
          return { data: { id: nn, label: nn } };
        }),
        edges: aristas.map(function (a) {
          return { data: { id: a.id, source: a.u, target: a.v, cap: a.cap, label: String(a.cap) } };
        })
      },
      style: [
        { selector: "node", style: {
            "background-color": "#3f51b5", "border-color": "#283593", "border-width": 2,
            label: "data(label)", color: "#283593", "font-size": 16,
            "text-valign": "bottom", "text-margin-y": 8, width: 32, height: 32
        }},
        { selector: "node.ge-fuente", style: {
            "background-color": "#ff9800", "border-color": "#e65100", "border-width": 4
        }},
        { selector: "node.ge-sumidero", style: {
            "background-color": "#c62828", "border-color": "#8e0000", "border-width": 4
        }},
        { selector: "edge", style: {
            width: 2.5, "line-color": "#9e9e9e", "curve-style": "bezier",
            "target-arrow-shape": "triangle", "target-arrow-color": "#9e9e9e",
            label: "data(label)", color: "#424242", "font-size": 13,
            "text-rotation": "autorotate", "text-background-color": "#fff",
            "text-background-opacity": 1, "text-background-padding": 2
        }},
        { selector: "edge.ge-mst", style: { "line-color": "#2e7d32", "target-arrow-color": "#2e7d32", width: 5 }},
        { selector: "edge.ge-saturada", style: { "line-color": "#c62828", "target-arrow-color": "#c62828", width: 4 }},
        { selector: "edge.ge-camino", style: { "line-color": "#ff9800", "target-arrow-color": "#ff9800", width: 5 }}
      ],
      layout: { name: "circle", padding: 50 },
      wheelSensitivity: 0.2,
      boxSelectionEnabled: false
    });
    contenedor._cy = cy;

    function bfsAlcanzables() {
      var seen = {};
      seen[fuente] = true;
      var cola = [fuente];
      while (cola.length) {
        var u = cola.pop();
        aristas.forEach(function (a) {
          if (a.u === u && capRes[a.id] > 0 && !seen[a.v]) {
            seen[a.v] = true;
            cola.push(a.v);
          }
        });
      }
      return seen;
    }
    function repintar() {
      cy.nodes().forEach(function (n) {
        n.removeClass("ge-fuente ge-sumidero");
        if (n.id() === fuente) n.addClass("ge-fuente");
        if (n.id() === sumidero) n.addClass("ge-sumidero");
      });
      cy.edges().removeClass("ge-mst ge-saturada ge-camino");
      aristas.forEach(function (a) {
        var e = cy.$("#" + a.id);
        e.data("label", flujo[a.id] + "/" + a.cap);
        if (flujo[a.id] > 0) e.addClass("ge-mst");
        if (capRes[a.id] === 0) e.addClass("ge-saturada");
      });
      // camino actual resaltado
      camino.forEach(function (a) { cy.$("#" + a.id).addClass("ge-camino"); });
      titulo.innerHTML =
        "<strong>Flujo total:</strong> " + flujoTotal +
        " · <strong>Estás en:</strong> " + actual +
        (camino.length ? " · <strong>Camino:</strong> " + camino.map(function (a) { return a.u + "→" + a.v; }).join(" ") : "");
    }

    function ayuda() {
      // BFS para encontrar un camino aumentante (padres)
      var padre = {};
      padre[fuente] = null;
      var cola = [fuente];
      while (cola.length && !(sumidero in padre)) {
        var u = cola.shift();
        aristas.forEach(function (a) {
          if (a.u === u && capRes[a.id] > 0 && !(a.v in padre)) {
            padre[a.v] = a.u;
            cola.push(a.v);
          }
        });
      }
      if (!(sumidero in padre)) {
        var alcanz = bfsAlcanzables();
        var corte = aristas.filter(function (a) { return alcanz[a.u] && !alcanz[a.v]; });
        resultado.innerHTML =
          "🏁 Ya no hay camino aumentante: el flujo es <strong>máximo</strong> (" + flujoTotal + "). " +
          "Corte mínimo: " + corte.map(function (a) { return a.u + "→" + a.v + " (" + a.cap + ")"; }).join(", ") +
          " = <strong>" + flujoTotal + "</strong>.";
        resultado.className = "ge-resultado ge-ok";
        return;
      }
      var r = [];
      var v = sumidero;
      while (padre[v] !== null) { r.unshift(padre[v] + "→" + v); v = padre[v]; }
      resultado.innerHTML = "💡 Un camino aumentante disponible: <strong>" + r.join(" → ") + "</strong>. Haz clic en sus aristas.";
      resultado.className = "ge-resultado ge-error";
    }

    cy.on("tap", "edge", function (ev) {
      var e = ev.target;
      var ar = aristas.filter(function (x) { return x.id === e.id(); })[0];
      if (!ar) return;
      if (camino.some(function (x) { return x.id === ar.id; })) {
        resultado.textContent = "⚠️ Esa tubería ya está en tu camino actual.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      if (ar.u !== actual) {
        resultado.textContent = "❌ Estás en " + actual + ". Elige una tubería que salga de " + actual + ".";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      if (capRes[ar.id] <= 0) {
        resultado.textContent = "❌ La tubería " + ar.u + "→" + ar.v + " está saturada (0/" + ar.cap + "). Busca otra.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      // ciclo: no volver a un nodo ya visitado en este camino
      var visit = {}; visit[fuente] = true;
      camino.forEach(function (x) { visit[x.v] = true; });
      if (visit[ar.v]) {
        resultado.textContent = "❌ Volverías a " + ar.v + " (ya visitado en este camino). Busca un avance nuevo.";
        resultado.className = "ge-resultado ge-error";
        return;
      }
      camino.push(ar);
      actual = ar.v;
      repintar();
      if (ar.v === sumidero) {
        // cuello de botella
        var cuello = Infinity;
        camino.forEach(function (a) { if (capRes[a.id] < cuello) cuello = capRes[a.id]; });
        camino.forEach(function (a) {
          capRes[a.id] -= cuello;
          flujo[a.id] += cuello;
        });
        flujoTotal += cuello;
        var desc = camino.map(function (a) { return a.u + "→" + a.v; }).join(" → ");
        resultado.textContent =
          "✅ ¡Camino completado! Mandaste " + cuello + " por " + desc +
          " (cuello de botella). Flujo total: " + flujoTotal + ".";
        resultado.className = "ge-resultado ge-ok";
        camino = [];
        actual = fuente;
        repintar();
        // ¿fin?
        if (!(sumidero in bfsAlcanzables())) {
          var alcanz = bfsAlcanzables();
          var corte = aristas.filter(function (a) { return alcanz[a.u] && !alcanz[a.v]; });
          resultado.innerHTML =
            "🎉 <strong>¡Flujo máximo = " + flujoTotal + "!</strong> Ya no hay camino aumentante. " +
            "Corte mínimo: " + corte.map(function (a) { return a.u + "→" + a.v + " (" + a.cap + ")"; }).join(", ") +
            " = " + flujoTotal + " (¡coincide con el teorema de Ford-Fulkerson!).";
          resultado.className = "ge-resultado ge-ok";
        } else {
          resultado.textContent += " Busca otro camino: desde " + fuente + ".";
        }
      }
    });

    btnReiniciar.addEventListener("click", function () {
      aristas.forEach(function (a) { capRes[a.id] = a.cap; flujo[a.id] = 0; });
      camino = []; actual = fuente; flujoTotal = 0;
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      repintar();
    });
    btnDeshacer.addEventListener("click", function () {
      var ult = camino.pop();
      if (ult) actual = camino.length ? camino[camino.length - 1].v : fuente;
      else actual = fuente;
      repintar();
      resultado.textContent = "↩️ Quité la última tubería. Sigue tú.";
      resultado.className = "ge-resultado";
    });
    btnAyuda.addEventListener("click", ayuda);
    repintar();
  }



  /* ---------- ejercicio interactivo: Tautología / Contradicción / Contingencia ----------
   * data-formulas="nombre|V,F,V,V|Contingencia;..."
   * El usuario ve la fórmula + su última columna y clasifica.
   */
  function crearEjercicioTabla(contenedor) {
    var formulas = (contenedor.getAttribute("data-formulas") || "").split(";")
      .map(function (s) {
        var partes = s.split("|");
        return {
          nombre: (partes[0] || "").trim(),
          valores: (partes[1] || "").split(",").map(function (x) { return x.trim().toUpperCase(); }),
          tipo: (partes[2] || "").trim()
        };
      })
      .filter(function (f) { return f.nombre && f.tipo && f.valores.length; });
    if (!formulas.length) return;

    var indice = 0;
    var aciertos = 0;
    var intentos = 0;
    var primerIntento = 0;

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var cajaFormula = document.createElement("div");
    cajaFormula.className = "ge-tabla-formula";
    contenedor.appendChild(cajaFormula);

    var cajaValores = document.createElement("div");
    cajaValores.className = "ge-tabla-valores";
    contenedor.appendChild(cajaValores);

    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";
    var tipos = ["Tautología", "Contradicción", "Contingencia"];
    var mapTipo = { "Tautología": "Tautología", "Contradicción": "Contradicción", "Contingencia": "Contingencia" };
    var botones = {};
    tipos.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ge-boton ge-boton-clasif";
      b.textContent = t;
      botones[t] = b;
      cajaBotones.appendChild(b);
    });
    contenedor.appendChild(cajaBotones);

    var cajaReiniciar = document.createElement("div");
    cajaReiniciar.className = "ge-botones";
    var btnReiniciar = document.createElement("button");
    btnReiniciar.type = "button";
    btnReiniciar.className = "ge-boton ge-boton-reiniciar";
    btnReiniciar.textContent = "🔄 Reiniciar";
    cajaReiniciar.appendChild(btnReiniciar);
    contenedor.appendChild(cajaReiniciar);

    var resultado = document.createElement("div");
    resultado.className = "ge-resultado";
    contenedor.appendChild(resultado);

    function analisis(valores) {
      var hayV = valores.indexOf("V") !== -1;
      var hayF = valores.indexOf("F") !== -1;
      if (hayV && !hayF) return "Tautología";
      if (!hayV && hayF) return "Contradicción";
      return "Contingencia";
    }

    function pintarValores(f) {
      cajaValores.innerHTML = "";
      var fila = document.createElement("div");
      fila.className = "ge-tabla-fila";
      var lab = document.createElement("span");
      lab.className = "ge-tabla-rotulo";
      lab.textContent = "Última columna:";
      fila.appendChild(lab);
      f.valores.forEach(function (v) {
        var chip = document.createElement("span");
        chip.className = "ge-tabla-chip " + (v === "V" ? "ge-v" : "ge-f");
        chip.textContent = v;
        fila.appendChild(chip);
      });
      cajaValores.appendChild(fila);
    }

    function mostrar() {
      var f = formulas[indice];
      titulo.innerHTML = "<strong>Fórmula " + (indice + 1) + "/" + formulas.length + ":</strong> " +
        "<code>" + f.nombre + "</code> · Aciertos al primer intento: " + primerIntento + "/" + formulas.length;
      cajaFormula.innerHTML = "";
      var mono = document.createElement("div");
      mono.className = "ge-tabla-expresion";
      mono.textContent = f.nombre;
      cajaFormula.appendChild(mono);
      pintarValores(f);
      resultado.className = "ge-resultado";
      resultado.textContent = "";
      Object.keys(botones).forEach(function (k) { botones[k].disabled = false; });
    }

    function clasificar(tipo) {
      var f = formulas[indice];
      intentos++;
      if (tipo === f.tipo) {
        if (intentos === aciertos + 1) primerIntento++;  // acertado al primer intento de esta fórmula
        aciertos++;
        resultado.textContent = "✅ ¡Correcto! " + f.nombre + " es " + f.tipo + ".";
        resultado.className = "ge-resultado ge-ok";
        Object.keys(botones).forEach(function (k) { botones[k].disabled = true; });
        if (indice + 1 >= formulas.length) {
          resultado.innerHTML =
            "🎉 <strong>¡Completaste las " + formulas.length + " fórmulas!</strong> " +
            "Aciertos al primer intento: " + primerIntento + "/" + formulas.length + ". " +
            "Recuerda: toda V = tautología, toda F = contradicción, mezcla = contingencia.";
          resultado.className = "ge-resultado ge-ok";
          return;
        }
        setTimeout(function () {
          indice++;
          mostrar();
        }, 900);
      } else {
        var a = analisis(f.valores);
        var msg = "";
        if (tipo === "Tautología") {
          msg = "No es tautología: la última columna tiene una F (y la tautología exige TODA V). " +
                "En realidad es " + f.tipo + ".";
        } else if (tipo === "Contradicción") {
          msg = "No es contradicción: la última columna tiene una V (y la contradicción exige TODA F). " +
                "En realidad es " + f.tipo + ".";
        } else {
          msg = "No es contingencia: la última columna no mezcla V y F. " +
                (a === "Tautología" ? "Es TODA V → tautología." : "Es TODA F → contradicción.") +
                " En realidad es " + f.tipo + ".";
        }
        resultado.textContent = "❌ " + msg;
        resultado.className = "ge-resultado ge-error";
      }
    }

    Object.keys(botones).forEach(function (t) {
      botones[t].addEventListener("click", function () { clasificar(t); });
    });
    btnReiniciar.addEventListener("click", function () {
      indice = 0; aciertos = 0; intentos = 0; primerIntento = 0;
      mostrar();
    });
    mostrar();
  }



  /* ---------- ejercicio interactivo: rellenar la tabla de verdad ----------
   * data-proposiciones="nombre|*p:VF,¬p:FV,p∨¬p:VV;..."
   *   - ";" separa proposiciones
   *   - "|" separa nombre y columnas
   *   - "," separa columnas
   *   - cada columna: "*etiqueta:vfvf" (el * marca columna DADA, no editable)
   * El usuario rellena las columnas editables con V/F y el sistema califica.
   */
  function crearEjercicioTablaVerdad(contenedor) {
    var proposiciones = (contenedor.getAttribute("data-proposiciones") || "").split(";")
      .map(function (s) {
        var partes = s.split("|");
        var cols = (partes[1] || "").split(",").filter(function (c) { return c; }).map(function (c) {
          var m = /^(\*?)([^:]+):([VF]+)$/.exec(c.trim());
          if (!m) return null;
          return { dada: m[1] === "*", etiqueta: m[2].trim(), sol: m[3].split("") };
        }).filter(function (c) { return c; });
        return { nombre: (partes[0] || "").trim(), cols: cols };
      })
      .filter(function (p) { return p.nombre && p.cols.length; });
    if (!proposiciones.length) return;

    var indice = 0;
    var celdas = [];        // {boton, sol, state: "", "V", "F", ok/err}
    var comprobado = false;

    // --- UI ---
    var titulo = document.createElement("p");
    titulo.className = "ge-estado";
    contenedor.appendChild(titulo);

    var cajaExpresion = document.createElement("div");
    cajaExpresion.className = "ge-tabla-expresion";
    contenedor.appendChild(cajaExpresion);

    var cajaTabla = document.createElement("div");
    cajaTabla.className = "ge-tabla-wrap";
    contenedor.appendChild(cajaTabla);

    var cajaBotones = document.createElement("div");
    cajaBotones.className = "ge-botones";
    var btnComprobar = document.createElement("button");
    btnComprobar.type = "button";
    btnComprobar.className = "ge-boton ge-boton-comprobar";
    btnComprobar.textContent = "✅ Comprobar";
    var btnReiniciar = document.createElement("button");
    btnReiniciar.type = "button";
    btnReiniciar.className = "ge-boton ge-boton-reiniciar";
    btnReiniciar.textContent = "🔄 Reiniciar";
    cajaBotones.appendChild(btnComprobar);
    cajaBotones.appendChild(btnReiniciar);
    contenedor.appendChild(cajaBotones);

    var resultado = document.createElement("div");
    resultado.className = "ge-resultado";
    contenedor.appendChild(resultado);

    // --- render de la proposición actual ---
    function mostrar() {
      var p = proposiciones[indice];
      comprobado = false;
      celdas = [];
      titulo.innerHTML = "<strong>Proposición " + (indice + 1) + "/" + proposiciones.length + ":</strong> completa la tabla de verdad y pulsa <em>Comprobar</em>.";
      cajaExpresion.textContent = p.nombre;
      cajaTabla.innerHTML = "";

      var tabla = document.createElement("table");
      tabla.className = "ge-tabla ge-tabla-verdad";

      // cabecera
      var thead = document.createElement("thead");
      var filaH = document.createElement("tr");
      p.cols.forEach(function (c) {
        var th = document.createElement("th");
        th.textContent = c.etiqueta;
        filaH.appendChild(th);
      });
      thead.appendChild(filaH);
      tabla.appendChild(thead);

      // cuerpo
      var tbody = document.createElement("tbody");
      var nfilas = p.cols[0].sol.length;
      for (var f = 0; f < nfilas; f++) {
        var tr = document.createElement("tr");
        p.cols.forEach(function (c, j) {
          var td = document.createElement("td");
          if (c.dada) {
            td.className = "ge-tabla-dada";
            td.textContent = c.sol[f];
          } else {
            var boton = document.createElement("button");
            boton.type = "button";
            boton.className = "ge-tv-celda";
            boton.textContent = "·";
            boton.setAttribute("aria-label", "Celda fila " + (f + 1) + ", columna " + c.etiqueta);
            boton.addEventListener("click", function (ev) {
              if (comprobado) return;
              var estado = ev.target.getAttribute("data-estado") || "";
              var mapa = { "": "V", "V": "F", "F": "" };
              var next = mapa[estado] || "V";
              ev.target.setAttribute("data-estado", next);
              ev.target.textContent = next === "" ? "·" : next;
              ev.target.className = "ge-tv-celda" + (next === "V" ? " ge-tv-v" : next === "F" ? " ge-tv-f" : "");
            });
            td.appendChild(boton);
            celdas.push({ boton: boton, sol: c.sol[f], fila: f, col: j });
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      }
      tabla.appendChild(tbody);
      cajaTabla.appendChild(tabla);

      var nota = document.createElement("div");
      nota.className = "ge-tabla-nota";
      nota.textContent = "💡 Haz clic en cada casilla para alternar V / F. Las columnas sombreadas (p, q) ya están dadas.";
      cajaTabla.appendChild(nota);

      resultado.className = "ge-resultado";
      resultado.textContent = "";
      btnComprobar.disabled = false;
    }

    function clasificarCelda(c) {
      var estado = c.boton.getAttribute("data-estado") || "";
      if (estado === c.sol) {
        c.boton.className = "ge-tv-celda ge-tv-ok";
        c.boton.textContent = c.sol;
        c.boton.setAttribute("data-correcta", "1");
        return true;
      }
      c.boton.className = "ge-tv-celda ge-tv-mal";
      c.boton.setAttribute("data-correcta", "0");
      c.boton.title = "Correcto: " + c.sol;
      return false;
    }

    function comprobar() {
      if (comprobado) return;
      comprobado = true;
      var correctas = 0;
      celdas.forEach(function (c) {
        if (clasificarCelda(c)) correctas++;
      });
      var total = celdas.length;
      var todas = correctas === total;
      resultado.className = "ge-resultado " + (todas ? "ge-ok" : "ge-error");
      if (todas) {
        if (indice + 1 >= proposiciones.length) {
          resultado.innerHTML = "🎉 <strong>¡Tabla completada correctamente!</strong> Terminaste las " + proposiciones.length +
            " proposiciones. Revisa el resumen: toda V = tautología, toda F = contradicción, mezcla = contingencia.";
        } else {
          resultado.innerHTML = "✅ <strong>¡Perfecto!</strong> " + correctas + "/" + total + " celdas correctas. Siguiente proposición…";
        }
        btnComprobar.disabled = true;
        if (indice + 1 < proposiciones.length) {
          setTimeout(function () { indice++; mostrar(); }, 1200);
        }
      } else {
        resultado.textContent = "❌ Aún no: " + correctas + "/" + total + " celdas correctas. Las incorrectas muestran la solución al pasar el cursor. Corrige y vuelve a comprobar.";
        btnComprobar.disabled = false;
      }
    }

    btnComprobar.addEventListener("click", comprobar);
    btnReiniciar.addEventListener("click", function () { indice = 0; mostrar(); });
    mostrar();
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
