---
titulo: Ejercicios de operaciones con conjuntos (parte 2)
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - ejercicios
---

# 🧮 Ejercicios de operaciones con conjuntos (parte 2)

## 🎬 Datos del video

- **Título:** Ejercicios de operaciones con conjuntos (parte 2) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=5ovNShM6GAk)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se resuelven ejercicios de forma **analítica por extensión**: a partir de conjuntos definidos con elementos (números o letras) dentro de un universo dado, se calculan paso a paso uniones, diferencias con su complemento, e intersecciones compuestas, validando además subconjuntos.

## 🧮 Contenido

### Resolución analítica por extensión

Se trabaja con conjuntos **por extensión** (enumerando sus elementos) dentro de un universo $\Omega$ fijo:

1. Se identifica el **universo** y cada conjunto dado.
2. Se aplica la **jerarquía de operaciones** (paréntesis primero).
3. Se escribe el resultado **por extensión** (o vacío si no hay elementos).

### Cálculo paso a paso

- **Unión de conjuntos:** se juntan los elementos de ambos sin repetir.
- **Diferencia y su complemento:** primero $A - B$ (elementos de $A$ que no están en $B$) y luego $(A - B)^c$ (todo el universo menos ese resultado).
- **Intersecciones compuestas y validación de subconjuntos:** se intersecan los resultados parciales y se verifica si un conjunto es subconjunto de otro.

> [!example] Ejemplo resuelto
> Con $\Omega = \{1, 2, 3, 4, 5\}$, $A = \{1, 2, 3\}$, $B = \{3, 4\}$:
> - $A \cup B = \{1, 2, 3, 4\}$
> - $A - B = \{1, 2\}$
> - $(A - B)^c = \{3, 4, 5\}$
> - $A \cap B = \{3\}$ → $\{3\} \subseteq A$ y $\{3\} \subseteq B$ (la intersección siempre es subconjunto de ambos).

> [!tip] Relación con la probabilidad
> Resolver por extensión es el camino didáctico para entender las operaciones; en probabilidad las mismas reglas se aplican sobre los **sucesos** (subconjuntos del espacio muestral).

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Con $\Omega = \{1, 2, 3, 4, 5\}$, $A = \{1, 2, 3\}$ y $B = \{3, 4\}$, la unión $A \cup B$ es:

a) $\{1, 2, 3, 4\}$
b) $\{1, 2, 3, 4, 5\}$
c) $\{3\}$
d) $\{1, 2\}$

> **a) $\{1, 2, 3, 4\}$**

---

### Pregunta 2

Con los mismos conjuntos, la diferencia $A - B$ es:

a) $\{3\}$
b) $\{1, 2\}$
c) $\{4\}$
d) $\{1, 2, 3, 4\}$

> **b) $\{1, 2\}$**

---

### Pregunta 3

Con los mismos conjuntos, el complemento de la diferencia $(A - B)^c$ es:

a) $\{1, 2\}$
b) $\{3, 4, 5\}$
c) $\{1, 2, 3, 4, 5\}$
d) $\emptyset$

> **b) $\{3, 4, 5\}$**

---

### Pregunta 4

Con los mismos conjuntos, la intersección compuesta $(A \cup B) \cap A$ es:

a) $A$ = $\{1, 2, 3\}$
b) $B$ = $\{3, 4\}$
c) $\emptyset$
d) $\{1, 2, 3, 4\}$

> **a) $A$ = $\{1, 2, 3\}$**

---

### Pregunta 5

Con los mismos conjuntos, ¿cuál afirmación es **verdadera**?

a) $\{3\} \nsubseteq A$
b) $\{3\} \subseteq A$ y $\{3\} \subseteq B$
c) $A \subseteq B$
d) $B \subseteq A$

> **b) $\{3\} \subseteq A$ y $\{3\} \subseteq B$**

---

### Pregunta 6

Con los mismos conjuntos, $(A - B) \cap B$ es:

a) $\{1, 2\}$
b) $\{3\}$
c) $\emptyset$ (los elementos de $A - B$ no están en $B$)
d) $\{4\}$

> **c) $\emptyset$ (los elementos de $A - B$ no están en $B$)**

---

### Pregunta 7

Con los mismos conjuntos, $A \cap B^c$ es:

a) $\{1, 2\}$ (elementos de $A$ que no están en $B$)
b) $\{3, 4\}$
c) $\{3\}$
d) $\{1, 2, 3\}$

> **a) $\{1, 2\}$ (elementos de $A$ que no están en $B$)**

---

### Pregunta 8

La resolución **analítica por extensión** consiste en:

a) Operar símbolos abstractos sin numerar
b) Enumerar los elementos de cada conjunto y aplicar las operaciones paso a paso
c) Usar solo diagramas de Venn
d) Memorizar las fórmulas sin aplicarlas

> **b) Enumerar los elementos de cada conjunto y aplicar las operaciones paso a paso**

---

### Pregunta 9

Con $\Omega = \{a, b, c, d\}$, $X = \{a, b\}$ y $Y = \{b, c\}$, el resultado de $X \cup Y$ es:

a) $\{a, b, c\}$
b) $\{b\}$
c) $\{a, b, c, d\}$
d) $\{a, c\}$

> **a) $\{a, b, c\}$**

---

### Pregunta 10

Con $X = \{a, b\}$ y $Y = \{b, c\}$, el resultado de $X \cap Y$ es:

a) $\{a, b, c\}$
b) $\{b\}$
c) $\emptyset$
d) $\{a, c\}$

> **b) $\{b\}$**

---
