---
titulo: "Espacio muestral y eventos"
tipo: anotacion-video
tema: Espacio muestral y eventos
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Espacio Muestral y Eventos

## 🎬 Datos del video
- **Título:** Espacio muestral y eventos | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Espacio+muestral+y+eventos+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
El espacio muestral $\Omega$ es el conjunto de todos los resultados posibles de un experimento aleatorio. Los eventos son subconjuntos de $\Omega$ y se clasifican en simples, compuestos, imposibles y ciertos.

## 🧮 Contenido

### Espacio muestral ($\Omega$)
El **espacio muestral** es el conjunto que contiene **todos** los resultados posibles de un experimento aleatorio. Se denota con la letra griega $\Omega$ (omega).

**Ejemplos:**
- Lanzar un dado: $\Omega = \{1, 2, 3, 4, 5, 6\}$
- Lanzar una moneda: $\Omega = \{C, Z\}$ (Cara, Cruz)
- Lanzar dos dados: $\Omega = \{(i,j) : 1 \le i \le 6,\; 1 \le j \le 6\}$

### Cardinalidad del espacio muestral
La **cardinalidad** $|\Omega|$ es el número de elementos del espacio muestral.
- Dado: $|\Omega| = 6$
- Moneda: $|\Omega| = 2$
- Dos dados: $|\Omega| = 36$

Para dados multinomiales, si se lanzan $k$ dados de $n$ caras, $|\Omega| = n^k$.

### Evento
Un **evento** es cualquier subconjunto del espacio muestral, es decir, $A \subseteq \Omega$.

### Tipos de eventos

**Evento simple (elemental):** Contiene un solo resultado.
$$A = \{3\} \quad \text{(salir 3 en un dado)}$$

**Evento compuesto:** Contiene dos o más resultados.
$$B = \{1, 3, 5\} \quad \text{(salir número impar en un dado)}$$

**Evento imposible ($\varnothing$):** No contiene ningún resultado.
$$C = \varnothing \quad \text{(salir 7 en un dado de 6 caras)}$$

**Evento seguro ($\Omega$):** Contiene todos los resultados posibles.
$$D = \{1,2,3,4,5,6\} = \Omega \quad \text{(salir un número entre 1 y 6)}$$

### Operaciones con eventos

Sean $A$ y $B$ eventos dentro de $\Omega$:

**Unión:** $A \cup B$ = eventos que ocurren si ocurre $A$ **o** $B$ (o ambos).
$$A \cup B = \{x : x \in A \text{ o } x \in B\}$$

**Intersección:** $A \cap B$ = eventos que ocurren solo si ocurren $A$ **y** $B$.
$$A \cap B = \{x : x \in A \text{ y } x \in B\}$$

**Complemento:** $A^c$ o $\bar{A}$ = eventos que ocurren si $A$ **no** ocurre.
$$A^c = \{x \in \Omega : x \notin A\}$$

### Propiedades fundamentales
- $A \cup A^c = \Omega$ (ley del complemento)
- $A \cap A^c = \varnothing$
- $(A^c)^c = A$
- $A \cup \varnothing = A$
- $A \cap \varnothing = \varnothing$

### Diagrama árbol
Un **diagrama de árbol** es una herramienta gráfica para visualizar espacios muestrales compuestos por etapas sucesivas. Cada nodo representa una decisión o posibilidad y cada rama una opción.

**Ejemplo:** Lanzar una moneda y luego un dado.

```
                  Inicio
                 /      \
              Cara(1/2)  Cruz(1/2)
              /  |  \     /  |  \
            1    2   3   1    2   3
           ... y así con 4, 5, 6
```

El espacio muestral tiene $2 \times 6 = 12$ resultados: $\{(C,1),(C,2),\ldots,(C,6),(Z,1),\ldots,(Z,6)\}$.

## 💡 Ejemplo numérico
Se lanzan **dos dados de 6 caras**. El espacio muestral tiene $|\Omega| = 6 \times 6 = 36$ elementos.

Definimos:
- $A$ = "la suma es 7": $A = \{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}$, así $|A| = 6$
- $B$ = "ambos dados son pares": $B = \{(2,2),(2,4),(2,6),(4,2),(4,4),(4,6),(6,2),(6,4),(6,6)\}$, así $|B| = 9$
- $A \cap B$ = "suma 7 y ambos pares": $A \cap B = \varnothing$ (imposible)
- $A \cup B$: la unión tiene $|A| + |B| - |A \cap B| = 6 + 9 - 0 = 15$ resultados.

## 🌍 Ejemplo de la vida real
En una **cafetería**, el espacio muestral de una orden puede ser: espresso, americano, capuchino, latte, té verde, té negro. Si definimos el evento "bebida con leche", este es $\{\text{capuchino, latte}\}$, un evento compuesto con cardinalidad 2. El complemento serían las bebidas sin leche: $\{\text{espresso, americano, té verde, té negro}\}$.

> [!tip] Relación con el curso
> Definir correctamente el espacio muestral y los eventos es fundamental para calcular probabilidades, ya que todas las fórmulas de la Estadística Inferencial se construyen sobre estos conjuntos.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué es el espacio muestral $\Omega$ de un experimento aleatorio?

a) Es el conjunto de resultados favorables al evento que nos interesa.
b) Es el conjunto que contiene todos los resultados posibles del experimento.
c) Es la probabilidad de que ocurra cada resultado.
d) Es un subconjunto del evento.

> **b) Es el conjunto que contiene todos los resultados posibles del experimento.**

### Pregunta 2

Un evento $A$ se define como:

a) El conjunto de todos los resultados posibles del experimento.
b) Un número que indica la frecuencia de un resultado.
c) Un subconjunto del espacio muestral, es decir, $A \subseteq \Omega$.
d) La unión de todos los eventos simples del espacio muestral.

> **c) Un subconjunto del espacio muestral, es decir, $A \subseteq \Omega$.**

### Pregunta 3

Si se lanza un dado de 6 caras, ¿cuál es el espacio muestral $\Omega$?

a) $\Omega = \{1, 2, 3, 4, 5\}$
b) $\Omega = \{1, 2, 3, 4, 5, 6, 7\}$
c) $\Omega = \{1, 2, 3, 4, 5, 6\}$
d) $\Omega = \{0, 1, 2, 3, 4, 5, 6\}$

> **c) $\Omega = \{1, 2, 3, 4, 5, 6\}$**

### Pregunta 4

Al lanzar dos dados de 6 caras, ¿cuál es la cardinalidad del espacio muestral?

a) 12
b) 18
c) 24
d) 36

> **d) 36**

### Pregunta 5

Sea $\Omega = \{1, 2, 3, 4, 5, 6\}$ el espacio muestral de un dado. ¿Qué tipo de evento es $B = \{1, 3, 5\}$?

a) Evento imposible.
b) Evento seguro.
c) Evento simple.
d) Evento compuesto.

> **d) Evento compuesto.**

### Pregunta 6

¿Qué representa el evento imposible $\varnothing$?

a) El evento que contiene todos los resultados de $\Omega$.
b) El evento que contiene un solo resultado posible.
c) El evento que no contiene ningún resultado, es decir, $\varnothing$.
d) El evento que contiene exactamente la mitad de los resultados.

> **c) El evento que no contiene ningún resultado, es decir, $\varnothing$.**

### Pregunta 7

Sean $\Omega = \{1, 2, 3, 4, 5, 6\}$ y $A = \{2, 4, 6\}$ (salir par). ¿Cuál es el complemento $A^c$?

a) $\{1, 2, 3, 4, 5, 6\}$
b) $\{1, 3, 5\}$
c) $\{2, 4\}$
d) $\varnothing$

> **b) $\{1, 3, 5\}$**

### Pregunta 8

Si se lanza un dado y definimos $A$ = "salir un número par" y $B$ = "salir un número mayor que 4", ¿cuál es $A \cap B$?

a) $\{4, 5, 6\}$
b) $\{5, 6\}$
c) $\{6\}$
d) $\{2, 4, 5, 6\}$

> **c) $\{6\}$**

### Pregunta 9

En una cafeteria, el espacio muestral de bebidas es $\Omega = \{\text{espresso}, \text{americano}, \text{capuchino}, \text{latte}, \text{te verde}, \text{te negro}\}$. Si $C$ = "bebida con leche" = $\{\text{capuchino}, \text{te negro}\}$, entonces $C^c$ es:

a) $\{\text{espresso}, \text{americano}, \text{capuchino}, \text{latte}\}$
b) $\{\text{espresso}, \text{americano}, \text{latte}, \text{te verde}, \text{te negro}\}$
c) $\{\text{espresso}, \text{americano}, \text{latte}, \text{te verde}\}$
d) $\{\text{espresso}, \text{americano}, \text{capuchino}, \text{latte}, \text{te verde}\}$

> **c) $\{\text{espresso}, \text{americano}, \text{latte}, \text{te verde}\}$**

### Pregunta 10

¿Cuál de las siguientes propiedades es correcta para cualquier evento $A$ dentro de $\Omega$?

a) $A \cup A^c = \varnothing$
b) $A \cap A^c = \Omega$
c) $A \cup A^c = \Omega$
d) $A \cap A^c = A$

> **c) $A \cup A^c = \Omega$**
