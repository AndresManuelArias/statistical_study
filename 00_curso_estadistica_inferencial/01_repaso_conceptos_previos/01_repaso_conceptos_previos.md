---
titulo: Repaso de conceptos previos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - conceptos-previos
---

# 🔢 Repaso de conceptos previos

## 🎬 Datos del video

- **Título:** Definición de conjunto | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=CZ8_S0wxAc0)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

El video introduce la **teoría de conjuntos**, base fundamental de la probabilidad y la estadística. Explica cómo definir conjuntos, describir sus elementos y expresar pertenencia o no pertenencia.

> [!info] Idea principal
> Un conjunto es una colección bien definida de elementos. Está bien definido cuando se puede determinar con precisión si un elemento pertenece o no a él.

## 🧮 Explicación del tema: teoría de conjuntos

La teoría de conjuntos es la **gramática de las matemáticas** y, sobre todo, el **cimiento de la probabilidad**. Cada experimento aleatorio define un **espacio muestral** (conjunto de todos los resultados posibles), y cada suceso del que calculamos probabilidades no es más que un **subconjunto** de ese espacio.

## Definición y notación

Un **conjunto** es una colección de objetos llamados **elementos**. Se nombran con **letras mayúsculas** ($A$, $B$, $\Omega$) y sus elementos con minúsculas.

### Dos formas de definir un conjunto

1. **Por extensión:** se enlistan todos los elementos:

      $$
      A = \{1, 2, 3, 4\}
      $$

2. **Por comprensión:** se indica la propiedad que cumplen:

      $$
      A = \{x \mid x \in \mathbb{N},\ x \leq 4\}
      $$
   Se lee "el conjunto de todos los $x$ **tal que** ($\mid$) $x$ pertenece a los naturales **y** $x$ es menor o igual a 4".

**Reglas:** los elementos **no se repiten** y el **orden es irrelevante** (por eso $\{1,2,3\} = \{3,1,2\}$).

## Pertenencia y no pertenencia

- **Pertenece ($\in$):** $4 \in A$ → "4 pertenece a A"
- **No pertenece ($\notin$):** $7 \notin A$ → "7 no pertenece a A"

## Operaciones entre conjuntos (básicas para probabilidad)

| Operación | Símbolo | Definición | Ejemplo ($A=\{1,2,3\}$, $B=\{3,4\}$) |
|-----------|---------|------------|---------------------------------------|
| **Unión** | $A \cup B$ | Elementos de A, de B o de ambos | $\{1,2,3,4\}$ |
| **Intersección** | $A \cap B$ | Elementos comunes a A y B | $\{3\}$ |
| **Diferencia** | $A - B$ (o $A \setminus B$) | Elementos de A que no están en B | $\{1,2\}$ |
| **Complemento** | $A^c$ (o $\bar{A}$) | Elementos del universo que no están en A | depende de $\Omega$ |

> [!tip] Relación con la probabilidad
> - $P(A \cup B)$ → probabilidad de que ocurra A **o** B
> - $P(A \cap B)$ → probabilidad de que ocurran A **y** B a la vez
> - Si $A \cap B = \emptyset$ (conjunto vacío) → A y B son **mutuamente excluyentes**
> - $A^c$ → probabilidad de que **no** ocurra A: $P(A^c) = 1 - P(A)$

**Conjuntos especiales:**
- **Conjunto vacío ($\emptyset$)** — no tiene elementos
- **Universo ($\Omega$ / $U$)** — contiene todos los elementos posibles del contexto
- **Subconjunto ($\subseteq$)** — A ⊆ B si todo elemento de A está en B

---

# 🐍 Ejemplo en Python: Conjuntos sobre el dataset de matrimonios

Aplicamos la teoría de conjuntos a los datos reales de matrimonios (`marriage_longevity_master.csv`, 45,000 registros). Usamos conjuntos de identificadores de matrimonios que cumplen una propiedad, tal como definiríamos sucesos en probabilidad.

```python
import csv
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    """Lee el CSV y devuelve una lista de diccionarios (uno por matrimonio)."""
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

def conjunto_ids(filas, predicado):
    """Devuelve un SET de marriage_id que cumplen la condición.
    El set elimina duplicados (propiedad de los conjuntos)."""
    return {f["marriage_id"] for f in filas if predicado(f)}

filas = cargar()

# Definimos conjuntos (sucesos) sobre el espacio muestral de matrimonios
universo = {f["marriage_id"] for f in filas}          # Ω : todos los matrimonios

casados = conjunto_ids(filas, lambda f: f["divorced"] == "0")       # sigue casado
divorciados = conjunto_ids(filas, lambda f: f["divorced"] == "1")   # se divorció
licenciados = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")
terapia = conjunto_ids(filas, lambda f: f["premarital_counseling"] == "1")

print(f"|Ω| (universo)                 = {len(universo)}")
print(f"|casados|                      = {len(casados)}")
print(f"|divorciados|                  = {len(divorciados)}")

# ---- OPERACIONES DE CONJUNTOS (y su lectura probabilística) ----
# Unión: casados O divorciados  →  debe cubrir el universo
union = casados | divorciados
print(f"\nA ∪ B (casados ∪ divorciados)  = {len(union)}  "
      f"¿cubre el universo? {union == universo}")

# Intersección: casados Y divorciados  →  mutuamente excluyentes?
inter = casados & divorciados
print(f"A ∩ B (casados ∩ divorciados)  = {len(inter)}  "
      f"¿disjuntos? {inter == set()}")

# Diferencia: licenciados que NO están divorciados
licen_sin_divorcio = licenciados - divorciados
print(f"licenciados - divorciados      = {len(licen_sin_divorcio)}")

# Complemento: matrimonios no licenciados  →  |A^c| = |Ω| - |A|
complemento_lic = universo - licenciados
print(f"A^c (no licenciados)           = {len(complemento_lic)}  "
      f"|Ω|-|A| = {len(universo) - len(licenciados)}")

# Pertenencia: primer matrimonio, ¿es bachelors?
ejemplo_id = next(iter(divorciados))
print(f"\nPertenencia: ¿{ejemplo_id} ∈ licenciados? "
      f"{ejemplo_id in licenciados}")
print(f"Pertenencia: ¿{ejemplo_id} ∈ divorciados? "
      f"{ejemplo_id in divorciados}")

# Sets no repiten elementos: misma propiedad da el mismo cardinal
print(f"\n|licenciados| con set = {len(licenciados)}")
```

**Salida esperada (concepto):**

```
|Ω| (universo)                 = 45000
|casados|                      = 24292
|divorciados|                  = 20708

A ∪ B (casados ∪ divorciados)  = 45000  ¿cubre el universo? True
A ∩ B (casados ∩ divorciados)  = 0  ¿disjuntos? True
licenciados - divorciados      = 7199
A^c (no licenciados)           = 33300  |Ω|-|A| = 33300
```

> [!note] Sobre la pertenencia
> La línea que verifica si un `marriage_id` pertenece a un conjunto usa un ID de ejemplo (el primer elemento del conjunto de divorciados), por lo que su valor exacto varía entre ejecuciones. Lo importante es que con `in` podemos comprobar si **cualquier** matrimonio dado cumple (∈) o no (∉) una propiedad.

> [!note] Lectura estadística
> - `casados ∪ divorciados = Ω` y `casados ∩ divorciados = ∅` → son una **partición** del universo (todo matrimonio está en una u otra categoría, nunca en ambas). En probabilidad, esto significa que son **sucesos complementarios**.
> - Las **probabilidades** se obtienen dividiendo el tamaño del conjunto entre el universo: $P(\text{divorciado}) = 20708/45000 \approx 0.46$.
> - Cualquier suceso de un experimento se puede modelar como un **subconjunto** de $\Omega$ → la teoría de conjuntos es la base de la probabilidad.

## 🎬 Segundo video: subconjuntos

Resumen del video **"Subconjuntos | Estadística Inferencial"**, de José María Hernández Rivera.

### 1. Relación de contención

- **Definición:** se da cuando un conjunto incluye o contiene a otro ([00:11](https://youtu.be/TSWTgmQIu7s?t=11)).
- **Notación:** se representa con el símbolo $\subseteq$ ([00:21](https://youtu.be/TSWTgmQIu7s?t=21)). Se lee: *"el conjunto $A$ está contenido en el conjunto $B$"* ($A \subseteq B$) ([00:45](https://youtu.be/TSWTgmQIu7s?t=45)).

#### Propiedades de la contención:

1. **Reflexividad:** todo conjunto está contenido en sí mismo ($A \subseteq A$) ([00:22](https://youtu.be/TSWTgmQIu7s?t=22)).
2. **Transitividad:** si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$ ([02:34](https://youtu.be/TSWTgmQIu7s?t=154)).
3. **Antisimetría:** si $A \subseteq B$ y $B \subseteq A$, entonces ambos conjuntos son iguales ($A = B$) ([03:48](https://youtu.be/TSWTgmQIu7s?t=228)).

---

### 2. Subconjuntos

* **Definición:** un conjunto $A$ es subconjunto de $B$ si y solo si **cada elemento que pertenece a $A$ también pertenece a $B$** ([04:30](https://youtu.be/TSWTgmQIu7s?t=270)).
* **No subconjunto:** un conjunto no es subconjunto de otro si existe **al menos un elemento** del primer conjunto que no pertenece al segundo ([05:00](https://youtu.be/TSWTgmQIu7s?t=300)). Se denota con el símbolo de contención tachado ([05:28](https://youtu.be/TSWTgmQIu7s?t=328)).

---

**Video completo:** [Subconjuntos | Estadística Inferencial](https://www.youtube.com/watch?v=TSWTgmQIu7s)

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué condición debe cumplir una colección de objetos para ser considerada un **conjunto**?

a) Que sus elementos estén ordenados de menor a mayor
b) Que esté bien definida, es decir, que se pueda determinar con precisión si un elemento pertenece o no a ella
c) Que contenga al menos diez elementos
d) Que sus elementos sean todos números

> **b) Que esté bien definida, es decir, que se pueda determinar con precisión si un elemento pertenece o no a ella**

---

### Pregunta 2

Se tiene el conjunto $A = \{x \mid x \in \mathbb{N},\ x \leq 4\}$. ¿Cuál es su representación **por extensión**?

a) $A = \{5, 6, 7, \ldots\}$
b) $A = \{0, 1, 2, 3, 4\}$
c) $A = \{1, 2, 3, 4\}$
d) $A = \{4, 3, 2, 1\}$

> **c) $A = \{1, 2, 3, 4\}$**

---

### Pregunta 3

Considera el conjunto $A = \{1, 2, 3\}$. ¿Cuál de los siguientes enunciados es **correcto**?

a) $4 \in A$
b) $2 \notin A$
c) $3 \in A$
d) $5 \in A$

> **c) $3 \in A$**

---

### Pregunta 4

Dados $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, la intersección $A \cap B$ es:

a) $\{1, 2, 3, 4, 5\}$
b) $\{3\}$
c) $\{1, 2\}$
d) $\emptyset$

> **b) $\{3\}$**

---

### Pregunta 5

Con los mismos conjuntos $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, la unión $A \cup B$ es:

a) $\{1, 2, 3, 4, 5\}$
b) $\{3\}$
c) $\{1, 2\}$
d) $\emptyset$

> **a) $\{1, 2, 3, 4, 5\}$**

---

### Pregunta 6

Si dos conjuntos $A$ y $B$ son **mutuamente excluyentes** (no comparten elementos), se cumple que:

a) $A \cup B = \emptyset$
b) $A \cap B = \emptyset$
c) $A \subseteq B$
d) $A = B$

> **b) $A \cap B = \emptyset$**

---

### Pregunta 7

En una base de datos de matrimonios, definimos $D$ como el conjunto de matrimonios divorciados y $C$ como el conjunto de los que siguen casados. Si $|D| = 20708$, $|C| = 24292$ y $|D \cap C| = 0$, entonces el universo $|\Omega|$ es:

a) 20708
b) 24292
c) 45000
d) 0

> **c) 45000**

---

### Pregunta 8

La **diferencia** $A - B$ (elementos de $A$ que no están en $B$) para $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$ es:

a) $\{1, 2\}$
b) $\{3, 4\}$
c) $\{5\}$
d) $\{1, 2, 3, 4, 5\}$

> **a) $\{1, 2\}$**

---

### Pregunta 9

Si $\Omega = \{1, 2, 3, 4, 5\}$ y $A = \{1, 2\}$, entonces el **complemento** $A^c$ es:

a) $\{1, 2\}$
b) $\{3, 4, 5\}$
c) $\{1, 2, 3, 4, 5\}$
d) $\emptyset$

> **b) $\{3, 4, 5\}$**

---

### Pregunta 10

Un conjunto **por comprensión** se define:

a) Enlistando uno a uno todos sus elementos entre llaves
b) Indicando una propiedad o regla que cumplen todos sus elementos
c) Contando cuántos elementos tiene
d) Ordenando sus elementos de mayor a menor

> **b) Indicando una propiedad o regla que cumplen todos sus elementos**

---

## ❓ Dudas pendientes

- [ ] ¿Cómo se representan gráficamente la unión, la intersección y el complemento?
- [ ] ¿Cómo se relacionan los conjuntos con el dominio y el codominio de una función?

## 🔗 Temas relacionados

- [[00_contenido_curso|Contenido del curso]]
- [[02_analisis_combinatorio|Siguiente tema: análisis combinatorio]]
- [[03_probabilidad|Probabilidad usa teoría de conjuntos]]
- [[06_muestreo|Población y muestras]]
