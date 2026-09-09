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

$$H_0: \mu = \mu_0 \  o  \ \mu \leq \mu_0 \  o  \ \mu \geq \mu_0$$

Características:
- Siempre incluye el signo de **igualdad** ($=$, $\leq$ o $\geq$).
- Es conservadora: en derecho penal equivaldría a "inocente hasta demostrar lo contrario".
- Solo se puede rechazar, nunca "demostrar" definitivamente.

### Hipótesis alternativa ($H_1$ o $H_a$)
Es la afirmación que el investigador **quiere demostrar**, el complemento de $H_0$. Puede ser bilateral o unilateral.

$$H_1: \mu \neq \mu_0 \ \ (no igual)$$

$$H_1: \mu > \mu_0 \ \ (unilateral derecha) \qquad H_1: \mu < \mu_0 \ \ (unilateral izquierda)$$

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

$$\alpha = P(rechazar  H_0 \mid H_0  verdadera)$$

Valores usuales: $\alpha = 0.10,\ 0.05,\ 0.01$. Cuanto menor $\alpha$, más exigente es la prueba y menos falsas alarmas, pero también menor potencia si no se aumenta $n$.

### Potencia de la prueba
Es la probabilidad de rechazar correctamente una $H_0$ falsa:

$$Potencia = 1 - \beta = P(rechazar  H_0 \mid H_0  falsa)$$

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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué característica fundamental define a la hipótesis nula $H_0$?

a) Es la afirmación que el investigador quiere demostrar con la prueba.
b) Es la afirmación que se asume verdadera por defecto y representa el estado actual o de no efecto.
c) Es siempre una afirmación sobre la proporción poblacional, nunca sobre la media.
d) Es la afirmación que solo se acepta cuando el valor p es menor a 0,05.

> **b) Es la afirmación que se asume verdadera por defecto y representa el estado actual o de no efecto.**

---

### Pregunta 2

En el planteamiento de pruebas de hipótesis, ¿dónde siempre se coloca el signo de igualdad?

a) En la hipótesis alternativa $H_a$ para indicar que el parámetro puede ser igual al valor propuesto.
b) Se divide equitativamente entre $H_0$ y $H_a$ según el tipo de prueba.
c) En la hipótesis nula $H_0$, ya sea como $=$, $\leq$ o $\geq$.
d) En la hipótesis nula $H_0$ únicamente con el signo estricto $=$.

> **c) En la hipótesis nula $H_0$, ya sea como $=$, $\leq$ o $\geq$.**

---

### Pregunta 3

Un investigador plantea: "$H_0: \mu = 50$; $H_a: \mu \neq 50$". ¿Qué tipo de prueba está planteando?

a) Unilateral derecha, porque busca diferencias en la dirección positiva.
b) Unilateral izquierda, porque busca diferencias en la dirección negativa.
c) Bilateral, porque busca detectar desviaciones del valor en ambas direcciones.
d) Una prueba que no tiene sentido estadístico porque $H_0$ y $H_a$ no son complementarias.

> **c) Bilateral, porque busca detectar desviaciones del valor en ambas direcciones.**

---

### Pregunta 4

¿En qué consiste el error tipo I ($\alpha$)?

a) No rechazar $H_0$ cuando en realidad es falsa; es decir, dejar pasar un efecto que existe.
b) Rechazar $H_0$ cuando en realidad es verdadera; es decir, declarar un efecto que no existe.
c) Calcular un valor p incorrecto por errores de redondeo en los datos.
d) Confundir la hipótesis nula con la alternativa al momento de plantear el problema.

> **b) Rechazar $H_0$ cuando en realidad es verdadera; es decir, declarar un efecto que no existe.**

---

### Pregunta 5

Una empresa prueba si una nueva fóbrica reduce el tiempo promedio de entrega. Si la fábrica **sí** reduce el tiempo pero la prueba no lo detecta, ¿qué tipo de error se cometió?

a) Error tipo I: se rechazó $H_0$ indebidamente.
b) Error tipo II: no se rechazó $H_0$ cuando era falsa.
c) Error tipo I: se aceptó $H_0$ cuando era verdadera.
d) No hay error, pues la decisión fue correcta.

> **b) Error tipo II: no se rechazó $H_0$ cuando era falsa.**

---

### Pregunta 6

La potencia de una prueba estadística se define como:

a) $\alpha + \beta$, la suma de ambos tipos de error.
b) $1 - \alpha$, la probabilidad de no cometer error tipo I.
c) $1 - \beta$, la probabilidad de rechazar correctamente una $H_0$ falsa.
d) $\beta$, la probabilidad de cometer error tipo II.

> **c) $1 - \beta$, la probabilidad de rechazar correctamente una $H_0$ falsa.**

---

### Pregunta 7

Un restaurante afirma que su tiempo promedio de entrega es igual a $30$ minutos. Un cliente sospecha que las entregas tardan más. ¿Cuál es el planteamiento correcto de hipótesis?

a) $H_0: \mu = 30$; $H_a: \mu \neq 30$
b) $H_0: \mu > 30$; $H_a: \mu \leq 30$
c) $H_0: \mu \leq 30$; $H_a: \mu > 30$
d) $H_0: \mu = 30$; $H_a: \mu < 30$

> **c) $H_0: \mu \leq 30$; $H_a: \mu > 30$**

---

### Pregunta 8

Una compañía farmacéutica desarrolla un medicamento para reducir la presión arterial. Si durante los ensayos se concluye erróneamente que el medicamento es eficaz cuando en realidad no produce ningún efecto, ¿qué tipo de error se cometió?

a) Error tipo II, porque no se detectó la ineficacia real del medicamento.
b) Error tipo I, porque se rechazó la nula ($H_0$: no hay efecto) siendo esta verdadera.
c) Error tipo I, porque se aceptó la alternativa sin tener evidencia suficiente.
d) Error tipo II, porque se confirmó $H_0$ cuando era falsa.

> **b) Error tipo I, porque se rechazó la nula ($H_0$: no hay efecto) siendo esta verdadera.**

---

### Pregunta 9

Si se reduce el nivel de significancia $\alpha$ de 0,05 a 0,01, ¿qué efecto tiene sobre la prueba?

a) Disminuye tanto el error tipo I como el error tipo II.
b) Aumenta la potencia de la prueba al ser más exigente.
c) Disminuye el riesgo de error tipo I pero aumenta el riesgo de error tipo II.
d) No tiene ningún efecto sobre los errores ni la potencia.

> **c) Disminuye el riesgo de error tipo I pero aumenta el riesgo de error tipo II.**

---

### Pregunta 10

En el ejemplo del video, un fabricante afirma que el tiempo de calentamiento del horno es menor o igual a $3$ minutos. Se plantea $H_0: \mu \leq 3$ y $H_a: \mu > 3$. Con $n = 50$, $\bar{x} = 3,4$ y $\sigma = 0,8$, se obtiene $z = 3,54$. Si $\alpha = 0,05$ y $z_{crít} = 1,645$, ¿qué decisión se toma?

a) No se rechaza $H_0$ porque $3,54 < 1,645$.
b) Se rechaza $H_0$ porque $z > z_{crít}$, evidenciando que el tiempo medio supera 3 minutos.
c) Se rechaza $H_0$ solo si se usa $\alpha = 0,01$.
d) No se puede decidir porque falta calcular la potencia.

> **b) Se rechaza $H_0$ porque $z > z_{crít}$, evidenciando que el tiempo medio supera 3 minutos.**
