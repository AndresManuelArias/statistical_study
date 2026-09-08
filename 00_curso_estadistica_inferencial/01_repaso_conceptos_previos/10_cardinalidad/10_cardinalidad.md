---
titulo: Cardinalidad de un conjunto
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - cardinalidad
---

# 🔢 Cardinalidad de un conjunto

## 🎬 Datos del video

- **Título:** Cardinalidad de un conjunto | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=5ovNShM6GAk)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/c-P4-AGjFE8?si=5LaSml4ZAGWDEKpm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se introduce la **cardinalidad** de un conjunto (número de elementos) con sus notaciones y el concepto de **conjuntos similares**. Se presentan las dos fórmulas de cardinalidad para la unión: el caso de conjuntos disjuntos y el caso general con intersección (para evitar contar dos veces).

## 🧮 Contenido

## Concepto de cardinalidad

- La **cardinalidad** es el número de elementos que pertenecen a un conjunto.
- **Notaciones:** $n(A)$, $|A|$ o $\#A$.
- **Ejemplo:** si $A = \{1, 2, 3, 4\}$, entonces $n(A) = 4$.

## Conjuntos similares

- Son aquellos que poseen **la misma cardinalidad** pero **diferentes elementos**.
- **Ejemplo:** $A = \{1, 2\}$ y $B = \{a, b\}$ son similares ($n(A) = n(B) = 2$) pero no iguales.

## Fórmulas de cardinalidad para uniones

### Caso 1 (disjuntos)

Si $A \cap B = \emptyset$, entonces:

$$
n(A \cup B) = n(A) + n(B)
$$

### Caso 2 (con intersección)

En general:

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B)
$$

Restamos la intersección para **no contar dos veces** los elementos comunes.

> [!tip] Relación con la probabilidad
> Para sucesos disjuntos: $P(A \cup B) = P(A) + P(B)$. Con intersección: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La fórmula general de la **cardinalidad de la unión** de dos conjuntos es:

a) $n(A \cup B) = n(A) + n(B)$
b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$
c) $n(A \cup B) = n(A) \cdot n(B)$
d) $n(A \cup B) = n(A) - n(B)$

> **b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$**

---

### Pregunta 2

Si $A$ y $B$ son **disjuntos**, la cardinalidad de su unión es:

a) $n(A \cup B) = n(A) + n(B)$
b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ (con $n(A\cap B)>0$)
c) $n(A \cup B) = 0$
d) $n(A \cup B) = n(A) \cdot n(B)$

> **a) $n(A \cup B) = n(A) + n(B)$**

---

### Pregunta 3

En un gimnasio, $|A|$ (inscritos en yoga) = 11700, $|T|$ (usan la piscina) = 10972 y $|A \cap T| = 2987$. La cardinalidad de $A \cup T$ es:

a) 11700 + 10972 = 22672
b) 22672 - 2987 = **19685**
c) 2987
d) 45000

> **b) 22672 - 2987 = 19685**
---

### Pregunta 4

La **cardinalidad** de un conjunto es:

a) El nombre del conjunto
b) El número de elementos que pertenecen al conjunto
c) La suma de sus elementos
d) El conjunto de sus subconjuntos

> **b) El número de elementos que pertenecen al conjunto**

---

### Pregunta 5

Las notaciones válidas para la cardinalidad de $A$ son:

a) $n(A)$, $|A|$ y $\#A$
b) $A$, $A^c$ y $\Omega$
c) $\in A$, $\subseteq A$ y $\cup A$
d) $2^A$, $\mathcal{P}(A)$ y $A$

> **a) $n(A)$, $|A|$ y $\#A$**

---

### Pregunta 6

Dos conjuntos son **similares** cuando:

a) Tienen exactamente los mismos elementos
b) Tienen la **misma cardinalidad** pero elementos diferentes
c) Uno es subconjunto del otro
d) Su intersección es vacía

> **b) Tienen la misma cardinalidad pero elementos diferentes**

---

### Pregunta 7

Si $n(A) = 3$ y $n(B) = 4$ con $n(A \cap B) = 1$, entonces $n(A \cup B)$ es:

a) 7
b) 6
c) 12
d) 3

> **b) 6 (pues $3 + 4 - 1 = 6$)**

---

### Pregunta 8

¿Por qué en el caso general se **resta** $n(A \cap B)$?

a) Para que el resultado sea más pequeño
b) Para **no contar dos veces** los elementos comunes
c) Porque la resta es obligatoria en toda unión
d) Para eliminar los elementos de $B$

> **b) Para no contar dos veces los elementos comunes**

---

### Pregunta 9

Si $A \cap B = \emptyset$, $n(A) = 5$ y $n(B) = 7$, entonces $n(A \cup B)$ es:

a) 35
b) 12
c) 2
d) 0

> **b) 12**

---

### Pregunta 10

Si $n(A \cup B) = 20$, $n(A) = 12$ y $n(A \cap B) = 3$, entonces $n(B)$ es:

a) 11
b) 8
c) 15
d) 5

> **a) 11 (pues $n(B) = n(A \cup B) - n(A) + n(A \cap B) = 20 - 12 + 3 = 11$)**

---
