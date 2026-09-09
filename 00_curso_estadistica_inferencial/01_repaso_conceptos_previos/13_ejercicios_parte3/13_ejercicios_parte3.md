---
titulo: "Ejercicios de operaciones con conjuntos (parte 3)"
tipo: anotacion-video
tema: "Operaciones con conjuntos"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Ejercicios de operaciones con conjuntos (parte 3)

## 🎬 Datos del video
- **Título:** Ejercicios de operaciones con conjuntos (parte 3) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Ejercicios+de+operaciones+con+conjuntos+parte+3+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Ejercicios avanzados de operaciones con conjuntos que involucran tres conjuntos simultáneos. Se practican unión, intersección, complemento y diferencia resolviendo problemas de encuestas y clasificación con datos concretos.

## 🧮 Contenido

### Tres conjuntos y el principio de inclusión-exclusión

Cuando trabajamos con tres conjuntos $A$, $B$ y $C$, el número de elementos en la unión se calcula con:

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(A \cap C) - n(B \cap C) + n(A \cap B \cap C)$$

### Desglose de regiones con tres conjuntos

En un diagrama de Venn con tres conjuntos existen **7 regiones** disjoint:

- Solo $A$: $n(A) - n(A \cap B) - n(A \cap C) + n(A \cap B \cap C)$
- Solo $B$: $n(B) - n(A \cap B) - n(B \cap C) + n(A \cap B \cap C)$
- Solo $C$: $n(C) - n(A \cap C) - n(B \cap C) + n(A \cap B \cap C)$
- $A \cap B$ pero no $C$: $n(A \cap B) - n(A \cap B \cap C)$
- $A \cap C$ pero no $B$: $n(A \cap C) - n(A \cap B \cap C)$
- $B \cap C$ pero no $A$: $n(B \cap C) - n(A \cap B \cap C)$
- Los tres: $n(A \cap B \cap C)$

### Cálculo del complemento con tres conjuntos

Los elementos en **ninguno** de los tres conjuntos son:

$$n\big((A \cup B \cup C)^c\big) = n(U) - n(A \cup B \cup C)$$

### Ejercicio paso a paso: Encuesta de uso de apps

**Planteamiento:** En una encuesta a 200 personas se preguntó por el uso de tres apps:
- $A$ = banco móvil
- $B$ = delivery de comida
- $C$ = streaming de video

Los datos son: $n(A) = 90$, $n(B) = 70$, $n(C) = 80$, $n(A \cap B) = 30$, $n(A \cap C) = 25$, $n(B \cap C) = 20$, $n(A \cap B \cap C) = 10$.

**Paso 1:** Calcular $n(A \cup B \cup C)$:

$$n(A \cup B \cup C) = 90 + 70 + 80 - 30 - 25 - 20 + 10 = 175$$

**Paso 2:** Personas que no usan ninguna app:

$$n((A \cup B \cup C)^c) = 200 - 175 = 25$$

**Paso 3:** Personas que usan **solo** banco móvil:

$$\text{Solo } A = 90 - 30 - 25 + 10 = 45$$

**Paso 4:** Personas que usan banco móvil y delivery **pero no** streaming:

$$n(A \cap B \cap C^c) = 30 - 10 = 20$$

**Paso 5:** Personas que usan exactamente dos apps:

$$(30-10) + (25-10) + (20-10) = 20 + 15 + 10 = 45$$

## 💡 Ejemplo numérico

**Problema:** En una tienda de ropa, de 150 clientes: 80 compraron camisas ($C$), 60 compraron pantalones ($P$), 50 compraron chaquetas ($J$). Además: $n(C \cap P) = 25$, $n(C \cap J) = 20$, $n(P \cap J) = 15$, $n(C \cap P \cap J) = 8$.

1. $n(C \cup P \cup J) = 80 + 60 + 50 - 25 - 20 - 15 + 8 = 138$
2. No compraron nada: $150 - 138 = 12$
3. Solo compraron camisas: $80 - 25 - 20 + 8 = 43$
4. Compraron exactamente dos prendas: $(25-8)+(20-8)+(15-8) = 17+12+7 = 36$

## 🌍 Ejemplo de la vida real

En un festival de música, de 500 asistentes: 200 escucharon rock, 180 escucharon pop, 150 escucharon electrónica. Con intersecciones conocidas, el organizador puede saber cuántos asistentes disfrutaron de exactamente un género, de dos o de los tres, y cuántos no disfrutaron ninguno. Esto ayuda a planificar la logística de las zonas para futuros eventos.

> [!tip] Relación con el curso
> Dominar las operaciones con tres conjuntos es esencial para calcular probabilidades de eventos compuestos y para la regla de inclusión-exclusión, base de conteo en probabilidad.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa la expresión $n(A \cup B \cup C)$ en el principio de inclusión-exclusión para tres conjuntos?

a) La suma directa de los tres tamaños de conjunto sin ajustes
b) El número de elementos que están en exactamente dos de los tres conjuntos
c) El número de elementos que están en al menos uno de los tres conjuntos
d) El número de elementos que no están en ninguno de los tres conjuntos

> **c) El número de elementos que están en al menos uno de los tres conjuntos**

---

### Pregunta 2

En un diagrama de Venn con tres conjuntos $A$, $B$ y $C$, ¿cuántas regiones disjoint se forman en total?

a) 5
b) 7
c) 8
d) 9

> **b) 7**

---

### Pregunta 3

En una tienda de ropa con 150 clientes, 80 compraron camisas ($C$), 60 pantalones ($P$) y 50 chaquetas ($J$). Con $n(C \cap P) = 25$, $n(C \cap J) = 20$, $n(P \cap J) = 15$ y $n(C \cap P \cap J) = 8$, ¿cuántos clientes no compraron nada?

a) 8
b) 20
c) 12
d) 15

> **c) 12**

---

### Pregunta 4

En el ejercicio de tienda de ropa, ¿cuántos clientes compraron camisas y chaquetas pero NO pantalones?

a) 20
b) 25
c) 8
d) 12

> **d) 12**

---

### Pregunta 5

En una encuesta a 200 personas sobre uso de apps, los datos son: $n(A) = 90$, $n(B) = 70$, $n(C) = 80$, $n(A \cap B) = 30$, $n(A \cap C) = 25$, $n(B \cap C) = 20$, $n(A \cap B \cap C) = 10$. ¿Cuántas personas usan exactamente dos apps?

a) 45
b) 55
c) 35
d) 65

> **a) 45**

---

### Pregunta 6

Si $n(A \cup B \cup C) = 175$ y el universo tiene $n(U) = 200$ personas, ¿cuántas personas no pertenecen a ninguno de los tres conjuntos?

a) 25
b) 35
c) 175
d) 200

> **a) 25**

---

### Pregunta 7

¿Cuál es la fórmula correcta para calcular los elementos en $A$ pero no en $B$ ni en $C$, es decir, solo $A$?

a) $n(A) - n(A \cap B) - n(A \cap C) + n(A \cap B \cap C)$
b) $n(A) - n(A \cap B) - n(A \cap C) - n(A \cap B \cap C)$
c) $n(A) + n(A \cap B) + n(A \cap C) - n(A \cap B \cap C)$
d) $n(A) - n(A \cap B \cap C)$

> **a) $n(A) - n(A \cap B) - n(A \cap C) + n(A \cap B \cap C)$**

---

### Pregunta 8

Un hospital registra 500 pacientes: 200 con diabetes ($D$), 180 con hipertensión ($H$) y 150 con obesidad ($O$). Si $n(D \cap H) = 90$, $n(D \cap O) = 70$, $n(H \cap O) = 60$ y $n(D \cap H \cap O) = 40$, ¿cuántos pacientes tienen al menos una de las tres condiciones?

a) 350
b) 500
c) 550
d) 300

> **a) 350**

---

### Pregunta 9

En una encuesta a 200 personas, $n(A) = 90$, $n(B) = 70$, $n(C) = 80$, $n(A \cap B) = 30$, $n(A \cap C) = 25$, $n(B \cap C) = 20$ y $n(A \cap B \cap C) = 10$. ¿Cuántas personas usan solo la app $C$?

a) 80
b) 55
c) 45
d) 35

> **d) 35**

---

### Pregunta 10

Una clase de 120 estudiantes estudia tres idiomas: inglés ($I$), francés ($F$) y alemán ($A$). Se sabe que $n(I) = 50$, $n(F) = 40$, $n(A) = 30$, $n(I \cap F) = 15$, $n(I \cap A) = 10$, $n(F \cap A) = 8$ y $n(I \cap F \cap A) = 5$. Si 18 estudiantes no estudian ningún idioma, ¿cuántos estudian francés y alemán pero no inglés?

a) 5
b) 3
c) 8
d) 13

> **b) 3**
