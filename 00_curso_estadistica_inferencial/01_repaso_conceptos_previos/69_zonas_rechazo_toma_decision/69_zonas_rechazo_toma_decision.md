---
titulo: Zonas de Rechazo y Toma de Decisión
tipo: anotacion-video
tema: zonas-rechazo-toma-decision
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Zonas de Rechazo y Toma de Decisión

## 🎬 Datos del video
- **Título:** Zonas de Rechazo y Toma de Decisión | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Zonas+de+Rechazo+y+Toma+de+Decisión+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
La decisión final en una prueba de hipótesis depende de **dónde cae** el estadístico calculado: dentro de la zona de rechazo o de no rechazo. Este tema explica las zonas, las pruebas unilaterales y bilaterales, el valor crítico, el p-valor y la regla de decisión, y aclara por qué "no rechazar $H_0$" no equivale a "aceptar $H_0$".

## 🧮 Contenido

### Zona de rechazo y zona de no rechazo
Sobre la distribución del estadístico bajo $H_0$ se define un umbral llamado **valor crítico**. El área lo divide en dos regiones:

- **Zona de rechazo**: valores tan extremos que, si el estadístico cae ahí, la evidencia contradice a $H_0$.
- **Zona de no rechazo**: valores plausibles bajo $H_0$; si cae ahí, no hay evidencia suficiente en contra.

El área de la zona de rechazo equivale a $\alpha$ (la probabilidad de error tipo I):

$$\alpha = P(rechazar  H_0 \mid H_0  verdadera)$$

### Pruebas unilaterales y bilaterales
La forma de la zona de rechazo depende de $H_1$:

**a) Bilateral** ($H_1: \mu \neq \mu_0$): dos colas, cada una con área $\alpha/2$.

```
               distribución bajo H0 (bilateral, α = 0.05)
  región rechazo |  región no rechazo  | región rechazo
  ████████________|_____________________|________████████
  −1.96         0                     1.96
   (α/2=0.025)          (α/2=0.025)
```

**b) Unilateral derecha** ($H_1: \mu > \mu_0$): una sola cola derecha con área $\alpha$.

```
               distribución bajo H0 (unilateral derecha, α = 0.05)
  región no rechazo          | región rechazo
  ___________________________|████████████████████
                             0                      1.645
```

**c) Unilateral izquierda** ($H_1: \mu < \mu_0$): una sola cola izquierda con área $\alpha$.

```
               distribución bajo H0 (unilateral izquierda, α = 0.05)
  región rechazo | región no rechazo
  ███████████████|________________________________
                −1.645                             0
```

### Valor crítico
Es el punto que separa las dos zonas. Para $z$ bajo la normal estándar:

| $\alpha$ | Bilateral $z_{\alpha/2}$ | Unilateral derecha $z_\alpha$ |
|---|---|---|
| 0.10 | $\pm 1.645$ | $1.28$ |
| 0.05 | $\pm 1.96$ | $1.645$ |
| 0.01 | $\pm 2.576$ | $2.33$ |

Para $t$ se usa la tabla correspondiente con sus grados de libertad.

### Regla de decisión
- Método por **valor crítico**:
  - Bilateral: rechazar si $|z_{calc}| > z_{\alpha/2}$.
  - Unilateral derecha: rechazar si $z_{calc} > z_\alpha$.
  - Unilateral izquierda: rechazar si $z_{calc} < -z_\alpha$.
- Método por **p-valor**: rechazar si $p \leq \alpha$; en caso contrario, no rechazar.

El p-valor es la probabilidad, asumiendo $H_0$ verdadera, de obtener un estadístico al menos tan extremo como el observado.

### "No rechazar" no es "aceptar $H_0$"
Es el matiz más importante:
- **No rechazar $H_0$** significa que *no hubo suficiente evidencia* en su contra. Es como decir "no hay pruebas para culpabilizar", no "es inocente".
- La falta de evidencia puede deberse a un efecto real pequeño o a una muestra pequeña, no a que $H_0$ sea verdadera.
- Por eso la afirmación correcta es siempre "no se rechaza $H_0$", y nunca "se acepta $H_0$".

## 💡 Ejemplo numérico (completo)

**Problema.** Una fábrica de cereal afirma que su caja promedio pesa exactamente $\mu_0 = 100$ gramos, pero el control de calidad sospecha que **pesa más** de lo declarado. Se toma una muestra de $n = 100$ cajas. La población tiene desviación $\sigma = 15$ gramos y la media muestral resultó $\bar{x} = 103.5$ gramos. Se usa $\alpha = 0.05$.

### Paso 1: Hipótesis (unilateral derecha)
$$H_0: \mu \leq 100 \qquad H_1: \mu > 100$$

### Paso 2 y 3: Estadístico y $\alpha$
Se usa $z$ (σ conocida, $n$ grande), $\alpha = 0.05$, $z_{crít} = 1.645$.

### Paso 4: Calcular el estadístico
$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} = \frac{103.5 - 100}{15/\sqrt{100}} = \frac{3.5}{15/10} = \frac{3.5}{1.5} = 2.333 \approx 2.33$$

### Paso 5: Ubicar en las zonas
```
          distribución bajo H0 (unilateral derecha, α=0.05)
  región no rechazo      | región rechazo
  _______________________|████████████████████████
                         0          1.645   2.33
                                     ^        ^
                                     z_crít   z_calc
```

### Paso 6: Decidir
Como $z_{calc} = 2.33 > z_{crít} = 1.645$, el estadístico cae en la **zona de rechazo**.

$$2.33 > 1.645 \quad \Rightarrow \quad se rechaza  H_0$$

Comprobación con p-valor: $p = P(Z > 2.33) = 0.0099$. Como $0.0099 \leq 0.05$, también se rechaza.

### Paso 7: Conclusión
Hay evidencia estadísticamente significativa de que el peso medio de la caja **supera** 100 gramos; la fábrica está regalando producto y debe recalibrar las llenadoras.

## 🌍 Ejemplo de la vida real
**Detectar exceso de llenado en una refresquera.** El costo por botella extra es pérdida para la empresa, así que se contrasta la hipótesis unilateral derecha $H_1: \mu > 500$ ml sobre un lote de 100 botellas. Si el estadístico $z$ supera $1.645$ ($\alpha=0.05$), se concluye que la máquina está llenando de más y se ajusta la línea. En cambio, si no se rechaza $H_0$, simplemente "no hay evidencia" de exceso; eso no prueba que el llenado sea perfecto.

> [!tip] Relación con el curso
> Las zonas de rechazo cerramos el bucle de la aplicación (tema 68): el valor crítico es el umbral fijado por $\alpha$ (tema 67), y saber si el estadístico cae o no en la zona de rechazo es la decisión final de toda la estadística inferencial.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa el área de la zona de rechazo en la distribución del estadístico bajo $H_0$?

a) La probabilidad de cometer error tipo II ($\beta$)
b) El nivel de significancia $\alpha$, probabilidad de rechazar $H_0$ cuando es verdadera
c) La probabilidad de que $H_0$ sea verdadera dado el dato observado
d) El poder de la prueba, es decir $1 - \beta$

> **b) El nivel de significancia $\alpha$, probabilidad de rechazar $H_0$ cuando es verdadera**

---

### Pregunta 2

En una prueba bilateral con $\alpha = 0,05$ y distribución normal estándar, ¿cuáles son los valores críticos?

a) $z = \pm 1,645$
b) $z = \pm 1,96$
c) $z = \pm 2,33$
d) $z = \pm 2,576$

> **b) $z = \pm 1,96$**

---

### Pregunta 3

Un test bilateral con $\alpha = 0,05$ arroja un estadístico $z_{calc} = 2,3$. ¿Cuál es la decisión?

a) No se rechaza $H_0$ porque $2,3 < 2,576$
b) No se rechaza $H_0$ porque el p-valor no se conoce
c) Se rechaza $H_0$ porque $|2,3| > 1,96$
d) Se rechaza $H_0$ porque $2,3 > 1,645$

> **c) Se rechaza $H_0$ porque $|2,3| > 1,96$**

---

### Pregunta 4

Si no se rechaza $H_0$, ¿qué afirmación es correcta?

a) Se ha demostrado que $H_0$ es verdadera
b) No hay evidencia suficiente para rechazar $H_0$, pero eso no prueba que sea verdadera
c) La hipótesis alternativa $H_1$ es falsa
d) El nivel de significancia $\alpha$ debe reducirse

> **b) No hay evidencia suficiente para rechazar $H_0$, pero eso no prueba que sea verdadera**

---

### Pregunta 5

¿Qué es el p-valor en una prueba de hipótesis?

a) La probabilidad de que $H_0$ sea verdadera
b) La probabilidad de cometer error tipo I multiplicada por el tamaño de muestra
c) La probabilidad de obtener un estadístico al menos tan extremo como el observado, asumiendo $H_0$ verdadera
d) La diferencia entre $\alpha$ y el estadístico calculado

> **c) La probabilidad de obtener un estadístico al menos tan extremo como el observado, asumiendo $H_0$ verdadera**

---

### Pregunta 6

En una prueba unilateral izquierda con $\alpha = 0,01$, el valor crítico es $z_{crit} = -2,33$. Si $z_{calc} = -2,1$, ¿cuál es la decisión?

a) Se rechaza $H_0$ porque $-2,1$ es negativo
b) No se rechaza $H_0$ porque $-2,1 > -2,33$, es decir no cae en la zona de rechazo
c) No se rechaza $H_0$ porque el valor absoluto $|-2,1| < |-2,33|$ siempre implica no rechazo
d) Se rechaza $H_0$ porque $-2,1$ está dentro del intervalo de confianza

> **b) No se rechaza $H_0$ porque $-2,1 > -2,33$, es decir no cae en la zona de rechazo**

---

### Pregunta 7

Se realiza una prueba bilateral con $\alpha = 0,05$ (valor crítico $z_{\alpha/2} = 1,96$). El estadístico calculado es $z_{calc} = 1,9$. ¿Se rechaza $H_0$?

a) Sí, porque $1,9 > 1,645$
b) No, porque $|1,9| < 1,96$ y el estadístico no cae en la zona de rechazo
c) Sí, porque $1,9$ es mayor que 0
d) No, porque el valor crítico para bilateral es siempre 2,576

> **b) No, porque $|1,9| < 1,96$ y el estadístico no cae en la zona de rechazo**

---

### Pregunta 8

Se obtiene un p-valor de $0,04$ y se trabaja con $\alpha = 0,01$. ¿Cuál es la conclusión?

a) Se rechaza $H_0$ porque $0,04 < 0,05$
b) No se rechaza $H_0$ porque $0,04 > 0,01$
c) Se rechaza $H_0$ porque cualquier p-valor menor a 0,05 implica rechazo siempre
d) No se rechaza $H_0$ porque el p-valor debe ser mayor a $\alpha/2$

> **b) No se rechaza $H_0$ porque $0,04 > 0,01$**

---

### Pregunta 9

La fórmula $P(rechazar  H_0 \mid H_0  verdadera)$ define:

a) La probabilidad de error tipo II ($\beta$)
b) El poder de la prueba ($1 - \beta$)
c) La probabilidad de error tipo I ($\alpha$)
d) El p-valor de la prueba

> **c) La probabilidad de error tipo I ($\alpha$)**

---

### Pregunta 10

En el ejemplo de la refresquera que llena botellas de 500 ml, se sospecha que la máquina llena **más** de lo debido. Si se plantea $H_1: \mu > 500$, ¿qué tipo de prueba se realiza y cuál es la condición para rechazar $H_0$ con $\alpha = 0,05$?

a) Bilateral; rechazar si $|z_{calc}| > 1,96$
b) Unilateral izquierda; rechazar si $z_{calc} < -1,645$
c) Unilateral derecha; rechazar si $z_{calc} > 1,645$
d) Unilateral derecha; rechazar si $z_{calc} < 1,645$

> **c) Unilateral derecha; rechazar si $z_{calc} > 1,645$**
