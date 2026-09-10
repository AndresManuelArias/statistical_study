---
titulo: "Muestras sin orden y con remplazo"
tipo: anotacion-video
tema: Muestras sin orden y con remplazo
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Muestras sin Orden y con Remplazo

## 🎬 Datos del video
- **Título:** Muestras sin orden y con remplazo | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Muestras+sin+orden+y+con+remplazo+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/F0VGijB4ylU?si=0yrdgqE5JOpZztDy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
Las combinaciones con repetición $CR(n,r)$ se usan cuando seleccionamos $r$ elementos de $n$ tipos **sin importar el orden** y **con repetición** (se pueden elegir elementos iguales). Es útil en problemas de reparto.

## 🧮 Contenido

### Definición
Una **combinación con repetición** $CR(n,r)$ es el número de formas de seleccionar $r$ elementos de un conjunto de $n$ elementos **distintos**, donde:
- El **orden NO importa**.
- Los elementos **pueden repetirse** (se permite elegir el mismo elemento más de una vez).

### Fórmula

$$CR(n,r) = C(n+r-1, r) = \binom{n+r-1}{r} = \frac{(n+r-1)!}{r!\,(n-1)!}$$

### ¿De dónde sale la fórmula?
Se puede derivar de un modelo de **reparto**. Imagina que tienes $n$ tipos de elementos y quieres elegir $r$ unidades. Esto equivale a colocar $r$ bolas idénticas en $n$ cajas etiquetadas, lo cual se modela con:

- $n -1$ separadores "$|$"
- $r$ bolas "$\bullet$"

El número total de posiciones es $(n-1) + r = n + r - 1$, y de estas elegimos $r$ para ser bolas (o equivalentemente $n-1$ para ser separadores):

$$CR(n,r) = \binom{n+r-1}{r} = \frac{(n+r-1)!}{r!\,(n-1)!}$$

### Casos típicos de uso

| Situación | $n$ | $r$ | $CR(n,r)$ |
|---|---|---|---|
| Repartir 5 dulces de 3 tipos | 3 | 5 | $C(7,5)$ |
| Comprar 4 oscuras de 5 tipos | 5 | 4 | $C(8,4)$ |
| Helado con bolas de 4 sabores, 3 bolas | 4 | 3 | $C(6,3)$ |

### Comparación con las otras técnicas

| Técnica | Orden | Repetición | Fórmula |
|---|---|---|---|
| Variación con repetición | ✅ | ✅ | $n^r$ |
| Variación sin repetición | ✅ | ❌ | $\frac{n!}{(n-r)!}$ |
| Combinación | ❌ | ❌ | $\frac{n!}{r!(n-r)!}$ |
| **Combinación con repetición** | ❌ | ✅ | $\binom{n+r-1}{r}$ |

## 💡 Ejemplo numérico
Un estudiante va a una tienda de **dulces** que vende 4 tipos: mentas, frutales, de miel y de chocolate. Quiere comprar **6 dulces** en total, y puede elegir cuántos de cada tipo. El orden no importa (solo importa cuántos hay de cada tipo), y puede repetir tipos.

$$n = 4 \text{ tipos}, \quad r = 6 \text{ dulces}$$
$$CR(4,6) = \binom{4+6-1}{6} = \binom{9}{6} = \binom{9}{3} = \frac{9 \times 8 \times 7}{3 \times 2 \times 1} = \frac{504}{6} = 84$$

Hay **84 formas** diferentes de elegir los 6 dulces.

**Ejemplo de una combinación concreta:** (3 mentas, 1 frutal, 2 de miel, 0 de chocolate) es una de las 84 formas posibles.

## 🌍 Ejemplo de la vida real
En una **heladería** con 5 sabores (vainilla, chocolate, fresa, limón, mango), un cliente pide un cono con **3 bolas**. El orden de las bolas no importa, pero puede repetir sabores (dos bolas de chocolate y una de fresa, por ejemplo). Las opciones son:

$$CR(5,3) = \binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

35 combinaciones posibles de sabores para el cono.

> [!tip] Relación con el curso
> Las combinaciones con repetición aparecen en problemas de muestreo y distribución de muestras, conceptos clave en inferencia estadística para modelar la selección de elementos de una población.

### Ejemplo detallado con reparto
Tienes **3 amigos** (Ana, Luis, Pedro) y quieres repartir **5 paletas** entre ellos. Cada amigo puede recibir de 0 a 5 paletas, y el orden no importa. Usamos $n = 3$ amigos, $r = 5$ paletas:

$$CR(3,5) = \binom{7}{5} = \binom{7}{2} = \frac{7 \times 6}{2 \times 1} = 21$$

**Una configuración posible:** Ana: 2 paletas, Luis: 1 paleta, Pedro: 2 paletas → escribimos como la secuencia "●●|●|●●" (dos separadores, 5 bolas).

### ¿Por qué es útil esta técnica?
La combinación con repetición modela cualquier situación donde:
- Hay **categorías** (tipos de dulces, personas, sabores).
- Se asignan **unidades idénticas** (dulces, puntos, objetos intercambiables).
- No hay distinción por orden de asignación.

### Ejemplo con tickets de lotería
Si una lotería permite elegir **3 números del 1 al 5** **con repetición** y **sin orden** (por ejemplo, elegir 3 números para una apuesta "múltiple"), las opciones son:

$$CR(5,3) = \binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

Comparado con **sin repetición** $C(5,3) = 10$, la repetición aumenta significativamente las opciones.

### Resumen visual de las 4 técnicas

```
¿Orden importa?        ¿Repetición?
      |                       |
     SÍ ──────────────── VR(n,r) = n^r
      |
     NO ──────── SÍ ──── CR(n,r) = C(n+r-1,r)
                  |
                  NO ─── C(n,r) = n!/(r!(n-r)!)
                  
      SÍ ──────── NO ─── V(n,r) = n!/(n-r)!
```

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué caracteriza a una combinación con repetición?

a) El orden importa y los elementos se pueden repetir.
b) El orden importa y los elementos no se pueden repetir.
c) El orden no importa y los elementos no se pueden repetir.
d) El orden no importa y los elementos se pueden repetir.

> **d) El orden no importa y los elementos se pueden repetir.**

---

### Pregunta 2

¿Cuál es la fórmula correcta para $CR(n,r)$?

a) $\binom{n}{r} = \frac{n!}{r!(n-r)!}$
b) $n^r$
c) $\binom{n+r-1}{r} = \frac{(n+r-1)!}{r!(n-1)!}$
d) $\frac{n!}{(n-r)!}$

> **c) $\binom{n+r-1}{r} = \frac{(n+r-1)!}{r!(n-1)!}$**

---

### Pregunta 3

Un estudiante elige 6 dulces de una tienda que ofrece 4 tipos diferentes. Puede tomar varios dulces del mismo tipo y solo le importa cuántos elige de cada uno. ¿Cuántas opciones tiene?

a) $\binom{10}{6} = 210$
b) $4^6 = 4096$
c) $\binom{9}{6} = 84$
d) $\binom{9}{3} = 84$ y $\binom{9}{6} = 84$ son ambas expresiones válidas del mismo resultado

> **d) $\binom{9}{6} = 84$ y $\binom{9}{3} = 84$ son ambas expresiones válidas del mismo resultado**

---

### Pregunta 4

En una lotería, un jugador elige 3 boletos de entre 5 tipos posibles, con repetición y sin importar el orden. ¿Cuántas combinaciones con repetición hay?

a) $\binom{5}{3} = 10$
b) $5^3 = 125$
c) $\binom{7}{3} = 35$
d) $\binom{7}{2} = 21$

> **c) $\binom{7}{3} = 35$**

---

### Pregunta 5

Unas frutas con 6 tipos diferentes se quieren elegir 4, con repetición y sin importar el orden. ¿Cuántas opciones hay?

a) $6^4 = 1296$
b) $\binom{9}{4} = 126$
c) $\binom{10}{4} = 210$
d) $\binom{6}{4} = 15$

> **b) $\binom{9}{4} = 126$**

---

### Pregunta 6

¿Cuántos elementos totales (bolas y separadores) se usan en el modelo de reparto para calcular $CR(n,r)$?

a) $n + r - 1$
b) $n + r + 1$
c) $n \times r$
d) $2n + r$

> **a) $n + r - 1$**

---

### Pregunta 7

Se quieren pintar 4 paredes con 3 colores posibles, pudiendo repetir colores. El orden de las paredes no se considera relevante para el cómputo. ¿Cuántas opciones hay?

a) $3^4 = 81$
b) $\binom{6}{4} = 15$
c) $\binom{7}{4} = 35$
d) $\binom{6}{2} = 15$ y $\binom{6}{4} = 15$ son equivalentes

> **d) $\binom{6}{2} = 15$ y $\binom{6}{4} = 15$ son equivalentes**

---

### Pregunta 8

Una panadería ofrece 7 tipos de pastel. Un cliente quiere comprar 4 pastelerías, pudiendo repetir tipos y sin importar el orden. ¿Cuántas combinaciones con repetición existen?

a) $7^4 = 2401$
b) $\binom{11}{4} = 330$
c) $\binom{10}{4} = 210$
d) $\binom{7}{4} = 35$

> **c) $\binom{10}{4} = 210$**

---

### Pregunta 9

Un coleccionista quiere elegir 2 stickers de 4 tipos diferentes, sin importar el orden y permitiendo repeticiones. ¿Cuántas opciones tiene?

a) $\binom{5}{2} = 10$
b) $4^2 = 16$
c) $\binom{4}{2} = 6$
d) $\binom{6}{2} = 15$

> **a) $\binom{5}{2} = 10$**

---

### Pregunta 10

Un lanzador de béisbol tiene 6 tipos de lanzamientos y debe elegir 3 para una secuencia, pudiendo repetir tipos. El orden de los lanzamientos no se tiene en cuenta. ¿Cuántas combinaciones con repetición hay?

a) $6^3 = 216$
b) $\binom{8}{3} = 56$
c) $\binom{6}{3} = 20$
d) $\binom{9}{3} = 84$

> **b) $\binom{8}{3} = 56$**
