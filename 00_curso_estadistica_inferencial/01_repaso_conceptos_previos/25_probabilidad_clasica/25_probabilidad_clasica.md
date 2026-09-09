---
titulo: "Probabilidad clásica"
tipo: anotacion-video
tema: Probabilidad clásica
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Probabilidad Clásica

## 🎬 Datos del video
- **Título:** Probabilidad Clásica | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Probabilidad+Clasica+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/PvNR3OpbnDk?si=vUbia8eQLI8l8xmb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 📋 Resumen
La probabilidad clásica asigna igual probabilidad a cada resultado de un espacio muestral equiprobable. Se calcula como el número de casos favorables dividido entre el número total de casos posibles.

## 🧮 Contenido

### Definición clásica de probabilidad
Para un experimento con espacio muestral **equiprobable** (todos los resultados tienen la misma probabilidad de ocurrir), la probabilidad de un evento $A$ es:

$$P(A) = \frac{\text{casos favorables}}{\text{casos posibles}} = \frac{|A|}{|\Omega|}$$

donde $|A|$ es el número de elementos en el evento $A$ y $|\Omega|$ es el número total de resultados posibles.

### Condiciones de validez
La definición clásica requiere que el espacio muestral sea **equiprobable**, es decir, cada resultado individual tenga la misma probabilidad de ocurrir. Esto es razonable en:
- Dados perfectos (cada cara con probabilidad $1/6$)
- Monedas equilibradas (cara o cruz, cada una con probabilidad $1/2$)
- Cartas barajadas (cada carta con probabilidad $1/52$)

### Propiedades básicas de la probabilidad

1. **No negatividad:** Para cualquier evento $A$:
$$0 \le P(A) \le 1$$

2. **Probabilidad del evento seguro:**
$$P(\Omega) = 1$$

3. **Probabilidad del evento imposible:**
$$P(\varnothing) = 0$$

4. **Suma de complementos:**
$$P(A) + P(A^c) = 1 \quad \Longrightarrow \quad P(A^c) = 1 - P(A)$$

5. **Regla de la suma:** Para dos eventos $A$ y $B$:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

6. **Eventos mutuamente excluyentes** ($A \cap B = \varnothing$):
$$P(A \cup B) = P(A) + P(B)$$

### Interpretación frecuentista
Si un experimento se repite $n$ veces y el evento $A$ ocurre $n_A$ veces, la **frecuencia relativa** de $A$ es:

$$f_n(A) = \frac{n_A}{n}$$

Para $n$ grande, $f_n(A)$ se aproxima a $P(A)$.

## 💡 Ejemplo numérico
Se lanza un dado de 6 caras equilibrado. Sea $A$ = "sale un número par":
$$A = \{2, 4, 6\}, \quad |A| = 3, \quad |\Omega| = 6$$
$$P(A) = \frac{3}{6} = \frac{1}{2} = 0.5$$

Sea $B$ = "sale un número mayor que 4":
$$B = \{5, 6\}, \quad |B| = 2$$
$$P(B) = \frac{2}{6} = \frac{1}{3} \approx 0.333$$

Sea $A \cap B$ = "par y mayor que 4":
$$A \cap B = \{6\}, \quad |A \cap B| = 1$$
$$P(A \cap B) = \frac{1}{6} \approx 0.167$$

Regla de la suma:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{3}{6} + \frac{2}{6} - \frac{1}{6} = \frac{4}{6} = \frac{2}{3} \approx 0.667$$

## 🌍 Ejemplo de la vida real
En una **tienda de zapatos** hay 20 pares de zapatos en una caja, de los cuales 8 son talla 40 y 12 son talla 42. Si un cliente elige un par al azar, la probabilidad de que sea talla 40 es $P(\text{talla 40}) = \frac{8}{20} = 0.4$, y la probabilidad de que sea talla 42 es $P(\text{talla 42}) = \frac{12}{20} = 0.6$. Estas probabilidades se usan para planificar el inventario.

> [!tip] Relación con el curso
> La probabilidad clásica es la base para entender distribuciones de probabilidad y para realizar inferencias estadísticas, ya que parte de conteos de casos dentro de espacios equiprobables.

### Ejemplo con cartas de una baraja
Una baraja francesa tiene 52 cartas: 13 por palo (corazones, diamantes, tréboles, picas) × 4 palos.

Sea $A$ = "sacar un as":
$$|A| = 4, \quad P(A) = \frac{4}{52} = \frac{1}{13} \approx 0.0769$$

Sea $B$ = "sacar una carta de corazones":
$$|B| = 13, \quad P(B) = \frac{13}{52} = \frac{1}{4} = 0.25$$

Sea $C$ = "sacar el as de corazones":
$$|C| = 1, \quad P(C) = \frac{1}{52} \approx 0.0192$$

Note que $P(A \cap B) = P(\text{as de corazones}) = \frac{1}{52}$, pues el evento $A \cap B$ tiene un solo elemento.

### Conexión con la frecuencia empírica
Si lanzamos un dado equilibrado 1000 veces y contamos cuántas veces sale el 3, esperamos aproximadamente 166 veces ($\frac{1}{6} \times 1000 \approx 166.67$). En la práctica, el resultado puede ser 155, 170, 160, etc. La **Ley de los Grandes Números** garantiza que a medida que aumentan las repeticiones, la frecuencia relativa converge a la probabilidad teórica.

### Propiedades adicionales
- **Monotonía:** Si $A \subseteq B$, entonces $P(A) \le P(B)$.
- **Desigualdad de Boole:** $P(A \cup B) \le P(A) + P(B)$.
- **Inclusión-exclusión para 3 eventos:**
$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1
¿Cuál es la fórmula correcta de la probabilidad clásica para un espacio equiprobable?
a) $P(A) = \frac{\text{casos posibles}}{\text{casos favorables}}$
b) $P(A) = \text{casos favorables} \times \text{casos posibles}$
c) $P(A) = \frac{\text{casos favorables}}{\text{casos posibles}}$
d) $P(A) = \text{casos favorables} + \text{casos posibles}$

> **c) $P(A) = \frac{\text{casos favorables}}{\text{casos posibles}}$**

---

### Pregunta 2
¿Qué condición debe cumplir el espacio muestral para que sea válido aplicar la definición clásica de probabilidad?
a) Debe contener al menos 10 resultados posibles
b) Todos los resultados individuales deben tener la misma probabilidad de ocurrir
c) Los resultados deben ser mutuamente excluyentes
d) El número total de resultados debe ser par

> **b) Todos los resultados individuales deben tener la misma probabilidad de ocurrir**

---

### Pregunta 3
Se lanza un dado de 6 caras equilibrado. ¿Cuál es la probabilidad de que salga un 3?
a) 1/3
b) 1/2
c) 1/6
d) 3/6

> **c) 1/6**

---

### Pregunta 4
Se lanza un dado equilibrado. ¿Cuál es la probabilidad de que salga un número par?
a) 1/6
b) 1/3
c) 1/2
d) 2/3

> **c) 1/2**

---

### Pregunta 5
Se lanza una moneda equilibrada. ¿Cuál es la probabilidad de que salga cara?
a) 1/4
b) 1/3
c) 1/2
d) 2/3

> **c) 1/2**

---

### Pregunta 6
En una caja hay 8 bolas rojas, 5 azules y 7 verdes. Si se elige una bola al azar, ¿cuál es la probabilidad de que sea roja?
a) 8/20 = 2/5
b) 8/15
c) 8/7
d) 5/20 = 1/4

> **a) 8/20 = 2/5**

---

### Pregunta 7
De una baraja francesa de 52 cartas, ¿cuál es la probabilidad de sacar un as?
a) 1/52
b) 1/13
c) 1/4
d) 13/52

> **b) 1/13**

---

### Pregunta 8
¿Cuál es la probabilidad del evento seguro $\Omega$?
a) 0
b) 1/2
c) 1
d) Depende del experimento

> **c) 1**

---

### Pregunta 9
Si $P(A) = 0,35$, ¿cuál es la probabilidad del complemento $A^c$?
a) 0,35
b) 0,65
c) 0,50
d) 1,35

> **b) 0,65**

---

### Pregunta 10
De una baraja francesa, ¿cuál es la probabilidad de sacar el as de corazones?
a) 1/13
b) 1/4
c) 1/52
d) 4/52

> **c) 1/52**
