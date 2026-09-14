---
titulo: Teoría de números
tipo: unidad-didactica
tema: teoria numeros
tags:
  - matematica-discreta
  - teoria-numeros
---

# Teoría de números

## Divisibilidad y primos

- $a$ divide a $b$ ($a \mid b$) si $b = a \cdot k$ para algún entero $k$: "4 divide a 12" porque $12 = 4 \cdot 3$.
- **Primo:** divisible solo por 1 y por sí mismo (2, 3, 5, 7, 11…). Los primos son los **"átomos"** de los números: todo número se factoriza en primos de forma única (Teorema Fundamental de la Aritmética).

## MCD y algoritmo de Euclides

El **máximo común divisor (MCD)** de $a$ y $b$ es el divisor más grande que comparten.
- Ejemplo: $\text{MCD}(48, 18) = 6$ porque $48 = 2^4 \cdot 3$ y $18 = 2 \cdot 3^2$; lo común es $2 \cdot 3 = 6$.

**Algoritmo de Euclides** (el más antiguo que se conserva): divide y usa el residuo:

$$
48 = 18 \cdot 2 + 12 \qquad 18 = 12 \cdot 1 + 6 \qquad 12 = 6 \cdot 2 + 0
$$

El último residuo no nulo es el MCD: **6**. Rápido y eficiente, ideal para computadoras.

## Aritmética modular

Trabajar con **residuos**: "el reloj da vueltas". Las 25:00 horas son las 1:00 (módulo 24). Escribimos $25 \equiv 1 \ (\text{mod } 24)$.

- Sirve para: calendarios, códigos de barras, validación de tarjetas, y **cierta criptografía**.
- RSA (lo que cifra tu conexión) usa números muy grandes y sus restos módulo otro número. La seguridad está en que **factorizar primos grandes es difícil**.

> [!example] Módulo divertido
> ¿Qué día de la semana será en 10 días si hoy es lunes? $10 \equiv 3 \ (\text{mod } 7)$ → jueves.

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py` o directamente en esta página web.

### Pregunta 1

El **máximo común divisor** $\text{MCD}(48, 18)$ es:

a) 3
b) 6
c) 9
d) 12

> **b) 6**

---

### Pregunta 2

En aritmética modular, $25 \equiv x \ (\text{mod } 24)$ con $0 \leq x < 24$ da:

a) $x=0$
b) $x=1$
c) $x=24$
d) $x=25$

> **b) $x=1$**

---

### Pregunta 3

Un número **primo** es aquel que:

a) Es par
b) Tiene exactamente dos divisores: 1 y él mismo
c) Termina en 0 o 5
d) Es divisible por todos los números

> **b) Tiene exactamente dos divisores: 1 y él mismo**

---

### Pregunta 4

El **algoritmo de Euclides** calcula el MCD usando:

a) Restas sucesivas
b) Divisiones con residuo
c) Factorización en primos
d) Tablas de multiplicar

> **b) Divisiones con residuo**

---

### Pregunta 5

El **teorema fundamental de la aritmética** afirma que todo número $n \geq 2$:

a) Es primo
b) Se factoriza en primos de forma única (salvo el orden)
c) Es divisible por 2
d) Es un cuadrado perfecto

> **b) Se factoriza en primos de forma única (salvo el orden)**

---
