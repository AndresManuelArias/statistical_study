---
titulo: "Conjuntos finitos e infinitos"
tipo: anotacion-video
tema: "Conjuntos finitos e infinitos"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Conjuntos finitos e infinitos

## 🎬 Datos del video
- **Título:** Conjuntos finitos e infinitos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Conjuntos+finitos+e+infinitos+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Se distinguen los conjuntos finitos, los infinitos numerables y los infinitos no numerables mediante su cardinalidad. Se introduce la comparación de infinitos: hay infinitos "más grandes" que otros, lo que impacta en el tratamiento de espacios muestrales.

## 🧮 Contenido

### Conjuntos finitos

Un conjunto es **finito** si tiene un número finito de elementos, es decir, que se puede contar mediante un entero $n \geq 0$:

$$|A| = n$$

Por ejemplo, $A = \{2, 4, 6\}$ es finito con $|A| = 3$. El conjunto vacío es finito con $|\varnothing| = 0$.

### Conjuntos infinitos numerables

Un conjunto infinito es **numerable** si sus elementos pueden ponerse en biyección con los números naturales:

$$|A| = |\mathbb{N}| = \aleph_0$$

La cardinalidad del conjunto de los naturales se denota $\aleph_0$ (alef cero).

### Ejemplos de conjuntos numerables

- $\mathbb{N}$: los naturales.
- $\mathbb{Z}$: los enteros (se enumeran alternando $0, 1, -1, 2, -2, \dots$).
- $\mathbb{Q}$: los racionales (se pueden ordenar en una tabla y recorrerla en diagonal).

Todos ellos tienen cardinalidad $\aleph_0$.

### Conjuntos infinitos no numerables

Un conjunto infinito es **no numerable** si no se puede poner en biyección con $\mathbb{N}$. Tiene una cardinalidad mayor.

El conjunto de los reales cumple:

$$|\mathbb{R}| > \aleph_0$$

Su cardinalidad se denota $\mathfrak{c}$ (la cardinalidad del continuo). El intervalo $[0,1]$ tampoco es numerable y tiene cardinalidad $\mathfrak{c}$.

### Comparación de infinitos

- Todos los conjuntos numerables tienen cardinalidad $\aleph_0$.
- Los reales tienen cardinalidad $\mathfrak{c}$, con $\mathfrak{c} > \aleph_0$.
- Se puede probar que $|[0,1]| = |\mathbb{R}| = \mathfrak{c}$.
- La idea central (argumento diagonal de Cantor) es que listar todos los reales es imposible: por más lista que se haga, siempre queda un número fuera.

### Comparación entre conjuntos finitos

Entre conjuntos finitos se establece una biyección cuando tienen el mismo número de elementos, y se comparan simplemente por sus cardinalidades. Si $|A| = m$ y $|B| = n$ con $m \neq n$, no existe biyección entre ellos.

### Otras propiedades útiles

- La unión de dos conjuntos finitos es finita, al igual que su producto cartesiano: $|A \times B| = m \cdot n$.
- La unión de dos conjuntos numerables es numerable.
- El producto cartesiano $\mathbb{N} \times \mathbb{N}$ es numerable (se recorre en diagonal).
- En cambio, el conjunto potencia de los naturales $\mathcal{P}(\mathbb{N})$ no es numerable: tiene cardinalidad $\mathfrak{c}$.

## 💡 Ejemplo numérico

**Problema:** Clasificar los siguientes conjuntos según su tipo.

**Paso 1 — $A = \{5, 10, 15\}$:** Tiene 3 elementos → **finito**, $|A| = 3$.

**Paso 2 — $B = \{2, 4, 6, 8, \dots\}$ (pares positivos):** Se enumera como $1 \mapsto 2$, $2 \mapsto 4$, $3 \mapsto 6$, …, lo que define una biyección con $\mathbb{N}$ → **infinito numerable**, $|B| = \aleph_0$.

**Paso 3 — $C = [0,1]$ (todos los reales entre 0 y 1):** No se puede enumerar → **infinito no numerable**, $|C| = \mathfrak{c}$.

**Paso 4 — Comparación:**

$$\aleph_0 < \mathfrak{c}$$

Los pares positivos ($B$) no se pueden poner en biyección con el intervalo $[0,1]$: los números reales "superan" en cantidad a los enteros pares, aunque ambos sean infinitos.

## 🌍 Ejemplo de la vida real

En control de inventario, la colección de artículos en un almacén es finita (se puede contar el número exacto de unidades). En contraste, modelar el peso posible de un producto continuo (como la masa de un paquete) representa un conjunto infinito no numerable, porque entre dos pesos siempre existe otro. Saber esto orienta cómo se muestrean datos discretos frente a continuos.

> [!tip] Relación con el curso
> Distinguir conjuntos finitos, numerables y no numerables determina si se usa probabilidad discreta o continua, y afecta la elección de modelos en inferencia estadística.

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué define un conjunto como finito?

a) No tiene elementos
b) Tiene un número finito de elementos
c) Tiene cardinalidad $\aleph_0$
d) Se puede poner en biyección con $\mathbb{R}$

> **b) Tiene un número finito de elementos**

---

### Pregunta 2

¿Cuál es la cardinalidad del conjunto de los números naturales $\mathbb{N}$?

a) $\mathfrak{c}$
b) $\aleph_0$
c) $0$
d) $\infty$

> **b) $\aleph_0$**

---

### Pregunta 3

¿Cuál de los siguientes conjuntos es numerable?

a) $[0,1]$
b) $(0,1)$
c) $\mathbb{Q}$
d) $\mathbb{R}$

> **c) $\mathbb{Q}$**

---

### Pregunta 4

¿Qué relación existe entre la cardinalidad de los reales $\mathbb{R}$ y la de los naturales $\mathbb{N}$?

a) $|\mathbb{R}| = |\mathbb{N}|$
b) $|\mathbb{R}| < |\mathbb{N}|$
c) $|\mathbb{R}| > |\mathbb{N}|$
d) No se pueden comparar

> **c) $|\mathbb{R}| > |\mathbb{N}|$**

---

### Pregunta 5

¿Qué representa la notación $\mathfrak{c}$?

a) La cardinalidad del conjunto vacío
b) La cardinalidad del continuo, igual a $|[0,1]|$ y $|\mathbb{R}|$
c) La cardinalidad de los números racionales
d) La cardinalidad de los números enteros

> **b) La cardinalidad del continuo, igual a $|[0,1]|$ y $|\mathbb{R}|$**

---

### Pregunta 6

¿Cómo se clasifica el conjunto de los días de la semana?

a) Infinito numerable
b) Infinito no numerable
c) Finito
d) No es un conjunto

> **c) Finito**

---

### Pregunta 7

¿El producto cartesiano $\mathbb{N} \times \mathbb{N}$ es numerable o no numerable?

a) No numerable, porque tiene dos dimensiones
b) Numerable, porque se puede recorrer en diagonal
c) Finito, porque es un producto de dos conjuntos
d) No numerable, porque tiene cardinalidad $\mathfrak{c}$

> **b) Numerable, porque se puede recorrer en diagonal**

---

### Pregunta 8

¿El conjunto potencia de los naturales $\mathcal{P}(\mathbb{N})$ es numerable o no numerable?

a) Numerable, porque los subconjuntos se pueden listar
b) Numerable, porque $\mathbb{N}$ es numerable
c) No numerable, tiene cardinalidad $\mathfrak{c}$
d) Finito, porque $\mathbb{N}$ tiene un número limitado de subconjuntos

> **c) No numerable, tiene cardinalidad $\mathfrak{c}$**

---

### Pregunta 9

¿Qué sucede con la unión de dos conjuntos numerables?

a) Siempre es no numerable
b) Puede ser finita, numerable o no numerable
c) Es numerable
d) Solo es numerable si los conjuntos son iguales

> **c) Es numerable**

---

### Pregunta 10

¿Qué cardinalidad tiene el conjunto vacío $\varnothing$?

a) $\aleph_0$
b) $\mathfrak{c}$
c) $\infty$
d) $0$

> **d) $0$**
