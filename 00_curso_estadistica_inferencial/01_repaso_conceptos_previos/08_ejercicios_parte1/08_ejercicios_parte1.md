---
titulo: Ejercicios de operaciones con conjuntos (parte 1)
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - ejercicios
---

# 🧮 Ejercicios de operaciones con conjuntos (parte 1)

## 🎬 Datos del video

- **Título:** Ejercicios de operaciones con conjuntos (parte 1) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=l-k3H8ePNDs)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/l-k3H8ePNDs?si=8J5GgtyIziPNFGGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se resuelven ejercicios de operaciones con conjuntos usando la **jerarquía de operaciones** (de adentro hacia afuera) y la **resolución gráfica** con diagramas de Venn-Euler: complemento de una unión, complemento de una diferencia, intersecciones complejas e intersecciones de uniones múltiples.

## 🧮 Contenido

### Jerarquía de operaciones

Se opera **de adentro hacia afuera**, empezando por los **paréntesis**:

1. Primero los paréntesis (y los complementos internos).
2. Luego uniones e intersecciones que quedan.
3. Al final los complementos externos.

> [!example] Ejemplo
> $(A \cup B)^c$: primero se calcula $A \cup B$ y después se toma su complemento. No es lo mismo que $A^c \cup B^c$.

### Resolución gráfica paso a paso (diagramas de Venn-Euler)

- **Complemento de una unión:** $(A \cup B)^c$ → se sombrea primero $A \cup B$ y después todo lo que **no** está en esa unión.
- **Complemento de una diferencia:** $(B - A)^c$ → se sombrea primero $B - A$ (lo que está en $B$ pero no en $A$) y después su complemento.
- **Intersecciones complejas con conjuntos vacíos:** si alguna intersección interna es $\emptyset$, el resultado se simplifica (suele quedar $\emptyset$ o reducirse).
- **Intersecciones de uniones múltiples:** $(A \cup B) \cap (A \cup C)$ → se resuelve cada paréntesis (unión) y luego se intersecan los resultados.

### Propiedades útiles de la jerarquía

- $(A \cup B)^c \neq A^c \cup B^c$: el complemento de una unión **no** se reparte sobre cada conjunto (¡cuidado con este error clásico!).
- Recuerda además: $(B - A)^c = (B \cap A^c)^c = B^c \cup A$.

> [!tip] Relación con la probabilidad
> Saber operar con jerarquía es clave para calcular probabilidades de sucesos compuestos como $P((A \cup B)^c)$, que equivale a $1 - P(A \cup B)$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

En la **jerarquía de operaciones** entre conjuntos:

a) Se opera de afuera hacia adentro
b) Se opera de **adentro hacia afuera**, empezando por los paréntesis
c) El orden no importa
d) Primero se calcula el complemento de todo

> **b) Se opera de adentro hacia afuera, empezando por los paréntesis**

---

### Pregunta 2

Para resolver $(A \cup B)^c$, el orden correcto es:

a) Primero el complemento, luego la unión
b) Primero la unión $A \cup B$ y después su complemento
c) Primero $A^c$ y luego $B^c$
d) Cualquier orden da el mismo resultado

> **b) Primero la unión $A \cup B$ y después su complemento**

---

### Pregunta 3

¿$(A \cup B)^c$ es igual a $A^c \cup B^c$?

a) Sí, siempre
b) No, nunca
c) Solo si $A = B$
d) Solo si $A \cap B = \emptyset$

> **b) No, nunca**

---

### Pregunta 4

Con $A = \{1, 2, 3\}$, $B = \{3, 4\}$ y $\Omega = \{1, 2, 3, 4, 5\}$, el resultado de $(A \cup B)^c$ es:

a) $\{3\}$
b) $\{1, 2, 3, 4\}$
c) $\{5\}$
d) $\emptyset$

> **c) $\{5\}$**

---

### Pregunta 5

Con $B = \{2, 3\}$ y $A = \{1, 2\}$, el conjunto $(B - A)^c$ (dentro de un universo $\Omega = \{1, 2, 3, 4\}$) es:

a) $\{2\}$
b) $\{1, 3, 4\}$
c) $\{1, 2, 4\}$
d) $\{4\}$

> **c) $\{1, 2, 4\}$**

---

### Pregunta 6

Si la intersección interna de una operación compleja es vacía (por ejemplo $A \cap B = \emptyset$), entonces $(A \cap B) \cup C$ se simplifica a:

a) $\emptyset$
b) $A$
c) $B$
d) **$C$** (pues $\emptyset \cup C = C$)

> **d) $C$ (pues $\emptyset \cup C = C$)**

---

### Pregunta 7

Para resolver $(A \cup B) \cap (A \cup C)$ se debe:

a) Intersecar $B$ con $C$ directamente
b) Resolver **cada paréntesis (unión)** y luego intersecar los resultados
c) Tomar solo $A$
d) Unir todo sin paréntesis

> **b) Resolver cada paréntesis (unión) y luego intersecar los resultados**

---

### Pregunta 8

Con $A = \{1, 2\}$, $B = \{2, 3\}$ y $C = \{3, 4\}$, el resultado de $(A \cup B) \cap (A \cup C)$ es:

a) $\{1, 2, 3\}$
b) $\{2\}$
c) $\{1, 2, 3, 4\}$
d) $\{1, 2\}$

> **a) $\{1, 2, 3\}$**

---

### Pregunta 9

El complemento de la diferencia $(B - A)^c$ es equivalente a:

a) $B^c \cup A$
b) $B \cap A^c$
c) $A \cap B$
d) $\Omega - B$

> **a) $B^c \cup A$**

---

### Pregunta 10

En el diagrama de Venn, la región de $(A \cup B)^c$ se sombrea:

a) Dentro de $A$ y $B$
b) Dentro de $A$ pero fuera de $B$
c) **Fuera** de $A$ y $B$ (solo en el rectángulo del universo)
d) Fuera del universo

> **c) Fuera de $A$ y $B$ (solo en el rectángulo del universo)**

---
