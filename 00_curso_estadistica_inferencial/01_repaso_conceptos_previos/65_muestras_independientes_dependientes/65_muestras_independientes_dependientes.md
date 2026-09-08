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
