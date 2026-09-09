---
titulo: "Relaciones"
tipo: anotacion-video
tema: "Relaciones binarias"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Relaciones

## 🎬 Datos del video
- **Título:** Relations | Inferential Statistics
- **Canal:** José María Hernández Rivera (video en inglés)
- **Enlace:** https://www.youtube.com/results?search_query=Relations+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Una relación binaria es un subconjunto del producto cartesiano que vincula elementos de dos conjuntos. Se estudian su dominio, su rango, y su representación mediante diagramas sagitales y matrices.

## 🧮 Contenido

### Definición de relación binaria

Una relación $R$ entre los conjuntos $A$ y $B$ es un **subconjunto** del producto cartesiano:

$$R \subseteq A \times B$$

Un par $(a, b) \in R$ significa que $a$ está relacionado con $b$.

### Dominio de la relación

El **dominio** de $R$ es el conjunto de primeras componentes que participan:

$$\text{Dom}(R) = \{a \in A \mid \exists\, b \in B,\; (a,b) \in R\}$$

### Rango de la relación

El **rango** (o imagen) de $R$ es el conjunto de segundas componentes que participan:

$$\text{Rango}(R) = \{b \in B \mid \exists\, a \in A,\; (a,b) \in R\}$$

Obsérvese que no todo el conjunto $A$ tiene que ser dominio, ni todo $B$ rango: algunos elementos pueden quedar **sin relacionar**.

### Representación con diagrama sagital

Se dibujan dos conjuntos de puntos (uno para $A$, otro para $B$) y una **flecha** desde $a$ hasta $b$ por cada par $(a,b) \in R$.

- Un elemento de $A$ puede tener 0, 1 o varias flechas salientes.
- Un elemento de $B$ puede recibir 0, 1 o varias flechas entrantes.
- Los elementos sin flechas no pertenecen al dominio o al rango, respectivamente.

### Representación con matriz de relación

Se construye una matriz $M$ con filas $= A$ y columnas $= B$, donde:

$$M_{ij} = \begin{cases} 1 & \text{si } (a_i, b_j) \in R \\ 0 & \text{si } (a_i, b_j) \notin R \end{cases}$$

- La cantidad de **unos** por fila indica las relaciones de ese elemento de $A$.
- Una fila toda de ceros indica que ese elemento no está en el dominio.

### Relación vs. función

Toda **función** es una relación, pero no toda relación es una función. Una relación es función solo si cada elemento de $A$ tiene exactamente una flecha saliente.

## 💡 Ejemplo numérico

**Problema:** Sean $A = \{1, 2, 3\}$ y $B = \{4, 5\}$, con la relación:

$$R = \{(1,4), (1,5), (2,4)\} \subseteq A \times B$$

**Paso 1 — Dominio:**

$$\text{Dom}(R) = \{1, 2\}$$

El elemento $3$ no aparece en ningún par, así que no pertenece al dominio.

**Paso 2 — Rango:**

$$\text{Rango}(R) = \{4, 5\}$$

**Paso 3 — Matriz de la relación** (filas 1, 2, 3 y columnas 4, 5):

$$M = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 0 \end{pmatrix}$$

**Paso 4 — Diagrama sagital:** flechas $1 \to 4$, $1 \to 5$ y $2 \to 4$. El elemento $3$ queda aislado.

**Paso 5 — ¿Es función?**

No: el elemento $1$ tiene dos flechas salientes ($1\to4$ y $1\to5$), lo que viola la unicidad.

## 🌍 Ejemplo de la vida real

En una app de delivery, la relación "$R$: el restaurante $a$ está disponible para el distrito $b$" relaciona restaurantes con zonas de reparto. El dominio son los restaurantes que reparten a algún distrito y el rango los distritos atendidos por al menos un restaurante. La matriz indica de un vistazo qué distritos atiende cada restaurante, y si un restaurante atiende más de un distrito, la relación no puede ser una función "restaurante → distrito".

> [!tip] Relación con el curso
> Las relaciones binarias son la base de las funciones y del concepto de correspondencia entre variables, clave para entender la relación entre dos variables en inferencia estadística.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué es una relación binaria $R$ entre los conjuntos $A$ y $B$?

a) Una función que asigna cada elemento de $A$ a un solo elemento de $B$
b) Un subconjunto del producto cartesiano $A \times B$
c) El conjunto de todos los elementos de $A$ que no tienen imagen en $B$
d) Una matriz cuadrada de dimensión $|A| \times |B|$

> **b) Un subconjunto del producto cartesiano $A \times B$**

### Pregunta 2

Si $A = \{3, 7\}$ y $B = \{2, 8\}$, ¿pertenecen los pares $(3, 8)$ y $(7, 2)$ al producto cartesiano $A \times B$?

a) Ninguno pertenece
b) Solo $(7, 2)$ pertenece
c) Solo $(3, 8)$ pertenece
d) Ambos pertenecen

> **d) Ambos pertenecen**

### Pregunta 3

Sean $A = \{1, 2, 3\}$ y $B = \{4, 5\}$ con la relación $R = \{(1,4), (1,5), (2,4)\}$. ¿Cuál es el dominio de $R$?

a) $\{4, 5\}$
b) $\{1, 2, 3\}$
c) $\{1, 2\}$
d) $\{3, 4, 5\}$

> **c) $\{1, 2\}$**

### Pregunta 4

En una tienda en línea, la relación "$a$ envía al distrito $b$" vincula las zonas de despacho $A = \{X, Y, Z\}$ con los distritos $B = \{d_1, d_2, d_3\}$. Si el rango de la relación es $\{d_1, d_3\}$, ¿qué significa?

a) Ningún distrito recibe pedidos
b) Solo los distritos $d_1$ y $d_3$ reciben al menos un envío
c) Todos los distritos reciben pedidos
d) Solo la zona $Y$ realiza envíos

> **b) Solo los distritos $d_1$ y $d_3$ reciben al menos un envío**

### Pregunta 5

¿Cuál es la dimensión de la matriz de una relación $R$ entre $A = \{p, q, r\}$ y $B = \{s, t\}$?

a) $2 \times 3$
b) $3 \times 3$
c) $3 \times 2$
d) $2 \times 2$

> **c) $3 \times 2$**

### Pregunta 6

La matriz de la relación $R$ entre $A = \{a, b, c\}$ y $B = \{x, y\}$ es:

M = [[1, 0], [0, 1], [1, 1]]  (filas: a, b, c; columnas: x, y)

¿Cuántos pares contiene $R$?

a) 4
b) 3
c) 6
d) 2

> **a) 4**

### Pregunta 7

Si el elemento $c \in A$ tiene dos flechas salientes en el diagrama sagital (una hacia $x$ y otra hacia $y$), ¿qué puede afirmarse?

a) La relación es necesariamente una función
b) La relación no puede ser una función
c) La relación no tiene dominio
d) La relación está vacía

> **b) La relación no puede ser una función**

### Pregunta 8

Si $A = \{u, v\}$ y $B = \{m, n, p\}$, ¿cuántos pares forman el producto cartesiano $A \times B$?

a) 5
b) 3
c) 6
d) 9

> **c) 6**

### Pregunta 9

En un gimnasio, la relación "$a$ ofrece el servicio $b$" relaciona los paquetes $A = \{Básico, Premium\}$ con los servicios $B = \{Spa, Yoga, Box\}$, con $R = \{(Básico, Spa), (Premium, Yoga), (Premium, Box)\}$. ¿Es $R$ una función?

a) No, porque el elemento $Básico$ tiene dos flechas salientes
b) No, porque el servicio $Spa$ recibe solo una flecha
c) Sí, porque cada paquete tiene al menos una salida
d) No, porque $Premium$ tiene dos flechas salientes

> **d) No, porque $Premium$ tiene dos flechas salientes**

### Pregunta 10

Para $A = \{1, 2\}$, $B = \{3, 4\}$ y $R = \{(1,3), (2,3), (2,4)\}$, ¿cuál es la matriz de la relación?

a) [[1, 1], [1, 0]]
b) [[1, 0], [1, 1]]
c) [[0, 1], [1, 1]]
d) [[1, 0], [0, 1]]

> **b) [[1, 0], [1, 1]]**
