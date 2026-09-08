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
