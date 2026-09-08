---
titulo: "Dominio, codominio y rango"
tipo: anotacion-video
tema: "Dominio, codominio y rango"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Dominio, codominio y rango

## 🎬 Datos del video
- **Título:** Domain, Codomain, and Range | Inferential Statistics
- **Canal:** José María Hernández Rivera (video en inglés)
- **Enlace:** https://www.youtube.com/results?search_query=Domain+Codomain+and+Range+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Se distinguen los tres conjuntos que intervienen en una función: dominio (valores de entrada), codominio (conjunto de salida definido) y rango (valores que realmente se alcanzan). Se analizan sus diferencias con ejemplos numéricos y gráficos.

## 🧮 Contenido

### Los tres conceptos

Para una función $f: A \to B$:

- **Dominio**: conjunto de los valores de entrada $x$ para los que $f$ está definida.
- **Codominio**: el conjunto $B$ hacia el cual se declara la función. Es parte de la "definición" de la función.
- **Rango** (o imagen): subconjunto de $B$ formado por los valores que **realmente** toma la función.

### Diferencia clave

El rango es siempre un subconjunto del codominio:

$$\text{Rango}(f) \subseteq \text{Codominio}(f)$$

El rango **no necesariamente coincide** con el codominio. Cuando coinciden, la función es **sobreyectiva**.

### Dominio en funciones reales

En funciones definidas sobre los reales conviene restringir el dominio cuando:

- Hay raíces de índice par: el radicando debe ser $\geq 0$.
- Hay denominadores: el denominador debe ser $\neq 0$.

Por ejemplo, en $g(x) = \sqrt{x}$ solo tiene sentido $x \geq 0$.

### Notación funcional

Si $f(x) = y$, entonces:

- $x \in$ dominio
- $y \in$ rango

En la gráfica, el dominio se lee sobre el **eje horizontal** y el rango sobre el **eje vertical**.

## 💡 Ejemplo numérico

**Problema:** Sea $f: \mathbb{Z} \to \mathbb{Z}$ definida por $f(x) = x^2$, evaluada en $x = -3, -2, -1, 0, 1, 2, 3$.

**Paso 1:** Calcular valores:

$$f(-3)=9,\; f(-2)=4,\; f(-1)=1,\; f(0)=0,\; f(1)=1,\; f(2)=4,\; f(3)=9$$

**Paso 2 — Dominio:**

$$\text{Dominio} = \{-3,-2,-1,0,1,2,3\}$$

**Paso 3 — Codominio:**

$$\text{Codominio} = \mathbb{Z}$$

**Paso 4 — Rango (valores alcanzados, sin repetir):**

$$\text{Rango} = \{0, 1, 4, 9\}$$

**Conclusión:** El rango $\{0,1,4,9\}$ es un subconjunto propio del codominio $\mathbb{Z}$; la función no es sobreyectiva, porque, por ejemplo, $5 \in \mathbb{Z}$ pero $5 \notin \text{Rango}(f)$.

## 💡 Segundo ejemplo: comparar dominio y codominio

**Problema:** Sea $h: \mathbb{R} \to \mathbb{R}$ con $h(x) = 2x$.

**Dominio:** $\mathbb{R}$. **Rango:** $\mathbb{R}$ (para todo $y$ existe $x = y/2$).

**Conclusión:** $\text{Rango}(h) = \text{Codominio}(h) = \mathbb{R}$, así que $h$ es sobreyectiva. Aquí dominio y codominio coinciden con el rango, a diferencia del primer ejemplo.

## 🌍 Ejemplo de la vida real

En una tienda, la función que convierte cantidad de unidades compradas en precio total tiene como dominio las cantidades vendibles, como codominio los precios definidos en catálogo y como rango únicamente los precios que se alcanzan con las ventas reales. Si ningún producto cuesta 3 €, ese valor está en el codominio pero no en el rango. Así se detecta, por ejemplo, si una promoción hace que algunos precios nunca se utilicen.

> [!tip] Relación con el curso
> Distinguir dominio, codominio y rango es esencial al trabajar con funciones de densidad de probabilidad y funciones de regresión, donde se debe identificar claramente qué valores puede tomar cada variable.
