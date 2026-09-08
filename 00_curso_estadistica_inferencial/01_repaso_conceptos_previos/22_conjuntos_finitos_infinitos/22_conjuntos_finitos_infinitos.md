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
