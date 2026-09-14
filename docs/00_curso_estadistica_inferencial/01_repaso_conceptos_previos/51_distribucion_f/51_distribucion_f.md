---
titulo: Distribución F
tipo: anotacion-video
tema: Distribución F
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución F

## Datos del video
- **Título:** Distribución F | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+F+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/CU2qUnaluOE?si=Np76jyhBhzxQlpg_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
La distribución $F$ surge como cociente de dos varianzas muestrales independientes. Se utiliza principalmente en la prueba ANOVA para comparar medias de varios grupos y para comparar la variabilidad de dos poblaciones. Solo toma valores positivos y depende de dos grados de libertad.

## Contenido

### Definición

Si $U \sim \chi^2(\nu_1)$ y $V \sim \chi^2(\nu_2)$ son independientes, entonces:

$$F = \frac{U / \nu_1}{V / \nu_2}$$

sigue una distribución $F$ de Snedecor con $\nu_1$ grados de libertad en el numerador y $\nu_2$ en el denominador:

$$F \sim F(\nu_1, \nu_2)$$

### Forma práctica

En la práctica, si $s_1^2$ y $s_2^2$ son varianzas muestrales de muestras independientes de poblaciones normales con tamaños $n_1$ y $n_2$:

$$F = \frac{s_1^2 / \sigma_1^2}{s_2^2 / \sigma_2^2}$$

Si las varianzas poblacionales son iguales ($\sigma_1^2 = \sigma_2^2$), entonces:

$$F = \frac{s_1^2}{s_2^2} \sim F(n_1 - 1, \n_2 - 1)$$

### Propiedades

1. **Solo valores positivos:** $F \in (0, \infty)$. No puede ser negativa.

2. **Asimétrica a la derecha:** La distribución está sesgada positivamente.

3. **Dos grados de libertad:**
   - $\nu_1 = n_1 - 1$ (numerador)
   - $\nu_2 = n_2 - 1$ (denominador)

4. **Media:**

$$E(F) = \frac{\nu_2}{\nu_2 - 2}, \quad \nu_2 > 2$$

5. **Relación con $t$:** Si $T \sim t(\nu)$, entonces $T^2 \sim F(1, \nu)$.

### Propiedad recíproca

$$\frac{1}{F} \sim F(\nu_2, \nu_1)$$

Si $F > F_{\alpha, \nu_1, \nu_2}$, equivalentemente $1/F < 1/F_{\alpha, \nu_1, \nu_2}$.

### Valores críticos

La tabla $F$ da valores $F_{\alpha, \nu_1, \nu_2}$ tales que:

$$P(F > F_{\alpha, \nu_1, \nu_2}) = \alpha$$

Para prueba bilateral, se usa $\alpha/2$ en cada cola.

#### Gráfico: Densidad de $F$ para distintos grados de libertad

```chart
type: line
labels: [0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00, 4.25, 4.50, 4.75, 5.00]
series:
  - title: "F(3,10)"
    data: [0.0000, 0.6950, 0.6340, 0.5150, 0.4041, 0.3138, 0.2434, 0.1894, 0.1482, 0.1167, 0.0925, 0.0739, 0.0594, 0.0481, 0.0392, 0.0321, 0.0265, 0.0219, 0.0183, 0.0153, 0.0129]
  - title: "F(5,15)"
    data: [0.0000, 0.5254, 0.7082, 0.6527, 0.5270, 0.4017, 0.2981, 0.2188, 0.1600, 0.1172, 0.0862, 0.0638, 0.0475, 0.0356, 0.0269, 0.0204, 0.0156, 0.0121, 0.0094, 0.0073, 0.0058]
  - title: "F(10,20)"
    data: [0.0000, 0.2088, 0.6879, 0.8337, 0.7144, 0.5250, 0.3582, 0.2357, 0.1527, 0.0985, 0.0637, 0.0415, 0.0272, 0.0180, 0.0121, 0.0082, 0.0056, 0.0039, 0.0027, 0.0019, 0.0013]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- $F$ solo toma **valores positivos** ($F \in (0, \infty)$) y es **asimétrica a la derecha**.
- Con más grados de libertad en ambos originales (numerador y denominador), la curva se concentra alrededor de 1 y su cola derecha se hace menos pesada.
- El área a la derecha de $F_{\alpha, \nu_1, \nu_2}$ es $\alpha$; esa es la cola que se usa para rechazar $H_0$ en comparación de varianzas y en ANOVA.

## Ejemplo numérico

Dos máquinas envasan café. Se toman muestras independientes:
- Máquina A: $n_1 = 10$, $s_1^2 = 4.5$
- Máquina B: $n_2 = 10$, $s_2^2 = 1.5$

Se quiere probar si las varianzas son iguales: $H_0: \sigma_1^2 = \sigma_2^2$.

**Estadístico de prueba:**

$$F = \frac{s_1^2}{s_2^2} = \frac{4.5}{1.5} = 3.00$$

**Grados de libertad:**

$$\nu_1 = 10 - 1 = 9, \quad \nu_2 = 10 - 1 = 9$$

**Valor crítico:** Para $\alpha = 0.05$ (prueba bilateral, se usa $\alpha/2 = 0.025$):

$$F_{0.025, \, 9, \, 9} = 4.03$$

Como $F = 3.00 < 4.03$, **no se rechaza** $H_0$. No hay evidencia de que las varianzas difieran significativamente.

**Verificación con la propiedad recíproca:**

$$\frac{1}{F} = \frac{1}{3.00} = 0.333$$

$$\frac{1}{F_{0.025, \, 9, \, 9}} = \frac{1}{4.03} = 0.248$$

$$F_{0.975, \, 9, \, 9} = \frac{1}{F_{0.025, \, 9, \, 9}} = 0.248$$

## Ejemplo de la vida real

Un farmacéutico compara la variabilidad del volumen de llenado de dos líneas de producción de jarabe. Se toman muestras de $n_1 = 20$ frascos de la línea A ($s_1 = 3.2$ mL) y $n_2 = 20$ frascos de la línea B ($s_2 = 1.8$ mL).

$$F = \frac{s_1^2}{s_2^2} = \frac{(3.2)^2}{(1.8)^2} = \frac{10.24}{3.24} = 3.16$$

Grados de libertad: $\nu_1 = \nu_2 = 19$. Valor crítico $F_{0.025, \, 19, \, 19} = 2.53$.

Como $F = 3.16 > 2.53$, se **rechaza** $H_0$: la línea A tiene significativamente más variabilidad que la línea B. El gerente debe investigar la causa en la línea A para reducir la inconsistencia en el llenado.

> [!tip] Relación con el curso
> La distribución $F$ es la base del análisis ANOVA (análisis de varianza), uno de los métodos inferenciales más potentes para comparar medias de más de dos grupos simultáneamente.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué cociente define la distribución $F$ de Snedecor?

a) La razón entre dos medias muestrales independientes
b) La razón entre dos varianzas muestrales independientes, cada una dividida por sus grados de libertad
c) La suma de dos varianzas muestrales dividida por sus grados de libertad
d) La diferencia entre dos varianzas muestrales dividida por el tamaño de muestra

> **b) La razón entre dos varianzas muestrales independientes, cada una dividida por sus grados de libertad**

---

### Pregunta 2

Si $U \sim \chi^2(\nu_1)$ y $V \sim \chi^2(\nu_2)$ son independientes, ¿cuál es el estadístico $F$ resultante?

a) $F = \frac{U \cdot \nu_1}{V \cdot \nu_2}$
b) $F = \frac{U / \nu_1}{V / \nu_2}$
c) $F = \frac{U / \nu_2}{V / \nu_1}$
d) $F = \frac{U + \nu_1}{V + \nu_2}$

> **b) $F = \frac{U / \nu_1}{V / \nu_2}$**

---

### Pregunta 3

¿Cuántos grados de libertad tiene la distribución $F$?

a) Uno solo, igual al tamaño de muestra
b) Dos: uno para el numerador y otro para el denominador
c) Tres: numerador, denominador y uno para la media
d) Depende de si la prueba es unilateral o bilateral

> **b) Dos: uno para el numerador y otro para el denominador**

---

### Pregunta 4

¿Qué propiedad describe la forma de la distribución $F$?

a) Simétrica y centrada en 1
b) Solo toma valores negativos
c) Asimétrica a la derecha y solo toma valores positivos
d) Uniforme entre 0 y 1

> **c) Asimétrica a la derecha y solo toma valores positivos**

---

### Pregunta 5

En el ejemplo numérico del archivo, dos máquinas envasan café con $n_1 = 10$, $s_1^2 = 4.5$, $n_2 = 10$, $s_2^2 = 1.5$. ¿Cuál es el valor del estadístico $F$ calculado?

a) 1.50
b) 2.00
c) 3.00
d) 4.50

> **c) 3.00**

---

### Pregunta 6

En el ejemplo numérico del archivo, ¿cuáles son los grados de libertad $\nu_1$ y $\nu_2$ para la prueba $F$?

a) $\nu_1 = 10$, $\nu_2 = 10$
b) $\nu_1 = 9$, $\nu_2 = 9$
c) $\nu_1 = 8$, $\nu_2 = 8$
d) $\nu_1 = 11$, $\nu_2 = 11$

> **b) $\nu_1 = 9$, $\nu_2 = 9$**

---

### Pregunta 7

En el ejemplo de la vida real del archivo, se comparan dos líneas de producción de jarabe con $n_1 = 20$, $s_1 = 3.2$ mL y $n_2 = 20$, $s_2 = 1.8$ mL. ¿Cuál es el estadístico $F$ calculado?

a) 1.78
b) 2.53
c) 3.16
d) 5.56

> **c) 3.16**

---

### Pregunta 8

¿Cuál es la relación entre la distribución $t$ de Student y la distribución $F$?

a) $T \sim t(\nu)$ implica $T \sim F(\nu, \nu)$
b) $T \sim t(\nu)$ implica $T^2 \sim F(1, \nu)$
c) $T \sim t(\nu)$ implica $T^2 \sim F(\nu, 1)$
d) No existe relación entre ambas distribuciones

> **b) $T \sim t(\nu)$ implica $T^2 \sim F(1, \nu)$**

---

### Pregunta 9

Si se tienen muestras de $n_1 = 10$ y $n_2 = 15$ para comparar dos varianzas poblacionales, ¿cuál es la notación correcta de la distribución $F$ resultante?

a) $F \sim F(10, 15)$
b) $F \sim F(9, 14)$
c) $F \sim F(14, 9)$
d) $F \sim F(8, 13)$

> **b) $F \sim F(9, 14)$**

---

### Pregunta 10

¿En qué método estadístico se utiliza fundamentalmente la distribución $F$?

a) Regresión lineal simple para estimar la pendiente
b) ANOVA para comparar medias de varios grupos simultáneamente
c) Prueba de normalidad de Shapiro-Wilk
d) Intervalo de confianza para una proporción

> **b) ANOVA para comparar medias de varios grupos simultáneamente**
