---
titulo: Eventos Excluyentes y Mutuamente Excluyentes
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Eventos Excluyentes y Mutuamente Excluyentes

## 🎬 Datos del video
- **Título:** Eventos Excluyentes y Mutuamente Excluyentes | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Eventos+Excluyentes+y+Mutuamente+Excluyentes+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/rYY_1gkkXic?si=5fzIHkUvA2idntQW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
Dos eventos son mutuamente excluyentes (o disjuntos) cuando **no pueden ocurrir simultáneamente**: su intersección es vacía. Esto permite simplificar la probabilidad de la unión usando simplemente la suma de probabilidades individuales.

## 🧮 Contenido

### Definición
Dos eventos $A$ y $B$ son **mutuamente excluyentes** (o **disjuntos**) si:

$$A \cap B = \emptyset \implies P(A \cap B) = 0$$

No existe resultado posible que pertenezca a ambos eventos al mismo tiempo.

### Regla de la adición para eventos disjuntos
Cuando $A$ y $B$ son mutuamente excluyentes:

$$P(A \cup B) = P(A) + P(B)$$

Para $n$ eventos mutuamente excluyentes $A_1, A_2, \dots, A_n$:

$$P(A_1 \cup A_2 \cup \cdots \cup A_n) = \sum_{i=1}^{n} P(A_i)$$

Esta simplificación es possible porque no hay intersección que restar.

### Regla general (cuando NO son disjuntos)
Si los eventos **sí pueden** ocurrir simultáneamente:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

El término $P(A \cap B)$ se resta para **no contar doble** la intersección.

### Diagrama de Venn
- **Disjuntos:** Dos círculos **separados**, sin superposición alguna.
- **No disjuntos:** Dos círculos con una **zona de solape** ($A \cap B$).

La visualización ayuda a recordar por qué en eventos disjuntos no se resta nada.

### Relación con la partición del espacio muestral
Si los eventos $A_1, A_2, \dots, A_n$ son mutuamente excluyentes **y** exhaustivos (su unión es $\Omega$):

$$P(A_1) + P(A_2) + \cdots + P(A_n) = 1$$

Una **partición** completa es un conjunto de eventos disjuntos que cubren todo el espacio muestral.

### Disjuntos vs. Independientes — Recordatorio clave
- **Disjuntos:** No pueden ocurrir juntos ($A \cap B = \emptyset$).
- **Independientes:** La ocurrencia de uno no afecta la probabilidad del otro ($P(A|B) = P(A)$).

Si $P(A) > 0$ y $P(B) > 0$, eventos disjuntos **nunca** son independientes.

## 💡 Ejemplo numérico
Se lanza un dado equilibrado de 6 caras. Definimos tres eventos:
- $A$ = "sale un número par" = $\{2, 4, 6\}$, $P(A) = \frac{3}{6} = 0.5$
- $B$ = "sale un 1 o un 3" = $\{1, 3\}$, $P(B) = \frac{2}{6} \approx 0.3333$
- $C$ = "sale un 5" = $\{5\}$, $P(C) = \frac{1}{6} \approx 0.1667$

$A$, $B$ y $C$ son mutuamente excluyentes (ninguno comparte resultados) y exhaustivos ($A \cup B \cup C = \Omega$).

Verificación:
$$P(A \cup B \cup C) = 0.5 + 0.3333 + 0.1667 = 1.0000 = P(\Omega) \checkmark$$

**Caso con intersección (no disjuntos):**
$A$ = "par" ($\{2,4,6\}$) y $D$ = "mayor que 4" ($\{5,6\}$).
$A \cap D = \{6\}$, $P(A \cap D) = \frac{1}{6}$.
$$P(A \cup D) = P(A) + P(D) - P(A \cap D) = \frac{3}{6} + \frac{2}{6} - \frac{1}{6} = \frac{4}{6} \approx 0.6667$$

## 🌍 Ejemplo de la vida real
Un sistema de clasificación automática en una planta de reciclaje separa residuos en tres categorías mutuamente excluyentes: plástico (45%), papel (30%) y vidrio (25%). Como son excluyentes y exhaustivas:

$$P(\text{plástico}) + P(\text{papel}) + P(\text{vidrio}) = 0.45 + 0.30 + 0.25 = 1.00$$

Si se pregunta la probabilidad de recibir plástico o vidrio:
$$P(\text{plástico} \cup \text{vidrio}) = 0.45 + 0.25 = 0.70$$

No hay riesgo de contar doble porque un residuo no puede ser plástico y vidrio al mismo tiempo. Esto simplifica cálculos y evita errores en la planificación de la planta.

> [!tip] Relación con el curso
> Identificar eventos como disjuntos simplifica cálculos y es esencial al construir distribuciones de probabilidad, donde cada resultado tiene una probabilidad única sin solapes.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué significa que dos eventos $A$ y $B$ sean mutuamente excluyentes?

a) $P(A \cup B) = P(A) \times P(B)$
b) $A \cap B = \emptyset$
c) $P(A|B) = P(B|A)$
d) $A \cup B = \Omega$

> **b) $A \cap B = \emptyset$**

---

### Pregunta 2

Si $A$ y $B$ son mutuamente excluyentes, ¿cuál es la expresión correcta para $P(A \cup B)$?

a) $P(A) + P(B) - P(A \cap B)$
b) $P(A) \times P(B)$
c) $P(A) + P(B)$
d) $1 - P(A) \cdot P(B)$

> **c) $P(A) + P(B)$**

---

### Pregunta 3

Se lanza un dado equilibrado de 6 caras. Si $A$ = "sale un número par" y $B$ = "sale un número impar", ¿cuál es $P(A \cup B)$?

a) $\frac{5}{6}$
b) $1$
c) $\frac{3}{6}$
d) $\frac{6}{6} + \frac{6}{6}$

> **b) $1$**

---

### Pregunta 4

Dos eventos $A$ y $B$ son mutuamente excluyentes con $P(A) = 0,3$ y $P(B) = 0,2$. ¿Cuál es $P(A \cup B)$?

a) $0,06$
b) $0,5$
c) $0,25$
d) $0,6$

> **b) $0,5$**

---

### Pregunta 5

En un diagrama de Venn, ¿cómo se representan dos eventos que son mutuamente excluyentes?

a) Dos círculos completamente superpuestos
b) Un solo círculo dentro de otro
c) Dos círculos separados sin zona de solape
d) Dos círculos con una intersección parcial

> **c) Dos círculos separados sin zona de solape**

---

### Pregunta 6

¿Qué condición adicional a la exclusión mutua debe cumplirse para que la suma de probabilidades de eventos disjuntos sea igual a 1?

a) Los eventos deben ser independientes
b) Los eventos deben ser exhaustivos, es decir $A_1 \cup A_2 \cup \cdots \cup A_n = \Omega$
c) Todos los eventos deben tener la misma probabilidad
d) Los eventos deben tener exactamente dos resultados cada uno

> **b) Los eventos deben ser exhaustivos, es decir $A_1 \cup A_2 \cup \cdots \cup A_n = \Omega$**

---

### Pregunta 7

Si $P(A) > 0$ y $P(B) > 0$, y $A$ y $B$ son mutuamente excluyentes, ¿qué se puede concluir sobre su independencia?

a) Son independientes porque no tienen resultados en común
b) Son independientes porque $P(A \cap B) = 0$
c) Nunca son independientes
d) Siempre son independientes

> **c) Nunca son independientes**

---

### Pregunta 8

Dos eventos $A$ y $B$ **no** son disjuntos y se sabe que $P(A) = 0,6$, $P(B) = 0,4$ y $P(A \cap B) = 0,2$. ¿Cuál es $P(A \cup B)$?

a) $1,0$
b) $0,8$
c) $0,24$
d) $0,2$

> **b) $0,8$**

---

### Pregunta 9

En la planta de reciclaje del ejemplo, los residuos se clasifican en plástico (45%), papel (30%) y vidrio (25%). ¿Cuál es la probabilidad de recibir plástico o vidrio?

a) $0,45 \times 0,25 = 0,1125$
b) $1 - (0,45 + 0,25) = 0,30$
c) $0,45 + 0,25 = 0,70$
d) $0,45 + 0,30 + 0,25 = 1,00$

> **c) $0,45 + 0,25 = 0,70$**

---

### Pregunta 10

Se lanzan dos dados equilibrados. Evento $A$: la suma es par. Evento $B$: la suma es 7. Si $P(A) = \frac{18}{36} = 0,5$ y $P(B) = \frac{6}{36} \approx 0,1667$, ¿son mutuamente excluyentes?

a) Sí, porque $A$ y $B$ describen características distintas de la suma
b) No, porque la suma 7 es impar, por lo que $A \cap B = \emptyset$; pero en realidad ambos pueden ocurrir: un resultado con suma 7 es siempre impar, así que efectivamente $A \cap B = \emptyset$
c) Sí, porque la suma 7 siempre es impar, por lo que $A \cap B = \emptyset$
d) No, porque existen resultados donde la suma es par y 7 a la vez

> **c) Sí, porque la suma 7 siempre es impar, por lo que $A \cap B = \emptyset$**
