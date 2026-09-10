---
titulo: Distribución Binomial
tipo: anotacion-video
tema: Distribuciones
tags:
  - estadistica-inferencial
  - distribuciones
---

# 📘 Distribución Binomial

## 🎬 Datos del video
- **Título:** Distribución Binomial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Binomial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/-IZ-zfzw4Hc?si=-VWjOy6lmP-SF8JC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
La distribución binomial modela el número de éxitos en $n$ ensayos Bernoulli independientes, cada uno con la misma probabilidad de éxito $p$. Es una de las distribuciones discretas más utilizadas en inferencia estadística.

## 🧮 Contenido

### Definición
Una variable aleatoria $X$ tiene distribución **Binomial** con parámetros $n$ y $p$ si:

$$X \sim Binomial(n, p)$$

representa el número de éxitos en $n$ ensayos idénticos e independientes, cada uno con probabilidad $p$ de éxito.

### Condiciones (criterios de Bernoulli)
Para que un experimento se modelé con Binomial se deben cumplir:
1. **Ensayos fijos:** Se realizan exactamente $n$ ensayos.
2. **Dos resultados:** Cada ensayo tiene solo dos resultados: éxito o fracaso.
3. **Probabilidad constante:** La probabilidad de éxito $p$ es la misma en cada ensayo.
4. **Independencia:** Los ensayos son independientes entre sí.

### Función de masa de probabilidad

$$P(X = k) = C(n, k) \, p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \dots, n$$

donde el coeficiente binomial es:

$$C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Esperanza matemática

$$E(X) = np$$

**Interpretación:** Si lanzamos 20 monedas justas ($p = 0.5$), esperamos $20 \times 0.5 = 10$ caras.

### Varianza

$$V(X) = np(1-p)$$

**Desviación estándar:**
$$\sigma = \sqrt{np(1-p)}$$

### Relación con otras distribuciones
- Bernoulli: $Binomial(1, p) = \text{Bernoulli}(p)$
- Cuando $n$ es grande y $p$ es pequeño, $Binomial(n, p) \approx \text{Poisson}(\lambda = np)$
- Cuando $n$ es grande, $Binomial(n, p) \approx N(np, np(1-p))$ (aproximación normal)

## 💡 Ejemplo numérico
Se inspeccionan $n = 10$ componentes electrónicos, cada uno con probabilidad $p = 0.5$ de estar defectuoso. $X$ = número de defectuosos.

**Cálculo de $P(X = 3)$:**
$$P(X = 3) = C(10, 3) (0.5)^3 (0.5)^7 = \frac{10!}{3! \cdot 7!} \cdot (0.5)^{10} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} \cdot \frac{1}{1024}$$

$$= 120 \times \frac{1}{1024} = \frac{120}{1024} \approx 0.1172$$

**Cálculo de $P(X = 0)$:**
$$P(X = 0) = C(10, 0)(0.5)^0(0.5)^{10} = 1 \times 1 \times \frac{1}{1024} \approx 0.00098$$

**Cálculo de $P(X = 5)$:**
$$P(X = 5) = C(10, 5)(0.5)^5(0.5)^5 = 252 \times \frac{1}{1024} = \frac{252}{1024} \approx 0.2461$$

**Esperanza:**
$$E(X) = np = 10 \times 0.5 = 5 \text{ defectuosos esperados}$$

**Varianza:**
$$V(X) = np(1-p) = 10 \times 0.5 \times 0.5 = 2.5$$

**Desviación estándar:**
$$\sigma = \sqrt{2.5} \approx 1.581 \text{ defectuosos}$$

## 🌍 Ejemplo de la vida real
Un centro de distribución envía 50 paquetes al día. Históricamente, el 6% de los paquetes se pierden o dañan durante el transporte ($p = 0.06$). El gerente quiere saber la probabilidad de que más de 5 paquetes se pierdan mañana:

$$P(X > 5) = 1 - P(X \leq 5)$$

Con $n = 50$ y $p = 0.06$: $E(X) = 50 \times 0.06 = 3$ paquetes perdidos esperados.

$V(X) = 50 \times 0.06 \times 0.94 = 2.82$, $\sigma \approx 1.679$.

Un resultado de $X = 6$ estaría a $\frac{6 - 3}{1.679} \approx 1.79$ desviaciones estándar sobre la media, lo cual es posible pero inusual. Esto ayuda a establecer alertas operativas: si se pierden 6+ paquetes, investigar la causa raíz.

> [!tip] Relación con el curso
> La distribución binomial es fundamental para pruebas de hipótesis sobre proporciones, intervalos de confianza para proporciones poblacionales y el diseño de muestras en investigación estadística.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuántos parámetros definen una distribución Binomial?

a) Uno solo
b) Dos: n y p
c) Tres: n, p y q
d) Cuatro: n, p, q y k

> **b) Dos: n y p**

---

### Pregunta 2

¿Cuál de las siguientes NO es una condición para modelar un experimento con distribución Binomial?

a) Ensayos fijos
b) Dos resultados posibles en cada ensayo
c) Resultados ordenados en el tiempo
d) Independencia entre ensayos

> **c) Resultados ordenados en el tiempo**

---

### Pregunta 3

Una distribución Bernoulli es un caso especial de la distribución Binomial con:

a) $n = 1$ y $p = 0,5$
b) $n = 1$ y cualquier valor de $p \in [0, 1]$
c) $n = 2$ y $p = 1$
d) Cualquier $n$ y $p = 0,5$

> **b) $n = 1$ y cualquier valor de $p \in [0, 1]$**

---

### Pregunta 4

Si $X \sim Binomial(n = 10, p = 0,2)$, ¿cuál es la esperanza $E(X)$?

a) 1
b) 2
c) 5
d) 8

> **b) 2**

---

### Pregunta 5

Se lanza una moneda justa ($p = 0,5$) 4 veces. ¿Cuál es la probabilidad de obtener exactamente 2 caras?

$$P(X = 2) = \binom{4}{2} (0,5)^2 (0,5)^2 = 6 \times 0,0625$$

a) 0,0625
b) 0,25
c) 0,375
d) 0,5

> **c) 0,375**

---

### Pregunta 6

Si $X \sim Binomial(n = 8, p = 0,5)$, ¿cuál es la varianza $V(X)$?

$$V(X) = np(1-p) = 8 \times 0,5 \times 0,5$$

a) 1
b) 2
c) $\sqrt{2}$
d) 4

> **b) 2**

---

### Pregunta 7

¿Cuándo se puede aproximar la distribución Binomial mediante la distribución de Poisson?

a) Cuando $n$ es grande y $p$ es pequeño
b) Cuando $n$ es grande y $p$ es cercano a 0,5
c) Cuando $p$ es grande y $n$ es pequeño
d) Cuando $n = 1$

> **a) Cuando $n$ es grande y $p$ es pequeño**

---

### Pregunta 8

Un examen tiene 5 preguntas de opción múltiple, cada una con 4 alternativas. Un estudiante responde al azar. Si $X$ es el número de respuestas correctas, $X \sim Binomial(5, 0,25)$. ¿Cuál es la varianza?

$$V(X) = 5 \times 0,25 \times 0,75$$

a) 0,9375
b) 1,25
c) 1,875
d) 3,75

> **a) 0,9375**

---

### Pregunta 9

Si $E(X) = 5$ y $V(X) = 2,5$ para una variable binomial, ¿cuáles son los valores de $n$ y $p$?

a) $n = 25$, $p = 0,2$
b) $n = 5$, $p = 1$
c) $n = 10$, $p = 0,5$
d) $n = 20$, $p = 0,25$

> **c) $n = 10$, $p = 0,5$**

---

### Pregunta 10

Si $X \sim Binomial(n = 6, p = 0,5)$ y $P(X \leq 3) = 0,6562$, ¿cuál es $P(X > 3)$?

a) 0,6562
b) 0,5
c) 0,3438
d) 0,125

> **c) 0,3438**
