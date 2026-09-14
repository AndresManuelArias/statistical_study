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
<iframe width="560" height="315" src="https://www.youtube.com/embed/ewWS15zVi4M?si=z-FVVTsTiYxfYR-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
Una distribución de probabilidad es una descripción matemática completa de cómo se asignan probabilidades a los valores posibles de una variable aleatoria. Se resume mediante parámetros como la **esperanza** (valor promedio) y la **varianza** (dispersión).

## 🧮 Contenido

### ¿Qué es una distribución de probabilidad?
Es una **tabla, gráfico o fórmula** que asigna a cada valor posible de $X$ su correspondiente probabilidad. Representa el comportamiento completo de la variable.

#### Visualización conceptual

**Distribución Discreta — Función de masa de probabilidad:**

```chart
type: bar
labels: [0, 1, 2, 3, 4]
series:
  - title: "f(x) - Probabilidad"
    data: [0.10, 0.25, 0.35, 0.20, 0.10]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Características:** Saltos discretos entre valores, barras separadas, $\sum f(x_i) = 1$, cada barra representa la probabilidad exacta de un valor.

**Distribución Continua — Función de densidad de probabilidad (Ejemplo: Normal):**

```chart
type: line
labels: [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3]
series:
  - title: "f(x) - Densidad (N(0,1))"
    data: [0.004, 0.018, 0.054, 0.130, 0.242, 0.352, 0.399, 0.352, 0.242, 0.130, 0.054, 0.018, 0.004]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Características:** Curva continua y suave, área bajo la curva = 1, $\int f(x)dx = 1$, altura es densidad (no probabilidad directa).

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

#### Gráfico del ejemplo 1: Vendas de Circuitos

```chart
type: bar
labels: [0, 1, 2, 3, 4]
series:
  - title: "Probabilidad f(x)"
    data: [0.10, 0.25, 0.35, 0.20, 0.10]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:** 
- La venta más probable es de **2 unidades/día** (probabilidad 0.35)
- En promedio se venden **E(X) = 1.95 unidades/día**
- La variabilidad típica es de **σ = 1.117 unidades**
- El 85% de los días se venden entre 1 y 3 unidades

## 🌍 Ejemplo de la vida real
Un fabricante de baterías lithium-ion prueba 500 unidades y construye la distribución del tiempo de vida (en horas). El promedio observado es $\bar{x} = 500$ horas con desviación estándar $s = 25$ horas. Si $X \sim N(500, 25^2)$, la empresa puede predecir:
- $P(X < 450) \approx 2.28\%$ (baterías que fallan antes de lo esperado)
- $P(X > 550) \approx 2.28\%$ (baterías que superan expectativas)
- $P(475 < X < 525) \approx 68.27\%$ (dentro de una desviación estándar)

#### Gráfico: Distribución de la vida útil de baterías

```chart
type: line
labels: [400, 425, 450, 475, 500, 525, 550, 575, 600]
series:
  - title: "Densidad f(x) — Vida útil en horas N(500, 25²)"
    data: [0.00001, 0.00089, 0.00544, 0.01942, 0.01596, 0.01942, 0.00544, 0.00089, 0.00001]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- **Centro:** La mayoría de las baterías duran alrededor de **500 horas** (pico de la curva)
- **Rango de ±1σ (475-525 horas):** Contiene el **68.27%** de las baterías (área bajo la curva)
- **Garantía:** Baterías con vida < 450 horas (2.28%) son defectuosas
- **Premium:** Baterías con vida > 550 horas (2.28%) superan expectativas
- **Decisión:** La empresa establece garantía a 475 horas, sabiendo que el 84% durará más

Esto permite establecer garantías y planes de reemplazo.

## 💡 Segundo ejemplo: Número de llamadas en un centro de atención

Un centro de atención al cliente registra el número de llamadas por hora durante un día laboral. Los datos históricos muestran la siguiente distribución de probabilidad:

| $x$ (llamadas/h) | $f(x)$ | $x \cdot f(x)$ | $x^2 \cdot f(x)$ |
|---|---|---|---|
| 5 | 0.08 | 0.40 | 2.00 |
| 6 | 0.15 | 0.90 | 5.40 |
| 7 | 0.30 | 2.10 | 14.70 |
| 8 | 0.28 | 2.24 | 17.92 |
| 9 | 0.12 | 1.08 | 9.72 |
| 10 | 0.07 | 0.70 | 7.00 |
| **Total** | **1.00** | **7.42** | **56.74** |

**Cálculos:**

**Esperanza:**
$$E(X) = 7.42 \text{ llamadas/hora}$$

**Varianza:**
$$V(X) = E(X^2) - [E(X)]^2 = 56.74 - (7.42)^2 = 56.74 - 55.0564 = 1.6836$$

**Desviación estándar:**
$$\sigma = \sqrt{1.6836} \approx 1.297 \text{ llamadas}$$

#### Gráfico del ejemplo 2: Llamadas por Hora

```chart
type: bar
labels: [5, 6, 7, 8, 9, 10]
series:
  - title: "Probabilidad f(x)"
    data: [0.08, 0.15, 0.30, 0.28, 0.12, 0.07]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:** 
- **Moda:** La hora más probable tiene **7 llamadas** (probabilidad 0.30)
- **Media:** El centro recibe en promedio **E(X) = 7.42 llamadas/hora**
- **Desviación:** Típicamente varían **σ = 1.297 llamadas** respecto al promedio
- **Rango principal:** El 73% de las horas están entre 6 y 9 llamadas
- **Aplicación práctica:** Permite planificar turnos: se necesita capacidad para 7-8 llamadas típicas, con margen para picos hasta 10
- Esto ayuda a planificar turnos de personal: con $E(X) = 7.42$ y $\sigma = 1.297$, el 68% de las horas tendrán entre 6.1 y 8.7 llamadas

> [!tip] Relación con el curso
> Las distribuciones de probabilidad son la herramienta central de la inferencia estadística. Cada prueba de hipótesis, intervalo de confianza y modelo predictivo se basa en una distribución específica. En operaciones, permiten optimizar asignación de recursos.


Hora,Llamadas,Representación Gráfica
00:00,5,█
01:00,2,▌
02:00,1,▎
03:00,1,▎
04:00,2,▌
05:00,5,█
06:00,15,███
07:00,45,█████████
08:00,120,████████████████████
09:00,210,████████████████████████████████████
10:00,250,████████████████████████████████████████████
11:00,230,████████████████████████████████████████
12:00,180,██████████████████████████████
13:00,190,████████████████████████████████
14:00,220,██████████████████████████████████████
15:00,240,██████████████████████████████████████████
16:00,200,████████████████████████████████████
17:00,150,██████████████████████████
18:00,100,██████████████████
19:00,70,████████████
20:00,50,█████████
21:00,35,██████
22:00,20,████
23:00,10,██

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
