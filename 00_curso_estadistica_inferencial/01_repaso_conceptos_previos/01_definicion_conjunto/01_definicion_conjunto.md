---
titulo: Definición de conjunto
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - conceptos-previos
---

# 🔢 Definición de conjunto

## 🎬 Datos del video

- **Título:** Definición de conjunto | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=CZ8_S0wxAc0)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CZ8_S0wxAc0?si=a_1x_kVqQTkxIcvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

El video introduce la **teoría de conjuntos**, base fundamental de la probabilidad y la estadística. Explica cómo definir conjuntos, describir sus elementos y expresar pertenencia o no pertenencia.

> [!info] Idea principal
> Un conjunto es una colección bien definida de elementos. Está bien definido cuando se puede determinar con precisión si un elemento pertenece o no a él.

## 🧮 Contenido

La teoría de conjuntos es la **gramática de las matemáticas** y, sobre todo, el **cimiento de la probabilidad**. Cada experimento aleatorio define un **espacio muestral** (conjunto de todos los resultados posibles), y cada suceso del que calculamos probabilidades no es más que un **subconjunto** de ese espacio.

## Definición y notación

Un **conjunto** es una colección de objetos llamados **elementos**. Se nombran con **letras mayúsculas** ($A$, $B$, $\Omega$) y sus elementos con minúsculas.

### Dos formas de definir un conjunto

1. **Por extensión:** se enlistan todos los elementos:

      $$
      A = \{1, 2, 3, 4\}
      $$

2. **Por comprensión:** se indica la propiedad que cumplen:

      $$ A = \{x \mid x \in \mathbb{N},\ x \leq 4\} $$
   Se lee "el conjunto de todos los $x$ **tal que** ($\mid$) $x$ pertenece a los naturales **y** $x$ es menor o igual a 4".

**Reglas:** los elementos **no se repiten** y el **orden es irrelevante** (por eso $\{1,2,3\} = \{3,1,2\}$).

## Pertenencia y no pertenencia

- **Pertenece ($\in$):** $4 \in A$ → "4 pertenece a A"
- **No pertenece ($\notin$):** $7 \notin A$ → "7 no pertenece a A"

## Operaciones entre conjuntos (vista general)

| Operación | Símbolo | Definición | Ejemplo ($A=\{1,2,3\}$, $B=\{3,4\}$) |
|-----------|---------|------------|---------------------------------------|
| **Unión** | $A \cup B$ | Elementos de A, de B o de ambos | $\{1,2,3,4\}$ |
| **Intersección** | $A \cap B$ | Elementos comunes a A y B | $\{3\}$ |
| **Diferencia** | $A - B$ (o $A \setminus B$) | Elementos de A que no están en B | $\{1,2\}$ |
| **Complemento** | $A^c$ (o $\bar{A}$) | Elementos del universo que no están en A | depende de $\Omega$ |

Cada operación se desarrolla en su propio tema (05 a 07 del temario del curso).

---

## 💡 Ejemplo en Python: conjuntos sobre el dataset de matrimonios

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

Pertenencia: ¿... ∈ licenciados? False
Pertenencia: ¿... ∈ divorciados? True

|licenciados| con set = 11700
```

> [!note] Sobre la pertenencia
> La línea que verifica si un `marriage_id` pertenece a un conjunto usa un ID de ejemplo (el primer elemento del conjunto de divorciados), por lo que su valor exacto varía entre ejecuciones. Lo importante es que con `in` podemos comprobar si **cualquier** matrimonio dado cumple (∈) o no (∉) una propiedad.

> [!note] Lectura estadística
> - Las **probabilidades** se obtienen dividiendo el tamaño del conjunto entre el universo: $P(\text{divorciado}) = 20708/45000 \approx 0.46$.
> - Cualquier suceso de un experimento se puede modelar como un **subconjunto** de $\Omega$ → la teoría de conjuntos es la base de la probabilidad.

---

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

Se define un conjunto **por extensión** cuando:

a) Se indica una propiedad que cumplen todos sus elementos
b) Se enlistan uno a uno todos sus elementos entre llaves
c) Se cuenta cuántos elementos tiene
d) Se dibuja su diagrama de Venn

> **b) Se enlistan uno a uno todos sus elementos entre llaves**

---

### Pregunta 4

Un conjunto **por comprensión** se define:

a) Enlistando uno a uno todos sus elementos entre llaves
b) Indicando una propiedad o regla que cumplen todos sus elementos
c) Contando cuántos elementos tiene
d) Ordenando sus elementos de mayor a menor

> **b) Indicando una propiedad o regla que cumplen todos sus elementos**

---

### Pregunta 5

Considera el conjunto $A = \{1, 2, 3\}$. ¿Cuál de los siguientes enunciados es **correcto**?

a) $4 \in A$
b) $2 \notin A$
c) $3 \in A$
d) $5 \in A$

> **c) $3 \in A$**

---

### Pregunta 6

En la notación $7 \notin A$, el símbolo $\notin$ significa:

a) Que 7 pertenece a A
b) Que 7 **no** pertenece a A
c) Que A está contenido en 7
d) Que A tiene 7 elementos

> **b) Que 7 no pertenece a A**

---

### Pregunta 7

En un conjunto, los elementos **no se repiten** y:

a) El orden es irrelevante: $\{1,2,3\} = \{3,1,2\}$
b) El orden es fundamental para identificarlo
c) Debe haber al menos dos elementos
d) Solo pueden ser números

> **a) El orden es irrelevante: $\{1,2,3\} = \{3,1,2\}$**

---

### Pregunta 8

El símbolo $\mid$ en $A = \{x \mid x \in \mathbb{N},\ x \leq 4\}$ se lee:

a) "tal que"
b) "y"
c) "o"
d) "pertenece a"

> **a) "tal que"**

---

### Pregunta 9

En el dataset de matrimonios, el **universo** $\Omega$ es:

a) El conjunto de matrimonios divorciados
b) El conjunto de matrimonios casados
c) Todos los matrimonios (45,000 registros)
d) Los matrimonios con nivel bachelors

> **c) Todos los matrimonios (45,000 registros)**

---

### Pregunta 10

¿Qué permite decir que un conjunto está **bien definido**?

a) Que tenga muchos elementos
b) Que se pueda determinar con precisión si un elemento pertenece o no a él
c) Que sus elementos sean números enteros
d) Que esté ordenado alfabéticamente

> **b) Que se pueda determinar con precisión si un elemento pertenece o no a él**

---
