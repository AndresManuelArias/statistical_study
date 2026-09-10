---
titulo: Distribución Binomial Negativa
tipo: anotacion-video
tema: Distribución Binomial Negativa
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Binomial Negativa

## Datos del video
- **Título:** Distribución Binomial Negativa | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Binomial+Negativa+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/bKTnhUwyTME?si=g0pljfofzlrmwQaz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
La distribución binomial negativa generaliza la distribución geométrica: modela el número de ensayos necesarios para obtener el $r$-ésimo éxito. Es útil en contextos como ventas acumuladas, promociones deportivas y procesos de selección, donde se busca un objetivo de éxitos múltiples.

## Contenido

### Definición

Sea $X$ el **número total de ensayos** necesarios para obtener el $r$-ésimo éxito. Entonces $X$ sigue una distribución binomial negativa con parámetros $r$ (número de éxitos deseados) y $p$ (probabilidad de éxito en cada ensayo):

$$P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, r+2, \ldots$$

donde:
- $k$ = número total de ensayos.
- $r$ = número de éxitos requeridos ($r \geq 1$).
- $p$ = probabilidad de éxito en cada ensayo.
- $\binom{k-1}{r-1} = \frac{(k-1)!}{(r-1)!(k-r)!}$ es el coeficiente binomial.

### Propiedades

**Media (número esperado de ensayos):**

$$E(X) = \frac{r}{p}$$

**Varianza:**

$$\text{Var}(X) = \frac{r(1-p)}{p^2}$$

#### Gráfico comparativo: Cómo cambia con r y p

```chart
type: bar
labels: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
series:
  - title: "BN(r=1, p=0.5) — Geométrica (1 éxito)"
    data: [0.5000, 0.2500, 0.1250, 0.0625, 0.0313, 0.0156, 0.0078, 0.0039, 0.0020, 0.0010]
  - title: "BN(r=3, p=0.5) — 3 éxitos"
    data: [0.1250, 0.1563, 0.1563, 0.1367, 0.1042, 0.0703, 0.0430, 0.0240, 0.0125, 0.0061]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- **r=1 (azul):** Concentrada en k=3 (mínimo), cae rápidamente (geométrica)
- **r=3 (naranja):** Más distribuida, media en k=6, pico en k=4-5
- **Regla general:** Con mayor r, necesitas más intentos en promedio → distribución se desplaza a la derecha

### Variante: número de fracasos antes del $r$-ésimo éxito

Sea $Y$ el **número de fracasos** antes del $r$-ésimo éxito ($Y = X - r$):

$$P(Y = k) = \binom{k + r - 1}{r - 1} p^r (1-p)^k, \quad k = 0, 1, 2, \ldots$$

$$E(Y) = \frac{r(1-p)}{p}$$

#### Comparación: X (total de ensayos) vs Y (solo fracasos)

```chart
type: bar
labels: [0, 1, 2, 3, 4, 5, 6, 7, 8]
series:
  - title: "X ~ BN(r=3, p=0.5) — Ensayos totales"
    data: [0, 0, 0.1250, 0.1875, 0.1875, 0.1367, 0.0820, 0.0410, 0.0164]
  - title: "Y = X-3 — Solo fracasos antes del 3er éxito"
    data: [0.1250, 0.1875, 0.1875, 0.1367, 0.0820, 0.0410, 0.0164, 0.0055, 0.0015]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- **X (azul):** Comienza en k=3 (mínimo: 3 ensayos para 3 éxitos)
- **Y (naranja):** Comienza en k=0 (0 fracasos si los primeros 3 son éxitos)
- **Relación:** Y está desplazado 3 posiciones a la izquierda de X
- **E(X)=6, E(Y)=3:** La diferencia es r=3 (número de éxitos)

### Caso particular: distribución geométrica

Cuando $r = 1$, la binomial negativa se reduce a la **distribución geométrica**:

$$P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$

$$E(X) = \frac{1}{p}, \quad \text{Var}(X) = \frac{1-p}{p^2}$$

#### Visualización: Binomial Negativa como extensión de Geométrica

```chart
type: line
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
series:
  - title: "BN(r=1, p=0.3) — 1er éxito"
    data: [0.3000, 0.2100, 0.1470, 0.1029, 0.0720, 0.0504, 0.0353, 0.0247, 0.0173, 0.0121]
  - title: "BN(r=2, p=0.3) — 2do éxito"
    data: [0, 0.0900, 0.1470, 0.1372, 0.1080, 0.0762, 0.0503, 0.0318, 0.0194, 0.0114]
  - title: "BN(r=3, p=0.3) — 3er éxito"
    data: [0, 0, 0.0441, 0.1029, 0.1226, 0.1095, 0.0876, 0.0635, 0.0431, 0.0276]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- **r=1 (azul):** Cae rápidamente (geométrica)
- **r=2 (naranja):** Se desplaza a la derecha, mínimo en k=2
- **r=3 (gris):** Aún más a la derecha, mínimo en k=3
- **Patrón:** Con mayor r, necesitas al menos k=r intentos (por eso comienza en 0 para k<r)

### Relación con la distribución de Pascal

Cuando los parámetros son enteros, la binomial negativa también se conoce como **distribución de Pascal**. La función de distribución acumulada se expresa usando la función beta regularizada.

## Ejemplo numérico

Un equipo de ventas necesita concretar $r = 3$ ventas para cumplir su cuota mensual. La probabilidad de cerrar una venta en cada reunión es $p = 0.50$.

**Número esperado de reuniones:**

$$E(X) = \frac{r}{p} = \frac{3}{0.50} = 6 \text{ reuniones}$$

**Varianza:**

$$\text{Var}(X) = \frac{3(1 - 0.50)}{(0.50)^2} = \frac{3 \cdot 0.50}{0.25} = \frac{1.50}{0.25} = 6$$

$$\sigma = \sqrt{6} \approx 2.45 \text{ reuniones}$$

**Probabilidad de que se necesiten exactamente 5 reuniones:**

$$P(X = 5) = \binom{5-1}{3-1}(0.50)^3(0.50)^{5-3} = \binom{4}{2}(0.50)^3(0.50)^2$$

$$= 6 \cdot 0.125 \cdot 0.25 = 0.1875$$

**Probabilidad de que se necesiten exactamente 4 reuniones (mínimo posible = $r = 3$, pero $k$ debe ser $\geq 3$):**

$$P(X = 4) = \binom{3}{2}(0.50)^3(0.50)^1 = 3 \cdot 0.125 \cdot 0.50 = 0.1875$$

#### Gráfico: Distribución Binomial Negativa para cerrar 3 ventas (p = 0.50)

```chart
type: bar
labels: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
series:
  - title: "P(X = k) — Reuniones hasta 3 ventas"
    data: [0.1250, 0.1875, 0.1875, 0.1367, 0.0820, 0.0410, 0.0164, 0.0055, 0.0015, 0.0004]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- **Mínimo k=3:** Solo posible cerrar 3 ventas en 3 reuniones (todas éxito): P(X=3)=0.1250
- **Pico en k=4 y k=5:** Probabilidades máximas (18.75% cada una)
- **Media = 6 reuniones:** La distribución está centrada alrededor de 6
- **P(X≤6):** Aproximadamente 70% de probabilidad de cerrar 3 ventas en 6 o menos reuniones

## Ejemplo de la vida real

Una tienda de retail necesita vender $r = 5$ electrodomésticos premium para alcanzar su objetivo trimestral. Historial indica que la probabilidad de concretar la venta en cada visita a cliente es $p = 0.20$.

$$E(X) = \frac{5}{0.20} = 25 \text{ visitas}$$

$$\text{Var}(X) = \frac{5 \cdot 0.80}{(0.20)^2} = \frac{4}{0.04} = 100$$

$$\sigma = \sqrt{100} = 10 \text{ visitas}$$

El gerente debe planificar al menos 25 visitas para alcanzar la meta, pero con una desviación estándar de 10, algunas semanas podría necesitar 40 o más visitas.

#### Gráfico: Necesidad de visitas para vender 5 electrodomésticos (p = 0.20)

```chart
type: line
labels: [5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50]
series:
  - title: "P(X = k) — Visitas necesarias"
    data: [0.00003, 0.00026, 0.00164, 0.00687, 0.02117, 0.05429, 0.11642, 0.20508, 0.29318, 0.35030, 0.36462, 0.33929, 0.28571, 0.22184, 0.16353, 0.11533]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación práctica:**
- **Mínimo k=5:** Solo si todas las primeras 5 visitas resultan en venta (probabilidad muy baja)
- **Pico en k=26-33:** Mayor probabilidad alrededor de la media (25 visitas)
- **Desviación estándar = 10:** Con p=0.20 baja, la distribución es más dispersa
- **Planificación:** 
  - 70% de las semanas necesitará entre 15 y 35 visitas (25±10)
  - 16% de las semanas podría necesitar 40+ visitas
  - Solo 1% requerirá menos de 8 visitas (muy afortunado)

> [!tip] Relación con el curso
> La binomial negativa se utiliza en la inferencia para modelar muestras hasta un número fijo de éxitos, y aparece en pruebas de hipótesis sobre proporciones cuando el número de éxitos se fija de antemano.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la función de masa de probabilidad de una distribución binomial negativa con parámetros $r$ y $p$?

a) $P(X=k)=\binom{k}{r} p^r (1-p)^k$
b) $P(X=k)=\binom{k-1}{r-1} p^r (1-p)^{k-r}$
c) $P(X=k)=\binom{k}{r-1} p^{r-1} (1-p)^{k-r}$
d) $P(X=k)=\binom{k-1}{r} p^{r+1} (1-p)^{k-r-1}$

> **b) $P(X=k)=\binom{k-1}{r-1} p^r (1-p)^{k-r}$**

---

### Pregunta 2

Si $X$ representa el número total de ensayos para obtener el $r$-ésimo éxito, ¿cuál es el valor mínimo que puede tomar $X$?

a) 0
b) 1
c) $r - 1$
d) $r$

> **d) $r$**

---

### Pregunta 3

¿Qué distribución se obtiene como caso particular de la binomial negativa cuando $r=1$?

a) Distribución de Bernoulli
b) Distribución de Poisson
c) Distribución geométrica
d) Distribución binomial

> **c) Distribución geométrica**

---

### Pregunta 4

Si $X \sim BN(r=3,  p=0,5)$, ¿cuál es el número esperado de ensayos necesarios para obtener el tercer éxito?

a) 3
b) 4,5
c) 6
d) 9

> **c) 6**

---

### Pregunta 5

¿Cuál es la varianza de una distribución geométrica con $p=0,5$?

a) 0,5
b) 1
c) 2
d) 4

> **b) 1**

---

### Pregunta 6

En una distribución binomial negativa con $r=2$ y $p=0,5$, ¿cuál es la probabilidad de que se necesiten exactamente 3 ensayos para obtener el segundo éxito?

a) 0,125
b) 0,25
c) 0,375
d) 0,5

> **b) 0,25**

---

### Pregunta 7

Una tienda necesita vender $r=5$ electrodomésticos premium y la probabilidad de concretar la venta en cada visita es $p=0,20$. ¿Cuántas visitas se esperan en promedio para alcanzar la meta?

a) 5
b) 10
c) 20
d) 25

> **d) 25**

---

### Pregunta 8

¿Cuál es la notación correcta para indicar que una variable aleatoria $X$ sigue una distribución binomial negativa con parámetros $r$ y $p$?

a) $X \sim \text{B}(r, p)$
b) $X \sim \text{Geo}(r, p)$
c) $X \sim BN(r, p)$
d) $X \sim \text{NB}(p, r)$

> **c) $X \sim BN(r, p)$**

---

### Pregunta 9

En una distribución binomial negativa con $r=2$ y $p=0,5$, ¿cuál es la varianza?

a) 2
b) 3
c) 4
d) 6

> **c) 4**

---

### Pregunta 10

Un equipo de captación de clientes contacta personas hasta que $r=4$ acepten una prueba gratuita. Si la probabilidad de aceptación en cada contacto es $p=0,20$, ¿cuántos contactos se esperan hacer en promedio?

a) 4
b) 10
c) 16
d) 20

> **d) 20**
