---
titulo: Distribución Binomial Negativa
tipo: anotacion-video
tema: Distribución Binomial Negativa
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución Binomial Negativa

## Datos del video
- **Título:** Distribución Binomial Negativa | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Binomial+Negativa+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## Resumen
La distribución binomial negativa generaliza la distribución geométrica: modela el número de ensayos necesarios para obtener el $r$-ésimo éxito. Es útil en contextos como ventas acumuladas, promociones deportivas y procesos de selección, donde se busca un objetivo de éxitos múltiples.

## Contenido

### Definición

Sea $X$ el **número total de ensayos** necesarios para obtener el $r$-ésimo éxito. Entonces $X$ sigue una distribución binomial negativa con parámetros $r$ (número de éxitos deseados) y $p$ (probabilidad de éxito en cada ensayo):

$$P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, r+2, \ldots$$

donde:
- $k$ = número total de ensayos.
- $r$ = número de éxitos requeridos ($r \geq 1$).
- $p$ = probabilidad de éxito en cada ensayo.
- $\binom{k-1}{r-1} = \frac{(k-1)!}{(r-1)!(k-r)!}$ es el coeficiente binomial.

### Propiedades

**Media (número esperado de ensayos):**

$$E(X) = \frac{r}{p}$$

**Varianza:**

$$\text{Var}(X) = \frac{r(1-p)}{p^2}$$

### Variante: número de fracasos antes del $r$-ésimo éxito

Sea $Y$ el **número de fracasos** antes del $r$-ésimo éxito ($Y = X - r$):

$$P(Y = k) = \binom{k + r - 1}{r - 1} p^r (1-p)^k, \quad k = 0, 1, 2, \ldots$$

$$E(Y) = \frac{r(1-p)}{p}$$

### Caso particular: distribución geométrica

Cuando $r = 1$, la binomial negativa se reduce a la **distribución geométrica**:

$$P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$

$$E(X) = \frac{1}{p}, \quad \text{Var}(X) = \frac{1-p}{p^2}$$

### Relación con la distribución de Pascal

Cuando los parámetros son enteros, la binomial negativa también se conoce como **distribución de Pascal**. La función de distribución acumulada se expresa usando la función beta regularizada.

## Ejemplo numérico

Un equipo de ventas necesita concretar $r = 3$ ventas para cumplir su cuota mensual. La probabilidad de cerrar una venta en cada reunión es $p = 0.50$.

**Número esperado de reuniones:**

$$E(X) = \frac{r}{p} = \frac{3}{0.50} = 6 \text{ reuniones}$$

**Varianza:**

$$\text{Var}(X) = \frac{3(1 - 0.50)}{(0.50)^2} = \frac{3 \cdot 0.50}{0.25} = \frac{1.50}{0.25} = 6$$

$$\sigma = \sqrt{6} \approx 2.45 \text{ reuniones}$$

**Probabilidad de que se necesiten exactamente 5 reuniones:**

$$P(X = 5) = \binom{5-1}{3-1}(0.50)^3(0.50)^{5-3} = \binom{4}{2}(0.50)^3(0.50)^2$$

$$= 6 \cdot 0.125 \cdot 0.25 = 0.1875$$

**Probabilidad de que se necesiten exactamente 4 reuniones (mínimo posible = $r = 3$, pero $k$ debe ser $\geq 3$):**

$$P(X = 4) = \binom{3}{2}(0.50)^3(0.50)^1 = 3 \cdot 0.125 \cdot 0.50 = 0.1875$$

## Ejemplo de la vida real

Una tienda de retail necesita vender $r = 5$ electrodomésticos premium para alcanzar su objetivo trimestral. Historial indica que la probabilidad de concretar la venta en cada visita a cliente es $p = 0.20$.

$$E(X) = \frac{5}{0.20} = 25 \text{ visitas}$$

$$\text{Var}(X) = \frac{5 \cdot 0.80}{(0.20)^2} = \frac{4}{0.04} = 100$$

$$\sigma = \sqrt{100} = 10 \text{ visitas}$$

El gerente debe planificar al menos 25 visitas para alcanzar la meta, pero con una desviación estándar de 10, algunas semanas podría necesitar 40 o más visitas.

> [!tip] Relación con el curso
> La binomial negativa se utiliza en la inferencia para modelar muestras hasta un número fijo de éxitos, y aparece en pruebas de hipótesis sobre proporciones cuando el número de éxitos se fija de antemano.
