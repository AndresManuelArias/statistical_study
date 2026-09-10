---
titulo: Distribución Binomial (parte 2)
tipo: anotacion-video
tema: Distribución Binomial
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Binomial (parte 2)

## Datos del video
- **Título:** Distribución Binomial (parte 2) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Binomial+(parte+2)+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/z7PxOKhuEBE?si=sDNugbyHW9ovtDL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
En esta segunda parte profundizamos en el cálculo de probabilidades acumuladas de la distribución binomial, el uso de tablas y calculadora, y revisamos las fórmulas de esperanza y varianza con ejercicios resueltos. Se menciona brevemente la aproximación normal para valores grandes de $n$.

## Contenido

### Repaso de la distribución binomial

Si $X \sim B(n, p)$, la función de masa es:

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \ldots, n$$

Las fórmulas clave son:

$$E(X) = np$$

$$\text{Var}(X) = np(1 - p)$$

### Probabilidades acumuladas

En muchos problemas necesitamos calcular probabilidades de la forma $P(X \leq k)$ o $P(X \geq k)$.

**Probabilidad acumulada hacia abajo:**

$$P(X \leq k) = \sum_{i=0}^{k} \binom{n}{i} p^i (1-p)^{n-i}$$

**Probabilidad acumulada hacia arriba:**

$$P(X \geq k) = \sum_{i=k}^{n} \binom{n}{i} p^i (1-p)^{n-i} = 1 - P(X \leq k-1)$$

#### Visualización: Probabilidades individuales vs acumuladas

```chart
type: bar
labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
series:
  - title: "P(X = k) — Probabilidades individuales"
    data: [0.0060, 0.0403, 0.1209, 0.2150, 0.2508, 0.2007, 0.1115, 0.0425, 0.0106, 0.0016, 0.0001]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:** En B(10, 0.4), la probabilidad más alta está en k=4 (25.08%). La región sombreada hasta k=3 representa $P(X \leq 3) = 0.3823$ (38.23%).

### Uso de tablas y calculadora

Las tablas de la distribución binomial dan valores de $P(X \leq k)$ para distintos valores de $n$, $p$ y $k$. Para hallar $P(X \geq k)$ se usa la complementación:

$$P(X \geq k) = 1 - P(X \leq k - 1)$$

En calculadoras científicas se puede usar la función binomial acumulada (binompdf o binomcdf).

#### Tabla: Probabilidades individuales y acumuladas para B(10, 0.4)

| k | P(X = k) | P(X ≤ k) | P(X ≥ k) |
|---|----------|----------|----------|
| 0 | 0.0060 | 0.0060 | 1.0000 |
| 1 | 0.0403 | 0.0463 | 0.9940 |
| 2 | 0.1209 | 0.1672 | 0.9537 |
| 3 | 0.2150 | **0.3823** | 0.8328 |
| 4 | 0.2508 | 0.6331 | 0.6177 |
| 5 | 0.2007 | 0.8338 | 0.3669 |
| 6 | 0.1115 | 0.9452 | 0.1662 |
| 7 | 0.0425 | 0.9877 | **0.0548** |

**Ejemplo de lectura:**
- $P(X = 3) = 0.2150$ → Probabilidad exacta de 3 éxitos
- $P(X \leq 3) = 0.3823$ → Probabilidad de 3 o menos (suma las primeras 4 filas)
- $P(X \geq 7) = 0.0548$ → Probabilidad de 7 o más (complemento de $P(X \leq 6)$)

#### Gráfico: Probabilidades acumuladas crecientes

```chart
type: line
labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
series:
  - title: "P(X ≤ k) — Función acumulada"
    data: [0.0060, 0.0463, 0.1672, 0.3823, 0.6331, 0.8338, 0.9452, 0.9877, 0.9983, 0.9999, 1.0000]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- La línea comienza en 0.0060 (solo P(X=0))
- En k=3 llega a 0.3823 (región sombreada en el gráfico anterior)
- En k=6 supera 0.94 (94% de probabilidad)
- Termina en 1.0 (certeza: algún valor debe ocurrir)

### Aproximación normal

Cuando $n$ es grande ($n \geq 30$ aproximadamente) y $np$ y $n(1-p)$ ambos son mayores que 5, la binomial se puede aproximar por una normal:

$$X \sim B(n,p) \approx N(np, \, np(1-p))$$

Se aplica el **ajuste de continuidad** restando o sumando 0.5:

$$P(X = k) \approx P(k - 0.5 < Y < k + 0.5)$$

donde $Y \sim N(np, \, np(1-p))$.

#### Comparación: Binomial vs Aproximación Normal

Para $n=40, p=0.5$: Media = 20, Varianza = 10

```chart
type: line
labels: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]
series:
  - title: "Aproximación Normal N(20, 10)"
    data: [0.001, 0.004, 0.017, 0.061, 0.176, 0.415, 0.765, 1.081, 1.206, 1.081, 0.765, 0.415, 0.176, 0.061, 0.017, 0.004]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- Con n grande, la binomial discreta se parece cada vez más a una curva normal continua
- Permite cálculos más fáciles usando tablas de la distribución normal
- La condición $np > 5$ y $n(1-p) > 5$ asegura que la curva sea suficientemente suave

## Ejemplo numérico

Sea $X \sim B(n = 10,\; p = 0.4)$. Entonces $E(X) = 10(0.4) = 4$ y $\text{Var}(X) = 10(0.4)(0.6) = 2.4$.

Queremos calcular $P(X \leq 3)$, es decir, la probabilidad de obtener 3 o menos éxitos:

$$P(X \leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$$

Calculamos cada término:

$$P(X = 0) = \binom{10}{0}(0.4)^0(0.6)^{10} = 1 \cdot 1 \cdot 0.00605 = 0.0060$$

$$P(X = 1) = \binom{10}{1}(0.4)^1(0.6)^9 = 10 \cdot 0.4 \cdot 0.01008 = 0.0403$$

$$P(X = 2) = \binom{10}{2}(0.4)^2(0.6)^8 = 45 \cdot 0.16 \cdot 0.01680 = 0.1209$$

$$P(X = 3) = \binom{10}{3}(0.4)^3(0.6)^7 = 120 \cdot 0.064 \cdot 0.02799 = 0.2150$$

Sumando:

$$\boxed{P(X \leq 3) = 0.0060 + 0.0403 + 0.1209 + 0.2150 = 0.3823}$$

Esto significa que hay un **38.23% de probabilidad** de obtener 3 o menos éxitos en 10 ensayos con $p = 0.4$.

Si quisiéramos $P(X \geq 7)$:

$$P(X \geq 7) = 1 - P(X \leq 6)$$

Usando una tabla o calculadora: $P(X \leq 6) \approx 0.8327$, por lo tanto:

$$P(X \geq 7) = 1 - 0.8327 = 0.1673$$

## Ejemplo de la vida real

Una tienda en línea recibe en promedio 40 pedidos diarios y la probabilidad de que un pedido sea devuelto es $p = 0.08$. El gerente quiere saber $P(X \leq 2)$, es decir, que haya 2 o menos devoluciones en un día:

$$E(X) = 40(0.08) = 3.2, \quad \text{Var}(X) = 40(0.08)(0.92) = 2.944$$

Como $n = 40$ es grande y $np = 3.2$, $n(1-p) = 36.8$, se puede aproximar con normal: $X \approx N(3.2, 2.944)$.

$$P(X \leq 2) \approx P\!\left(Z \leq \frac{2.5 - 3.2}{\sqrt{2.944}}\right) = P(Z \leq -0.41) \approx 0.3409$$

Hay aproximadamente un **34% de probabilidad** de que haya 2 o menos devoluciones en un día dado.

#### Gráfico: Distribución de devoluciones diarias B(40, 0.08)

```chart
type: bar
labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
series:
  - title: "Probabilidad P(X = k) — Devoluciones"
    data: [0.0415, 0.1369, 0.2277, 0.2277, 0.1706, 0.1050, 0.0549, 0.0242, 0.0092, 0.0030, 0.0009]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación práctica:**
- **Valor esperado:** 3.2 devoluciones/día (pico en k=2 y k=3)
- **P(X ≤ 2) = 0.3409:** Solo 34% de probabilidad de ≤2 devoluciones → Necesita prepararse para más
- **P(X ≤ 5) ≈ 0.91:** El 91% de los días habrá ≤5 devoluciones
- **Decisión:** El gerente debe planificar personal para manejar 4-5 devoluciones típicamente

> [!tip] Relación con el curso
> Las probabilidades acumuladas de la binomial son esenciales para construir intervalos de confianza y realizar pruebas de hipótesis sobre proporciones poblacionales, uno de los pilares de la estadística inferencial.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1
¿Cuál es la probabilidad de obtener al menos un éxito en un experimento binomial con parámetros $n$ y $p$?
a) $P(X \geq 1) = 1 - P(X = 0)$
b) $P(X \geq 1) = P(X = 1)$
c) $P(X \geq 1) = 1 - P(X = 1)$
d) $P(X \geq 1) = P(X = 0)$

> **a) $P(X \geq 1) = 1 - P(X = 0)$**

---
### Pregunta 2
Si $X \sim B(n=3, p=0.1)$, ¿cuál es $P(X \geq 1)$?
a) 0,729
b) 0,271
c) 0,1
d) 0,9

> **b) 0,271**

---
### Pregunta 3
Para $X \sim B(n=4, p=0.5)$, ¿cuál es $P(X=2)$?
a) 0,25
b) 0,375
c) 0,5
d) 0,625

> **b) 0,375**

---
### Pregunta 4
¿Bajo cuáles condiciones se puede aproximar la distribución binomial por una normal?
a) Cuando $n$ es pequeño y $p$ es cercano a 0,5
b) Cuando $n \geq 30$ y tanto $np$ como $n(1-p)$ son mayores que 5
c) Cuando $p$ es cercano a 1 y $n$ es grande
d) Cuando la varianza es menor que la media

> **b) Cuando $n \geq 30$ y tanto $np$ como $n(1-p)$ son mayores que 5**

---
### Pregunta 5
Para $X \sim B(n=10, p=0.4)$, ¿cuáles son la media y la varianza?
a) Media = 4, Varianza = 2,4
b) Media = 4, Varianza = 4
c) Media = 6, Varianza = 2,4
d) Media = 2,4, Varianza = 4

> **a) Media = 4, Varianza = 2,4**

---
### Pregunta 6
¿Cómo se calcula $P(X \geq k)$ usando la distribución acumulada?
a) $P(X \geq k) = P(X \leq k)$
b) $P(X \geq k) = 1 - P(X \leq k)$
c) $P(X \geq k) = 1 - P(X \leq k-1)$
d) $P(X \geq k) = P(X = k)$

> **c) $P(X \geq k) = 1 - P(X \leq k-1)$**

---
### Pregunta 7
Si $X \sim B(n=5, p=0.2)$, ¿cuál es $P(X \leq 1)$?
a) 0,328
b) 0,737
c) 0,410
d) 0,205

> **b) 0,737**

---
### Pregunta 8
En control de calidad, si la probabilidad de un artículo defectuoso es 0,1, en una muestra de 3 artículos, ¿cuál es la probabilidad de que haya exactamente 1 defectuoso?
a) 0,271
b) 0,001
c) 0,243
d) 0,729

> **c) 0,243**

---
### Pregunta 9
En una distribución binomial, si se aumenta el número de ensayos $n$ manteniendo $p$ constante, ¿qué ocurre con la distribución?
a) Se vuelve más sesgada hacia la izquierda
b) Se vuelve más simétrica y se aproxima a una normal
c) La varianza disminuye
d) La media disminuye

> **b) Se vuelve más simétrica y se aproxima a una normal**

---
### Pregunta 10
Para $X \sim B(n=6, p=0.3)$, ¿cuál es $P(X \geq 2)$?
a) 0,420
b) 0,580
c) 0,302
d) 0,118

> **b) 0,580**