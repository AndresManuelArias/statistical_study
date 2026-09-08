---
titulo: Ejercicios de operaciones con conjuntos (parte 3)
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - ejercicios
---

# 🧮 Ejercicios de operaciones con conjuntos (parte 3)

## 🎬 Datos del video

- **Título:** Ejercicios de operaciones con conjuntos (parte 3) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=U6U5aaL12tE)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se resuelven **problemas de aplicación práctica** (encuestas y diagramas de Venn): traducir enunciados de texto a operaciones de conjuntos, resolver casos de **dos conjuntos** con la fórmula de cardinalidad por despeje, y casos avanzados de **tres conjuntos** comenzando por la intersección central.

## 🧮 Contenido

## Traducción de enunciados a operaciones de conjuntos

Los problemas de aplicación traducen un enunciado a **operaciones de conjuntos** y se resuelven despejando la cardinalidad de cada región del **diagrama de Venn-Euler**.

Palabras clave:

| Enunciado | Operación |
|-----------|-----------|
| "y", "ambos", "a la vez" | $A \cap B$ |
| "o", "al menos uno" | $A \cup B$ |
| "no", "sin" | $A^c$ o $A - B$ |
| "solo", "exclusivamente" | Región exclusiva de la intersección hacia afuera |

## Caso de dos conjuntos (fórmula por despeje)

Con dos conjuntos basta la fórmula de cardinalidad y despejar la incógnita:

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B)
$$

> [!example] Ejemplo
> En una encuesta de 100 personas, 60 usan bicicleta ($|B| = 60$), 50 usan bus ($|U| = 50$) y 20 usan ambos ($|B \cap U| = 20$). Usan **al menos uno**:
> $$n(B \cup U) = 60 + 50 - 20 = 90$$

## Regla de oro con tres conjuntos

Cuando hay tres conjuntos, **se comienza siempre por la intersección central** (la región común a los tres) y desde ahí se van restando las regiones hacia afuera, hasta llegar a las zonas exclusivas de cada conjunto.

> [!example] Ejemplo con el dataset (tres conjuntos)
> Con $A$ = bachelors, $T$ = terapia prematrimonial y $D$ = divorciados:
> - Intersección triple $A \cap T \cap D$ = 894.
> - La zona de $A$ exclusiva (bachelors, sin terapia y sin divorcio) se obtiene restando de $|A|$ las intersecciones dobles y **sumando de nuevo** la triple (porque se restó dos veces):
>   $$|A| - |A \cap T| - |A \cap D| + |A \cap T \cap D| = 11700 - 2987 - 4501 + 894 = 5106$$
> - Este proceso se repite para cada conjunto hasta completar todas las regiones del diagrama.

> [!tip] Relación con la probabilidad
> Las regiones del diagrama de Venn son mutuamente excluyentes; su suma reconstruye el universo. Dividir cada región entre $|\Omega|$ da la probabilidad de cada suceso.

---

## 💡 Ejemplo en Python: diagrama de Venn de tres conjuntos sobre el dataset

Reproducimos el análisis de regiones comenzando por la intersección central.

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
A = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")
T = conjunto_ids(filas, lambda f: f["premarital_counseling"] == "1")
D = conjunto_ids(filas, lambda f: f["divorced"] == "1")
Omega = {f["marriage_id"] for f in filas}

# Región central: intersección triple
central = A & T & D
print(f"1. Central (A∩T∩D)        = {len(central)}")

# Intersecciones dobles (incluyen la central)
print(f"2. A∩T (incluye central)  = {len(A & T)}")
print(f"3. A∩D (incluye central)  = {len(A & D)}")
print(f"4. T∩D (incluye central)  = {len(T & D)}")

# Regiones dobles EXCLUSIVAS (sin la central)
print(f"\n5. (A∩T) exclusiva        = {len(A & T) - len(central)}")
print(f"6. (A∩D) exclusiva        = {len(A & D) - len(central)}")
print(f"7. (T∩D) exclusiva        = {len(T & D) - len(central)}")

# Regiones exclusivas: partir de la central y restar hacia afuera
A_solo = len(A) - len(A & T) - len(A & D) + len(central)
T_solo = len(T) - len(A & T) - len(T & D) + len(central)
D_solo = len(D) - len(A & D) - len(T & D) + len(central)
print(f"\n8. A exclusiva            = {A_solo}")
print(f"9. T exclusiva            = {T_solo}")
print(f"10. D exclusiva           = {D_solo}")

# Unión total y zona fuera de todo
union = A | T | D
fuera = Omega - union
print(f"\n11. Unión (A∪T∪D)         = {len(union)}")
print(f"12. Fuera de todo         = {len(fuera)}")

# Verificación: la suma de las 8 regiones = 45000
regiones = [A_solo, T_solo, D_solo,
            len(A & T) - len(central), len(A & D) - len(central), len(T & D) - len(central),
            len(central), len(fuera)]
print(f"\nSuma de las 8 regiones    = {sum(regiones)}  (debe ser {len(Omega)})")
```

**Salida real del script (verificada con el dataset):**

```
1. Central (A∩T∩D)        = 894
2. A∩T (incluye central)  = 2987
3. A∩D (incluye central)  = 4501
4. T∩D (incluye central)  = 4262

5. (A∩T) exclusiva        = 2093
6. (A∩D) exclusiva        = 3607
7. (T∩D) exclusiva        = 3368

8. A exclusiva            = 5106
9. T exclusiva            = 4623
10. D exclusiva           = 12847

11. Unión (A∪T∪D)         = 32706
12. Fuera de todo         = 12294

Suma de las 8 regiones    = 45000  (debe ser 45000)
```

> [!note] Lectura estadística
> - La **regla de oro** funciona: comenzar por la central (894) y restar hacia afuera permite reconstruir las 8 regiones sin contar dos veces.
> - $|A \cup T \cup D| = 32{,}706$ → el 72.7% de los matrimonios cumple al menos una de las tres condiciones.
> - La suma de las 8 regiones = 45,000 confirma que las regiones de un diagrama de Venn son una **partición** del universo.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Al resolver un problema de **tres conjuntos** con un diagrama de Venn, se recomienda comenzar por:

a) La región exclusiva del primer conjunto
b) La **intersección central de los tres conjuntos**
c) La zona fuera de todos los conjuntos
d) La unión de los tres conjuntos

> **b) La intersección central de los tres conjuntos**

---

### Pregunta 2

En el diagrama de Venn del dataset con $A$ = bachelors, $T$ = terapia y $D$ = divorciados, la región **exclusiva** $A$ (solo bachelors, sin terapia ni divorcio) es:

a) 2987
b) 894
c) **5106** (pues $11700 - 2987 - 4501 + 894 = 5106$)
d) 4501

> **c) 5106 (pues $11700 - 2987 - 4501 + 894 = 5106$)**

---

### Pregunta 3

En el diagrama de Venn del dataset, la suma de las **8 regiones** (3 exclusivas + 3 dobles + central + exterior) es:

a) 20708
b) 24292
c) 32706
d) **45000** (reconstruye el universo completo)

> **d) 45000 (reconstruye el universo completo)**

---

### Pregunta 4

En una encuesta de 100 personas, 60 usan bicicleta, 50 usan bus y 20 usan ambos. ¿Cuántas usan **al menos uno**?

a) 110
b) 90
c) 100
d) 30

> **b) 90 (pues $60 + 50 - 20 = 90$)**

---

### Pregunta 5

En la traducción de enunciados, la palabra **"ambos"** corresponde a la operación:

a) $A \cup B$
b) $A \cap B$
c) $A - B$
d) $A^c$

> **b) $A \cap B$**

---

### Pregunta 6

En la traducción de enunciados, la expresión **"al menos uno"** corresponde a la operación:

a) $A \cup B$
b) $A \cap B$
c) $A - B$
d) $\emptyset$

> **a) $A \cup B$**

---

### Pregunta 7

En el problema de idiomas con **tres conjuntos** (inglés, francés, ruso), la región central representa:

a) Los que hablan solo inglés
b) Los que hablan **los tres idiomas**
c) Los que hablan dos idiomas
d) Los que no hablan ninguno

> **b) Los que hablan los tres idiomas**

---

### Pregunta 8

En el dataset, con $|A \cap T \cap D| = 894$, $|A \cap T| = 2987$, $|A \cap D| = 4501$ y $|A| = 11700$, la región exclusiva $A$ se calcula:

a) $11700 - 2987 - 4501 = 4212$
b) $11700 - 2987 - 4501 + 894 = **5106**$ (se suma la triple porque se restó dos veces)
c) $2987 + 4501 + 894 = 8382$
d) $11700 - 894 = 10806$

> **b) $11700 - 2987 - 4501 + 894 = 5106$ (se suma la triple porque se restó dos veces)**

---

### Pregunta 9

¿Por qué al calcular la región exclusiva de un conjunto se **suma de nuevo** la intersección triple?

a) Por error, no debería sumarse
b) Porque los elementos de la triple se restaron **dos veces** (en las dos intersecciones dobles) y hay que devolver una
c) Porque la triple es la más grande
d) Para igualar la cardinalidad del universo

> **b) Porque los elementos de la triple se restaron dos veces (en las dos intersecciones dobles) y hay que devolver una**

---

### Pregunta 10

Si $n(A \cup B) = 90$, $n(A) = 60$ y $n(A \cap B) = 20$, entonces $n(B)$ es:

a) 50
b) 30
c) 70
d) 20

> **a) 50 (pues $n(B) = n(A \cup B) - n(A) + n(A \cap B) = 90 - 60 + 20 = 50$)**

---
