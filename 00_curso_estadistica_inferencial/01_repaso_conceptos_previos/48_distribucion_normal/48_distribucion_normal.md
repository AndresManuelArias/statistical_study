---
titulo: Distribución Normal
tipo: anotacion-video
tema: Distribución Normal
tags:
  - estadistica-inferencial
  - distribuciones
---

# Normal Distribution

## Datos del video
- **Título:** Normal Distribution | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Normal+Distribution+|+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## Resumen
La distribución normal es la distribución continua más importante en estadística. Su forma de campana simétrica, definida por la media $\mu$ y la desviación estándar $\sigma$, aparece en la naturaleza y en casi todos los procesos de medición. Es la base de la inferencia estadística clásica.

## Contenido

### Definición

Una variable aleatoria $X$ tiene una distribución normal con parámetros $\mu$ (media) y $\sigma^2$ (varianza) si su función de densidad de probabilidad es:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \, e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad -\infty < x < \infty$$

Se denota como:

$$X \sim N(\mu, \sigma^2)$$

### Propiedades fundamentales

1. **Simetría:** La curva es simétrica alrededor de $x = \mu$. Esto implica que media = mediana = moda.

2. **Área total:** El área bajo la curva es exactamente 1:
$$\int_{-\infty}^{\infty} f(x)\, dx = 1$$

3. **Asíntota:** La curva se aproxima al eje $x$ pero nunca lo toca.

4. **Máximo en $\mu$:** La función alcanza su valor máximo en $x = \mu$.

5. **Inflexión:** Los puntos de inflexión están en $x = \mu - \sigma$ y $x = \mu + \sigma$.

### Parámetros

- **$\mu$ (media):** Determina la **posición** de la campana. Cambiar $\mu$ desplaza la curva a la derecha o izquierda.
- **$\sigma$ (desviación estándar):** Determina la **dispersión**. Una $\sigma$ grande produce una campana ancha y baja; una $\sigma$ pequeña produce una campana estrecha y alta.

### Regla empírica (68-95-99.7)

Para cualquier distribución normal:

| Intervalo | Probabilidad |
|:---:|:---:|
| $\mu \pm 1\sigma$ | $\approx 68.27\%$ |
| $\mu \pm 2\sigma$ | $\approx 95.45\%$ |
| $\mu \pm 3\sigma$ | $\approx 99.73\%$ |

Esto significa que el 68% de los datos cae dentro de una desviación estándar de la media, el 95% dentro de dos, y el 99.7% dentro de tres.

### Propiedades de línea de probabilidad

- $P(\mu - \sigma < X < \mu + \sigma) \approx 0.6827$
- $P(\mu - 2\sigma < X < 2\sigma + \mu) \approx 0.9545$
- $P(\mu - 3\sigma < X < 3\sigma + \mu) \approx 0.9973$

## Ejemplo numérico

La estatura de hombres adultos en un país se distribuye normalmente con $\mu = 170$ cm y $\sigma = 8$ cm, es decir, $X \sim N(170, 64)$.

**Probabilidad de que un hombre mida entre 162 y 178 cm:**

$$P(162 < X < 178) = P\!\left(\frac{162-170}{8} < Z < \frac{178-170}{8}\right) = P(-1 < Z < 1) \approx 0.6827$$

**Probabilidad de que mida más de 186 cm:**

$$P(X > 186) = P\!\left(Z > \frac{186-170}{8}\right) = P(Z > 2) = \frac{1 - 0.9545}{2} = 0.0228$$

Aproximadamente el **2.28%** de los hombres miden más de 186 cm.

**Probabilidad de que mida menos de 154 cm:**

$$P(X < 154) = P\!\left(Z < \frac{154-170}{8}\right) = P(Z < -2) = 0.0228$$

Por simetría, el mismo porcentaje que mide más de 186 cm mide menos de 154 cm.

## Ejemplo de la vida real

Una máquina envasadora llena paquetes de cereal con un peso que se distribuye normalmente: $\mu = 500$ g, $\sigma = 10$ g. Un regulatorio exige que al menos el 99% de los paquetes contengan entre 475 y 525 g.

$$P(475 < X < 525) = P\!\left(\frac{475-500}{10} < Z < \frac{525-500}{10}\right) = P(-2.5 < Z < 2.5)$$

$$= 2 \cdot P(0 < Z < 2.5) = 2(0.4938) = 0.9876$$

Solo el 98.76% cae en ese rango, ligeramente por debajo del 99% requerido. El ingeniero debe reducir la variabilidad ($\sigma$) o ajustar la media.

> [!tip] Relación con el curso
> La distribución normal es el pilar de la inferencia estadística: la distribución muestral de la media, los intervalos de confianza y las pruebas $z$ se basan directamente en esta distribución.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué parámetro determina la posición de la campana en una distribución normal?

a) La desviación estándar $\sigma$
b) La media $\mu$
c) La varianza $\sigma^2$
d) El coeficiente de variación

> **b) La media $\mu$**

---

### Pregunta 2

En una distribución normal, ¿cuál es la relación entre media, mediana y moda?

a) La media es mayor que la mediana, que es mayor que la moda
b) La media es menor que la mediana, que es menor que la moda
c) Media, mediana y moda son todas iguales
d) La moda siempre es igual a cero

> **c) Media, mediana y moda son todas iguales**

---

### Pregunta 3

Según la regla empírica 68-95-99.7, ¿qué porcentaje de datos se encuentra dentro de una desviación estándar de la media?

a) 95%
b) 99.7%
c) 68%
d) 50%

> **c) 68%**

---

### Pregunta 4

Si una variable $X$ se distribuye normalmente con media 100 y desviación estándar 10, ¿entre qué valores se encuentra el 68% de los datos?

a) Entre 80 y 120
b) Entre 90 y 110
c) Entre 70 y 130
d) Entre 95 y 105

> **b) Entre 90 y 110**

---

### Pregunta 5

¿Cuál es el área total bajo la curva de densidad de una distribución normal?

a) 0.5
b) 100
c) 2
d) 1

> **d) 1**

---

### Pregunta 6

Si los puntajes de un examen se distribuyen normalmente con $\mu = 75$ y $\sigma = 5$, según la regla empírica, ¿qué porcentaje de estudiantes obtiene entre 65 y 85 puntos?

a) 95%
b) 68%
c) 99.7%
d) 50%

> **a) 95%**

---

### Pregunta 7

¿Cómo se denota correctamente que una variable $X$ sigue una distribución normal con media 50 y desviación estándar 4?

a) $X \sim N(50, 4)$
b) $X \sim N(50, 16)$
c) $X \sim N(4, 50)$
d) $X \sim N(16, 50)$

> **b) $X \sim N(50, 16)$**

---

### Pregunta 8

Si los ingresos mensuales de los empleados de una empresa se distribuyen normalmente con $\mu = 2000$ y $\sigma = 200$, según la regla empírica, ¿qué porcentaje de empleados gana entre 1600 y 2400?

a) 68%
b) 95%
c) 99.7%
d) 50%

> **b) 95%**

---

### Pregunta 9

Si se duplica la desviación estándar de una distribución normal manteniendo la media constante, la campana se vuelve:

a) Más estrecha y más alta
b) Más ancha y más baja
c) Igual, solo cambia la posición
d) Se vuelve asimétrica

> **b) Más ancha y más baja**

---

### Pregunta 10

En una distribución normal con $\mu = 100$ y $\sigma = 15$, ¿cuál es aproximadamente la probabilidad de que un valor sea mayor que 115?

a) 16%
b) 32%
c) 2.5%
d) 5%

> **a) 16%**
