---
titulo: Conjunto complemento
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - complemento
---

# 🔄 Conjunto complemento

## 🎬 Datos del video

- **Título:** Conjunto complemento | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=HJAors8090A)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se introduce el **complemento** de un conjunto ($A^c$): los elementos del universo que **no** pertenecen a $A$. Se estudian sus propiedades (complemento del vacío, doble complemento, complemento del universal) y su representación con **diagramas de Venn-Euler**.

## 🧮 Contenido

## Diagramas de Venn-Euler

- Representación gráfica mediante un **rectángulo** para el universo ($U$) y **circunferencias** para los subconjuntos.
- La zona exterior a la circunferencia de $A$ (dentro del rectángulo) es $A^c$.

## Conjunto Complemento ($A^c$)

- **Definición:** elementos que pertenecen al conjunto universal pero *no* pertenecen al conjunto dado.
- Expresión por comprensión:

$$
A^c = \{x \in U \mid x \notin A\}
$$

## Propiedades de la complementación

1. **Complemento del vacío:** $\emptyset^c = \Omega$.
2. **Doble complemento:** $(A^c)^c = A$.
3. **Complemento del universal:** $\Omega^c = \emptyset$.
4. **Unión con su complemento:** $A \cup A^c = \Omega$ (todo el universo).
5. **Intersección con su complemento:** $A \cap A^c = \emptyset$ (disjuntos).

> [!tip] Relación con la probabilidad
> $P(A^c) = 1 - P(A)$: la probabilidad de que **no** ocurra $A$.

---

## 💡 Ejemplo en Python: complemento sobre el dataset

```python
import csv
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    # Lee el CSV y devuelve una lista de diccionarios (uno por matrimonio)
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

filas = cargar()

# Conjuntos
universo = {f["marriage_id"] for f in filas}
licenciados = {f["marriage_id"] for f in filas if f["education_level"] == "bachelors"}

# Complemento: universo - A  →  A^c
comp_lic = universo - licenciados
print(f"|Ω| (universo)          = {len(universo)}")
print(f"|A| (licenciados)       = {len(licenciados)}")
print(f"|A^c|                   = {len(comp_lic)}")
print(f"|A| + |A^c|             = {len(licenciados) + len(comp_lic)}  (= |Ω|?)")

# Propiedades
print(f"Doble complemento (A^c)^c = A → {(universo - comp_lic) == licenciados}")
print(f"A ∩ A^c = ∅               → {(licenciados & comp_lic) == set()}")
print(f"A ∪ A^c = Ω               → {(licenciados | comp_lic) == universo}")

# Probabilidad del complemento
print(f"\nP(A^c) = 1 - P(A) = 1 - {len(licenciados)/len(universo):.4f} "
      f"= {1 - len(licenciados)/len(universo):.4f}")
print(f"P(A^c) = |A^c|/|Ω| = {len(comp_lic)/len(universo):.4f}")
```

**Salida real del script (verificada con el dataset):**

```
|Ω| (universo)          = 45000
|A| (licenciados)       = 11700
|A^c|                   = 33300
|A| + |A^c|             = 45000  (= |Ω|?)

Doble complemento (A^c)^c = A → True
A ∩ A^c = ∅               → True
A ∪ A^c = Ω               → True

P(A^c) = 1 - P(A) = 1 - 0.2600 = 0.7400
P(A^c) = |A^c|/|Ω| = 0.7400
```

> [!note] Lectura estadística
> - $|A^c| = 33{,}300$: los matrimonios **no** bachelors (resto de niveles educativos) son la mayoría.
> - La relación $P(A^c) = 1 - P(A) = 0.74$ es la base de muchos cálculos de probabilidad: a veces es más fácil contar el complemento.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Si $\Omega = \{1, 2, 3, 4, 5\}$ y $A = \{1, 2\}$, entonces el **complemento** $A^c$ es:

a) $\{1, 2\}$
b) $\{3, 4, 5\}$
c) $\{1, 2, 3, 4, 5\}$
d) $\emptyset$

> **b) $\{3, 4, 5\}$**

---

### Pregunta 2

El **complemento del conjunto vacío** es:

a) El propio vacío
b) El **conjunto universal** ($\emptyset^c = \Omega$)
c) No existe
d) Un conjunto con un elemento

> **b) El conjunto universal ($\emptyset^c = \Omega$)**

---

### Pregunta 3

La propiedad del **doble complemento** establece que:

a) $(A^c)^c = A$
b) $A^c = \Omega$
c) $A^c = \emptyset$
d) $(A^c)^c = \emptyset$

> **a) $(A^c)^c = A$**

---

### Pregunta 4

El **complemento del conjunto universal** es:

a) El propio universal
b) $\Omega$
c) El **conjunto vacío** ($\Omega^c = \emptyset$)
d) $A$

> **c) El conjunto vacío ($\Omega^c = \emptyset$)**

---

### Pregunta 5

La probabilidad del complemento se calcula como:

a) $P(A^c) = P(A)$
b) $P(A^c) = 1 - P(A)$
c) $P(A^c) = P(A) + 1$
d) $P(A^c) = P(\Omega)$

> **b) $P(A^c) = 1 - P(A)$**

---

### Pregunta 6

La intersección de un conjunto con su complemento es:

a) El universo
b) El propio conjunto
c) El **conjunto vacío** ($A \cap A^c = \emptyset$)
d) $A^c$

> **c) El conjunto vacío ($A \cap A^c = \emptyset$)**

---

### Pregunta 7

La unión de un conjunto con su complemento es:

a) El conjunto vacío
b) El propio conjunto
c) El **universo** ($A \cup A^c = \Omega$)
d) $A^c$

> **c) El universo ($A \cup A^c = \Omega$)**

---

### Pregunta 8

En el dataset, si $|A|$ (bachelors) = 11700 y $|\Omega|$ = 45000, entonces $|A^c|$ es:

a) 11700
b) 33300
c) 45000
d) 0

> **b) 33300**

---

### Pregunta 9

En el dataset, la operación $(A \cup T)^c$ (complemento de la unión de bachelors y terapia) tiene cardinalidad:

a) 19685
b) 45000
c) 2987
d) **25315** (porque $45000 - 19685 = 25315$)

> **d) 25315 (porque $45000 - 19685 = 25315$)**

---

### Pregunta 10

En un **diagrama de Venn-Euler**, el complemento de $A$ ($A^c$) se representa como:

a) La circunferencia de $A$
b) La zona **exterior** a $A$ pero dentro del rectángulo del universo
c) El rectángulo completo
d) La intersección de $A$ con el universo

> **b) La zona exterior a $A$ pero dentro del rectángulo del universo**

---
