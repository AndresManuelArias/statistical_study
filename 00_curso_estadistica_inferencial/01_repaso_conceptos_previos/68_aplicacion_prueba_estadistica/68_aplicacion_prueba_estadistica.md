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
> Este tema integra lo aprendido: plantear hipótesis (67), cumplir requisitos (66) y elegir entre paramétrica y no paramétrica (64). El paso de comparar con el valor crítico y decidir se desarrolla a fondo en el tema 69 con las zonas de rechazo.
