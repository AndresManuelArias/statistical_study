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
<iframe width="560" height="315" src="https://www.youtube.com/embed/RJ5WmslvUwY?si=Q3izGtq3MTYGJLxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

#### Gráfico: Viviendas por conglomerado seleccionado (ciudad con 50 manzanas)

```chart
type: bar
labels: ["Manzana 12", "Manzana 27", "Manzana 35", "Manzana 41", "Manzana 48"]
series:
  - title: "Viviendas en el conglomerado (M_i)"
    data: [22, 18, 20, 19, 21]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- De las $M = 50$ manzanas se seleccionan al azar $m = 5$; se encuesta a **todas** las viviendas de las manzanas elegidas: $100$ viviendas en total.
- La estimación de la media usa una **media ponderada** que da más peso a los conglomerados más grandes:

$$\bar{X}_{\text{cong}} = \frac{22(1200) + 18(1450) + 20(1100) + 19(1350) + 21(1280)}{100} = \$1{,}270.30$$

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

$$= \frac{26,400 + 26,100 + 22,000 + 25,650 + 26,880}{100} = \frac{127,030}{100} = \$1,270.30$$

## 🌍 Ejemplo de la vida real

Una empresa de encuestas quiere estudiar el nivel educativo de una ciudad. Divide la ciudad en colonias (conglomerados), selecciona 8 colonias al azar y encuesta a TODOS los habitantes mayores de 15 años de esas colonias. Es mucho más barato que visitar toda la ciudad puerta por puerta.

En una escuela, se puede seleccionar al azar 4 de 20 salones de clases y aplicar el examen a todos los estudiantes de esos salones.

> [!tip] Relación con el curso
> El muestreo por conglomerados es una alternativa práctica al muestreo aleatorio simple cuando la población es dispersa geográficamente, aunque requiere una muestra más grande para alcanzar la misma precisión.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué característica fundamental distingue a los conglomerados de los estratos en el muestreo?

a) Los conglomerados son homogéneos internamente y los estratos son heterogéneos
b) Los conglomerados son heterogéneos internamente y los estratos son homogéneos
c) En conglomerados se muestrea cada grupo, en estratos solo algunos
d) En estratos se seleccionan grupos completos, en conglomerados se muestrea dentro

> **b) Los conglomerados son heterogéneos internamente y los estratos son homogéneos**

---

### Pregunta 2

En el muestreo por conglomerados, ¿qué se selecciona al azar?

a) Todos los conglomerados de la población
b) Algunos elementos de cada conglomerado
c) Algunos conglomerados de la población
d) Una sola muestra de toda la población sin agrupar

> **c) Algunos conglomerados de la población**

---

### Pregunta 3

¿Cuándo es más adecuado usar muestreo por conglomerados?

a) Cuando se conoce exactamente el tamaño de la población
b) Cuando la población es homogénea y fácil de listar
c) Cuando la población está dispersa geográficamente o no hay lista completa
d) Cuando se requiere la mayor precisión posible con muestra pequeña

> **c) Cuando la población está dispersa geográficamente o no hay lista completa**

---

### Pregunta 4

En el ejemplo numérico del archivo, ¿cuál es la media ponderada calculada?

a) $1,270.30
b) $1,350.00
c) $1,200.50
d) $1,280.00

> **a) $1,270.30**

---

### Pregunta 5

¿Qué es un conglomerado de una etapa?

a) Se seleccionan conglomerados y luego una submuestra dentro de cada uno
b) Se seleccionan todos los conglomerados y se muestrea un solo elemento de cada uno
c) Se miden todos los elementos de los conglomerados seleccionados
d) Se dividen los conglomerados en subgrupos antes de medir

> **c) Se miden todos los elementos de los conglomerados seleccionados**

---

### Pregunta 6

¿Qué representa $M_i$ en la fórmula del estimador de la media por conglomerados?

a) La media del conglomerado $i$
b) El número total de conglomerados
c) El tamaño del conglomerado $i$
d) El promedio de los tamaños de todos los conglomerados

> **c) El tamaño del conglomerado $i$**

---

### Pregunta 7

¿Por qué la precisión del muestreo por conglomerados suele ser menor que la del muestreo aleatorio simple?

a) Porque los conglomerados son homogéneos
b) Porque se seleccionan pocos elementos por conglomerado
c) Porque los conglomerados son heterogéneos internamente como la población
d) Porque se muestrea el 100% de cada conglomerado

> **c) Porque los conglomerados son heterogéneos internamente como la población**

---

### Pregunta 8

En el ejemplo de la vida real del archivo, ¿qué representan las colonias de una ciudad?

a) Estratos de la población
b) Conglomerados de la población
c) Elementos de la muestra
d) Variables de estudio

> **b) Conglomerados de la población**

---

### Pregunta 9

¿Cuál es la diferencia principal entre conglomerados de una etapa y de dos etapas?

a) En una etapa se usan más conglomerados que en dos etapas
b) En dos etapas se muestrea el 100% de cada conglomerado seleccionado
c) En una etapa se miden todos los elementos, en dos etapas se toma una submuestra interna
d) En dos etapas los conglomerados deben ser más pequeños

> **c) En una etapa se miden todos los elementos, en dos etapas se toma una submuestra interna**

---

### Pregunta 10

En el procedimiento del muestreo por conglomerados, ¿cuál es el paso inicial?

a) Seleccionar $m$ conglomerados al azar
b) Medir todos los elementos de los conglomerados elegidos
c) Dividir la población en $M$ conglomerados
d) Calcular la media de cada conglomerado

> **c) Dividir la población en $M$ conglomerados**
