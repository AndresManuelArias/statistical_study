---
titulo: Variables Aleatorias
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Variables Aleatorias

## 🎬 Datos del video
- **Título:** Variables Aleatorias | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Variables+Aleatorias+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Una variable aleatoria es una función que asigna un número real a cada resultado del espacio muestral. Puede ser **discreta** (valores contables) o **continua** (valores en un intervalo). Es el puente entre resultados experimentales y análisis matemático.

## 🧮 Contenido

### Definición
Una **variable aleatoria** $X$ es una función $X: \Omega \to \mathbb{R}$ que asigna a cada resultado $\omega \in \Omega$ un número real $X(\omega)$.

### Variables aleatorias discretas
Una variable aleatoria es **discreta** si sus posibles valores forman un conjunto **finito** o **infinito numerable**:

$$X \in \{x_1, x_2, x_3, \dots\}$$

**Ejemplos:** número de defectos en una muestra, resultado de un dado, número de clientes que llegan en una hora.

### Función de masa de probabilidad (PMF)
Para una variable discreta $X$, la **función de masa de probabilidad** $f(x)$ asigna probabilidades a cada valor posible:

$$f(x_i) = P(X = x_i)$$

**Propiedades:**
1. $f(x_i) \geq 0$ para todo $i$
2. $\sum_{i} f(x_i) = 1$

### Variables aleatorias continuas
Una variable aleatoria es **continua** si puede tomar **cualquier valor** en un intervalo (o unión de intervalos) de los reales.

**Ejemplos:** altura de personas, tiempo de vida de un componente, temperatura ambiente.

### Función de densidad de probabilidad (PDF)
Para una variable continua $X$, la **función de densidad** $f(x)$ satisface:

$$P(a \leq X \leq b) = \int_a^b f(x) \, dx$$

**Propiedades:**
1. $f(x) \geq 0$ para todo $x$
2. $\int_{-\infty}^{\infty} f(x) \, dx = 1$
3. $P(X = c) = 0$ para cualquier valor puntual $c$ (un punto tiene área cero)

### Función de distribución acumulada (CDF)
La **CDF** $F(x)$ es común a ambos tipos:

$$F(x) = P(X \leq x)$$

Para discreta: $F(x) = \sum_{x_i \leq x} f(x_i)$

Para continua: $F(x) = \int_{-\infty}^{x} f(t) \, dt$

## 💡 Ejemplo numérico
Se inspeccionan 4 componentes electrónicos y se cuenta cuántos están defectuosos. Sea $X$ = número de defectuosos. Supongamos que cada componente tiene probabilidad $p = 0.25$ de estar defectuoso (independientes):

| $x$ | Cálculo | $f(x) = P(X=x)$ |
|---|---|---|
| 0 | $C(4,0)(0.25)^0(0.75)^4$ | $0.3164$ |
| 1 | $C(4,1)(0.25)^1(0.75)^3$ | $0.4219$ |
| 2 | $C(4,2)(0.25)^2(0.75)^2$ | $0.2109$ |
| 3 | $C(4,3)(0.25)^3(0.75)^1$ | $0.0469$ |
| 4 | $C(4,4)(0.25)^4(0.75)^0$ | $0.0039$ |

Verificación: $0.3164 + 0.4219 + 0.2109 + 0.0469 + 0.0039 = 1.0000$ ✓

Podemos usar esta distribución para responder preguntas:
$P(X \geq 2) = 0.2109 + 0.0469 + 0.0039 = 0.2617$ (probabilidad de al menos 2 defectuosos)
$E(X) = 4 \times 0.25 = 1$ defectuoso esperado
$P(X \geq 3) = 0.0469 + 0.0039 = 0.0508$ (raro, ~5%)

### Notación y tipos de espacio
- **Variable discreta:** $X \in \{0, 1, 2, \dots\}$ — valores aislados con probabilidad positiva.
- **Variable continua:** $X \in [a, b]$ — valores en un intervalo; probabilidad de intervalos, no de puntos.

Un ejemplo común de discreta es el conteo (0, 1, 2...), mientras que la **medición** de una magnitud (tiempo, longitud, peso) suele ser continua. Esta distinción determina si usamos sumatorias o integrales.

## 🌍 Ejemplo de la vida real
Una empresa de logística registra el número de paquetes entregados por hora. La variable $X$ = "paquetes por hora" es discreta (puede valer 0, 1, 2, ...). El gerente estima $f(8) = 0.30$, $f(9) = 0.25$, $f(10) = 0.20$, $f(11) = 0.15$, $f(12) = 0.10$. Esto permite planificar recursos: se espera entregar en promedio $\sum x_i f(x_i) = 9$ paquetes/hora.

> [!tip] Relación con el curso
> Las variables aleatorias son el objeto de estudio central de la inferencia estadística. Todas las distribuciones y pruebas de hipótesis se construyen sobre ellas.
