---
titulo: Types of Probability Distributions
tipo: anotacion-video
tema: Distribuciones
tags:
  - estadistica-inferencial
  - distribuciones
---

# 📘 Tipos de Distribuciones de Probabilidad

## 🎬 Datos del video
- **Título:** Types of Probability Distributions | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Types+of+Probability+Distributions+|+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Las distribuciones de probabilidad se clasifican en **discretas** y **continuas** según el tipo de valores que toma la variable aleatoria. Cada familia tiene parámetros que controlan su forma, y se usa en contextos específicos.

## 🧮 Contenido

### Discretas vs. Continuas

| Característica | Discretas | Continuas |
|---|---|---|
| Valores posibles | Finitos o numerables | Infinitos (intervalos) |
| Descripción | Función de masa $f(x)$ | Función de densidad $f(x)$ |
| Probabilidad puntual | $P(X = x_i) = f(x_i) > 0$ | $P(X = c) = 0$ para cualquier $c$ |
| Cálculo | Sumatorias $\sum$ | Integrales $\int$ |
| Ejemplos | 0, 1, 2, 3, ... | Cualquier real en un intervalo |

### Distribuciones discretas principales

**Bernoulli** ($p$): Un solo ensayo con éxito (1) o fracaso (0).
- $f(1) = p$, $f(0) = 1-p$

**Binomial** ($n$, $p$): Número de éxitos en $n$ ensayos Bernoulli independientes.
- $f(k) = C(n,k) \, p^k (1-p)^{n-k}$, $k = 0, 1, \dots, n$

**Poisson** ($\lambda$): Número de eventos en un intervalo de tiempo o espacio.
- $f(k) = \frac{e^{-\lambda} \lambda^k}{k!}$, $k = 0, 1, 2, \dots$

**Geométrica** ($p$): Número de ensayos hasta el primer éxito.
- $f(k) = (1-p)^{k-1} p$, $k = 1, 2, 3, \dots$

**Binomial Negativa** ($r$, $p$): Número de ensayos hasta el $r$-ésimo éxito.
- $f(k) = C(k-1, r-1) \, p^r (1-p)^{k-r}$, $k = r, r+1, \dots$

### Distribuciones continuas principales

**Normal** ($\mu$, $\sigma^2$): Campana de Gauss simétrica. La distribución más importante en estadística.
- $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

**t de Student** ($\nu$): Similar a la normal pero con colas más pesadas. Usada con muestras pequeñas.
- Parecida a la normal pero con $\nu$ grados de libertad que controlan el grosor de las colas.

**F de Fisher** ($d_1$, $d_2$): Razón de dos varianzas muestrales. Usada en ANOVA y regresión.

**Ji-cuadrada ($\chi^2$)** ($k$): Suma de $k$ cuadrados de normales estándar. Usada en pruebas de bondad de ajuste.

### Función de masa vs. función de densidad
- **PMF** (discreta): Da probabilidades **directas**. La gráfica son barras.
- **PDF** (continua): Da **densidades**, no probabilidades directas. Probabilidad = área bajo la curva.

## 💡 Ejemplo numérico
Comparación de dos distribuciones para un mismo parámetro $p = 0.5$:

**Bernoulli (1 ensayo):**
$P(X=1) = 0.5$, $P(X=0) = 0.5$

**Binomial ($n=4$, $p=0.5$):**
- $P(X=0) = C(4,0)(0.5)^0(0.5)^4 = 0.0625$
- $P(X=1) = C(4,1)(0.5)^1(0.5)^3 = 0.2500$
- $P(X=2) = C(4,2)(0.5)^2(0.5)^2 = 0.3750$
- $P(X=3) = C(4,3)(0.5)^3(0.5)^1 = 0.2500$
- $P(X=4) = C(4,4)(0.5)^4(0.5)^0 = 0.0625$
- Suma: $1.0000$ ✓

**Poisson ($\lambda = 2$):**
- $P(X=0) = \frac{e^{-2} \cdot 2^0}{0!} = e^{-2} \approx 0.1353$
- $P(X=1) = \frac{e^{-2} \cdot 2^1}{1!} \approx 0.2707$
- $P(X=2) = \frac{e^{-2} \cdot 2^2}{2!} \approx 0.2707$

## 🌍 Ejemplo de la vida real
Un centro de distribución clasifica incidentes por tipo:
- **Bernoulli**: ¿Se entregó el paquete a tiempo? (Sí/No)
- **Binomial**: De 20 envíos, ¿cuántos llegaron a tiempo?
- **Poisson**: ¿Cuántas quejas se reciben por hora?
- **Geométrica**: ¿Cuántos paquetes se procesan hasta encontrar uno dañado?
- **Normal**: ¿Cuál es el peso promedio de los paquetes?

Cada tipo de pregunta se modela con la distribución más adecuada, facilitando predicciones y toma de decisiones.

> [!tip] Relación con el curso
> Conocer el catálogo de distribuciones permite seleccionar el modelo correcto para cada problema de inferencia: pruebas de hipótesis, intervalos de confianza y regresión todos dependen de distribuciones específicas.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál de las siguientes distribuciones es una distribución **continua**?

a) Binomial
b) Poisson
c) t de Student
d) Geométrica

> **c) t de Student**

---

### Pregunta 2

La distribución de Poisson se utiliza para modelar:

a) El número de éxitos en un número fijo de ensayos independientes.
b) La cantidad de ensayos necesarios hasta obtener el primer éxito.
c) La cantidad de eventos raros que ocurren en un intervalo de tiempo o espacio.
d) El peso promedio de una población.

> **c) La cantidad de eventos raros que ocurren en un intervalo de tiempo o espacio.**

---

### Pregunta 3

En la distribución binomial con parámetros $n=5$ y $p=0.3$, ¿qué representa la variable aleatoria?

a) El número de ensayos hasta el primer éxito.
b) La proporción de éxitos en la población.
c) El número de éxitos en 5 ensayos Bernoulli independientes con probabilidad 0.3 cada uno.
d) La diferencia entre dos varianzas muestrales.

> **c) El número de éxitos en 5 ensayos Bernoulli independientes con probabilidad 0.3 cada uno.**

---

### Pregunta 4

¿Qué distribución se usa como modelo para el número de ensayos necesarios hasta alcanzar el **primer** éxito?

a) Binomial negativa
b) Geométrica
c) Bernoulli
d) Poisson

> **b) Geométrica**

---

### Pregunta 5

La distribución normal se caracteriza por ser:

a) Discreta, definida solo para valores enteros no negativos.
b) Asimétrica con colas pesadas.
c) Simétrica en forma de campana de Gauss, parametrizada por media $\mu$ y varianza $\sigma^2$.
d) Definida solo para valores positivos con un parámetro de escala.

> **c) Simétrica en forma de campana de Gauss, parametrizada por media $\mu$ y varianza $\sigma^2$.**

---

### Pregunta 6

¿Cuál de las siguientes afirmaciones es **correcta** sobre la distribución t de Student?

a) Se utiliza cuando la varianza poblacional es conocida con precisión.
b) Tiene colas más pesadas que la distribución normal y se usa con muestras pequeñas.
c) Solo toma valores positivos.
d) Es una distribución discreta.

> **b) Tiene colas más pesadas que la distribución normal y se usa con muestras pequeñas.**

---

### Pregunta 7

La distribución de Bernoulli se define como un único ensayo con dos resultados posibles. Si $p=0.4$, entonces:

a) $P(X=0)=0.6$ y $P(X=1)=0.4$
b) $P(X=0)=0.4$ y $P(X=1)=0.6$
c) $P(X=0)=0.5$ y $P(X=1)=0.5$
d) $P(X=0)=0.1$ y $P(X=1)=0.9$

> **a) $P(X=0)=0.6$ y $P(X=1)=0.4$**

---

### Pregunta 8

La distribución $\chi^2$ (chi-cuadrado) con $k$ grados de libertad se define como:

a) La razón de dos varianzas muestrales independientes.
b) La suma de $k$ cuadrados de variables normales estándar independientes.
c) El número de eventos en un intervalo con tasa constante $\lambda$.
d) El número de ensayos hasta el $r$-ésimo éxito.

> **b) La suma de $k$ cuadrados de variables normales estándar independientes.**

---

### Pregunta 9

¿Qué función asigna probabilidades directas a cada valor posible en una distribución discreta?

a) La función de densidad de probabilidad (PDF).
b) La función de distribución acumulada.
c) La función de masa de probabilidad (PMF).
d) La función de verosimilitud.

> **c) La función de masa de probabilidad (PMF).**

---

### Pregunta 10

¿Cuál distribución se emplea en ANOVA para comparar varianzas mediante la razón de dos varianzas muestrales?

a) t de Student
b) Normal
c) F de Fisher
d) Binomial negativa

> **c) F de Fisher**
