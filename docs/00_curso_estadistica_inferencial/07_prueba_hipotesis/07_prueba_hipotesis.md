---
titulo: Prueba de hipótesis
tipo: anotacion-video
tema: prueba de hipótesis
tags:
  - estadistica-inferencial
  - prueba-de-hipotesis
  - valor-p
---

# ⚖️ Prueba de Hipótesis

## 🎬 Datos del video

- **Título:** Prueba de hipótesis
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

La **prueba de hipótesis** es un procedimiento para **decidir** entre dos afirmaciones (hipótesis) sobre un parámetro poblacional usando los datos de una muestra. Se plantean una **hipótesis nula** $H_0$ (status quo, "no hay efecto") y una **alternativa** $H_a$, y se evalúa qué tan compatibles son los datos con $H_0$ a través del **valor-p**.

> [!info] Idea principal
> Si los datos observados son **muy improbables** bajo $H_0$ (valor-p pequeño), hay **evidencia** para rechazar $H_0$. "Faltan pruebas para afirmar" $H_a$ no significa que sea falsa: significa que la muestra no bastó para demostrarla.

## 🧮 Explicación del tema

## Hipótesis nula y alternativa

- **Hipótesis nula ($H_0$):** afirmación de que **no hay efecto o diferencia**. Se considera verdadera mientras los datos no la contradigan ($H_0: p = 0.5$, $H_0: \mu = 10$).
- **Hipótesis alternativa ($H_a$):** lo que queremos **demostrar**, contraria a $H_0$ ($H_a: p \neq 0.5$, $H_a: \mu > 10$).

> [!example] Ejemplo con el dataset
> ¿La terapia prematrimonial reduce el divorcio?
> - $H_0: p_{terapia} = p_{sin\ terapia}$ (no hay diferencia)
> - $H_a: p_{terapia} < p_{sin\ terapia}$ (la terapia reduce el divorcio)

## Los tres tipos de prueba según $H_a$

| Tipo | Hipótesis nula | Hipótesis alternativa | Prueba |
|------|----------------|------------------------|--------|
| Bilateral | $H_0: \theta = \theta_0$ | $H_a: \theta \neq \theta_0$ | Dos colas |
| Unilateral derecha | $H_0: \theta \leq \theta_0$ | $H_a: \theta > \theta_0$ | Cola derecha |
| Unilateral izquierda | $H_0: \theta \geq \theta_0$ | $H_a: \theta < \theta_0$ | Cola izquierda |

## Estadístico de prueba

Compara el dato muestral con lo esperado bajo $H_0$. Para una media con $\sigma$ conocida:

$$
Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}
$$

Donde $\mu_0$ es el valor de $\mu$ bajo $H_0$. Si los datos son consistentes con $H_0$, $Z$ tiende a estar cerca de 0.

## Nivel de significancia ($\alpha$) y valor-p

- **Nivel de significancia $\alpha$:** probabilidad máxima tolerada de **error tipo I**. Usual: $\alpha = 0.05$.
- **Valor-p:** probabilidad de obtener un estadístico tan extremo (o más) que el observado, **asumiendo que $H_0$ es verdadera**. Cuanto más pequeño, menos compatibles los datos con $H_0$.

Criterio de decisión:

$$
\text{Si } p\text{-valor} < \alpha \implies \text{Rechazar } H_0
$$

$$
\text{Si } p\text{-valor} \geq \alpha \implies \text{No rechazar } H_0
$$

## Errores tipo I y tipo II

| Error | Qué es | Probabilidad |
|-------|--------|--------------|
| **Tipo I** | Rechazar $H_0$ cuando **es verdadera** | $\alpha$ (se controla) |
| **Tipo II** | No rechazar $H_0$ cuando **es falsa** | $\beta$ |
| **Potencia** | Rechazar correctamente $H_0$ falsa | $1 - \beta$ |

> [!warning] Ojo
> "No rechazar $H_0$" **no** significa "comprobar $H_0$". Solo significa que la evidencia **no fue suficiente** para rechazarla.

## Regla del valor-p en contexto

| Valor-p | Evidencia contra $H_0$ |
|---------|------------------------|
| $p < 0.01$ | Muy fuerte |
| $0.01 \leq p < 0.05$ | Fuerte (moderada) |
| $0.05 \leq p < 0.10$ | Débil |
| $p \geq 0.10$ | Insuficiente |

> [!tip] Relación con el curso
> - La prueba de hipótesis usa la **distribución muestral** (tema 05) para calcular el valor-p.
> - Las pruebas específicas (t de Student, chi-cuadrado, ANOVA) se desarrollan en `04_pruebas_estadisticas`.

---

## 🐍 Ejemplo en Python: prueba de hipótesis con el dataset

Comprobamos si la **terapia prematrimonial** está asociada con la proporción de divorcio. Usamos una prueba z de dos proporciones aproximada (adecuada por los tamaños muestrales).

```python
import csv
import math
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

with open(RUTA, encoding="utf-8") as f:
    filas = list(csv.DictReader(f))

# Conteos
nT = sum(1 for f in filas if f["premarital_counseling"] == "1")
nS = sum(1 for f in filas if f["premarital_counseling"] == "0")
dT = sum(1 for f in filas if f["divorced"] == "1" and f["premarital_counseling"] == "1")
dS = sum(1 for f in filas if f["divorced"] == "1" and f["premarital_counseling"] == "0")

pT = dT / nT      # proporción divorcio con terapia
pS = dS / nS      # proporción divorcio sin terapia
p_tot = (dT + dS) / (nT + nS)   # proporción combinada (bajo H0)

print(f"Con terapia : p̂T = {dT}/{nT} = {pT:.4f}")
print(f"Sin terapia : p̂S = {dS}/{nS} = {pS:.4f}")
print(f"Diferencia observada: p̂T - p̂S = {pT - pS:+.4f}")

# H0: pT = pS   (no hay diferencia)
SE = math.sqrt(p_tot * (1 - p_tot) * (1/nT + 1/nS))
Z = (pT - pS) / SE
print(f"SE combinado = {SE:.4f}")
print(f"Estadístico Z = (p̂T - p̂S)/SE = {Z:.2f}")

# Valor-p para prueba bilateral (dos colas): P(|Z| > |z_obs|)
# Aproximación con la función de error (0.5 * erfc(|z|/√2)) equivalente
def normal_cdf(x):
    return 0.5 * (1 + math.erf(x / math.sqrt(2)))

p_valor = 2 * (1 - normal_cdf(abs(Z)))
print(f"Valor-p (bilateral) = 2·P(Z > |z|) = {p_valor:.6f}")

alpha = 0.05
print(f"\nα = {alpha}")
if p_valor < alpha:
    print("Conclusión: Rechazar H0 → hay evidencia de diferencia en la proporción de divorcio.")
else:
    print("Conclusión: No rechazar H0 → no hay evidencia suficiente.")

# Prueba unilateral (la terapia reduce el divorcio)
p_1cola = 1 - normal_cdf(-abs(Z)) if Z < 0 else 1 - normal_cdf(Z)
if Z < 0:
    p_1cola = normal_cdf(Z)
print(f"Valor-p unilateral (H_a: pT < pS) = {p_1cola:.6f}")
```

**Salida real del script (verificada con el dataset):**

```
Con terapia : p̂T = 4080/10972 = 0.3719
Sin terapia : p̂S = 16628/34028 = 0.4887
Diferencia observada: p̂T - p̂S = -0.1168

SE combinado = 0.0055
Estadístico Z = (p̂T - p̂S)/SE = -21.35
Valor-p (bilateral) = 2·P(Z > |z|) = 0.000000

α = 0.05
Conclusión: Rechazar H0 → hay evidencia de diferencia en la proporción de divorcio.
Valor-p unilateral (H_a: pT < pS) = 0.000000
```

> [!note] Lectura estadística
> - El valor-p resultó **~0** (mucho menor que $\alpha = 0.05$): hay **evidencia muy fuerte** para rechazar $H_0$.
> - Concluimos que la proporción de divorcio **difiere** entre quienes hicieron terapia y quienes no. El registro observacional no establece causalidad (tema 06), solo asociación.
> - Verificar siempre que los datos cumplan las condiciones de la prueba (aquí $np \geq 10$ en ambos grupos).

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **hipótesis nula** ($H_0$) normalmente afirma que:

a) Hay un gran efecto
b) No hay efecto o diferencia
c) El valor-p es pequeño
d) La muestra es sesgada

> **b) No hay efecto o diferencia**

---

### Pregunta 2

La **hipótesis alternativa** ($H_a$) es:

a) Lo que se asume verdadero sin probar
b) Lo que se quiere **demostrar** con los datos
c) El error tipo I
d) El nivel de significancia

> **b) Lo que se quiere demostrar con los datos**

---

### Pregunta 3

El **nivel de significancia** $\alpha$ es:

a) La probabilidad de no rechazar $H_0$ cuando es falsa
b) La probabilidad máxima tolerada de **error tipo I**
c) El valor-p
d) El tamaño de la muestra

> **b) La probabilidad máxima tolerada de error tipo I**

---

### Pregunta 4

Si el valor-p es **menor que** $\alpha$, se:

a) Acepta $H_0$
b) Rechaza $H_0$
c) Cambia la hipótesis alternativa
d) Duplica el tamaño de muestra

> **b) Rechaza $H_0$**

---

### Pregunta 5

Un **error tipo I** consiste en:

a) No rechazar $H_0$ cuando es falsa
b) Rechazar $H_0$ cuando es **verdadera**
c) Aceptar $H_a$ sin datos
d) Calcular mal la media

> **b) Rechazar $H_0$ cuando es verdadera**

---

### Pregunta 6

Un **error tipo II** consiste en:

a) Rechazar $H_0$ cuando es verdadera
b) No rechazar $H_0$ cuando es **falsa**
c) Fijar $\alpha = 0.05$
d) Recalcular el valor-p

> **b) No rechazar $H_0$ cuando es falsa**

---

### Pregunta 7

"**No rechazar $H_0$**" significa que:

a) $H_0$ es verdadera
b) $H_a$ es falsa
c) La evidencia **no fue suficiente** para rechazar $H_0$
d) El valor-p es 0

> **c) La evidencia no fue suficiente para rechazar H0**

---

### Pregunta 8

Un valor-p igual a 0.03 con $\alpha = 0.05$ indica:

a) Aceptar $H_0$
b) Rechazar $H_0$ (evidencia fuerte)
c) Datos sin ruido
d) No se puede decidir

> **b) Rechazar H0 (evidencia fuerte)**

---

### Pregunta 9

En la prueba del ejemplo, $H_0: p_T = p_S$ y obtenemos un valor-p de ~0 con $\alpha = 0.05$. La conclusión correcta es:

a) Hay evidencia de que las proporciones de divorcio **difieren** entre con y sin terapia
b) No hay evidencia de diferencia
c) La terapia causa divorcio
d) $H_0$ es verdadera

> **a) Hay evidencia de que las proporciones de divorcio difieren entre con y sin terapia**

---

### Pregunta 10

La **potencia** de una prueba se define como:

a) $\alpha$
b) $\beta$
c) $1 - \beta$ (rechazar correctamente una $H_0$ falsa)
d) El valor-p

> **c) $1 - \beta$ (rechazar correctamente una H0 falsa)**

---

### Pregunta 11

Para $H_a: \mu > \mu_0$ (colas derecha), la región de rechazo está:

a) A la izquierda de la distribución
b) A la derecha de la distribución
c) En ambas colas
d) En el centro

> **b) A la derecha de la distribución**

---

### Pregunta 12

La diferencia observada en el dataset fue $p̂_T - p̂_S = -0.1168$ con SE ≈ 0.0055. El estadístico $Z$ es aproximadamente:

a) -1.2
b) -21.4
c) -5.0
d) 0.05

> **b) -21.4**

---

### Pregunta 13

¿Qué interpretación es **correcta** del valor-p?

a) La probabilidad de que $H_0$ sea verdadera
b) La probabilidad de que $H_a$ sea verdadera
c) La probabilidad de observar un dato **tan extremo o más** que el observado, **asumiendo $H_0$ verdadera**
d) El tamaño del efecto

> **c) La probabilidad de observar un dato tan extremo o más que el observado, asumiendo H0 verdadera**

---

### Pregunta 14

Un resultado con valor-p = 0.08 y $\alpha = 0.05$ produce:

a) Rechazar $H_0$
b) No rechazar $H_0$ (evidencia insuficiente)
c) Error tipo II garantizado
d) Potencia perfecta

> **b) No rechazar H0 (evidencia insuficiente)**

---

## ❓ Dudas pendientes

- [ ] ¿Cómo se relaciona el valor-p con el intervalo de confianza?
- [ ] ¿Cuándo usar prueba bilateral vs unilateral?

## 🔗 Temas relacionados

- [[05_distribuciones_muestrales|Distribuciones muestrales]]
- [[06_muestreo|Muestreo y diseño]]
- [[anova|ANOVA]]
- [[t_student|Prueba t de Student]]
- [[chi_cuadrado_prueba|Prueba chi-cuadrado]]
- [[00_contenido_curso|Contenido del curso]]