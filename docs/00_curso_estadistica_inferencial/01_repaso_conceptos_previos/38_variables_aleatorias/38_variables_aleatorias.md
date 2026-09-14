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
<iframe width="560" height="315" src="https://www.youtube.com/embed/UsNNc97DXDA?si=2AfI8QSF48u4V8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué asigna una variable aleatoria $X$ a cada resultado $\omega$ del espacio muestral $\Omega$?

a) Una distribución de probabilidad
b) Un conjunto de intervalos
c) Un número real $X(\omega)$
d) Una función de densidad

> **c) Un número real $X(\omega)$**

---

### Pregunta 2

Una variable aleatoria es **discreta** cuando sus posibles valores forman:

a) Un conjunto continuo sin saltos
b) Un intervalo cerrado $[a, b]$
c) Un conjunto finito o infinito numerable
d) Cualquier subconjunto de los números reales

> **c) Un conjunto finito o infinito numerable**

---

### Pregunta 3

¿Cuál de las siguientes variables es **continua**?

a) Número de defectos en una muestra de 50 piezas
b) Resultado de lanzar un dado
c) Tiempo de espera de un cliente en una cola
d) Número de clientes que llegan en una hora

> **c) Tiempo de espera de un cliente en una cola**

---

### Pregunta 4

En el ejemplo numérico del archivo, se inspeccionan 4 componentes con $p = 0.25$ de defecto. ¿Cuál es $f(0) = P(X = 0)$?

a) $0.4219$
b) $0.2500$
c) $0.3164$
d) $0.2109$

> **c) $0.3164$**

---

### Pregunta 5

Para una variable discreta, la función de masa de probabilidad satisface $\sum_{i} f(x_i) = 1$. ¿Qué propiedad análoga cumple la función de densidad de una variable continua?

a) $f(x) = 1$ para todo $x$
b) $\int_{-\infty}^{\infty} f(x) \, dx = 1$
c) $\int_{0}^{1} f(x) \, dx = 1$
d) $f(x) \leq 1$ para todo $x$

> **b) $\int_{-\infty}^{\infty} f(x) \, dx = 1$**

---

### Pregunta 6

En el ejemplo numérico, ¿cuál es la probabilidad de que haya **al menos 2** componentes defectuosos, es decir $P(X \geq 2)$?

a) $0.2617$
b) $0.4219$
c) $0.2109$
d) $0.0508$

> **a) $0.2617$**

---

### Pregunta 7

Para una variable continua, ¿cuál es la probabilidad de que $X$ tome un valor puntual exacto $c$?

a) $f(c)$
b) $F(c)$
c) $1 - F(c)$
d) $0$

> **d) $0$**

---

### Pregunta 8

El número de llamadas telefónicas que recibe un call center en una hora es una variable discreta porque:

a) Las llamadas pueden medirse con precisión infinita
b) Sus posibles valores son conteos: 0, 1, 2, 3, ...
c) Su función de densidad es continua
d) Solo puede tomar valores positivos

> **b) Sus posibles valores son conteos: 0, 1, 2, 3, ...**

---

### Pregunta 9

En el ejemplo del archivo, el peso de los paquetes que entrega una empresa de logística se modela como variable continua porque:

a) El peso solo toma valores enteros
b) El peso es un conteo finito de elementos
c) El peso puede tomar cualquier valor en un intervalo, incluyendo decimales
d) El peso se expresa como función de masa

> **c) El peso puede tomar cualquier valor en un intervalo, incluyendo decimales**

---

### Pregunta 10

La función de distribución acumulada (CDF) se define como $F(x) = P(X \leq x)$. Si $X$ es discreta con $f(1) = 0.3$, $f(2) = 0.5$ y $f(3) = 0.2$, ¿cuál es $F(2)$?

a) $0.8$
b) $0.5$
c) $0.2$
d) $1.0$

> **a) $0.8$**
