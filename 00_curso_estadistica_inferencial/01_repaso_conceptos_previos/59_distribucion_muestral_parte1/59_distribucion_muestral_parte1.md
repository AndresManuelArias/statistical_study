---
titulo: Distribución Muestral (Parte 1)
tipo: anotacion-video
tema: Distribución Muestral de la Media
tags:
  - estadistica-inferencial
  - inferencia
---

# Distribución Muestral (Parte 1)

## 🎬 Datos del video
- **Título:** Distribución Muestral (parte 1) | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribucion+Muestral+parte+1+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

La distribución muestral de la media es la distribución de probabilidad de todas las medias muestrales posibles de tamaño $n$ extraídas de una población. Sus propiedades fundamentales son que su esperanza es la media poblacional y su desviación estándar es el error estándar $\sigma / \sqrt{n}$.

## 🧮 Contenido

### Concepto fundamental

Si de una población con media $\mu$ y desviación estándar $\sigma$ tomamos **todas** las muestras posibles de tamaño $n$, y calculamos la media de cada una, obtendremos una distribución de esas medias: la **distribución muestral de $\bar{X}$**.

Esta distribución no se observa en la práctica (solo se toma UNA muestra), pero es el modelo teórico que permite cuantificar la incertidumbre de nuestras estimaciones.

### Diferencia entre parámetro y estadístico

| Símbolo | Nombre | Tipo | Describe |
|---|---|---|---|
| $\mu$ | Media poblacional | Parámetro | Toda la población |
| $\sigma$ | Desviación estándar poblacional | Parámetro | Toda la población |
| $\bar{X}$ | Media muestral | Estadístico | Una muestra de tamaño $n$ |
| $s$ | Desviación estándar muestral | Estadístico | Una muestra de tamaño $n$ |

Los parámetros ($\mu$, $\sigma$) son fijos pero usualmente desconocidos. Los estadísticos ($\bar{X}$, $s$) son calculables a partir de la muestra y varían de muestra en muestra.

### Propiedades de la distribución muestral

**1. Esperanza de $\bar{X}$:**

$$E(\bar{X}) = \mu$$

La distribución muestral tiene como centro exactamente la media poblacional. Por eso se dice que $\bar{X}$ es un **estimador insesgado** de $\mu$.

**2. Error estándar de la media:**

$$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$$

Es la desviación estándar de la distribución muestral. Mide cuánto varían las medias muestrales entre sí. A mayor $n$, menor variabilidad.

**3. Si la población es normal, $\bar{X}$ es exactamente normal:**

$$\bar{X} \sim N\left(\mu, \frac{\sigma}{\sqrt{n}}\right)$$

**4. Si la población NO es normal, se necesita $n$ grande** (Teorema del Límite Central, próximo tema).

### Simulación mental de la distribución muestral

Imagina que escribes todas las muestras posibles de 36 estudiantes en papeles distintos. Cada papel contiene su media $\bar{X}$. Si dibujas un histograma de todos esos promedios, obtendrás una curva en forma de campana centrada en $\mu = 70$.

### Nota sobre estimadores

- $\bar{X}$ estima $\mu$ sin sesgo: $E(\bar{X}) = \mu$.
- $s$ (desviación estándar muestral) con corrección de Bessel estima $\sigma$ sin sesgo.
- La distribución muestral de $\bar{X}$ es más angosta que la población original, porque promediar reduce la variabilidad.

## 💡 Ejemplo numérico

Una población de estudiantes tiene $\mu = 70$ puntos y $\sigma = 12$ puntos en un examen. Se extraen todas las muestras posibles de $n = 36$.

**Propiedades de la distribución muestral:**

$$E(\bar{X}) = \mu = 70$$

$$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} = \frac{12}{\sqrt{36}} = \frac{12}{6} = 2 \text{ puntos}$$

Esto significa que las medias muestrales de 36 estudiantes varían en promedio 2 puntos alrededor de 70. Una media muestral individual como $\bar{X} = 65$ está muy lejos del centro (2.5 errores estándar).

## 🌍 Ejemplo de la vida real

Una fábrica produce baterías con una vida media de $\mu = 500$ horas y $\sigma = 40$ horas. Toma muestras de $n = 25$ baterías y calcula $\bar{X}$. Su error estándar es:

$$\sigma_{\bar{X}} = \frac{40}{\sqrt{25}} = \frac{40}{5} = 8 \text{ horas}$$

Si $\bar{X} < 484$ horas (2 errores estándar debajo del centro), se investiga la línea de producción. La distribución muestral permite calcular la probabilidad de que esto ocurra incluso sin ningún problema real.

> [!tip] Relación con el curso
> La distribución muestral es el puente entre la estadística descriptiva (lo que observamos en la muestra) y la inferencial (conclusiones sobre la población). Sin ella no podríamos estimar parámetros ni hacer pruebas de hipótesis.
