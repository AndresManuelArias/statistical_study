---
titulo: Subconjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - subconjuntos
---

# 🔢 Subconjuntos

## 🎬 Datos del video

- **Título:** Subconjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=TSWTgmQIu7s)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)
<iframe width="560" height="315" src="https://www.youtube.com/embed/TSWTgmQIu7s?si=nmLWh1f93mtnQUS5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

El video explica la **relación de contención** entre conjuntos y la definición de **subconjunto**, con sus propiedades (reflexividad, transitividad y antisimetría) y la notación formal.

## 🧮 Contenido

### 1. Relación de contención

- **Definición:** se da cuando un conjunto incluye o contiene a otro ([00:11](https://youtu.be/TSWTgmQIu7s?t=11)).
- **Notación:** se representa con el símbolo $\subseteq$ ([00:21](https://youtu.be/TSWTgmQIu7s?t=21)). Se lee: *"el conjunto $A$ está contenido en el conjunto $B$"* ($A \subseteq B$) ([00:45](https://youtu.be/TSWTgmQIu7s?t=45)).

#### Propiedades de la contención:

1. **Reflexividad:** todo conjunto está contenido en sí mismo ($A \subseteq A$) ([00:22](https://youtu.be/TSWTgmQIu7s?t=22)).
2. **Transitividad:** si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$ ([02:34](https://youtu.be/TSWTgmQIu7s?t=154)).
3. **Antisimetría:** si $A \subseteq B$ y $B \subseteq A$, entonces ambos conjuntos son iguales ($A = B$) ([03:48](https://youtu.be/TSWTgmQIu7s?t=228)).

### 2. Subconjuntos

* **Definición:** un conjunto $A$ es subconjunto de $B$ si y solo si **cada elemento que pertenece a $A$ también pertenece a $B$** ([04:30](https://youtu.be/TSWTgmQIu7s?t=270)).
* **No subconjunto:** un conjunto no es subconjunto de otro si existe **al menos un elemento** del primer conjunto que no pertenece al segundo ([05:00](https://youtu.be/TSWTgmQIu7s?t=300)). Se denota con el símbolo de contención tachado ([05:28](https://youtu.be/TSWTgmQIu7s?t=328)).

---

## Definición formal

$A$ es **subconjunto** de $B$ (se escribe $A \subseteq B$) si y solo si **cada elemento de $A$ también pertenece a $B$**:

$$
A \subseteq B \iff (\forall x)(x \in A \Rightarrow x \in B)
$$

### Tipos de contención

| Relación | Símbolo | Significado |
|----------|---------|-------------|
| **Subconjunto** | $A \subseteq B$ | Todo elemento de $A$ está en $B$ (pueden ser iguales) |
| **Subconjunto propio** | $A \subset B$ | $A \subseteq B$ **y** $A \neq B$ ($B$ tiene al menos un elemento extra) |
| **No subconjunto** | $A \nsubseteq B$ | Existe **al menos un** $x \in A$ tal que $x \notin B$ |

### Propiedades de la contención

1. **Reflexividad:** todo conjunto está contenido en sí mismo: $A \subseteq A$.
2. **Transitividad:** si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$.
3. **Antisimetría:** si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$.
4. **Conjunto vacío:** $\emptyset \subseteq A$ para cualquier conjunto $A$.
5. **Universo:** $A \subseteq \Omega$ siempre.

> [!tip] Relación con la probabilidad
> - Si $A \subseteq B$, entonces $P(A) \leq P(B)$: un subconjunto no puede ser más probable que el conjunto que lo contiene.
> - Si $A \subseteq B$ y queremos $P(A \mid B)$ (probabilidad de $A$ **dado** $B$):
>   $P(A \mid B) = \frac{|A|}{|B|} = \frac{P(A)}{P(B)}$
>   porque $A \cap B = A$ cuando $A \subseteq B$.
> - Los sucesos de un experimento forman una **jerarquía de subconjuntos** dentro de $\Omega$.

---

## 💡 Ejemplo en Python: subconjuntos sobre el dataset de matrimonios

Definimos:
- $\Omega$ = todos los matrimonios (45,000)
- $A$ = matrimonios con nivel educativo `bachelors` (11,700)
- $B$ = matrimonios `bachelors` **que además** hicieron terapia prematrimonial (2,987)

Como $B$ exige cumplir la condición de $A$ **más** una condición extra, necesariamente $B \subseteq A \subseteq \Omega$.

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

# ---------- Definición de conjuntos ----------
universo = {f["marriage_id"] for f in filas}                    # Ω : todos
casados = conjunto_ids(filas, lambda f: f["divorced"] == "0")
divorciados = conjunto_ids(filas, lambda f: f["divorced"] == "1")

# A: nivel educativo bachelors
A_licenciados = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")

# B: bachelors Y con terapia prematrimonial  →  B es subconjunto de A
B_licen_terapia = conjunto_ids(
    filas,
    lambda f: f["education_level"] == "bachelors"
              and f["premarital_counseling"] == "1",
)

print(f"|Ω| (universo)             = {len(universo)}")
print(f"|A| (bachelors)            = {len(A_licenciados)}")
print(f"|B| (bachelors + terapia)  = {len(B_licen_terapia)}")

# ---------- Verificación de subconjuntos (issubset / issuperset) ----------
print(f"\nB ⊆ A  →  {B_licen_terapia.issubset(A_licenciados)}")
print(f"A ⊆ Ω  →  {A_licenciados.issubset(universo)}")
print(f"Ω ⊇ A  →  {universo.issuperset(A_licenciados)}")

# ---------- Propiedades de la contención ----------
print(f"\nReflexiva:  A ⊆ A          →  {A_licenciados.issubset(A_licenciados)}")
print(f"Antisimetría: A⊆B y B⊆A ⟹ A==B →  {A_licenciados == A_licenciados}")

transitiva = (B_licen_terapia.issubset(A_licenciados)
              and A_licenciados.issubset(universo)
              and B_licen_terapia.issubset(universo))
print(f"Transitiva: B⊆A, A⊆Ω ⟹ B⊆Ω  →  {transitiva}")

# ---------- No subconjunto ----------
print(f"\n¿casados ⊆ divorciados?    →  {casados.issubset(divorciados)}")
print(f"¿∅ ⊆ A?                    →  {set().issubset(A_licenciados)}")

# ---------- Probabilidad condicional desde subconjuntos ----------
# Como B ⊆ A, la probabilidad de B dado A es |B| / |A|
p = len(B_licen_terapia) / len(A_licenciados)
print(f"\nP(B|A) = |B|/|A| = {len(B_licen_terapia)}/{len(A_licenciados)} = {p:.4f}")
print(f"P(B) = |B|/|Ω| = {len(B_licen_terapia)}/{len(universo)} = {len(B_licen_terapia)/len(universo):.4f}")
```

**Salida real del script (verificada con el dataset):**

```
|Ω| (universo)             = 45000
|A| (bachelors)            = 11700
|B| (bachelors + terapia)  = 2987

B ⊆ A  →  True
A ⊆ Ω  →  True
Ω ⊇ A  →  True

Reflexiva:  A ⊆ A          →  True
Antisimetría: A⊆B y B⊆A ⟹ A==B →  True
Transitiva: B⊆A, A⊆Ω ⟹ B⊆Ω  →  True

¿casados ⊆ divorciados?    →  False
¿∅ ⊆ A?                    →  True

P(B|A) = |B|/|A| = 2987/11700 = 0.2553
P(B) = |B|/|Ω| = 2987/45000 = 0.0664
```

> [!note] Lectura estadística
> - **P(B|A) = 0.2553** → de los matrimonios con `bachelors`, el 25.53% también hicieron terapia prematrimonial.
> - **P(B) = 0.0664** → en todo el universo, solo el 6.64% de los matrimonios cumplen ambas condiciones.
> - Al ser $B \subseteq A$, se cumple $P(B) \leq P(A)$ y la probabilidad condicional se reduce a un cociente de cardinalidades.
> - `casados ⊆ divorciados → False` confirma que son **disjuntos** (ninguno contiene al otro), coherente con ser una partición.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la **definición formal** de que $A$ sea subconjunto de $B$ ($A \subseteq B$)?

a) Que $A$ y $B$ tengan exactamente los mismos elementos
b) Que cada elemento de $A$ también pertenezca a $B$
c) Que cada elemento de $B$ también pertenezca a $A$
d) Que $A$ tenga más elementos que $B$

> **b) Que cada elemento de $A$ también pertenezca a $B$**

---

### Pregunta 2

La propiedad **reflexiva** de la contención establece que:

a) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$
b) Todo conjunto está contenido en sí mismo: $A \subseteq A$
c) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
d) El conjunto vacío pertenece a todo conjunto

> **b) Todo conjunto está contenido en sí mismo: $A \subseteq A$**

---

### Pregunta 3

La propiedad **transitiva** de la contención establece que:

a) $A \subseteq A$ para todo conjunto $A$
b) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
c) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$
d) $\emptyset \subseteq A$ para cualquier conjunto $A$

> **c) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$**

---

### Pregunta 4

La propiedad **antisimétrica** de la contención establece que:

a) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
b) Todo conjunto está contenido en sí mismo
c) $\emptyset \subseteq A$
d) $A \subseteq \Omega$

> **a) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$**

---

### Pregunta 5

¿Cuándo se dice que $A$ **no es subconjunto** de $B$ ($A \nsubseteq B$)?

a) Cuando $A$ y $B$ son exactamente iguales
b) Cuando $A$ tiene menos elementos que $B$
c) Cuando existe al menos un elemento de $A$ que no pertenece a $B$
d) Cuando $B$ está contenido en $A$

> **c) Cuando existe al menos un elemento de $A$ que no pertenece a $B$**

---

### Pregunta 6

En el ejemplo del dataset de matrimonios, $B$ = matrimonios `bachelors` con terapia prematrimonial y $A$ = matrimonios `bachelors`. Se cumple que:

a) $A \subseteq B$
b) $B \subseteq A$
c) $A \cap B = \emptyset$
d) $B = \Omega$

> **b) $B \subseteq A$**

---

### Pregunta 7

Si $B \subseteq A$, la probabilidad condicional $P(B \mid A)$ se calcula como:

a) $P(B \mid A) = \frac{|A|}{|B|}$
b) $P(B \mid A) = \frac{|B|}{|A|}$
c) $P(B \mid A) = \frac{|B|}{|\Omega|}$
d) $P(B \mid A) = \frac{|A|}{|\Omega|}$

> **b) $P(B \mid A) = \frac{|B|}{|A|}$**

---

### Pregunta 8

Si $B \subseteq A$, entonces la intersección y la unión verifican:

a) $A \cap B = A$ y $A \cup B = B$
b) $A \cap B = B$ y $A \cup B = A$
c) $A \cap B = \emptyset$ y $A \cup B = \Omega$
d) $A \cap B = \Omega$ y $A \cup B = \emptyset$

> **b) $A \cap B = B$ y $A \cup B = A$**

---

### Pregunta 9

Un **subconjunto propio** $A \subset B$ cumple que:

a) $A = B$
b) $A \subseteq B$ y $A \neq B$
c) $B \subseteq A$ y $A \neq B$
d) $A \cap B = \emptyset$

> **b) $A \subseteq B$ y $A \neq B$**

---

### Pregunta 10

Si $P(A) \leq P(B)$ se cumple siempre que:

a) $B \subseteq A$
b) $A \subseteq B$
c) $A \cap B = \emptyset$
d) $A = \Omega$

> **b) $A \subseteq B$**

---
