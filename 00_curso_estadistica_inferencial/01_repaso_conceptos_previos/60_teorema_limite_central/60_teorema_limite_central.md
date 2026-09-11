---
titulo: Teorema del Límite Central
tipo: anotacion-video
tema: Teorema del Límite Central
tags:
  - estadistica-inferencial
  - inferencia
---

# Teorema del Límite Central

## 🎬 Datos del video
- **Título:** Teorema del Límite Central | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Teorema+del+Limite+Central+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El Teorema del Límite Central establece que, para una población con media $\mu$ y desviación estándar $\sigma$, la distribución muestral de $\bar{X}$ se aproxima a una normal con media $\mu$ y error estándar $\sigma/\sqrt{n}$ cuando $n$ es suficientemente grande, sin importar la forma de la distribución original. La regla práctica común es $n \geq 30$.

## 🧮 Contenido

### Enunciado del teorema

Sea $X_1, X_2, \ldots, X_n$ una muestra aleatoria de una población con media $\mu$ y varianza $\sigma^2 < \infty$. Entonces:

$$\bar{X} \sim N\left(\mu, \frac{\sigma}{\sqrt{n}}\right) \quad \text{aproximadamente cuando $n$ es grande}$$

La única condición es que la varianza exista y sea finita. No importa si la población es normal, uniforme, exponencial o completamente sesgada.

### Forma estandarizada

$$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)$$

Esta estandarización es la base para construir intervalos de confianza y realizar pruebas de hipótesis.

### Regla práctica: n >= 30

- Para $n \geq 30$, la aproximación normal es razonable aunque la población no sea normal.
- Para distribuciones muy asimétricas, se recomienda $n \geq 50$ o más.
- Si la población ya es normal, cualquier $n$ funciona (la distribución es exacta).
- Cuanto más lejos de la normalidad esté la población, mayor $n$ se necesita.

### Implicaciones fundamentales

1. No importa la forma de la distribución original.
2. Con muestras grandes, podemos hacer inferencia usando la distribución normal.
3. La precisión mejora al aumentar $n$ (el error estándar disminuye como $\sigma/\sqrt{n}$).
4. El teorema funciona MUY bien en la práctica: es la razón de que las distribuciones normales dominen la inferencia estadística.

#### Gráfico: La media muestral se va normalizando y angostando al crecer $n$ ($\mu = 45$, $\sigma = 15$)

```chart
type: line
labels: [0.0, 2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5, 20.0, 22.5, 25.0, 27.5, 30.0, 32.5, 35.0, 37.5, 40.0, 42.5, 45.0, 47.5, 50.0, 52.5, 55.0, 57.5, 60.0, 62.5, 65.0, 67.5, 70.0, 72.5, 75.0, 77.5, 80.0, 82.5, 85.0, 87.5, 90.0]
series:
  - title: "Media muestral, n = 1 (población sesgada)"
    data: [0.0003, 0.0005, 0.0008, 0.0012, 0.0017, 0.0025, 0.0036, 0.0050, 0.0066, 0.0086, 0.0109, 0.0135, 0.0161, 0.0188, 0.0213, 0.0235, 0.0252, 0.0262, 0.0266, 0.0262, 0.0252, 0.0235, 0.0213, 0.0188, 0.0161, 0.0135, 0.0109, 0.0086, 0.0066, 0.0050, 0.0036, 0.0025, 0.0017, 0.0012, 0.0008, 0.0005, 0.0003]
  - title: "Media muestral, n = 4 (σ/√n = 7.5)"
    data: [0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0001, 0.0002, 0.0006, 0.0015, 0.0035, 0.0072, 0.0133, 0.0219, 0.0323, 0.0426, 0.0503, 0.0532, 0.0503, 0.0426, 0.0323, 0.0219, 0.0133, 0.0072, 0.0035, 0.0015, 0.0006, 0.0002, 0.0001, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
  - title: "Media muestral, n = 16 (σ/√n = 3.75)"
    data: [0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0004, 0.0030, 0.0144, 0.0437, 0.0852, 0.1064, 0.0852, 0.0437, 0.0144, 0.0030, 0.0004, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
  - title: "Media muestral, n = 49 (σ/√n = 2.143)"
    data: [0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0004, 0.0122, 0.0943, 0.1862, 0.0943, 0.0122, 0.0004, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- Aunque la población original es **sesgada** (forma de la curva para $n=1$), la distribución de $\bar{X}$ se vuelve **más angosta y más simétrica** conforme crece $n$.
- El centro es siempre $\mu = 45$; solo cambia la dispersión: $15/\sqrt{1} = 15$, $15/\sqrt{4} = 7.5$, $15/\sqrt{16} = 3.75$, $15/\sqrt{49} = 2.143$.
- Para el ejemplo, $\sigma_{\bar{X}} = 15/\sqrt{49} \approx 2.143$ y $P(\bar{X} > 48) = P(Z > 1.40) \approx 8.08\%$.

### El teorema para proporciones

El Teorema del Límite Central también se aplica a la proporción muestral $\hat{p}$ (variable Bernoulli con probabilidad de éxito $p$):

$$\hat{p} \approx N\left(p, \sqrt{\frac{p(1-p)}{n}}\right)$$

siempre que $np \geq 10$ y $n(1-p) \geq 10$.

### Resumen de conceptos clave

- La población puede tener cualquier forma.
- La distribución muestral de la media se hace más angosta al crecer $n$.
- El centro de la distribución muestral es SIEMPRE $\mu$.
- El error estándar $\sigma / \sqrt{n}$ mide la dispersión de las medias muestrales.

## 💡 Ejemplo numérico

Una población tiene una distribución sesgada a la derecha con $\mu = 45$ minutos y $\sigma = 15$ minutos (tiempos de espera en un restaurante). Se toman muestras de $n = 49$ clientes.

**Propiedades de la distribución muestral de $\bar{X}$:**

$$E(\bar{X}) = \mu = 45 \text{ minutos}$$

$$\sigma_{\bar{X}} = \frac{15}{\sqrt{49}} = \frac{15}{7} \approx 2.143 \text{ minutos}$$

**Probabilidad de que la media muestral supere 48 minutos:**

$$Z = \frac{48 - 45}{2.143} = \frac{3}{2.143} \approx 1.40$$

$$P(\bar{X} > 48) = P(Z > 1.40) = 1 - 0.9192 = 0.0808 \approx 8.08\%$$

Aunque la población original es asimétrica, la media muestral se comporta como una normal gracias al Teorema del Límite Central.

## 🌍 Ejemplo de la vida real

Un fabricante de refrescos sabe que el contenido de sus botellas sigue una distribución sesgada (muchas botellas cercanas al mínimo legal y pocas muy llenas). El contenido promedio es $\mu = 330$ ml con $\sigma = 8$ ml. Al tomar muestras de $n = 64$ botellas, puede asegurar que la distribución de $\bar{X}$ es aproximadamente normal y usarla para vigilar que la máquina no esté descalibrada.

> [!tip] Relación con el curso
> El Teorema del Límite Central es el pilar más importante de la estadística inferencial: sin él, no podríamos usar distribuciones normales para hacer inferencias sobre medias poblacionales a partir de muestras.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es el enunciado central del Teorema del Límite Central?

a) La media muestral siempre tiene la misma distribución que la población
b) La distribución muestral de la media se aproxima a una normal cuando n es grande, sin importar la forma poblacional
c) La distribución muestral de la media es exactamente normal solo si la población es normal
d) La desviación estándar de la población se reduce a la mitad al duplicar el tamaño de muestra

> **b) La distribución muestral de la media se aproxima a una normal cuando n es grande, sin importar la forma poblacional**

### Pregunta 2

¿Cuál es la regla práctica para considerar que n es "suficientemente grande" en la mayoría de las situaciones?

a) $n \geq 10$
b) $n \geq 30$
c) $n \geq 100$
d) $n \geq 5$

> **b) n >= 30**

### Pregunta 3

Si la población original ya tiene distribución normal, ¿qué ocurre con el Teorema del Límite Central?

a) No se puede aplicar porque el teorema requiere poblaciones no normales
b) Se necesita un tamaño de muestra mínimo de 50 para que funcione
c) La distribución muestral de la media es exactamente normal para cualquier n
d) Solo funciona si n es mayor que 30

> **c) La distribución muestral de la media es exactamente normal para cualquier n**

### Pregunta 4

Una población tiene $\mu = 45$ minutos y $\sigma = 15$ minutos. Se extrae una muestra de $n = 49$. ¿Cuál es el error estándar de la media muestral?

a) 15 minutos
b) 2.143 minutos
c) 0.214 minutos
d) 7.5 minutos

> **b) 2.143 minutos**

### Pregunta 5

Si se duplica el tamaño de muestra de una población con $\sigma = 10$, el error estándar:

a) Se reduce a la mitad
b) Se reduce a $\sigma / \sqrt{2} \approx 0.707 \sigma$
c) No cambia
d) Se duplica

> **b) Se reduce a sigma / sqrt(2) approx 0.707 sigma**

### Pregunta 6

¿Cuál es la única condición matemática necesaria para que el Teorema del Límite Central sea aplicable?

a) Que la población sea simétrica
b) Que la varianza poblacional exista y sea finita
c) Que la media poblacional sea cero
d) Que la desviación estándar sea mayor que 1

> **b) Que la varianza poblacional exista y sea finita**

### Pregunta 7

Una población de pesos de frutas es extremadamente sesgada a la izquierda con $\mu = 120$ g y $\sigma = 20$ g. Se toman muestras de $n = 50$. La distribución de $\bar{X}$ será aproximadamente:

a) Sesgada a la izquierda, como la población
b) Uniforme
c) Normal con media 120 y error estándar $20 / \sqrt{50}$
d) Normal con media 120 y error estándar 20

> **c) Normal con media 120 y error estándar 20 / sqrt(50)**

### Pregunta 8

Un fabricante de refrescos mide muestras de $n = 64$ botellas con $\mu = 330$ ml y $\sigma = 8$ ml. Si $\bar{X} = 332$ ml, ¿cuál es el valor del estadístico Z?

a) 1.00
b) 2.00
c) 0.25
d) 16.00

> **b) 2.00**

### Pregunta 9

¿Por qué el Teorema del Límite Central es fundamental para la inferencia estadística?

a) Porque permite calcular la media poblacional exacta sin muestras
b) Porque garantiza que siempre se necesita una población normal
c) Porque permite usar distribuciones normales para hacer inferencias sobre medias poblacionales a partir de muestras
d) Porque elimina la necesidad de recolectar datos

> **c) Porque permite usar distribuciones normales para hacer inferencias sobre medias poblacionales a partir de muestras**

### Pregunta 10

Para la proporción muestral $\hat{p}$, el Teorema del Límite Central es aplicable cuando:

a) $n > 5$ y $p = 0.5$
b) $np \geq 10$ y $n(1-p) \geq 10$
c) $n \geq 30$ sin importar el valor de $p$
d) Siempre, sin restricciones sobre $n$ o $p$

> **b) np >= 10 y n(1-p) >= 10**
