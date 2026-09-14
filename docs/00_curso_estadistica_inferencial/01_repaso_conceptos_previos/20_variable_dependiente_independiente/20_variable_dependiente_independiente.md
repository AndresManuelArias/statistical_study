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

<iframe width="560" height="315" src="https://www.youtube.com/embed/1C03X8BImek?si=T5g9QrWnz8oPEPLR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

**📊 Gráfico — Relación entre horas de estudio y calificación:**

```chart
type: line
labels: [0, 1, 2, 3, 4, 5]
series:
  - title: "Calificación = 5 + 8x"
    data: [5, 13, 21, 29, 37, 45]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> **Interpretación:**
> - **Eje horizontal (X):** Horas de estudio (variable **independiente**)
> - **Eje vertical (Y):** Calificación final (variable **dependiente**)
> - La línea sube constantemente porque a más horas, mayor calificación
> - Pendiente = 8 significa que cada hora adicional suma 8 puntos a la calificación

## 🌍 Ejemplo de la vida real

En un horno de panadería, el tiempo de horneado ($x$, independiente) se elige y se mide la humedad del pan ($y$, dependiente). Al cambiar el tiempo, cambia la humedad resultante, lo que permite al panadero ajustar la receta según la relación observada. En un gráfico, el tiempo va en el eje horizontal y la humedad en el eje vertical.

**📊 Gráfico — Relación entre tiempo de horneado y humedad del pan:**

```chart
type: line
labels: [5, 10, 15, 20, 25, 30]
series:
  - title: "Humedad = 95 - 1.5x"
    data: [87.5, 80, 72.5, 65, 57.5, 50]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

> **Interpretación:**
> - **Eje horizontal (X):** Tiempo de horneado en minutos (variable **independiente**)
> - **Eje vertical (Y):** Humedad del pan en % (variable **dependiente**)
> - La línea baja porque más tiempo de horneado reduce la humedad
> - Pendiente = -1.5 significa que cada minuto adicional reduce la humedad en 1.5%
> - El panadero usa esta relación para obtener la humedad deseada ajustando el tiempo

> [!tip] Relación con el curso
> Identificar la variable dependiente e independiente es el primer paso para construir modelos de regresión y para plantear correctamente las hipótesis en pruebas estadísticas.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es la diferencia principal entre variable independiente y variable dependiente?

a) La independiente es la que se mide como resultado en el experimento
b) La independiente se manipula o elige libremente; la dependiente se mide u observa
c) La dependiente siempre va en el eje horizontal y la independiente en el vertical
d) Ambas variables son elegidas por el investigador sin diferencia conceptual

> **b) La independiente se manipula o elige libremente; la dependiente se mide u observa**

### Pregunta 2

En la notación funcional $y = f(x)$, ¿qué representa $y$?

a) La variable que el investigador controla directamente
b) La constante del modelo
c) La variable que se mide y depende del valor de $x$
d) El valor base cuando $x = 0$

> **c) La variable que se mide y depende del valor de $x$**

### Pregunta 3

Un nutricionista varía la dosis de vitamina C (en mg) que recibe cada paciente y mide su nivel de energía después de 4 semanas. ¿Cuál es la variable independiente?

a) El nivel de energía del paciente
b) La dosis de vitamina C administrada
c) El tiempo transcurrido desde la primera dosis
d) El número de pacientes en el estudio

> **b) La dosis de vitamina C administrada**

### Pregunta 4

Según el ejemplo numérico del archivo, con el modelo $y = 5 + 8x$, ¿cuál es la calificación esperada cuando se estudian 4 horas?

a) 37
b) 32
c) 29
d) 45

> **a) 37**

### Pregunta 5

Si el modelo es $y = 5 + 8x$ y se pasan de 2 a 5 horas de estudio, ¿cuántos puntos aumenta la calificación esperada?

a) 16 puntos
b) 24 puntos
c) 20 puntos
d) 32 puntos

> **b) 24 puntos**

### Pregunta 6

En una gráfica de dispersión que relaciona horas de ejercicio semanal con peso corporal, ¿en qué eje se coloca la variable independiente?

a) Eje vertical ($Y$)
b) No importa el eje
c) Eje horizontal ($X$)
d) Solo se representa en una tabla, no en gráficas

> **c) Eje horizontal ($X$)**

### Pregunta 7

En el modelo de regresión lineal $\hat{y} = a + bx$, ¿cómo se denomina a la variable $x$?

a) Variable de respuesta
b) Variable observada
c) Variable predictora o independiente
d) Variable aleatoria

> **c) Variable predictora o independiente**

### Pregunta 8

En un experimento de un fabricante de cereal, se varía la temperatura de cocción ($x$) y se mide la humedad resultante ($y$). Según el modelo $y = 5 + 8x$, ¿cuál es la humedad esperada con una temperatura de cocción de 3 grados?

a) 29
b) 37
c) 21
d) 45

> **a) 29**

### Pregunta 9

¿Qué sucede cuando cambia el valor de la variable independiente $x$ en el modelo $y = f(x)$?

a) El valor de $y$ se mantiene constante
b) El valor de $y$ aumenta o disminuye de forma predecible
c) El valor de $x$ depende de $y$
d) Ambas variables se vuelven independientes

> **b) El valor de $y$ aumenta o disminuye de forma predecible**

### Pregunta 10

En el ejemplo de la vida real del archivo, un panadero usa el modelo $y = 5 + 8x$ para predecir la humedad del pan en función del tiempo de horneado. Si hornea el pan durante 2 minutos más (de 3 a 5), ¿cuánto cambia la humedad predicha?

a) 16 unidades
b) 24 unidades
c) 10 unidades
d) 8 unidades

> **a) 16 unidades**