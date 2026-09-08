---
titulo: Distribución Poisson
tipo: anotacion-video
tema: Distribución Poisson
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Poisson

## Datos del video
- **Título:** Distribución Poisson | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Poisson+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## Resumen
La distribución de Poisson modela el número de eventos que ocurren en un intervalo de tiempo o espacio, cuando estos eventos suceden de forma independiente y a una tasa constante. Es fundamental para modelar fenómenos de "eventos raros" en la vida real.

## Contenido

### Definición

Una variable aleatoria $X$ sigue una distribución de Poisson con parámetro $\lambda > 0$ si su función de masa es:

$$P(X = k) = \frac{e^{-\lambda} \cdot \lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$

donde:
- $\lambda$ = número promedio de eventos en el intervalo dado.
- $e \approx 2.71828$ es la base del logaritmo natural.
- $k!$ es el factorial de $k$.

### Propiedades

La distribución de Poisson tiene igual media que varianza:

$$E(X) = \lambda$$

$$\text{Var}(X) = \lambda$$

$$\sigma = \sqrt{\lambda}$$

Esta igualdad media = varianza es una característica distintiva de Poisson. Si en los datos observamos que la varianza es mucho mayor que la media, probablemente no se ajusta a Poisson (hay sobredispersión).

### Cuándo usar Poisson

Se aplica cuando se cumplen estas condiciones:

1. Los eventos son **independientes** entre sí.
2. La tasa de ocurrencia ($\lambda$) es **constante** en el intervalo.
3. Dos eventos **no pueden** ocurrir exactamente al mismo instante.
4. El número de eventos en intervalos **disjuntos** es independiente.

### Relación con la binomial

La distribución de Poisson es el **límite** de la binomial cuando $n \to \infty$, $p \to 0$ y $np = \lambda$ permanece constante. Por eso se usa para modelar eventos raros: muchos ensayos con probabilidad muy baja de éxito en cada uno.

### Función de distribución acumulada

$$P(X \leq k) = \sum_{i=0}^{k} \frac{e^{-\lambda} \cdot \lambda^i}{i!}$$

Para calcular $P(X \geq k)$ se usa la complementación:

$$P(X \geq k) = 1 - P(X \leq k-1)$$

## Ejemplo numérico

Una central de llamadas recibe en promedio $\lambda = 3$ llamadas por minuto. Sea $X$ el número de llamadas en un minuto.

**a) Probabilidad de recibir exactamente 2 llamadas en un minuto:**

$$P(X = 2) = \frac{e^{-3} \cdot 3^2}{2!} = \frac{0.04979 \cdot 9}{2} = \frac{0.4481}{2} = 0.2240$$

**b) Probabilidad de recibir 0 llamadas:**

$$P(X = 0) = \frac{e^{-3} \cdot 3^0}{0!} = \frac{0.04979 \cdot 1}{1} = 0.0498$$

**c) Probabilidad de recibir 5 o más llamadas:**

$$P(X \geq 5) = 1 - P(X \leq 4)$$

Calculamos cada término:

| $k$ | $P(X = k)$ |
|:---:|:---:|
| 0 | 0.0498 |
| 1 | 0.1494 |
| 2 | 0.2240 |
| 3 | 0.2240 |
| 4 | 0.1680 |

$$P(X \leq 4) = 0.0498 + 0.1494 + 0.2240 + 0.2240 + 0.1680 = 0.8152$$

$$P(X \geq 5) = 1 - 0.8152 = 0.1848$$

**Media y varianza:** $E(X) = \text{Var}(X) = 3$, con $\sigma = \sqrt{3} \approx 1.732$.

## Ejemplo de la vida real

Un punto de control de tráfico cuenta en promedio 8 autos por minuto durante la hora pico. Un ingeniero de tránsito quiere calcular la probabilidad de que pasen 12 o más autos en un minuto dado:

$$P(X \geq 12) = 1 - P(X \leq 11)$$

Con $\lambda = 8$, usando una tabla de Poisson o calculadora: $P(X \leq 11) \approx 0.8881$.

$$P(X \geq 12) = 1 - 0.8881 = 0.1119$$

Hay aproximadamente un **11.2% de probabilidad** de que pasen 12 o más autos. Si la capacidad máxima del carril es 14 autos por minuto, el ingeniero puede evaluar si es necesaria una señalización adicional en esa intersección.

> [!tip] Relación con el curso
> La distribución de Poisson es la base para pruebas de hipótesis sobre tasas de ocurrencia y para construir intervalos de confianza para la media en problemas de conteo, aplicándose directamente en la inferencia estadística.
