---
titulo: Hipótesis Nula y Alternativa
tipo: anotacion-video
tema: hipotesis-nula-alternativa
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Hipótesis Nula y Alternativa

## 🎬 Datos del video
- **Título:** Hipótesis Nula y Alternativa | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Hipótesis+Nula+y+Alternativa+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Toda prueba de hipótesis enfrenta dos conjeturas complementarias: la nula ($H_0$), que representa el estado actual o la no diferencia, y la alternativa ($H_1$ o $H_a$), que es lo que se quiere demostrar. En este tema se explica cómo se plantean, el significado de los signos $=$, $\neq$, $\leq$, $\geq$, los errores tipo I y tipo II, y el nivel de significancia $\alpha$.

## 🧮 Contenido

### Hipótesis nula ($H_0$)
Es la afirmación que se **asume verdadera por defecto** y que se somete a examen. Suele representar "no hay efecto", "no hay diferencia" o "el parámetro es igual al valor propuesto".

$$H_0: \mu = \mu_0 \ \text{ o } \ \mu \leq \mu_0 \ \text{ o } \ \mu \geq \mu_0$$

Características:
- Siempre incluye el signo de **igualdad** ($=$, $\leq$ o $\geq$).
- Es conservadora: en derecho penal equivaldría a "inocente hasta demostrar lo contrario".
- Solo se puede rechazar, nunca "demostrar" definitivamente.

### Hipótesis alternativa ($H_1$ o $H_a$)
Es la afirmación que el investigador **quiere demostrar**, el complemento de $H_0$. Puede ser bilateral o unilateral.

$$H_1: \mu \neq \mu_0 \ \ (\text{no igual})$$

$$H_1: \mu > \mu_0 \ \ (\text{unilateral derecha}) \qquad H_1: \mu < \mu_0 \ \ (\text{unilateral izquierda})$$

Una vez planteada, la evidencia de la muestra decide si hay suficiente apoyo para **rechazar $H_0$** a favor de $H_1$.

### Cómo se plantean (reglas prácticas)
| Pregunta de investigación | $H_0$ | $H_1$ |
|---|---|---|
| ¿El promedio es igual a $\mu_0$? | $\mu = \mu_0$ | $\mu \neq \mu_0$ |
| ¿Es al menos $\mu_0$? | $\mu \geq \mu_0$ | $\mu < \mu_0$ |
| ¿Es a lo más $\mu_0$? | $\mu \leq \mu_0$ | $\mu > \mu_0$ |

Regla clave: **la igualdad siempre va en $H_0$**, y lo que se quiere "demostrar" va en $H_1$. Esto es porque la prueba se construye suponiendo que la nula es cierta: todo se calcula bajo $H_0$, y solo abandonaríamos esa posición si los datos la contradicen fuertemente.

### Interpretación de los signos en la práctica
- **$H_0: \mu = \mu_0$** → la prueba **bilateral** (con $H_1: \mu \neq \mu_0$) detecta desviaciones en ambas direcciones.
- **$H_0: \mu \leq \mu_0$** con $H_1: \mu > \mu_0$ → prueba **unilateral derecha**: nos interesa solo si el parámetro excede $\mu_0$.
- **$H_0: \mu \geq \mu_0$** con $H_1: \mu < \mu_0$ → prueba **unilateral izquierda**: nos interesa solo si es menor.

En la práctica, $H_0$ muchas veces se escribe solo con el signo $=$ aunque el planteamiento sea unilateral, porque el caso límite es el que se usa para el cálculo. Lo esencial es que $H_1$ indique la dirección que se quiere demostrar.

### Errores tipo I y tipo II
Como decidimos con una muestra, podemos equivocarnos de dos maneras:

| | $H_0$ verdadera | $H_0$ falsa |
|---|---|---|
| **No rechazar $H_0$** | ✅ Decisión correcta | ⚠️ Error tipo II ($\beta$) |
| **Rechazar $H_0$** | ❌ Error tipo I ($\alpha$) | ✅ Decisión correcta |

- **Error tipo I** ($\alpha$): rechazar $H_0$ cuando en realidad es verdadera. Es la probabilidad de "declarar culpable a un inocente". Se controla fijando el nivel de significancia.
- **Error tipo II** ($\beta$): no rechazar $H_0$ cuando en realidad es falsa. Es "absolver a un culpable". Disminuye a medida que crece el tamaño de la muestra.

### Nivel de significancia ($\alpha$)
Es la probabilidad máxima de cometer error tipo I que estamos dispuestos a tolerar:

$$\alpha = P(\text{rechazar } H_0 \mid H_0 \text{ verdadera})$$

Valores usuales: $\alpha = 0.10,\ 0.05,\ 0.01$. Cuanto menor $\alpha$, más exigente es la prueba y menos falsas alarmas, pero también menor potencia si no se aumenta $n$.

### Potencia de la prueba
Es la probabilidad de rechazar correctamente una $H_0$ falsa:

$$\text{Potencia} = 1 - \beta = P(\text{rechazar } H_0 \mid H_0 \text{ falsa})$$

Una buena prueba combina un $\alpha$ pequeño con una potencia alta, lograda sobre todo con un tamaño de muestra suficiente.

## 💡 Ejemplo numérico
**Problema.** Un fabricante afirma que el tiempo medio de calentamiento de su horno es menor o igual a $3$ minutos. Se quiere verificar si realmente es mayor.

Planteo correcto (la igualdad va en $H_0$):

$$H_0: \mu \leq 3 \qquad H_1: \mu > 3$$

Con $n = 50$, $\bar{x} = 3.4$ y $\sigma = 0.8$:

$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} = \frac{3.4 - 3}{0.8/\sqrt{50}} = \frac{0.4}{0.8/7.071} = \frac{0.4}{0.1131} = 3.54$$

Con $\alpha = 0.05$ (unilateral derecha), $z_{crít} = 1.645$. Como $3.54 > 1.645$, se **rechaza $H_0$**. Concluimos que el tiempo medio es mayor que 3 minutos.

**Interpretación de errores** en este contexto:
- Error tipo I: declarar que el horno se calienta lento ($\mu>3$) cuando en realidad no es así. Riesgo $\alpha = 0.05$.
- Error tipo II: no detectar que sí se calienta lento. Riesgo $\beta$.

Si queremos menos riesgo de "falsa alarma" (error tipo I), bajamos a $\alpha = 0.01$; para reducir $\beta$ conviene aumentar el tamaño de muestra.

## 🌍 Ejemplo de la vida real
**Campaña publicitaria.** Una empresa afirma que su campaña **no** aumenta las ventas ($H_0: \mu \leq \mu_0$, ventas sin cambio). La dirección quiere demostrar que sí las aumentó ($H_1: \mu > \mu_0$). Un error tipo I sería concluir que la campaña funcionó cuando en realidad no hubo efecto (y gastar presupuesto por algo falso). Un error tipo II sería despedir a la agencia porque "no hubo efecto" cuando sí lo hubo. El nivel $\alpha$ se elige según cuál error teme más la empresa.

> [!tip] Relación con el curso
> Plantear correctamente $H_0$ y $H_1$ es el primer paso de todo el procedimiento del tema 68. Los conceptos de $\alpha$, error tipo I y tipo II aquí presentados son la base para interpretar las zonas de rechazo del tema 69.
