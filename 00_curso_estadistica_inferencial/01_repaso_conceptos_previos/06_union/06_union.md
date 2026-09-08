---
titulo: Unión de conjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - union
---

# 🔗 Unión de conjuntos

## 🎬 Datos del video

- **Título:** Unión de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=AeUt0AzQ9Es)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se introduce la **unión** de conjuntos: los elementos que pertenecen a $A$, a $B$, o a **ambos simultáneamente**, sin duplicar los repetidos. Se estudian sus casos, propiedades y su relación con la probabilidad.

## 🧮 Contenido

## Unión ($A \cup B$)

- **Definición:** elementos que pertenecen a $A$, a $B$, o a **ambos simultáneamente** (los elementos repetidos solo se cuentan una vez).
- **Ejemplo:** $A = \{1, 2, 3\}$, $B = \{3, 4, 5\}$ → $A \cup B = \{1, 2, 3, 4, 5\}$. El $3$ está en ambos pero **no se duplica**.
- **Por comprensión:**

$$
A \cup B = \{x \mid x \in A \lor x \in B\}
$$

Un elemento pertenece a la unión si cumple **al menos una** de las dos condiciones ($\lor$ = "o" inclusivo).

## Casos y ejemplos

- **Unión con intersección distinta del vacío (los repetidos no se duplican):**
  - Ejemplo: $A = \{a, b, c\}$, $B = \{c, d\}$ → $A \cup B = \{a, b, c, d\}$ (el $c$ común aparece una sola vez).
  - Dataset: los 2,987 matrimonios bachelors **y** con terapia se cuentan una sola vez en $A \cup T$.
- **Unión de conjuntos iguales (idempotencia):** $A \cup A = A$.
  - Ejemplo: $\{2, 4, 6\} \cup \{2, 4, 6\} = \{2, 4, 6\}$.
- **Unión de un conjunto y su subconjunto:** si $B \subseteq A$, entonces $A \cup B = A$.
  - Ejemplo: $A = \{1, 2, 3, 4\}$, $B = \{2, 4\}$ → $A \cup B = \{1, 2, 3, 4\} = A$ (no aporta elementos nuevos).
  - Dataset: si $B$ = bachelors con terapia ($B \subseteq A$), entonces $A \cup B = A$ (los bachelors ya estaban incluidos).
- **Unión de conjuntos disjuntos:** si $A \cap B = \emptyset$, la unión junta todo sin reducir:
  - Ejemplo: $A = \{1, 2\}$, $B = \{3, 4\}$ → $A \cup B = \{1, 2, 3, 4\}$ y $n(A \cup B) = n(A) + n(B) = 2 + 2 = 4$.
  - Dataset: divorciados (20,708) y casados (24,292) son disjuntos → $n(D \cup D^c) = 20{,}708 + 24{,}292 = 45{,}000 = |\Omega|$.

## Propiedades de la unión

- **Identidad con el vacío:** $A \cup \emptyset = A$ (no se agrega nada).
- **Identidad con el universo:** $A \cup \Omega = \Omega$ (el universo ya lo contiene todo).
- **Idempotencia:** $A \cup A = A$.
- **Complemento:** $A \cup A^c = \Omega$ (todo matrimonio o es divorciado o no lo es, sin excepciones).

> [!tip] Relación con la probabilidad
> Si $A$ y $B$ son **disjuntos**: $P(A \cup B) = P(A) + P(B)$.
> Si **no** lo son: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (se resta el suceso compartido para no contarlo dos veces).

---

## 💡 Ejemplo en Python: unión sobre el dataset

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

licenciados = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")
terapia = conjunto_ids(filas, lambda f: f["premarital_counseling"] == "1")
divorciados = conjunto_ids(filas, lambda f: f["divorced"] == "1")

# Unión con intersección no vacía
union = licenciados | terapia
inter = licenciados & terapia
print(f"|A| (bachelors)          = {len(licenciados)}")
print(f"|T| (terapia)            = {len(terapia)}")
print(f"|A ∩ T|                  = {len(inter)}")
print(f"|A ∪ T|                  = {len(union)}")
print(f"Fórmula: |A|+|T|-|A∩T| = {len(licenciados)}+{len(terapia)}-{len(inter)} "
      f"= {len(licenciados)+len(terapia)-len(inter)}")

# Unión de disjuntos: sin restar intersección
print(f"\n|divorciados|            = {len(divorciados)}")
comp_div = {f["marriage_id"] for f in filas} - divorciados
print(f"|D ∪ D^c| = {len(divorciados | comp_div)}  (= |Ω|)")

# Idempotencia
print(f"A ∪ A = A                → {licenciados | licenciados == licenciados}")
```

**Salida real del script (verificada con el dataset):**

```
|A| (bachelors)          = 11700
|T| (terapia)            = 10972
|A ∩ T|                  = 2987
|A ∪ T|                  = 19685
Fórmula: |A|+|T|-|A∩T| = 11700+10972-2987 = 19685

|divorciados|            = 20708
|D ∪ D^c| = 45000  (= |Ω|)

A ∪ A = A                → True
```

> [!note] Lectura estadística
> - $|A \cup T| = 19{,}685$: los matrimonios que son bachelors, hicieron terapia, o ambas cosas. El solapamiento ($2{,}987$) se resta para **no contarlo dos veces**.
> - $D \cup D^c = \Omega$: el suceso y su complemento cubren todo el universo sin excepción.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Con los conjuntos $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, la unión $A \cup B$ es:

a) $\{1, 2, 3, 4, 5\}$
b) $\{3\}$
c) $\{1, 2\}$
d) $\emptyset$

> **a) $\{1, 2, 3, 4, 5\}$**

---

### Pregunta 2

Por comprensión, la unión se define como:

a) $A \cup B = \{x \mid x \in A \land x \in B\}$
b) $A \cup B = \{x \mid x \in A \lor x \in B\}$
c) $A \cup B = \{x \mid x \notin A\}$
d) $A \cup B = \{x \mid x \in A - B\}$

> **b) $A \cup B = \{x \mid x \in A \lor x \in B\}$**

---

### Pregunta 3

Si $A = \{1, 2\}$ y $B = \{3, 4\}$ son **disjuntos**, entonces $|A \cup B|$ es:

a) $2 + 2 = 4$
b) $2 \cdot 2 = 4$
c) $2 - 2 = 0$
d) $\emptyset$

> **a) $2 + 2 = 4$**

---

### Pregunta 4

La unión de un conjunto con el vacío ($A \cup \emptyset$) es:

a) $\emptyset$
b) $A$
c) $\Omega$
d) $A^c$

> **b) $A$**

---

### Pregunta 5

La unión de un conjunto con el universo ($A \cup \Omega$) es:

a) $A$
b) $\emptyset$
c) $\Omega$
d) No existe

> **c) $\Omega$**

---

### Pregunta 6

La propiedad de **idempotencia** de la unión establece que:

a) $A \cup \emptyset = A$
b) $A \cup A = A$
c) $A \cup \Omega = \Omega$
d) $A \cup A^c = \Omega$

> **b) $A \cup A = A$**

---

### Pregunta 7

Si $B \subseteq A$, entonces la unión $A \cup B$ es:

a) $B$
b) $A$
c) $\emptyset$
d) $\Omega$

> **b) $A$**

---

### Pregunta 8

En el dataset, $|A|$ (bachelors) = 11700, $|T|$ (terapia) = 10972 y $|A \cap T|$ = 2987. La cardinalidad de $A \cup T$ es:

a) 11700 + 10972 = 22672
b) 22672 - 2987 = **19685**
c) 2987
d) 45000

> **b) 22672 - 2987 = 19685**

---

### Pregunta 9

Si $A$ y $B$ son **disjuntos**, la probabilidad de la unión es:

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
c) $P(A \cup B) = 0$
d) $P(A \cup B) = P(A) \cdot P(B)$

> **a) $P(A \cup B) = P(A) + P(B)$**

---

### Pregunta 10

Si $A$ y $B$ **no** son disjuntos, la probabilidad de la unión es:

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
c) $P(A \cup B) = P(A) \cdot P(B)$
d) $P(A \cup B) = P(A)$

> **b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$**

---
