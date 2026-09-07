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


## ❓ Dudas pendientes

- [ ] ¿Cómo se representan gráficamente la unión, la intersección y el complemento?
- [ ] ¿Cómo se relacionan los conjuntos con el dominio y el codominio de una función?

## 🔗 Temas relacionados

- [[00_contenido_curso|Contenido del curso]]
- [[02_analisis_combinatorio|Siguiente tema: análisis combinatorio]]
- [[03_probabilidad|Probabilidad usa teoría de conjuntos]]
- [[06_muestreo|Población y muestras]]
