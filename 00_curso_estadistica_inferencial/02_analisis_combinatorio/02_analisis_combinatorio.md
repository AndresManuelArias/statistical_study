---
titulo: Análisis combinatorio
tipo: anotacion-video
tema: permutaciones y combinaciones
tags:
  - estadistica-inferencial
  - analisis-combinatorio
  - permutaciones
  - combinaciones
---

# ♻️ Análisis Combinatorio

## 🎬 Datos del video

- **Título:** Análisis combinatorio (permutaciones y combinaciones)
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

El análisis combinatorio estudia **cómo contar** el número de formas en que se pueden **ordenar** o **seleccionar** objetos. Es la herramienta base para calcular probabilidades en espacios muestrales finitos, porque en muchos casos necesitamos conocer cuántos resultados posibles hay sin tener que enumerarlos uno por uno.

> [!info] Idea principal
> Hay **dos preguntas** fundamentales al contar: ¿importa el **orden**? (permutaciones) o ¿no importa el orden? (combinaciones).

## 🧮 Explicación del tema

La probabilidad clásica se define como $P(A) = \frac{\text{casos favorables}}{\text{casos totales}}$. Para usarla en problemas con muchos elementos, necesitamos **contar correctamente** esos casos, y ahí entra el análisis combinatorio.

## Principio fundamental de conteo (regla del producto)

Si un proceso se puede dividir en $k$ etapas, y la etapa $i$ tiene $n_i$ opciones, entonces el número total de resultados es el **producto** de las opciones:

$$
\text{total} = n_1 \times n_2 \times \cdots \times n_k
$$

> [!example] Ejemplo
> Un menú ofrece 4 entradas, 5 platos fuertes y 3 postres. El número de comidas distintas (una de cada categoría) es $4 \times 5 \times 3 = 60$.

## Factorial

El **factorial** de un entero no negativo $n$, denotado $n!$, es el producto de todos los enteros positivos de 1 a $n$:

$$
n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1
$$

Con las convenciones $0! = 1$ y $1! = 1$.

| $n$ | $n!$ |
|-----|------|
| 0 | 1 |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |

## Permutaciones (sí importa el orden)

Una **permutación** es un **arreglo ordenado** de elementos. Las permutaciones de $k$ elementos tomados de un total de $n$ (sin repetición) se calculan con:

$$
P(n, k) = \frac{n!}{(n-k)!}
$$

Cuando $k = n$ (se ordenan **todos** los elementos), se simplifica a $P(n, n) = n!$.

> [!example] Ejemplo
> ¿De cuántas formas pueden llegar a la meta 3 corredores que arrancan de 8? Orden importa:
> $P(8, 3) = \frac{8!}{(8-3)!} = \frac{8!}{5!} = 8 \times 7 \times 6 = 336$

## Combinaciones (no importa el orden)

Una **combinación** es una **selección** de elementos **sin importar el orden**. Las combinaciones de $k$ elementos tomados de $n$ (sin repetición) se calculan con:

$$
C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

> [!example] Ejemplo
> ¿De cuántas formas se elige un comité de 3 personas entre 8? No importa el orden:
> $C(8, 3) = \binom{8}{3} = \frac{8!}{3!\,5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$

## Permutaciones vs combinaciones: tabla comparativa

| Situación | ¿Importa el orden? | Fórmula |
|-----------|--------------------|---------|
| Ordenar a 3 de 8 en un podio | Sí | $P(8,3) = 336$ |
| Elegir un comité de 3 de 8 | No | $C(8,3) = 56$ |

> [!tip] Clave
> - Palabras que sugieren **permutaciones**: "ordenar", "arreglar", "clasificar", "puestos", "claves", "códigos", "contraseñas".
> - Palabras que sugieren **combinaciones**: "elegir", "seleccionar", "comité", "comisión", "grupo", "subconjunto".

## Propiedades útiles de las combinaciones

1. **Simetría:** $\binom{n}{k} = \binom{n}{n-k}$ (elegir 3 de 8 es lo mismo que dejar fuera 5 de 8).
2. **Conteo de subconjuntos:** el número total de subconjuntos de un conjunto de $n$ elementos es $2^n$ (incluye el vacío y el propio conjunto).
3. **Identidad de Pascal:** $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.

> [!tip] Relación con la probabilidad
> - Para calcular una probabilidad clásica contamos: $P = \frac{C(\text{favorables})}{C(\text{posibles})}$.
> - El **conteo de subconjuntos** ($2^n$) conecta con el conjunto potencia del tema anterior.

---

## 🐍 Ejemplo en Python: combinatoria sobre probabilidades

Aplicamos la combinatoria a datos del dataset de matrimonios para responder preguntas de probabilidad. Por ejemplo, si elegimos al azar 3 matrimonios del conjunto de los 11,700 con licenciatura, ¿de cuántas formas posibles se puede hacer?

```python
import math

# Datos reales del dataset de matrimonios
UNIV = 45000          # total matrimonios (|Ω|)
BACHELORS = 11700     # con education_level == bachelors
DIVORCIADOS = 20708   # con divorced == 1

# ---- Permutaciones: orden importa ----
# ¿De cuántas formas distintas se puede hacer un podio (1º, 2º, 3º)
# tomando 3 matrimonios de los 45,000?
perm = math.perm(UNIV, 3)
print(f"P({UNIV}, 3) = {perm:,}  (podios distintos)")

# ---- Combinaciones: orden no importa ----
# ¿De cuántas formas se elige un subconjunto de 3 matrimonios de los 45,000?
comb = math.comb(UNIV, 3)
print(f"C({UNIV}, 3) = {comb:,}  (grupos de 3, sin orden)")

# ---- Subconjuntos / conjunto potencia ----
# Número de subconjuntos de un conjunto de 3 elementos = 2^3
n = 3
print(f"Subconjuntos de un conjunto de {n} elementos = 2^{n} = {2**n}")

# ---- Probabilidad clásica vía combinatoria ----
# Probabilidad de que al elegir 3 matrimonios al azar (del universo),
# los 3 sean bachelors: C(11700,3) / C(45000,3)
favorables = math.comb(BACHELORS, 3)
posibles = math.comb(UNIV, 3)
p = favorables / posibles
print(f"\nP(3 elegidos ∈ bachelors) = C(11700,3)/C(45000,3)")
print(f"  = {favorables:,} / {posibles:,} = {p:.6f}")

# ---- Propiedades ----
print(f"\nSimetría: C(8,3) {math.comb(8,3)} == C(8,5) {math.comb(8,5)}")
print(f"Identidad de Pascal: C(8,3) {math.comb(8,3)} == C(7,2)+C(7,3) "
      f"{math.comb(7,2)+math.comb(7,3)}")
```

**Salida real del script (verificada con el dataset):**

```
P(45000, 3) = 91,102,269,241,148,000  (podios distintos)
C(45000, 3) = 15,183,349,351,500  (grupos de 3, sin orden)
Subconjuntos de un conjunto de 3 elementos = 2^3 = 8

P(3 elegidos ∈ bachelors) = C(11700,3)/C(45000,3)
  = 266,794,445 / 15,183,349,351,500 = 0.0000176

Simetría: C(8,3) 56 == C(8,5) 56
Identidad de Pascal: C(8,3) 56 == C(7,2)+C(7,3) 56
```

> [!note] Lectura estadística
> - El número de **permutaciones** es mucho mayor que el de **combinaciones** porque cada grupo ordenado distinto cuenta como un resultado diferente.
> - La probabilidad clásica se reduce a un cociente de conteos favorables entre posibles.
> - La **simetría** $\binom{n}{k} = \binom{n}{n-k}$ te permite elegir el cálculo más corto.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la diferencia fundamental entre una **permutación** y una **combinación**?

a) En la permutación no se permiten repeticiones; en la combinación sí
b) En la permutación el **orden importa**; en la combinación el orden **no importa**
c) La permutación se usa solo con números; la combinación solo con letras
d) Son lo mismo, solo cambia la notación

> **b) En la permutación el orden importa; en la combinación el orden no importa**

---

### Pregunta 2

El número de formas de **ordenar** a 3 personas en un podio (1º, 2º y 3º) elegidas entre 8 participantes se calcula con:

a) $C(8, 3)$
b) $P(8, 3)$
c) $2^8$
d) $8!$

> **b) $P(8, 3)$**

---

### Pregunta 3

El valor de $P(8, 3) = \frac{8!}{(8-3)!}$ es:

a) 56
b) 336
c) 40320
d) 24

> **b) 336**

---

### Pregunta 4

El número de formas de elegir un **comité de 3 personas** entre 8 (sin importar el orden) es:

a) $C(8, 3) = 56$
b) $P(8, 3) = 336$
c) $2^8 = 256$
d) $8! = 40320$

> **a) $C(8, 3) = 56$**

---

### Pregunta 5

¿Cuál es el valor de $5!$ (factorial de 5)?

a) 25
b) 120
c) 60
d) 720

> **b) 120**

---

### Pregunta 6

Un menú ofrece 4 entradas, 5 platos fuertes y 3 postres. De acuerdo con el **principio fundamental de conteo**, el número de comidas distintas (una de cada categoría) es:

a) 4 + 5 + 3 = 12
b) 4 × 5 × 3 = 60
c) 4 × 5 = 20
d) 5 × 3 = 15

> **b) 4 × 5 × 3 = 60**

---

### Pregunta 7

El número total de **subconjuntos** (incluyendo el vacío y el propio conjunto) que tiene un conjunto de 3 elementos es:

a) 3
b) 6
c) 8
d) 9

> **c) 8**

---

### Pregunta 8

Una clave de 4 dígitos (donde el orden importa y los dígitos se toman del 0 al 9 sin repetir) tiene:

a) $10^4 = 10000$ opciones
b) $P(10, 4) = 5040$ opciones
c) $C(10, 4) = 210$ opciones
d) $4! = 24$ opciones

> **b) $P(10, 4) = 5040$ opciones**

---

### Pregunta 9

La propiedad de **simetría** de las combinaciones establece que:

a) $\binom{n}{k} = \binom{n}{n-k}$
b) $\binom{n}{k} = n!$
c) $\binom{n}{k} = P(n,k)$
d) $\binom{n}{k} = k!$

> **a) $\binom{n}{k} = \binom{n}{n-k}$**

---

### Pregunta 10

En el dataset de matrimonios hay 45,000 matrimonios y 11,700 con nivel educativo `bachelors`. Si se eligen 2 matrimonios al azar, la probabilidad de que ambos sean `bachelors` (sin importar el orden) es:

a) $C(11700, 2) / 45000$
b) $C(11700, 2) / C(45000, 2)$
c) $P(11700, 2) / 45000$
d) $2/45000$

> **b) $C(11700, 2) / C(45000, 2)$**

---

## ❓ Dudas pendientes

- [ ] ¿Cuándo se usan permutaciones con repetición (elementos repetidos)?
- [ ] ¿Cómo se relaciona el triángulo de Pascal con las combinaciones?

## 🔗 Temas relacionados

- [[01_repaso_conceptos_previos|Conceptos previos]]
- [[03_probabilidad|Probabilidad]]
- [[00_contenido_curso|Contenido del curso]]
