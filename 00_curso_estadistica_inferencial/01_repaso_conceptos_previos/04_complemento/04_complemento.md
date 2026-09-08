---
titulo: Conjunto complemento
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - complemento
---

# 🔄 Conjunto complemento

## 🎬 Datos del video

- **Título:** Conjunto complemento | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=HJAors8090A)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

<iframe width="560" height="315" src="https://www.youtube.com/embed/HJAors8090A?si=BegbbbX-H8Yq-qKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen

Se introduce el **complemento** de un conjunto ($A^c$): los elementos del universo que **no** pertenecen a $A$. Se estudian sus propiedades (complemento del vacío, doble complemento, complemento del universal) y su representación con **diagramas de Venn-Euler**.

## 🧮 Contenido

## Diagramas de Venn-Euler

- Representación gráfica mediante un **rectángulo** para el universo ($U$) y **circunferencias** para los subconjuntos.
- La zona exterior a la circunferencia de $A$ (dentro del rectángulo) es $A^c$.

## Conjunto Complemento ($A^c$)

- **Definición:** elementos que pertenecen al conjunto universal pero *no* pertenecen al conjunto dado.
- Expresión por comprensión:

$$
A^c = \{x \in U \mid x \notin A\}
$$

## Propiedades de la complementación

1. **Complemento del vacío:** $\emptyset^c = \Omega$.
2. **Doble complemento:** $(A^c)^c = A$.
3. **Complemento del universal:** $\Omega^c = \emptyset$.
4. **Unión con su complemento:** $A \cup A^c = \Omega$ (todo el universo).
5. **Intersección con su complemento:** $A \cap A^c = \emptyset$ (disjuntos).

> [!tip] Relación con la probabilidad
> $P(A^c) = 1 - P(A)$: la probabilidad de que **no** ocurra $A$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Si $\Omega = \{1, 2, 3, 4, 5\}$ y $A = \{1, 2\}$, entonces el **complemento** $A^c$ es:

a) $\{1, 2\}$
b) $\{3, 4, 5\}$
c) $\{1, 2, 3, 4, 5\}$
d) $\emptyset$

> **b) $\{3, 4, 5\}$**

---

### Pregunta 2

El **complemento del conjunto vacío** es:

a) El propio vacío
b) El **conjunto universal** ($\emptyset^c = \Omega$)
c) No existe
d) Un conjunto con un elemento

> **b) El conjunto universal ($\emptyset^c = \Omega$)**

---

### Pregunta 3

La propiedad del **doble complemento** establece que:

a) $(A^c)^c = A$
b) $A^c = \Omega$
c) $A^c = \emptyset$
d) $(A^c)^c = \emptyset$

> **a) $(A^c)^c = A$**

---

### Pregunta 4

El **complemento del conjunto universal** es:

a) El propio universal
b) $\Omega$
c) El **conjunto vacío** ($\Omega^c = \emptyset$)
d) $A$

> **c) El conjunto vacío ($\Omega^c = \emptyset$)**

---

### Pregunta 5

La probabilidad del complemento se calcula como:

a) $P(A^c) = P(A)$
b) $P(A^c) = 1 - P(A)$
c) $P(A^c) = P(A) + 1$
d) $P(A^c) = P(\Omega)$

> **b) $P(A^c) = 1 - P(A)$**

---

### Pregunta 6

La intersección de un conjunto con su complemento es:

a) El universo
b) El propio conjunto
c) El **conjunto vacío** ($A \cap A^c = \emptyset$)
d) $A^c$

> **c) El conjunto vacío ($A \cap A^c = \emptyset$)**

---

### Pregunta 7

La unión de un conjunto con su complemento es:

a) El conjunto vacío
b) El propio conjunto
c) El **universo** ($A \cup A^c = \Omega$)
d) $A^c$

> **c) El universo ($A \cup A^c = \Omega$)**

---

### Pregunta 8

En una tienda, $|A|$ (clientes que compran pan) = 11700 y $|\Omega|$ (clientes registrados) = 45000. Entonces $|A^c|$ es:

a) 11700
b) 33300
c) 45000
d) 0

> **b) 33300**
---

### Pregunta 9

En un gimnasio, $A$ = socios inscritos en yoga (11,700), $T$ = socios que usan la piscina (10,972) y $|A \cup T| = 19{,}685$. La operación $(A \cup T)^c$ (socios que **no** están ni en yoga ni en piscina) tiene cardinalidad:

a) 19685
b) 45000
c) 2987
d) **25315** (porque $45000 - 19685 = 25315$)

> **d) 25315 (porque $45000 - 19685 = 25315$)**
---

### Pregunta 10

En un **diagrama de Venn-Euler**, el complemento de $A$ ($A^c$) se representa como:

a) La circunferencia de $A$
b) La zona **exterior** a $A$ pero dentro del rectángulo del universo
c) El rectángulo completo
d) La intersección de $A$ con el universo

> **b) La zona exterior a $A$ pero dentro del rectángulo del universo**

---
