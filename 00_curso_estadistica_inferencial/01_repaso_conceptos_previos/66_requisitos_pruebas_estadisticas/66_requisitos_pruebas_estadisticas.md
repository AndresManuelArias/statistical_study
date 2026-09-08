---
titulo: Requisitos en las Pruebas Estadísticas
tipo: anotacion-video
tema: requisitos-pruebas-estadisticas
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Requisitos en las Pruebas Estadísticas

## 🎬 Datos del video
- **Título:** Requisitos en las Pruebas Estadísticas | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Requisitos+en+las+Pruebas+Estadísticas+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Toda prueba estadística válida exige ciertos requisitos: muestreo aleatorio, independencia de observaciones, normalidad (o muestra grande por el Teorema del Límite Central), homocedasticidad y una escala de medición adecuada. Si se violan estos supuestos, los resultados de la prueba dejan de ser confiables.

## 🧮 Contenido

### 1. Muestreo aleatorio
La muestra debe obtenerse de manera que cada elemento de la población tenga una probabilidad conocida (y preferentemente igual) de ser elegido.

$$P(\text{elegir un elemento}) = \frac{1}{N} \quad \text{(muestreo aleatorio simple)}$$

Un muestreo sesgado (autoselección, muestras de conveniencia) produce estimaciones que no representan a la población, por muy grande que sea la muestra.

**Violación:** los resultados no pueden generalizarse a la población.

### 2. Independencia de las observaciones
Cada observación no debe influir sobre otra. Se viola con datos repetidos, autocorrelación temporal o mediciones con dependencia mal modelada.

- Observaciones independientes garantizan que la varianza del estimador sea la teórica.
- Si hay dependencia, el error estándar se subestima y se rechaza $H_0$ más a menudo de lo debido.

### 3. Normalidad y muestra grande (TLC)
Las pruebas paramétricas clásicas (t, F, z) suponen que la población se comporta como una distribución normal. Sin embargo, por el **Teorema del Límite Central**, la media muestral es aproximadamente normal para $n$ suficientemente grande sin importar la forma de la población:

$$\frac{\bar{x} - \mu}{\sigma/\sqrt{n}} \xrightarrow{n \to \infty} N(0,1)$$

Reglas prácticas:
- $n \geq 30$ suele bastar para medias (a veces más si la población es muy asimétrica o hay atípicos).
- Para proporciones, conviene que $np \geq 5$ y $n(1-p) \geq 5$.

**Violación con $n$ pequeño:** la distribución de $t$ ya no es válida; conviene una prueba no paramétrica.

### 4. Homocedasticidad (igualdad de varianzas)
Al comparar dos o más grupos, se asume que las varianzas poblacionales son iguales:

$$\sigma_1^2 = \sigma_2^2 \quad \text{(o } \sigma_1^2 = \sigma_2^2 = \cdots = \sigma_k^2 \text{ en ANOVA)}$$

Se verifica con las pruebas de Levene, Bartlett o con el criterio de la razón de varianzas $s^2_1/s^2_2$. Si no se cumple, se usa la **t de Welch** (que no asume varianzas iguales) u otra variante robusta.

**Violación:** aumenta el error tipo I y reduce la potencia; las conclusiones dejan de ser confiables.

### 5. Escala de medición
La escala determina qué prueba es aplicable:

| Escala | Propiedades | Pruebas admisibles |
|---|---|---|
| Nominal | Categorías sin orden | Chi-cuadrado, binomial |
| Ordinal | Orden pero sin diferencia medible | Signos, Wilcoxon, Mann–Whitney |
| Intervalo | Distancias iguales, sin cero real | t, z, F (si hay normalidad) |
| Razón | Cero absoluto | t, z, F |

El estadístico debe respetar la escala: no se "promedia" una variable nominal ni se aplica una $t$ a datos ordinales.

### Resumen de requisitos y su consecuencia

| Requisito | ¿Qué prueba valida? | Si se viola |
|---|---|---|
| Muestreo aleatorio | Representatividad | Resultados no generalizables |
| Independencia | Error estándar correcto | Se rechaza H0 de más |
| Normalidad / n grande | Distribución de t, z, F | Inferencia inválida (usar no paramétrica) |
| Homocedasticidad | Comparación entre grupos | Error tipo I alterado |
| Escala adecuada | Pertinencia del estadístico | Conclusión sin sentido |

## 💡 Ejemplo numérico
**Problema.** Un gimnasio quiere comparar la pérdida de peso media (en kg) entre dos programas de ejercicio.

- Programa A: $n_A = 12$, $\bar{x}_A = 3.5$, $s_A^2 = 1.2$
- Programa B: $n_B = 10$, $\bar{x}_B = 2.8$, $s_B^2 = 1.5$

**Paso 1.** Verificar homocedasticidad con la razón de varianzas:

$$F = \frac{s_A^2}{s_B^2} = \frac{1.2}{1.5} = 0.80$$

Como $0.80$ está cerca de 1 (no muy distinto), se acepta el supuesto de varianzas iguales y puede usarse la $t$ clásica con $s_p$ combinada.

**Paso 2.** Varianza combinada:

$$s_p^2 = \frac{(12-1)(1.2) + (10-1)(1.5)}{12+10-2} = \frac{13.2+13.5}{20} = \frac{26.7}{20} = 1.335$$

**Paso 3.** Error estándar y estadístico:

$$
s_p\sqrt{\frac{1}{12}+\frac{1}{10}} = \sqrt{1.335}\,\sqrt{0.1833} = 1.155 \times 0.428 = 0.494
$$

$$t = \frac{3.5 - 2.8}{0.494} = \frac{0.7}{0.494} \approx 1.417$$

**Paso 4.** Con $gl = 20$ y $\alpha = 0.05$ bilateral, $t_{0.025,20} = 2.086$. Como $|1.417| < 2.086$, **no se rechaza** $H_0$: no hay evidencia de diferencia entre programas.

Si las varianzas fueran muy dispares (violación de homocedasticidad), deberíamos haber usado la **t de Welch** en lugar de esta fórmula combinada.

## 🌍 Ejemplo de la vida real
**Fábrica de refrescos.** Para validar que el llenado de botellas es de $500$ ml se verifica antes de probar: (1) selección aleatoria de botellas de la línea, (2) que las mediciones sean independientes (distintas botellas), (3) normalidad del llenado o un tamaño de muestra grande para invocar el TLC, y (4) que la varianza no haya cambiado respecto al control histórico. Si la muestra no es aleatoria (por ejemplo, tomada solo al inicio del turno), los resultados no reflejarán el llenado real de todo el día.

> [!tip] Relación con el curso
> Los requisitos de este tema son el puente entre la elección de prueba (tema 64) y el diseño independiente/pareado (tema 65). Verificarlos es condición previa obligatoria antes de aplicar el procedimiento completo del tema 68.
