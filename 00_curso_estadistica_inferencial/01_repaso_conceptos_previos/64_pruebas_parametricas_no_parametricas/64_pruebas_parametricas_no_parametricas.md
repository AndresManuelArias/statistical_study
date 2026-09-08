---
titulo: Pruebas Paramétricas y No Paramétricas
tipo: anotacion-video
tema: pruebas-parametricas-no-parametricas
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Pruebas Paramétricas y No Paramétricas

## 🎬 Datos del video
- **Título:** Pruebas Paramétricas y No Paramétricas
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Pruebas+Paramétricas+y+No+Paramétricas
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Las pruebas estadísticas se dividen en paramétricas y no paramétricas. Las paramétricas asumen una distribución de probabilidad conocida (normal) y estiman parámetros como $\mu$ o $\sigma$; las no paramétricas no hacen supuestos sobre la distribución subyacente y trabajan con rangos o frecuencias. La elección depende del cumplimiento de supuestos y de la escala de los datos.

## 🧮 Contenido

### Pruebas paramétricas
Son las más potentes cuando se cumplen sus supuestos. Asumen que los datos provienen de una distribución con **forma conocida** (generalmente normal) y que se estudian **parámetros** (media, varianza, proporción).

Características:
- Exigen, por lo general, variables cuantitativas.
- Asumen normalidad (o muestra grande por TLC).
- Suelen requerir **homocedasticidad** (igualdad de varianzas).
- Son más potentes: detectan efectos menores con menos datos.

Ejemplos y su estadístico de prueba:

| Prueba paramétrica | Estadístico | Propósito |
|---|---|---|
| $z$ (una media) | $z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}$ | Comparar media con un valor |
| $t$ de Student | $t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}$ | Media con $\sigma$ desconocida |
| $t$ para dos muestras | $t = \frac{\bar{x}_1-\bar{x}_2}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$ | Comparar dos medias |
| ANOVA ($F$) | $F = \frac{CM_{\text{entre}}}{CM_{\text{dentro}}}$ | Comparar varias medias |
| $z$ para proporción | $z = \frac{\hat{p}-p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$ | Probar una proporción |

### Pruebas no paramétricas
No suponen una forma de distribución específica (por eso a veces se llaman "libres de distribución"). Trabajan con **rangos**, **signos** o **frecuencias** en lugar de valores crudos.

Características:
- Ideales para datos ordinales o cuando no se cumple la normalidad.
- No exigen homocedasticidad.
- Más robustas ante **valores atípicos**.
- Menos potentes si los supuestos paramétricos sí se cumplen.

Ejemplos y su uso:

| Prueba no paramétrica | Uso | Alternativa paramétrica |
|---|---|---|
| Chi-cuadrado de bondad de ajuste | ver si una variable sigue una distribución | — |
| Chi-cuadrado de independencia | asociación entre variables **categóricas** | — |
| Prueba de signos | mediana de una muestra | $t$ de una muestra |
| Wilcoxon (rangos con signo) | una muestra o pareada ordinal | $t$ pareada |
| Mann–Whitney U | dos muestras independientes | $t$ de dos muestras |
| Kruskal–Wallis | varias muestras independientes | ANOVA |

### ¿Chi-cuadrado es paramétrica o no?
El estadístico $\chi^2$ aparece en ambos contextos:
- En **bondad de ajuste e independencia** se comporta como **no paramétrica** (no asume distribución de los datos originales, solo frecuencias).
- Su **distribución muestral** del estadístico sí es una función de densidad conocida, lo que la distingue en la práctica de pruebas totalmente libres de distribución.

### ¿Cuándo usar cada una?
```
              ¿Los datos son cuantitativos y
             a la población normal (o n grande)?
                        /         \
                      sí           no
                       |            |
             ¿Varianzas iguales?    Pruebas
                  /     \        no paramétricas
                sí       no       (signos,
                 |        |      Wilcoxon,
        Paramétrica   t de Welch   Mann-Whitney,
        (t, z, F)     o no          chi-cuadrado)
                        paramétrica
```

### Ventajas y desventajas

| Criterio | Paramétricas | No paramétricas |
|---|---|---|
| Supuestos | Fuertes (normalidad, homocedasticidad) | Mínimos |
| Escala de datos | Cuantitativa (intervalo/razón) | Ordinal o nominal (frecuencias) |
| Potencia | Alta | Menor si se cumplen supuestos |
| Robustez a atípicos | Baja | Alta |
| Información usada | Valores completos | Rangos/signos/frecuencias |
| Desventaja | Se invalidan si se violan supuestos | Desperdician información cuantitativa |

## 💡 Ejemplo numérico
**Problema (no paramétrica, chi-cuadrado de independencia).** Se quiere saber si la preferencia por una bebida (sabor cola o sabor naranja) es independiente del sexo en una muestra de $n = 100$.

Tabla de **frecuencias observadas**:

| | Cola | Naranja | Total |
|---|---|---|---|
| Hombres | 35 | 15 | 50 |
| Mujeres | 45 | 5 | 50 |
| Total | 80 | 20 | 100 |

**Paso 1.** Bajo independencia, la frecuencia esperada en cada celda es:

$$E_{ij} = \frac{(\text{fila }i)(\text{columna }j)}{\text{total}}$$

Por ejemplo, hombres-cola: $E = \frac{50 \times 80}{100} = 40$.

| | Cola | Naranja |
|---|---|---|
| Hombres | $E=40$ | $E=10$ |
| Mujeres | $E=40$ | $E=10$ |

**Paso 2.** Calcular el estadístico:

$$\chi^2 = \sum \frac{(O-E)^2}{E}$$

$$\chi^2 = \frac{(35-40)^2}{40} + \frac{(15-10)^2}{10} + \frac{(45-40)^2}{40} + \frac{(5-10)^2}{10}$$

$$\chi^2 = \frac{25}{40}+\frac{25}{10}+\frac{25}{40}+\frac{25}{10} = 0.625+2.5+0.625+2.5 = 6.25$$

**Paso 3.** Con $gl = (2-1)(2-1) = 1$ y $\alpha = 0.05$, el valor crítico es $\chi^2_{0.05,1} = 3.841$.

**Decisión:** como $6.25 > 3.841$, rechazamos la independencia; la preferencia sí está asociada al sexo.

## 🌍 Ejemplo de la vida real
**Encuesta de satisfacción en una app de entrega.** Se pregunta a los usuarios si están "satisfechos", "neutrales" o "insatisfechos" (datos ordinales). Como la escala no es cuantitativa y no se garantiza normalidad, se aplica la prueba de **Mann–Whitney U** para comparar la satisfacción entre usuarios nuevos y frecuentes, en lugar de una $t$. Si los datos fueran numéricos y normales, se usaría la $t$ paramétrica, que tendría más potencia.

> [!tip] Relación con el curso
> Elegir correctamente entre paramétrica y no paramétrica es clave para que la prueba de hipótesis sea válida. Este tema complementa el 66 (requisitos), pues esos requisitos son justamente lo que separa a las pruebas paramétricas de las no paramétricas.
