---
titulo: ¿Qué es la Estadística Inferencial?
tipo: anotacion-video
tema: Introducción a la Estadística Inferencial
tags:
  - estadistica-inferencial
  - inferencia
---

# ¿Qué es la Estadística Inferencial?

## 🎬 Datos del video
- **Título:** ¿Qué es la Estadística Inferencial? | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Que+es+la+Estadistica+Inferencial+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/TnRroJ6uCzA?si=d0y_T6dBkntu6Hva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## 📋 Resumen

La estadística inferencial es la rama de la estadística que permite hacer conclusiones sobre una población a partir de información de una muestra. Sus dos grandes pilares son la estimación (puntual y por intervalos) y las pruebas de hipótesis. Se presenta su diferencia con la estadística descriptiva.

## 🧮 Contenido

### Definición

La **estadística inferencial** es el conjunto de métodos y técnicas que permiten generalizar resultados obtenidos de una muestra a la población completa de la que proviene, cuantificando la incertidumbre de esas generalizaciones.

### Estadística descriptiva vs. inferencial

| Aspecto | Descriptiva | Inferencial |
|---|---|---|
| Objetivo | Resumir y describir datos | Hacer conclusiones sobre la población |
| Alcance | Solo la muestra observada | Toda la población |
| Herramientas | Tablas, gráficos, medidas | Estimación, pruebas de hipótesis |
| Ejemplo | Promedio de la muestra = 75 | La media poblacional está entre 72 y 78 |

### Pilares de la inferencia

**1. Estimación puntual:**

Un solo valor que estima el parámetro poblacional:

$$\hat{\theta} = \text{estimador del parámetro } \theta$$

Ejemplo: $\bar{X}$ es un estimador puntual de $\mu$.

**2. Estimación por intervalos:**

Un rango de valores que con cierto nivel de confianza contiene al parámetro:

$$\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

El **nivel de confianza** ($1 - \alpha$) indica la fiabilidad del intervalo. Es la estimación más usada en la práctica porque comunica la incertidumbre.

**3. Pruebas de hipótesis:**

Procedimiento para decidir si hay evidencia suficiente para rechazar una afirmación sobre un parámetro poblacional.

- $H_0$: Hipótesis nula (la afirmación que se pone a prueba)
- $H_1$: Hipótesis alternativa (la afirmación contraria)
- **p-valor**: Probabilidad de observar un resultado tan extremo como el obtenido, asumiendo que $H_0$ es verdadera.

#### Gráfico: Intervalo de confianza del 95% para el monto promedio de facturas

```chart
type: bar
labels: ["Límite inferior\n($2,212.80)", "Estimación puntual\n($2,350.00)", "Límite superior\n($2,487.20)"]
series:
  - title: "Monto promedio estimado ($)"
    data: [2212.80, 2350.00, 2487.20]
width: 90%
labelColors: true
fill: true
beginAtZero: true
```

**Interpretación:**
- La **estimación puntual** es $\bar{x} = \$2{,}350$; la **estimación por intervalos** comunica la incertidumbre con un rango.
- Con $n = 81$ y $\sigma = 630$: $\pm 1.96(630/\sqrt{81}) = \pm 137.20$.
- Con 95% de confianza, el monto promedio real de las facturas con errores está entre **$2,212.80 y $2,487.20**.

### Flujo del proceso inferencial

1. Formular la pregunta de investigación
2. Recoger una muestra (con un método adecuado)
3. Calcular estadísticos descriptivos
4. Aplicar métodos inferenciales
5. Tomar conclusiones sobre la población

### Ejemplos de preguntas inferenciales

- ¿Cuál es el promedio de edad de los usuarios de una app? (estimación)
- ¿El nuevo proceso reduce el tiempo de fabricación? (prueba de hipótesis)
- ¿Qué proporción de habitantes de una ciudad apoya una política pública? (estimación de $p$)

## 💡 Ejemplo numérico

Un auditor quiere estimar el monto promedio de facturas con errores en una empresa. De una muestra de $n = 81$ facturas con errores, obtiene $\bar{X} = \$2,350$ y conoce que $\sigma = \$630$.

**Intervalo de confianza del 95%:**

$$\bar{X} \pm z_{0.025} \cdot \frac{\sigma}{\sqrt{n}} = 2350 \pm 1.96 \cdot \frac{630}{\sqrt{81}}$$

$$= 2350 \pm 1.96 \cdot 70 = 2350 \pm 137.20$$

$$IC_{95\%} = (2212.80,\ 2487.20)$$

El auditor concluye con 95% de confianza que el monto promedio real de las facturas con errores está entre $2,212.80 y $2,487.20.

## 🌍 Ejemplo de la vida real

Un hospital quiere saber si el tiempo promedio de espera en emergencias ha disminuido desde que implementó un nuevo sistema. La media histórica era $\mu = 45$ minutos. Toma una muestra de 64 pacientes y obtiene $\bar{X} = 41$ minutos con $\sigma = 16$ minutos. Mediante una prueba de hipótesis, puede determinar si la reducción es estadísticamente significativa o si solo se debe a la variabilidad natural del muestreo.

> [!tip] Relación con el curso
> La estadística inferencial es el objetivo final del curso: todos los conceptos previos (muestreo, distribuciones, probabilidad) convergen para permitirnos hacer inferencia válida y cuantificar la incertidumbre en nuestras conclusiones.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué permite hacer la estadística inferencial a partir de una muestra?

a) Describir únicamente los datos observados en la muestra
b) Generalizar resultados de una muestra a la población completa
c) Calcular solo medidas de tendencia central
d) Representar los datos mediante gráficos

> **b) Generalizar resultados de una muestra a la población completa**

---

### Pregunta 2

¿Qué es un estimador puntual?

a) Un rango de valores que contiene al parámetro poblacional con cierta probabilidad
b) Un solo valor numérico que estima un parámetro poblacional
c) Una prueba estadística para rechazar o no una hipótesis
d) Una tabla de frecuencias con los datos de la muestra

> **b) Un solo valor numérico que estima un parámetro poblacional**

---

### Pregunta 3

En la fórmula del intervalo de confianza para la media, $\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$, ¿qué representa $\frac{\sigma}{\sqrt{n}}$?

a) El error estándar de la proporción muestral
b) El margen de error del intervalo
c) La desviación estándar poblacional dividida entre la raíz cuadrada del tamaño de muestra
d) El nivel de confianza expresado en decimales

> **c) La desviación estándar poblacional dividida entre la raíz cuadrada del tamaño de muestra**

---

### Pregunta 4

Si se construye un intervalo de confianza al 95%, ¿qué significa ese nivel de confianza?

a) Que hay un 95% de probabilidad de que la media muestral sea correcta
b) Que el 95% de los datos de la muestra están dentro del intervalo
c) Que al repetir el procedimiento muchas veces, aproximadamente el 95% de los intervalos construidos contendrán el parámetro poblacional real
d) Que solo el 5% de los datos son válidos para el análisis

> **c) Que al repetir el procedimiento muchas veces, aproximadamente el 95% de los intervalos construidos contendrán el parámetro poblacional real**

---

### Pregunta 5

¿Cuál es la diferencia fundamental entre la estadística descriptiva y la inferencial?

a) La descriptiva usa muestras grandes y la inferencial usa muestras pequeñas
b) La descriptiva resumir y describe datos observados; la inferencial hace conclusiones sobre la población
c) La descriptiva se aplica solo en ciencias naturales y la inferencial solo en ciencias sociales
d) No existe diferencia, ambas hacen lo mismo con diferentes fórmulas

> **b) La descriptiva resumir y describe datos observados; la inferencial hace conclusiones sobre la población**

---

### Pregunta 6

Una empresa toma una muestra de $n = 100$ clientes y obtiene una proporción de satisfacción de $\hat{p} = 0.78$. Si el error estándar es 0.042, ¿cuál es el margen de error aproximado al 95% de confianza ($z = 1.96$)?

a) 0.042
b) 0.082
c) 0.78
d) 0.196

> **b) 0.082**

---

### Pregunta 7

¿Qué representa el p-valor en una prueba de hipótesis?

a) La probabilidad de que la hipótesis nula sea verdadera
b) La probabilidad de observar un resultado tan extremo como el obtenido, asumiendo que $H_0$ es verdadera
c) La probabilidad de que la alternativa $H_1$ sea correcta
d) El porcentaje de acierto del estimador puntual

> **b) La probabilidad de observar un resultado tan extremo como el obtenido, asumiendo que $H_0$ es verdadera**

---

### Pregunta 8

¿Cuál es el estimador puntual más común para la media poblacional $\mu$?

a) La mediana muestral
b) La moda muestral
c) El promedio muestral $\bar{x}$
d) El rango muestral

> **c) El promedio muestral $\bar{x}$**

---

### Pregunta 9

¿Cuáles son los tres pilares principales de la estadística inferencial?

a) Regresión, correlación y análisis de varianza
b) Estimación puntual, estimación por intervalos y pruebas de hipótesis
c) Muestreo aleatorio, muestreo estratificado y muestreo por conglomerados
d) Probabilidad, combinatoria y distribuciones de probabilidad

> **b) Estimación puntual, estimación por intervalos y pruebas de hipótesis**

---

### Pregunta 10

Un hospital quiere saber si el tiempo promedio de espera ha disminuido respecto a la media histórica de 45 minutos. Toma una muestra de 64 pacientes y obtiene $\bar{x} = 41$ minutos con $\sigma = 16$ minutos. ¿Qué tipo de procedimiento inferencial es más adecuado?

a) Estimación puntual únicamente, comparando 41 con 45
b) Una prueba de hipótesis para determinar si la reducción es estadísticamente significativa
c) Un intervalo de confianza sin realizar ninguna comparación
d) Un análisis descriptivo con gráficos de barras

> **b) Una prueba de hipótesis para determinar si la reducción es estadísticamente significativa**
