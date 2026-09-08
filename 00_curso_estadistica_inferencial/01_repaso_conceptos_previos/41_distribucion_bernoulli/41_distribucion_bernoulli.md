---
titulo: Distribución Bernoulli
tipo: anotacion-video
tema: Distribuciones
tags:
  - estadistica-inferencial
  - distribuciones
---

# 📘 Distribución Bernoulli

## 🎬 Datos del video
- **Título:** Distribución Bernoulli | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Bernoulli+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
La distribución de Bernoulli modela un **único ensayo** con exactamente dos resultados posibles: éxito (1) o fracaso (0). Es la distribución más simple y la unidad básica de construcciones más complejas como la binomial.

## 🧮 Contenido

### Definición
Una variable aleatoria $X$ tiene distribución de **Bernoulli** con parámetro $p$ si:

$$X \sim \text{Bernoulli}(p)$$

donde $p = P(X = 1)$ es la probabilidad de éxito, y $1 - p = P(X = 0)$ es la probabilidad de fracaso.

### Función de masa de probabilidad

$$f(x) = \begin{cases} p & \text{si } x = 1 \\ 1-p & \text{si } x = 0 \\ 0 & \text{en otro caso} \end{cases}$$

También se puede escribir compactamente:
$$f(x) = p^x (1-p)^{1-x}, \quad x \in \{0, 1\}$$

### Esperanza matemática

$$E(X) = 0 \cdot (1-p) + 1 \cdot p = p$$

### Varianza

$$V(X) = E(X^2) - [E(X)]^2$$

Calculamos $E(X^2)$:
$$E(X^2) = 0^2 \cdot (1-p) + 1^2 \cdot p = p$$

Por lo tanto:
$$V(X) = p - p^2 = p(1-p)$$

La varianza es máxima cuando $p = 0.5$ ($V = 0.25$) y mínima cuando $p = 0$ o $p = 1$ ($V = 0$).

### Relación con la distribución Binomial
La distribución Bernoulli es un caso especial de la **Binomial** con $n = 1$:

$$\text{Bernoulli}(p) \equiv \text{Binomial}(1, p)$$

## 💡 Ejemplo numérico
Se prueba un componente electrónico y se registra si pasa el control de calidad ($X = 1$) o no ($X = 0$). La probabilidad de pasar es $p = 0.85$.

**Distribución:**
| $x$ | $f(x)$ |
|---|---|
| 0 | $0.15$ |
| 1 | $0.85$ |

**Esperanza:**
$$E(X) = p = 0.85$$

Esto significa que, en promedio, el 85% de los componentes pasan el control.

**Varianza:**
$$V(X) = p(1-p) = 0.85 \times 0.15 = 0.1275$$

**Desviación estándar:**
$$\sigma = \sqrt{0.1275} \approx 0.3571$$

### Verificación con la fórmula alternativa
$E(X^2) = p = 0.85$
$V(X) = E(X^2) - [E(X)]^2 = 0.85 - (0.85)^2 = 0.85 - 0.7225 = 0.1275$ ✓

## 🌍 Ejemplo de la vida real
Una empresa de semiconductores evalúa cada chip con una prueba de estrés térmico. El chip **funciona** ($X = 1$) o **falla** ($X = 0$). Históricamente, $p = 0.92$ (92% de chips sobreviven).

Con $V(X) = 0.92 \times 0.08 = 0.0736$:
- La esperanza confirma que, en promedio, 92 de cada 100 chips funcionan.
- La varianza baja indica consistencia en el proceso de fabricación.
- Si $p$ bajara a 0.5, la varianza subiría a 0.25, señalando un proceso inestable.

> [!tip] Relación con el curso
> La distribución Bernoulli es la piedra angular de la inferencia para datos binarios. Muchas pruebas estadísticas (prueba de proporciones, regresión logística) se construyen sobre ensayos Bernoulli repetidos.
