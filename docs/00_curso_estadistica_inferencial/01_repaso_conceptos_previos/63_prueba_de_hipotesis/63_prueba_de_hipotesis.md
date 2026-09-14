---
titulo: Prueba de Hipótesis
tipo: anotacion-video
tema: prueba-de-hipotesis
tags:
  - estadistica-inferencial
  - pruebas-de-hipotesis
---

# 📘 Prueba de Hipótesis

## 🎬 Datos del video
- **Título:** Hypothesis Testing | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Hypothesis+Testing+|+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/UKksepblNi0?si=IER93MrozozZca_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## 📋 Resumen
La prueba de hipótesis es el procedimiento de la estadística inferencial que permite decidir si la información de una muestra contradice o respalda una afirmación sobre un parámetro poblacional. Es el "juicio" estadístico: se plantea una conjetura, se recogen datos y se concluye si hay evidencia suficiente en su contra. Este video presenta la idea general como la aplicación del método científico al análisis de datos.

## 🧮 Contenido

### Idea general
En inferencia queremos conocer algo de una **población** (un parámetro como $\mu$, $p$ o $\sigma$) sin medirla por completo. Con una muestra no solo estimamos el parámetro, sino que además **decidimos** sobre una afirmación hecha acerca de él.

La prueba de hipótesis responde preguntas del tipo:
- ¿El promedio real $\mu$ es igual a un valor propuesto $\mu_0$?
- ¿Una nueva terapia es más efectiva que la habitual?
- ¿La proporción de piezas defectuosas bajó después del cambio de proveedor?

### Afirmar sobre un parámetro y decidir con datos
Toda prueba comienza con dos afirmaciones enfrentadas sobre el parámetro de interés $\theta$:

$$H_0: \theta = \theta_0 \quad \text{frente a} \quad H_1: \theta \neq \theta_0$$

La lógica es de **reducción al absurdo**: suponemos que $H_0$ es verdadera y nos preguntamos qué tan probable es obtener los datos observados bajo ese supuesto. Si la probabilidad de lo observado es muy pequeña, la evidencia contradice a $H_0$ y la rechazamos.

### Los pasos del método científico aplicados
La prueba de hipótesis es el método científico traducido al lenguaje de la estadística:

```
1. Observación      → Se detecta un problema o se hace una pregunta
2. Hipótesis        → Se plantean H0 y H1 (conjeturas enfrentadas)
3. Experimento      → Se diseña el muestreo y se toman los datos
4. Análisis         → Se calcula el estadístico de prueba
5. Conclusión       → Se decide si hay evidencia para rechazar H0
```

| Método científico | Prueba de hipótesis |
|---|---|
| Plantea una pregunta | Se define una conjetura sobre el parámetro $\theta$ |
| Formula una hipótesis | Se escriben formalmente $H_0$ y $H_1$ |
| Diseña un experimento | Se fija el tipo y tamaño de la muestra |
| Recoge y analiza datos | Se obtiene la muestra y se calcula el estadístico |
| Concluye | Se compara el estadístico con el valor crítico y se decide |

### Decidir con riesgo controlado
La decisión jamás es 100% segura porque trabajamos con una muestra, no con la población completa. Ese riesgo de equivocarnos se cuantifica con el **nivel de significancia** $\alpha$. Cuanto más extremo sea el estadístico de prueba (más lejos de lo esperado bajo $H_0$), más evidencia hay en su contra.

### Papel de la distribución muestral
Para decidir necesitamos conocer el comportamiento del estadístico **suponiendo que $H_0$ es cierta**. Gracias al Teorema del Límite Central, para muestras grandes la media muestral se distribuye aproximadamente:

$$\bar{x} \sim N\left(\mu_0,\ \frac{\sigma}{\sqrt{n}}\right)$$

Estandarizando obtenemos un valor $z$ medido en desviaciones estándar:

$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$$

Si $\sigma$ es desconocida, se sustituye por la desviación muestral $s$ y se usa la distribución $t$.

#### Gráfico: Dónde cae el estadístico bajo $H_0$ (ejemplo de la empresa de transporte)

```chart
type: line
labels: [-4.00, -3.75, -3.50, -3.25, -3.00, -2.75, -2.50, -2.25, -2.00, -1.75, -1.50, -1.25, -1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00]
series:
  - title: "Distribución muestral estandarizada bajo H0, N(0,1)"
    data: [0.0001, 0.0004, 0.0009, 0.0020, 0.0044, 0.0091, 0.0175, 0.0317, 0.0540, 0.0863, 0.1295, 0.1826, 0.2420, 0.3011, 0.3521, 0.3867, 0.3989, 0.3867, 0.3521, 0.3011, 0.2420, 0.1826, 0.1295, 0.0863, 0.0540, 0.0317, 0.0175, 0.0091, 0.0044, 0.0020, 0.0009, 0.0004, 0.0001]
width: 90%
labelColors: false
fill: false
beginAtZero: true
```

**Interpretación:**
- Bajo $H_0: \mu = 30$, el estadístico $\bar{x}$ se distribuye $N(\mu_0, \sigma/\sqrt{n}) = N(30, 1)$; al estandarizar, la curva es $N(0,1)$.
- El valor observado $z = 3.00$ cae en la **cola extrema derecha** de la curva (marca en $z = 3$).
- El p-valor $= 2 \times 0.00135 = 0.0027 < 0.05$: tan solo un 0.27% de las veces una $H_0$ verdadera produciría un dato tan extremo. Hay **evidencia fuerte en contra** de $H_0$.

### ¿Qué nos dice (y qué no) la prueba?
- Rechazar $H_0$ = la evidencia muestral es **incompatible** con $H_0$.
- No rechazar $H_0$ = no hay evidencia suficiente en su contra (no significa "probar" que sea verdadera).
- Los datos siempre son quienes hablan: la decisión depende de ellos, no de preferencias del investigador.

## 💡 Ejemplo numérico
**Problema.** Una compañía de transporte asegura que su tiempo medio de entrega es $\mu = 30$ minutos. Se toma una muestra de $n = 49$ entregas que arroja una media $\bar{x} = 33$ minutos, con desviación poblacional conocida $\sigma = 7$ minutos.

**Paso 1.** Plantear las conjeturas:
- $H_0: \mu = 30$ (el tiempo medio de entrega sigue siendo 30 minutos)
- $H_1: \mu \neq 30$ (el tiempo medio cambió)

**Paso 2.** Estandarizar bajo $H_0$:

$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} = \frac{33 - 30}{7/\sqrt{49}} = \frac{3}{7/7} = \frac{3}{1} = 3.00$$

**Paso 3.** Interpretar en la curva normal: $z = 3.00$ está a 3 desviaciones estándar de la media. La probabilidad de observar un valor tan extremo o más (de ambos lados) es:

$$p \text{-valor} \approx 2 \times 0.00135 = 0.0027$$

Como $0.0027$ es menor que cualquier $\alpha$ típico ($\alpha = 0.05$), la evidencia es **fuerte en contra** de $H_0$.

**Conclusión:** rechazamos la afirmación de que el tiempo medio de entrega es de 30 minutos; los datos sugieren que el tiempo real es mayor.

## 🌍 Ejemplo de la vida real
**Control de calidad en una fábrica de refrescos.** Una embotelladora nominalmente llena botellas de $500$ ml. Cada cierto tiempo se toma una muestra pequeña y se plantea la prueba:

- $H_0$: el llenado promedio es $500$ ml (todo en orden).
- $H_1$: el llenado promedio se desvió (máquina descalibrada).

Si la prueba rechaza $H_0$, se detiene la línea y se recalibran las llenadoras antes de que el consumidor reciba envases con exceso o defecto de producto. Esta es una aplicación clásica y cotidiana del método científico estadístico.

> [!tip] Relación con el curso
> La prueba de hipótesis es el corazón de la estadística inferencial: convierte la estimación de parámetros en una **decisión** con riesgo cuantificable. Los temas 64 a 69 desarrollan cada componente del procedimiento que aquí se presenta de manera general.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál es el objetivo principal de una prueba de hipótesis?

a) Estimar el valor exacto del parámetro poblacional con precisión perfecta
b) Decidir si la evidencia muestral contradice una afirmación sobre un parámetro poblacional
c) Demostrar matemáticamente que la hipótesis nula es verdadera
d) Eliminar toda posibilidad de error al tomar una decisión estadística

> **b) Decidir si la evidencia muestral contradice una afirmación sobre un parámetro poblacional**

---

### Pregunta 2

¿Qué representa la hipótesis nula ($H_0$) en una prueba de hipótesis?

a) La conclusión final del investigador después de analizar los datos
b) La afirmación alternativa que se busca comprobar con la muestra
c) Una suposición inicial que asume que el parámetro iguala un valor propuesto
d) Un intervalo de confianza construido al nivel $1 - \alpha$

> **c) Una suposición inicial que asume que el parámetro iguala un valor propuesto**

---

### Pregunta 3

En el ejemplo de la compañía de transporte, el estadístico de prueba fue $z = 3.00$. ¿Qué significa este valor?

a) La media muestral es 3 veces superior a la media poblacional
b) La media muestral está 3 desviaciones estándar alejada de lo esperado bajo $H_0$
c) El 3 % de la población no cumple con el tiempo de entrega
d) La probabilidad de que $H_0$ sea verdadera es del 3 %

> **b) La media muestral está 3 desviaciones estándar alejada de lo esperado bajo $H_0$**

---

### Pregunta 4

¿Qué indica un valor de p-valor $= 0.0027$ cuando se compara con un nivel de significancia $\alpha = 0.05$?

a) Se rechaza $H_0$ porque $0.0027 \leq 0.05$
b) No se rechaza $H_0$ porque $0.0027 < 0.05$
c) Se rechaza $H_0$ porque $0.0027 > 0.05$
d) El resultado es inconcluso y se requiere una muestra más grande

> **a) Se rechaza $H_0$ porque $0.0027 \leq 0.05$**

---

### Pregunta 5

¿Qué significa el nivel de significancia $\alpha = 0.05$?

a) Hay un 5 % de probabilidad de que los datos sean correctos
b) Se acepta $H_0$ con un 95 % de certeza absoluta
c) El 5 % de las veces se rechazará $H_0$ cuando en realidad es verdadera
d) La media muestral difiere en un 5 % de la media poblacional

> **c) El 5 % de las veces se rechazará $H_0$ cuando en realidad es verdadera**

---

### Pregunta 6

¿Qué probabilidad representa el p-valor en una prueba de hipótesis?

a) La probabilidad de que $H_0$ sea verdadera dado lo observado en la muestra
b) La probabilidad de obtener datos como los observados (o más extremos) suponiendo que $H_0$ es cierta
c) La probabilidad de que el investigador cometa un error al formular las hipótesis
d) La probabilidad de que la muestra sea representativa de la población

> **b) La probabilidad de obtener datos como los observados (o más extremos) suponiendo que $H_0$ es cierta**

---

### Pregunta 7

¿Qué significa cuando una prueba de hipótesis no rechaza $H_0$?

a) Se ha demostrado que $H_0$ es verdadera
b) La muestra es demasiado pequeña para cualquier análisis
c) No hay evidencia suficiente para rechazar $H_0$
d) Se debe rechazar $H_1$ con total seguridad

> **c) No hay evidencia suficiente para rechazar $H_0$**

---

### Pregunta 8

En el ejemplo de la embotelladora, si se rechaza $H_0$: el llenado promedio es $500$ ml, ¿cuál es la conclusión práctica correcta?

a) Las botellas contienen exactamente $500$ ml en promedio
b) La embotelladora debe cerrar definitivamente por fraude
c) La media de llenado se desvió de $500$ ml y la máquina podría necesitar recalibración
d) No se requiere ninguna acción porque los datos son normales

> **c) La media de llenado se desvió de $500$ ml y la máquina podría necesitar recalibración**

---

### Pregunta 9

¿Cuáles son los cinco pasos del método de prueba de hipótesis presentados en el apunte?

a) Observar, medir, calcular, comparar, concluir
b) Plantear $H_0$ y $H_1$, elegir el estadístico, fijar $\alpha$, calcular el estadístico, decidir
c) Recoger la muestra, calcular la media, calcular la varianza, graficar, interpretar
d) Estimar el parámetro, construir un intervalo, calcular la varianza, comparar, rechazar

> **b) Plantear $H_0$ y $H_1$, elegir el estadístico, fijar $\alpha$, calcular el estadístico, decidir**

---

### Pregunta 10

¿Por qué se dice que la prueba de hipótesis es una lógica de "reducción al absurdo"?

a) Porque asume que $H_0$ es verdadera y evalúa si los datos son demasiado improbables bajo esa suposición
b) Porque busca encontrar la hipótesis más absurda entre todas las posibles
c) Porque descarta automáticamente toda hipótesis alternativa $H_1$
d) Porque demuestra que la población completa se comporta de forma aleatoria

> **a) Porque asume que $H_0$ es verdadera y evalúa si los datos son demasiado improbables bajo esa suposición**
