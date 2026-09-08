---
titulo: Conjunto potencia
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - conjunto-potencia
---

# ⚡ Conjunto potencia

## 🎬 Datos del video

- **Título:** Conjunto potencia | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=_2g4naWTsYg)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se introduce el **conjunto potencia** $\mathcal{P}(A)$: el conjunto de **todos los subconjuntos posibles** de $A$. Se estudia su cardinalidad $n(\mathcal{P}(A)) = 2^{n(A)}$ con ejemplos para conjuntos de 2 y 3 elementos, y el caso especial del vacío.

## 🧮 Contenido

## Definición de conjunto potencia ($\mathcal{P}(A)$)

- Es el conjunto formado por **todos los subconjuntos posibles** de un conjunto dado $A$, incluyendo el **vacío** ($\emptyset$) y el **propio** $A$.
- **Ejemplo:** si $A = \{a, b\}$, entonces:

$$
\mathcal{P}(A) = \{\emptyset,\ \{a\},\ \{b\},\ \{a,b\}\}
$$

## Fórmula de la cardinalidad del conjunto potencia

$$
n(\mathcal{P}(A)) = 2^{n(A)}
$$

donde $n(A)$ es la cardinalidad del conjunto original.

## Ejemplos prácticos

- **Con $n = 2$:** $A = \{a, b\}$ → $2^2 = 4$ subconjuntos: $\emptyset$, $\{a\}$, $\{b\}$, $\{a,b\}$.
- **Con $n = 3$:** $A = \{a, b, c\}$ → $2^3 = 8$ subconjuntos: $\emptyset$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a,b\}$, $\{a,c\}$, $\{b,c\}$, $\{a,b,c\}$.
- **Con matríz en el vacío:** $\mathcal{P}(\emptyset) = \{\emptyset\}$ → $2^0 = 1$ subconjunto.

> [!tip] Relación con el curso
> El conjunto potencia es la base del **análisis combinatorio** (tema 02): el número de subconjuntos posibles de $n$ elementos es $2^n$, y cada subconjunto representa un **suceso** del espacio muestral cuando $A$ es un suceso.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

El **conjunto potencia** $\mathcal{P}(A)$ es:

a) El conjunto de los elementos más grandes de $A$
b) El conjunto formado por **todos los subconjuntos posibles** de $A$
c) El conjunto de los elementos repetidos de $A$
d) El complemento de $A$

> **b) El conjunto formado por todos los subconjuntos posibles de A**

---

### Pregunta 2

Si $n(A) = 5$, entonces $n(\mathcal{P}(A))$ es:

a) 5
b) 10
c) 25
d) **32** (porque $2^5 = 32$)

> **d) 32 (porque $2^5 = 32$)**

---

### Pregunta 3

El conjunto potencia del **conjunto vacío** ($\mathcal{P}(\emptyset)$) tiene:

a) 0 elementos
b) **1 elemento** (el subconjunto vacío: $2^0 = 1$)
c) 2 elementos
d) 4 elementos

> **b) 1 elemento (el subconjunto vacío: $2^0 = 1$)**

---

### Pregunta 4

La fórmula de la cardinalidad del conjunto potencia es:

a) $n(\mathcal{P}(A)) = n(A)$
b) $n(\mathcal{P}(A)) = 2^{n(A)}$
c) $n(\mathcal{P}(A)) = n(A)^2$
d) $n(\mathcal{P}(A)) = n!$

> **b) $n(\mathcal{P}(A)) = 2^{n(A)}$**

---

### Pregunta 5

Si $A = \{a, b\}$, entonces $\mathcal{P}(A)$ es:

a) $\{a, b\}$
b) $\{\emptyset, \{a\}, \{b\}, \{a,b\}\}$
c) $\{\emptyset, \{a\}, \{b\}\}$
d) $\{\{a\}, \{b\}\}$

> **b) $\{\emptyset, \{a\}, \{b\}, \{a,b\}\}$**

---

### Pregunta 6

El conjunto potencia de $A$ **siempre incluye**:

a) Solo los subconjuntos de un elemento
b) El **conjunto vacío** $\emptyset$ y el **propio conjunto** $A$
c) Solo los elementos de $A$
d) El complemento de $A$

> **b) El conjunto vacío $\emptyset$ y el propio conjunto $A$**

---

### Pregunta 7

Si $n(A) = 3$, el número de subconjuntos de $A$ es:

a) 3
b) 6
c) 8
d) 9

> **c) 8**

---

### Pregunta 8

¿Cuántos subconjuntos tiene un conjunto de **1 elemento**?

a) 1
b) 2 ($\emptyset$ y el propio elemento)
c) 4
d) 0

> **b) 2 ($\emptyset$ y el propio elemento)**

---

### Pregunta 9

El conjunto potencia de $A = \{x, y, z\}$ (**2 elementos** en la lista) tiene:

a) 3 elementos
b) 4 elementos
c) 8 elementos
d) 2 elementos

> **b) 4 elementos (porque $n(\mathcal{P}(A)) = 2^{2} = 4$)**

---

### Pregunta 10

La regla del conjunto potencia se conecta con el análisis combinatorio porque:

a) Cuenta las permutaciones de los elementos
b) Cuenta el número de subconjuntos posibles de $n$ elementos como $2^n$
c) Cuenta solo los subconjuntos de tamaño 2
d) No tiene relación

> **b) Cuenta el número de subconjuntos posibles de $n$ elementos como $2^n$**

---
