---
titulo: Aplicación de la Prueba Estadística
tipo: anotacion-video
tema: aplicacion-prueba-estadistica
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Aplicación de la Prueba Estadística

## 🎬 Datos del video
- **Título:** Aplicación de la Prueba Estadística | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Aplicación+de+la+Prueba+Estadística+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Este video explica cómo **aplicar** una prueba estadística en la práctica: los pasos ordenados desde plantear las hipótesis hasta tomar la decisión comparando el estadístico calculado con el valor crítico. Se incluye un ejemplo completo y resuelto paso a paso con un estadístico $t$.

## 🧮 Contenido

### Los pasos del procedimiento
Aplicar una prueba de hipótesis es un protocolo ordenado. Los pasos son:

```
1. Plantear H0 y H1 (tema 67)
2. Elegir el estadístico de prueba adecuado
3. Fijar el nivel de significancia α
4. Calcular el estadístico con los datos de la muestra
5. Determinar el valor crítico (o el p-valor)
6. Comparar y decidir: rechazar o no rechazar H0
7. Concluir en el contexto del problema
```

### Paso 1: Plantear hipótesis
Con base en la pregunta del problema:
- Si se quiere "demostrar" que algo no cambió: $H_0: \mu = \mu_0$, $H_1: \mu \neq \mu_0$ (bilateral).
- Si se quiere demostrar que aumentó: $H_0: \mu \leq \mu_0$, $H_1: \mu > \mu_0$ (unilateral derecha).
- Si se quiere demostrar que disminuyó: $H_0: \mu \geq \mu_0$, $H_1: \mu < \mu_0$ (unilateral izquierda).

### Paso 2: Elegir el estadístico de prueba
Depende del parámetro y de lo que conocemos:

| Situación | Estadístico | Fórmula |
|---|---|---|
| Media, $\sigma$ conocida, $n$ grande | $z$ | $z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}$ |
| Media, $\sigma$ desconocida | $t$ | $t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}$ |
| Proporción | $z$ | $z = \frac{\hat{p}-p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$ |
| Diferencia de dos medias | $t$ | $t = \frac{\bar{x}_1-\bar{x}_2}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$ |

### Paso 3: Fijar $\alpha$
Se elige antes de mirar los datos ($\alpha = 0.05$, $0.01$, $0.10$). Define el valor crítico que separa la zona de rechazo de la de no rechazo.

### Paso 4: Calcular el estadístico
A partir de los datos. Aquí es donde se reemplazan los valores observados en la fórmula.

### Paso 5 y 6: Comparar con el valor crítico y decidir
- Si $|t_{calc}| > t_{crít}$ → se **rechaza** $H_0$ (evidencia a favor de $H_1$).
- Si $|t_{calc}| \leq t_{crít}$ → **no se rechaza** $H_0$ (evidencia insuficiente).

Alternativa con p-valor: si $p < \alpha$ se rechaza; si $p \geq \alpha$ no se rechaza.

### Validación previa (tema 66)
Antes de aplicar cualquier fórmula conviene verificar normalidad (o $n\geq30$), independencia, y para dos grupos, homocedasticidad. Sin estos requisitos la prueba carece de validez.

## 💡 Ejemplo numérico (completo)

**Problema.** Una app de reparto declara que su **tiempo medio de entrega es a lo más $25$ minutos**. Un grupo de usuarios sospecha que el tiempo real es mayor. Se observa una muestra de $n = 16$ entregas con media $\bar{x} = 27.5$ y desviación muestral $s = 4.0$ minutos. Se usa $\alpha = 0.05$. Como $\sigma$ es desconocida, se utilizará la distribución $t$.

### Paso 1: Hipótesis
- $H_0: \mu \leq 25$ (el tiempo medio es de a lo más 25 minutos)
- $H_1: \mu > 25$ (el tiempo medio es mayor)

### Paso 2: Estadístico de prueba
Como $\sigma$ es desconocida, usamos:

$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$$

### Paso 3: Nivel de significancia
$\alpha = 0.05$, prueba **unilateral derecha**, con $gl = n-1 = 15$.

### Paso 4: Calcular
$$t = \frac{27.5 - 25}{4.0/\sqrt{16}} = \frac{2.5}{4.0/4} = \frac{2.5}{1.0} = 2.50$$

### Paso 5: Valor crítico
En la tabla $t$ con $gl=15$ y $\alpha = 0.05$ (unilateral), el valor crítico es:

$$t_{crít} = t_{0.05,15} = 1.753$$

### Paso 6: Comparar y decidir
Como $2.50 > 1.753$, el estadístico cae en la región de rechazo:

$$t_{calc} = 2.50 \ > \ t_{crít} = 1.753 \quad \Rightarrow \quad \text{se rechaza } H_0$$

### Paso 7: Conclusión
Hay evidencia estadísticamente significativa de que el tiempo medio de entrega de la app es **mayor** que 25 minutos. La declaración de la empresa no se sostiene con estos datos.

```
              distribución t, gl = 15 (α = 0.05 unilateral)
  región de no rechazo        |  región de rechazo
  ____________________________|████████████████████
                              |
                            1.753
                              ^
                              t_crít
                              (t_calc = 2.50 cae aquí → rechazar H0)
```

## 🌍 Ejemplo de la vida real
**Tiempo de entrega de una app de comida.** El gerente sospecha que la promesa de "máximo 25 minutos" no se cumple, así que mide una muestra de 16 pedidos. Aplicando los 7 pasos obtiene $t = 2.50$, que supera el valor crítico $1.753$; decide rediseñar la logística (nuevos repartidores en horas pico) porque los datos demostraron el retraso. Si el estadístico hubiera estado por debajo de $1.753$, no habría evidencia para cambiar nada.

> [!tip] Relación con el curso
> Este tema integra lo aprendido: plantear hipótesis (67), cumplir requisitos (66) y elegir entre paramétrica y no paramétrica (64). El paso de comparar con el valor crítico y decidir se desarrolla a fondo en el tema 9 con las zonas de rechazo.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1
¿Cuál es el primer paso al aplicar una prueba estadística?
a) Calcular el estadístico de prueba
b) Fijar el nivel de significancia
c) Plantear las hipótesis nula y alternativa
d) Determinar el valor crítico
> **c) Plantear las hipótesis nula y alternativa**

---

### Pregunta 2
En el ejemplo de la app de reparto, el estadístico calculado fue $t = 2.50$ y el valor crítico fue $t_{crít} = 1.753$. Dado que $2.50 > 1.753$, se concluye que:
a) No se rechaza $H_0$ porque el estadístico es positivo
b) Se rechaza $H_0$ porque el estadístico cae en la región de rechazo
c) No se puede decidir sin conocer el p-valor
d) Se acepta $H_0$ porque la diferencia es pequeña
> **b) Se rechaza $H_0$ porque el estadístico cae en la región de rechazo**

---

### Pregunta 3
Si el p-valor de una prueba es $0.03$ y el nivel de significancia es $\alpha = 0.05$, ¿cuál es la decisión correcta?
a) No se rechaza $H_0$ porque $0.03 > 0.05$
b) Se rechaza $H_0$ porque $0.03 < 0.05$
c) Se rechaza $H_0$ porque $0.03 > 0.05$
d) No se puede decidir sin el valor crítico
> **b) Se rechaza $H_0$ porque $0.03 < 0.05$**

---

### Pregunta 4
¿Por qué se utiliza la distribución $t$ en lugar de la $z$ cuando $\sigma$ es desconocida?
a) Porque la distribución $t$ siempre produce valores críticos menores
b) Porque el estadístico $t$ se ajusta mejor al tamaño de muestra pequeño cuando se estima $\sigma$ con $s$
c) Porque la distribución $z$ no existe para muestras menores a 30
d) Porque el p-valor solo se calcula con la distribución $t$
> **b) Porque el estadístico $t$ se ajusta mejor al tamaño de muestra pequeño cuando se estima $\sigma$ con $s$**

---

### Pregunta 5
Una fábrica afirma que sus cilindros tienen un diámetro promedio de 5.0 cm. Un inspector sospecha que el diámetro es menor. Con una muestra de $n = 25$, $\bar{x} = 4.85$ y $s = 0.30$, ¿cuál es el estadístico $t$ calculado?
a) $t = \frac{4.85 - 5.00}{0.30/\sqrt{25}} = -2.50$
b) $t = \frac{4.85 - 5.00}{0.30/25} = -12.50$
c) $t = \frac{5.00 - 4.85}{0.30/\sqrt{25}} = 2.50$
d) $t = \frac{4.85 - 5.00}{\sqrt{0.30/25}} = -4.33$
> **a) $t = \frac{4.85 - 5.00}{0.30/\sqrt{25}} = -2.50$**

---

### Pregunta 6
En una prueba bilateral con $\alpha = 0.05$ se obtiene un estadístico que cae justo en el valor crítico. La decisión correcta es:
a) Rechazar $H_0$ porque el estadístico es igual al valor crítico
b) No rechazar $H_0$ porque no supera al valor crítico
c) Repetir la prueba con una muestra mayor
d) Cambiar el nivel de significancia a $\alpha = 0.01$
> **a) Rechazar $H_0$ porque el estadístico es igual al valor crítico**

---

### Pregunta 7
¿Cuál es el orden correcto de los pasos para aplicar una prueba de hipótesis?
a) Fijar $\alpha$ → Calcular estadístico → Plantear $H_0$ y $H_1$ → Comparar con valor crítico
b) Plantear $H_0$ y $H_1$ → Fijar $\alpha$ → Elegir estadístico → Calcular → Determinar valor crítico → Comparar → Concluir
c) Elegir estadístico → Calcular → Fijar $\alpha$ → Plantear hipótesis → Decidir
d) Plantear $H_0$ y $H_1$ → Calcular estadístico → Fijar $\alpha$ → Comparar con valor crítico
> **b) Plantear $H_0$ y $H_1$ → Fijar $\alpha$ → Elegir estadístico → Calcular → Determinar valor crítico → Comparar → Concluir**

---

### Pregunta 8
Un investigador prueba si un curso nuevo mejora el rendimiento. Obtiene $p = 0.12$ con $\alpha = 0.05$. La conclusión correcta es:
a) El curso mejora el rendimiento porque el p-valor es bajo
b) No hay evidencia suficiente para afirmar que el curso mejora el rendimiento
c) El curso no tiene ningún efecto en el rendimiento
d) Se rechaza $H_0$ porque $0.12 < 0.05$
> **b) No hay evidencia suficiente para afirmar que el curso mejora el rendimiento**

---

### Pregunta 9
¿Qué requisito NO es necesario verificar antes de aplicar una prueba paramétrica para una media?
a) Que la muestra sea independiente
b) Que los datos provengan de una población normal o que $n \geq 30$
c) Que la variable sea categórica nominal
d) Que se conozca la desviación estándar muestral o poblacional
> **c) Que la variable sea categórica nominal**

---

### Pregunta 10
Una empresa afirma que el tiempo máximo de espera es 10 minutos. Se sospecha que la espera es mayor. Con $\alpha = 0.05$ y una prueba unilateral derecha, se obtiene $t_{calc} = 1.20$ mientras que $t_{crít} = 1.711$. ¿Qué se concluye?
a) Se rechaza $H_0$ porque $t_{calc}$ es positivo
b) No se rechaza $H_0$ porque $1.20 < 1.711$; no hay evidencia suficiente de que la espera supere los 10 minutos
c) Se rechaza $H_0$ porque el valor crítico es mayor que 1
d) Se acepta $H_0$ porque el tiempo de espera es exactamente 10 minutos
> **b) No se rechaza $H_0$ porque $1.20 < 1.711$; no hay evidencia suficiente de que la espera supere los 10 minutos**
