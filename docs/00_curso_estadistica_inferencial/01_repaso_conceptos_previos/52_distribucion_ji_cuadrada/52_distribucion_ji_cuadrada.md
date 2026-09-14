---
titulo: Distribución Ji Cuadrada
tipo: anotacion-video
tema: Distribución Ji Cuadrada
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Ji Cuadrada

## Datos del video
- **Título:** Distribución Ji Cuadrada
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Ji+Cuadrada
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/n-JDL312ceQ?si=xhY3eeKpWaPijGBO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## Resumen
La distribución ji cuadrada ($\chi^2$) se define como la suma de $k$ normales estándar independientes al cuadrado. Es fundamental para pruebas de bondad de ajuste, pruebas de independencia en tablas de contingencia y para estimar varianzas poblacionales.

## Contenido

### Definición

Si $Z_1, Z_2, \ldots, Z_k$ son normales estándar independientes, entonces:

$$X = Z_1^2 + Z_2^2 + \cdots + Z_k^2$$

sigue una distribución ji cuadrada con $k$ grados de libertad:

$$X \sim \chi^2(k)$$

### Propiedades

1. **Solo valores positivos:** $X \in [0, \infty)$. No puede ser negativa.

2. **Asimétrica a la derecha:** Sesgo positivo que disminuye con más grados de libertad.

3. **Media igual a los grados de libertad:**

$$E(X) = k$$

donde $k$ = grados de libertad.

4. **Varianza:**

$$\text{Var}(X) = 2k$$

5. **Forma de la densidad:**

$$f(x) = \frac{1}{2^{k/2}\,\Gamma(k/2)} \, x^{k/2 - 1} \, e^{-x/2}, \quad x > 0$$

### Suma de ji cuadradas

Si $X_1 \sim \chi^2(k_1)$ y $X_2 \sim \chi^2(k_2)$ son independientes, entonces:

$$X_1 + X_2 \sim \chi^2(k_1 + k_2)$$

Los grados de libertad se suman.

### Relación con la normal

Si $X \sim N(\mu, \sigma^2)$, entonces:

$$\frac{(X - \mu)^2}{\sigma^2} \sim \chi^2(1)$$

Y la suma de muestrales:

$$\sum_{i=1}^{n} \frac{(X_i - \bar{X})^2}{\sigma^2} = \frac{(n-1)s^2}{\sigma^2} \sim \chi^2(n-1)$$

### Uso en estimación de varianza

Para una muestra normal de tamaño $n$:

$$\frac{(n-1)s^2}{\sigma^2} \sim \chi^2(n-1)$$

El intervalo de confianza para $\sigma^2$ es:

$$\left[\frac{(n-1)s^2}{\chi^2_{\alpha/2}}, \;\; \frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}\right]$$

#### Gráfico: Densidad de $\chi^2$ para distintos grados de libertad

```chart
type: line
labels: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0, 18.5, 19.0, 19.5, 20.0]
series:
  - title: "χ²(2) — exponencial"
    data: [0.389, 0.303, 0.236, 0.184, 0.143, 0.112, 0.087, 0.068, 0.053, 0.041, 0.032, 0.025, 0.019, 0.015, 0.012, 0.009, 0.007, 0.006, 0.004, 0.003, 0.003, 0.002, 0.002, 0.001, 0.001, 0.001, 0.001, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000]
  - title: "χ²(5)"
    data: [0.037, 0.081, 0.115, 0.138, 0.151, 0.154, 0.151, 0.144, 0.134, 0.122, 0.110, 0.097, 0.085, 0.074, 0.064, 0.055, 0.047, 0.040, 0.034, 0.028, 0.024, 0.020, 0.017, 0.014, 0.011, 0.009, 0.008, 0.006, 0.005, 0.004, 0.003, 0.003, 0.002, 0.002, 0.002, 0.001, 0.001, 0.001, 0.001, 0.001]
  - title: "χ²(10)"
    data: [0.000, 0.001, 0.003, 0.008, 0.015, 0.024, 0.034, 0.045, 0.056, 0.067, 0.076, 0.084, 0.090, 0.094, 0.097, 0.098, 0.097, 0.095, 0.092, 0.088, 0.083, 0.078, 0.072, 0.067, 0.061, 0.056, 0.051, 0.046, 0.041, 0.036, 0.032, 0.029, 0.025, 0.022, 0.019, 0.017, 0.015, 0.013, 0.011, 0.009]
  - title: "χ²(15) — casi simétrica"
    data: [0.000, 0.000, 0.000, 0.000, 0.000, 0.001, 0.002, 0.003, 0.005, 0.008, 0.012, 0.017, 0.022, 0.028, 0.034, 0.040, 0.046, 0.052, 0.058, 0.063, 0.067, 0.071, 0.074, 0.076, 0.077, 0.077, 0.077, 0.076, 0.074, 0.072, 0.069, 0.066, 0.063, 0.060, 0.056, 0.053, 0.049, 0.045, 0.042, 0.038]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- $\chi^2$ solo toma **valores no negativos** y es **asimétrica a la derecha**.
- Con pocos grados de libertad ($k = 2$) la distribución es muy sesgada (decreciente).
- Al aumentar $k$, la curva se desplaza a la derecha (media $E(X) = k$), se vuelve más **simétrica** y menos variable (varianza $2k$).

## Ejemplo numérico

Se toma una muestra de $n = 11$ observaciones de una distribución normal. La varianza muestral es $s^2 = 25$. Se quiere un intervalo de confianza del 95% para $\sigma^2$.

**Estadístico:**

$$\frac{(n-1)s^2}{\sigma^2} = \frac{10 \cdot 25}{\sigma^2} = \frac{250}{\sigma^2} \sim \chi^2(10)$$

**Valores críticos con $\nu = 10$:**

$$\chi^2_{0.025, \, 10} = 20.483$$

$$\chi^2_{0.975, \, 10} = 3.247$$

**Intervalo de confianza:**

$$IC: \left[\frac{250}{20.483}, \;\; \frac{250}{3.247}\right] = [12.20, \;\; 76.99]$$

Con un 95% de confianza, la varianza poblacional está entre 12.20 y 76.99. Para la desviación estándar:

$$IC: \left[\sqrt{12.20}, \;\; \sqrt{76.99}\right] = [3.49, \;\; 8.77]$$

### Prueba de bondad de ajuste

La prueba $\chi^2$ de bondad de ajuste compara frecuencias observadas ($O_i$) con esperadas ($E_i$):

$$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}$$

con $k - 1 - p$ grados de libertad ($p$ = número de parámetros estimados).

## Ejemplo de la vida real

Un fabricante de bombillas afirma que su vida útil se distribuye de la siguiente manera: 10% dura menos de 1000 horas, 30% entre 1000-2000, 40% entre 2000-3000 y 20% más de 3000. En una prueba con 200 bombillas se observan: 25, 55, 80 y 40 respectivamente.

| Categoría | Observadas ($O_i$) | Esperadas ($E_i$) | $(O_i - E_i)^2 / E_i$ |
|:---:|:---:|:---:|:---:|
| < 1000 h | 25 | 20 | $25/20 = 1.25$ |
| 1000-2000 h | 55 | 60 | $25/60 = 0.42$ |
| 2000-3000 h | 80 | 80 | $0/80 = 0.00$ |
| > 3000 h | 40 | 40 | $0/40 = 0.00$ |

$$\chi^2 = 1.25 + 0.42 + 0.00 + 0.00 = 1.67$$

Grados de libertad: $4 - 1 = 3$. Valor crítico $\chi^2_{0.05, \, 3} = 7.815$.

Como $1.67 < 7.815$, **no se rechaza** $H_0$: los datos son consistentes con la distribución propuesta por el fabricante.

> [!tip] Relación con el curso
> La distribución ji cuadrada es esencial para pruebas de hipótesis no paramétricas (bondad de ajuste e independencia) y para construir intervalos de confianza sobre la varianza poblacional.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué se entiende por distribución $\chi^2$ con $k$ grados de libertad?

a) La suma de $k$ variables normales independientes al cuadrado
b) El producto de $k$ variables uniformes independientes
c) La suma de $k$ variables exponenciales independientes al cuadrado
d) El promedio de $k$ variables normales independientes al cuadrado

> **a) La suma de $k$ variables normales independientes al cuadrado**

---

### Pregunta 2

¿Cuál es el rango de valores posibles de una variable con distribución $\chi^2$?

a) $(-\infty, +\infty)$
b) $(-k, k)$
c) $[0, \infty)$
d) $[0, k]$

> **c) $[0, \infty)$**

---

### Pregunta 3

Si $X \sim \chi^2(5)$, ¿cuál es su varianza?

a) 5
b) 10
c) 25
d) 2.5

> **b) 10**

---

### Pregunta 4

Se toma una muestra de tamaño $n = 10$. Para construir un intervalo de confianza para $\sigma^2$ se usa el estadístico $\frac{(n-1)s^2}{\sigma^2}$. ¿Cuántos grados de libertad tiene?

a) 10
b) 5
c) 9
d) 8

> **c) 9**

---

### Pregunta 5

La prueba $\chi^2$ de bondad de ajuste calcula el estadístico:

a) $\chi^2 = \sum (O_i - E_i)^2$
b) $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$
c) $\chi^2 = \sum \frac{O_i - E_i}{E_i}$
d) $\chi^2 = \frac{(\sum O_i)^2}{\sum E_i}$

> **b) $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$**

---

### Pregunta 6

¿Qué afirmación es correcta sobre la forma de la distribución $\chi^2$?

a) Siempre es simétrica e independiente de $k$
b) Es asimétrica a la derecha y se vuelve más simétrica al crecer $k$
c) Es asimétrica a la izquierda y se vuelve más simétrica al crecer $k$
d) Solo es simétrica cuando $k = 1$

> **b) Es asimétrica a la derecha y se vuelve más simétrica al crecer $k$**

---

### Pregunta 7

Para una prueba de independencia en una tabla de contingencia de $3 \times 4$ (3 filas, 4 columnas), ¿cuántos grados de libertad tiene el estadístico $\chi^2$?

a) 12
b) 7
c) 6
d) 9

> **c) 6**

---

### Pregunta 8

Si $X_1 \sim \chi^2(3)$ y $X_2 \sim \chi^2(4)$ son independientes, ¿qué distribución sigue $X_1 + X_2$?

a) $\chi^2(7)$
b) $\chi^2(12)$
c) $\chi^2(1)$
d) $\chi^2(3.5)$

> **a) $\chi^2(7)$**

---

### Pregunta 9

El intervalo de confianza al 95% para $\sigma^2$ se construye como:

a) $\left[\frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}, \;\; \frac{(n-1)s^2}{\chi^2_{\alpha/2}}\right]$
b) $\left[\frac{(n-1)s^2}{\chi^2_{\alpha/2}}, \;\; \frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}\right]$
c) $\left[(n-1)s^2 \cdot \chi^2_{\alpha/2}, \;\; (n-1)s^2 \cdot \chi^2_{1-\alpha/2}\right]$
d) $\left[\frac{s^2}{(n-1)\chi^2_{\alpha/2}}, \;\; \frac{s^2}{(n-1)\chi^2_{1-\alpha/2}}\right]$

> **b) $\left[\frac{(n-1)s^2}{\chi^2_{\alpha/2}}, \;\; \frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}\right]$**

---

### Pregunta 10

En el ejemplo de las bombillas, el estadístico calculado fue $\chi^2 = 1.67$ con valor crítico 7.815 al nivel 5%. La conclusión fue no rechazar $H_0$. ¿Qué significado tiene?

a) Se comprobó que la distribución propuesta por el fabricante es correcta
b) Los datos son inconsistentes con la distribución propuesta
c) No hay evidencia suficiente para rechazar que los datos sigan la distribución propuesta
d) La varianza muestral no difiere de la poblacional

> **c) No hay evidencia suficiente para rechazar que los datos sigan la distribución propuesta**
