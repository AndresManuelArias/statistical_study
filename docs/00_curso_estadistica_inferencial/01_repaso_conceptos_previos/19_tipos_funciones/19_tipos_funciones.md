---
titulo: "Tipos de funciones"
tipo: anotacion-video
tema: "Clasificación de funciones"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Tipos de funciones

## 🎬 Datos del video
- **Título:** Tipos de funciones | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Tipos+de+funciones+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/HOnTwNhII_k?si=nhqTKdWDfQQ1FjPl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 📋 Resumen
Se clasifican las funciones según su comportamiento: inyectivas, sobreyectivas, biyectivas, constantes, de identidad, crecientes y decrecientes. Cada tipo se caracteriza por su dominio, codominio y la relación entre entradas y salidas.

## 🧮 Contenido

### Función inyectiva

Cada valor del rango es imagen de un único elemento del dominio:

$$f(a) = f(b) \implies a = b$$

Dos elementos distintos tienen siempre imágenes distintas. La misma salida nunca proviene de dos entradas diferentes.

**📊 Visualización — $f(x) = 2x$ (inyectiva):**

```chart
type: scatter
labels: [1, 2, 3]
series:
  - title: "Puntos de f(x) = 2x"
    data: [2, 4, 6]
width: 90%
labelColors: false
beginAtZero: true
```

> Cada valor de entrada (1, 2, 3) tiene una única imagen (2, 4, 6). No hay dos entradas que compartan la misma salida.

### Función sobreyectiva

El rango coincide con el codominio:

$$\text{Rango}(f) = \text{Codominio}(f)$$

Todo elemento del codominio es alcanzado por algún elemento del dominio.

**📊 Visualización — $f(x) = \sin(x)$ con codominio $[-1, 1]$ (sobreyectiva):**

```chart
type: line
labels: [0, 1, 2, 3, 4, 5, 6]
series:
  - title: "f(x) = sin(x)"
    data: [0, 0.84, 0.91, 0.14, -0.76, -0.96, -0.28]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> La onda cubre todos los valores del rango $[-1, 1]$. Cada punto en el codominio es alcanzado por al menos un punto del dominio. Note que múltiples valores de X comparten el mismo Y, pero todos los valores posibles del codominio son alcanzados.

### Función biyectiva

Es simultáneamente **inyectiva y sobreyectiva**. Establece una correspondencia uno a uno entre dominio y codominio, y es la única que garantiza función inversa.

**📊 Visualización — $f(x) = 2x$ (biyectiva):**

```chart
type: line
labels: [1, 2, 3]
series:
  - title: "f(x) = 2x (biyectiva)"
    data: [2, 4, 6]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Cada elemento del dominio se asocia con exactamente un elemento del codominio, y viceversa. Existe una correspondencia perfecta (relación uno a uno).

### Función constante

Asigna el mismo valor a todo elemento del dominio:

$$f(x) = c \quad \text{para todo } x$$

Su gráfica es una recta horizontal.

**📊 Visualización — $f(x) = 3$ (constante):**

```chart
type: line
labels: [-2, -1, 0, 1, 2, 3]
series:
  - title: "f(x) = 3"
    data: [3, 3, 3, 3, 3, 3]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Independientemente del valor de entrada, la salida siempre es la misma (en este caso 3). La gráfica es una línea horizontal.

### Función identidad

A cada elemento le hace corresponder sí mismo:

$$I(x) = x$$

Es siempre biyectiva y su gráfica es la bisectriz del primer y tercer cuadrante.

**📊 Visualización — $f(x) = x$ (identidad):**

```chart
type: line
labels: [-2, -1, 0, 1, 2]
series:
  - title: "f(x) = x"
    data: [-2, -1, 0, 1, 2]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Cada entrada es igual a su salida. La gráfica es la diagonal del cuadrante, donde $y = x$. Es siempre biyectiva porque es inyectiva y sobreyectiva.

### Funciones crecientes y decrecientes

- **Creciente**: si $x_1 < x_2$ entonces $f(x_1) \leq f(x_2)$.
- **Estrictamente creciente**: $x_1 < x_2 \implies f(x_1) < f(x_2)$.
- **Decreciente**: si $x_1 < x_2$ entonces $f(x_1) \geq f(x_2)$.
- **Estrictamente decreciente**: $x_1 < x_2 \implies f(x_1) > f(x_2)$.

**📊 Visualización — Comparación de creciente y decreciente:**

```chart
type: line
labels: [0, 1, 2, 3, 4]
series:
  - title: "f(x) = x (creciente)"
    data: [0, 1, 2, 3, 4]
  - title: "g(x) = -x + 4 (decreciente)"
    data: [4, 3, 2, 1, 0]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> La función $f(x) = x$ es **estrictamente creciente** (sube conforme avanza X). La función $g(x) = -x + 4$ es **estrictamente decreciente** (baja conforme avanza X).

### Tabla resumen

| Tipo | Condición clave |
|---|---|
| Inyectiva | $f(a)=f(b) \Rightarrow a=b$ |
| Sobreyectiva | $\text{Rango} = \text{Codominio}$ |
| Biyectiva | Inyectiva + sobreyectiva |
| Constante | $f(x) = c$ |
| Identidad | $f(x) = x$ |
| Creciente | $x_1 < x_2 \Rightarrow f(x_1) \leq f(x_2)$ |
| Decreciente | $x_1 < x_2 \Rightarrow f(x_1) \geq f(x_2)$ |

## 💡 Ejemplo numérico

**Problema:** Clasificar $f(x) = 2x$ con dominio $\{1, 2, 3\}$ y codominio $\{2, 4, 6\}$.

**Paso 1:** Calcular valores:

$$f(1)=2,\quad f(2)=4,\quad f(3)=6$$

**Paso 2 — ¿Inyectiva?** Sí: entradas distintas ($1,2,3$) dan imágenes distintas ($2,4,6$). No hay dos salidas iguales.

**Paso 3 — ¿Sobreyectiva?** Sí: el rango $\{2,4,6\}$ coincide exactamente con el codominio.

**Paso 4 — Conclusión:** Es inyectiva y sobreyectiva, luego es **biyectiva**. Además es estrictamente creciente, porque si $x_1 < x_2$ entonces $2x_1 < 2x_2$.

**📊 Gráfico:**

```chart
type: line
labels: [1, 2, 3]
series:
  - title: "f(x) = 2x (biyectiva)"
    data: [2, 4, 6]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Observa cómo cada punto del dominio mapea a un único punto del codominio sin repeticiones, y todos los valores del codominio son alcanzados. La línea sube continuamente (creciente).

## 💡 Segundo ejemplo: función no inyectiva

**Problema:** Clasificar $g(x) = x^2$ con dominio $\{-2,0,2\}$ y codominio $\{0,4\}$.

**Paso 1:** $g(-2)=4$, $g(0)=0$, $g(2)=4$.

**Paso 2 — ¿Inyectiva?** No: $-2$ y $2$ comparten imagen $4$.

**Paso 3 — ¿Sobreyectiva?** Sí: el rango $\{0,4\}$ coincide con el codominio.

**Conclusión:** Es sobreyectiva pero no inyectiva, así que tampoco es biyectiva.

**📊 Gráfico:**

```chart
type: line
labels: [-2, -1, 0, 1, 2]
series:
  - title: "g(x) = x² (no inyectiva)"
    data: [4, 1, 0, 1, 4]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Observa la forma de parábola: dos valores distintos del dominio ($-2$ y $2$) comparten la misma imagen ($4$). Esto viola la condición de inyectividad. Sin embargo, el rango $\{0, 1, 4\}$ coincide con el codominio, por lo que es sobreyectiva.

## 🌍 Ejemplo de la vida real

En el control de calidad de una fábrica, la función que asigna a cada lote de producción su número de piezas defectuosas puede ser no inyectiva (dos lotes con el mismo conteo). Si definimos el conteo sobre lotes distintos y verificamos que cada valor se asocia a un solo lote, decidimos si la correspondencia es inyectiva, sobreyectiva o biyectiva según el caso.

> [!tip] Relación con el curso
> Reconocer si una función es inyectiva o sobreyectiva es útil para saber si una transformación de datos es reversible y para interpretar biyecciones en la estandarización de variables.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué condición caracteriza a una función inyectiva?

a) Todo elemento del codominio es imagen de al menos un elemento del dominio
b) Si $f(a) = f(b)$ entonces $a = b$
c) El rango coincide exactamente con el codominio
d) La función asigna el mismo valor a todo elemento del dominio

> **b) Si $f(a) = f(b)$ entonces $a = b$**

---

### Pregunta 2

Para la función $f(x) = 2x$ con dominio $\{1, 2, 3\}$ y codominio $\{2, 4, 6\}$, ¿cuál es el rango?

a) $\{1, 2, 3\}$
b) $\{2, 4, 6\}$
c) $\{2, 4\}$
d) $\{1, 2, 3, 4, 6\}$

> **b) $\{2, 4, 6\}$**

---

### Pregunta 3

¿Qué tipo de función asigna el mismo valor a todo elemento del dominio?

a) Función identidad
b) Función inyectiva
c) Función constante
d) Función sobreyectiva

> **c) Función constante**

---

### Pregunta 4

Para la función $g(x) = x^2$ con dominio $\{-2, 0, 2\}$ y codominio $\{0, 4\}$, ¿es inyectiva?

a) Sí, porque todos los valores calculados son distintos
b) Sí, porque el dominio tiene más elementos que el codominio
c) No, porque $-2$ y $2$ comparten la misma imagen
d) No, porque el codominio tiene solo dos elementos

> **c) No, porque $-2$ y $2$ comparten la misma imagen**

---

### Pregunta 5

¿Qué función es siempre biyectiva?

a) La función constante
b) La función identidad
c) La función sobreyectiva
d) Una función estrictamente decreciente

> **b) La función identidad**

---

### Pregunta 6

Una función es estrictamente decreciente cuando se cumple que:

a) $x_1 < x_2$ implica $f(x_1) < f(x_2)$
b) $x_1 < x_2$ implica $f(x_1) > f(x_2)$
c) $x_1 < x_2$ implica $f(x_1) \leq f(x_2)$
d) $x_1 < x_2$ implica $f(x_1) \geq f(x_2)$

> **b) $x_1 < x_2$ implica $f(x_1) > f(x_2)$**

---

### Pregunta 7

Considere $h(x) = 3x$ con dominio $\{0, 1, 2\}$ y codominio $\{0, 3, 6\}$. ¿Es esta función biyectiva?

a) No, porque no es sobreyectiva
b) No, porque no es inyectiva
c) Sí, porque es inyectiva y sobreyectiva
d) No, porque el dominio y el codominio no tienen la misma cantidad de elementos

> **c) Sí, porque es inyectiva y sobreyectiva**

---

### Pregunta 8

Una función biyectiva establece una correspondencia entre dominio y codominio de tipo:

a) Muchos a uno
b) Uno a muchos
c) Uno a uno
d) Todos a un mismo valor

> **c) Uno a uno**

---

### Pregunta 9

¿Cuál es la condición que define a una función sobreyectiva?

a) Si $f(a) = f(b)$ entonces $a = b$
b) $\text{Rango}(f) = \text{Codominio}(f)$
c) $f(x) = x$ para todo $x$ del dominio
d) Si $x_1 < x_2$ entonces $f(x_1) \leq f(x_2)$

> **b) $\text{Rango}(f) = \text{Codominio}(f)$**

---

### Pregunta 10

En una tienda en línea, la función que asigna a cada producto su categoría puede ser no inyectiva porque:

a) Cada producto pertenece a una sola categoría
b) La categoría de un producto es siempre única
c) Dos productos distintos pueden pertenecer a la misma categoría
d) Todos los productos comparten la misma categoría

> **c) Dos productos distintos pueden pertenecer a la misma categoría**
