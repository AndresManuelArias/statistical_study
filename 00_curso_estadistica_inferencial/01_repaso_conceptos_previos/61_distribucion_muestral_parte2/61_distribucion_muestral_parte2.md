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
