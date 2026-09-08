---
titulo: Diferencia de conjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - diferencia
---

# ➖ Diferencia de conjuntos

## 🎬 Datos del video

- **Título:** Diferencia de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=JO7NsN4ZJp4)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se introduce la **diferencia** de conjuntos ($A - B$): los elementos que pertenecen a $A$ pero no a $B$. Equivale a "quitarle" a $A$ los elementos que comparte con $B$, y se estudian sus casos prácticos (con intersección, conjuntos iguales, subconjuntos y disjuntos).

## 🧮 Contenido

## Operación Diferencia ($A - B$)

- **Definición:** elementos que pertenecen al conjunto $A$ pero no pertenecen al conjunto $B$ (equivalente a "quitarle" a $A$ los elementos que comparte con $B$).
- Por comprensión:

$$
A - B = \{x \mid x \in A \land x \notin B\}
$$

### Relación con la intersección y el complemento

Quitar los elementos de $B$ es equivalente a intersecar $A$ con el **complemento** de $B$:

$$
A - B = A \cap B^c
$$

> [!tip] Idea clave
> La diferencia no es otra cosa que "$A$ y **no** $B$". Por eso, en probabilidad, $P(A - B) = P(A \cap B^c)$ es la probabilidad de que ocurra $A$ **sin** que ocurra $B$.

## Casos prácticos

- **Intersección distinta del vacío:** se eliminan solo los comunes.
  - Ejemplo: $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5\}$ → $A - B = \{1, 2\}$.
- **Conjuntos iguales:** $A - A = \emptyset$.
- **Diferencia entre un conjunto y su subconjunto:** si $B \subseteq A$, entonces $A - B$ deja solo los elementos de $A$ que no están en $B$.
  - Ejemplo: $A = \{1, 2, 3\}$, $B = \{1, 2\}$ → $A - B = \{3\}$.
- **Conjuntos disjuntos:** el resultado es el primer conjunto completo ($A - B = A$).

### La diferencia NO es conmutativa

En general **$A - B \neq B - A$**:

- $A - B$: lo que está en $A$ pero no en $B$.
- $B - A$: lo que está en $B$ pero no en $A$.

> [!example] Ejemplo numérico
> Con $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$:
> - $A - B = \{1, 2\}$
> - $B - A = \{5\}$
> - Son conjuntos distintos (de hecho disjuntos).

### Diferencia en el dataset de matrimonios (lectura)

Definimos $A$ = bachelors (11,700) y $T$ = terapia prematrimonial (10,972), con $|A \cap T| = 2{,}987$:

- **$|A - T| = 11{,}700 - 2{,}987 = 8{,}713$** → bachelors que **no** hicieron terapia.
- **$|T - A| = 10{,}972 - 2{,}987 = 7{,}985$** → matrimonios con terapia que **no** son bachelors.
- **Verificación:** $|A - T| + |A \cap T| = 8{,}713 + 2{,}987 = 11{,}700 = |A|$. Cada elemento de $A$ está en $A - T$ **o** en $A \cap T$, nunca en ambos (partición de $A$).

> [!tip] Relación con suceso "y no"
> $|A - T| = 8{,}713$ se lee en probabilidad como: de los 45,000 matrimonios, hay 8,713 que son `bachelors` **y no** hicieron terapia. Si dividimos por $|\Omega|$ obtenemos $P(A - T) = P(A \cap T^c) = 8{,}713 / 45{,}000 \approx 0.19$.

---

## 💡 Ejemplo en Python: diferencia de conjuntos sobre el dataset

```python
import csv
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    # Lee el CSV y devuelve una lista de diccionarios (uno por matrimonio)
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

def conjunto_ids(filas, predicado):
    # Devuelve un SET de marriage_id que cumplen la condición
    return {f["marriage_id"] for f in filas if predicado(f)}

filas = cargar()
A = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")   # bachelors
T = conjunto_ids(filas, lambda f: f["premarital_counseling"] == "1")     # terapia
D = conjunto_ids(filas, lambda f: f["divorced"] == "1")                  # divorciados

print(f"|A| = {len(A)}   |T| = {len(T)}   |D| = {len(D)}")

# ---------- Diferencia: quitar lo compartido ----------
print(f"\n|A - T| (bachelors sin terapia)   = {len(A - T)}")
print(f"|A - A| (conjunto consigo mismo)   = {len(A - A)}")

# ---------- No conmutativa ----------
print(f"\n|A - T| = {len(A - T)}   |T - A| = {len(T - A)}")
print(f"¿A - T == T - A?   →  {(A - T) == (T - A)}")

# ---------- Equivalencia con A ∩ B^c ----------
comp_T = {f["marriage_id"] for f in filas} - T      # Ω - T (no hicieron terapia)
print(f"\n¿A - T == A ∩ T^c?     →  {(A - T) == (A & comp_T)}")

# ---------- Partición de A ----------
print(f"\n|(A - T) ∪ (A ∩ T)|  = {len((A - T) | (A & T))}  (debe ser |A| = {len(A)})")
print(f"¿(A - T) ∩ (A ∩ T) = ∅?  →  {(A - T) & (A & T) == set()}")

# ---------- Diferencia con universo y disjuntos ----------
Omega = {f["marriage_id"] for f in filas}
print(f"\n|A - Ω|             = {len(A - Omega)}  (sin elementos comunes con Ω)")

# ---------- No conmutativa ilustrada también con T - A ----------
print(f"|T - A| (terapia sin bachelors) = {len(T - A)}")
```

**Salida real del script (verificada con el dataset):**

```
|A| = 11700   |T| = 10972   |D| = 20708

|A - T| (bachelors sin terapia)   = 8713
|A - A| (conjunto consigo mismo)   = 0

|A - T| = 8713   |T - A| = 7985
¿A - T == T - A?   →  False

¿A - T == A ∩ T^c?     →  True

|(A - T) ∪ (A ∩ T)|  = 11700  (debe ser |A| = 11700)
¿(A - T) ∩ (A ∩ T) = ∅?  →  True

|A - Ω|             = 0  (sin elementos comunes con Ω)
|T - A| (terapia sin bachelors) = 7985
```

> [!note] Lectura estadística
> - **$|A - T| = 8{,}713$**: los matrimonios `bachelors` que no hicieron terapia son la mayoría de los bachelors ($8{,}713$ de $11{,}700$, un $74\%$).
> - La diferencia **no es conmutativa**: $|A - T| = 8{,}713 \neq 7{,}985 = |T - A|$.
> - La identidad $A - T = A \cap T^c$ se cumple exactamente sobre los datos reales, validando que "quitar" y "negar" son lo mismo.
> - $A - T$ y $A \cap T$ forman una **partición** de $A$: suman $|A|$ y no comparten elementos.
> - En probabilidad: $P(A - T) = 8{,}713 / 45{,}000 \approx 0.19$ es la probabilidad de que un matrimonio sea `bachelors` y no haya hecho terapia.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **diferencia** $A - B$ (elementos de $A$ que no están en $B$) para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$ es:

a) $\{1, 2\}$
b) $\{3, 4\}$
c) $\{5\}$
d) $\{1, 2, 3, 4, 5\}$

> **a) $\{1, 2\}$**

---

### Pregunta 2

La **diferencia** de un conjunto consigo mismo ($A - A$) es:

a) $A$
b) $\Omega$
c) El **conjunto vacío**
d) $A^c$

> **c) El conjunto vacío**

---

### Pregunta 3

La **diferencia** $A - B$ es equivalente a la siguiente operación con el complemento:

a) $A \cup B^c$
b) $A \cap B^c$
c) $A^c \cap B$
d) $A \cup B$

> **b) $A \cap B^c$**

---

### Pregunta 4

En el dataset de matrimonios, $A$ = bachelors (11,700) y $T$ = terapia prematrimonial (10,972), con $|A \cap T| = 2{,}987$. La cardinalidad de $A - T$ (bachelors **que no** hicieron terapia) es:

a) 7985
b) 2987
c) **8713** (pues $11700 - 2987 = 8713$)
d) 10972

> **c) 8713 (pues $11700 - 2987 = 8713$)**

---

### Pregunta 5

Si $A$ y $B$ son **disjuntos** ($A \cap B = \emptyset$), entonces la diferencia $A - B$ es:

a) $\emptyset$
b) $B$
c) $\Omega$
d) **$A$** (al no compartir elementos, no hay nada que quitar)

> **d) $A$ (al no compartir elementos, no hay nada que quitar)**

---

### Pregunta 6

Para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$, la diferencia $B - A$ es:

a) $\{1, 2\}$
b) $\{3, 4\}$
c) $\{5\}$
d) $\emptyset$

> **c) $\{5\}$**

---

### Pregunta 7

La diferencia de conjuntos **no es conmutativa**. Para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$:

a) $A - B = B - A = \{1, 2, 5\}$
b) $A - B = \{1, 2\}$ y $B - A = \{5\}$
c) $A - B = B - A = \emptyset$
d) $A - B = \{5\}$ y $B - A = \{1, 2\}$

> **b) $A - B = \{1, 2\}$ y $B - A = \{5\}$**

---

### Pregunta 8

Si $B \subseteq A$, entonces $A - B$ representa:

a) Todos los elementos de $A$
b) Los elementos de $B$
c) Solo los elementos de $A$ que **no** están en $B$
d) $\emptyset$

> **c) Solo los elementos de $A$ que no están en $B$**

---

### Pregunta 9

Por comprensión, la diferencia se define como:

a) $A - B = \{x \mid x \in A \land x \in B\}$
b) $A - B = \{x \mid x \in A \land x \notin B\}$
c) $A - B = \{x \mid x \notin A \lor x \in B\}$
d) $A - B = \{x \mid x \in B \land x \notin A\}$

> **b) $A - B = \{x \mid x \in A \land x \notin B\}$**

---

### Pregunta 10

Si $B$ = bachelors con terapia y $A$ = bachelors ($B \subseteq A$), entonces $A - B$ en el dataset es:

a) $|A| - |B| = 11700 - 2987 = 8713$
b) $|B| = 2987$
c) $0$
d) $45000$

> **a) $|A| - |B| = 11700 - 2987 = 8713$**

---
