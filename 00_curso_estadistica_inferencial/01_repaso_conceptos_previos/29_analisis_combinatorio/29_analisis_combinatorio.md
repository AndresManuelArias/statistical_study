---
titulo: "Análisis combinatorio"
tipo: anotacion-video
tema: Análisis combinatorio
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Análisis Combinatorio

## 🎬 Datos del video
- **Título:** Análisis Combinatorio | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Analisis+Combinatorio+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
El análisis combinatorio estudia las formas de contar. Sus pilares son el principio multiplicativo, el principio de la suma y las diversas técnicas de conteo: permutaciones, variaciones, combinaciones y sus variantes con repetición.

## 🧮 Contenido

### Principio multiplicativo (regla de la cadena)
Si un proceso consta de $k$ etapas sucesivas, donde la etapa $i$ tiene $n_i$ opciones posibles, el número total de formas de completar el proceso es:

$$N = n_1 \times n_2 \times \cdots \times n_k$$

**Ejemplo:** Elegir una comida: 3 platos de fondo × 4 ensaladas × 2 bebidas = $3 \times 4 \times 2 = 24$ combinaciones.

### Principio de la suma (regla de la disyunción)
Si una tarea se puede realizar de $n_1$ formas **o** de $n_2$ formas (sin superposición), el número total es:

$$N = n_1 + n_2$$

**Ejemplo:** Hay 5 camisas azules y 3 camisas rojas en un clóset. Si solo usarás una camisa, tienes $5 + 3 = 8$ opciones.

### Resumen de técnicas de conteo

| Técnica | ¿Orden importa? | ¿Repetición? | Fórmula |
|---|---|---|---|
| Variación con repetición | ✅ | ✅ | $VR(n,r) = n^r$ |
| Variación sin repetición | ✅ | ❌ | $V(n,r) = \frac{n!}{(n-r)!}$ |
| Permutación | ✅ | ❌ | $P(n) = n!$ |
| Combinación | ❌ | ❌ | $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$ |
| Combinación con repetición | ❌ | ✅ | $CR(n,r) = \binom{n+r-1}{r}$ |

### ¿Cuándo usar cada una? — Guía rápida

**¿El orden importa?**
- **Sí** → Variaciones o permutaciones
- **No** → Combinaciones

**¿Se permite repetición?**
- **Sí** → $VR$ o $CR$
- **No** → $V$ o $C$

**¿Se eligen todos los elementos ($r = n$)?**
- **Sí y orden importa** → Permutación $n!$
- **Sí y orden no importa** → Solo 1 forma

### Fórmulas fundamentales

**Permutaciones sin repetición:**
$$P(n) = n!$$

**Variaciones sin repetición:**
$$V(n,r) = \frac{n!}{(n-r)!}$$

**Variaciones con repetición:**
$$VR(n,r) = n^r$$

**Combinaciones sin repetición:**
$$C(n,r) = \binom{n}{r} = \frac{n!}{r!\,(n-r)!}$$

**Combinaciones con repetición:**
$$CR(n,r) = \binom{n+r-1}{r} = \frac{(n+r-1)!}{r!\,(n-1)!}$$

### Relaciones entre fórmulas
- $C(n,r) = \frac{V(n,r)}{r!}$: una combinación es una variación "dividida" entre las formas de ordenar $r$ elementos.
- $V(n,r) = P(n) / (n-r)!$: las variaciones son permutaciones parciales.

## 💡 Ejemplo numérico
De un grupo de **8 personas**, se quiere elegir un **comité de 3** sin orden:

$$C(8,3) = \frac{8!}{3!\,5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56$$

Si el comité tiene **presidente, secretario y tesorero** (el orden importa):

$$V(8,3) = \frac{8!}{5!} = 8 \times 7 \times 6 = 336$$

Si además se pueden repetir personas en varios cargos (por ejemplo, alguien puede ser presidente y secretario):

$$VR(8,3) = 8^3 = 512$$

## 🌍 Ejemplo de la vida real
Un **restaurante** ofrece un menú del día: 4 entradas, 5 platos de fondo, 3 postres y 6 bebidas. Un cliente quiere elegir exactamente 1 de cada categoría. Aplicamos el principio multiplicativo:

$$N = 4 \times 5 \times 3 \times 6 = 360$$

Si el restaurante además ofrece "combo libre" donde el cliente elige **2 items de entre 4 opciones** (sin importar el orden, sin repetición):

$$C(4,2) = \frac{4!}{2!\,2!} = 6$$

> [!tip] Relación con el curso
> El análisis combinatorio es la herramienta que permite contar resultados favorables en un espacio muestral, lo cual es esencial para calcular probabilidades mediante la definición clásica $P(A) = |A|/|\Omega|$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Un restaurante ofrece 4 entradas, 5 platos de fondo, 3 postres y 6 bebidas. Si un cliente elige exactamente 1 de cada categoría, ¿cuántas combinaciones de menú completo son posibles?

a) 30
b) 18
c) 360
d) 480

> **c) 360**

---

### Pregunta 2

De un grupo de 8 personas se debe elegir un comité de 3 miembros sin considerar un orden específico. ¿Cuántos comités diferentes se pueden formar?

a) 336
b) 56
c) 512
d) 64

> **b) 56**

---

### Pregunta 3

Se desea crear una clave de 6 caracteres usando letras del alfabeto (26) y dígitos (10). Si se permite la repetición de caracteres, ¿cuántas claves distintas son posibles?

a) 1.121.600
b) 2.176.782.336
c) 36
d) 1.823.776.000

> **b) 2.176.782.336**

---

### Pregunta 4

¿De cuántas formas se pueden ordenar las letras de la palabra "LOGARITMO", que tiene 7 letras todas distintas?

a) 120
b) 5.040
c) 2.520
d) 7.200

> **b) 5.040**

---

### Pregunta 5

De un grupo de 12 personas se deben designar un presidente, un secretario y un tesorero. ¿Cuántas formas hay de asignar estos 3 cargos si una persona no puede ocupar más de uno?

a) 220
b) 1.728
c) 1.320
d) 60

> **c) 1.320**

---

### Pregunta 6

Se tienen 15 estudiantes y 3 grupos de trabajo distintos (A, B y C). Si cada estudiante puede ser asignado a cualquier grupo, ¿de cuántas maneras se pueden distribuir los estudiantes?

a) 45
b) 1.434.890.720
c) 5.062.5
d) 30

> **b) 1.434.890.720**

---

### Pregunta 7

De un grupo de 10 personas se debe formar un comité de 4 miembros sin considerar el orden. ¿Cuántos comités diferentes se pueden formar?

a) 210
b) 5.040
c) 40
d) 3.628.800

> **a) 210**

---

### Pregunta 8

¿De cuántas maneras se pueden ordenar 6 libros diferentes en una estantería?

a) 36
b) 720
c) 30
d) 1.200

> **b) 720**

---

### Pregunta 9

Una heladería ofrece 5 sabores de helado. Si puedes elegir 3 bolas permitiendo repeticiones de sabor y sin importar el orden en que se colocan en el cono, ¿cuántas combinaciones son posibles?

a) 10
b) 125
c) 60
d) 35

> **d) 35**

---

### Pregunta 10

Un par de placas de automóvil está compuesto por 3 letras (de 26 opciones cada una) seguidas de 4 dígitos (de 10 opciones cada uno). ¿Cuántas placas diferentes son posibles si se permite repetición de letras y dígitos?

a) 17.576
b) 260.000
c) 17.576.000
d) 78.520.000

> **c) 17.576.000**
