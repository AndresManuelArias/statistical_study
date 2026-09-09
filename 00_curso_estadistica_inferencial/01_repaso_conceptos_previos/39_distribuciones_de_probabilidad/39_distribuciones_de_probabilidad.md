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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué describe una distribución de probabilidad?

a) La media aritmética de una muestra
b) Una tabla, gráfico o fórmula que asigna probabilidades a cada valor posible de una variable aleatoria
c) El valor más frecuente en un conjunto de datos
d) La diferencia entre el valor máximo y el mínimo de una variable

> **b) Una tabla, gráfico o fórmula que asigna probabilidades a cada valor posible de una variable aleatoria**

---

### Pregunta 2

¿Cuál es uno de los requisitos fundamentales para que una distribución de probabilidad discreta sea válida?

a) Todas las probabilidades deben ser mayores o iguales a 1
b) La suma de todas las probabilidades debe ser 0
c) La suma de todas las probabilidades debe ser 1 y cada una debe ser no negativa
d) La suma de las probabilidades puede ser cualquier número positivo

> **c) La suma de todas las probabilidades debe ser 1 y cada una debe ser no negativa**

---

### Pregunta 3

En la tabla del ejemplo del archivo, un técnico registra la distribución del número de unidades vendidas por día:

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $f(x)$ | 0.10 | 0.25 | ? | 0.20 | 0.10 |

¿Cuál es el valor de $f(2)$ para que la tabla sea una distribución de probabilidad válida?

a) 0.15
b) 0.25
c) 0.35
d) 0.45

> **c) 0.35**

---

### Pregunta 4

Usando la distribución completa del ejemplo ($f(0)=0.10$, $f(1)=0.25$, $f(2)=0.35$, $f(3)=0.20$, $f(4)=0.10$), calcule $P(X \leq 1)$.

a) 0.10
b) 0.25
c) 0.35
d) 0.60

> **c) 0.35**

---

### Pregunta 5

Según el ejemplo del archivo, ¿cuál es $P(X \leq 2)$?

a) 0.35
b) 0.60
c) 0.70
d) 0.80

> **c) 0.70**

---

### Pregunta 6

Según el ejemplo del archivo, ¿cuál es la esperanza matemática $E(X)$ del número de unidades vendidas por día?

a) 1.50
b) 1.95
c) 2.00
d) 2.50

> **b) 1.95**

---

### Pregunta 7

Se propone la siguiente distribución para el número de clientes que llegan a un mostrador en una hora:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $f(x)$ | 0.20 | 0.40 | 0.30 | 0.15 |

¿Es esta una distribución de probabilidad válida?

a) No, porque $0.40 > 0.25$
b) Sí, todas las probabilidades son no negativas y suman 1
c) No, porque la suma es mayor que 1
d) No, porque falta incluir $x=4$

> **c) No, porque la suma es mayor que 1**

---

### Pregunta 8

Si $V(X) = 1.2475$ (según el ejemplo del archivo), ¿cuál es la varianza de $Y = 2X + 3$?

a) 1.2475
b) 2.4950
c) 4.9900
d) 7.4900

> **c) 4.9900**

---

### Pregunta 9

Si $E(X) = 1.95$ (según el ejemplo del archivo), calcule $E(3X - 2)$.

a) 3.85
b) 5.85
c) 7.85
d) 11.70

> **a) 3.85**

---

### Pregunta 10

Un fabricante mide el tiempo de vida de baterías lithium-ion, una variable continua con valores en todo el rango real positivo. ¿Qué distribución de probabilidad es la más adecuada para modelar esta variable?

a) Binomial, porque hay dos resultados posibles (funciona o no)
b) Uniforme, porque todos los tiempos son igualmente probables
c) Normal, porque el tiempo de vida es continuo y tiende a agruparse alrededor de la media
d) Poisson, porque se cuentan eventos por unidad de tiempo

> **c) Normal, porque el tiempo de vida es continuo y tiende a agruparse alrededor de la media**
