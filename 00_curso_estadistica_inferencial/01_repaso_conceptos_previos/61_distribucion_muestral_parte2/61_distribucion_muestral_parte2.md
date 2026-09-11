---
titulo: Distribución Muestral (Parte 2)
tipo: anotacion-video
tema: Distribución Muestral de la Proporción
tags:
  - estadistica-inferencial
  - inferencia
---

# Sampling Distribution (Part 2)

## 🎬 Datos del video
- **Título:** Sampling Distribution (Part 2) | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Sampling+Distribution+Part+2+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

La segunda parte de las distribuciones muestrales se enfoca en la distribución muestral de la proporción $\hat{p}$. Se estudian su esperanza, su error estándar y las condiciones para su aplicación, comparándola con la distribución muestral de la media estudiada en la parte 1.

## 🧮 Contenido

### Diferencia entre parámetro y estadístico para proporciones

| Símbolo | Nombre | Tipo | Describe |
|---|---|---|---|
| $p$ | Proporción poblacional | Parámetro | Fracción de éxito en toda la población |
| $q = 1 - p$ | Complemento de $p$ | Parámetro | Fracción de fracaso en la población |
| $\hat{p}$ | Proporción muestral | Estadístico | Fracción de éxito en la muestra |
| $n$ | Tamaño de muestra | - | Número de observaciones |

Los parámetros $p$ y $q$ son fijos y desconocidos. El estadístico $\hat{p}$ se calcula de la muestra: $\hat{p} = X/n$, donde $X$ es el número de éxitos.

### Propiedades de la distribución muestral de $\hat{p}$

**1. Esperanza de $\hat{p}$:**

$$E(\hat{p}) = p$$

El estadístico $\hat{p}$ es un estimador insesgado de la proporción poblacional $p$.

**2. Error estándar de la proporción:**

$$\sigma_{\hat{p}} = \sqrt{\frac{p(1 - p)}{n}}$$

**3. Distribución aproximadamente normal** (cuando se cumplen las condiciones):

$$\hat{p} \sim N\left(p, \sqrt{\frac{p(1-p)}{n}}\right)$$

### Condiciones de aplicación

Para que la distribución sea aproximadamente normal se debe cumplir:

$$np \geq 10 \quad \text{y} \quad n(1 - p) \geq 10$$

Si $p$ es desconocido, se usa $\hat{p}$ en su lugar.

#### Gráfico: Distribución muestral de $\hat{p}$ ($p = 0.40$, $n = 250$)

```chart
type: line
labels: [0.28, 0.29, 0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.50, 0.51, 0.52]
series:
  - title: "Densidad de p̂ ~ N(0.40, 0.0310)"
    data: [0.0072, 0.0237, 0.0708, 0.1902, 0.4607, 1.0054, 1.9774, 3.5047, 5.5977, 8.0572, 10.4512, 12.2167, 12.8691, 12.2167, 10.4512, 8.0572, 5.5977, 3.5047, 1.9774, 1.0054, 0.4607, 0.1902, 0.0708, 0.0237, 0.0072]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- La curva está centrada en $E(\hat{p}) = p = 0.40$: $\hat{p}$ es un estimador **insesgado** de $p$.
- El error estándar es $\sigma_{\hat{p}} = \sqrt{0.40 \times 0.60 / 250} \approx 0.0310$; las proporciones muestrales varían en promedio 0.031 alrededor de 0.40.
- $\hat{p} = 0.45$ está a $z = (0.45-0.40)/0.031 \approx 1.61$ desviaciones; `$P(\hat{p} > 0.45) \approx 5.37\%$` (área a la derecha de la línea).

### Comparación: media vs. proporción

| Propiedad | Media ($\bar{X}$) | Proporción ($\hat{p}$) |
|---|---|---|
| Esperanza | $E(\bar{X}) = \mu$ | $E(\hat{p}) = p$ |
| Error estándar | $\sigma/\sqrt{n}$ | $\sqrt{p(1-p)/n}$ |
| ¿Requiere $\sigma$ conocida? | Sí (para Z) | No |
| Condición mínima | $n \geq 30$ (o población normal) | $np \geq 10$ y $nq \geq 10$ |

La proporción muestral no necesita conocer la desviación estándar poblacional: su error estándar depende solo de $p$ y $n$.

## 💡 Ejemplo numérico

En una tienda en línea, el 40% de los visitantes realizan una compra ($p = 0.40$). Se toma una muestra de $n = 250$ visitantes.

**Verificación de condiciones:**

$$np = 250 \times 0.40 = 100 \geq 10 \quad \checkmark$$
$$nq = 250 \times 0.60 = 150 \geq 10 \quad \checkmark$$

**Propiedades de la distribución muestral:**

$$E(\hat{p}) = p = 0.40$$

$$\sigma_{\hat{p}} = \sqrt{\frac{0.40 \times 0.60}{250}} = \sqrt{\frac{0.24}{250}} = \sqrt{0.00096} \approx 0.0310$$

Esto significa que las proporciones muestrales varían en promedio 0.031 alrededor de 0.40.

**Probabilidad de que $\hat{p}$ supere 0.45:**

$$Z = \frac{0.45 - 0.40}{0.0310} = \frac{0.05}{0.0310} \approx 1.61$$

$$P(\hat{p} > 0.45) = P(Z > 1.61) = 1 - 0.9463 = 0.0537 \approx 5.37\%$$

## 🌍 Ejemplo de la vida real

Una página web sabe que su tasa de conversión histórica es $p = 0.12$. Lanza una campaña publicitaria y toma una muestra de 500 nuevos visitantes. Obtiene $\hat{p} = 0.152$. ¿Es significativo el aumento?

$$\sigma_{\hat{p}} = \sqrt{\frac{0.12 \times 0.88}{500}} = \sqrt{\frac{0.1056}{500}} = \sqrt{0.0002112} \approx 0.0145$$

$$Z = \frac{0.152 - 0.12}{0.0145} = \frac{0.032}{0.0145} \approx 2.21$$

Como $Z > 1.96$, hay evidencia de que la campaña aumentó la tasa de conversión.

> [!tip] Relación con el curso
> La distribución muestral de la proporción es el fundamento para intervalos de confianza y pruebas de hipótesis sobre proporciones, complementando la distribución de la media.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa la proporción muestral $\hat{p}$?

a) La proporción desconocida de toda la población
b) La fracción de éxitos observada en una muestra
c) La desviación estándar de la proporción poblacional
d) El complemento de la proporción poblacional

> **b) La fracción de éxitos observada en una muestra**

---

### Pregunta 2

¿Cuál es la esperanza matemática de la proporción muestral $\hat{p}$?

a) $p^2$
b) $p/n$
c) $p$
d) $\sqrt{p}$

> **c) $p$**

---

### Pregunta 3

¿Cuál es la fórmula correcta del error estándar de la proporción muestral?

a) $\sigma_{\hat{p}} = \frac{p(1-p)}{n}$
b) $\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}$
c) $\sigma_{\hat{p}} = \frac{\sqrt{p}}{n}$
d) $\sigma_{\hat{p}} = p \times \frac{1-p}{\sqrt{n}}$

> **b) $\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}$**

---

### Pregunta 4

Si $p = 0.5$ y $n = 100$, ¿cuál es el error estándar de $\hat{p}$?

a) 0.005
b) 0.5
c) 0.05
d) 0.025

> **c) 0.05**

---

### Pregunta 5

Si $p = 0.2$ y $n = 50$, ¿cuál es el error estándar de $\hat{p}$?

a) 0.057
b) 0.032
c) 0.040
d) 0.028

> **a) 0.057**

---

### Pregunta 6

De una muestra de $n = 120$ personas, 30 aprueban una política. ¿Cuál es el valor de $\hat{p}$?

a) 0.30
b) 0.25
c) 0.20
d) 0.40

> **b) 0.25**

---

### Pregunta 7

¿Cuáles son las condiciones para que la distribución de $\hat{p}$ sea aproximadamente normal?

a) $n \geq 30$ y desviación estándar poblacional conocida
b) $np \geq 10$ y $n(1-p) \geq 10$
c) $p \geq 0.5$ y $n \geq 50$
d) $n \geq 100$ y $p \leq 0.3$

> **b) $np \geq 10$ y $n(1-p) \geq 10$**

---

### Pregunta 8

¿Qué ventaja tiene el error estándar de la proporción sobre el de la media?

a) No requiere conocer la desviación estándar poblacional
b) Siempre es menor que el error estándar de la media
c) No depende del tamaño de muestra
d) Es un cálculo exacto, nunca es una aproximación

> **a) No requiere conocer la desviación estándar poblacional**

---

### Pregunta 9

En una tienda en línea con $p = 0.40$ y $n = 250$, se observa $\hat{p} = 0.45$. Si el error estándar es 0.0310, ¿cuál es el valor del estadístico Z?

a) 1.25
b) 2.10
c) 1.61
d) 1.96

> **c) 1.61**

---

### Pregunta 10

Una página web con tasa histórica $p = 0.12$ obtiene $\hat{p} = 0.152$ en una muestra de $n = 500$, con un error estándar de 0.0145. Calculando $Z \approx 2.21$, y usando un nivel de significancia de 0.05, ¿qué se concluye?

a) No hay evidencia suficiente para afirmar un cambio en la tasa
b) La tasa de conversión disminuyó significativamente
c) Hay evidencia de que la tasa de conversión aumentó
d) El tamaño de muestra es insuficiente para concluir algo

> **c) Hay evidencia de que la tasa de conversión aumentó**
