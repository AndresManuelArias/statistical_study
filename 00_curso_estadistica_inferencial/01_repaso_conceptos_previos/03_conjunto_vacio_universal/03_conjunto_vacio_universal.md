---
titulo: Conjuntos vacío y universal
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - conjunto-vacio
  - conjunto-universal
---

# ⬜ Conjuntos vacío y universal

## 🎬 Datos del video

- **Título:** Conjuntos vacío y universal | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=1nIX6IH43_Q)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se estudian dos conjuntos especiales: el **conjunto vacío** (el que no contiene ningún elemento) y el **conjunto universal** (el que contiene todos los elementos del contexto). Ambos son fundamentales para la probabilidad: el primero corresponde al suceso imposible y el segundo al suceso seguro.

## 🧮 Contenido

## Conjunto vacío ($\emptyset$)

- **Definición:** el conjunto que **no contiene ningún elemento**. Se denota `{}` o `$\emptyset$`.
- Es **subconjunto de cualquier conjunto**: $\emptyset \subseteq A$ para todo $A$.
- Es **único**: no hay dos conjuntos vacíos distintos.
- Su cardinalidad es cero: $n(\emptyset) = 0$.

## Conjunto universal ($\Omega$ o $U$)

- **Definición:** el conjunto que contiene **todos los elementos posibles del contexto**.
- No existe un único universal abstracto: depende del **dominio** (en el curso, $\Omega$ = los 45,000 matrimonios).
- Todo conjunto del contexto es subconjunto del universal: $A \subseteq \Omega$.

**Ejemplos prácticos:** conjuntos de letras del abecedario, números naturales y animales.

> [!tip] Relación con la probabilidad
> - $P(\emptyset) = 0$: el suceso imposible tiene probabilidad cero.
> - $P(\Omega) = 1$: el suceso seguro tiene probabilidad uno.

---

## 💡 Ejemplo en Python: vacío y universal sobre el dataset

```python
import csv
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    # Lee el CSV y devuelve una lista de diccionarios (uno por matrimonio)
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

filas = cargar()

# Conjunto universal: todos los matrimonios
universo = {f["marriage_id"] for f in filas}
casados = {f["marriage_id"] for f in filas if f["divorced"] == "0"}
divorciados = {f["marriage_id"] for f in filas if f["divorced"] == "1"}

# El conjunto vacío en Python
vacio = set()
print(f"|Ω| (universo)          = {len(universo)}")
print(f"|∅| (vacío)             = {len(vacio)}")
print(f"∅ ⊆ casados            = {vacio.issubset(casados)}")

# Intersección vacía: casados ∩ divorciados
inter = casados & divorciados
print(f"casados ∩ divorciados   = {len(inter)}  → ¿es ∅? {inter == set()}")

# Universal como contexto: todo matrimonio está en Ω
print(f"A ⊆ Ω (casados)         = {casados.issubset(universo)}")
print(f"A ⊆ Ω (divorciados)     = {divorciados.issubset(universo)}")
```

**Salida real del script (verificada con el dataset):**

```
|Ω| (universo)          = 45000
|∅| (vacío)             = 0
∅ ⊆ casados            = True

casados ∩ divorciados   = 0  → ¿es ∅? True

A ⊆ Ω (casados)         = True
A ⊆ Ω (divorciados)     = True
```

> [!note] Lectura estadística
> - `casados ∩ divorciados = ∅` con cardinalidad 0: ningún matrimonio es casado y divorciado a la vez → son **mutuamente excluyentes**.
> - $\emptyset$ como suceso imposible: $P(\emptyset) = 0$.
> - $\Omega$ como suceso seguro: todo matrimonio del CSV pertenece a $\Omega$, por lo que $P(\Omega) = 1$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

El **conjunto vacío** se caracteriza por:

a) Contener un elemento llamado "vacío"
b) Contener exactamente 10 elementos
c) No contener **ningún elemento** y ser subconjunto de cualquier conjunto
d) Ser igual al conjunto universal

> **c) No contener ningún elemento y ser subconjunto de cualquier conjunto**

---

### Pregunta 2

Un conjunto **universal** ($U$ o $\Omega$) se define como:

a) El conjunto con más elementos del contexto
b) El conjunto que contiene **todos los elementos posibles del contexto**
c) El conjunto de los números naturales
d) El conjunto que no tiene elementos

> **b) El conjunto que contiene todos los elementos posibles del contexto**

---

### Pregunta 3

La cardinalidad del conjunto vacío es:

a) 1
b) 0
c) No está definida
d) Infinita

> **b) 0**

---

### Pregunta 4

La probabilidad del suceso imposible ($P(\emptyset)$) es:

a) 0
b) 1
c) 0.5
d) Depende del experimento

> **a) 0**

---

### Pregunta 5

La probabilidad del suceso seguro ($P(\Omega)$) es:

a) 0
b) 1
c) 0.5
d) Depende del experimento

> **b) 1**

---

### Pregunta 6

¿Cuál de las siguientes afirmaciones es **verdadera**?

a) $\emptyset \subseteq A$ para cualquier conjunto $A$
b) $A \subseteq \emptyset$ para cualquier conjunto $A$
c) $\emptyset \in A$ para cualquier conjunto $A$
d) $\emptyset = \Omega$ siempre

> **a) $\emptyset \subseteq A$ para cualquier conjunto $A$**

---

### Pregunta 7

En el dataset de matrimonios, el conjunto de los que **siguen casados** ∩ el de los **divorciados** es:

a) El conjunto de los casados
b) El conjunto de los divorciados
c) El conjunto vacío (son mutuamente excluyentes)
d) El universo completo

> **c) El conjunto vacío (son mutuamente excluyentes)**

---

### Pregunta 8

En una base de datos de matrimonios, definimos $D$ como el conjunto de matrimonios divorciados y $C$ como el conjunto de los que siguen casados. Si $|D| = 20708$, $|C| = 24292$ y $|D \cap C| = 0$, entonces el universo $|\Omega|$ es:

a) 20708
b) 24292
c) 45000
d) 0

> **c) 45000**

---

### Pregunta 9

¿Por qué no existe un único conjunto universal en abstracto?

a) Porque el universal siempre es el vacío
b) Porque depende del **contexto o dominio** de trabajo
c) Porque todo conjunto es universal
d) Porque el universal no existe

> **b) Porque depende del contexto o dominio de trabajo**

---

### Pregunta 10

Si $A \subseteq \Omega$, entonces la cardinalidad de $A$ cumple:

a) $|A| > |\Omega|$
b) $|A| = 0$ siempre
c) $|A| \leq |\Omega|$
d) $|A| = |\Omega|$ siempre

> **c) $|A| \leq |\Omega|$**

---
