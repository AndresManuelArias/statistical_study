---
titulo: "Funciones"
tipo: anotacion-video
tema: "Definición de función"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Funciones

## 🎬 Datos del video
- **Título:** Functions | Inferential Statistics
- **Canal:** José María Hernández Rivera (video en inglés)
- **Enlace:** https://www.youtube.com/results?search_query=Functions+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/pnERuP_JQRQ?si=QimSz32vX85Y3qBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
Se define formalmente qué es una función: una regla de correspondencia que asigna a cada elemento del dominio uno y solo un elemento del codominio. Se introduce la notación $f(x)$ y la prueba de la línea vertical.

## 🧮 Contenido

### Definición formal de función

Una función $f$ de $A$ en $B$, escrita $f: A \to B$, es una **regla de correspondencia** que asigna a **cada** elemento $x \in A$ **exactamente un** elemento $y \in B$.

### Condición clave: unicidad

Para cada $x$ en el dominio existe un **único** $y$ en el codominio. Si a un mismo $x$ se le asignaran dos $y$ distintos, **no** sería función:

$$x_1 = x_2 \implies f(x_1) = f(x_2)$$

O, de forma equivalente: el mismo valor de $x$ siempre produce el mismo valor de $y$; que un mismo $y$ provenga de varios $x$ no es problema.

### Notación funcional

El valor que le corresponde a $x$ se escribe:

$$y = f(x)$$

Donde $x$ es la variable independiente y $y$ la dependiente. $f(x)$ se lee "$f$ de $x$" o "el valor de la función en $x$".

### Evaluar una función

Evaluar $f$ en $x = a$ significa sustituir y calcular $f(a)$. Por ejemplo, si $f(x) = 3x - 2$ entonces:

$$f(4) = 3(4) - 2 = 12 - 2 = 10$$

### Prueba de la línea vertical

Una curva es la gráfica de una función si y solo si **toda** línea vertical interseca la curva en **a lo sumo un punto**.

- Si una línea vertical toca la gráfica en dos puntos → ese $x$ tiene dos imágenes → no es función.
- Si cada línea vertical la toca en uno o cero puntos → sí puede ser función.

**📊 Visualización — Prueba de la línea vertical (función válida $f(x) = 2x + 1$):**

```chart
type: line
labels: [-2, -1, 0, 1, 2, 3]
series:
  - title: "f(x) = 2x + 1"
    data: [-3, -1, 1, 3, 5, 7]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Cada línea vertical interseca la recta en exactamente un punto. Es una función.

**📊 Visualización — Contraejemplo (no es función: $x^2 + y^2 = 1$ - circunferencia):**

```chart
type: scatter
labels: [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1]
series:
  - title: "Rama superior"
    data: [0, 0.6, 0.8, 0.92, 0.98, 1, 0.98, 0.92, 0.8, 0.6, 0]
  - title: "Rama inferior"
    data: [0, -0.6, -0.8, -0.92, -0.98, -1, -0.98, -0.92, -0.8, -0.6, 0]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> Para algunos valores de $x$ (ej: $x=0$), hay dos valores de $y$ (1 y -1). Algunas líneas verticales cortan la circunferencia en dos puntos. **No es función.**

### Función como relación especial

Una función es un tipo particular de **relación** en la que, además, cada primera componente está relacionada con exactamente una segunda componente. En el diagrama sagital, cada elemento de $A$ tiene exactamente una flecha saliente.

## 💡 Ejemplo numérico

**Problema 1:** Determinar si la regla $y = x^2$ con dominio $x \in \{1, 2, 3\}$ es una función.

**Paso 1:** Calcular cada valor:

$$f(1) = 1^2 = 1,\quad f(2) = 2^2 = 4,\quad f(3) = 3^2 = 9$$

**Paso 2:** Construir la tabla de correspondencias:

| $x$ | 1 | 2 | 3 |
|---|---|---|---|
| $f(x)$ | 1 | 4 | 9 |

**Paso 3 — Conclusión:** A cada $x$ corresponde un único $y$. Sí es función. Su gráfica es una parábola y toda línea vertical la corta en un solo punto.

**📊 Visualización — Gráfica de $f(x) = x^2$:**

```chart
type: line
labels: [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3]
series:
  - title: "f(x) = x²"
    data: [9, 6.25, 4, 2.25, 1, 0.25, 0, 0.25, 1, 2.25, 4, 6.25, 9]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> La parábola abre hacia arriba. Cada línea vertical toca la curva en exactamente un punto. Para el dominio $\{1,2,3\}$, obtenemos los puntos $(1,1)$, $(2,4)$ y $(3,9)$. Claramente es función.

**Problema 2:** Determinar si la relación $\{(1,2), (1,5), (2,3)\}$ es función.

En el par $(1,2)$ y $(1,5)$, el mismo $x=1$ tiene dos imágenes ($2$ y $5$). **No es función.**

**📊 Visualización — Diagrama de dispersión (NO es función):**

```chart
type: scatter
labels: [1, 1, 2]
series:
  - title: "Puntos: (1,2), (1,5), (2,3)"
    data: [2, 5, 3]
width: 90%
labelColors: false
beginAtZero: true
```

> Observe que para $x=1$ hay dos puntos diferentes: $(1,2)$ y $(1,5)$. Viola la condición de unicidad. Si trazamos una línea vertical en $x=1$, toca dos puntos.

**Problema 3:** Determinar si la relación $\{(1,2), (3,2), (5,4)\}$ es función.

**Paso 1:** El valor $x=1$ tiene imagen $2$; $x=3$ tiene imagen $2$; $x=5$ tiene imagen $4$.

**Paso 2 — Conclusión:** Dos $x$ distintos pueden compartir el mismo $y$ (aquí $1$ y $3$ comparten $2$) y eso **no** rompe la definición. Cada $x$ tiene una sola imagen: **sí es función**.

**📊 Visualización — Diagrama de dispersión (SÍ es función):**

```chart
type: scatter
labels: [1, 3, 5]
series:
  - title: "Puntos: (1,2), (3,2), (5,4)"
    data: [2, 2, 4]
width: 90%
labelColors: false
beginAtZero: true
```

> Aunque $(1,2)$ y $(3,2)$ comparten la imagen $y=2$, cada $x$ tiene un único $y$. Si trazamos líneas verticales en $x=1$, $x=3$ y $x=5$, cada una toca exactamente un punto. **Sí es función**.

## 🌍 Ejemplo de la vida real

Una máquina expendedora asigna a cada código de producto ($x$) un único precio ($y$). Es una función: cada botón tiene exactamente un resultado. Esto permite modelar la relación precio-código y predecir el costo de comprar varias unidades: comprar dos veces el código 7 da siempre el mismo precio. En cambio, el precio de las monedas de $20$ céntimos podría comprar varios productos distintos, pero eso no convierte el modelo en no-función, porque la variable independiente es el código, no la moneda.

> [!tip] Relación con el curso
> Las funciones son la base del modelado estadístico: la variable de respuesta es una función de las variables predictoras. Saber si una relación es realmente función evita ambigüedades en regresión.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué define una función $f: A \to B$?

a) Una regla que asigna a algunos elementos de $A$ uno o más elementos de $B$
b) Una regla de correspondencia que asigna a cada elemento de $A$ exactamente un elemento de $B$
c) Una relación donde cada elemento de $B$ proviene de al menos un elemento de $A$
d) Un conjunto de pares ordenados donde la segunda componente puede repetirse

> **b) Una regla de correspondencia que asigna a cada elemento de $A$ exactamente un elemento de $B$**

---

### Pregunta 2

¿Cuál es la condición clave que debe cumplir una relación para ser función?

a) Que el codominio contenga más elementos que el dominio
b) Que cada $x$ del dominio tenga al menos una imagen en el codominio
c) Que cada $x$ del dominio tenga un único $y$ en el codominio
d) Que cada $y$ del codominio provenga de exactamente un $x$

> **c) Que cada $x$ del dominio tenga un único $y$ en el codominio**

---

### Pregunta 3

Si $f(x) = 3x - 2$, ¿cuál es el valor de $f(5)$?

a) 10
b) 12
c) 13
d) 15

> **c) 13**

---

### Pregunta 4

Según la prueba de la línea vertical, ¿cuándo una curva representa la gráfica de una función?

a) Cuando toda línea horizontal la toca en exactamente un punto
b) Cuando existe al menos una línea vertical que la toca en dos puntos
c) Cuando toda línea vertical la toca en a lo sumo un punto
d) Cuando toda línea vertical la toca en exactamente dos puntos

> **c) Cuando toda línea vertical la toca en a lo sumo un punto**

---

### Pregunta 5

La relación $\{(2,1), (2,4), (3,5)\}$ es función del conjunto $\{2,3\}$ en $\{1,4,5\}$.

a) Verdadero
b) Falso, porque el $y=5$ tiene una sola imagen
c) Verdadero, porque todos los $x$ tienen imagen
d) Falso, porque el $x=2$ tiene dos imágenes distintas

> **d) Falso, porque el $x=2$ tiene dos imágenes distintas**

---

### Pregunta 6

La relación $\{(1,3), (4,3), (7,6)\}$ ¿es función?

a) No, porque los valores $x=1$ y $x=4$ comparten la misma imagen $y=3$
b) Sí, porque cada $x$ tiene un único $y$, aunque dos $x$ distintos compartan imagen
c) No, porque el $y=6$ solo aparece una vez
d) No, porque el dominio tiene más elementos que el codominio

> **b) Sí, porque cada $x$ tiene un único $y$, aunque dos $x$ distintos compartan imagen**

---

### Pregunta 7

En la notación $f: A \to B$, ¿qué representa $f(x)$?

a) El conjunto $A$ llamado codominio
b) El único elemento de $B$ que le corresponde al elemento $x$ de $A$
c) El conjunto de todos los elementos de $A$
d) La cantidad de elementos de $B$

> **b) El único elemento de $B$ que le corresponde al elemento $x$ de $A$**

---

### Pregunta 8

Para la función $f(x) = x^2$ con dominio $x \in \{1,2,3\}$, ¿cuál es el valor de $f(3)$?

a) 3
b) 6
c) 9
d) 27

> **c) 9**

---

### Pregunta 9

En un diagrama sagital de una función $f: A \to B$, ¿qué debe cumplir cada elemento de $A$?

a) Tener exactamente una flecha entrante desde $B$
b) Tener al menos una flecha saliente hacia $B$
c) Tener exactamente una flecha saliente hacia $B$
d) No tener ninguna flecha si no está en el dominio

> **c) Tener exactamente una flecha saliente hacia $B$**

---

### Pregunta 10

En una tienda en línea, cada código de producto ($x$) tiene un precio fijo ($y$). Se compra tres veces el código $x_0$ y siempre se paga el mismo monto. ¿Por qué esta relación es función?

a) Porque el precio $y$ es único para todo el catálogo
b) Porque el mismo código $x_0$ siempre produce el mismo precio $y$, sin importar cuántas veces se compre
c) Porque los clientes pueden pagar con distintos métodos de pago
d) Porque el monto total varía según la cantidad de unidades

> **b) Porque el mismo código $x_0$ siempre produce el mismo precio $y$, sin importar cuántas veces se compre**
