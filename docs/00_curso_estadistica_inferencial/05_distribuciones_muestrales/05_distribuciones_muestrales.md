---
titulo: Distribuciones muestrales
tipo: anotacion-video
tema: distribuciones muestrales y TLC
tags:
  - estadistica-inferencial
  - distribuciones-muestrales
  - teorema-central-del-limite
---

# 📊 Distribuciones Muestrales

## 🎬 Datos del video

- **Título:** Distribuciones muestrales y Teorema del Límite Central
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

La estadística inferencial usa **muestras** para conocer a la **población**. La pieza clave que lo hace posible es la **distribución muestral**: la distribución de un estadístico (como la media $\bar{x}$) calculado sobre todas las muestras posibles del mismo tamaño.

> [!info] Idea principal
> Si tomamos muchas muestras del mismo tamaño y calculamos su media, esas medias se **distribuyen alrededor de la media poblacional** con un error estándar que **disminuye al aumentar el tamaño de muestra** $n$.

## 🧮 Explicación del tema

## Distribución muestral de la media

Sea $X$ una población con media $\mu$ y desviación estándar $\sigma$. Tomamos muestras de tamaño $n$ y calculamos $\bar{x}$.

**Según el Teorema del Límite Central (TLC):** si $n$ es grande ($n \geq 30$), la distribución muestral de $\bar{x}$ es **aproximadamente normal** con:

$$
\bar{x} \sim N\left( \mu, \ \frac{\sigma}{\sqrt{n}} \right)
$$

Donde:

- **Media muestral:** $E[\bar{x}] = \mu$ (la media de las medias es la media poblacional, es un estimador **insesgado**).
- **Error estándar:** $SE = \frac{\sigma}{\sqrt{n}}$ (mide la dispersión de las medias muestrales).

> [!tip] Error estándar vs desviación estándar
> - **Desviación estándar** $\sigma$: dispersión de datos individuales.
> - **Error estándar** $\frac{\sigma}{\sqrt{n}}$: dispersión de medias muestrales.
> - El error estándar es **siempre menor** que $\sigma$ (para $n > 1$) porque promediar "suaviza" las fluctuaciones.

## Propiedades del estimador insesgado

Un estimador es **insesgado** si su esperanza es igual al parámetro poblacional:

$$
E[\bar{x}] = \mu
$$

## ¿Por qué funciona el TLC?

- Las medias muestrales "promedian" errores positivos y negativos, por lo que su variación se comprime.
- A mayor $n$, más simétrica y campanuda resulta la distribución muestral, acercándose a la normal.
- El TLC vale **independientemente** de la forma de la población original (población sesgada, discreta, etc.), siempre que $n$ sea grande.

## Teorema del Límite Central (formal)

> [!note] Teorema
> Si $X_1, X_2, \ldots, X_n$ son variables aleatorias independientes e idénticamente distribuidas con media $\mu$ y varianza finita $\sigma^2$, entonces para $n$ grande:

$$
Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}} \longrightarrow N(0, 1)
$$

Es decir, el **puntaje Z de una media muestral** se distribuye como normal estándar cuando $n$ es grande.

## Distribución muestral de la proporción

Si estamos interesados en una **proporción** poblacional $p$ (por ejemplo, proporción de divorcios), la distribución muestral del estimador $\hat{p}$ es:

$$
\hat{p} \sim N\left( p, \ \sqrt{\frac{p(1-p)}{n}} \right)
$$

con error estándar $SE = \sqrt{\frac{p(1-p)}{n}}$, válido cuando $np \geq 10$ y $n(1-p) \geq 10$.

> [!warning] Ojo
> El error estándar de una proporción depende solo de $p$ y de $n$; aumenta con $p(1-p)$ (máximo en $p = 0.5$) y disminuye con $n$.

## Error estándar vs tamaño muestral

Si duplicamos el tamaño muestral, el error estándar **no** se reduce a la mitad, sino en un factor $\frac{1}{\sqrt{2}} \approx 0.707$:

$$
SE \propto \frac{1}{\sqrt{n}}
$$

> [!tip] Relación con el curso
> - El **puntaje Z** se usará para construir intervalos de confianza y pruebas de hipótesis en `07_prueba_hipotesis`.
> - La idea de estimador (media muestral → media poblacional) se conecta con `06_muestreo`.

---

## 🐍 Ejemplo en Python: distribución muestral de la media del dataset

Simulamos el TLC con el dataset real de matrimonios (45,000). Extraemos 500 muestras de tamaño $n$ y observamos cómo se distribuyen sus medias de `years_married`.

```python
import csv
import statistics
import random
from pathlib import Path

random.seed(2026)

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

with open(RUTA, encoding="utf-8") as f:
    filas = list(csv.DictReader(f))

años = [float(f["years_married"]) for f in filas if f["years_married"]]
N = len(años)

mu = statistics.mean(años)
sigma = statistics.stdev(años)      # desviación estándar poblacional (aprox.)
print(f"Población: N = {N}, μ = {mu:.2f}, σ = {sigma:.2f}")

for n in [5, 30, 100]:
    medias = [statistics.mean(random.sample(años, n)) for _ in range(500)]

    # Media de las medias muestrales (debe ser ~ μ)
    media_de_medias = statistics.mean(medias)

    # Desviación de las medias (debe ser ~ σ/√n)
    desv_de_medias = statistics.stdev(medias)

    SE_teorico = sigma / n**0.5
    print(f"\nn = {n}")
    print(f"  media de las 500 medias: {media_de_medias:.2f}  (μ = {mu:.2f})")
    print(f"  desv est. observada:      {desv_de_medias:.2f}")
    print(f"  SE teórico (σ/√n):        {SE_teorico:.2f}")
    print(f"  % de medias en μ ± 1 SE:  "
          f"{sum(1 for m in medias if mu-SE_teorico<=m<=mu+SE_teorico)/500:.3f}")

# ---- Proporción: divorcio ----
div = sum(1 for f in filas if f["divorced"] == "1")
p = div / N
for n in [50, 200]:
    SE = (p*(1-p)/n)**0.5
    print(f"\nProporción de divorcios: p = {p:.4f}")
    print(f"  n = {n}  →  SE = √(p(1-p)/n) = √({p*(1-p):.4f}/{n}) = {SE:.4f}")
```

**Salida real del script (verificada con el dataset):**

```
Población: N = 45000, μ = 10.70, σ = 7.82

n = 5
  media de las 500 medias: 10.52  (μ = 10.70)
  desv est. observada:      3.26
  SE teórico (σ/√n):        3.50
  % de medias en μ ± 1 SE:  0.722

n = 30
  media de las 500 medias: 10.71  (μ = 10.70)
  desv est. observada:      1.35
  SE teórico (σ/√n):        1.43
  % de medias en μ ± 1 SE:  0.712

n = 100
  media de las 500 medias: 10.64  (μ = 10.70)
  desv est. observada:      0.77
  SE teórico (σ/√n):        0.78
  % de medias en μ ± 1 SE:  0.684

Proporción de divorcios: p = 0.4602
  n = 50  →  SE = √(p(1-p)/n) = √(0.2484/50) = 0.0705
  n = 200 →  SE = √(p(1-p)/n) = √(0.2484/200) = 0.0352
```

> [!note] Lectura estadística
> - La media de las medias muestrales es **cercana** a $\mu$: el estimador es **insesgado** (la diferencia es variación de simulación).
> - La desviación observada de las medias se acerca a $\sigma/\sqrt{n}$ (3.26 vs 3.50, 1.35 vs 1.43, 0.77 vs 0.78): el TLC se cumple.
> - Al pasar de $n=30$ a $n=100$, el error estándar se reduce (de 1.43 a 0.78), confirmando que $SE$ decrece como $1/\sqrt{n}$.
> - Para la proporción, al **cuadruplicar** $n$ el error estándar **se reduce a la mitad** (0.0705 → 0.0352).

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **distribución muestral** de la media $\bar{x}$ es:

a) La distribución de todos los datos de la población
b) La distribución de todas las medias de las muestras posibles de tamaño $n$
c) La distribución de una sola muestra
d) La distribución de la desviación estándar

> **b) La distribución de todas las medias de las muestras posibles de tamaño n**

---

### Pregunta 2

Según el **Teorema del Límite Central**, para $n$ grande la media muestral $\bar{x}$ se distribuye aproximadamente:

a) Uniforme
b) Normal
c) Binomial
d) Exponencial

> **b) Normal**

---

### Pregunta 3

El **error estándar** de la media es:

a) $\sigma$
b) $\frac{\sigma}{\sqrt{n}}$
c) $\sigma^2$
d) $\frac{\sigma}{n}$

> **b) $\frac{\sigma}{\sqrt{n}}$**

---

### Pregunta 4

La media de la distribución muestral de $\bar{x}$ es:

a) $\bar{x}$
b) $\mu$
c) $0$
d) $\frac{\mu}{\sqrt{n}}$

> **b) $\mu$**

---

### Pregunta 5

Que el estimador $\bar{x}$ sea **insesgado** significa que:

a) $E[\bar{x}] = \mu$
b) $\bar{x} = \mu$ siempre
c) $Var(\bar{x}) = \sigma^2$
d) $\bar{x}$ es normal

> **a) $E[\bar{x}] = \mu$**

---

### Pregunta 6

Si duplicamos el tamaño de muestra $n$, el error estándar se:

a) Reduce a la mitad
b) Reduce en un factor $\frac{1}{\sqrt{2}} \approx 0.707$
c) Mantiene igual
d) Duplica

> **b) Reduce en un factor $\frac{1}{\sqrt{2}} \approx 0.707$**

---

### Pregunta 7

El error estándar de una **proporción** muestral $\hat{p}$ es:

a) $\sqrt{\frac{p(1-p)}{n}}$
b) $\frac{p}{\sqrt{n}}$
c) $p(1-p)$
d) $\frac{\sigma}{\sqrt{n}}$

> **a) $\sqrt{\frac{p(1-p)}{n}}$**

---

### Pregunta 8

La condición para usar aproximación normal en una proporción es:

a) $n \geq 1000$
b) $np \geq 10$ y $n(1-p) \geq 10$
c) $p = 0.5$
d) $n = p$

> **b) $np \geq 10$ y $n(1-p) \geq 10$**

---

### Pregunta 9

Según el TLC, el estadístico $Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$ se distribuye:

a) Como normal estándar $N(0,1)$ para $n$ grande
b) Como $t$-Student
c) Como chi-cuadrado
d) Como binomial

> **a) Como normal estándar $N(0,1)$ para n grande**

---

### Pregunta 10

En la simulación del dataset (μ = 10.70, σ = 7.82), el error estándar teórico para un tamaño de muestra $n = 30$ es aproximadamente:

a) 7.82
b) 1.43
c) 10.70
d) 0.26

> **b) 1.43**

---

### Pregunta 11

Si en el dataset la proporción de divorcios es $p = 0.4602$ y tomamos una muestra de $n = 200$, el error estándar de $\hat{p}$ es aproximadamente:

a) 0.0352
b) 0.0705
c) 0.4602
d) 0.5

> **a) 0.0352**

---

### Pregunta 12

¿Cuál es la principal consecuencia del Teorema del Límite Central?

a) La población siempre es normal
b) Las medias muestrales se distribuyen aproximadamente normal incluso si la población no lo es, siempre que $n$ sea grande
c) Las muestras deben ser independientes
d) La media poblacional es igual a la desviación estándar

> **b) Las medias muestrales se distribuyen aproximadamente normal incluso si la población no lo es, siempre que n sea grande**

---

### Pregunta 13

A mayor tamaño de muestra $n$, el error estándar de la media:

a) Aumenta
b) Disminuye
c) No cambia
d) Se vuelve negativo

> **b) Disminuye**

---

### Pregunta 14

La desviación estándar $\sigma$ y el error estándar $\frac{\sigma}{\sqrt{n}}$ miden:

a) Ambos la dispersión de las medias muestrales
b) $\sigma$ la dispersión de datos individuales; el error estándar la dispersión de las medias muestrales
c) Ambos la dispersión de la población
d) No hay diferencia entre ellos

> **b) σ la dispersión de datos individuales; el error estándar la dispersión de las medias muestrales**

---

## ❓ Dudas pendientes

- [ ] ¿Cómo se usa la distribución muestral para construir un intervalo de confianza?
- [ ] ¿Qué pasa con el TLC si la población es muy sesgada y $n$ pequeña?

## 🔗 Temas relacionados

- [[04_variables_aleatorias|Variables aleatorias]]
- [[06_muestreo|Muestreo]]
- [[07_prueba_hipotesis|Prueba de hipótesis]]
- [[00_contenido_curso|Contenido del curso]]