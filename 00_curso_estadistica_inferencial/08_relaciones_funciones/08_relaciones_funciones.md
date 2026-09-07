---
titulo: Relaciones y funciones
tipo: anotacion-video
tema: conceptos previos (relaciones y funciones)
tags:
  - estadistica-inferencial
  - conjuntos
  - relaciones
  - funciones
---

# 🔗 Relaciones y Funciones (conceptos previos)

## 🎬 Datos del video

Este tema agrupa los **videos 14 a 22** de la playlist "Estadística Inferencial" (conceptos previos de álgebra superior):

| # | Video | Enlace |
|---|-------|--------|
| 14 | Carroll Diagrams \| Inferential Statistics | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 15 | Producto de conjuntos \| Estadística Inferencial | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 16 | Relations \| Inferential Statistics | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 17 | Domain, Codomain, and Range \| Inferential Statistics | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 18 | Functions \| Inferential Statistics | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 19 | Tipos de funciones \| Estadística Inferencial | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 20 | Variable dependiente e independiente \| Estadística Inferencial | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 21 | Función biyectiva \| Estadística Inferencial | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |
| 22 | Conjuntos finitos e infinitos \| Estadística Inferencial | [Playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa) |

- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Las **relaciones** y **funciones** son los puentes entre los conjuntos y el análisis de datos: permiten describir cómo una variable (independiente) se asocia con otra (dependiente). Una **función** es un caso especial de relación: a cada entrada le corresponde **una sola salida** — exactamente lo que hace un modelo cuando predice una tasa de divorcio a partir del nivel educativo.

> [!info] Idea principal
> Relación = vínculo entre pares de elementos. Función = relación donde cada $x$ tiene **una única** imagen $y$.

## 🧮 Explicación del tema

## 1. Diagramas de Carroll (video 14)

Un **diagrama de Carroll** representa la pertenencia a conjuntos mediante una **tabla de doble entrada** (sí/no), en lugar del diagrama de Venn circular. Se usan dos ejes con dos estados cada uno, generando **4 regiones**.

> [!example] Con el dataset
> Clasificar cada matrimonio según `education_level = bachelors` y `divorced = 1`:

| | Divorciado | No divorciado | Total |
|---|-----------|---------------|-------|
| **Bachelors** | 4,501 | 7,199 | 11,700 |
| **No bachelors** | 16,207 | 17,093 | 33,300 |
| **Total** | 20,708 | 24,292 | 45,000 |

Cada casilla es la **intersección** de dos condiciones; las sumas marginales reconstruyen los totales de cada conjunto (es la base de las tablas de contingencia del $\chi^2$).

## 2. Producto cartesiano de conjuntos (video 15)

$$
A \times B = \{(a, b) \mid a \in A, b \in B\}
$$

Es el conjunto de **todos los pares ordenados** posibles. La cardinalidad es:

$$
|A \times B| = |A| \cdot |B|
$$

> [!tip] Propiedades
> - El **orden importa**: $(a,b) \neq (b,a)$.
> - Si alguno es vacío: $A \times \emptyset = \emptyset$.
> - Con 3 conjuntos: $|A \times B \times C| = |A| \cdot |B| \cdot |C|$.

## 3. Relaciones binarias (video 16)

Una **relación binaria** $R$ entre $A$ y $B$ es un **subconjunto del producto cartesiano**:

$$
R \subseteq A \times B
$$

Un par $(a,b) \in R$ significa que "$a$ está relacionado con $b$". Si $R$ es la relación "$a$ tiene tasa de divorcio mayor a 0.4", entonces $(high\_school, 1) \in R$ pero $(graduate, 1) \notin R$.

**Dominio y rango de la relación:**
$$
\mathrm{Dom}(R) = \{a \mid \exists b: (a,b) \in R\}, \quad \mathrm{Ran}(R) = \{b \mid \exists a: (a,b) \in R\}
$$

## 4. Dominio, codominio y rango (video 17)

- **Dominio**: el conjunto de **entradas** (valores que sí tienen imagen).
- **Codominio**: el conjunto donde **podrían** caer las salidas (definido por el contexto).
- **Rango (o imagen)**: el conjunto de salidas que **realmente ocurren**.

> [!example] Con el dataset
> Función $f$: `education_level` → tasa de divorcio.
> - Dominio: las 5 categorías educativas.
> - Codominio: $[0, 1]$ (cualquier tasa posible).
> - Rango: $\{0.2986, 0.3847, 0.4574, 0.5522, 0.6311\}$ (las 5 tasas reales).

## 5. Funciones (video 18)

Una **función** $f: A \to B$ es una relación donde **cada elemento del dominio tiene exactamente una imagen**:

$$
\forall a \in A,\ \exists!\, b \in B : f(a) = b
$$

El número de funciones posibles de $A$ a $B$ es $|B|^{|A|}$.

> [!note] La diferencia clave
> En una relación, un elemento puede tener **varias** imágenes o ninguna. En una función, el dominio completo se mapea a **una sola imagen** por elemento.

## 6. Tipos de funciones (video 19)

- **Inyectiva**: elementos distintos tienen imágenes distintas. Si $f(a_1) = f(a_2)$ entonces $a_1 = a_2$.
- **Sobreyectiva**: el rango es **todo** el codominio (cada salida posible es alcanzada).
- **Biyectiva**: inyectiva **y** sobreyectiva a la vez (existe inversa).

> [!example] Con el dataset
> $f$: categoría educativa → código. Es **biyectiva**: cada categoría recibe un código único (inyectiva) y se usan todos los códigos (sobreyectiva).

## 7. Variable dependiente e independiente (video 20)

- **Variable independiente ($x$)**: la causa, el insumo, la que se controla o explica.
- **Variable dependiente ($y$)**: el efecto, la respuesta, la que se predice.

En la regresión por mínimos cuadrados ($y = mx + b$), $x$ es independiente y $y$ dependiente.

> [!example] Con el dataset
> - Independiente: `education_level`, `age_at_marriage`, `premarital_counseling`.
> - Dependiente: `divorced`, `years_to_divorce`.

## 8. Función biyectiva (video 21)

Una **biyección** es una función inyectiva y sobreyectiva. Consecuencia central: **existe la función inversa** $f^{-1}$ y las cardinalidades de dominio y codominio coinciden:

$$
|A| = |B|
$$

> [!tip] Por qué importa en estadística
> La **codificación** de variables categóricas a números (0, 1, 2, ...) es una biyección: se puede pasar de la categoría al código y del código a la categoría sin pérdida de información.

## 9. Conjuntos finitos e infinitos (video 22)

- **Finito**: tiene una cardinalidad que se puede contar y termina ($|\Omega| = 45{,}000$).
- **Infinito contable**: se puede enumerar ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$).
- **Infinito no contable**: no se puede enumerar ($\mathbb{R}$); el intervalo $[0,1]$ tiene "más" puntos que $\mathbb{N}$.

> [!tip] Importancia para el curso
> Las probabilidades y frecuencias del curso trabajan con **conjuntos finitos** (los datos). El "infinito" aparece en las **distribuciones continuas** (la normal) y en la teoría de límites (TLC).

---

## 🐍 Ejemplo en Python: relaciones y funciones sobre el dataset de matrimonios

Definimos conjuntos de `marriage_id` como en el tema 01 y construimos **funciones y relaciones reales**:

```python
import csv
from collections import defaultdict
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    # Lee el CSV y devuelve una lista de diccionarios (uno por matrimonio)
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

filas = cargar()
mundo = {f["marriage_id"] for f in filas}

# ---------- 1. Diagrama de Carroll: bachelors × divorciado ----------
A = {f["marriage_id"] for f in filas if f["education_level"] == "bachelors"}
D = {f["marriage_id"] for f in filas if f["divorced"] == "1"}

print("=== Diagrama de Carroll (bachelors × divorciado) ===")
print(f"  Bachelors y divorciado     = {len(A & D)}")
print(f"  Bachelors y no divorciado  = {len(A - D)}")
print(f"  No bachelors y divorciado  = {len(D - A)}")
print(f"  No bachelors y no divorc.  = {len(mundo - (A | D))}")
print(f"  Total (Ω)                  = {len(mundo)}")

# ---------- 2. Función f: education_level -> tasa de divorcio ----------
div = defaultdict(lambda: [0, 0])
for f in filas:
    e = f["education_level"]
    div[e][1] += 1
    div[e][0] += int(f["divorced"] == "1")

tasa = {e: div[e][0] / div[e][1] for e in div}
print("\n=== Función f: education_level -> tasa de divorcio ===")
print("  Dominio (5 categorías):", sorted(tasa))
print("  Rango (5 tasas reales):", [round(tasa[e], 4) for e in sorted(tasa)])
print(f"  ¿Cada categoría tiene 1 sola tasa? -> {len(tasa) == 5}")

# ---------- 3. Producto cartesiano Ed × Counsel ----------
categorias = sorted(tasa.keys())
counsel = ["0", "1"]
cart = [(e, c) for e in categorias for c in counsel]
print(f"\n=== Producto cartesiano Ed × Counsel ===")
print(f"  |Ed| × |Counsel| = {len(categorias)} × {len(counsel)} = {len(cart)} pares")
print("  Primeros 4 pares:", cart[:4])

# ---------- 4. Relación R: tasa de divorcio > 0.4 ----------
R = {e for e in categorias if tasa[e] > 0.4}
print(f"\n=== Relación R = {{e | tasa(e) > 0.4}} ===")
print("  R =", sorted(R), f"  |R| = {len(R)}")

# ---------- 5. Biyección: categoría <-> código ----------
codigo = {e: i for i, e in enumerate(categorias)}
print("\n=== Función biyectiva: categoría -> código ===")
print("  codigo =", codigo)
print(f"  ¿Inyectiva? {len(set(codigo.values())) == len(codigo)}")
print(f"  ¿Sobreyectiva sobre {{0,1,2,3,4}}? "
      f"{set(codigo.values()) == set(range(len(categorias)))}")
inversa = {v: k for k, v in codigo.items()}
print(f"  Inversa (código -> categoría): {inversa}")

# ---------- 6. Conjuntos finitos e infinitos ----------
print(f"\n=== Finitud ===")
print(f"  |Ω| = {len(mundo)} -> finito")
print("  ℕ, ℤ, ℚ son infinitos CONTABLES; ℝ es infinito NO contable")
```

**Salida real del script (verificada con el dataset):**

```
=== Diagrama de Carroll (bachelors × divorciado) ===
  Bachelors y divorciado     = 4501
  Bachelors y no divorciado  = 7199
  No bachelors y divorciado  = 16207
  No bachelors y no divorc.  = 17093
  Total (Ω)                  = 45000

=== Función f: education_level -> tasa de divorcio ===
  Dominio (5 categorías): ['bachelors', 'graduate', 'high_school', 'less_than_hs', 'some_college']
  Rango (5 tasas reales): [0.3847, 0.2986, 0.5522, 0.6311, 0.4574]
  ¿Cada categoría tiene 1 sola tasa? -> True

=== Producto cartesiano Ed × Counsel ===
  |Ed| × |Counsel| = 5 × 2 = 10 pares
  Primeros 4 pares: [('bachelors', '0'), ('bachelors', '1'), ('graduate', '0'), ('graduate', '1')]

=== Relación R = {e | tasa(e) > 0.4} ===
  R = ['high_school', 'less_than_hs', 'some_college']   |R| = 3

=== Función biyectiva: categoría -> código ===
  codigo = {'bachelors': 0, 'graduate': 1, 'high_school': 2, 'less_than_hs': 3, 'some_college': 4}
  ¿Inyectiva? True
  ¿Sobreyectiva sobre {0,1,2,3,4}? True
  Inversa (código -> categoría): {0: 'bachelors', 1: 'graduate', 2: 'high_school', 3: 'less_than_hs', 4: 'some_college'}

=== Finitud ===
  |Ω| = 45000 -> finito
  ℕ, ℤ, ℚ son infinitos CONTABLES; ℝ es infinito NO contable
```

> [!note] Lectura estadística
> - El **rango** de la función `education_level → tasa de divorcio` son las 5 tasas reales: la educación **explica** el divorcio (las categorías con menos estudios divorcian más).
> - El **producto cartesiano** `Ed × Counsel` (10 pares) es la base de las **tablas de contingencia**: cada celda cruza un nivel educativo con una condición de terapia.
> - Las **relaciones** permiten seleccionar subconjuntos con una condición (tasa > 0.4); las **funciones** describen correspondencias 1 a 1.

---

## ✅ Evaluación

### Pregunta 1

Un **diagrama de Carroll** representa la pertenencia a conjuntos mediante:

a) Círculos que se intersectan
b) Una **tabla de doble entrada** (sí/no × sí/no) con 4 regiones
c) Un eje numérico
d) Un árbol de probabilidad

> **b) Una tabla de doble entrada (sí/no × sí/no) con 4 regiones**

---

### Pregunta 2

La cardinalidad del **producto cartesiano** $A \times B$ es:

a) $|A| + |B|$
b) $|A| \cdot |B|$
c) $|A| - |B|$
d) $|A|^{|B|}$

> **b) $|A| \cdot |B|$**

---

### Pregunta 3

En el dataset, el producto cartesiano de las 5 categorías de `education_level` con los 2 valores de `premarital_counseling` tiene:

a) 7 pares
b) 3 pares
c) **10 pares** ($5 \times 2 = 10$)
d) 25 pares

> **c) 10 pares ($5 \times 2 = 10$)**

---

### Pregunta 4

Una **relación binaria** $R$ entre $A$ y $B$ es:

a) Un elemento de $A$
b) Un par ordenado único
c) Un **subconjunto del producto cartesiano** $A \times B$
d) Siempre una función

> **c) Un subconjunto del producto cartesiano $A \times B$**

---

### Pregunta 5

El **rango** (o imagen) de una función es:

a) El conjunto de entradas
b) El conjunto donde podrían caer las salidas
c) El conjunto de **salidas que realmente ocurren**
d) El producto cartesiano

> **c) El conjunto de salidas que realmente ocurren**

---

### Pregunta 6

Una **función** $f: A \to B$ se caracteriza por:

a) Cada elemento de $A$ puede tener varias imágenes
b) Cada elemento de $A$ tiene **exactamente una imagen** en $B$
c) Solo algunos elementos de $A$ tienen imagen
d) El rango debe ser igual al codominio

> **b) Cada elemento de A tiene exactamente una imagen en B**

---

### Pregunta 7

Si $|A| = 5$ y $|B| = 2$, el número de **funciones posibles** de $A$ a $B$ es:

a) 10
b) 25
c) **32** (pues $|B|^{|A|} = 2^5 = 32$)
d) 7

> **c) 32 (pues $|B|^{|A|} = 2^5 = 32$)**

---

### Pregunta 8

Una función es **inyectiva** cuando:

a) Alcanza todo el codominio
b) Es sobreyectiva
c) Elementos distintos tienen **imágenes distintas**
d) Cada imagen tiene varias preimágenes

> **c) Elementos distintos tienen imágenes distintas**

---

### Pregunta 9

Una función es **sobreyectiva** cuando:

a) Su dominio es finito
b) Su **rango es todo el codominio**
c) Es biyectiva
d) Su rango es vacío

> **b) Su rango es todo el codominio**

---

### Pregunta 10

La función `education_level -> código` ($n = 5$ categorías) es **biyectiva** porque:

a) Es solo inyectiva
b) Es solo sobreyectiva
c) Es **inyectiva y sobreyectiva** (cada categoría tiene código único y se usan los 5 códigos)
d) No tiene inversa

> **c) Es inyectiva y sobreyectiva (cada categoría tiene código único y se usan los 5 códigos)**

---

### Pregunta 11

En la relación entre `age_at_marriage` y `years_to_divorce`, la **variable dependiente** es:

a) `age_at_marriage`
b) **`years_to_divorce`** (la respuesta que se predice)
c) `marriage_id`
d) Ninguna

> **b) `years_to_divorce` (la respuesta que se predice)**

---

### Pregunta 12

Los conjuntos $\mathbb{N}$ y $\mathbb{R}$ son, respectivamente:

a) Finito y finito
b) Infinito contable e **infinito no contable**
c) Infinito no contable e infinito contable
d) Finito e infinito contable

> **b) Infinito contable e infinito no contable**

---

### Pregunta 13

El universo del dataset ($|\Omega| = 45{,}000$ matrimonios) es un conjunto:

a) Infinito contable
b) Infinito no contable
c) **Finito** (se puede contar y termina)
d) Vacío

> **c) Finito (se puede contar y termina)**

---

### Pregunta 14

En la función $f$: `education_level` → tasa de divorcio del dataset, el **rango** es:

a) Las 5 categorías educativas
b) El intervalo $[0, 1]$ completo
c) **Las 5 tasas reales** $\{0.2986, 0.3847, 0.4574, 0.5522, 0.6311\}$
d) El producto cartesiano

> **c) Las 5 tasas reales $\{0.2986, 0.3847, 0.4574, 0.5522, 0.6311\}$**

---

## ❓ Dudas pendientes

- [ ] ¿Cómo se gráfica el diagrama de Carroll con porcentajes en lugar de conteos?
- [ ] ¿La codificación de categorías afecta el resultado de un modelo de regresión?

## 🔗 Temas relacionados

- [[01_repaso_conceptos_previos|Teoría de conjuntos]]
- [[02_analisis_combinatorio|Análisis combinatorio]]
- [[03_probabilidad|Probabilidad]]
- [[PLAN_actualizar_00_curso_estadistica_inferencial|Plan de actualización del curso]]
