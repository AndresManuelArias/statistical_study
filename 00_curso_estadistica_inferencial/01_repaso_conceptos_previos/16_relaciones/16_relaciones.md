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
