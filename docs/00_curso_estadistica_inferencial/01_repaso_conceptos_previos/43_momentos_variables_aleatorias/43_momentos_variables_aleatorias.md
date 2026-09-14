---
titulo: Momentos de las Variables Aleatorias
tipo: anotacion-video
tema: Momentos de variables aleatorias
tags:
  - estadistica-inferencial
  - distribuciones
---

# Momentos de las Variables Aleatorias

## Datos del video
- **Título:** Momentos de las Variables Aleatorias | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Momentos+de+las+Variables+Aleatorias+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa


<iframe width="560" height="315" src="https://www.youtube.com/embed/-QMa947Teoo?si=em6hF9kQotihCRtx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
Los momentos de una variable aleatoría son valores que describen características fundamentales de su distribución. Los momentos alrededor del origen y los centrados permiten obtener la media, la varianza, la asimetría y la curtosis, siendo herramientas esenciales para la inferencia estadística.

## Contenido

### Momentos alrededor del origen

El **momento de orden $k$** alrededor del origen se define como:

$$\mu_k' = E(X^k) = \sum_{x} x^k \cdot P(X = x)$$

para variables aleatorias discretas, o:

$$\mu_k' = E(X^k) = \int_{-\infty}^{\infty} x^k \cdot f(x)\, dx$$

para variables aleatorias continuas.

Cada momento captura una información diferente:

- $k = 1$: $\mu_1' = E(X)$ → la **media** de la distribución.
- $k = 2$: $\mu_2' = E(X^2)$ → se usa para calcular la varianza.
- $k = 3$: $\mu_3' = E(X^3)$ → relacionado con la asimetría.
- $k = 4$: $\mu_4' = E(X^4)$ → relacionado con la curtosis.

### Momentos centrados

El **momento centrado de orden $k$** se define como la esperanza de la desviación elevada a la $k$-ésima potencia:

$$\mu_k = E\!\left[(X - \mu)^k\right]$$

donde $\mu = E(X)$.

Algunos momentos centrados son especialmente importantes:

| Momento centrado | Significado |
|:---:|:---:|
| $\mu_1 = E(X - \mu) = 0$ | Siempre es cero (por definición de media) |
| $\mu_2 = E\!\left[(X - \mu)^2\right] = \text{Var}(X)$ | La **varianza** |
| $\mu_3 = E\!\left[(X - \mu)^3\right]$ | Indica **asimetría** |
| $\mu_4 = E\!\left[(X - \mu)^4\right]$ | Indica **curtosis** |

### Relación entre ambos tipos de momentos

La varianza se expresa usando momentos alrededor del origen:

$$\text{Var}(X) = E(X^2) - \left[E(X)\right]^2 = \mu_2' - (\mu_1')^2$$

La asimetría (skewness) se calcula como:

$$\gamma_1 = \frac{\mu_3}{\sigma^3}$$

- Si $\gamma_1 > 0$: asimetría positiva (cola a la derecha).
- Si $\gamma_1 < 0$: asimetría negativa (cola a la izquierda).
- Si $\gamma_1 = 0$: distribución simétrica.

La curtosis se calcula como:

$$\gamma_2 = \frac{\mu_4}{\sigma^4}$$

Una distribución normal tiene $\gamma_2 = 3$. Se dice que tiene **exceso de curtosis** cuando $\gamma_2 - 3 > 0$ (colas pesadas).

## Ejemplo numérico

Considera una variable aleatoria $X$ con la siguiente distribución:

| $x$ | 1 | 2 | 3 |
|:---:|:---:|:---:|:---:|
| $P(X=x)$ | 0,3 | 0,5 | 0,2 |

**Momentos alrededor del origen:**

$$\mu_1' = E(X) = 1(0,3) + 2(0,5) + 3(0,2) = 0,3 + 1,0 + 0,6 = 1,9$$

$$\mu_2' = E(X^2) = 1^2(0,3) + 2^2(0,5) + 3^2(0,2) = 0,3 + 2,0 + 1,8 = 4,1$$

**Momentos centrados:**

$$\mu_2 = \text{Var}(X) = E(X^2) - [E(X)]^2 = 4,1 - (1,9)^2 = 4,1 - 3,61 = 0,49$$

$$\sigma = \sqrt{0,49} = 0,7$$

Calculamos el momento centrado de orden 3:

$$\mu_3 = E[(X - 1,9)^3] = (1-1,9)^3(0,3) + (2-1,9)^3(0,5) + (3-1,9)^3(0,2)$$

$$= (-0,9)^3(0,3) + (0,1)^3(0,5) + (1,1)^3(0,2)$$

$$= (-0,729)(0,3) + (0,001)(0,5) + (1,331)(0,2) = -0,2187 + 0,0005 + 0,2662 = 0,048$$

## Ejemplo de la vida real

Una fábrica produce piezas cuyo peso $X$ (en gramos) tiene momentos que se usan para control de calidad: $\mu_1' = E(X) = 250$ g y $\mu_2' = E(X^2) = 62\,600$. La varianza del peso es $\text{Var}(X) = 62\,600 - 250^2 = 62\,600 - 62\,500 = 100$, con desviación estándar $\sigma = 10$ g. Si se calcula $\mu_3 > 0$, las piezas tienden a pesar un poco más de lo esperado, lo que alerta sobre un posible desajuste en la maquinaria.

> [!tip] Relación con el curso
> Los momentos son la base para construir estadísticos inferenciales como estimadores de la media y varianza poblacional, y para establecer distribuciones muestrales en pruebas de hipótesis.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa el primer momento alrededor del origen, $\mu_1' = E(X)$?

a) La varianza de la distribución
b) La media de la distribución
c) La desviación estándar de la distribución
d) La asimetría de la distribución

> **b) La media de la distribución**

---

### Pregunta 2

¿Cuál es la fórmula correcta para calcular la varianza usando momentos alrededor del origen?

a) $\text{Var}(X) = E(X) - [E(X^2)]$
b) $\text{Var}(X) = E(X^2) - [E(X)]^2$
c) $\text{Var}(X) = [E(X)]^2 - E(X^2)$
d) $\text{Var}(X) = E(X^2) \times [E(X)]^2$

> **b) $\text{Var}(X) = E(X^2) - [E(X)]^2$**

---

### Pregunta 3

¿Qué valor tiene siempre el momento centrado de orden 1, $\mu_1 = E(X - \mu)$?

a) 1
b) $\mu$
c) 0
d) $\sigma^2$

> **c) 0**

---

### Pregunta 4

¿Cuál es $E(X)$?

a) 0,8
b) 1,0
c) 1,1
d) 1,3

> **c) 1,1**

---

### Pregunta 5

¿Qué indica el momento centrado de orden 3, $\mu_3 = E[(X - \mu)^3]$?

a) La curtosis de la distribución
b) La media de la distribución
c) La varianza de la distribución
d) La asimetría de la distribución

> **d) La asimetría de la distribución**

---

### Pregunta 6

Si $\text{Var}(X) = 0,49$, ¿cuál es la desviación estándar $\sigma$?

a) 0,2401
b) 0,7
c) 1,4
d) 0,49

> **b) 0,7**

---

### Pregunta 7

Para la distribución del ejemplo del archivo ($x=1,2,3$ con $P=0,3, 0,5, 0,2$), ¿cuál es $E(X^2)$?

a) 1,9
b) 4,1
c) 3,61
d) 0,49

> **b) 4,1**

---

### Pregunta 8

Si $\gamma_1 > 0$, ¿qué se puede afirmar sobre la distribución?

a) Tiene colas más pesadas que la normal
b) Es una distribución simétrica
c) Tiene asimetría positiva (cola a la derecha)
d) Tiene asimetría negativa (cola a la izquierda)

> **c) Tiene asimetría positiva (cola a la derecha)**

---

### Pregunta 9

Para una variable aleatoria $X$ con distribución: $P(X=1)=0,2$, $P(X=2)=0,5$, $P(X=3)=0,3$. ¿Cuál es la varianza $\text{Var}(X)$?

a) 0,49
b) 2,1
c) 4,9
d) 0,7

> **a) 0,49**

---

### Pregunta 10

Si $E(X) = 3$ y $E(X^2) = 10$, ¿cuál es la desviación estándar $\sigma$?

a) 1
b) $\sqrt{7}$
c) 7
d) $\sqrt{10}$

> **a) 1**
