---
titulo: Muestreo Aleatorio Estratificado
tipo: anotacion-video
tema: Muestreo Aleatorio Estratificado
tags:
  - estadistica-inferencial
  - muestreo
---

# Muestreo Aleatorio Estratificado

## 🎬 Datos del video
- **Título:** Muestreo Aleatorio Estratificado | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Muestreo+Aleatorio+Estratificado+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El muestreo estratificado divide la población en grupos homogéneos (estratos) y toma una muestra aleatoria simple dentro de cada uno. Esto garantiza representación de todos los subgrupos y generalmente produce estimaciones más precisas que el muestreo aleatorio simple.

## 🧮 Contenido

### Idea central

1. Dividir la población en $L$ estratos mutuamente exclusivos y colectivamente exhaustivos.
2. Dentro de cada estrato, aplicar muestreo aleatorio simple.
3. Combinar los resultados para estimar parámetros poblacionales.

Los estratos deben ser **homogéneos por dentro** (los individuos del mismo estrato son similares entre sí respecto a la variable de interés) y **heterogéneos entre sí**.

### Asignación proporcional

Si el estrato $h$ tiene $N_h$ individuos, la cantidad a muestrear es:

$$n_h = n \cdot \frac{N_h}{N}$$

donde $N = \sum_{h=1}^{L} N_h$ es el tamaño total de la población y $n$ el tamaño total de la muestra.

### Estimador de la media poblacional

$$\bar{X}_{\text{est}} = \sum_{h=1}^{L} W_h \cdot \bar{X}_h$$

donde $W_h = N_h / N$ es el peso del estrato y $\bar{X}_h$ es la media muestral del estrato $h$.

Este estimador es insesgado: $E(\bar{X}_{\text{est}}) = \mu$.

### Error estándar del estimador

$$\sigma_{\bar{X}_{\text{est}}} = \sqrt{\sum_{h=1}^{L} W_h^2 \cdot \frac{\sigma_h^2}{n_h}}$$

Si cada estrato es más homogéneo que la población completa, este error es menor que el del muestreo aleatorio simple.

### Cuándo usar estratificación

- Cuando la población es heterogénea pero el interior de cada estrato es homogéneo.
- Cuando se quiere garantizar representación de subgrupos minoritarios.
- Cuando se desea reducir el error estándar de la estimación.
- Cuando se conocen fácilmente los tamaños de cada estrato.

### Diferencia clave con el muestreo aleatorio simple

En el muestreo simple la muestra se selecciona de TODA la población de una vez. En el estratificado primero se subdivide la población y luego se muestrea cada subgrupo por separado, garantizando que ningún estrato quede sin representación.

## 💡 Ejemplo numérico

Una escuela tiene $N = 400$ estudiantes distribuidos en 4 grados:

| Grado | Estudiantes ($N_h$) | Peso $W_h$ | Muestra $n_h$ (para $n=80$) |
|---|---|---|---|
| 1° | 120 | 0.30 | $80 \times 0.30 = 24$ |
| 2° | 100 | 0.25 | $80 \times 0.25 = 20$ |
| 3° | 100 | 0.25 | $80 \times 0.25 = 20$ |
| 4° | 80 | 0.20 | $80 \times 0.20 = 16$ |

Supongamos que las medias de tiempo de estudio semanal por grado son:
- $\bar{X}_1 = 8.5$ h, $\bar{X}_2 = 10.2$ h, $\bar{X}_3 = 12.8$ h, $\bar{X}_4 = 14.5$ h

**Media estratificada:**

$$\bar{X}_{\text{est}} = (0.30)(8.5) + (0.25)(10.2) + (0.25)(12.8) + (0.20)(14.5)$$

$$= 2.55 + 2.55 + 3.20 + 2.90 = 11.20 \text{ horas}$$

## 🌍 Ejemplo de la vida real

Una cadena de tiendas de ropa divide sus clientes en estratos por rango de edad (18-25, 26-35, 36-50, 50+). Para encuestar 400 clientes, asigna proporcionalmente: 120 del primer grupo, 130 del segundo, 100 del tercero y 50 del cuarto. Así asegura que todos los perfiles de compra estén representados y las estimaciones por rango de edad sean precisas.

> [!tip] Relación con el curso
> El muestreo estratificado es una extensión del aleatorio simple que reduce el error estándar de las estimaciones, lo que permite inferencias más precisas con el mismo tamaño de muestra.
