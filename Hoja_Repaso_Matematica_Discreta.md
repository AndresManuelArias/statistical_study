---
aliases:
  - Hoja de Repaso Evaluación
  - Repaso Matemática Discreta
tipo: plantilla-estudio
tags:
  - matematica-discreta
  - repaso
  - evaluacion
---

# 📋 Hoja de Repaso — Plantilla para la Evaluación

> [!tip] Cómo usar esta plantilla
> 1. **Antes de estudiar:** léela entera una vez (15 min) para tener el mapa completo en la cabeza.
> 2. **Al estudiar cada unidad:** cubre la columna de fórmulas con la mano e intenta recordarlas; marca el ✅ de "Autochequeo" solo si puedes explicarlo en voz alta (técnica Feynman).
> 3. **La víspera:** usa solo la sección [[#🚀 Repaso exprés de última hora]].
> 4. **Anota tus dudas** al final en [[#📝 Mis apuntes y dudas]]. Si no puedes llenar una casilla, ese es tu tema a repasar.

> [!warning] La regla #1 en un examen
> **Pregunta: ¿el orden importa?** Sí → permutación / digrafo. No → combinación / grafo simple.
> **Pregunta: ¿qué me piden exactamente?** Subraya "contar", "demostrar", "encontrar", "clasificar". Cada verbo pide una técnica distinta.

---

## 🔤 Unidad 1 — Lógica

### Puntos clave
- **Proposición:** oración con valor de verdad (V/F). Preguntas, órdenes y variables sueltas NO lo son.
- **Conectivos:** $\neg$ (no), $\land$ (y), $\lor$ (o inclusivo), $\to$ (si… entonces), $\leftrightarrow$ (si y solo si).
- **Implicación:** la **única** fila falsa es $V \to F$. Equivale a $\neg p \lor q$.
- **Clasificación por la columna final:** toda **V** = **tautología**; toda **F** = **contradicción**; mezcla = **contingencia**.
- **Leyes de De Morgan:** $\neg(p \land q) \equiv \neg p \lor \neg q$ y $\neg(p \lor q) \equiv \neg p \land \neg q$.
- **Cuantificadores:** $\forall$ (para todo) y $\exists$ (existe). La negación los intercambia: $\neg\forall \to \exists\neg$.

### Fórmulas imprescindibles
| Necesito… | Fórmula |
|-----------|---------|
| Implicación sin $\to$ | $p \to q \equiv \neg p \lor q$ |
| Bicondicional sin $\leftrightarrow$ | $p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)$ |
| NAND (universal) | $\neg(p \land q)$ |
| XOR | $p \oplus q \equiv (p \lor q) \land \neg(p \land q)$ |
| De Morgan | $\neg(p \land q) \equiv \neg p \lor \neg q$ |

### Errores que cuestan puntos
- ❌ Creer que $p \to q$ significa **causa**. (Es una promesa, no una flecha temporal.)
- ❌ Usar $\lor$ como "o uno u otro": el $\lor$ admite **ambos**; el exclusivo es $\oplus$.
- ❌ Negar mal: $\neg\forall x\,P(x)$ es $\exists x\,\neg P(x)$, **no** $\forall x\,\neg P(x)$.

### ✅ Autochequeo
- [ ] Escribo la tabla de verdad de $p \to q$ de memoria.
- [ ] Clasifico $p \lor \neg p$ y $p \land \neg p$ sin dudar.
- [ ] Aplico De Morgan a $\neg(p \land q)$.

---

## 🧩 Unidad 2 — Conjuntos y demostraciones

### Puntos clave
- **Dos formas de definir:** por extensión $\{1,2,3\}$ y por comprensión $\{x \mid \text{condición}\}$.
- **Operaciones:** unión $\cup$, intersección $\cap$, diferencia $\setminus$, complemento $A^c$, diferencia simétrica $\triangle$, producto cartesiano $\times$.
- **$A^c$ depende del universo** $\Omega$: siempre identifícalo.
- **Demostraciones:** directa, contrapositiva, contradicción (reducción al absurdo) y casos.

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Cardinalidad del potencia | $\lvert\mathcal{P}(A)\rvert = 2^{n}$ |
| Cardinalidad del producto | $\lvertA \times B\rvert = \lvertA\rvert\cdot\lvertB\rvert$ |
| Inclusión-exclusión (2) | $\lvertA \cup B\rvert = \lvertA\rvert + \lvertB\rvert - \lvertA \cap B\rvert$ |
| De Morgan (conjuntos) | $(A \cup B)^c = A^c \cap B^c$ |
| Diferencia simétrica | $A \triangle B = (A \setminus B) \cup (B \setminus A)$ |

### Errores que cuestan puntos
- ❌ Olvidar restar la intersección al contar una unión.
- ❌ Calcular un complemento sin fijar el universo.
- ❌ Confundir $\in$ (elemento) con $\subseteq$ (subconjunto): $\{1\} \in \{\{1\}\}$ pero $\{1\} \not\subseteq \{\{1\}\}$.

### ✅ Autochequeo
- [ ] Calculo $|\mathcal{P}(A)|$ con $|A|=4$ (respuesta: 16).
- [ ] Dibujo las 4 regiones de un Venn de 2 conjuntos.
- [ ] Explico la diferencia entre $\subseteq$ y $\subset$.

---

## 🔗 Unidad 3 — Relaciones y funciones

### Puntos clave
- **Relación:** $R \subseteq A \times B$ (subconjunto del producto cartesiano).
- **Propiedades** (sobre un mismo conjunto): reflexiva, simétrica, antisimétrica, transitiva.
- **Relación de equivalencia** = reflexiva + simétrica + transitiva → parte en **clases de equivalencia**.
- **Orden parcial** = reflexiva + antisimétrica + transitiva → se dibuja con **Hasse**.
- **Función:** cada entrada tiene **una sola** salida. Tipos: inyectiva, sobreyectiva, biyectiva.
- Solo las **biyectivas** tienen inversa.

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Nº de funciones $A \to B$ | $n^{m}$ (con $\lvertA\rvert=m$, $\lvertB\rvert=n$) |
| Nº de funciones inyectivas | $n(n-1)\cdots(n-m+1)$ |
| Nº de biyecciones | $n!$ (solo si $m=n$) |
| Composición | $(g \circ f)(x) = g(f(x))$ |

### Errores que cuestan puntos
- ❌ Creer que simétrica y antisimétrica son opuestas: "=" es **ambas**.
- ❌ Decir que toda función tiene inversa (solo biyectivas).
- ❌ Pensar que la composición es conmutativa ($f\circ g \neq g\circ f$ en general).

### ✅ Autochequeo
- [ ] Decido si "divide a" es orden parcial.
- [ ] Cuento las funciones de un conjunto de 2 a uno de 3 (respuesta: $3^2=9$).
- [ ] Explico qué es una clase de equivalencia.

---

## 🪜 Unidad 4 — Inducción y recursión

### Puntos clave
- **Inducción simple:** (1) base $P(n_0)$ y (2) paso $P(k) \Rightarrow P(k+1)$.
- **Inducción fuerte:** en el paso puedes suponer $P(n_0),\dots,P(k)$.
- **Recursión:** el objeto se define en términos de sí mismo **con caso base**. Sin base → stack overflow.
- **Divide y vencerás:** dividir, resolver recursivo, combinar.

### Fórmulas imprescindibles
| Problema | Fórmula / complejidad |
|----------|----------------------|
| Suma $1+\cdots+n$ | $\dfrac{n(n+1)}{2}$ |
| Suma de impares | $1+3+\cdots+(2n-1) = n^2$ |
| Fibonacci | $F_n = F_{n-1}+F_{n-2}$, $F_0=0$, $F_1=1$ |
| Torre de Hanoi | $T(n) = 2^n - 1$ |
| Búsqueda binaria | $T(n)=T(n/2)+1 \Rightarrow O(\log n)$ |
| Merge sort | $T(n)=2T(n/2)+n \Rightarrow O(n\log n)$ |

### Errores que cuestan puntos
- ❌ Hacer el paso inductivo **sin verificar la base**.
- ❌ Suponer $P(k+1)$ en lugar de probarlo.
- ❌ Usar inducción simple cuando el paso necesita valores más atrás (ahí va la fuerte).

### ✅ Autochequeo
- [ ] Pruebo por inducción que $1+\cdots+n = n(n+1)/2$.
- [ ] Calculo Hanoi con 4 discos ($2^4-1=15$).
- [ ] Distingo recursión de iteración y sus riesgos.

---

## 🧮 Unidad 5 — Combinatoria y probabilidad discreta

### Puntos clave
- **Suma** (o excluyente) → sumar; **producto** (y secuencial) → multiplicar.
- **Permutación:** orden **importa**. **Combinación:** orden **no importa**.
- **Palomar:** más objetos que cajas → alguna caja repite; versión fuerte $\lceil n/k\rceil$.
- **Probabilidad discreta:** $P = \dfrac{\text{favorables}}{\text{posibles}}$ (resultados equiprobables).

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Permutaciones $P(n,k)$ | $\dfrac{n!}{(n-k)!}$ |
| Combinaciones $\binom{n}{k}$ | $\dfrac{n!}{k!(n-k)!}$ |
| Con repetición | $n^{k}$ |
| Identidad de Pascal | $\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$ |
| Binomio de Newton | $(x+y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^{k}$ |
| Inclusión-exclusión (3) | $\lvertA\cup B\cup C\rvert = \sum\lvertA_i\rvert - \sum\lvertA_i\cap A_j\rvert + \lvertA\cap B\cap C\rvert$ |

### Errores que cuestan puntos
- ❌ Usar permutaciones cuando el orden no importa (o al revés).
- ❌ Olvidar el signo $+$ del triple en inclusión-exclusión.
- ❌ Confundir "al menos uno" (complemento: $1 - P(\text{ninguno})$) con "exactamente uno".

### ✅ Autochequeo
- [ ] Calculo $\binom{5}{2}=10$ y $P(5,2)=20$.
- [ ] Aplico el palomar a "13 personas, meses" → 2 en el mismo mes.
- [ ] Uso $1-P(\text{ninguno})$ para "al menos un 6 en dos dados".

---

## 🔢 Unidad 6 — Teoría de números

### Puntos clave
- **Divisibilidad:** $a \mid b$ si $b = a k$.
- **TFA:** todo $n>1$ se factoriza en primos de forma **única**.
- **Euclides:** el último residuo no nulo es el MCD. **Rapidísimo**.
- **Aritmética modular:** $a \equiv b \pmod{m}$ si $m \mid (a-b)$; se puede sumar, multiplicar y reducir la base.
- **Inverso modular** de $a$ módulo $m$ existe **si y solo si** $\text{MCD}(a,m)=1$.
- **RSA:** seguridad = dificultad de **factorizar $n$**.

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Relación MCD–mcm | $\text{MCD}(a,b)\cdot\text{mcm}(a,b) = a\cdot b$ |
| Congruencia | $a \equiv b \pmod m \iff m \mid (a-b)$ |
| RSA – módulo | $n = p\cdot q$, $\varphi(n) = (p-1)(q-1)$ |
| RSA – claves | $e\cdot d \equiv 1 \pmod{\varphi(n)}$ |
| RSA – cifrado | $C = M^e \bmod n$; descifrar $M = C^d \bmod n$ |

### Errores que cuestan puntos
- ❌ "Dividir" en aritmética modular (no siempre válido): usa el **inverso**.
- ❌ Olvidar que el inverso existe solo si $\text{MCD}(a,m)=1$.
- ❌ Concluir que un número es primo sin probar divisores hasta $\sqrt{n}$.

### ✅ Autochequeo
- [ ] Calculo $\text{MCD}(48,18)$ con Euclides en 3 pasos (=6).
- [ ] Hallo el inverso de 3 módulo 7 (=5).
- [ ] Explico por qué factorizar es el punto débil de RSA.

---

## 🕸️ Unidad 7 — Grafos y árboles

### Puntos clave
- **Grafo:** $G=(V,E)$. Tipos: simple, dirigido, ponderado, completo $K_n$, bipartito, conexo.
- **Manita de sumar grados:** $\sum \deg(v) = 2|E|$ (cada arista cuenta doble).
- **Recorridos:** camino (no repite vértices), cadena (no repite aristas), ciclo (cierra).
- **Euleriano:** recorre **todas las aristas** una vez. **Hamiltoniano:** visita **todos los vértices** una vez.
- **Árbol:** conexo **sin ciclos** $\Rightarrow$ exactamente $n-1$ aristas y **un único camino** entre cada par.
- **BST:** izquierdo < raíz < derecho → búsqueda $O(\log n)$ si está balanceado.
- **Recorridos:** preorden (raíz-izq-der), inorden (izq-raíz-der → ordenado en BST), postorden (izq-der-raíz), BFS (por niveles).
- **Algoritmos clave:** Prim (crece desde una semilla), Kruskal (aristas baratas + union-find), Dijkstra (ruta más corta), Floyd-Warshall (todos los pares), flujo máximo (Ford-Fulkerson).

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Aristas de $K_n$ | $\binom{n}{2} = \dfrac{n(n-1)}{2}$ |
| Suma de grados | $\sum \deg(v) = 2\lvertE\rvert$ |
| Árbol con $n$ vértices | $\lvertE\rvert = n-1$ |
| MST (Prim/Kruskal) | costo del ejemplo = **39** (grafo A–G) |
| Hoja del árbol binario completo | $\text{hojas} = \text{internos} + 1$ |
| Dijkstra | rutas más cortas, peses ≥ 0, $O((V+E)\log V)$ |
| Teorema del flujo | **flujo máximo = corte mínimo** (Ford-Fulkerson) |

### Errores que cuestan puntos
- ❌ Llamar "árbol" a cualquier grafo: un árbol **no tiene ciclos**.
- ❌ Confundir Euler (aristas) con Hamilton (vértices).
- ❌ Aplicar Dijkstra con aristas de **peso negativo**.
- ❌ Creer que hay un solo MST: si hay pesos repetidos puede haber **varios** (aunque el costo es el mismo).

### ✅ Autochequeo
- [ ] Enuncio las 4 propiedades equivalentes de un árbol.
- [ ] Digo el orden inorden del BST de ejemplo.
- [ ] Explico la diferencia entre Prim y Kruskal.
- [ ] Aplico "flujo máximo = corte mínimo" al ejemplo s–t (=4).

---

## 🧬 Unidad 8 — Estructuras algebraicas (avanzado)

### Puntos clave
- **Operación binaria:** clausura, asociativa, conmutativa, identidad, inverso.
- **Cadena de estructuras:** semigrupo → monoide → grupo → grupo abeliano.
- **Tabla de Cayley:** si es **simétrica** por la diagonal → grupo abeliano; cada fila es permutación.
- **Orden de un elemento:** menor $k$ con $a^k = e$. **Grupo cíclico:** tiene un generador.
- **Anillo / dominio / cuerpo:** el **cuerpo** permite dividir; $\mathbb{Z}_p$ es cuerpo **sii** $p$ es primo.
- **Isomorfismo:** homomorfismo biyectivo → estructuras "iguales" con otro nombre.

### Fórmulas imprescindibles
| Concepto | Fórmula |
|----------|---------|
| Homomorfismo | $f(a \ast b) = f(a) \cdot f(b)$ |
| Cuerpo finito | $\mathbb{Z}_p$ es cuerpo $\iff$ $p$ primo |
| Inverso en $\mathbb{Z}_7$ | $3^{-1} = 5$ porque $3\cdot5 = 15 \equiv 1$ |

### Errores que cuestan puntos
- ❌ Confundir monoide (tiene identidad) con grupo (tiene inversos).
- ❌ Creer que $(\mathbb{Z}, \cdot)$ es grupo: el 2 no tiene inverso entero.
- ❌ Olvidar que $\mathbb{Z}_n$ es cuerpo solo con $n$ primo.

### ✅ Autochequeo
- [ ] Nombro las 4 propiedades de grupo.
- [ ] Leo una tabla de Cayley y detecto si es abeliano.
- [ ] Explico por qué $\mathbb{Z}_6$ **no** es cuerpo.

---

## 🤖 Unidad 9 — Autómatas y lenguajes (avanzado)

### Puntos clave
- **DFA:** quíntupla $(Q,\Sigma,\delta,q_0,F)$; una transición por símbolo.
- **Reconocimiento:** lee la cadena; acepta si termina en estado final.
- **NFA ≡ DFA:** todo NFA se convierte a DFA (construcción de subconjuntos). Mismo poder.
- **Regex:** $\mid$ unión, $\ast$ cero o más, $+$ uno o más, `?` cero o uno.
- **Regex NO puede contar:** $a^n b^n$ no es regular (necesita pila/gramática).
- **Jerarquía de Chomsky:** regular ⊂ libre de contexto ⊂ sensible al contexto ⊂ recursivamente enumerable.
- **Máquina de Turing:** modelo universal; existe el **problema de la parada** (indecidible).

### Fórmulas imprescindibles
| Concepto | Resumen |
|----------|---------|
| Lenguaje regular | Aceptado por DFA/NFA/regex |
| Tipo 2 (context-free) | Autómata con pila; ej. $a^n b^n$ |
| Tesis Church–Turing | Todo lo computable lo calcula una MT |
| Problema de la parada | Indecidible (no hay algoritmo general) |

### Errores que cuestan puntos
- ❌ Creer que el NFA es "más poderoso" que el DFA (no lo es, solo más cómodo).
- ❌ Pretender reconocer $a^n b^n$ con una regex.
- ❌ Confundir "aceptar" con "terminar": un DFA no tiene memoria ilimitada.

### ✅ Autochequeo
- [ ] Diseño un DFA que acepte cadenas terminadas en `01`.
- [ ] Escribo la regex simplificada de un correo `usuario@dominio.ext`.
- [ ] Explico por qué $a^n b^n$ no es regular.

---

## 🚀 Repaso exprés de última hora

Maratón de 10 minutos — si algo falla, vuelve a esa unidad.

| # | Concepto | Respuesta que debo poder decir |
|---|----------|-------------------------------|
| 1 | Única fila falsa de $p \to q$ | $V \to F$ |
| 2 | Tautología / contradicción / contingencia | toda V / toda F / mezcla |
| 3 | $\lvert\mathcal{P}(A)\rvert$ con $\lvertA\rvert=n$ | $2^n$ |
| 4 | Inclusión-exclusión 2 conjuntos | $\lvertA\rvert+\lvertB\rvert-\lvertA\cap B\rvert$ |
| 5 | Equivalencia vs. orden parcial | R+S+T vs. R+A+T (la 2ª con antisimétrica) |
| 6 | Fórmula de permutaciones / combinaciones | $n!/(n-k)!$ / $n!/(k!(n-k)!)$ |
| 7 | Hanoi con $n$ discos | $2^n - 1$ |
| 8 | Suma $1+\cdots+n$ | $n(n+1)/2$ |
| 9 | MCD con Euclides | último residuo no nulo |
| 10 | $\text{MCD}(a,b)\cdot\text{mcm}(a,b)$ | $a\cdot b$ |
| 11 | Fractura de RSA | factorizar $n=pq$ |
| 12 | Suma de grados de un grafo | $2\lvertE\rvert$ |
| 13 | Árbol con $n$ vértices | $n-1$ aristas, sin ciclos, un único camino |
| 14 | Euler vs. Hamilton | todas las aristas vs. todos los vértices |
| 15 | Flujo máximo | = corte mínimo |
| 16 | Grupo vs. monoide vs. semigrupo | +inversos vs. +identidad vs. solo asociativa |
| 17 | $\mathbb{Z}_p$ cuerpo | solo si $p$ primo |
| 18 | NFA vs. DFA | mismo poder; NFA más cómodo |
| 19 | Jerarquía de Chomsky (tipos) | 3 regular, 2 libre contexto, 1 sensible, 0 recursivo |
| 20 | Problema de la parada | indecidible |

---

## 📝 Mis apuntes y dudas

> [!question] Antes de la evaluación, responde aquí:
> - ¿Qué unidad me cuesta más? → ______________________
> - ¿Qué fórmula confundo siempre? → ______________________
> - ¿Qué ejercicio interactivo repetí menos? → ______________________
> - Duda puntual #1: ______________________
> - Duda puntual #2: ______________________

> [!example] Mi plan de repaso (rellénalo)
> | Día | Unidad a repasar | Ejercicio interactivo | ¿Lo domino? |
> |-----|------------------|-----------------------|-------------|
> | ___ | ______________ | ____________________ | ☐ |
> | ___ | ______________ | ____________________ | ☐ |
> | ___ | ______________ | ____________________ | ☐ |

---

## 🔗 Temas relacionados

- [[guia_didactica|📖 Guía didáctica completa]]
- [[01_logica|🔤 Unidad 1 — Lógica]]
- [[02_conjuntos|🧩 Unidad 2 — Conjuntos]]
- [[03_relaciones_funciones|🔗 Unidad 3 — Relaciones y funciones]]
- [[04_induccion_recursion|🪜 Unidad 4 — Inducción y recursión]]
- [[05_combinatoria|🧮 Unidad 5 — Combinatoria]]
- [[06_teoria_numeros|🔢 Unidad 6 — Teoría de números]]
- [[07_grafos|🕸️ Unidad 7 — Grafos y árboles]]
- [[08_estructuras_algebraicas|🧬 Unidad 8 — Estructuras algebraicas]]
- [[09_automatas|🤖 Unidad 9 — Autómatas y lenguajes]]

---

> [!success] Último consejo
> En el examen, **escribe primero lo que sí sabes** de cada ejercicio (la definición, la fórmula, el diagrama). Ese "puntal" muchas veces desbloquea el resto y te asegura los puntos parciales.
