---
titulo: Distribución Normal Estándar
tipo: anotacion-video
tema: Distribución Normal Estándar
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Normal Estándar

## Datos del video
- **Título:** Distribución Normal Estándar
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Normal+Estándar
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/xGycHa7l6Ig?si=8cbHfnkhHlj2BehU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
La distribución normal estándar es una distribución normal especial con media 0 y varianza 1. Mediante la transformación $z$, cualquier variable normal se puede estandarizar, permitiendo el uso de tablas Z para calcular probabilidades y percentiles de forma universal.

## Contenido

### Transformación de estandarización

Si $X \sim N(\mu, \sigma^2)$, se define la variable **estadístico z**:

$$Z = \frac{X - \mu}{\sigma}$$

Entonces $Z \sim N(0, 1)$, es decir, $Z$ tiene distribución normal estándar.

Esta transformación convierte cualquier problema de probabilidad normal en un problema con la misma tabla Z.

### Propiedades de $Z \sim N(0, 1)$

$$E(Z) = 0$$

$$\text{Var}(Z) = 1, \quad \sigma_Z = 1$$

La función de densidad es:

$$\phi(z) = \frac{1}{\sqrt{2\pi}} \, e^{-z^2/2}$$

### Uso de la tabla Z

La tabla Z típicamente da valores de $P(Z \leq z)$, la probabilidad acumulada hasta el valor $z$.

**Para $z > 0$:** $P(Z \leq z)$ se lee directamente de la tabla.

**Para $z < 0$:** Por simetría:

$$P(Z \leq z) = 1 - P(Z \leq |z|) = P(Z \geq -z)$$

**Para probabilidades entre dos valores:**

$$P(a < Z < b) = P(Z \leq b) - P(Z \leq a)$$

**Para colas:**

$$P(Z > z) = 1 - P(Z \leq z)$$

### Percentiles

El percentil $p$-ésimo de la normal estándar, denotado $z_p$, es el valor tal que:

$$P(Z \leq z_p) = p$$

Algunos percentiles comunes:

| Percentil | $z_p$ |
|:---:|:---:|
| $z_{0.50}$ (mediana) | 0.00 |
| $z_{0.90}$ | 1.282 |
| $z_{0.95}$ | 1.645 |
| $z_{0.975}$ | 1.960 |
| $z_{0.99}$ | 2.326 |
| $z_{0.995}$ | 2.576 |

#### Gráfico: Densidad de la normal estándar $Z \sim N(0, 1)$

```chart
type: line
labels: [-4.00, -3.75, -3.50, -3.25, -3.00, -2.75, -2.50, -2.25, -2.00, -1.75, -1.50, -1.25, -1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00]
series:
  - title: "Densidad φ(z) de la normal estándar"
    data: [0.0001, 0.0004, 0.0009, 0.0020, 0.0044, 0.0091, 0.0175, 0.0317, 0.0540, 0.0863, 0.1295, 0.1826, 0.2420, 0.3011, 0.3521, 0.3867, 0.3989, 0.3867, 0.3521, 0.3011, 0.2420, 0.1826, 0.1295, 0.0863, 0.0540, 0.0317, 0.0175, 0.0091, 0.0044, 0.0020, 0.0009, 0.0004, 0.0001]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- La curva es **simétrica** alrededor de $z = 0$: $E(Z) = 0$ y la mediana es 0.
- El **máximo** de la densidad es $\phi(0) = 1/\sqrt{2\pi} \approx 0.399$.
- Las **colas** se aproximan asintóticamente al eje horizontal cuando $z \to \pm\infty$.
- El **área total** bajo la curva es 1 (100% de la probabilidad); la tabla Z acumula ese área hasta cada valor $z$.

## Ejemplo numérico

Sea $X \sim N(50, 100)$, es decir, $\mu = 50$ y $\sigma = 10$. Queremos calcular $P(40 < X < 65)$.

**Paso 1: Estandarizar ambos límites.**

$$z_1 = \frac{40 - 50}{10} = \frac{-10}{10} = -1.00$$

$$z_2 = \frac{65 - 50}{10} = \frac{15}{10} = 1.50$$

**Paso 2: Consultar la tabla Z.**

$$P(Z \leq 1.50) = 0.9332$$

$$P(Z \leq -1.00) = 1 - P(Z \leq 1.00) = 1 - 0.8413 = 0.1587$$

**Paso 3: Calcular la probabilidad.**

$$P(40 < X < 65) = P(-1.00 < Z < 1.50) = 0.9332 - 0.1587 = 0.7745$$

Hay un **77.45% de probabilidad** de que $X$ esté entre 40 y 65.

**Encuentra $x$ tal que $P(X \leq x) = 0.90$:**

De la tabla: $z_{0.90} = 1.282$.

$$x = \mu + z \cdot \sigma = 50 + 1.282(10) = 50 + 12.82 = 62.82$$

El percentil 90 es $x = 62.82$.

## Ejemplo de la vida real

Los tiempos de espera en una atención al cliente se distribuyen normalmente con $\mu = 12$ minutos y $\sigma = 3$ minutos. Un gerente quiere saber qué porcentaje de clientes espera más de 18 minutos:

$$Z = \frac{18 - 12}{3} = 2.00$$

$$P(Z > 2.00) = 1 - P(Z \leq 2.00) = 1 - 0.9772 = 0.0228$$

Solo el **2.28%** de los clientes espera más de 18 minutos. Si el gerente quiere que solo el 5% espere más de cierto tiempo:

$$z_{0.95} = 1.645$$

$$x = 12 + 1.645(3) = 12 + 4.935 = 16.935 \text{ minutos}$$

Si el tiempo máximo aceptable es ~17 minutos, se cumple el objetivo del 95%.

> [!tip] Relación con el curso
> La normal estándar es la herramienta central para construir intervalos de confianza y realizar pruebas de hipótesis $z$, que son los primeros métodos inferenciales que se aprenden en el curso.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Si $X \sim N(100, 100)$, ¿cuál es el valor del estadístico z para $X = 120$?

a) z = 1
b) z = 2
c) z = 20
d) z = 0,5

> **b) z = 2**

---

### Pregunta 2

¿Cuál es la media de la distribución normal estándar $Z \sim N(0, 1)$?

a) 1
b) $\sigma$
c) 0
d) $\mu$

> **c) 0**

---

### Pregunta 3

¿Cuál es el valor de $P(Z \leq 0)$ en una distribución normal estándar?

a) 0
b) 0,5
c) 1
d) 0,25

> **b) 0,5**

---

### Pregunta 4

Si $X \sim N(50, 25)$, es decir, $\mu = 50$ y $\sigma = 5$, ¿cuál es el valor z para $X = 45$?

a) z = 5
b) z = 1
c) z = -5
d) z = -1

> **d) z = -1**

---

### Pregunta 5

¿Cuál es la varianza de la distribución normal estándar $Z \sim N(0, 1)$?

a) 1
b) 0
c) $\sigma$
d) $\sigma^2$

> **a) 1**

---

### Pregunta 6

Si $Z$ sigue una distribución normal estándar, ¿cuál es la notación correcta?

a) $Z \sim N(1, 0)$
b) $Z \sim N(0, 1)$
c) $Z \sim N(0, 0)$
d) $Z \sim N(1, 1)$

> **b) $Z \sim N(0, 1)$**

---

### Pregunta 7

Por la simetría de la distribución normal estándar, $P(Z \leq -2)$ es igual a:

a) $1 + P(Z \leq 2)$
b) $P(Z \leq 2)$
c) $P(Z \geq 2)$
d) $0,5 + P(Z \leq 2)$

> **c) $P(Z \geq 2)$**

---

### Pregunta 8

Si $X \sim N(80, 25)$, es decir, $\mu = 80$ y $\sigma = 5$, y $X = 80$, ¿cuál es el valor de z?

a) 0
b) 1
c) 5
d) 80

> **a) 0**

---

### Pregunta 9

¿Cuál es el valor total del área bajo la curva de densidad de la distribución normal estándar?

a) 0
b) 0,5
c) 1
d) 2

> **c) 1**

---

### Pregunta 10

Si $X \sim N(200, 400)$, es decir, $\mu = 200$ y $\sigma = 20$, y se estandariza $X = 240$, se obtiene $z = 2$. Sabiendo que $P(Z \leq 2) \approx 0,9772$, ¿qué se puede afirmar?

a) $P(X \leq 240) \approx 0,0228$
b) $P(X \leq 240) \approx 0,9772$
c) $P(X > 240) \approx 0,9772$
d) $P(X = 240) = 0,9772$

> **b) $P(X \leq 240) \approx 0,9772$**
