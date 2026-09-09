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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

En la distribución geométrica, ¿qué representa la variable aleatoria $X$?

a) El número de éxitos en $n$ ensayos independientes
b) El número de ensayos necesarios para obtener el primer éxito
c) El número de fracasos antes del tercer éxito
d) La probabilidad de éxito en cada ensayo

> **b) El número de ensayos necesarios para obtener el primer éxito**

---

### Pregunta 2

Si $p = 0.5$, ¿cuál es $P(X = 3)$?

a) 0.25
b) 0.5
c) 0.125
d) 0.0625

> **c) 0.125**

---

### Pregunta 3

Se lanza un dado justo ($p = 1/6$) repetidamente. ¿Cuál es la probabilidad de obtener el primer 6 en el cuarto intento?

a) $(1/6)^4 \approx 0.0008$
b) $(5/6)^3 \times (1/6) \approx 0.0965$
c) $(5/6)^4 \times (1/6) \approx 0.0804$
d) $(4/6)^3 \times (2/6) \approx 0.2963$

> **b) $(5/6)^3 \times (1/6) \approx 0.0965$**

---

### Pregunta 4

Si la probabilidad de éxito es $p = 0.2$, ¿cuál es el número esperado de ensayos?

a) 0.2
b) 2
c) 5
d) 4

> **c) 5**

---

### Pregunta 5

¿Qué significa la propiedad de "sin memoria" de la distribución geométrica?

a) La probabilidad de éxito cambia tras cada ensayo
b) Si ya se han fallado $s$ veces, la distribución de ensayos restantes es la misma que empezar de cero
c) El número esperado de ensayos siempre es igual a $1/p$
d) La varianza es siempre igual a la media

> **b) Si ya se han fallado $s$ veces, la distribución de ensayos restantes es la misma que empezar de cero**

---

### Pregunta 6

¿Cuál es la varianza de $X$ cuando $p = 0.5$?

a) 0.5
b) 1
c) 2
d) 4

> **c) 2**

---

### Pregunta 7

¿Cuál es la probabilidad de obtener el éxito en el primer intento, es decir, $P(X = 1)$?

a) $(1-p)^2$
b) $p^2$
c) $p$
d) $1-p$

> **c) $p$**

---

### Pregunta 8

Si se define $Y$ como el número de fracasos antes del primer éxito, ¿cuál es la relación entre $Y$ y la variable $X$ (número de ensayos hasta el primer éxito)?

a) $Y = X + 1$
b) $Y = X$
c) $Y = X - 1$
d) $Y = 2X$

> **c) $Y = X - 1$**

---

### Pregunta 9

Si $p = 0.25$, ¿cuál es la probabilidad de necesitar más de 5 intentos, es decir, $P(X > 5)$?

a) 0.7627
b) 0.2373
c) 0.1001
d) 0.3125

> **b) 0.2373**

---

### Pregunta 10

Si $X$ es el número de ensayos hasta el primer éxito con $p = 0.4$, ¿cuál es la desviación estándar $\sigma$?

a) 1.58
b) 2.5
c) 1.25
d) 6.25

> **a) 1.58**
