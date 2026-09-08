---
titulo: Intersección de conjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - interseccion
---

# ✂️ Intersección de conjuntos

## 🎬 Datos del video

- **Título:** Intersección de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=xjdowwI35C0)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/xjdowwI35C0?si=gZEpcxmxbvOrTnCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se introduce la **intersección** de conjuntos: los elementos que pertenecen a **ambos** conjuntos simultáneamente. Se estudian sus casos particulares, los **conjuntos disjuntos** y sus propiedades básicas.

## 🧮 Contenido

## Intersección ($A \cap B$)

- **Definición:** elementos que pertenecen a ambos conjuntos de manera simultánea.
- Por comprensión:

$$
A \cap B = \{x \mid x \in A \land x \in B\}
$$

## Casos particulares de intersección

- **Intersección distinta del vacío:** $A \cap B \neq \emptyset$ (comparten elementos).
- **Intersección de conjuntos iguales (idempotencia):** $A \cap A = A$.
- **Intersección de un conjunto y su subconjunto:** si $B \subseteq A$, entonces $A \cap B = B$ (el más pequeño).
- **Conjuntos disjuntos:** aquellos cuya intersección es vacía ($A \cap B = \emptyset$).

## Propiedades básicas

- $A \cap \emptyset = \emptyset$
- $A \cap \Omega = A$
- $A \cap A = A$

> [!tip] Relación con la probabilidad
> - $P(A \cap B)$ → probabilidad de que ocurran A **y** B a la vez.
> - Si $A \cap B = \emptyset$ → A y B son **mutuamente excluyentes** y $P(A \cap B) = 0$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Dados $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, la intersección $A \cap B$ es:

a) $\{1, 2, 3, 4, 5\}$
b) $\{3\}$
c) $\{1, 2\}$
d) $\emptyset$

> **b) $\{3\}$**

---

### Pregunta 2

Si dos conjuntos $A$ y $B$ son **mutuamente excluyentes** (no comparten elementos), se cumple que:

a) $A \cup B = \emptyset$
b) $A \cap B = \emptyset$
c) $A \subseteq B$
d) $A = B$

> **b) $A \cap B = \emptyset$**

---

### Pregunta 3

La intersección de un conjunto consigo mismo ($A \cap A$) es:

a) $\emptyset$
b) $A$
c) $\Omega$
d) $A^c$

> **b) $A$**

---

### Pregunta 4

Si $B \subseteq A$, entonces la intersección $A \cap B$ es:

a) $A$
b) $B$
c) $\emptyset$
d) $\Omega$

> **b) $B$**

---

### Pregunta 5

La intersección de un conjunto con el vacío ($A \cap \emptyset$) es:

a) $A$
b) $\emptyset$
c) $\Omega$
d) $A^c$

> **b) $\emptyset$**

---

### Pregunta 6

La intersección de un conjunto con el universo ($A \cap \Omega$) es:

a) $A$
b) $\Omega$
c) $\emptyset$
d) $A^c$

> **a) $A$**

---

### Pregunta 7

Por comprensión, la intersección se define como:

a) $A \cap B = \{x \mid x \in A \lor x \in B\}$
b) $A \cap B = \{x \mid x \in A \land x \in B\}$
c) $A \cap B = \{x \mid x \notin A\}$
d) $A \cap B = \{x \mid x \in B,\ x \notin A\}$

> **b) $A \cap B = \{x \mid x \in A \land x \in B\}$**

---

### Pregunta 8

En un gimnasio, $A$ = socios inscritos en yoga (11,700) y $T$ = socios que usan la piscina (10,972). Si $|A \cap T| = 2987$, entonces:

a) 2987 socios están en yoga **y** usan la piscina
b) 2987 socios están en yoga o usan la piscina
c) 2987 socios no están en yoga
d) 2987 socios están dados de baja

> **a) 2987 socios están en yoga y usan la piscina**
---

### Pregunta 9

Dos conjuntos son **disjuntos** cuando:

a) Su unión es el universo
b) Su intersección es vacía ($A \cap B = \emptyset$)
c) Uno es subconjunto del otro
d) Tienen la misma cardinalidad

> **b) Su intersección es vacía ($A \cap B = \emptyset$)**

---

### Pregunta 10

Si $A \cap B = \emptyset$, la probabilidad $P(A \cap B)$ es:

a) 1
b) 0.5
c) 0
d) $P(A)$

> **c) 0**

---
