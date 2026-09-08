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
- **Enlace:** https://www.youtube.com/results?search_query=Carroll+Diagrams+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

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
