---
titulo: Distribución t de Student
tipo: anotacion-video
tema: Distribución t de Student
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución t de Student

## Datos del video
- **Título:** Distribución t de Student | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+t+de+Student+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

<iframe width="560" height="315" src="https://www.youtube.com/embed/xGycHa7l6Ig?si=GFT7C5OVGBcuE5KZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen
La distribución $t$ de Student se utiliza cuando se trabaja con muestras pequeñas y la desviación estándar poblacional $\sigma$ es desconocida. Tiene colas más pesadas que la normal y depende de los grados de libertad, convergiendo a la normal estándar cuando $n$ crece.

## Contenido

### ¿Cuándo se usa?

La distribución $t$ aparece cuando:

1. La muestra es **pequeña** ($n < 30$).
2. La desviación estándar poblacional $\sigma$ es **desconocida** (se usa $s$ de la muestra).
3. La población de origen es aproximadamente **normal**.

Si $\sigma$ fuera conocida, se usaría $Z$ en lugar de $t$.

### Definición

Si $Z \sim N(0,1)$ y $V \sim \chi^2(\nu)$ son independientes, entonces:

$$T = \frac{Z}{\sqrt{V / \nu}}$$

sigue una distribución $t$ de Student con $\nu$ grados de libertad:

$$T \sim t(\nu)$$

### Grados de libertad

Para una muestra de tamaño $n$:

$$\nu = n - 1$$

Los grados de libertad determinan la forma de la distribución: a menor $\nu$, colas más pesadas; a mayor $\nu$, se aproxima más a la normal.

### Propiedades

**Función de densidad:**

$$f(t) = \frac{\Gamma\!\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\;\Gamma\!\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}$$

**Media y varianza:**

$$E(T) = 0 \quad (\nu > 1)$$

$$\text{Var}(T) = \frac{\nu}{\nu - 2} \quad (\nu > 2)$$

La varianza es mayor que 1, lo que refleja las colas más pesadas.

**Simetría:** La distribución es simétrica alrededor de 0, igual que la normal.

### Comparación con la normal

| Característica | $N(0,1)$ | $t(\nu)$ |
|:---:|:---:|:---:|
| Colas | Más ligeras | Más pesadas |
| Curtosis | 3 | $> 3$ |
| Varianza | 1 | $\nu/(\nu-2)$ |
| Convergencia | — | $\nu \to \infty \Rightarrow t \to N(0,1)$ |

#### Gráfico: Comparación entre la normal y $t$ según los grados de libertad

```chart
type: line
labels: [-5.00, -4.75, -4.50, -4.25, -4.00, -3.75, -3.50, -3.25, -3.00, -2.75, -2.50, -2.25, -2.00, -1.75, -1.50, -1.25, -1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00, 4.25, 4.50, 4.75, 5.00]
series:
  - title: "N(0,1)"
    data: [0.0001, 0.0002, 0.0003, 0.0004, 0.0005, 0.0008, 0.0012, 0.0019, 0.0044, 0.0091, 0.0175, 0.0317, 0.0540, 0.0863, 0.1295, 0.1826, 0.2420, 0.3011, 0.3521, 0.3867, 0.3989, 0.3867, 0.3521, 0.3011, 0.2420, 0.1826, 0.1295, 0.0863, 0.0540, 0.0317, 0.0175, 0.0091, 0.0044, 0.0019, 0.0012, 0.0008, 0.0005, 0.0004, 0.0003, 0.0002, 0.0001]
  - title: "t(1) — colas muy pesadas"
    data: [0.0122, 0.0135, 0.0150, 0.0167, 0.0187, 0.0211, 0.0240, 0.0275, 0.0318, 0.0372, 0.0439, 0.0525, 0.0637, 0.0784, 0.0979, 0.1242, 0.1592, 0.2037, 0.2546, 0.2996, 0.3183, 0.2996, 0.2546, 0.2037, 0.1592, 0.1242, 0.0979, 0.0784, 0.0637, 0.0525, 0.0439, 0.0372, 0.0318, 0.0275, 0.0240, 0.0211, 0.0187, 0.0167, 0.0150, 0.0135, 0.0122]
  - title: "t(5) — colas intermedias"
    data: [0.0018, 0.0023, 0.0029, 0.0039, 0.0051, 0.0069, 0.0092, 0.0126, 0.0173, 0.0239, 0.0333, 0.0466, 0.0651, 0.0905, 0.1245, 0.1679, 0.2197, 0.2757, 0.3279, 0.3657, 0.3796, 0.3657, 0.3279, 0.2757, 0.2197, 0.1679, 0.1245, 0.0905, 0.0651, 0.0466, 0.0333, 0.0239, 0.0173, 0.0126, 0.0092, 0.0069, 0.0051, 0.0039, 0.0029, 0.0023, 0.0018]
  - title: "t(30) — casi la normal"
    data: [0.0000, 0.0001, 0.0001, 0.0003, 0.0005, 0.0010, 0.0020, 0.0037, 0.0068, 0.0121, 0.0211, 0.0353, 0.0569, 0.0877, 0.1290, 0.1801, 0.2380, 0.2966, 0.3479, 0.3831, 0.3956, 0.3831, 0.3479, 0.2966, 0.2380, 0.1801, 0.1290, 0.0877, 0.0569, 0.0353, 0.0211, 0.0121, 0.0068, 0.0037, 0.0020, 0.0010, 0.0005, 0.0003, 0.0001, 0.0001, 0.0000]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- Con $\nu = 1$, la $t$ tiene **colas mucho más pesadas** y un pico menor que la normal.
- A medida que $\nu$ crece ($t(5)$, $t(30)$), las curvas se **acercan a la $N(0,1)$**.
- Como las colas son más pesadas, el valor crítico $t_{\alpha, \nu}$ es mayor que $z_\alpha$, lo que hace más difícil rechazar $H_0$ con muestras pequeñas.

## Ejemplo numérico

Un investigador mide el tiempo de reacción de 16 personas ($n = 16$). La media muestral es $\bar{x} = 250$ ms, la desviación estándar muestral es $s = 40$ ms. Quiere probar si el tiempo promedio es diferente de 240 ms. La desviación poblacional es **desconocida**, así que usa $t$.

**Grados de libertad:**

$$\nu = n - 1 = 16 - 1 = 15$$

**Estadístico de prueba:**

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{250 - 240}{40 / \sqrt{16}} = \frac{10}{40/4} = \frac{10}{10} = 1.00$$

**Valor crítico para prueba bilateral con $\alpha = 0.05$ y $\nu = 15$:**

$$t_{0.025, \, 15} = 2.131$$

Como $|t| = 1.00 < 2.131$, **no se rechaza** $H_0$. No hay evidencia suficiente para decir que el tiempo promedio de reacción es diferente de 240 ms.

**Comparación:** Si hubiéramos usado $Z$: $z = 1.00$ con valor crítico $z_{0.025} = 1.960$. El valor crítico de $t$ es mayor porque las colas son más pesadas, lo que hace más difícil rechazar $H_0$ con muestras pequeñas.

## Ejemplo de la vida real

Un fabricante de baterías afirma que sus baterías duran en promedio 500 horas. Se toma una muestra de $n = 25$ baterías, resultando $\bar{x} = 485$ horas y $s = 30$ horas. Con $\sigma$ desconocida, se usa $t$ con $\nu = 24$:

$$t = \frac{485 - 500}{30/\sqrt{25}} = \frac{-15}{30/5} = \frac{-15}{6} = -2.50$$

El valor crítico unilateral para $\alpha = 0.05$ con $\nu = 24$ es $t_{0.05, 24} = 1.711$.

Como $|t| = 2.50 > 1.711$, se **rechaza** $H_0$: hay evidencia de que las baterías duran menos de 500 horas. Si se hubiera usado $z$ (incorrectamente), $z_{0.05} = 1.645$ habría dado el mismo resultado, pero la decisión basada en $t$ es estadísticamente más correcta para esta muestra.

> [!tip] Relación con el curso
> La distribución $t$ de Student es fundamental para la inferencia sobre medias con $\sigma$ desconocida: intervalos de confianza y pruebas $t$ se usan frecuentemente en la práctica científica e industrial.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿En cuál de las siguientes situaciones corresponde usar la distribución $t$ de Student en lugar de la distribución normal?

a) Cuando la muestra es grande y $\sigma$ es conocida
b) Cuando la muestra es pequeña y $\sigma$ es desconocida
c) Cuando la muestra es pequeña y $\sigma$ es conocida
d) Cuando la muestra es grande y $\sigma$ es desconocida

> **b) Cuando la muestra es pequeña y $\sigma$ es desconocida**

---

### Pregunta 2

Para una muestra de tamaño $n = 25$, ¿cuántos grados de libertad tiene la distribución $t$ asociada?

a) 25
b) 26
c) 24
d) 30

> **c) 24**

---

### Pregunta 3

¿Qué característica distingue las colas de la distribución $t$ respecto a la distribución normal estándar?

a) Son más ligeras
b) Son iguales
c) Son más pesadas
d) No tienen colas

> **c) Son más pesadas**

---

### Pregunta 4

¿Cuál es la media de la distribución $t$ de Student con $\nu > 1$ grados de libertad?

a) $\nu / (\nu - 2)$
b) 1
c) $\nu$
d) 0

> **d) 0**

---

### Pregunta 5

¿Qué sucede con la distribución $t$ de Student cuando los grados de libertad $\nu$ tienden a infinito?

a) Se vuelve asimétrica
b) Se aproxima a la distribución normal estándar
c) La varianza tiende a cero
d) Las colas se vuelven más pesadas

> **b) Se aproxima a la distribución normal estándar**

---

### Pregunta 6

¿Cuál es la fórmula de la varianza de la distribución $t$ con $\nu > 2$ grados de libertad?

a) $\nu / (\nu - 2)$
b) $(\nu - 2) / \nu$
c) $1 / \nu$
d) $\nu$

> **a) $\nu / (\nu - 2)$**

---

### Pregunta 7

En el ejemplo de baterías, el fabricante afirma una duración promedio de 500 horas. Con $n = 25$, $\bar{x} = 485$, $s = 30$ y $\alpha = 0.05$ unilateral, se obtiene $t = -2.50$ con valor crítico $t_{0.05, 24} = 1.711$. ¿Cuál es la conclusión?

a) No se rechaza $H_0$ porque $t > -1.711$
b) Se rechaza $H_0$ porque $|t| = 2.50 > 1.711$
c) No se rechaza $H_0$ porque $|t| < 2.131$
d) Se rechaza $H_0$ porque $t = -2.50$ es negativo

> **b) Se rechaza $H_0$ porque $|t| = 2.50 > 1.711$**

---

### Pregunta 8

¿Cómo se comporta la distribución $t$ de Student respecto a la simetría?

a) Es asimétrica hacia la derecha
b) Es asimétrica hacia la izquierda
c) Es simétrica alrededor de 0
d) No tiene simetría definida

> **c) Es simétrica alrededor de 0**

---

### Pregunta 9

En el ejemplo numérico del archivo ($n = 16$, $\bar{x} = 250$ ms, $s = 40$ ms, $\mu_0 = 240$ ms), se calcula $t = 1.00$ con valor crítico bilateral $t_{0.025, 15} = 2.131$. ¿Por qué el valor crítico de $t$ es mayor que el valor crítico de $z = 1.960$?

a) Porque la media es diferente
b) Porque las colas de $t$ son más pesadas
c) Porque la varianza poblacional es conocida
d) Porque la muestra es grande

> **b) Porque las colas de $t$ son más pesadas**

---

### Pregunta 10

¿Cuál de las siguientes afirmaciones sobre la curtosis de la distribución $t$ de Student es correcta?

a) Es igual a 3, igual que la normal
b) Es menor que 3
c) Es mayor que 3
d) No se puede determinar

> **c) Es mayor que 3**
