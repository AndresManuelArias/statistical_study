---
titulo: "Producto de conjuntos"
tipo: anotacion-video
tema: "Producto cartesiano"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Producto de conjuntos

## 🎬 Datos del video
- **Título:** Producto de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Producto+de+conjuntos+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/sECAR7-_RXs?si=rxhV65uqsH_TQyqC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
El producto cartesiano combina todos los elementos de dos conjuntos en pares ordenados. Se estudia su definición, la representación de los pares, la propiedad de que el orden sí importa, y el cálculo de su cardinalidad como producto de las cardinalidades de los conjuntos originales.

## 🧮 Contenido

### Definición de producto cartesiano

El producto cartesiano de $A$ y $B$, escrito $A \times B$, es el conjunto de **todos los pares ordenados** formados por un elemento de $A$ como primera componente y un elemento de $B$ como segunda:

$$A \times B = \{(a, b) \mid a \in A,\, b \in B\}$$

### El orden importa

En un par ordenado $(a, b)$:

- $a$ es la **primera componente** (elemento de $A$).
- $b$ es la **segunda componente** (elemento de $B$).

En general, $(a, b) \neq (b, a)$, siempre que $a \neq b$. Por eso:

$$A \times B \neq B \times A$$

Aunque ambos productos tengan la misma **cantidad** de elementos, los pares que los forman son distintos.

### Cardinalidad del producto

El número de pares ordenados es el producto de las cardinalidades:

$$|A \times B| = |A| \cdot |B|$$

Si hay más de dos conjuntos, se generaliza de forma natural:

$$|A_1 \times A_2 \times \cdots \times A_k| = |A_1| \cdot |A_2| \cdots |A_k|$$

### Propiedades del producto cartesiano

- Producto con vacío: $A \times \varnothing = \varnothing$.
- Si $|A| = m$ y $|B| = n$, entonces $|A \times B| = mn$.
- El producto cartesiano se relaciona con el **principio de multiplicación** del conteo: para contar el total de combinaciones de dos etapas, se multiplican las opciones de cada etapa.

## 💡 Ejemplo numérico

**Problema:** Dados $A = \{1, 2, 3\}$ y $B = \{x, y\}$, calcular $A \times B$, $B \times A$ y sus cardinalidades.

**Paso 1:** Formamos los pares tomando cada elemento de $A$ con cada uno de $B$:

$$A \times B = \{(1,x), (1,y), (2,x), (2,y), (3,x), (3,y)\}$$

**Paso 2:** Contamos los pares:

$$|A \times B| = |A| \cdot |B| = 3 \cdot 2 = 6$$

**Paso 3:** Formamos $B \times A$ invirtiendo el orden:

$$B \times A = \{(x,1), (y,1), (x,2), (y,2), (x,3), (y,3)\}$$

**Paso 4:** Verificamos la cardinalidad:

$$|B \times A| = |B| \cdot |A| = 2 \cdot 3 = 6$$

**Observación:** Ambos tienen 6 elementos, pero no son el mismo conjunto: por ejemplo, $(1,x) \in A \times B$ pero $(1,x) \notin B \times A$.

## 💡 Segundo ejemplo: tres conjuntos

**Problema:** Sea $C = \{0,1\}$, $D = \{a\}$, $E = \{p, q\}$.

**Paso 1 — Cardinalidad del producto triple:**

$$|C \times D \times E| = |C| \cdot |D| \cdot |E| = 2 \cdot 1 \cdot 2 = 4$$

**Paso 2 — Enumeración:**

$$C \times D \times E = \{(0,a,p), (0,a,q), (1,a,p), (1,a,q)\}$$

**Conclusión:** Aunque $D$ tenga un solo elemento, multiplica las combinaciones restantes: al final hay $2 \times 1 \times 2 = 4$ tripletas.

## 🌍 Ejemplo de la vida real

Un repartidor de una plataforma puede combinar 4 rutas posibles con 3 vehículos disponibles. El número total de formas de elegir una ruta y un vehículo es $4 \times 3 = 12$, es decir, $|R \times V| = 12$. Si además hay 2 franjas horarias, el sistema tiene $4 \times 3 \times 2 = 24$ combinaciones de reparto posibles, lo que permite al sistema enumerar todas las opciones y optimizar la asignación.

> [!tip] Relación con el curso
> El producto cartesiano es la base del **diagrama de árbol** y del **principio de multiplicación**, esenciales para contar los resultados de experimentos y calcular probabilidades en inferencia estadística.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué describe formalmente el producto cartesiano $A \times B$?

a) El conjunto de todos los subconjuntos de $A$ y $B$ formados por unión
b) El conjunto de todos los pares ordenados $(a, b)$ donde $a \in A$ y $b \in B$
c) El conjunto de todos los elementos que están tanto en $A$ como en $B$
d) El conjunto de todas las permutaciones posibles de los elementos de $A$ y $B$

> **b) El conjunto de todos los pares ordenados $(a, b)$ donde $a \in A$ y $b \in B$**

---

### Pregunta 2

Si $A = \{m, n\}$ y $B = \{1, 2\}$, ¿cuál de los siguientes pares ordenados pertenece a $A \times B$?

a) $(2, n)$
b) $(1, 2)$
c) $(n, m)$
d) $(m, 1)$

> **d) $(m, 1)$**

---

### Pregunta 3

Dados $A = \{1, 2, 3\}$ y $B = \{x, y\}$, ¿cuántos elementos tiene $A \times B$?

a) 5
b) 2
c) 6
d) 8

> **c) 6**

---

### Pregunta 4

Con $A = \{1, 2, 3\}$ y $B = \{x, y\}$, ¿cuál de los siguientes pares pertenece a $B \times A$?

a) $(3, y)$
b) $(1, x)$
c) $(y, 3)$
d) $(x, 2)$

> **d) $(x, 2)$**

---

### Pregunta 5

¿Qué resultado se obtiene al calcular $A \times \varnothing$?

a) $\{(\varnothing, \varnothing)\}$
b) $\varnothing$
c) $\{\varnothing\}$
d) $A$

> **b) $\varnothing$**

---

### Pregunta 6

Dado un producto de tres conjuntos $C \times D \times E$ con $|C| = 2$, $|D| = 1$ y $|E| = 2$, ¿cuántas tripletas ordenadas contiene el producto?

a) 4
b) 5
c) 2
d) 3

> **a) 4**

---

### Pregunta 7

Un sistema de logística ofrece 4 rutas de reparto, 3 tipos de vehículo y 2 franjas horarias. Usando el principio de multiplicación, ¿cuántas combinaciones totales de ruta, vehículo y franja horaria puede generar el sistema?

a) 9
b) 14
c) 12
d) 24

> **d) 24**

---

### Pregunta 8

Para dos conjuntos no vacíos $A$ y $B$ con $A \neq B$, ¿cuál es la relación correcta entre $A \times B$ y $B \times A$?

a) Son conjuntos distintos, aunque ambos tengan la misma cantidad de elementos
b) Son siempre el mismo conjunto
c) $B \times A$ siempre tiene más elementos que $A \times B$
d) $A \times B$ siempre tiene más elementos que $B \times A$

> **a) Son conjuntos distintos, aunque ambos tengan la misma cantidad de elementos**

---

### Pregunta 9

Si un conjunto $A$ tiene 5 elementos y un conjunto $B$ tiene 7 elementos, ¿cuántos pares ordenados contiene $A \times B$?

a) 12
b) 30
c) 35
d) 49

> **c) 35**

---

### Pregunta 10

Si $A = \{1, 2, 3\}$ y $B = \{x, y\}$, ¿cuántos elementos tiene $B \times A$?

a) 3
b) 6
c) 5
d) 9

> **b) 6**
