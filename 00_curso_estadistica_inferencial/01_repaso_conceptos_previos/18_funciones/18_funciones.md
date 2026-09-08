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

**Problema 2:** Determinar si la relación $\{(1,2), (1,5), (2,3)\}$ es función.

En el par $(1,2)$ y $(1,5)$, el mismo $x=1$ tiene dos imágenes ($2$ y $5$). **No es función.**

**Problema 3:** Determinar si la relación $\{(1,2), (3,2), (5,4)\}$ es función.

**Paso 1:** El valor $x=1$ tiene imagen $2$; $x=3$ tiene imagen $2$; $x=5$ tiene imagen $4$.

**Paso 2 — Conclusión:** Dos $x$ distintos pueden compartir el mismo $y$ (aquí $1$ y $3$ comparten $2$) y eso **no** rompe la definición. Cada $x$ tiene una sola imagen: **sí es función**.

## 🌍 Ejemplo de la vida real

Una máquina expendedora asigna a cada código de producto ($x$) un único precio ($y$). Es una función: cada botón tiene exactamente un resultado. Esto permite modelar la relación precio-código y predecir el costo de comprar varias unidades: comprar dos veces el código 7 da siempre el mismo precio. En cambio, el precio de las monedas de $20$ céntimos podría comprar varios productos distintos, pero eso no convierte el modelo en no-función, porque la variable independiente es el código, no la moneda.

> [!tip] Relación con el curso
> Las funciones son la base del modelado estadístico: la variable de respuesta es una función de las variables predictoras. Saber si una relación es realmente función evita ambigüedades en regresión.
