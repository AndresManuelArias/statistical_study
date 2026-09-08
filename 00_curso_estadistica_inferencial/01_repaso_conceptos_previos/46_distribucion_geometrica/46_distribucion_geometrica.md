---
titulo: Distribución Geométrica
tipo: anotacion-video
tema: Distribución Geométrica
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Geométrica

## Datos del video
- **Título:** Distribución Geométrica | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Geométrica+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## Resumen
La distribución geométrica modela el número de ensayos necesarios hasta obtener el primer éxito en una secuencia de Bernoulli independientes. Es una distribución discreta con la propiedad de "sin memoria", y se expresa de dos formas según se cuenten los ensayos o los fracasos.

## Contenido

### Definición

Sea $X$ el **número de ensayos** necesarios para obtener el primer éxito. Entonces $X$ sigue una distribución geométrica con parámetro $p$ (probabilidad de éxito en cada ensayo):

$$P(X = k) = (1 - p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$

donde:
- $k$ = número del ensayo en que ocurre el primer éxito.
- $p$ = probabilidad de éxito en cada ensayo.
- $1-p = q$ = probabilidad de fracaso.

### Propiedades

**Media (número esperado de ensayos):**

$$E(X) = \frac{1}{p}$$

**Varianza:**

$$\text{Var}(X) = \frac{1 - p}{p^2}$$

**Desviación estándar:**

$$\sigma = \frac{\sqrt{1-p}}{p}$$

### Variante: número de fracasos antes del primer éxito

Sea $Y$ el **número de fracasos** antes del primer éxito. Entonces $Y = X - 1$ y su función de masa es:

$$P(Y = k) = (1-p)^k \cdot p, \quad k = 0, 1, 2, \ldots$$

En este caso:

$$E(Y) = \frac{1 - p}{p} = \frac{q}{p}$$

$$\text{Var}(Y) = \frac{1 - p}{p^2} = \frac{q}{p^2}$$

La varianza es la misma en ambas formulaciones.

### Propiedad de sin memoria

La distribución geométrica es la **única** distribución discreta con la propiedad de sin memoria:

$$P(X > s + t \mid X > s) = P(X > t)$$

Esto significa: si ya has fallado $s$ veces, la probabilidad de necesitar al menos $t$ ensayos adicionales es la misma que si hubieras empezado de cero. Los ensayos pasados no afectan el futuro.

## Ejemplo numérico

Un estudiante intenta aprobar un examen de optiones múltiples con $p = 0.25$ de acertar al azar en cada intento.

**Número esperado de intentos:**

$$E(X) = \frac{1}{p} = \frac{1}{0.25} = 4 \text{ intentos}$$

**Varianza:**

$$\text{Var}(X) = \frac{1 - 0.25}{(0.25)^2} = \frac{0.75}{0.0625} = 12$$

$$\sigma = \sqrt{12} \approx 3.46 \text{ intentos}$$

**Probabilidad de aprobar en el tercer intento ($k = 3$):**

$$P(X = 3) = (1 - 0.25)^{3-1} \cdot 0.25 = (0.75)^2 \cdot 0.25 = 0.5625 \cdot 0.25 = 0.1406$$

**Probabilidad de necesitar más de 5 intentos:**

$$P(X > 5) = (1 - p)^5 = (0.75)^5 = 0.2373$$

Hay un 23.73% de probabilidad de que necesite más de 5 intentos.

**Probabilidad de aprobar exactamente en el primer intento:**

$$P(X = 1) = (0.75)^0 \cdot 0.25 = 0.25$$

## Ejemplo de la vida real

Una estación de inspección de calidad revisa componentes electrónicos. La probabilidad de encontrar un defectuoso en cada revisión es $p = 0.10$. El inspector quiere saber cuántas unidades debe revisar en promedio hasta encontrar el primero defectuoso:

$$E(X) = \frac{1}{0.10} = 10 \text{ unidades}$$

La varianza es:

$$\text{Var}(X) = \frac{0.90}{(0.10)^2} = \frac{0.90}{0.01} = 90$$

$$\sigma = \sqrt{90} \approx 9.49 \text{ unidades}$$

Esto indica que, aunque en promedio revisa 10 unidades, hay bastante variabilidad: podría encontrar el defectuoso en la primera unidad o bien en la número 30 o más.

> [!tip] Relación con el curso
> La distribución geométrica se usa en la inferencia para estimar probabilidades de éxito $p$ a partir del número de ensayos observados hasta el primer éxito, y es el punto de partida de la distribución binomial negativa.
