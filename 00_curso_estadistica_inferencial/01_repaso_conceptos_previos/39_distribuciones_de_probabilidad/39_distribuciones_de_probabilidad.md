---
titulo: Distribuciones de Probabilidad
tipo: anotacion-video
tema: Distribuciones
tags:
  - estadistica-inferencial
  - distribuciones
---

# 📘 Distribuciones de Probabilidad

## 🎬 Datos del video
- **Título:** Distribuciones de Probabilidad | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribuciones+de+Probabilidad+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Una distribución de probabilidad es una descripción matemática completa de cómo se asignan probabilidades a los valores posibles de una variable aleatoria. Se resume mediante parámetros como la **esperanza** (valor promedio) y la **varianza** (dispersión).

## 🧮 Contenido

### ¿Qué es una distribución de probabilidad?
Es una **tabla, gráfico o fórmula** que asigna a cada valor posible de $X$ su correspondiente probabilidad. Representa el comportamiento completo de la variable.

### Requisitos fundamentales
Para una variable **discreta** con función de masa $f(x)$:

$$\sum_{i} f(x_i) = 1 \quad \text{y} \quad f(x_i) \geq 0 \;\; \forall \, i$$

Para una variable **continua** con función de densidad $f(x)$:

$$\int_{-\infty}^{\infty} f(x) \, dx = 1 \quad \text{y} \quad f(x) \geq 0 \;\; \forall \, x$$

### Esperanza matemática $E(X)$
La **esperanza** (o valor esperado, media) es el centro de gravedad de la distribución:

**Discreta:**
$$E(X) = \mu = \sum_{i} x_i \cdot f(x_i)$$

**Continua:**
$$E(X) = \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

**Propiedades:**
- $E(aX + b) = aE(X) + b$
- $E(X + Y) = E(X) + E(Y)$ (siempre, sin importar independencia)

### Varianza $V(X)$
La **varianza** mide la dispersión de los valores respecto a la media:

$$V(X) = \sigma^2 = E\left[(X - \mu)^2\right] = E(X^2) - [E(X)]^2$$

La segunda forma es la fórmula de cálculo más práctica.

**Propiedades:**
- $V(aX + b) = a^2 V(X)$
- Si $X$ e $Y$ son independientes: $V(X + Y) = V(X) + V(Y)$

### Desviación estándar
$$\sigma = \sqrt{V(X)}$$

Tiene las mismas unidades que $X$, lo que facilita la interpretación.

## 💡 Ejemplo numérico
Una tienda de componentes electrónicos registra vendas diarias de un circuito integrado. La variable $X$ = "unidades vendidas por día" tiene la siguiente distribución:

| $x$ | $f(x)$ | $x \cdot f(x)$ | $x^2 \cdot f(x)$ |
|---|---|---|---|
| 0 | 0.10 | 0.00 | 0.00 |
| 1 | 0.25 | 0.25 | 0.25 |
| 2 | 0.35 | 0.70 | 1.40 |
| 3 | 0.20 | 0.60 | 1.80 |
| 4 | 0.10 | 0.40 | 1.60 |
| **Total** | **1.00** | **1.95** | **5.05** |

**Esperanza:**
$$E(X) = 1.95 \text{ unidades/día}$$

**Varianza:**
$$V(X) = E(X^2) - [E(X)]^2 = 5.05 - (1.95)^2 = 5.05 - 3.8025 = 1.2475$$

**Desviación estándar:**
$$\sigma = \sqrt{1.2475} \approx 1.117 \text{ unidades}$$

## 🌍 Ejemplo de la vida real
Un fabricante de baterías lithium-ion prueba 500 unidades y construye la distribución del tiempo de vida (en horas). El promedio observado es $\bar{x} = 500$ horas con desviación estándar $s = 25$ horas. Si $X \sim N(500, 25^2)$, la empresa puede predecir:
- $P(X < 450) \approx 2.28\%$ (baterías que fallan antes de lo esperado)
- $P(X > 550) \approx 2.28\%$ (baterías que superan expectativas)
- $P(475 < X < 525) \approx 68.27\%$ (dentro de una desviación estándar)

Esto permite establecer garantías y planes de reemplazo.

> [!tip] Relación con el curso
> Las distribuciones de probabilidad son la herramienta central de la inferencia estadística. Cada prueba de hipótesis, intervalo de confianza y modelo predictivo se basa en una distribución específica.
