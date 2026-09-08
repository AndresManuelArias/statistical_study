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
