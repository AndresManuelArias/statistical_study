---
titulo: Muestreo Aleatorio por Conglomerados
tipo: anotacion-video
tema: Muestreo Aleatorio por Conglomerados
tags:
  - estadistica-inferencial
  - muestreo
---

# Muestreo Aleatorio por Conglomerados

## 🎬 Datos del video
- **Título:** Cluster Random Sampling | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Cluster+Random+Sampling+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El muestreo por conglomerados divide la población en grupos (conglomerados) que reflejan la heterogeneidad general, luego selecciona algunos conglomerados al azar y muestrea todos (o parte) de sus elementos. Es ideal cuando la población está agrupada naturalmente y se requiere reducir costos logísticos.

## 🧮 Contenido

### Diferencia clave con estratificación

| Aspecto | Estratificación | Conglomerados |
|---|---|---|
| Grupos | Homogéneos por dentro | Heterogéneos por dentro |
| Muestreo | Se muestrea CADA grupo | Se seleccionan ALGUNOS grupos |
| Objetivo | Representación garantizada | Reducción de costo |
| Precisión | Mayor que muestreo simple | Menor que muestreo simple |

En estratificación, los grupos son homogéneos internamente y se muestrean todos. En conglomerados, los grupos son heterogéneos (mini-poblaciones) y se seleccionan algunos.

### Procedimiento

1. Dividir la población en $M$ conglomerados.
2. Seleccionar $m$ conglomerados al azar simple.
3. Incluir **todos** los elementos de los conglomerados seleccionados (o una submuestra de ellos).

### Estimador de la media

$$\bar{X}_{\text{cong}} = \frac{\sum_{i=1}^{m} M_i \cdot \bar{X}_i}{\sum_{i=1}^{m} M_i}$$

donde $M_i$ es el tamaño del conglomerado $i$ y $\bar{X}_i$ su media muestral.

### Error estándar para conglomerados

$$\sigma_{\bar{X}_{\text{cong}}} = \sqrt{\frac{\sigma^2}{m \cdot \bar{M}} \cdot \frac{M - m}{M - 1}}$$

donde $\bar{M}$ es el tamaño promedio de los conglomerados y $\sigma^2$ es la varianza entre conglomerados.

### Cuándo usar conglomerados

- Cuando la población está dispersa geográficamente.
- Cuando no existe una lista completa de individuos.
- Cuando los conglomerados ya existen naturalmente (manzanas, salones, hospitales).

### Un solo paso vs. dos pasos

- **Conglomerados de una etapa:** Se miden todos los elementos de los conglomerados seleccionados.
- **Conglomerados de dos etapas:** Se seleccionan conglomerados y luego una submuestra dentro de cada uno.

La versión de dos etapas reduce aún más los costos cuando los conglomerados son muy grandes.

## 💡 Ejemplo numérico

Una ciudad tiene 50 manzanas ($M = 50$) y se seleccionan $m = 5$ al azar. Cada manzana tiene aproximadamente 20 viviendas:

| Manzana | Viviendas ($M_i$) | Promedio gasto mensual ($\bar{X}_i$) |
|---|---|---|
| 12 | 22 | $1,200 |
| 27 | 18 | $1,450 |
| 35 | 20 | $1,100 |
| 41 | 19 | $1,350 |
| 48 | 21 | $1,280 |

**Total de viviendas muestreadas:** $22 + 18 + 20 + 19 + 21 = 100$

**Media ponderada:**

$$\bar{X}_{\text{cong}} = \frac{22(1200) + 18(1450) + 20(1100) + 19(1350) + 21(1280)}{100}$$

$$= \frac{26{,}400 + 26{,}100 + 22{,}000 + 25{,}650 + 26{,}880}{100} = \frac{127{,}030}{100} = \$1{,}270.30$$

## 🌍 Ejemplo de la vida real

Una empresa de encuestas quiere estudiar el nivel educativo de una ciudad. Divide la ciudad en colonias (conglomerados), selecciona 8 colonias al azar y encuesta a TODOS los habitantes mayores de 15 años de esas colonias. Es mucho más barato que visitar toda la ciudad puerta por puerta.

En una escuela, se puede seleccionar al azar 4 de 20 salones de clases y aplicar el examen a todos los estudiantes de esos salones.

> [!tip] Relación con el curso
> El muestreo por conglomerados es una alternativa práctica al muestreo aleatorio simple cuando la población es dispersa geográficamente, aunque requiere una muestra más grande para alcanzar la misma precisión.
