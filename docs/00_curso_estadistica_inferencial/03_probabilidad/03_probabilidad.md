---
titulo: Probabilidad
tipo: anotacion-video
tema: probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
  - axiomas
---

# 🎲 Probabilidad

## 🎬 Datos del video

- **Título:** Probabilidad simple, geométrica, axiomática y frecuentista
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

La **probabilidad** cuantifica la incertidumbre: asigna un número entre 0 y 1 a cada suceso de un experimento aleatorio. Hay varias **escuelas o enfoques** para definirla (clásica, frecuentista, axiomática y geométrica), pero todas conducen a la misma idea: el suceso **poco probable** está cerca de 0 y el **muy probable** cerca de 1.

> [!info] Idea principal
> La probabilidad es una **función** $P$ que a cada suceso $A$ (subconjunto del espacio muestral $\Omega$) le asigna un número $P(A) \in [0, 1]$.

## 🧮 Explicación del tema

## Espacio muestral y sucesos

- **Espacio muestral ($\Omega$):** el conjunto de todos los resultados posibles de un experimento.
- **Suceso:** cualquier subconjunto de $\Omega$ (usando la teoría de conjuntos del tema 1).
- **Suceso seguro:** $\Omega$ (siempre ocurre).
- **Suceso imposible:** $\emptyset$ (nunca ocurre).

## Los cuatro enfoques de probabilidad

### 1. Clásica (o de Laplace)

Cuando todos los resultados son **equiprobables**:

$$
P(A) = \frac{\text{número de casos favorables a } A}{\text{número de casos totales}}
$$

> [!example] Ejemplo
> Al lanzar un dado, $P(\text{sacar un 4}) = \frac{1}{6}$.

### 2. Frecuentista

Se define como el **límite de la frecuencia relativa** cuando el número de repeticiones tiende a infinito:

$$
P(A) = \lim_{n \to \infty} \frac{\text{veces que ocurre } A}{n}
$$

La probabilidad frecuentista justifica la **Ley de los Números Grandes**: al repetir un experimento muchas veces, la frecuencia relativa se acerca a la probabilidad teórica.

> [!example] Ejemplo
> Si al lanzar una moneda 10,000 veces obtenemos 5,045 caras, la frecuencia relativa es $5045/10000 = 0.5045$, muy cerca de la teórica $0.5$.

### 3. Axiomática (Kolmogorov)

Define la probabilidad mediante **tres axiomas** que toda función $P$ debe cumplir:

1. **No negatividad:** $P(A) \geq 0$ para todo suceso $A$.
2. **Normalización:** $P(\Omega) = 1$ (el suceso seguro tiene probabilidad 1).
3. **Aditividad:** si $A$ y $B$ son **mutuamente excluyentes** ($A \cap B = \emptyset$), entonces $P(A \cup B) = P(A) + P(B)$.

De estos axiomas se deducen propiedades como:

- $P(\emptyset) = 0$
- $P(A^c) = 1 - P(A)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (regla general de la unión)

### 4. Geométrica

Se basa en **medidas** (longitudes, áreas, volúmenes) en lugar de conteo, cuando hay infinitos resultados:

$$
P(A) = \frac{\text{medida de la región } A}{\text{medida de toda la región }}
$$

> [!example] Ejemplo
> Si se lanza un dardo a un tablero circular, la probabilidad de caer en un cuadrante es el área de ese cuadrante entre el área total.

## Probabilidad condicional

La probabilidad de que ocurra $A$ **sabiendo que ya ocurrió** $B$:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) > 0
$$

## Regla de la multiplicación

$$
P(A \cap B) = P(A \mid B) \cdot P(B)
$$

## Sucesos independientes

Dos sucesos son **independientes** si la ocurrencia de uno no afecta al otro:

$$
P(A \cap B) = P(A) \cdot P(B) \iff A, B \text{ independientes}
$$

> [!warning] Ojo
> **Independiente** ($P(A\cap B)=P(A)P(B)$) no es lo mismo que **mutuamente excluyente** ($A\cap B=\emptyset$). Dos sucesos mutuamente excluyentes (con probabilidad > 0) **nunca** son independientes.

## Probabilidad total

Si $B_1, B_2, \ldots, B_n$ forman una **partición** de $\Omega$ (se cubren todo y son disjuntos), entonces:

$$
P(A) = P(A \mid B_1)P(B_1) + P(A \mid B_2)P(B_2) + \cdots + P(A \mid B_n)P(B_n)
$$

> [!tip] Relación con el curso
> - La **probabilidad total** y el **Teorema de Bayes** se desarrollan a fondo en el tema `03_teorema_bayes`.
> - Los **diagramas de árbol** ayudan a visualizar la probabilidad total.

---

## 🐍 Ejemplo en Python: probabilidades sobre el dataset de matrimonios

Usamos el dataset real (45,000 matrimonios) para calcular probabilidades empíricas (enfoque frecuentista) y condicionales.

```python
import csv
from collections import Counter
from pathlib import Path

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

def cargar():
    with open(RUTA, encoding="utf-8") as f:
        return list(csv.DictReader(f))

filas = cargar()
N = len(filas)
print(f"Universo |Ω| = {N}")

# ---- Probabilidad clásica / frecuentista ----
div = sum(1 for f in filas if f["divorced"] == "1")
P_div = div / N
print(f"P(divorciado) = {div}/{N} = {P_div:.4f}")

couns = sum(1 for f in filas if f["premarital_counseling"] == "1")
print(f"P(terapia prematrimonial) = {couns}/{N} = {couns/N:.4f}")

# ---- Complemento: axioma P(A^c) = 1 - P(A) ----
P_no_div = 1 - P_div
print(f"P(no divorciado) = 1 - P(divorciado) = {P_no_div:.4f}  ({N-div} casos)")

# ---- Sucesos mutuamente excluyentes: divorciado vs casado ----
# N(D ∩ C) = 0  →  P(D ∪ C) = P(D) + P(C)
casados = N - div
P_union = P_div + casados / N
print(f"P(D ∪ C) = P(D) + P(C) = {P_union:.4f}  (debe dar 1, son partición)")

# ---- Probabilidad condicional ----
# P(divorciado | hizo terapia): ¿qué proporción de los que hicieron terapia se divorcian?
# P(D | T) = |D ∩ T| / |T|
D_y_T = sum(1 for f in filas if f["divorced"] == "1"
            and f["premarital_counseling"] == "1")
P_D_dado_T = D_y_T / couns
print(f"P(divorciado | terapia) = {D_y_T}/{couns} = {P_D_dado_T:.4f}")

# P(divorciado | NO hizo terapia)
no_couns = N - couns
D_y_noT = sum(1 for f in filas if f["divorced"] == "1"
              and f["premarital_counseling"] == "0")
P_D_dado_noT = D_y_noT / no_couns
print(f"P(divorciado | sin terapia) = {D_y_noT}/{no_couns} = {P_D_dado_noT:.4f}")

# ---- Independencia (se verá si P(D|T) == P(D)) ----
print(f"\nP(D) = {P_div:.4f}")
print(f"P(D|T) = {P_D_dado_T:.4f}  →  ¿independientes? {abs(P_div - P_D_dado_T) < 0.01}")
```

**Salida real del script (verificada con el dataset):**

```
Universo |Ω| = 45000
P(divorciado) = 20708/45000 = 0.4602
P(terapia prematrimonial) = 10972/45000 = 0.2438

P(no divorciado) = 1 - P(divorciado) = 0.5398  (24292 casos)
P(D ∪ C) = P(D) + P(C) = 1.0000  (debe dar 1, son partición)

P(divorciado | terapia) = 4080/10972 = 0.3719
P(divorciado | sin terapia) = 16628/34028 = 0.4887

P(D) = 0.4602
P(D|T) = 0.3719  →  ¿independientes? False
```

> [!note] Lectura estadística
> - Las probabilidades **condicionales** muestran que hacer terapia prematrimonial reduce claramente la probabilidad de divorcio (0.37 vs 0.49), un dato útil para el análisis.
> - **P(D|T) ≠ P(D)** indica que `divorcio` y `terapia` **no son independientes**: tienen cierta relación.
> - El axioma del complemento y la aditividad se verifican numéricamente con los datos.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **probabilidad clásica** (de Laplace) de un suceso $A$ se define como:

a) La frecuencia relativa observada al repetir el experimento
b) El cociente entre los casos **favorables** a $A$ y los casos **totales**
c) Una medida de área o longitud
d) Un número entre 1 y 10

> **b) El cociente entre los casos favorables a A y los casos totales**

---

### Pregunta 2

Los **tres axiomas de Kolmogorov** (probabilidad axiomática) son:

a) Simetría, reflexividad y transitividad
b) No negatividad, normalización y aditividad
c) Conmutatividad, asociatividad y distributividad
d) Cierre, conmutatividad y existencia del inverso

> **b) No negatividad, normalización y aditividad**

---

### Pregunta 3

Si $A$ y $B$ son **mutuamente excluyentes**, se cumple que:

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cup B) = P(A) \cdot P(B)$
c) $P(A \cap B) = P(A) + P(B)$
d) $P(A \cup B) = 1$

> **a) $P(A \cup B) = P(A) + P(B)$**

---

### Pregunta 4

La probabilidad del **complemento** de $A$ ($A^c$) cumple que:

a) $P(A^c) = P(A)$
b) $P(A^c) = 1 - P(A)$
c) $P(A^c) = P(A) + 1$
d) $P(A^c) = 0$

> **b) $P(A^c) = 1 - P(A)$**

---

### Pregunta 5

La fórmula de la **probabilidad condicional** de $A$ dado $B$ es:

a) $P(A \mid B) = \frac{P(A)}{P(B)}$
b) $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$
c) $P(A \mid B) = P(A) \cdot P(B)$
d) $P(A \mid B) = P(A) + P(B)$

> **b) $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$**

---

### Pregunta 6

Dos sucesos $A$ y $B$ son **independientes** si:

a) $A \cap B = \emptyset$
b) $P(A \cap B) = P(A) \cdot P(B)$
c) $P(A \cup B) = P(A) + P(B)$
d) $P(A \mid B) = 0$

> **b) $P(A \cap B) = P(A) \cdot P(B)$**

---

### Pregunta 7

La **probabilidad geométrica** se basa en:

a) Contar casos favorables y totales
b) Medidas como longitudes, áreas o volúmenes
c) Repetir el experimento muchas veces
d) Solo los axiomas de Kolmogorov

> **b) Medidas como longitudes, áreas o volúmenes**

---

### Pregunta 8

Al lanzar un dado balanceado, la probabilidad de obtener un número **par** es:

a) $2/6$
b) $3/6$
c) $4/6$
d) $1/2$ solo si es frecuentista

> **b) $3/6$**

---

### Pregunta 9

La **probabilidad frecuentista** se define como:

a) El cociente de casos favorables entre totales
b) El límite de la frecuencia relativa cuando el número de repeticiones tiende a infinito
c) La razón entre áreas
d) El resultado de los tres axiomas de Kolmogorov

> **b) El límite de la frecuencia relativa cuando el número de repeticiones tiende a infinito**

---

### Pregunta 10

En el dataset de matrimonios (45,000), hay 20,708 divorciados. La **probabilidad** de que un matrimonio al azar sea divorciado es:

a) 0.4602
b) 0.5398
c) 0.2438
d) 0.5

> **a) 0.4602**

---

### Pregunta 11

Si en el dataset P(divorciado) = 0.46 y P(divorciado | hizo terapia) = 0.37, se puede concluir que:

a) Divorcio y terapia son independientes
b) Divorcio y terapia **no** son independientes (la terapia influye levemente)
c) P(divorciado) siempre vale 0.5
d) La terapia aumenta la probabilidad de divorcio

> **b) Divorcio y terapia no son independientes (la terapia influye levemente)**

---

### Pregunta 12

La **probabilidad total** de un suceso $A$ cuando $B_1, B_2, \ldots, B_n$ forman una partición de $\Omega$ es:

a) $P(A) = \sum_i P(A \mid B_i) P(B_i)$
b) $P(A) = \prod_i P(A \mid B_i)$
c) $P(A) = \sum_i P(B_i)$
d) $P(A) = \max_i P(A \mid B_i)$

> **a) $P(A) = \sum_i P(A \mid B_i) P(B_i)$**

---

## ❓ Dudas pendientes

- [ ] ¿Cómo se dibuja un diagrama de árbol para la probabilidad total?
- [ ] ¿Cómo se aplica la probabilidad geométrica a un problema de intervalos de tiempo?

## 🔗 Temas relacionados

- [[02_analisis_combinatorio|Análisis combinatorio]]
- [[01_repaso_conceptos_previos|Teoría de conjuntos]]
- [[04_variables_aleatorias|Variables aleatorias]]
- [[teoria|Teorema de Bayes]]
- [[00_contenido_curso|Contenido del curso]]
