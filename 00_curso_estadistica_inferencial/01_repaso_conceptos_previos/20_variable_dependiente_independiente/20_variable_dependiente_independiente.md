---
titulo: "Variable dependiente e independiente"
tipo: anotacion-video
tema: "Variables dependiente e independiente"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Variable dependiente e independiente

## 🎬 Datos del video
- **Título:** Variable dependiente e independiente | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Variable+dependiente+e+independiente+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Se definen la variable independiente (la que se controla o elige) y la dependiente (la que se mide o resulta). Se usa la notación $y = f(x)$ y se analizan ejemplos en experimentos y en regresión lineal.

## 🧮 Contenido

### Definición

- **Variable independiente** ($x$): la que se manipula, controla o elige libremente.
- **Variable dependiente** ($y$): la que se observa o mide, y que depende de la independiente.

En notación funcional:

$$y = f(x)$$

La salida $y$ depende del valor de la entrada $x$.

### ¿Cómo identificarlas?

En una relación causal, la causa suele ser la independiente y el efecto la dependiente. En experimentos, la independiente es la que el investigador **varía**, y la dependiente la que **se mide** como resultado.

### Representación en los ejes

- La variable independiente se coloca en el **eje horizontal** ($X$).
- La variable dependiente se coloca en el **eje vertical** ($Y$).

Cada punto de la gráfica tiene coordenadas $(x, y)$, donde $y = f(x)$.

### En experimentos

Un típico diseño experimental:

1. Se fija un valor de la variable independiente (por ejemplo, una dosis).
2. Se mide la variable dependiente (por ejemplo, la respuesta).
3. Se repite para varios valores y se compara.

### En regresión

En regresión se modela $y$ (dependiente) como función de $x$ (independiente), por ejemplo la recta:

$$\hat{y} = a + b x$$

Se habla también de **variable predictora** (independiente) y **variable de respuesta** (dependiente). Cambiar $x$ produce un cambio predecible en $y$.

## 💡 Ejemplo numérico

**Problema:** En un experimento se estudia cuántas horas de estudio ($x$) se asocian con la calificación final ($y$), con modelo $y = 5 + 8x$.

**Paso 1 — Identificar variables:**

- $x$ = horas de estudio → **independiente** (se elige).
- $y$ = calificación → **dependiente** (se mide).

**Paso 2 — Evaluar $x = 3$:**

$$y = 5 + 8(3) = 5 + 24 = 29$$

**Paso 3 — Evaluar $x = 5$:**

$$y = 5 + 8(5) = 5 + 40 = 45$$

**Paso 4 — Interpretar la diferencia:**

Al pasar de 3 a 5 horas de estudio, la calificación esperada sube de 29 a 45, una diferencia de $8 \times 2 = 16$ puntos. Esto confirma que $y$ depende de $x$: por cada hora adicional, la calificación esperada aumenta en 8 puntos.

**Paso 5 — Tabla de valores para varias horas:**

| Horas $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Calificación $y$ | 5 | 13 | 21 | 29 | 37 | 45 |

La progresión confirma la dependencia lineal: cada hora suma 8 puntos, y con $x = 0$ se obtiene el valor base $y = 5$.

## 🌍 Ejemplo de la vida real

En un horno de panadería, el tiempo de horneado ($x$, independiente) se elige y se mide la humedad del pan ($y$, dependiente). Al cambiar el tiempo, cambia la humedad resultante, lo que permite al panadero ajustar la receta según la relación observada. En un gráfico, el tiempo va en el eje horizontal y la humedad en el eje vertical.

> [!tip] Relación con el curso
> Identificar la variable dependiente e independiente es el primer paso para construir modelos de regresión y para plantear correctamente las hipótesis en pruebas estadísticas.
