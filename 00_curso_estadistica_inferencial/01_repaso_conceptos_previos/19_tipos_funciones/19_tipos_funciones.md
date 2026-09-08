---
titulo: "Tipos de funciones"
tipo: anotacion-video
tema: "Clasificación de funciones"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Tipos de funciones

## 🎬 Datos del video
- **Título:** Tipos de funciones | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Tipos+de+funciones+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Se clasifican las funciones según su comportamiento: inyectivas, sobreyectivas, biyectivas, constantes, de identidad, crecientes y decrecientes. Cada tipo se caracteriza por su dominio, codominio y la relación entre entradas y salidas.

## 🧮 Contenido

### Función inyectiva

Cada valor del rango es imagen de un único elemento del dominio:

$$f(a) = f(b) \implies a = b$$

Dos elementos distintos tienen siempre imágenes distintas. La misma salida nunca proviene de dos entradas diferentes.

### Función sobreyectiva

El rango coincide con el codominio:

$$\text{Rango}(f) = \text{Codominio}(f)$$

Todo elemento del codominio es alcanzado por algún elemento del dominio.

### Función biyectiva

Es simultáneamente **inyectiva y sobreyectiva**. Establece una correspondencia uno a uno entre dominio y codominio, y es la única que garantiza función inversa.

### Función constante

Asigna el mismo valor a todo elemento del dominio:

$$f(x) = c \quad \text{para todo } x$$

Su gráfica es una recta horizontal.

### Función identidad

A cada elemento le hace corresponder sí mismo:

$$I(x) = x$$

Es siempre biyectiva y su gráfica es la bisectriz del primer y tercer cuadrante.

### Funciones crecientes y decrecientes

- **Creciente**: si $x_1 < x_2$ entonces $f(x_1) \leq f(x_2)$.
- **Estrictamente creciente**: $x_1 < x_2 \implies f(x_1) < f(x_2)$.
- **Decreciente**: si $x_1 < x_2$ entonces $f(x_1) \geq f(x_2)$.
- **Estrictamente decreciente**: $x_1 < x_2 \implies f(x_1) > f(x_2)$.

### Tabla resumen

| Tipo | Condición clave |
|---|---|
| Inyectiva | $f(a)=f(b) \Rightarrow a=b$ |
| Sobreyectiva | $\text{Rango} = \text{Codominio}$ |
| Biyectiva | Inyectiva + sobreyectiva |
| Constante | $f(x) = c$ |
| Identidad | $f(x) = x$ |
| Creciente | $x_1 < x_2 \Rightarrow f(x_1) \leq f(x_2)$ |
| Decreciente | $x_1 < x_2 \Rightarrow f(x_1) \geq f(x_2)$ |

## 💡 Ejemplo numérico

**Problema:** Clasificar $f(x) = 2x$ con dominio $\{1, 2, 3\}$ y codominio $\{2, 4, 6\}$.

**Paso 1:** Calcular valores:

$$f(1)=2,\quad f(2)=4,\quad f(3)=6$$

**Paso 2 — ¿Inyectiva?** Sí: entradas distintas ($1,2,3$) dan imágenes distintas ($2,4,6$). No hay dos salidas iguales.

**Paso 3 — ¿Sobreyectiva?** Sí: el rango $\{2,4,6\}$ coincide exactamente con el codominio.

**Paso 4 — Conclusión:** Es inyectiva y sobreyectiva, luego es **biyectiva**. Además es estrictamente creciente, porque si $x_1 < x_2$ entonces $2x_1 < 2x_2$.

## 💡 Segundo ejemplo: función no inyectiva

**Problema:** Clasificar $g(x) = x^2$ con dominio $\{-2,0,2\}$ y codominio $\{0,4\}$.

**Paso 1:** $g(-2)=4$, $g(0)=0$, $g(2)=4$.

**Paso 2 — ¿Inyectiva?** No: $-2$ y $2$ comparten imagen $4$.

**Paso 3 — ¿Sobreyectiva?** Sí: el rango $\{0,4\}$ coincide con el codominio.

**Conclusión:** Es sobreyectiva pero no inyectiva, así que tampoco es biyectiva.

## 🌍 Ejemplo de la vida real

En el control de calidad de una fábrica, la función que asigna a cada lote de producción su número de piezas defectuosas puede ser no inyectiva (dos lotes con el mismo conteo). Si definimos el conteo sobre lotes distintos y verificamos que cada valor se asocia a un solo lote, decidimos si la correspondencia es inyectiva, sobreyectiva o biyectiva según el caso.

> [!tip] Relación con el curso
> Reconocer si una función es inyectiva o sobreyectiva es útil para saber si una transformación de datos es reversible y para interpretar biyecciones en la estandarización de variables.
