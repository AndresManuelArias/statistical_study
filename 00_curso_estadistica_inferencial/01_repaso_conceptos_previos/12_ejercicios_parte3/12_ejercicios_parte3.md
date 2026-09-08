---
titulo: Ejercicios de operaciones con conjuntos (parte 3)
tipo: anotacion-video
tema: teoria de conjuntos
tags:
  - estadistica-inferencial
  - teoria-de-conjuntos
  - ejercicios
---

# 🧮 Ejercicios de operaciones con conjuntos (parte 3)

## 🎬 Datos del video

- **Título:** Ejercicios de operaciones con conjuntos (parte 3) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](http://www.youtube.com/watch?v=U6U5aaL12tE)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Se resuelven **problemas de aplicación práctica** (encuestas y diagramas de Venn): traducir enunciados de texto a operaciones de conjuntos, resolver casos de **dos conjuntos** con la fórmula de cardinalidad por despeje, y casos avanzados de **tres conjuntos** comenzando por la intersección central.

## 🧮 Contenido

## Traducción de enunciados a operaciones de conjuntos

Los problemas de aplicación traducen un enunciado a **operaciones de conjuntos** y se resuelven despejando la cardinalidad de cada región del **diagrama de Venn-Euler**.

Palabras clave:

| Enunciado | Operación |
|-----------|-----------|
| "y", "ambos", "a la vez" | $A \cap B$ |
| "o", "al menos uno" | $A \cup B$ |
| "no", "sin" | $A^c$ o $A - B$ |
| "solo", "exclusivamente" | Región exclusiva de la intersección hacia afuera |

## Caso de dos conjuntos (fórmula por despeje)

Con dos conjuntos basta la fórmula de cardinalidad y despejar la incógnita:

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B)
$$

> [!example] Ejemplo
> En una encuesta de 100 personas, 60 usan bicicleta ($|B| = 60$), 50 usan bus ($|U| = 50$) y 20 usan ambos ($|B \cap U| = 20$). Usan **al menos uno**:
> $$n(B \cup U) = 60 + 50 - 20 = 90$$

## Regla de oro con tres conjuntos

Cuando hay tres conjuntos, **se comienza siempre por la intersección central** (la región común a los tres) y desde ahí se van restando las regiones hacia afuera, hasta llegar a las zonas exclusivas de cada conjunto.

> [!example] Ejemplo con tres conjuntos (tienda en línea)
> Con $A$ = clientes que compran por la app, $T$ = clientes que pagan con tarjeta y $D$ = clientes que piden envío a domicilio:
> - Intersección triple $A \cap T \cap D$ = 894.
> - La zona de $A$ exclusiva (solo app, sin tarjeta ni envío) se obtiene restando de $|A|$ las intersecciones dobles y **sumando de nuevo** la triple (porque se restó dos veces):
>   $$|A| - |A \cap T| - |A \cap D| + |A \cap T \cap D| = 11700 - 2987 - 4501 + 894 = 5106$$
> - Este proceso se repite para cada conjunto hasta completar todas las regiones del diagrama.

> [!tip] Relación con la probabilidad
> Las regiones del diagrama de Venn son mutuamente excluyentes; su suma reconstruye el universo. Dividir cada región entre $|\Omega|$ da la probabilidad de cada suceso.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Al resolver un problema de **tres conjuntos** con un diagrama de Venn, se recomienda comenzar por:

a) La región exclusiva del primer conjunto
b) La **intersección central de los tres conjuntos**
c) La zona fuera de todos los conjuntos
d) La unión de los tres conjuntos

> **b) La intersección central de los tres conjuntos**

---

### Pregunta 2

En un diagrama de Venn de una tienda en línea con $A$ = clientes que compran por la app, $T$ = clientes que pagan con tarjeta y $D$ = clientes que piden envío a domicilio, la región **exclusiva** $A$ (solo app, sin tarjeta ni envío) es:

a) 2987
b) 894
c) **5106** (pues $11700 - 2987 - 4501 + 894 = 5106$)
d) 4501

> **c) 5106 (pues $11700 - 2987 - 4501 + 894 = 5106$)**
---

### Pregunta 3

En el diagrama de Venn de la tienda en línea, la suma de las **8 regiones** (3 exclusivas + 3 dobles + central + exterior) es:

a) 20708
b) 24292
c) 32706
d) **45000** (reconstruye el universo completo)

> **d) 45000 (reconstruye el universo completo)**
---

### Pregunta 4

En una encuesta de 100 personas, 60 usan bicicleta, 50 usan bus y 20 usan ambos. ¿Cuántas usan **al menos uno**?

a) 110
b) 90
c) 100
d) 30

> **b) 90 (pues $60 + 50 - 20 = 90$)**

---

### Pregunta 5

En la traducción de enunciados, la palabra **"ambos"** corresponde a la operación:

a) $A \cup B$
b) $A \cap B$
c) $A - B$
d) $A^c$

> **b) $A \cap B$**

---

### Pregunta 6

En la traducción de enunciados, la expresión **"al menos uno"** corresponde a la operación:

a) $A \cup B$
b) $A \cap B$
c) $A - B$
d) $\emptyset$

> **a) $A \cup B$**

---

### Pregunta 7

En el problema de idiomas con **tres conjuntos** (inglés, francés, ruso), la región central representa:

a) Los que hablan solo inglés
b) Los que hablan **los tres idiomas**
c) Los que hablan dos idiomas
d) Los que no hablan ninguno

> **b) Los que hablan los tres idiomas**

---

### Pregunta 8

En la tienda en línea, con $|A \cap T \cap D| = 894$, $|A \cap T| = 2987$, $|A \cap D| = 4501$ y $|A| = 11700$, la región exclusiva de $A$ es:

a) $11700 - 2987 - 4501 = 4212$
b) $11700 - 2987 - 4501 + 894 = **5106**$ (se suma la triple porque se restó dos veces)
c) $2987 + 4501 + 894 = 8382$
d) $11700 - 894 = 10806$

> **b) $11700 - 2987 - 4501 + 894 = 5106$ (se suma la triple porque se restó dos veces)**
---

### Pregunta 9

¿Por qué al calcular la región exclusiva de un conjunto se **suma de nuevo** la intersección triple?

a) Por error, no debería sumarse
b) Porque los elementos de la triple se restaron **dos veces** (en las dos intersecciones dobles) y hay que devolver una
c) Porque la triple es la más grande
d) Para igualar la cardinalidad del universo

> **b) Porque los elementos de la triple se restaron dos veces (en las dos intersecciones dobles) y hay que devolver una**

---

### Pregunta 10

Si $n(A \cup B) = 90$, $n(A) = 60$ y $n(A \cap B) = 20$, entonces $n(B)$ es:

a) 50
b) 30
c) 70
d) 20

> **a) 50 (pues $n(B) = n(A \cup B) - n(A) + n(A \cap B) = 90 - 60 + 20 = 50$)**

---
