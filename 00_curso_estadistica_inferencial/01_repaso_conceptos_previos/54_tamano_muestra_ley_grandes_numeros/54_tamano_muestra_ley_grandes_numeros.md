---
titulo: Tamaño de Muestra y Ley de los Grandes Números
tipo: anotacion-video
tema: Tamaño de Muestra y Ley de los Grandes Números
tags:
  - estadistica-inferencial
  - muestreo
---

# Tamaño de Muestra y Ley de los Grandes Números

## 🎬 Datos del video
- **Título:** Sample Size (and the Law of Large Numbers) | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Sample+Size+Law+of+Large+Numbers+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El tamaño de la muestra determina la precisión de las estimaciones estadísticas. La Ley de los Grandes Números establece que la media muestral converge a la media poblacional cuando el tamaño de la muestra crece, lo que fundamenta el uso del muestreo en inferencia estadística.

## 🧮 Contenido

### Relación entre tamaño de muestra y error

A medida que aumenta el tamaño de la muestra $n$, el error estándar de la media disminuye:

$$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$$

Esto significa que muestras más grandes producen estimaciones más cercanas al valor verdadero. La relación no es lineal sino con raíz cuadrada.

### Ley de los Grandes Números

**Definición informal:** Si se toman muestras cada vez más grandes de una población con media $\mu$, la media muestral $\bar{X}$ se acercará a $\mu$.

$$\bar{X}_n \xrightarrow{n \to \infty} \mu$$

**Versión formal (débil):** Para todo $\epsilon > 0$:

$$\lim_{n \to \infty} P(|\bar{X}_n - \mu| > \epsilon) = 0$$

Esto significa que la probabilidad de que $\bar{X}$ se desvíe de $\mu$ por más de $\epsilon$ tiende a cero cuando $n$ crece.

### Interpretación en tabla

| Tamaño de muestra ($n$) | Error estándar $\sigma_{\bar{X}}$ ($\sigma = 10$) | Reducción vs. anterior |
|---|---|---|
| 25 | $10 / \sqrt{25} = 2.0$ | - |
| 100 | $10 / \sqrt{100} = 1.0$ | 50% menos |
| 400 | $10 / \sqrt{400} = 0.5$ | 50% menos |
| 1,000 | $10 / \sqrt{1000} = 0.316$ | 37% menos |
| 10,000 | $10 / \sqrt{10000} = 0.1$ | 68% menos |

Hay rendimientos decrecientes: duplicar la precisión requiere cuadruplicar la muestra.

### Regla de cuatro

Para reducir el error estándar a la mitad, hay que cuadruplicar el tamaño de muestra:

$$n_{\text{nuevo}} = n \cdot \left(\frac{\sigma_{\text{actual}}}{\sigma_{\text{deseada}}}\right)^2$$

### Consideraciones prácticas

- La Ley de los Grandes Números es asintótica: funciona mejor cuanto mayor sea $n$.
- Con muestras pequeñas (ej: $n=5$), la media muestral puede estar muy lejos de $\mu$.
- La ley no especifica QUÉ tan rápido converge, solo que lo hace.
- La velocidad de convergencia depende de la varianza de la población: a mayor $\sigma$, más lenta la convergencia.

## 💡 Ejemplo numérico

Un lote de resistencia de cables tiene $\sigma = 15$ ohmios.

**Caso 1:** Con $n = 36$:

$$\sigma_{\bar{X}} = \frac{15}{\sqrt{36}} = \frac{15}{6} = 2.5 \text{ ohmios}$$

**Caso 2:** Para reducir el error a 1.25 ohmios (la mitad):

$$n_{\text{nuevo}} = 36 \times \left(\frac{2.5}{1.25}\right)^2 = 36 \times 4 = 144 \text{ cables}$$

**Verificación:**

$$\sigma_{\bar{X}} = \frac{15}{\sqrt{144}} = \frac{15}{12} = 1.25 \text{ ohmios} \quad \checkmark$$

## 🌍 Ejemplo de la vida real

Una app de delivery mide el tiempo promedio de entrega. Con 10 pedidos obtiene un promedio de 35 minutos; con 100 pedidos, el promedio se estabiliza en 28 minutos; con 1,000 pedidos, se acerca a 27.2 minutos (el valor real). Este comportamiento de convergencia es una demostración empírica de la Ley de los Grandes Números.

> [!tip] Relación con el curso
> La Ley de los Grandes Números fundamenta la inferencia estadística: justifica que podemos estimar parámetros poblacionales con estadísticos muestrales cuando la muestra es suficientemente grande.
