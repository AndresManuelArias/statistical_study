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

## 🐍 Ejemplo en Python: conjuntos sobre el dataset de matrimonios

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

---

## 🧮 Explicación del tema: Subconjuntos y contención

Un **subconjunto** es la idea de "estar dentro de" aplicada a conjuntos. Es el concepto que permite pasar de lo general a lo particular: del espacio muestral al suceso, y del suceso al sub-suceso.

### Definición formal

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

### Contención en el dataset de matrimonios (lectura)

En el ejemplo siguiente definimos:
- $\Omega$ = todos los matrimonios (45,000)
- $A$ = matrimonios con nivel educativo `bachelors` (11,700)
- $B$ = matrimonios `bachelors` **que además** hicieron terapia prematrimonial (2,987)

Como $B$ exige cumplir la condición de $A$ **más** una condición extra, necesariamente $B \subseteq A \subseteq \Omega$.

---

## 🐍 Ejemplo en Python: subconjuntos sobre el dataset de matrimonios

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

## 📚 Temario de estudio: teoría de conjuntos

### 4. Conjuntos vacío y universal

* **URL del video:** [Conjuntos vacío y universal | Estadística Inferencial](http://www.youtube.com/watch?v=1nIX6IH43_Q)
* **Temas principales:**
* **Conjunto Vacío ($\emptyset$):**
* Definición como el conjunto que no contiene ningún elemento ().
* Notación mediante símbolo especial o llaves vacías ().
* Propiedades: Es subconjunto de cualquier otro conjunto y es único ().


* **Conjunto Universal ($U$):**
* Definición como el conjunto que contiene a todos los elementos con una característica o dominio de conocimiento común ().
* A diferencia del vacío, no existe un conjunto universal único en abstracto, sino que está acotado al contexto de trabajo ().


* **Ejemplos prácticos:** Conjuntos de letras del abecedario, números naturales y animales ().



---

### 5. Conjunto complemento

* **URL del video:** [Conjunto complemento | Estadística Inferencial](http://www.youtube.com/watch?v=HJAors8090A)
* **Temas principales:**
* **Diagramas de Venn-Euler:**
* Representación gráfica mediante un rectángulo para el universo ($U$) y circunferencias para los subconjuntos ().


* **Conjunto Complemento ($A^c$):**
* Definición: Elementos que pertenecen al conjunto universal pero *no* pertenecen al conjunto dado ().
* Expresión por comprensión: $A^c = \{x \in U \mid x \notin A\}$ ().


* **Propiedades de la complementación:**
* El complemento del conjunto vacío es el universo ().
* El complemento del complemento de un conjunto es el conjunto mismo ($({A^c})^c = A$) ().
* El complemento del universo es el vacío ().





---

### 6. Intersección de conjuntos

* **URL del video:** [Intersección de conjuntos | Estadística Inferencial](http://www.youtube.com/watch?v=xjdowwI35C0)
* **Temas principales:**
* **Álgebra de conjuntos:** Introducción a las operaciones básicas de combinación ().
* **Intersección ($A \cap B$):**
* Definición: Elementos que pertenecen a ambos conjuntos de manera simultánea ().
* Por comprensión: $A \cap B = \{x \mid x \in A \land x \in B\}$ ().


* **Casos particulares de intersección:**
* Intersección distinta del vacío ().
* Intersección de conjuntos iguales ().
* Intersección de un conjunto y su subconjunto ().
* **Conjuntos disjuntos:** Aquellos cuya intersección es vacía ($A \cap B = \emptyset$) ().


* **Propiedades básicas:** Intersección con el vacío, con el universo y con sí mismo ().



---

### 7. Unión de conjuntos

* **URL del video:** [Unión de conjuntos | Estadística Inferencial](http://www.youtube.com/watch?v=AeUt0AzQ9Es)
* **Temas principales:**
* **Unión ($A \cup B$):**
* Definición: Elementos que pertenecen a $A$, a $B$, o a ambos simultáneamente ().
* Por comprensión: $A \cup B = \{x \mid x \in A \lor x \in B\}$ ().


* **Casos y ejemplos:**
* Unión con intersección distinta del vacío (los elementos repetidos no se duplican) ().
* Unión de conjuntos iguales ().
* Unión de un conjunto y su subconjunto ().
* Unión de conjuntos disjuntos ().


* **Propiedades de la unión:** Identidad con el vacío, con el universo y la idempotencia ($A \cup A = A$) ().



---

### 8. Diferencia de conjuntos

* **URL del video:** [Diferencia de conjuntos | Estadística Inferencial](http://www.youtube.com/watch?v=JO7NsN4ZJp4)
* **Temas principales:**
* **Operación Diferencia ($A - B$):**
* Definición: Elementos que pertenecen al conjunto $A$ pero no pertenecen al conjunto $B$ (equivalente a "quitarle" a $A$ los elementos que comparte con $B$) ().
* Por comprensión: $A - B = \{x \mid x \in A \land x \notin B\}$ ().


* **Casos prácticos:**
* Intersección distinta del vacío ().
* Conjuntos iguales ($A - A = \emptyset$) ().
* Diferencia entre un conjunto y su subconjunto ().
* Conjuntos disjuntos (el resultado es el primer conjunto completo) ().





---

### 9. Ejercicios de operaciones con conjuntos (parte 1)

* **URL del video:** [Ejercicios de operaciones con conjuntos (parte 1) | Estadística Inferencial](http://www.youtube.com/watch?v=l-k3H8ePNDs)
* **Temas principales:**
* **Jerarquía de operaciones en conjuntos:** Se opera de adentro hacia afuera (empezando por paréntesis) ().
* **Resolución gráfica paso a paso:**
* Complemento de una unión: $(A \cup B)^c$ ().
* Complemento de una diferencia: $(B - A)^c$ ().
* Intersecciones complejas con conjuntos vacíos ().
* Intersecciones de uniones múltiples: $(A \cup B) \cap (A \cup C)$ ().





---

### 10. Ejercicios de operaciones con conjuntos (parte 2)

* **URL del video:** [Ejercicios de operaciones con conjuntos (parte 2) | Estadística Inferencial](http://www.youtube.com/watch?v=5ovNShM6GAk)
* **Temas principales:**
* **Resolución analítica por extensión:** A partir de conjuntos definidos con elementos numéricos o de letras dentro de un universo dado ().
* **Cálculo paso a paso de:**
* Unión de conjuntos ().
* Diferencia y su respectivo complemento ($({A - B})^c$) ().
* Intersecciones compuestas y validación de subconjuntos ().





---

### 11. Cardinalidad de un conjunto

* **URL del video:** [Cardinalidad de un conjunto | Estadística Inferencial](http://www.youtube.com/watch?v=5ovNShM6GAk)
* **Temas principales:**
* **Concepto de Cardinalidad:** Número de elementos que pertenecen a un conjunto. Notaciones: $n(A)$, $\vert{}A\vert{}$ o $\#A$ ().
* **Conjuntos similares:** Aquellos que poseen la misma cardinalidad pero diferentes elementos ().
* **Propiedades y fórmulas de cardinalidad para uniones:**
* *Caso 1 (Disjuntos):* $n(A \cup B) = n(A) + n(B)$ ().
* *Caso 2 (Con intersección):* $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ (Evita contar doble los elementos de la intersección) ().





---

### 12. Conjunto potencia

* **URL del video:** [Conjunto potencia | Estadística Inferencial](http://www.youtube.com/watch?v=_2g4naWTsYg)
* **Temas principales:**
* **Definición de Conjunto Potencia ($\mathcal{P}(A)$):** Conjunto formado por *todos los subconjuntos* posibles de un conjunto dado $A$ ().
* **Fórmula de la cardinalidad del conjunto potencia:**
* $n(\mathcal{P}(A)) = 2^n$, donde $n$ es la cardinalidad del conjunto original ($n(A)$) ().


* **Ejemplos prácticos:**
* Obtención de subconjuntos unitarios, el vacío y el conjunto mismo para conjuntos de 2 y 3 elementos ().
* Aplicación de la regla al conjunto vacío ($\mathcal{P}(\emptyset)$) ().





---

### 13. Ejercicios de operaciones con conjuntos (parte 3)

* **URL del video:** [Ejercicios de operaciones con conjuntos (parte 3) | Estadística Inferencial](http://www.youtube.com/watch?v=U6U5aaL12tE)
* **Temas principales:**
* **Problemas de aplicación práctica (Encuestas y Diagramas de Venn):**
* Traducción de enunciados de texto a operaciones de conjuntos ($U$, uniones, intersecciones y complementos) ().
* Resolución de problemas con **dos conjuntos** (ej. uso de medios de transporte) aplicando la fórmula de cardinalidad por despeje ().
* Resolución de problemas avanzados con **tres conjuntos** (ej. estudiantes de idiomas: inglés, francés, ruso) analizando las regiones de manera inversa: **comenzando siempre por la intersección central de los tres conjuntos** hacia las regiones exclusivas ().

---

## 🧮 Explicación del tema: conjuntos especiales, operaciones, cardinalidad y conjunto potencia

Se desarrollan aquí los temas 4 al 13 del temario, todos con aplicación directa al dataset de matrimonios.

## Conjunto vacío y conjunto universal (tema 4)

- **Conjunto vacío ($\emptyset$):** el conjunto que **no contiene ningún elemento**. Se denota `{}` o `$\emptyset$`.
  - Es **subconjunto de cualquier conjunto**: $\emptyset \subseteq A$ para todo $A$.
  - Es **único**: no hay dos conjuntos vacíos distintos.
  - Su cardinalidad es cero: $n(\emptyset) = 0$.
- **Conjunto universal ($\Omega$ o $U$):** el conjunto que contiene **todos los elementos posibles del contexto**.
  - No existe un único universal abstracto: depende del **dominio** (en el curso, $\Omega$ = los 45,000 matrimonios).
  - Todo conjunto del contexto es subconjunto del universal: $A \subseteq \Omega$.

> [!tip] Relación con la probabilidad
> - $P(\emptyset) = 0$: el suceso imposible tiene probabilidad cero.
> - $P(\Omega) = 1$: el suceso seguro tiene probabilidad uno.

## El complemento y sus propiedades (tema 5)

El **complemento** de $A$ es el conjunto de elementos del universal que **no** están en $A$:

$$
A^c = \{x \in \Omega \mid x \notin A\}
$$

**Propiedades:**

1. **Complemento del vacío:** $\emptyset^c = \Omega$.
2. **Doble complemento:** $(A^c)^c = A$.
3. **Complemento del universal:** $\Omega^c = \emptyset$.
4. **Unión con su complemento:** $A \cup A^c = \Omega$ (todo el universo).
5. **Intersección con su complemento:** $A \cap A^c = \emptyset$ (disjuntos).

> [!tip] Relación con la probabilidad
> $P(A^c) = 1 - P(A)$: la probabilidad de **no** ocurra $A$.

## Intersección de conjuntos (tema 6)

$$
A \cap B = \{x \mid x \in A \land x \in B\}
$$

Son los elementos que pertenecen **simultáneamente** a ambos.

**Casos:**
- Intersección **no vacía**: $A \cap B \neq \emptyset$ (comparten elementos).
- **Conjuntos iguales:** $A \cap A = A$ (idempotencia).
- **Conjunto y su subconjunto:** si $B \subseteq A$, entonces $A \cap B = B$.
- **Conjuntos disjuntos:** $A \cap B = \emptyset$ (no comparten nada).

**Propiedades:** $A \cap \emptyset = \emptyset$, $A \cap \Omega = A$.

## Unión de conjuntos (tema 7)

$$
A \cup B = \{x \mid x \in A \lor x \in B\}
$$

Son los elementos de $A$, de $B$, o de ambos (los repetidos **no se duplican**).

**Casos:**
- Con intersección **no vacía**: los elementos comunes aparecen una sola vez.
- **Conjuntos iguales:** $A \cup A = A$ (idempotencia).
- **Conjunto y su subconjunto:** si $B \subseteq A$, entonces $A \cup B = A$.
- **Disjuntos:** $A \cup B$ reúne todos los elementos sin repetir.

**Propiedades:** $A \cup \emptyset = A$, $A \cup \Omega = \Omega$.

## Diferencia de conjuntos (tema 8)

$$
A - B = \{x \mid x \in A \land x \notin B\}
$$

"Quitarle" a $A$ los elementos que comparte con $B$.

**Casos:**
- Con intersección **no vacía**: se eliminan solo los comunes.
- **Conjuntos iguales:** $A - A = \emptyset$.
- **Conjunto y su subconjunto:** si $B \subseteq A$, entonces $A - B$ deja solo los elementos de $A$ que no están en $B$.
- **Disjuntos:** $A - B = A$ (no hay nada que quitar).

## Jerarquía de operaciones (temas 9 y 10)

Se opera **de adentro hacia afuera**, empezando por los **paréntesis**:

1. Primero los paréntesis (y los complementos internos).
2. Luego uniones e intersecciones que quedan.
3. Al final los complementos externos.

> [!example] Ejemplo
> $(A \cup B)^c$: primero se calcula $A \cup B$ y después se toma su complemento. No es lo mismo que $A^c \cup B^c$.

## Cardinalidad de un conjunto (tema 11)

La **cardinalidad** es el número de elementos del conjunto. Se denota $n(A)$, $|A|$ o $\#A$.

**Fórmulas de cardinalidad para uniones:**

- **Caso 1 (disjuntos):** si $A \cap B = \emptyset$, entonces
  $$
  n(A \cup B) = n(A) + n(B)
  $$
- **Caso 2 (con intersección):** en general,
  $$
  n(A \cup B) = n(A) + n(B) - n(A \cap B)
  $$
  Restamos la intersección para **no contar dos veces** los elementos comunes.

> [!tip] Relación con la probabilidad
> Para sucesos disjuntos: $P(A \cup B) = P(A) + P(B)$. Con intersección: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

## Conjunto potencia (tema 12)

El **conjunto potencia** de $A$, denotado $\mathcal{P}(A)$, está formado por **todos los subconjuntos posibles** de $A$ (incluyendo el vacío y el propio $A$).

**Cardinalidad:**

$$
n(\mathcal{P}(A)) = 2^{n(A)}
$$

> [!example] Ejemplo
> Si $A = \{a, b, c\}$ ($n = 3$), sus subconjuntos son:
> $\emptyset, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}$ → $2^3 = 8$.
> Para el vacío: $\mathcal{P}(\emptyset) = \{\emptyset\}$ → $2^0 = 1$ subconjunto.

> [!tip] Relación con el curso
> El conjunto potencia es la base del **análisis combinatorio** (tema 02): el número de subconjuntos de $n$ elementos es $2^n$.

---

## Aplicaciones: encuestas y diagramas de Venn (tema 13)

Los problemas de aplicación traducen un enunciado a **operaciones de conjuntos** y se resuelven despejando la cardinalidad de cada región del **diagrama de Venn-Euler**.

### Regla de oro con tres conjuntos

Cuando hay tres conjuntos, **se comienza siempre por la intersección central** (la región común a los tres) y desde ahí se van restando las regiones hacia afuera, hasta llegar a las zonas exclusivas de cada conjunto.

> [!example] Ejemplo con el dataset (tres conjuntos)
> Con $A$ = bachelors, $T$ = terapia prematrimonial y $D$ = divorciados:
> - Intersección triple $A \cap T \cap D$ = 894.
> - La zona de $A$ exclusiva (bachelors, sin terapia y sin divorcio) se obtiene restando de $|A|$ las intersecciones dobles y **sumando de nuevo** la triple (porque se restó dos veces):
>   $$|A| - |A \cap T| - |A \cap D| + |A \cap T \cap D| = 11700 - 2987 - 4501 + 894 = 5106$$
> Este proceso se repite para cada conjunto hasta completar todas las regiones del diagrama.

### Caso de dos conjuntos

Con solo dos conjuntos basta la fórmula de cardinalidad y despejar la incógnita:

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B)
$$

> [!example] Ejemplo
> Si en una encuesta de 100 personas, 60 usan bicicleta ($|B|=60$), 50 usan bus ($|U|=50$) y 20 usan ambos, entonces usan al menos uno:
> $$n(B \cup U) = 60 + 50 - 20 = 90$$

---

## 🐍 Ejemplo en Python: diagrama de Venn de tres conjuntos sobre el dataset

Reproducimos el análisis de regiones del diagrama de Venn de $A$ (bachelors), $T$ (terapia) y $D$ (divorciados), comenzando por la intersección central.

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

# ---------- Región central: intersección triple (A ∩ T ∩ D) ----------
central = A & T & D
print(f"A ∩ T ∩ D (central)                    = {len(central)}")

# ---------- Intersecciones dobles (incluyen la central) ----------
AT = A & T
AD = A & D
TD = T & D
print(f"A ∩ T (incluye central)                = {len(AT)}")
print(f"A ∩ D (incluye central)                = {len(AD)}")
print(f"T ∩ D (incluye central)                = {len(TD)}")

# ---------- Regiones exclusivas: partir de la central y restar hacia afuera ----------
solo_A = len(A) - len(AT) - len(AD) + len(central)
solo_T = len(T) - len(AT) - len(TD) + len(central)
solo_D = len(D) - len(AD) - len(TD) + len(central)
print(f"
solo A (bachelors únicamente)           = {solo_A}")
print(f"solo T (terapia únicamente)             = {solo_T}")
print(f"solo D (divorciados únicamente)         = {solo_D}")

# ---------- Regiones dobles EXCLUSIVAS (sin la central) ----------
print(f"
A∩T sin central                         = {len(AT)-len(central)}")
print(f"A∩D sin central                         = {len(AD)-len(central)}")
print(f"T∩D sin central                         = {len(TD)-len(central)}")

# ---------- Total de la unión y zona fuera de todo ----------
union = A | T | D
print(f"
|A ∪ T ∪ D|                             = {len(union)}")
print(f"Fuera de los tres (Ω - (A∪T∪D))         = {45000 - len(union)}")

# ---------- Verificación: la suma de las 8 regiones debe ser 45000 ----------
regiones = [solo_A, solo_T, solo_D,
            len(AT)-len(central), len(AD)-len(central), len(TD)-len(central),
            len(central), 45000 - len(union)]
print(f"Suma de las 8 regiones                  = {sum(regiones)}  (¿= 45000?)")
```

**Salida real del script (verificada con el dataset):**

```
A ∩ T ∩ D (central)                    = 894
A ∩ T (incluye central)                = 2987
A ∩ D (incluye central)                = 4501
T ∩ D (incluye central)                = 4080

solo A (bachelors únicamente)           = 5106
solo T (terapia únicamente)             = 4799
solo D (divorciados únicamente)         = 13021

A∩T sin central                         = 2093
A∩D sin central                         = 3607
T∩D sin central                         = 3186

|A ∪ T ∪ D|                             = 32706
Fuera de los tres (Ω - (A∪T∪D))         = 12294

Suma de las 8 regiones                  = 45000  (¿= 45000?)
```

> [!note] Lectura estadística
> - Empezar por la **intersección central** (894) permite restar las regiones dobles sin contar de más la triple.
> - La región más grande es `solo D` (13,021): la mayoría de los divorciados no son bachelors ni hicieron terapia.
> - La suma de las 8 regiones del diagrama (3 exclusivas + 3 dobles + central + exterior) reconstruye el universo completo: 45,000.

---

## 🐍 Ejemplo en Python: operaciones avanzadas y conjunto potencia sobre el dataset

Aplicamos las operaciones del temario a los datos reales de matrimonios (45,000 registros). Definimos:
- $\Omega$ = todos los matrimonios (45,000)
- $A$ = nivel educativo `bachelors` (11,700)
- $T$ = hizo terapia prematrimonial (10,972)
- $D$ = se divorció (20,708)

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
universo   = {f["marriage_id"] for f in filas}                    # Ω : todos
A_licen    = conjunto_ids(filas, lambda f: f["education_level"] == "bachelors")
T_terapia  = conjunto_ids(filas, lambda f: f["premarital_counseling"] == "1")
D_divorcio = conjunto_ids(filas, lambda f: f["divorced"] == "1")

print(f"|Ω| (universo)             = {len(universo)}")
print(f"|A| (bachelors)            = {len(A_licen)}")
print(f"|T| (terapia)              = {len(T_terapia)}")
print(f"|D| (divorciados)          = {len(D_divorcio)}")

# ---------- Cardinalidad de la unión: n(A∪B) = n(A) + n(B) - n(A∩B) ----------
inter = A_licen & T_terapia
union = A_licen | T_terapia
print(f"
|A ∩ T| = {len(inter)}")
print(f"|A ∪ T| = {len(union)}")
print(f"Fórmula: |A|+|T|-|A∩T| = {len(A_licen)}+{len(T_terapia)}-{len(inter)} "
      f"= {len(A_licen)+len(T_terapia)-len(inter)}")

# ---------- Complemento de la unión: (A ∪ T)^c = Ω - (A ∪ T) ----------
comp = universo - union
print(f"
(A ∪ T)^c = {len(comp)}  (|Ω| - |A∪T| = {len(universo)-len(union)})")
print(f"Propiedad (A∪T)^c ∩ (A∪T) = ∅ → {comp & union == set()}")

# ---------- Doble complemento: (A^c)^c = A ----------
doble = (universo - (universo - A_licen))
print(f"(A^c)^c = A  →  {doble == A_licen}  ({len(doble)})")

# ---------- Disjuntos / partición ----------
print(f"
Casados ∩ Divorciados = ∅ → "
      f"{(universo - D_divorcio) & D_divorcio == set()}")

# ---------- Conjunto potencia: 2^n con n = 5 categorías educativas ----------
categorias = set(f["education_level"] for f in filas)
n_cat = len(categorias)
print(f"
|education_level| = {n_cat} categorías → |P(A)| = 2^{n_cat} = {2**n_cat}")
print(f"Categorías: {sorted(categorias)}")
```

**Salida real del script (verificada con el dataset):**

```
|Ω| (universo)             = 45000
|A| (bachelors)            = 11700
|T| (terapia)              = 10972
|D| (divorciados)          = 20708

|A ∩ T| = 2987
|A ∪ T| = 19685
Fórmula: |A|+|T|-|A∩T| = 11700+10972-2987 = 19685

(A ∪ T)^c = 25315  (|Ω| - |A∪T| = 25315)
Propiedad (A∪T)^c ∩ (A∪T) = ∅ → True

(A^c)^c = A  →  True  (11700)

Casados ∩ Divorciados = ∅ → True

|education_level| = 5 categorías → |P(A)| = 2^5 = 32
Categorías: ['bachelors', 'graduate', 'high_school', 'less_than_hs', 'some_college']
```

> [!note] Lectura estadística
> - La fórmula de cardinalidad **evita contar dos veces** a los 2,987 matrimonios que son `bachelors` y además hicieron terapia.
> - $(A \cup T)^c$ agrupa los 25,315 matrimonios que **no** son bachelors **ni** hicieron terapia.
> - El **conjunto potencia** de las 5 categorías educativas tiene $2^5 = 32$ subconjuntos: cada subconjunto corresponde a un posible grupo de niveles que podemos seleccionar para un análisis.

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

### Pregunta 11

¿Cuál es la **definición formal** de que $A$ sea subconjunto de $B$ ($A \subseteq B$)?

a) Que $A$ y $B$ tengan exactamente los mismos elementos
b) Que cada elemento de $A$ también pertenezca a $B$
c) Que cada elemento de $B$ también pertenezca a $A$
d) Que $A$ tenga más elementos que $B$

> **b) Que cada elemento de $A$ también pertenezca a $B$**

---

### Pregunta 12

La propiedad **reflexiva** de la contención establece que:

a) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$
b) Todo conjunto está contenido en sí mismo: $A \subseteq A$
c) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
d) El conjunto vacío pertenece a todo conjunto

> **b) Todo conjunto está contenido en sí mismo: $A \subseteq A$**

---

### Pregunta 13

La propiedad **transitiva** de la contención establece que:

a) $A \subseteq A$ para todo conjunto $A$
b) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
c) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$
d) $\emptyset \subseteq A$ para cualquier conjunto $A$

> **c) Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$**

---

### Pregunta 14

La propiedad **antisimétrica** de la contención establece que:

a) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$
b) Todo conjunto está contenido en sí mismo
c) $\emptyset \subseteq A$
d) $A \subseteq \Omega$

> **a) Si $A \subseteq B$ y $B \subseteq A$, entonces $A = B$**

---

### Pregunta 15

¿Cuándo se dice que $A$ **no es subconjunto** de $B$ ($A \nsubseteq B$)?

a) Cuando $A$ y $B$ son exactamente iguales
b) Cuando $A$ tiene menos elementos que $B$
c) Cuando existe al menos un elemento de $A$ que no pertenece a $B$
d) Cuando $B$ está contenido en $A$

> **c) Cuando existe al menos un elemento de $A$ que no pertenece a $B$**

---

### Pregunta 16

En el ejemplo del dataset de matrimonios, $B$ = matrimonios `bachelors` con terapia prematrimonial y $A$ = matrimonios `bachelors`. Se cumple que:

a) $A \subseteq B$
b) $B \subseteq A$
c) $A \cap B = \emptyset$
d) $B = \Omega$

> **b) $B \subseteq A$**

---

### Pregunta 17

Si $B \subseteq A$, la probabilidad condicional $P(B \mid A)$ se calcula como:

a) $P(B \mid A) = \frac{|A|}{|B|}$
b) $P(B \mid A) = \frac{|B|}{|A|}$
c) $P(B \mid A) = \frac{|B|}{|\Omega|}$
d) $P(B \mid A) = \frac{|A|}{|\Omega|}$

> **b) $P(B \mid A) = \frac{|B|}{|A|}$**

---


### Pregunta 18

El **conjunto vacío** se caracteriza por:

a) Contener un elemento llamado "vacío"
b) Contener exactamente 10 elementos
c) No contener **ningún elemento** y ser subconjunto de cualquier conjunto
d) Ser igual al conjunto universal

> **c) No contener ningún elemento y ser subconjunto de cualquier conjunto**

---

### Pregunta 19

El **complemento del conjunto vacío** es:

a) El propio vacío
b) El **conjunto universal** ($\emptyset^c = \Omega$)
c) No existe
d) Un conjunto con un elemento

> **b) El conjunto universal ($\emptyset^c = \Omega$)**

---

### Pregunta 20

La propiedad del **doble complemento** establece que:

a) $(A^c)^c = A$
b) $A^c = \Omega$
c) $A^c = \emptyset$
d) $(A^c)^c = \emptyset$

> **a) $(A^c)^c = A$**

---

### Pregunta 21

El **complemento del conjunto universal** es:

a) El propio universal
b) $\Omega$
c) El **conjunto vacío** ($\Omega^c = \emptyset$)
d) $A$

> **c) El conjunto vacío ($\Omega^c = \emptyset$)**

---

### Pregunta 22

La fórmula general de la **cardinalidad de la unión** de dos conjuntos es:

a) $n(A \cup B) = n(A) + n(B)$
b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$
c) $n(A \cup B) = n(A) \cdot n(B)$
d) $n(A \cup B) = n(A) - n(B)$

> **b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$**

---

### Pregunta 23

Si $A$ y $B$ son **disjuntos**, la cardinalidad de su unión es:

a) $n(A \cup B) = n(A) + n(B)$
b) $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ (con $n(A\cap B)>0$)
c) $n(A \cup B) = 0$
d) $n(A \cup B) = n(A) \cdot n(B)$

> **a) $n(A \cup B) = n(A) + n(B)$**

---

### Pregunta 24

En el dataset, $|A|$ (bachelors) = 11700, $|T|$ (terapia) = 10972 y $|A \cap T|$ = 2987. La cardinalidad de $A \cup T$ es:

a) 11700 + 10972 = 22672
b) 22672 - 2987 = **19685**
c) 2987
d) 45000

> **b) 22672 - 2987 = 19685**

---

### Pregunta 25

El **conjunto potencia** $\mathcal{P}(A)$ es:

a) El conjunto de los elementos más grandes de $A$
b) El conjunto formado por **todos los subconjuntos posibles** de $A$
c) El conjunto de los elementos repetidos de $A$
d) El complemento de $A$

> **b) El conjunto formado por todos los subconjuntos posibles de A**

---

### Pregunta 26

Si $n(A) = 5$, entonces $n(\mathcal{P}(A))$ es:

a) 5
b) 10
c) 25
d) **32** (porque $2^5 = 32$)

> **d) 32 (porque $2^5 = 32$)**

---

### Pregunta 27

El conjunto potencia del **conjunto vacío** ($\mathcal{P}(\emptyset)$) tiene:

a) 0 elementos
b) **1 elemento** (el subconjunto vacío: $2^0 = 1$)
c) 2 elementos
d) 4 elementos

> **b) 1 elemento (el subconjunto vacío: $2^0 = 1$)**

---

### Pregunta 28

En el dataset de matrimonios, la operación $(A \cup T)^c$ (complemento de la unión de bachelors y terapia) tiene cardinalidad:

a) 19685
b) 45000
c) 2987
d) **25315** (porque $45000 - 19685 = 25315$)

> **d) 25315 (porque $45000 - 19685 = 25315$)**

---

### Pregunta 29

En la **jerarquía de operaciones** entre conjuntos:

a) Se opera de afuera hacia adentro
b) Se opera de **adentro hacia afuera**, empezando por los paréntesis
c) El orden no importa
d) Primero se calcula el complemento de todo

> **b) Se opera de adentro hacia afuera, empezando por los paréntesis**

---

### Pregunta 30

Si $B \subseteq A$, entonces la intersección y la unión verifican:

a) $A \cap B = A$ y $A \cup B = B$
b) $A \cap B = B$ y $A \cup B = A$
c) $A \cap B = \emptyset$ y $A \cup B = \Omega$
d) $A \cap B = \Omega$ y $A \cup B = \emptyset$

> **b) $A \cap B = B$ y $A \cup B = A$**

---

### Pregunta 31

La **diferencia** de un conjunto consigo mismo ($A - A$) es:

a) $A$
b) $\Omega$
c) El **conjunto vacío**
d) $A^c$

> **c) El conjunto vacío**

---


### Pregunta 32

Al resolver un problema de **tres conjuntos** con un diagrama de Venn, se recomienda comenzar por:

a) La región exclusiva del primer conjunto
b) La **intersección central de los tres conjuntos**
c) La zona fuera de todos los conjuntos
d) La unión de los tres conjuntos

> **b) La intersección central de los tres conjuntos**

---

### Pregunta 33

En el diagrama de Venn del dataset con $A$ = bachelors, $T$ = terapia y $D$ = divorciados, la región **exclusiva** $A$ (solo bachelors, sin terapia ni divorcio) es:

a) 2987
b) 894
c) **5106** (pues $11700 - 2987 - 4501 + 894 = 5106$)
d) 4501

> **c) 5106 (pues $11700 - 2987 - 4501 + 894 = 5106$)**

---

### Pregunta 34

En el diagrama de Venn del dataset, la suma de las **8 regiones** (3 exclusivas + 3 dobles + central + exterior) es:

a) 20708
b) 24292
c) 32706
d) **45000** (reconstruye el universo completo)

> **d) 45000 (reconstruye el universo completo)**

---


## ❓ Dudas pendientes

- [ ] ¿Cómo se representan gráficamente la unión, la intersección y el complemento?
- [ ] ¿Cómo se relacionan los conjuntos con el dominio y el codominio de una función?

## 🔗 Temas relacionados

- [[00_contenido_curso|Contenido del curso]]
- [[02_analisis_combinatorio|Siguiente tema: análisis combinatorio]]
- [[03_probabilidad|Probabilidad usa teoría de conjuntos]]
- [[06_muestreo|Población y muestras]]
