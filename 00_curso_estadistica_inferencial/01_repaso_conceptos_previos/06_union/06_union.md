---
titulo: Unión de conjuntos
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - union
---

# 🔗 Unión de conjuntos

## 🎬 Datos del video

- **Título:** Unión de conjuntos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=AeUt0AzQ9Es)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/AeUt0AzQ9Es?si=-Xfcz5ymH9x66-0z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se introduce la **unión** de conjuntos: los elementos que pertenecen a $A$, a $B$, o a **ambos simultáneamente**, sin duplicar los repetidos. Se estudian sus casos, propiedades y su relación con la probabilidad.

## 🧮 Contenido

## Unión ($A \cup B$)

- **Definición:** elementos que pertenecen a $A$, a $B$, o a **ambos simultáneamente** (los elementos repetidos solo se cuentan una vez).
- **Ejemplo:** $A = \{1, 2, 3\}$, $B = \{3, 4, 5\}$ → $A \cup B = \{1, 2, 3, 4, 5\}$. El $3$ está en ambos pero **no se duplica**.
- **Por comprensión:**

$$
A \cup B = \{x \mid x \in A \lor x \in B\}
$$

Un elemento pertenece a la unión si cumple **al menos una** de las dos condiciones ($\lor$ = "o" inclusivo).

## Casos y ejemplos

- **Unión con intersección distinta del vacío (los repetidos no se duplican):**
  - Ejemplo: $A = \{a, b, c\}$, $B = \{c, d\}$ → $A \cup B = \{a, b, c, d\}$ (el $c$ común aparece una sola vez).
  - Ejemplo: en un gimnasio, los 2,987 socios de yoga **que además** usan la piscina se cuentan una sola vez en $A \cup T$.
- **Unión de conjuntos iguales (idempotencia):** $A \cup A = A$.
  - Ejemplo: $\{2, 4, 6\} \cup \{2, 4, 6\} = \{2, 4, 6\}$.
- **Unión de un conjunto y su subconjunto:** si $B \subseteq A$, entonces $A \cup B = A$.
  - Ejemplo: $A = \{1, 2, 3, 4\}$, $B = \{2, 4\}$ → $A \cup B = \{1, 2, 3, 4\} = A$ (no aporta elementos nuevos).
  - Ejemplo: si $B$ = socios de yoga que usan la piscina ($B \subseteq A$), entonces $A \cup B = A$ (los socios de yoga ya estaban incluidos).
- **Unión de conjuntos disjuntos:** si $A \cap B = \emptyset$, la unión junta todo sin reducir:
  - Ejemplo: $A = \{1, 2\}$, $B = \{3, 4\}$ → $A \cup B = \{1, 2, 3, 4\}$ y $n(A \cup B) = n(A) + n(B) = 2 + 2 = 4$.
  - Ejemplo: los clientes de entrega a domicilio (20,708) y los de recogida en tienda (24,292) son disjuntos → $n(A \cup B) = 20,708 + 24,292 = 45,000 = |\Omega|$.

## Propiedades de la unión

- **Identidad con el vacío:** $A \cup \emptyset = A$ (no se agrega nada).
- **Identidad con el universo:** $A \cup \Omega = \Omega$ (el universo ya lo contiene todo).
- **Idempotencia:** $A \cup A = A$.
- **Complemento:** $A \cup A^c = \Omega$ (todo elemento del contexto o está en $A$ o no lo está, sin excepciones).

> [!tip] Relación con la probabilidad
> Si $A$ y $B$ son **disjuntos**: $P(A \cup B) = P(A) + P(B)$.
> Si **no** lo son: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (se resta el suceso compartido para no contarlo dos veces).

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Con los conjuntos $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, la unión $A \cup B$ es:

a) $\{1, 2, 3, 4, 5\}$
b) $\{3\}$
c) $\{1, 2\}$
d) $\emptyset$

> **a) $\{1, 2, 3, 4, 5\}$**

---

### Pregunta 2

Por comprensión, la unión se define como:

a) $A \cup B = \{x \mid x \in A \land x \in B\}$
b) $A \cup B = \{x \mid x \in A \lor x \in B\}$
c) $A \cup B = \{x \mid x \notin A\}$
d) $A \cup B = \{x \mid x \in A - B\}$

> **b) $A \cup B = \{x \mid x \in A \lor x \in B\}$**

---

### Pregunta 3

Si $A = \{1, 2\}$ y $B = \{3, 4\}$ son **disjuntos**, entonces $|A \cup B|$ es:

a) $2 + 2 = 4$
b) $2 \cdot 2 = 4$
c) $2 - 2 = 0$
d) $\emptyset$

> **a) $2 + 2 = 4$**

---

### Pregunta 4

La unión de un conjunto con el vacío ($A \cup \emptyset$) es:

a) $\emptyset$
b) $A$
c) $\Omega$
d) $A^c$

> **b) $A$**

---

### Pregunta 5

La unión de un conjunto con el universo ($A \cup \Omega$) es:

a) $A$
b) $\emptyset$
c) $\Omega$
d) No existe

> **c) $\Omega$**

---

### Pregunta 6

La propiedad de **idempotencia** de la unión establece que:

a) $A \cup \emptyset = A$
b) $A \cup A = A$
c) $A \cup \Omega = \Omega$
d) $A \cup A^c = \Omega$

> **b) $A \cup A = A$**

---

### Pregunta 7

Si $B \subseteq A$, entonces la unión $A \cup B$ es:

a) $B$
b) $A$
c) $\emptyset$
d) $\Omega$

> **b) $A$**

---

### Pregunta 8

En un gimnasio, $|A|$ (inscritos en yoga) = 11700, $|T|$ (usan la piscina) = 10972 y $|A \cap T| = 2987$. La cardinalidad de $A \cup T$ es:

a) 11700 + 10972 = 22672
b) 22672 - 2987 = **19685**
c) 2987
d) 45000

> **b) 22672 - 2987 = 19685**
---

### Pregunta 9

Si $A$ y $B$ son **disjuntos**, la probabilidad de la unión es:

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
c) $P(A \cup B) = 0$
d) $P(A \cup B) = P(A) \cdot P(B)$

> **a) $P(A \cup B) = P(A) + P(B)$**

---

### Pregunta 10

Si $A$ y $B$ **no** son disjuntos, la probabilidad de la unión es:

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
c) $P(A \cup B) = P(A) \cdot P(B)$
d) $P(A \cup B) = P(A)$

> **b) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$**

---
