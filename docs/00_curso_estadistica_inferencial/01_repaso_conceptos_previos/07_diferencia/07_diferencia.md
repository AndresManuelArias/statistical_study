---
titulo: Diferencia de conjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - diferencia
---

# ➖ Diferencia de conjuntos

## 🎬 Datos del video

- **Título:** Diferencia de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=JO7NsN4ZJp4)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/JO7NsN4ZJp4?si=SEqqIkul_KJGKNQK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se introduce la **diferencia** de conjuntos ($A - B$): los elementos que pertenecen a $A$ pero no a $B$. Equivale a "quitarle" a $A$ los elementos que comparte con $B$, y se estudian sus casos prácticos (con intersección, conjuntos iguales, subconjuntos y disjuntos).

## 🧮 Contenido

## Operación Diferencia ($A - B$)

- **Definición:** elementos que pertenecen al conjunto $A$ pero no pertenecen al conjunto $B$ (equivalente a "quitarle" a $A$ los elementos que comparte con $B$).
- Por comprensión:

$$
A - B = \{x \mid x \in A \land x \notin B\}
$$

### Relación con la intersección y el complemento

Quitar los elementos de $B$ es equivalente a intersecar $A$ con el **complemento** de $B$:

$$
A - B = A \cap B^c
$$

> [!tip] Idea clave
> La diferencia no es otra cosa que "$A$ y **no** $B$". Por eso, en probabilidad, $P(A - B) = P(A \cap B^c)$ es la probabilidad de que ocurra $A$ **sin** que ocurra $B$.

## Casos prácticos

- **Intersección distinta del vacío:** se eliminan solo los comunes.
  - Ejemplo: $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5\}$ → $A - B = \{1, 2\}$.
- **Conjuntos iguales:** $A - A = \emptyset$.
- **Diferencia entre un conjunto y su subconjunto:** si $B \subseteq A$, entonces $A - B$ deja solo los elementos de $A$ que no están en $B$.
  - Ejemplo: $A = \{1, 2, 3\}$, $B = \{1, 2\}$ → $A - B = \{3\}$.
- **Conjuntos disjuntos:** el resultado es el primer conjunto completo ($A - B = A$).

### La diferencia NO es conmutativa

En general **$A - B \neq B - A$**:

- $A - B$: lo que está en $A$ pero no en $B$.
- $B - A$: lo que está en $B$ pero no en $A$.

> [!example] Ejemplo numérico
> Con $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$:
> - $A - B = \{1, 2\}$
> - $B - A = \{5\}$
> - Son conjuntos distintos (de hecho disjuntos).

### Diferencia en un gimnasio (lectura)

Definimos $A$ = socios inscritos en yoga (11,700) y $T$ = socios que usan la piscina (10,972), con $|A \cap T| = 2,987$:

- **$|A - T| = 11,700 - 2,987 = 8,713$** → socios de yoga que **no** usan la piscina.
- **$|T - A| = 10,972 - 2,987 = 7,985$** → socios de piscina que **no** están en yoga.
- **Verificación:** $|A - T| + |A \cap T| = 8,713 + 2,987 = 11,700 = |A|$. Cada elemento de $A$ está en $A - T$ **o** en $A \cap T$, nunca en ambos (partición de $A$).

> [!tip] Relación con suceso "y no"
> $|A - T| = 8,713$ se lee en probabilidad como: de los 45,000 socios del gimnasio, hay 8,713 que están en yoga **y no** usan la piscina. Si dividimos por $|\Omega|$ obtenemos $P(A - T) = P(A \cap T^c) = 8,713 / 45,000 \approx 0.19$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **diferencia** $A - B$ (elementos de $A$ que no están en $B$) para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$ es:

a) $\{1, 2\}$
b) $\{3, 4\}$
c) $\{5\}$
d) $\{1, 2, 3, 4, 5\}$

> **a) $\{1, 2\}$**

---

### Pregunta 2

La **diferencia** de un conjunto consigo mismo ($A - A$) es:

a) $A$
b) $\Omega$
c) El **conjunto vacío**
d) $A^c$

> **c) El conjunto vacío**

---

### Pregunta 3

La **diferencia** $A - B$ es equivalente a la siguiente operación con el complemento:

a) $A \cup B^c$
b) $A \cap B^c$
c) $A^c \cap B$
d) $A \cup B$

> **b) $A \cap B^c$**

---

### Pregunta 4

En un gimnasio, $A$ = socios inscritos en yoga (11,700) y $T$ = socios que usan la piscina (10,972), con $|A \cap T| = 2,987$. La cardinalidad de $A - T$ (socios de yoga **que no** usan la piscina) es:

a) 7985
b) 2987
c) **8713** (pues $11700 - 2987 = 8713$)
d) 10972

> **c) 8713 (pues $11700 - 2987 = 8713$)**
---

### Pregunta 5

Si $A$ y $B$ son **disjuntos** ($A \cap B = \emptyset$), entonces la diferencia $A - B$ es:

a) $\emptyset$
b) $B$
c) $\Omega$
d) **$A$** (al no compartir elementos, no hay nada que quitar)

> **d) $A$ (al no compartir elementos, no hay nada que quitar)**

---

### Pregunta 6

Para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$, la diferencia $B - A$ es:

a) $\{1, 2\}$
b) $\{3, 4\}$
c) $\{5\}$
d) $\emptyset$

> **c) $\{5\}$**

---

### Pregunta 7

La diferencia de conjuntos **no es conmutativa**. Para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$:

a) $A - B = B - A = \{1, 2, 5\}$
b) $A - B = \{1, 2\}$ y $B - A = \{5\}$
c) $A - B = B - A = \emptyset$
d) $A - B = \{5\}$ y $B - A = \{1, 2\}$

> **b) $A - B = \{1, 2\}$ y $B - A = \{5\}$**

---

### Pregunta 8

Si $B \subseteq A$, entonces $A - B$ representa:

a) Todos los elementos de $A$
b) Los elementos de $B$
c) Solo los elementos de $A$ que **no** están en $B$
d) $\emptyset$

> **c) Solo los elementos de $A$ que no están en $B$**

---

### Pregunta 9

Por comprensión, la diferencia se define como:

a) $A - B = \{x \mid x \in A \land x \in B\}$
b) $A - B = \{x \mid x \in A \land x \notin B\}$
c) $A - B = \{x \mid x \notin A \lor x \in B\}$
d) $A - B = \{x \mid x \in B \land x \notin A\}$

> **b) $A - B = \{x \mid x \in A \land x \notin B\}$**

---

### Pregunta 10

Si $B$ = socios de yoga que usan la piscina y $A$ = socios de yoga ($B \subseteq A$), entonces $A - B$ es:

a) $|A| - |B| = 11700 - 2987 = 8713$
b) $|B| = 2987$
c) $0$
d) $45000$

> **a) $|A| - |B| = 11700 - 2987 = 8713$**
---
