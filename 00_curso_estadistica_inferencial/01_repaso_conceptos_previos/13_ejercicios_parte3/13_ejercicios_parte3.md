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
