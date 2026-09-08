---
titulo: "Diagramas de Carroll"
tipo: anotacion-video
tema: "Diagramas de Carroll"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Diagramas de Carroll

## 🎬 Datos del video
- **Título:** Carroll Diagrams | Inferential Statistics
- **Canal:** José María Hernández Rivera (video en inglés)
- **Video:** [Ver en YouTube](https://youtu.be/6ci5Szj1ERk)
- **Playlist:** [Lista completa](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📹 Contenido del video

Para ayudarte a estudiar con éxito, aquí tienes los temas principales que se abordan en el video:

### Introducción a los Diagramas de Carroll
- **00:06** - Qué son y origen histórico (nombrados en honor al matemático y lógico británico Lewis Carroll, autor de *Alicia en el país de las maravillas*).
- **00:32** - Nombres alternativos con los que se les conoce (tablas de contingencia o de doble entrada).

### Utilidad y Ventajas
- **01:12** - Por qué son una alternativa útil frente a los diagramas de Venn-Euler cuando se manejan más de tres conjuntos, ya que evitan la dificultad en la interpretación visual.

### Ejemplo Práctico de Aplicación
- **00:39** - Planteamiento de un problema basado en datos de estudiantes de biología clasificados por semestre (conjuntos) y género (categorías/variables).
- **01:36** - Estructuración y distribución de los datos en formato de tabla de doble entrada.

### Resolución y Análisis del Diagrama
- **02:48** - Identificación de intersecciones entre conjuntos y filas/columnas.
- **03:45** - Procedimiento matemático para completar celdas faltantes mediante restas y sumas de totales por filas y columnas.

## 📋 Resumen
Los diagramas de Carroll son tablas de doble entrada que clasifican elementos según dos atributos binarios. Permiten visualizar de forma clara la pertenencia de cada elemento a través de celdas ordenadas por filas y columnas, además de mostrar los totales marginales con facilidad.

## 🧮 Contenido

### ¿Qué es un diagrama de Carroll?

Es una **tabla de doble entrada** (2×2) donde:

- Las **columnas** representan la presencia o ausencia de un atributo.
- Las **filas** representan la presencia o ausencia de un segundo atributo.
- Cada celda indica cuántos elementos cumplen **ambas** condiciones de su fila y columna.

### Estructura de la tabla

|  | Con atributo X | Sin atributo X | Total fila |
|---|---|---|---|
| Con atributo Y | $a$ | $b$ | $a+b$ |
| Sin atributo Y | $c$ | $d$ | $c+d$ |
| Total columna | $a+c$ | $b+d$ | $a+b+c+d$ |

### Cómo se leen las celdas

- Celda $a$: elementos con **X y Y**.
- Celda $b$: elementos con **Y** pero **sin X**.
- Celda $c$: elementos con **X** pero **sin Y**.
- Celda $d$: elementos **sin X y sin Y**.

La suma de las cuatro celdas es el **total** de elementos clasificados.

### Totales de fila y columna

- **Total fila**: suma de sus dos celdas. Indica cuántos elementos tienen (o no) el atributo Y.
- **Total columna**: suma de sus dos celdas. Indica cuántos elementos tienen (o no) el atributo X.
- El **gran total** (esquina inferior derecha) debe coincidir con la suma de los totales de fila y también con la de columna, lo que sirve para verificar los datos.

### Ventaja frente al diagrama de Venn

Para clasificar según dos atributos, la tabla de doble entrada es más ordenada y directa, además de preparar el terreno para las **tablas de contingencia** que se usan en estadística. La lectura de totales marginales es inmediata, cosa que en un diagrama de Venn requiere sumar varias regiones.

## 💡 Ejemplo numérico

**Problema:** En una cafetería se clasifican 60 bebidas según dos atributos:

- Atributo 1 (columnas): ¿tiene leche? → Sí / No
- Atributo 2 (filas): ¿es caliente? → Sí / No

Los datos recogidos son:

| | Con leche | Sin leche | Total |
|---|---|---|---|
| Caliente | 22 | 13 | 35 |
| Fría | 8 | 17 | 25 |
| Total | 30 | 30 | 60 |

**Paso 1 — Lectura de celdas:**
- Calientes con leche: $22$
- Calientes sin leche: $13$
- Frías con leche: $8$
- Frías sin leche: $17$

**Paso 2 — Totales de fila:**
- Calientes: $22 + 13 = 35$
- Frías: $8 + 17 = 25$

**Paso 3 — Totales de columna:**
- Con leche: $22 + 8 = 30$
- Sin leche: $13 + 17 = 30$

**Paso 4 — Verificación del gran total:**

$$22 + 13 + 8 + 17 = 60$$

También $35 + 25 = 60$ y $30 + 30 = 60$. Todo cuadra.

## 🌍 Ejemplo de la vida real

Un equipo de fútbol anota para cada jugador si tiene pase remoto (sí/no) y si está en la convocatoria como titular (sí/no). La tabla de doble entrada permite ver de un vistazo cuántos titulares tienen pase remoto, cuántos suplentes no lo tienen, y los totales por columna. Con esos totales el entrenador decide a quién alinear según la situación del partido.

## 🧮 Aplicación estadística: de Carroll a la contingencia

En inferencia estadística, las tablas de la misma forma pero con conteos observados se llaman **tablas de contingencia**. Si $a$, $b$, $c$ y $d$ son frecuencias observadas, la prueba de independencia $\chi^2$ compara el conteo observado con el esperado bajo la suposición de que los atributos son independientes.

> [!tip] Relación con el curso
> Los diagramas de Carroll son la antesala de las tablas de contingencia utilizadas en la prueba de independencia $\chi^2$, fundamental en estadística inferencial.


---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿En honor a quién reciben su nombre los diagramas de Carroll?

a) A un personaje de Alicia en el país de las maravillas
b) Al matemático y lógico británico Lewis Carroll
c) A un estadístico llamado Carroll
d) A un autor de novelas de misterio

> **b) Al matemático y lógico británico Lewis Carroll**

---

### Pregunta 2

¿Con qué otros nombres se conocen los diagramas de Carroll?

a) Tablas de frecuencias o histogramas
b) Tablas de contingencia o de doble entrada
c) Diagramas de Venn-Euler
d) Tablas de distribución normal

> **b) Tablas de contingencia o de doble entrada**

---

### Pregunta 3

¿Cuándo resultan especialmente útiles frente a los diagramas de Venn-Euler?

a) Cuando se manejan exactamente dos conjuntos
b) Cuando se manejan más de tres conjuntos, porque evitan la dificultad de interpretación visual
c) Nunca, el diagrama de Venn siempre es mejor
d) Solo cuando no hay conjuntos que clasificar

> **b) Cuando se manejan más de tres conjuntos, porque evitan la dificultad de interpretación visual**

---

### Pregunta 4

En un diagrama de Carroll de 2×2, ¿qué representan las columnas?

a) La presencia o ausencia de un atributo
b) El total de la fila
c) La intersección de tres conjuntos
d) Solo los elementos que cumplen ambas condiciones

> **a) La presencia o ausencia de un atributo**

---

### Pregunta 5

En la tabla 2×2 con atributo X (columnas) y atributo Y (filas), la celda $c$ representa:

a) Elementos con X y Y
b) Elementos con Y pero sin X
c) Elementos con X pero sin Y
d) Elementos sin X y sin Y

> **c) Elementos con X pero sin Y**

---

### Pregunta 6

La suma de las cuatro celdas internas ($a + b + c + d$) de un diagrama de Carroll representa:

a) La celda con mayor valor
b) El total de elementos clasificados (gran total)
c) La diferencia entre los totales de fila
d) El total de la última columna solamente

> **b) El total de elementos clasificados (gran total)**

---

### Pregunta 7

En el ejemplo de la cafetería (60 bebidas), la celda de bebidas **calientes sin leche** es:

a) 22
b) 13
c) 8
d) 17

> **b) 13**

---

### Pregunta 8

Con los mismos datos de la cafetería, el total de bebidas **frías** se calcula como:

a) $8 + 17 = 25$
b) $22 + 13 = 35$
c) $22 + 8 = 30$
d) $13 + 17 = 30$

> **a) $8 + 17 = 25$**

---

### Pregunta 9

Si el total de la columna "Con leche" es 30 y la celda "calientes con leche" es 22, el número de bebidas frías con leche es:

a) 8 (30 − 22)
b) 13
c) 17
d) 35

> **a) 8 (30 − 22)**

---

### Pregunta 10

En estadística, las tablas con la misma estructura que un diagrama de Carroll (conteos observados) se usan principalmente para:

a) La prueba de independencia chi-cuadrado ($\chi^2$), comparando conteos observados con esperados
b) Calcular solo medias aritméticas
c) Dibujar diagramas de Venn más complejos
d) Reemplazar las distribuciones de probabilidad

> **a) La prueba de independencia chi-cuadrado ($\chi^2$), comparando conteos observados con esperados**
