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
