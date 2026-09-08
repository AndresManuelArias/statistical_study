---
titulo: Teorema del Límite Central
tipo: anotacion-video
tema: Teorema del Límite Central
tags:
  - estadistica-inferencial
  - inferencia
---

# Teorema del Límite Central

## 🎬 Datos del video
- **Título:** Teorema del Límite Central | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Teorema+del+Limite+Central+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El Teorema del Límite Central establece que, para una población con media $\mu$ y desviación estándar $\sigma$, la distribución muestral de $\bar{X}$ se aproxima a una normal con media $\mu$ y error estándar $\sigma/\sqrt{n}$ cuando $n$ es suficientemente grande, sin importar la forma de la distribución original. La regla práctica común es $n \geq 30$.

## 🧮 Contenido

### Enunciado del teorema

Sea $X_1, X_2, \ldots, X_n$ una muestra aleatoria de una población con media $\mu$ y varianza $\sigma^2 < \infty$. Entonces:

$$\bar{X} \sim N\left(\mu, \frac{\sigma}{\sqrt{n}}\right) \quad \text{aproximadamente cuando $n$ es grande}$$

La única condición es que la varianza exista y sea finita. No importa si la población es normal, uniforme, exponencial o completamente sesgada.

### Forma estandarizada

$$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)$$

Esta estandarización es la base para construir intervalos de confianza y realizar pruebas de hipótesis.

### Regla práctica: n >= 30

- Para $n \geq 30$, la aproximación normal es razonable aunque la población no sea normal.
- Para distribuciones muy asimétricas, se recomienda $n \geq 50$ o más.
- Si la población ya es normal, cualquier $n$ funciona (la distribución es exacta).
- Cuanto más lejos de la normalidad esté la población, mayor $n$ se necesita.

### Implicaciones fundamentales

1. No importa la forma de la distribución original.
2. Con muestras grandes, podemos hacer inferencia usando la distribución normal.
3. La precisión mejora al aumentar $n$ (el error estándar disminuye como $\sigma/\sqrt{n}$).
4. El teorema funciona MUY bien en la práctica: es la razón de que las distribuciones normales dominen la inferencia estadística.

### El teorema para proporciones

El Teorema del Límite Central también se aplica a la proporción muestral $\hat{p}$ (variable Bernoulli con probabilidad de éxito $p$):

$$\hat{p} \approx N\left(p, \sqrt{\frac{p(1-p)}{n}}\right)$$

siempre que $np \geq 10$ y $n(1-p) \geq 10$.

### Resumen de conceptos clave

- La población puede tener cualquier forma.
- La distribución muestral de la media se hace más angosta al crecer $n$.
- El centro de la distribución muestral es SIEMPRE $\mu$.
- El error estándar $\sigma / \sqrt{n}$ mide la dispersión de las medias muestrales.

## 💡 Ejemplo numérico

Una población tiene una distribución sesgada a la derecha con $\mu = 45$ minutos y $\sigma = 15$ minutos (tiempos de espera en un restaurante). Se toman muestras de $n = 49$ clientes.

**Propiedades de la distribución muestral de $\bar{X}$:**

$$E(\bar{X}) = \mu = 45 \text{ minutos}$$

$$\sigma_{\bar{X}} = \frac{15}{\sqrt{49}} = \frac{15}{7} \approx 2.143 \text{ minutos}$$

**Probabilidad de que la media muestral supere 48 minutos:**

$$Z = \frac{48 - 45}{2.143} = \frac{3}{2.143} \approx 1.40$$

$$P(\bar{X} > 48) = P(Z > 1.40) = 1 - 0.9192 = 0.0808 \approx 8.08\%$$

Aunque la población original es asimétrica, la media muestral se comporta como una normal gracias al Teorema del Límite Central.

## 🌍 Ejemplo de la vida real

Un fabricante de refrescos sabe que el contenido de sus botellas sigue una distribución sesgada (muchas botellas cercanas al mínimo legal y pocas muy llenas). El contenido promedio es $\mu = 330$ ml con $\sigma = 8$ ml. Al tomar muestras de $n = 64$ botellas, puede asegurar que la distribución de $\bar{X}$ es aproximadamente normal y usarla para vigilar que la máquina no esté descalibrada.

> [!tip] Relación con el curso
> El Teorema del Límite Central es el pilar más importante de la estadística inferencial: sin él, no podríamos usar distribuciones normales para hacer inferencias sobre medias poblacionales a partir de muestras.
