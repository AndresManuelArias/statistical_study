---
titulo: Probabilidad Condicional
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Probabilidad Condicional

## 🎬 Datos del video
- **Título:** Probabilidad Condicional | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Probabilidad+Condicional+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
La probabilidad condicional mide la probabilidad de que ocurra un evento **dado** que ya se sabe que otro evento ha ocurrido. Es una herramienta fundamental para actualizar creencias con nueva información y es la base del Teorema de Bayes.

## 🧮 Contenido

### Definición
La probabilidad condicional de $A$ dado $B$, denotada $P(A|B)$, se define como:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0$$

Se lee: "probabilidad de $A$ dado que ocurrió $B$". El condicionamiento **reduce** el espacio muestral al evento $B$.

### Interpretación geométrica
Cuando condicionamos por $B$, descartamos todos los resultados fuera de $B$. El nuevo espacio muestral es $B$, y medimos qué proporción de $B$ también pertenece a $A$.

### Regla del producto
De la definición se despeja directamente la **regla del producto**:

$$P(A \cap B) = P(A|B) \cdot P(B) = P(B|A) \cdot P(A)$$

Para tres eventos:
$$P(A \cap B \cap C) = P(A) \cdot P(B|A) \cdot P(C|A \cap B)$$

### Teorema de la probabilidad total
Si $B_1, B_2, \dots, B_n$ forman una **partición** del espacio muestral (disjuntos y exhaustivos):

$$P(A) = \sum_{i=1}^{n} P(A|B_i) \cdot P(B_i)$$

### Árboles de probabilidad
Los **árboles de probabilidad** son diagramas que representan secuencias de eventos condicionales:
- Nodo raíz: probabilidades marginales $P(B_i)$
- Desde cada nodo: probabilidades condicionales $P(A|B_i)$
- Probabilidad de un camino = producto de probabilidades en las aristas

### Caso particular: $P(B) = 0$
Si $P(B) = 0$, la probabilidad condicional $P(A|B)$ **no está definida**. En espacios muestrales continuos, eventos individuales tienen probabilidad cero, pero las probabilidades condicionales pueden definirse mediante límites.

### Teorema de Bayes
Del Teorema de la Probabilidad Total y la regla del producto se deriva el **Teorema de Bayes**:

$$P(B_i|A) = \frac{P(A|B_i) \cdot P(B_i)}{\sum_{j=1}^{n} P(A|B_j) \cdot P(B_j)}$$

Permite "invertir" el condicionamiento: actualiza la probabilidad de $B_i$ (a priori) con la información de $A$ (a posteriori).

## 💡 Ejemplo numérico
Un almacén de componentes electrónicos tiene dos proveedores:
- Proveedor 1 ($B_1$): suministra el 60% de las piezas, con 5% de defectuosas.
- Proveedor 2 ($B_2$): suministra el 40% de las piezas, con 3% de defectuosas.

Datos: $P(B_1) = 0.60$, $P(B_2) = 0.40$, $P(D|B_1) = 0.05$, $P(D|B_2) = 0.03$.

**Probabilidad total de defecto:**
$$P(D) = P(D|B_1)P(B_1) + P(D|B_2)P(B_2) = (0.05)(0.60) + (0.03)(0.40) = 0.030 + 0.012 = 0.042$$

**Probabilidad de que sea del Proveedor 1 dado que es defectuosa (regla del producto inversa):**
$$P(B_1|D) = \frac{P(D|B_1)P(B_1)}{P(D)} = \frac{(0.05)(0.60)}{0.042} = \frac{0.030}{0.042} \approx 0.7143$$

**Probabilidad de que sea del Proveedor 2 dado defecto:**
$$P(B_2|D) = \frac{P(D|B_2)P(B_2)}{P(D)} = \frac{(0.03)(0.40)}{0.042} = \frac{0.012}{0.042} \approx 0.2857$$

Verificación: $P(B_1|D) + P(B_2|D) = 0.7143 + 0.2857 = 1.0000$ ✓

## 🌍 Ejemplo de la vida real
Un hospital analiza la efectividad de una prueba diagnóstica. Datos:
- Prevalencia: $P(E) = 0.10$ (10% de la población tiene la enfermedad)
- Sensibilidad: $P(+|E) = 0.95$ (95% de enfermos da positivo)
- Especificidad: $P(-|S) = 0.90$ (90% de sanos da negativo)

Se calcula la probabilidad de enfermedad dado un resultado positivo:

$$P(E|+) = \frac{P(+|E)P(E)}{P(+|E)P(E) + P(+|S)P(S)} = \frac{(0.95)(0.10)}{(0.95)(0.10) + (0.10)(0.90)} = \frac{0.095}{0.095 + 0.090} = \frac{0.095}{0.185} \approx 0.5135$$

Incluso con una prueba positiva, la probabilidad real de enfermedad es solo ~51.35%. Esto ilustra el **efecto de la prevalencia baja** en pruebas diagnósticas. Si la prevalencia subiera a 50%, el resultado sería $P(E|+) = \frac{0.95 \times 0.50}{0.95 \times 0.50 + 0.10 \times 0.50} = \frac{0.475}{0.525} \approx 0.9048$, mucho más confiable.

> [!tip] Relación con el curso
> La probabilidad condicional es esencial en inferencia para construir modelos predictivos, entender la regresión y aplicar el Teorema de Bayes en actualización de estimaciones.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la fórmula correcta de la probabilidad condicional $P(A|B)$?

a) $P(A \cap B) \cdot P(B)$
b) $\frac{P(A \cap B)}{P(B)}$
c) $\frac{P(A)}{P(B)}$
d) $P(A \cup B) - P(B)$

> **b) $\frac{P(A \cap B)}{P(B)}$**

---

### Pregunta 2

Si $P(A \cap B) = 0.2$ y $P(B) = 0.5$, ¿cuál es $P(A|B)$?

a) 0.10
b) 0.25
c) 0.40
d) 1.00

> **c) 0.40**

---

### Pregunta 3

Según la regla del producto, ¿cuál de las siguientes expresiones es igual a $P(A \cap B)$?

a) $P(A|B) \cdot P(A)$
b) $P(B|A) \cdot P(A)$
c) $P(A) + P(B)$
d) $P(A|B) + P(B|A)$

> **b) $P(B|A) \cdot P(A)$**

---

### Pregunta 4

Al condicionar por un evento $B$ con $P(B) > 0$, ¿qué ocurre con el espacio muestral?

a) Se mantiene intacto y no cambia
b) Se reduce al evento $B$
c) Se amplía para incluir eventos adicionales
d) Se convierte en el evento complementario de $B$

> **b) Se reduce al evento $B$**

---

### Pregunta 5

Si $P(B) = 0$, ¿qué sucede con la probabilidad condicional $P(A|B)$?

a) Vale 0
b) Vale $P(A)$
c) No está definida
d) Vale 1

> **c) No está definida**

---

### Pregunta 6

En un dado de seis caras, sean $A = \{2\}$ y $B = \{1, 2, 3\}$. ¿Cuál es $P(A|B)$?

a) $\frac{1}{6}$
b) $\frac{1}{3}$
c) $\frac{1}{2}$
d) $\frac{2}{3}$

> **b) $\frac{1}{3}$**

---

### Pregunta 7

Una fábrica recibe piezas de dos proveedores: el Proveedor 1 ($60\%$ de las piezas, $5\%$ defectuosas) y el Proveedor 2 ($40\%$ de las piezas, $3\%$ defectuosas). ¿Cuál es la probabilidad total de defecto $P(D)$?

a) 0.080
b) 0.042
c) 0.040
d) 0.035

> **b) 0.042**

---

### Pregunta 8

¿Para qué sirve el Teorema de Bayes?

a) Para calcular la intersección de dos eventos independientes
b) Para invertir el condicionamiento: obtener $P(B|A)$ a partir de $P(A|B)$
c) Para determinar si dos eventos son mutuamente excluyentes
d) Para calcular la unión de múltiples eventos

> **b) Para invertir el condicionamiento: obtener $P(B|A)$ a partir de $P(A|B)$**

---

### Pregunta 9

Si $P(A \cap B) = \frac{3}{8}$ y $P(B) = \frac{1}{2}$, ¿cuál es $P(A|B)$?

a) $\frac{3}{16}$
b) $\frac{3}{4}$
c) $\frac{1}{4}$
d) $\frac{1}{8}$

> **b) $\frac{3}{4}$**

---

### Pregunta 10

En el ejemplo de prueba diagnóstica del material, la probabilidad de enfermedad dado un resultado positivo es solo ~51.35% a pesar de que la sensibilidad es 95%. ¿Cuál es la razón principal?

a) La sensibilidad de la prueba es demasiado baja
b) La baja prevalencia de la enfermedad en la población
c) La especificidad de la prueba es del 100%
d) La fórmula de probabilidad condicional no se aplica en medicina

> **b) La baja prevalencia de la enfermedad en la población**
