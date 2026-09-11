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

#### Gráfico: Asignación proporcional por grado (escuela de $N = 400$, $n = 80$)

```chart
type: bar
labels: ["1°", "2°", "3°", "4°"]
series:
  - title: "Estudiantes del estrato (N_h)"
    data: [120, 100, 100, 80]
  - title: "Asignados a la muestra (n_h = n·N_h/N)"
    data: [24, 20, 20, 16]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- Cada barra azul (muestra) conserva la **misma proporción** de su barra de población (24/120 = 20/100 = 20/100 = 16/80 = 0.20).
- La media estratificada $\bar{X}_{\text{est}} = 0.30(8.5) + 0.25(10.2) + 0.25(12.8) + 0.20(14.5) = 11.20$ horas pondera cada grado por su tamaño, no por igual.

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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué característica deben cumplir los estratos en el muestreo aleatorio estratificado?

a) Ser homogéneos entre sí y heterogéneos por dentro
b) Ser heterogéneos entre sí y homogéneos por dentro
c) Tener siempre el mismo tamaño
d) Contener exactamente el mismo número de individuos

> **b) Ser heterogéneos entre sí y homogéneos por dentro**

---

### Pregunta 2

En una población de 1000 individuos dividida en 3 estratos ($N_1 = 500$, $N_2 = 300$, $N_3 = 200$), se extrae una muestra estratificada de tamaño $n = 100$ con asignación proporcional. ¿Cuántos individuos se seleccionan del estrato 2?

a) 20
b) 30
c) 50
d) 40

> **b) 30**

---

### Pregunta 3

La fórmula de asignación proporcional para calcular el tamaño de muestra en el estrato $h$ es:

a) $n_h = N \cdot \frac{n}{N_h}$
b) $n_h = n \cdot \frac{N_h}{N}$
c) $n_h = \frac{N_h}{n} \cdot N$
d) $n_h = \frac{N}{N_h} \cdot n$

> **b) $n_h = n \cdot \frac{N_h}{N}$**

---

### Pregunta 4

¿Cuál es una razón válida para usar muestreo estratificado en lugar de muestreo aleatorio simple?

a) Cuando la población es muy pequeña
b) Cuando se desconocen los tamaños de los estratos
c) Cuando se quiere garantizar representación de subgrupos minoritarios
d) Cuando la población es completamente homogénea

> **c) Cuando se quiere garantizar representación de subgrupos minoritarios**

---

### Pregunta 5

El estimador de la media poblacional en muestreo estratificado es $\bar{X}_{\text{est}} = \sum_{h=1}^{L} W_h \cdot \bar{X}_h$. ¿Qué representa $W_h$?

a) La media muestral del estrato $h$
b) La varianza muestral del estrato $h$
c) El peso del estrato, definido como $N_h / N$
d) El tamaño de muestra del estrato $h$

> **c) El peso del estrato, definido como $N_h / N$**

---

### Pregunta 6

Una población de 500 personas se divide en 2 estratos: $N_1 = 300$ y $N_2 = 200$. Se extrae una muestra de $n = 50$ con asignación proporcional. ¿Cuántas personas se seleccionan del estrato 1?

a) 30
b) 25
c) 35
d) 20

> **a) 30**

---

### Pregunta 7

¿Cuándo el error estándar del estimador estratificado es menor que el del muestreo aleatorio simple?

a) Cuando los estratos son grandes
b) Cuando cada estrato es más homogéneo que la población completa
c) Cuando el tamaño de muestra es muy pequeño
d) Cuando se utiliza asignación uniforme en lugar de proporcional

> **b) Cuando cada estrato es más homogéneo que la población completa**

---

### Pregunta 8

En la escuela con $N = 400$ estudiantes, los grados tienen los siguientes pesos: $W_1 = 0.30$, $W_2 = 0.25$, $W_3 = 0.25$, $W_4 = 0.20$. Si se extrae una muestra de $n = 80$ con asignación proporcional, ¿cuántos estudiantes se seleccionan del grado 4?

a) 20
b) 15
c) 18
d) 16

> **d) 16**

---

### Pregunta 9

¿En qué se diferencia el muestreo aleatorio estratificado del muestreo aleatorio simple?

a) En el simple se subdivide primero la población y luego se muestrea cada subgrupo
b) En el estratificado la muestra se selecciona de toda la población de una vez
c) En el estratificado primero se subdivide la población y luego se muestrea cada subgrupo por separado
d) En el simple se garantiza representación de todos los subgrupos automáticamente

> **c) En el estratificado primero se subdivide la población y luego se muestrea cada subgrupo por separado**

---

### Pregunta 10

¿Qué propiedad tiene el estimador $\bar{X}_{\text{est}} = \sum_{h=1}^{L} W_h \cdot \bar{X}_h$ del muestreo estratificado?

a) Es sesgado cuando los tamaños de estrato son desiguales
b) Es insesgado, es decir, $E(\bar{X}_{\text{est}}) = \mu$
c) Solo es válido cuando todos los estratos tienen la misma varianza
d) Siempre tiene error estándar cero

> **b) Es insesgado, es decir, $E(\bar{X}_{\text{est}}) = \mu$**
