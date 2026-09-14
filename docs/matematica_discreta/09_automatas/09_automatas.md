---
titulo: Autómatas y lenguajes
tipo: unidad-didactica
tema: automatas
tags:
  - matematica-discreta
  - automatas
---

# Autómatas y lenguajes

Un **autómata finito** es una máquina con un número finito de **estados** que cambia según la **entrada**. El semáforo de la introducción es un autómata (rojo → amarillo → verde).

- **Expresiones regulares (regex):** patrones para validar textos. Ejemplo: `^\d{3}-\d{4}$` valida un teléfono tipo "555-1234".
- **Gramáticas:** reglas para construir lenguajes (de programación o naturales). Con ellas se hacen los **compiladores**.
- **Máquina de Turing:** el modelo de computación más general; lo que un algoritmo puede (o no puede) hacer.

> [!example] Validar un correo
> Un autómata puede decidir si "usuario@dominio.com" es válido: pasa por estados (usuario → @ → dominio → extensión) y acepta o rechaza al final. Eso haces cada vez que llenas un formulario web.

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py` o directamente en esta página web.

### Pregunta 1

Un **autómata finito** cambia de estado según:

a) El azar
b) La entrada que recibe
c) El número de estados
d) La memoria del computador

> **b) La entrada que recibe**

---

### Pregunta 2

La expresión regular que valida un teléfono tipo 555-1234 es:

a) `^\d{3}-\d{4}$`
b) `^\d{4}-\d{3}$`
c) `^a-z$`
d) `[0-9]`

> **a) `^\d{3}-\d{4}$`**

---

### Pregunta 3

La **máquina de Turing** es:

a) Un modelo de computación general
b) Un tipo de memoria
c) Un lenguaje de programación
d) Un autómata sin estados

> **a) Un modelo de computación general**

---

### Pregunta 4

Un semáforo (rojo → amarillo → verde) es un ejemplo de:

a) Expresión regular
b) Autómata finito
c) Gramática
d) Grafo completo

> **b) Autómata finito**

---

### Pregunta 5

Las **gramáticas formales** se usan principalmente para:

a) Construir compiladores y analizar lenguajes
b) Dibujar diagramas
c) Calcular MCD
d) Ordenar listas

> **a) Construir compiladores y analizar lenguajes**

---
