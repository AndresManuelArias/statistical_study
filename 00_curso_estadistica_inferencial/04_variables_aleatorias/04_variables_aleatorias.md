---
titulo: Variables aleatorias
tipo: anotacion-video
tema: variables aleatorias y distribuciones
tags:
  - estadistica-inferencial
  - variables-aleatorias
  - distribuciones
---

# 🎲 Variables Aleatorias y Distribuciones de Probabilidad

## 🎬 Datos del video

- **Título:** Variables aleatorias y distribuciones de probabilidad
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Una **variable aleatoria** es una función que asigna un número a cada resultado de un experimento aleatorio. En lugar de trabajar con los resultados crudos (caras, divorcio, etc.), la variable aleatoria convierte el azar en **números**, lo que nos permite calcular probabilidades, esperanzas y varianzas.

> [!info] Idea principal
> Variable aleatoria = "traducir" los resultados de un experimento a números. Puede ser **discreta** (cuenta cosas) o **continua** (mide cosas).

## 🧮 Explicación del tema

## Variable aleatoria

Una **variable aleatoria** $X$ es una función:

$$
X : \Omega \to \mathbb{R}
$$

que a cada resultado del espacio muestral le asigna un número real.

### Discretas vs continuas

| Característica | Discreta | Continua |
|----------------|----------|----------|
| Toma valores | En un conjunto finito o numerable | En un intervalo (infinitos valores) |
| Se describe con | Función de **probabilidad** $P(X=x)$ | Función de **densidad** $f(x)$ |
| Ejemplo típico | Número de hijos | Años de matrimonio |
| Probabilidad puntual | $P(X=x)$ puede ser > 0 | $P(X=a)=0$ puntual |

## Distribuciones discretas importantes

### Uniforme discreta

Cada resultado tiene la misma probabilidad. Si $X \in \{1,\ldots,n\}$, entonces $P(X=x) = \frac{1}{n}$.

### Bernoulli

Experimento con **dos resultados** (éxito/fracaso). Con $p = P(\text{éxito})$:

$$
P(X = 1) = p, \qquad P(X=0) = 1-p
$$

### Binomial

Cuenta el número de éxitos en $n$ ensayos independientes de Bernoulli:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

Con **esperanza** $E[X] = np$ y **varianza** $Var(X) = np(1-p)$.

### Poisson

Cuenta eventos raros en un intervalo de tiempo o espacio, con tasa $\lambda$:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

Con $E[X] = Var(X) = \lambda$.

## Esperanza, varianza y desviación estándar

### Esperanza (media)

$$
E[X] = \sum_i x_i \, P(X = x_i)
$$

Es el "promedio ponderado" por la probabilidad.

### Varianza

$$
Var(X) = E[X^2] - (E[X])^2 = \sum_i (x_i - E[X])^2 \, P(X=x_i)
$$

### Desviación estándar

$$
\sigma = \sqrt{Var(X)}
$$

## Momentos de las variables aleatorias (video 43)

Los **momentos** resumen la forma de una distribución. El momento de orden $k$ alrededor del origen es:

$$
\mu_k' = E[X^k]
$$

El **momento central** de orden $k$ (alrededor de la media $\mu$) es:

$$
\mu_k = E[(X - \mu)^k]
$$

**Los dos primeros momentos son los más usados:**
- Primer momento: $\mu_1' = E[X] = \mu$ → la **media**.
- Segundo momento central: $\mu_2 = E[(X-\mu)^2] = Var[X]$ → la **varianza**.

Con momentos de orden mayor se miden:
- **Asimetría** ($\mu_3 / \sigma^3$): si es 0, la distribución es simétrica.
- **Curtosis** ($\mu_4 / \sigma^4 - 3$): qué tan "puntiaguda" es (colas).

> [!example] Con el dataset
> Para `n_children` ya calculamos: $E[X] = 1.405$ y $E[X^2] = 3.374$, de modo que
> $Var[X] = E[X^2] - E[X]^2 = 3.374 - 1.405^2 = 1.400$.

---

## Distribuciones discretas adicionales

### Distribución geométrica (video 46)

Modela el **número de ensayos hasta el primer éxito** en intentos independientes con probabilidad $p$ de éxito:

$$
P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots
$$

$$
E[X] = \frac{1}{p}, \quad Var[X] = \frac{1-p}{p^2}
$$

> [!example] Con el dataset
> Si "éxito" = divorcio ($p = 0.4602$):
> - $P(X=1) = (0.5398)^0 \cdot 0.4602 = 0.4602$
> - $P(X=2) = 0.5398 \cdot 0.4602 = 0.2484$
> - $E[X] = 1/0.4602 = 2.17$ matrimonios en promedio hasta el primer divorcio.

### Distribución binomial negativa (video 47)

Generaliza la geométrica: cuenta los ensayos hasta obtener **$r$ éxitos**:

$$
P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, \ldots
$$

$$
E[X] = \frac{r}{p}
$$

> [!example] Con el dataset
> Con $p = 0.4602$ y $r = 2$ (esperar a que haya **2 divorcios**):
> - $P(X=3) = \binom{2}{1} \cdot 0.4602^2 \cdot 0.5398^1 = 0.2286$
> - $E[X] = 2/0.4602 = 4.35$ matrimonios en promedio hasta el segundo divorcio.
>
> Cuando $r = 1$ se reduce a la **geométrica**.

---

## Distribuciones continuas adicionales

### Distribución t de Student (video 50)

Se usa para inferir sobre la **media** cuando la desviación estándar poblacional $\sigma$ es desconocida y se estima con $s$ (común con muestras pequeñas). Su parámetro son los **grados de libertad** $\nu = n - 1$.

Tiene colas **más pesadas** que la normal; conforme $\nu$ crece, se aproxima a la normal estándar.

> Aplicación en el curso: comparar `years_married` entre divorciados y no divorciados (material avanzado).

### Distribución F (video 51)

Es la **razón de dos varianzas** independientes:

$$
F = \frac{s_1^2}{s_2^2}
$$

Parámetros: grados de libertad del numerador ($\nu_1$) y del denominador ($\nu_2$). Es la base del **ANOVA** para comparar la variabilidad entre grupos con la variabilidad dentro de los grupos.

### Distribución Ji Cuadrada ($\chi^2$, video 52)

Es la distribución de la **suma de $k$ normales estándar al cuadrado**; su parámetro son los grados de libertad ($k$). Siempre toma valores $\ge 0$ y es asimétrica a la derecha.

Se usa para **frecuencias y tablas de contingencia** (prueba de independencia) — aplicada en el material avanzado de chi-cuadrado con `education_level` × `divorced`.

---

## Distribución normal (continua)

La distribución más importante de la estadística. Se define por su media $\mu$ y desviación estándar $\sigma$:

$$
f(x) = \frac{1}{\sqrt{2\pi}\,\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

**Propiedades:**
- Es **simétrica** alrededor de $\mu$.
- El área total bajo la curva es 1 (probabilidad total).
- Casi toda la masa está en $\mu \pm 3\sigma$ (regla empírica: 68-95-99.7).

### Estandarización (puntaje Z)

$$
Z = \frac{X - \mu}{\sigma}
$$

Convierte cualquier normal en la **normal estándar** $N(0,1)$ tabulada.

> [!tip] Relación con el curso
> - `05_distribuciones_muestrales` usa el TLC: las medias muestrales se distribuyen aproximadamente normal sin importar la población original.
> - `01_chi_cuadrado` describe una distribución continúa que depende de los grados de libertad.

---

## 🐍 Ejemplo en Python: variables aleatorias sobre el dataset

Modelamos variables del dataset: `n_children` es discreta, `years_married` es continua. Calculamos su esperanza y varianza empíricas, y comprobamos la forma de su distribución.

```python
import csv
import statistics
from collections import Counter
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

filas = cargar()
N = len(filas)

# ---- Variable DISCRETA: n_children (número de hijos) ----
conteo = Counter(int(f["n_children"]) for f in filas)
total = sum(conteo.values())

print("=== Variable discreta: n_children ===")
for k in sorted(conteo):
    p = conteo[k] / total
    barra = "#" * int(p * 100)
    print(f"P(X={k}) = {conteo[k]:6d}/{total} = {p:.4f}  {barra}")

# Esperanza E[X] = Σ x·P(X=x)
E_children = sum(k * (conteo[k]/total) for k in conteo)
print(f"\nE[n_children] = {E_children:.3f}")

# Varianza Var[X] = E[X²] - E[X]²
E2 = sum(k**2 * (conteo[k]/total) for k in conteo)
Var_children = E2 - E_children**2
print(f"Var[n_children] = E[X²] - E[X]² = {E2:.3f} - {E_children**2:.3f} = {Var_children:.3f}")
print(f"σ = {Var_children**0.5:.3f}")

# ---- Variable CONTINUA: years_married ----
años = [float(f["years_married"]) for f in filas if f["years_married"]]
media = statistics.mean(años)
desv = statistics.stdev(años)
print(f"\n=== Variable continua: years_married ===")
print(f"media = {media:.2f}, desv = {desv:.2f}, n = {len(años)}")

# Estandarización (puntaje Z) de un valor puntual
valor = 10.7
z = (valor - media) / desv
print(f"Z para years_married = {valor}: z = ({valor} - {media:.2f})/{desv:.2f} = {z:.2f}")

# Regla empírica aproximada: % de datos en media ± 1σ
dentro = sum(1 for a in años if media-desv <= a <= media+desv) / len(años)
print(f"% de matrimonios en media ± 1σ = {dentro:.3f} (teórico normal: 0.68)")

# ---- Distribución binomial: conteo de divorcios como éxitos ----
div = sum(1 for f in filas if f["divorced"] == "1")
p_div = div / N
print(f"\n=== Binomial: X = divorcios en una muestra ===")
print(f"p = P(divorcio) = {p_div:.4f}")
print(f"Si tomamos n=10 matrimonios, E[X] = np = {10*p_div:.2f}")

# ---- Distribución geométrica: X = n.º de ensayos hasta el 1er divorcio ----
q = 1 - p_div
print("\n=== Geométrica (éxito = divorcio) ===")
print(f"P(X=1) = q^0*p = {q**0*p_div:.4f}")
print(f"P(X=2) = q^1*p = {q**1*p_div:.4f}")
print(f"P(X=5) = q^4*p = {q**4*p_div:.4f}")
print(f"E[X] = 1/p = {1/p_div:.4f}")

# ---- Distribución binomial negativa: hasta r=2 éxitos ----
from math import comb
r = 2
print("\n=== Binomial negativa (r=2, hasta el 2º divorcio) ===")
for k in [3, 4, 5]:
    prob = comb(k-1, r-1) * p_div**r * q**(k-r)
    print(f"P(X={k}) = C({k-1},{r-1})*p^2*q^{k-r} = {prob:.4f}")
print(f"E[X] = r/p = {r/p_div:.4f}")
```

**Salida real del script (verificada con el dataset):**

```
=== Variable discreta: n_children ===
P(X=0) =  11064/45000 = 0.2459  ########################
P(X=1) =  15440/45000 = 0.3431  ##################################
P(X=2) =  10957/45000 = 0.2435  ########################
P(X=3) =   5134/45000 = 0.1141  ###########
P(X=4) =   1731/45000 = 0.0385  ####
P(X=5) =    511/45000 = 0.0114  #
P(X=6) =    163/45000 = 0.0036  #

E[n_children] = 1.405
Var[n_children] = E[X²] - E[X]² = 3.374 - 1.974 = 1.400
σ = 1.183

=== Variable continua: years_married ===
media = 10.70, desv = 7.82, n = 45000
Z para years_married = 10.7: z = (10.7 - 10.70)/7.82 = 0.00
% de matrimonios en media ± 1σ = 0.694 (teórico normal: 0.68)

=== Binomial: X = divorcios en una muestra ===
p = P(divorcio) = 0.4602
Si tomamos n=10 matrimonios, E[X] = np = 4.60

=== Geométrica (éxito = divorcio) ===
P(X=1) = q^0*p = 0.4602
P(X=2) = q^1*p = 0.2484
P(X=5) = q^4*p = 0.0391
E[X] = 1/p = 2.1731

=== Binomial negativa (r=2, hasta el 2º divorcio) ===
P(X=3) = C(2,1)*p^2*q^1 = 0.2286
P(X=4) = C(3,1)*p^2*q^2 = 0.1851
P(X=5) = C(4,1)*p^2*q^3 = 0.1332
E[X] = r/p = 4.3461
```

> [!note] Lectura estadística
> - `n_children` es **discreta**: se describe con $P(X=k)$ y su esperanza se calcula como suma ponderada.
> - `years_married` es **continua**: se resume con media y desviación estándar; el % de datos en $\mu \pm 1\sigma$ (69.4%) es cercano al 68% teórico de la normal, señal de que la distribución es **aproximadamente normal**.
> - La **estandarización** convierte cualquier valor en un puntaje $Z$ comparable (por ejemplo, para una tabla normal).
> - La **geométrica** y la **binomial negativa** modelan cuántos matrimonios inspeccionar (hasta el 1er o el 2º divorcio); la t, F y Ji cuadrada aparecen como estadísticos de prueba en la inferencia.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Una **variable aleatoria** es:

a) Una constante que no cambia nunca
b) Una función que asigna un número real a cada resultado de un experimento aleatorio
c) Un conjunto fijo de datos
d) Un experimento determinista

> **b) Una función que asigna un número real a cada resultado de un experimento aleatorio**

---

### Pregunta 2

Una variable aleatoria **discreta**:

a) Toma valores en un intervalo continuo
b) Toma valores en un conjunto finito o numerable
c) Siempre toma valores enteros positivos
d) No tiene esperanza definida

> **b) Toma valores en un conjunto finito o numerable**

---

### Pregunta 3

La **esperanza** de una variable aleatoria discreta $X$ se calcula como:

a) $E[X] = \sum_i x_i$
b) $E[X] = \sum_i x_i \, P(X = x_i)$
c) $E[X] = \prod_i x_i \, P(X = x_i)$
d) $E[X] = \max_i x_i$

> **b) $E[X] = \sum_i x_i \, P(X = x_i)$**

---

### Pregunta 4

La **varianza** de $X$ se puede calcular como:

a) $Var(X) = E[X^2] - (E[X])^2$
b) $Var(X) = (E[X])^2 - E[X^2]$
c) $Var(X) = \sqrt{E[X]}$
d) $Var(X) = E[X]^2$

> **a) $Var(X) = E[X^2] - (E[X])^2$**

---

### Pregunta 5

Una variable aleatoria **continua** se describe mediante:

a) La función de probabilidad $P(X=x)$
b) La función de densidad $f(x)$
c) El factorial $n!$
d) Solo su moda

> **b) La función de densidad $f(x)$**

---

### Pregunta 6

La distribución **binomial** cuenta:

a) El número de eventos raros en un intervalo de tiempo
b) El número de éxitos en $n$ ensayos independientes con probabilidad de éxito $p$
c) El número de ensayos hasta el primer éxito
d) La media de una población

> **b) El número de éxitos en n ensayos independientes con probabilidad de éxito p**

---

### Pregunta 7

La esperanza de una variable **binomial** con parámetros $n$ y $p$ es:

a) $np$
b) $n(1-p)$
c) $p$
d) $n^2 p$

> **a) $np$**

---

### Pregunta 8

La distribución **normal** es:

a) Asimétrica a la derecha
b) Simétrica alrededor de su media $\mu$
c) Discreta
d) Siempre con varianza 1

> **b) Simétrica alrededor de su media $\mu$**

---

### Pregunta 9

La **estandarización** de una variable normal se realiza con:

a) $Z = \frac{X - \mu}{\sigma}$
b) $Z = \frac{\mu - X}{\sigma}$
c) $Z = X \cdot \sigma + \mu$
d) $Z = \frac{\sigma}{X - \mu}$

> **a) $Z = \frac{X - \mu}{\sigma}$**

---

### Pregunta 10

La **regla empírica** de la distribución normal indica que aproximadamente el 95% de los datos están en:

a) $\mu \pm 1\sigma$
b) $\mu \pm 2\sigma$
c) $\mu \pm 3\sigma$
d) $\mu \pm 0.5\sigma$

> **b) $\mu \pm 2\sigma$**

---

### Pregunta 11

En el dataset, la variable `n_children` (número de hijos) es **discreta** y su distribución muestra $P(X=2) \approx 0.24$. Esto significa que:

a) El 24% de los matrimonios tiene exactamente 2 hijos
b) El 24% de los matrimonios tiene al menos 2 hijos
c) La esperanza de hijos es 24
d) La varianza es 24

> **a) El 24% de los matrimonios tiene exactamente 2 hijos**

---

### Pregunta 12

Si en una muestra de 10 matrimonios la probabilidad de divorcio es $p = 0.46$, la esperanza del número de divorciados en esa muestra (binomial) es:

a) 46
b) 4.60
c) 0.46
d) 10

> **b) 4.60**

---

### Pregunta 13

La distribución **uniforme discreta** asigna a cada resultado posible:

a) Una probabilidad distinta según el resultado
b) La misma probabilidad $\frac{1}{n}$
c) Probabilidad 0 a todos salvo a uno
d) Probabilidad 1 a cada resultado

> **b) La misma probabilidad $\frac{1}{n}$**

---

### Pregunta 14

Una variable de **Bernoulli** es:

a) Un experimento con más de dos resultados
b) Un experimento con **dos resultados** (éxito con probabilidad $p$ y fracaso con $1-p$)
c) Una variable continua
d) Un conteo de eventos raros

> **b) Un experimento con dos resultados (éxito con probabilidad p y fracaso con 1-p)**

---

### Pregunta 15

El **primer momento** alrededor del origen ($\mu_1' = E[X]$) es:

a) La varianza
b) La **media**
c) La desviación estándar
d) La asimetría

> **b) La media**

---

### Pregunta 16

La varianza es el **segundo momento central**:

a) $E[X]$
b) $E[X^2]$
c) $E[(X - \mu)^2]$
d) $E[X^2] - \mu$  (solo si $\mu = 0$)

> **c) $E[(X - \mu)^2]$**

---

### Pregunta 17

La fórmula de la **distribución geométrica** es:

a) $P(X=k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}$
b) $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$
c) $P(X=k) = (1-p)^{k-1} \cdot p$
d) $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$

> **c) $P(X=k) = (1-p)^{k-1} \cdot p$**

---

### Pregunta 18

Con $p = P(\text{divorcio}) = 0.4602$, la esperanza de la geométrica $E[X] = 1/p$ es:

a) 0.46 matrimonios
b) 2.00 matrimonios
c) **2.17 matrimonios**
d) 4.60 matrimonios

> **c) 2.17 matrimonios**

---

### Pregunta 19

La distribución **binomial negativa** modela:

a) El número de éxitos en $n$ ensayos fijos
b) El **número de ensayos hasta obtener $r$ éxitos**
c) El tiempo entre eventos raros
d) La suma de muchas variables independientes

> **b) El número de ensayos hasta obtener r éxitos**

---

### Pregunta 20

La distribución **t de Student** se usa principalmente para:

a) Comparar varianzas
b) Inferir sobre la **media** cuando $\sigma$ es desconocida (gl = $n-1$)
c) Contar éxitos en ensayos
d) Analizar tablas de contingencia

> **b) Inferir sobre la media cuando $\sigma$ es desconocida (gl = n-1)**

---

### Pregunta 21

La distribución **F** es la base del **ANOVA** porque es:

a) Una binomial con parámetros grandes
b) Una **razón de varianzas** ($s_1^2 / s_2^2$)
c) Una normal estándar al cuadrado
d) Una Poisson con media grande

> **b) Una razón de varianzas ($s_1^2 / s_2^2$)**

---

### Pregunta 22

La distribución **Ji Cuadrada** ($\chi^2$) se caracteriza por:

a) Tener media cero
b) Ser simétrica
c) Tener **parámetro de grados de libertad** y usarse en tablas de contingencia
d) Aceptar valores negativos

> **c) Tener parámetro de grados de libertad y usarse en tablas de contingencia**

---


## ❓ Dudas pendientes

- [ ] ¿Cómo se gráfica la función de densidad de la normal?
- [ ] ¿Cuándo se usa Poisson vs binomial en la práctica?

## 🔗 Temas relacionados

- [[03_probabilidad|Probabilidad]]
- [[05_distribuciones_muestrales|Distribuciones muestrales]]
- [[teoria|Chi-Cuadrado (distribución continua)]]
- [[00_contenido_curso|Contenido del curso]]