---
titulo: Muestras Independientes y Dependientes
tipo: anotacion-video
tema: muestras-independientes-dependientes
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Muestras Independientes y Dependientes

## 🎬 Datos del video
- **Título:** Muestras Independientes y Dependientes | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Muestras+Independientes+y+Dependientes+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Al comparar dos grupos de datos, las muestras pueden ser independientes (grupos de sujetos distintos) o dependientes o pareadas (los mismos sujetos medidos dos veces). El diseño determina qué estadístico de prueba usar y cómo controlar la variabilidad entre sujetos.

## 🧮 Contenido

### Muestras independientes
Son aquellas en las que **las observaciones de un grupo no tienen relación** con las del otro. Los grupos están formados por sujetos u objetos **distintos**.

Ejemplos:
- Comparar el tiempo medio de dos equipos de producción.
- Comparar dos turnos (matutino y nocturno).
- Comparar pacientes tratados con dos medicamentos distintos.

El estadístico de prueba compara las dos medias:

$$t = \frac{\bar{x}_1 - \bar{x}_2}{s_p \sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}, \qquad s_p^2 = \frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$

donde $s_p$ es la desviación **combinada** (pooled). Grados de libertad: $gl = n_1+n_2-2$.

### Muestras dependientes (o pareadas)
Ocurren cuando **los sujetos son los mismos** en ambas mediciones, o se forman pares relacionados. La comparación se hace sobre las **diferencias** dentro de cada par.

Diseños típicos:
- **Antes–después**: el mismo sujeto se mide antes y después de un tratamiento.
- **Géminis u hermanos**: pares de sujetos similares.
- **Pares experimentales**: dos unidades muy parecidas asignadas una a cada tratamiento.
- **Dos mediciones del mismo objeto** (dos instrumentos que miden lo mismo).

Para una muestra pareada se construye la diferencia $d_i = X_{1i} - X_{2i}$ para cada par y se prueba la media de las diferencias:

$$t = \frac{\bar{d} - 0}{s_d/\sqrt{n}}, \qquad \bar{d} = \frac{\sum d_i}{n}, \qquad s_d^2 = \frac{\sum (d_i - \bar{d})^2}{n-1}$$

Aquí $gl = n-1$ (con $n$ = número de pares).

### ¿Cómo distinguir el diseño?
```
        ¿Los datos son parejas que se relacionan
          (mismo sujeto, antes/después, pares)?
                     /                   \
                   sí                     no
                    |                      |
           Muestras dependientes   Muestras independientes
           (pareadas)              (grupos distintos)
           t = medias de d         t de dos muestras
           gl = n-1                gl = n1+n2-2
```

### Ventajas de cada diseño

| Característica | Independientes | Dependientes (pareadas) |
|---|---|---|
| Sujetos | Distintos en cada grupo | Los mismos (o pares) |
| Variabilidad entre sujetos | Alta (contamina la comparación) | Controlada/bloqueada |
| Potencia | Menor (más ruido) | Mayor (se elimina el efecto sujeto) |
| Tamaño de muestra | Mayor ($n_1+n_2$) | Hasta $n$ pares |
| Control del experimento | Menor | Mayor |
| Riesgo | Sesgo por diferencias entre grupos | Secuencia/orden o aprendizaje |

La ventaja central de las pareadas es que **se elimina la varianza debida a las diferencias naturales entre sujetos**, dejando visible solo el efecto del tratamiento. Por eso, con los mismos datos, una prueba pareada suele ser más sensible que una independiente.

#### Gráfico: Diseño pareado antes–después (tiempo de carga de baterías)

```chart
type: bar
labels: ["Dispositivo 1", "Dispositivo 2", "Dispositivo 3", "Dispositivo 4", "Dispositivo 5"]
series:
  - title: "Antes (X1)"
    data: [2.0, 1.8, 2.2, 2.1, 1.9]
  - title: "Después (X2)"
    data: [2.4, 2.1, 2.7, 2.5, 2.2]
width: 90%
labelColors: false
fill: true
beginAtZero: true
```

**Interpretación:**
- Los **mismos** 5 dispositivos se miden dos veces (antes y después): muestras dependientes/pareadas.
- Las diferencias son $d_i = X_2 - X_1$: $0.4$, $0.3$, $0.5$, $0.4$ y $0.3$; $\bar d = 0.38$, $s_d = 0.084$.
- Al trabajar con las diferencias se **controla la variabilidad entre dispositivos**; el estadístico $t = 0.38 / (0.084/\sqrt{5}) \approx 10.11$ supera ampliamente $t_{0.05,4} = 2.132$ y se rechaza $H_0$.

### Precauciones
- En un diseño pareado no se debe "parear" artificialmente grupos independentes; el pareo debe responder al diseño.
- El orden en un antes-después puede introducir efectos de aprendizaje o fatiga.
- El número efectivo de observaciones pareadas es el de pares, no el doble.

## 💡 Ejemplo numérico
**Problema (diseño pareado, antes–después).** Se mide el tiempo de carga de una batería (en horas) antes y después de aplicar una optimización de software a 5 dispositivos.

| Dispositivo | Antes ($X_1$) | Después ($X_2$) | $d = X_2 - X_1$ |
|---|---|---|---|
| 1 | 2.0 | 2.4 | +0.4 |
| 2 | 1.8 | 2.1 | +0.3 |
| 3 | 2.2 | 2.7 | +0.5 |
| 4 | 2.1 | 2.5 | +0.4 |
| 5 | 1.9 | 2.2 | +0.3 |

**Paso 1.** Hipótesis sobre la diferencia media:
- $H_0: \mu_d = 0$ (sin mejora)
- $H_1: \mu_d > 0$ (la optimización incrementa la duración)

**Paso 2.** Media de diferencias:

$$\bar{d} = \frac{0.4+0.3+0.5+0.4+0.3}{5} = \frac{1.9}{5} = 0.38$$

Desviación de las diferencias:

$$s_d = \sqrt{\frac{(0.02)^2+(0.08)^2+(0.12)^2+(0.02)^2+(0.08)^2}{4}} = \sqrt{\frac{0.028}{4}} = 0.084$$

**Paso 3.** Estadístico de prueba:

$$t = \frac{0.38}{0.084/\sqrt{5}} = \frac{0.38}{0.0376} \approx 10.11$$

**Paso 4.** Con $gl = 4$ y $\alpha = 0.05$ unilateral, $t_{0.05,4} = 2.132$. Como $10.11 > 2.132$, se rechaza $H_0$.

**Conclusión:** la optimización sí aumenta la duración de la batería. Nótese que, al ser pareado, la variabilidad entre dispositivos quedó controlada y la prueba resultó muy potente.

## 🌍 Ejemplo de la vida real
**Rendimiento de dos turnos de una planta.** Para decidir si el turno nocturno produce menos piezas buenas que el matutino, se miden **grupos distintos de operarios** en cada turno (muestras independientes) y se usa una $t$ de dos muestras. En cambio, para evaluar una campaña de motivación sobre el mismo grupo de empleados, se mide su productividad antes y después (muestras pareadas), donde la prueba sobre las diferencias controla la habilidad individual de cada trabajador.

> [!tip] Relación con el curso
> Distinguir entre muestras independientes y dependientes es un requisito previo (tema 66) para elegir el estadístico y los grados de libertad correctos. Un error de diseño invalida la prueba de hipótesis aunque la aritmética sea correcta.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

Un investigador mide la presión arterial del **mismo grupo** de 30 pacientes antes y después de un tratamiento farmacológico. ¿Qué tipo de muestras corresponden a este diseño?

a) Muestras independientes, porque se obtienen dos mediciones por sujeto
b) Muestras dependientes (pareadas), porque se comparan mediciones del mismo grupo
c) Muestras independientes, porque hay dos momentos de medición
d) No se puede determinar sin conocer la desviación estándar

> **b) Muestras dependientes (pareadas), porque se comparan mediciones del mismo grupo**

---

### Pregunta 2

En una fábrica se comparan los tiempos promedio de dos líneas de producción completamente distintas, cada una operada por un equipo diferente de obreros. Las muestras son:

a) Dependientes, porque ambas líneas pertenecen a la misma fábrica
b) Dependientes, porque se miden en el mismo período de tiempo
c) Independientes, porque los grupos están formados por sujetos distintos
d) Independientes, porque se usan instrumentos de medición diferentes

> **c) Independientes, porque los grupos están formados por sujetos distintos**

---

### Pregunta 3

En el ejemplo numérico del archivo, se comparan baterías antes y después con 5 dispositivos. ¿Cuántos grados de libertad tiene la prueba?

a) 5
b) 8
c) 10
d) 4

> **d) 4**

---

### Pregunta 4

¿Cuál es la **ventaja central** del diseño pareado sobre el diseño con muestras independientes?

a) Requiere menos supuestos sobre la distribución de los datos
b) Controla la variabilidad entre sujetos, aumentando la potencia de la prueba
c) Permite trabajar con poblaciones infinitas
d) No necesita calcular la media de las diferencias

> **b) Controla la variabilidad entre sujetos, aumentando la potencia de la prueba**

---

### Pregunta 5

En una t de dos muestras independientes, el estadístico de prueba utiliza $s_p$ (desviación combinada). ¿Cómo se calculan los grados de libertad asociados?

a) $gl = n - 1$
b) $gl = n_1 + n_2$
c) $gl = n_1 + n_2 - 2$
d) $gl = \max(n_1, n_2) - 1$

> **c) $gl = n_1 + n_2 - 2$**

---

### Pregunta 6

En el ejemplo numérico del archivo, el tiempo de carga de las baterías se mide antes y después de una optimización de software. La diferencia media fue $\bar{d} = 0.38$ y $t \approx 10.11$. ¿Qué se concluye?

a) La optimización no tiene efecto significativo sobre la duración
b) La optimización **sí** aumenta significativamente la duración de la batería
c) El resultado es significativo solo con un nivel de confianza del 99%
d) No se puede concluir nada porque $n$ es demasiado pequeño

> **b) La optimización **sí** aumenta significativamente la duración de la batería**

---

### Pregunta 7

¿Cuál es la expresión correcta del estadístico $t$ para una prueba con muestras dependientes (pareadas)?

a) $t = \frac{\bar{x}_1 - \bar{x}_2}{s_p \sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$
b) $t = \frac{\bar{d}}{s_d / \sqrt{n}}$
c) $t = \frac{\bar{d}}{s_d \cdot \sqrt{n}}$
d) $t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_1^2 + s_2^2}}$

> **b) $t = \frac{\bar{d}}{s_d / \sqrt{n}}$**

---

### Pregunta 8

¿En cuál de los siguientes casos se trata de **muestras independientes**?

a) Se evalúa la lectura de los mismos alumnos con dos métodos distintos
b) Se comparan pares de gemelos, uno asignado a cada dieta
c) Se miden 40 pacientes con medicamento A y 35 pacientes distintos con medicamento B
d) Se comparan dos mediciones del mismo instrumento en el mismo sujeto

> **c) Se miden 40 pacientes con medicamento A y 35 pacientes distintos con medicamento B**

---

### Pregunta 9

¿Cuál de las siguientes es una **precaución** importante al usar un diseño pareado?

a) Se debe usar siempre que se quiera maximizar el tamaño de muestra
b) No se debe parear artificialmente grupos que son independientes; el pareo debe responder al diseño experimental
c) El número efectivo de observaciones es el doble del número de pares
d) Siempre se debe usar una prueba unilateral en diseños pareados

> **b) No se debe parear artificialmente grupos que son independientes; el pareo debe responder al diseño experimental**

---

### Pregunta 10

Una empresa quiere saber si el turno nocturno produce menos piezas buenas que el matutino. Para esto, **grupos distintos de operarios** trabajan en cada turno. ¿Qué prueba corresponde usar?

a) t pareada, porque ambos turnos pertenecen a la misma empresa
b) t de dos muestras independientes con $gl = n_1 + n_2 - 2$
c) t pareada con $gl = n - 1$
d) No se requiere prueba de hipótesis; basta comparar las medias

> **b) t de dos muestras independientes con $gl = n_1 + n_2 - 2$**
