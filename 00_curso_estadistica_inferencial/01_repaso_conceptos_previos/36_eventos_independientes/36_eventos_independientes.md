---
titulo: Eventos Independientes
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Eventos Independientes

## 🎬 Datos del video
- **Título:** Eventos Independientes | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Eventos+Independientes+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Dos eventos son independientes si la ocurrencia de uno no afecta la probabilidad del otro. La independencia se verifica cuando $P(A \cap B) = P(A) \cdot P(B)$, lo cual es un concepto **muy diferente** de que los eventos sean disjuntos (mutuamente excluyentes).

## 🧮 Contenido

### Definición formal
Dos eventos $A$ y $B$ son **independientes** si y solo si:

$$P(A \cap B) = P(A) \cdot P(B)$$

Equivalentemente (cuando $P(B) > 0$):
$$P(A|B) = P(A)$$

Esto significa: saber que $B$ ocurrió **no cambia** la probabilidad de $A$.

### Verificación de independencia
Para verificar si dos eventos son independientes, existen tres métodos equivalentes:
1. Calcular $P(A \cap B)$ y comparar con $P(A) \cdot P(B)$.
2. Calcular $P(A|B)$ y verificar que es igual a $P(A)$.
3. Calcular $P(B|A)$ y verificar que es igual a $P(B)$.

### Independencia múltiple
Tres eventos $A$, $B$, $C$ son **mutuamente independientes** si se cumplen **todas** las condiciones:

$$P(A \cap B) = P(A)P(B)$$
$$P(A \cap C) = P(A)P(C)$$
$$P(B \cap C) = P(B)P(C)$$
$$P(A \cap B \cap C) = P(A)P(B)P(C)$$

Cuidado: que cada par sea independiente **no garantiza** la independencia conjunta.

### Independencia vs. disjunción — ¡No confundir!

| Propiedad | Independientes | Disjuntos (excluyentes) |
|---|---|---|
| Relación | Ocurrencia de uno no afecta al otro | **No pueden** ocurrir a la vez |
| Fórmula clave | $P(A \cap B) = P(A)P(B)$ | $A \cap B = \emptyset$, $P(A \cap B) = 0$ |
| Implicación mutua | No implica disjunción | No implica independencia |
| Caso especial | Si $P(A)>0$ y $P(B)>0$: nunca son disjuntos | Si son disjuntos y con prob. > 0, **no** son independientes |

**Regla práctica:** Si $P(A) > 0$, $P(B) > 0$ y $A \cap B = \emptyset$, entonces $A$ y $B$ **no pueden** ser independientes, porque $P(A|B) = 0 \neq P(A)$.

## 💡 Ejemplo numérico
Se lanzan dos dados equilibrados (6 caras cada uno). Definimos:
- $A$ = "el dado 1 muestra 4", $P(A) = \frac{1}{6}$
- $B$ = "el dado 2 muestra un número par" = $\{2, 4, 6\}$, $P(B) = \frac{3}{6} = \frac{1}{2}$

¿Son independientes? Verificamos:
$$P(A \cap B) = \frac{1}{6} \times \frac{1}{2} = \frac{1}{12}$$

Conteo directo: los pares $(4,2)$, $(4,4)$, $(4,6)$ son los casos favorables. Son 3 de 36 posibles:
$$P(A \cap B) = \frac{3}{36} = \frac{1}{12} \checkmark$$

Comprobación condicional: $P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/12}{1/2} = \frac{1}{6} = P(A)$ ✓

**Ejemplo de dependencia:**
Un dado una vez: $A$ = "sale par" ($\{2,4,6\}$), $D$ = "sale 6" ($\{6\}$).
$P(A) = \frac{3}{6} = 0.5$, $P(D) = \frac{1}{6}$.
$A \cap D = \{6\}$, $P(A \cap D) = \frac{1}{6}$.
$P(A) \cdot P(D) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12} \neq \frac{1}{6}$. **No son independientes.**

## 🌍 Ejemplo de la vida real
Una línea de producción ensambla dos componentes de forma simultánea. El componente A tiene una tasa de falla del 2% y el componente B del 3%, y ambos fallan de forma independiente. La probabilidad de que **ambos** fallen al mismo tiempo es:

$$P(A \cap B) = P(A) \cdot P(B) = 0.02 \times 0.03 = 0.0006 = 0.06\%$$

Esto es extremadamente raro. La independencia permite calcular la probabilidad de fallo del sistema como:
$P(\text{sistema falla}) = 1 - P(\text{ambos funcionan}) = 1 - (0.98)(0.97) = 1 - 0.9506 = 0.0494$

Es decir, ~4.94% de probabilidad de que al menos uno falle.

> [!tip] Relación con el curso
> La independencia es clave para construir modelos estadísticos como la distribución binomial (ensayos Bernoulli independientes) y para simplificar cálculos en pruebas de hipótesis.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la condición matemática que define que dos eventos $A$ y $B$ son independientes?

a) $P(A \cup B) = P(A) + P(B)$
b) $P(A \cap B) = P(A) \cdot P(B)$
c) $P(A \cap B) = P(A) + P(B)$
d) $P(A \cap B) = 0$

> **b) $P(A \cap B) = P(A) \cdot P(B)$**

---

### Pregunta 2

Si dos eventos $A$ y $B$ son independientes y $P(B) > 0$, ¿qué se puede afirmar?

a) $P(A|B) = P(B)$
b) $P(A|B) = 0$
c) $P(A|B) = P(A)$
d) $P(A|B) = 1$

> **c) $P(A|B) = P(A)$**

---

### Pregunta 3

Se lanzan dos monedas equilibradas. Sea $A$ = "la primera moneda sale cara" y $B$ = "la segunda moneda sale cara". ¿Cuál es $P(A \cap B)$?

a) $\frac{1}{2}$
b) $\frac{1}{3}$
c) $\frac{1}{4}$
d) $\frac{1}{6}$

> **c) $\frac{1}{4}$**

---

### Pregunta 4

Dos eventos disjuntos (mutuamente excluyentes) con $P(A) > 0$ y $P(B) > 0$ ¿pueden ser independientes?

a) Sí, siempre son independientes.
b) Sí, solo si $P(A) = P(B)$.
c) No, nunca pueden ser independientes.
d) No, solo si $P(A \cup B) = 1$.

> **c) No, nunca pueden ser independientes.**

---

### Pregunta 5

Dos eventos $A$ y $B$ son independientes con $P(A) = 0,5$ y $P(B) = 0,2$. ¿Cuál es $P(A \cap B)$?

a) $0,7$
b) $0,25$
c) $0,1$
d) $0,05$

> **c) $0,1$**

---

### Pregunta 6

¿Cuál de las siguientes afirmaciones describe correctamente la diferencia entre eventos independientes y eventos disjuntos?

a) Independientes: no pueden ocurrir a la vez; Disjuntos: la ocurrencia de uno no afecta al otro.
b) Independientes: $P(A \cap B) = 0$; Disjuntos: $P(A \cap B) = P(A) \cdot P(B)$.
c) Independientes: la ocurrencia de uno no afecta la probabilidad del otro; Disjuntos: no pueden ocurrir simultáneamente.
d) Independientes y disjuntos son conceptos equivalentes.

> **c) Independientes: la ocurrencia de uno no afecta la probabilidad del otro; Disjuntos: no pueden ocurrir simultáneamente.**

---

### Pregunta 7

En una fábrica, el componente A tiene probabilidad de falla $P(A) = 0,02$ y el componente B tiene $P(B) = 0,03$. Si las fallas son independientes, ¿cuál es la probabilidad de que ambos fallen simultáneamente?

a) $0,05$
b) $0,006$
c) $0,0006$
d) $0,0003$

> **c) $0,0006$**

---

### Pregunta 8

¿Cuántos métodos equivalentes para verificar la independencia de dos eventos se describen en el apunte?

a) 2
b) 3
c) 4
d) 5

> **b) 3**

---

### Pregunta 9

Para tres eventos $A$, $B$, $C$, la independencia múltiple requiere que se verifiquen todas las condiciones de pares y además:

a) $P(A \cap B \cap C) = P(A) + P(B) + P(C)$
b) $P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C)$
c) $P(A \cap B \cap C) = 0$
d) $P(A \cap B \cap C) = \max(P(A), P(B), P(C))$

> **b) $P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C)$**

---

### Pregunta 10

En el ejemplo del apunte con dos dados, $A$ = "sale 4 en el dado 1" y $B$ = "sale un número par en el dado 2". ¿Cuál es el valor de $P(A \cap B)$?

a) $\frac{1}{6}$
b) $\frac{1}{8}$
c) $\frac{1}{12}$
d) $\frac{1}{36}$

> **c) $\frac{1}{12}$**
