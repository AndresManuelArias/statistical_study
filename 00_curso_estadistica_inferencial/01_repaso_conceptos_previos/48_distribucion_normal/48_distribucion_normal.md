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
- $P(\mu - 2\sigma < X < \mu + 2\sigma) \approx 0.9545$
- $P(\mu - 3\sigma < X < \mu + 3\sigma) \approx 0.9973$

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
