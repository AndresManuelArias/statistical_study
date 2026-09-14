---
titulo: Probabilidad Axiomática
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Probabilidad Axiomática

## 🎬 Datos del video
- **Título:** Probabilidad Axiomática | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Probabilidad+Axiomática+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/1QY-sYl2G6M?si=JwQ9ywaQIkP54j2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## 📋 Resumen
Andréi Kolmogórov formalizó la teoría de la probabilidad en 1933 mediante tres axiomas que toda función de probabilidad debe cumplir. Este enfoque permite construir la probabilidad desde bases lógicas sólidas, sin depender de interpretaciones frecuentistas o subjetivas.

## 🧮 Contenido

### Espacio muestral
El **espacio muestral** $\Omega$ es el conjunto de todos los resultados posibles de un experimento. Cada subconjunto $A \subseteq \Omega$ es un **evento**.

Ejemplo: Para un dado, $\Omega = \{1, 2, 3, 4, 5, 6\}$. El evento "número par" es $A = \{2, 4, 6\}$.

### Los tres axiomas de Kolmogórov

**Axioma 1 — No negatividad:**
$$0 \leq P(A) \leq 1 \quad \forall \, A \subseteq \Omega$$

La probabilidad de cualquier evento es un número real entre 0 y 1 (inclusivos). Un evento imposible tiene $P = 0$ y un evento seguro tiene $P = 1$.

**Axioma 2 — Normalización:**
$$P(\Omega) = 1$$

La probabilidad del espacio muestral completo es 1: algo siempre ocurre. No puede fallar todos los resultados posibles.

**Axioma 3 — Aditividad para eventos disjuntos:**
Si $A \cap B = \emptyset$ (eventos mutuamente excluyentes), entonces:
$$P(A \cup B) = P(A) + P(B)$$

Para una secuencia infinita de eventos disjuntos $A_1, A_2, \dots$:
$$P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$

### Consecuencias derivadas de los axiomas
A partir de estos tres axiomas se demuestran todas las demás propiedades:

- **Probabilidad del evento vacío:** $P(\emptyset) = 0$
- **Complemento:** $P(A^c) = 1 - P(A)$
- **Unión general:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- **Monotonía:** Si $A \subseteq B$, entonces $P(A) \leq P(B)$
- **Cota superior:** $P(A) \leq 1$ para todo $A$

### Demostración rápida del complemento
Como $A \cup A^c = \Omega$ y $A \cap A^c = \emptyset$:
$$P(\Omega) = P(A) + P(A^c) = 1 \implies P(A^c) = 1 - P(A)$$

Esta propiedad es extremadamente útil en la práctica: a veces es más fácil calcular la probabilidad del complemento que la del evento directamente.

### Terna de Kolmogórov
Formalmente, el espacio de probabilidad se define como la terna $(\Omega, \mathcal{F}, P)$, donde:
- $\Omega$: espacio muestral.
- $\mathcal{F}$: una $\sigma$-álgebra de eventos (colección cerrada bajo complementos y uniones numerables).
- $P$: una función de probabilidad que cumple los tres axiomas.

Esta estructura garantiza consistencia en las asignaciones de probabilidad.

## 💡 Ejemplo numérico
Un dado justo de 6 caras se lanza una vez. Espacio muestral: $\Omega = \{1,2,3,4,5,6\}$.

Definimos: $A = \{1,2,3\}$ (tercio bajo), $B = \{4,5\}$ (tercio medio), $C = \{6\}$.

Verificación de axiomas:
- $P(A) = \frac{3}{6} = 0.5000$, $P(B) = \frac{2}{6} \approx 0.3333$, $P(C) = \frac{1}{6} \approx 0.1667$
- Axioma 1: $0 \leq 0.5 \leq 1$, $0 \leq 0.3333 \leq 1$, $0 \leq 0.1667 \leq 1$ ✓
- Axioma 2: $P(\Omega) = \frac{6}{6} = 1$ ✓
- Axioma 3: $A \cap B = \emptyset$, $P(A \cup B) = 0.5 + 0.3333 = 0.8333$ ✓

Complemento de $A$: $P(A^c) = 1 - 0.5 = 0.5$.
Verificación: $A^c = \{4,5,6\}$, $P(A^c) = \frac{3}{6} = 0.5$ ✓

Unión general: $P(A \cup C) = P(A) + P(C) - P(A \cap C) = 0.5 + 0.1667 - 0 = 0.6667$
Verificación: $A \cup C = \{1,2,3,6\}$, $P = \frac{4}{6} \approx 0.6667$ ✓

## 🌍 Ejemplo de la vida real
Una empresa de control de calidad clasifica cada pieza producida en tres categorías mutuamente excluyentes: "sin defecto", "defecto menor" y "defecto crítico". Si $P(\text{sin defecto}) = 0.92$, $P(\text{defecto menor}) = 0.06$ y $P(\text{defecto crítico}) = 0.02$:

Suma: $0.92 + 0.06 + 0.02 = 1.00$ ✓ (Axioma 2 verificado)

Un auditor calcula:
$P(\text{defecto}) = P(\text{menor}) + P(\text{crítico}) = 0.06 + 0.02 = 0.08$ (Axioma 3,son disjuntos)
$P(\text{sin defecto}) = 1 - P(\text{defecto}) = 1 - 0.08 = 0.92$ (complemento)

> [!tip] Relación con el curso
> Los axiomas de Kolmogórov son los cimientos de toda la inferencia estadística. Cada prueba de hipótesis, intervalo de confianza y modelo probabilístico se construye sobre estas reglas básicas.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1
¿Cuál es el enunciado del primer axioma de Kolmogórov (no negatividad)?

a) P(A) ≥ 0 para todo evento A
b) P(A) > 0 para todo evento A distinto de ∅
c) P(A) = 1 para todo evento A
d) 0 < P(A) < 1 para todo evento A

> **a) P(A) ≥ 0 para todo evento A**

---

### Pregunta 2
¿Qué establece el axioma de normalización?

a) P(A) + P(A^c) = 1
b) P(∅) = 0
c) P(Ω) = 1
d) P(A ∪ B) = P(A) + P(B)

> **c) P(Ω) = 1**

---

### Pregunta 3
Si A y B son eventos disjuntos con P(A) = 0,4 y P(B) = 0,3, ¿cuál es P(A ∪ B)?

a) 0,7
b) 0,12
c) 0,1
d) 0,82

> **a) 0,7**

---

### Pregunta 4
Si P(A) = 0,35, ¿cuál es P(A^c)?

a) 0,65
b) 0,35
c) 1,35
d) 0

> **a) 0,65**

---

### Pregunta 5
¿Qué condición deben cumplir dos eventos para poder aplicar la aditividad directa del axioma 3 (sin usar la fórmula de la unión general)?

a) Que P(A) ≠ P(B)
b) Que A ⊆ B
c) Que A ∩ B = ∅
d) Que A ∪ B = Ω

> **c) Que A ∩ B = ∅**

---

### Pregunta 6
¿Cuál es la probabilidad del evento vacío según los axiomas?

a) 1
b) 0
c) No está definida
d) Depende del experimento

> **b) 0**

---

### Pregunta 7
Si P(A) = 0,6 y P(A ∩ B) = 0,2, ¿cuál es la probabilidad mínima que puede tener P(A ∪ B)?

a) 0,4
b) 0,6
c) 0,8
d) 1,0

> **b) 0,6**

---

### Pregunta 8
Si $A \subseteq B$ y P(A) = 0,3, ¿cuál de las siguientes afirmaciones es siempre verdadera?

a) P(B) = 0,3
b) P(B) ≥ 0,3
c) P(B) ≤ 0,3
d) P(B) = 1 - 0,3

> **b) P(B) ≥ 0,3**

---

### Pregunta 9
¿Qué componente de la terna de Kolmogórov representa la colección cerrada bajo complementos y uniones numerables?

a) Ω
b) P
c) F
d) A

> **c) F**

---

### Pregunta 10
Un auditor clasifica piezas como "sin defecto" (P = 0,92) o "con defecto" (P = 0,08). ¿Qué propiedad se usa para calcular P(sin defecto) a partir de P(con defecto)?

a) Axioma 1 (no negatividad)
b) Axioma 2 (normalización)
c) Complemento: P(sin defecto) = 1 - P(defecto)
d) Monotonía

> **c) Complemento: P(sin defecto) = 1 - P(defecto)**
