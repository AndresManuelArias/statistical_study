---
titulo: Distribución Binomial
tipo: anotacion-video
tema: Distribuciones
tags:
  - estadistica-inferencial
  - distribuciones
---

# 📘 Distribución Binomial

## 🎬 Datos del video
- **Título:** Distribución Binomial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+Binomial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
La distribución binomial modela el número de éxitos en $n$ ensayos Bernoulli independientes, cada uno con la misma probabilidad de éxito $p$. Es una de las distribuciones discretas más utilizadas en inferencia estadística.

## 🧮 Contenido

### Definición
Una variable aleatoria $X$ tiene distribución **Binomial** con parámetros $n$ y $p$ si:

$$X \sim \text{Binomial}(n, p)$$

representa el número de éxitos en $n$ ensayos idénticos e independientes, cada uno con probabilidad $p$ de éxito.

### Condiciones (criterios de Bernoulli)
Para que un experimento se modelé con Binomial se deben cumplir:
1. **Ensayos fijos:** Se realizan exactamente $n$ ensayos.
2. **Dos resultados:** Cada ensayo tiene solo dos resultados: éxito o fracaso.
3. **Probabilidad constante:** La probabilidad de éxito $p$ es la misma en cada ensayo.
4. **Independencia:** Los ensayos son independientes entre sí.

### Función de masa de probabilidad

$$P(X = k) = C(n, k) \, p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \dots, n$$

donde el coeficiente binomial es:

$$C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Esperanza matemática

$$E(X) = np$$

**Interpretación:** Si lanzamos 20 monedas justas ($p = 0.5$), esperamos $20 \times 0.5 = 10$ caras.

### Varianza

$$V(X) = np(1-p)$$

**Desviación estándar:**
$$\sigma = \sqrt{np(1-p)}$$

### Relación con otras distribuciones
- Bernoulli: $\text{Binomial}(1, p) = \text{Bernoulli}(p)$
- Cuando $n$ es grande y $p$ es pequeño, $\text{Binomial}(n, p) \approx \text{Poisson}(\lambda = np)$
- Cuando $n$ es grande, $\text{Binomial}(n, p) \approx N(np, np(1-p))$ (aproximación normal)

## 💡 Ejemplo numérico
Se inspeccionan $n = 10$ componentes electrónicos, cada uno con probabilidad $p = 0.5$ de estar defectuoso. $X$ = número de defectuosos.

**Cálculo de $P(X = 3)$:**
$$P(X = 3) = C(10, 3) (0.5)^3 (0.5)^7 = \frac{10!}{3! \cdot 7!} \cdot (0.5)^{10} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} \cdot \frac{1}{1024}$$

$$= 120 \times \frac{1}{1024} = \frac{120}{1024} \approx 0.1172$$

**Cálculo de $P(X = 0)$:**
$$P(X = 0) = C(10, 0)(0.5)^0(0.5)^{10} = 1 \times 1 \times \frac{1}{1024} \approx 0.00098$$

**Cálculo de $P(X = 5)$:**
$$P(X = 5) = C(10, 5)(0.5)^5(0.5)^5 = 252 \times \frac{1}{1024} = \frac{252}{1024} \approx 0.2461$$

**Esperanza:**
$$E(X) = np = 10 \times 0.5 = 5 \text{ defectuosos esperados}$$

**Varianza:**
$$V(X) = np(1-p) = 10 \times 0.5 \times 0.5 = 2.5$$

**Desviación estándar:**
$$\sigma = \sqrt{2.5} \approx 1.581 \text{ defectuosos}$$

## 🌍 Ejemplo de la vida real
Un centro de distribución envía 50 paquetes al día. Históricamente, el 6% de los paquetes se pierden o dañan durante el transporte ($p = 0.06$). El gerente quiere saber la probabilidad de que más de 5 paquetes se pierdan mañana:

$$P(X > 5) = 1 - P(X \leq 5)$$

Con $n = 50$ y $p = 0.06$: $E(X) = 50 \times 0.06 = 3$ paquetes perdidos esperados.

$V(X) = 50 \times 0.06 \times 0.94 = 2.82$, $\sigma \approx 1.679$.

Un resultado de $X = 6$ estaría a $\frac{6 - 3}{1.679} \approx 1.79$ desviaciones estándar sobre la media, lo cual es posible pero inusual. Esto ayuda a establecer alertas operativas: si se pierden 6+ paquetes, investigar la causa raíz.

> [!tip] Relación con el curso
> La distribución binomial es fundamental para pruebas de hipótesis sobre proporciones, intervalos de confianza para proporciones poblacionales y el diseño de muestras en investigación estadística.
