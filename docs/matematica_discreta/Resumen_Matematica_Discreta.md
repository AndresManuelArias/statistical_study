---
aliases:
  - Resumen Matemática Discreta
  - Resumen para Evaluación
tipo: resumen-estudio
tags:
  - matematica-discreta
  - resumen
  - evaluacion
---

# 📌 Resumen — Matemática Discreta para la Evaluación

> [!tip] Cómo usar
> 1. Léelo entero una vez (10 min).
> 2. Repite en voz alta las **fórmulas en negrita** antes del examen.
> 3. Si una unidad te falla, abre su nota con los wikilinks del final.

---

## 🔤 1. Lógica

- Proposición = oración V/F (preguntas y órdenes NO son proposiciones).
- **Única fila falsa de $p \to q$: $V \to F$.** Equivale a $\neg p \lor q$.
- Tautología = toda **V** · Contradicción = toda **F** · Contingencia = mezcla.
- Negar cuantificadores: $\neg\forall P(x) \equiv \exists\,\neg P(x)$.
- **De Morgan:** $\neg(p \land q) \equiv \neg p \lor \neg q$ · $\neg(p \lor q) \equiv \neg p \land \neg q$.
- $p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)$.

---

## 🧩 2. Conjuntos

- $A^c$ depende del **universo** $\Omega$ (fijarlo primero).
- **$|\mathcal{P}(A)| = 2^n$** · **$|A \times B| = |A|\cdot|B|$**.
- **Inclusión-exclusión:** $|A \cup B| = |A| + |B| - |A \cap B|$.
- $(A \cup B)^c = A^c \cap B^c$.
- Cuidado: $\{1\} \in \{\{1\}\}$ pero $\{1\} \not\subseteq \{\{1\}\}$.

---

## 🔗 3. Relaciones y funciones

- **Equivalencia** = reflexiva + simétrica + transitiva → particiona en clases.
- **Orden parcial** = reflexiva + antisimétrica + transitiva → diagrama de Hasse.
- Inversa de $f$ existe **solo si $f$ es biyectiva**.
- Nº funciones $A\to B$: **$n^{|A|}$** (con $|B|=n$).
- Nº inyectivas: $n(n-1)\cdots(n-m+1)$ · Nº biyecciones: $n!$.

---

## 🪜 4. Inducción y recursión

- Inducción = **base** $P(n_0)$ + **paso** $P(k)\Rightarrow P(k+1)$.
- Inducción fuerte = supones $P(n_0),\dots,P(k)$.
- **$1+2+\cdots+n = \dfrac{n(n+1)}{2}$**.
- **Torre de Hanoi: $T(n) = 2^n - 1$** movimientos.
- Búsqueda binaria $O(\log n)$ · Merge sort $O(n\log n)$.

---

## 🧮 5. Combinatoria y probabilidad

- ¿**Orden importa?** Sí → permutación `P(n,k)` · No → combinación `C(n,k)`.
- **$P(n,k) = \dfrac{n!}{(n-k)!}$** · **$\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$**.
- Con repetición: $n^k$. · **Pascal:** $\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$.
- Inclusión-exclusión (3): sumar, **restar los pares, sumar el triple**.
- "Al menos uno" → complemento: $1 - P(\text{ninguno})$.
- Principio del palomar: $n$ objetos en $k$ cajas → una caja con $\lceil n/k\rceil$.

---

## 🔢 6. Teoría de números

- **Euclides:** el último resto no nulo es el MCD (algoritmo rápido).
- **$\text{MCD}(a,b) \cdot \text{mcm}(a,b) = a \cdot b$**.
- $a \equiv b \pmod m \iff m \mid (a-b)$.
- **Inverso de $a$ mod $m$ existe ⇔ $\text{MCD}(a,m)=1$**.
- (En $\mathbb{Z}_7$, $3^{-1}=5$ porque $3\cdot5=15\equiv1$).
- **RSA:** $n=pq$, $\varphi(n)=(p-1)(q-1)$, $ed\equiv1\pmod{\varphi(n)}$, $C=M^e\bmod n$.

---

## 🕸️ 7. Grafos y árboles

- **$\sum \deg(v) = 2|E|$** (cada arista cuenta 2).
- Grafo completo $K_n$: **$\binom{n}{2}$ aristas**; cada vértice grado $n-1$.
- Camino (sin vértices repetidos) · Cadena (sin aristas repetidas) · Ciclo (cierra).
- Euler = **todas las aristas** · Hamilton = **todos los vértices**.
- **Árbol** (conexo sin ciclos): $n$ vértices → **$n-1$ aristas**, único camino entre cada par.
- BST: inorden = valores **ordenados**; búsqueda $O(\log n)$ si está balanceado.
- **MST:** Prim (crece desde semilla) y Kruskal (aristas baratas, sin ciclos) → mismo costo.
- **Dijkstra:** ruta más corta (pesos ≥ 0). **Flujo máximo = corte mínimo.**

---

## 🧬 8. Estructuras algebraicas

- Cadena: **semigrupo** → **monoide** (+identidad) → **grupo** (+inversos) → **abeliano** (+conmutativa).
- Tabla de Cayley: simétrica por la diagonal ⇒ abeliana; cada fila es permutación.
- Orden de $a$: menor $k$ con $a^k = e$.
- **$\mathbb{Z}_p$ es cuerpo ⇔ $p$ primo** (en él se puede dividir).
- Homomorfismo: $f(a\ast b) = f(a)\cdot f(b)$ · Isomorfismo = homomorfismo biyectivo.

---

## 🤖 9. Autómatas y lenguajes

- **DFA** = $(Q,\Sigma,\delta,q_0,F)$; acepta si termina en estado final.
- **NFA ≡ DFA** (construcción de subconjuntos): mismo poder, NFA más cómodo.
- Regex: `|` unión · `*` cero o más · `+` uno o más · `?` cero o uno.
- **Regex no puede contar:** $a^n b^n$ **no** es regular.
- Chomsky: 3 regular (DFA/NFA/regex) ⊂ 2 libre contexto (pila) ⊂ 1 sensible ⊂ 0 Turing.
- **Problema de la parada: indecidible.**

---

## 🔗 Temas relacionados

- [[guia_didactica|📖 Guía didáctica completa]]
- [[01_logica|🔤 Lógica]] · [[02_conjuntos|🧩 Conjuntos]] · [[03_relaciones_funciones|🔗 Relaciones]] · [[04_induccion_recursion|🪜 Inducción]] · [[05_combinatoria|🧮 Combinatoria]] · [[06_teoria_numeros|🔢 Teoría de números]] · [[07_grafos|🕸️ Grafos]] · [[08_estructuras_algebraicas|🧬 Estructuras]] · [[09_automatas|🤖 Autómatas]]

> [!success] En el examen
> Escribe primero lo que **sí** sabes de cada ejercicio (definición, fórmula, diagrama): los puntos parciales también cuentan.
