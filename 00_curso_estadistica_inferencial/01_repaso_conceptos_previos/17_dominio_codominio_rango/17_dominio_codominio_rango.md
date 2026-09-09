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
<iframe width="560" height="315" src="https://www.youtube.com/embed/gWV8lS6MQDg?si=pdO72DduhAfa3sF_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa el dominio de una función $f: A \to B$?

a) El conjunto $B$ de valores de salida declarados.
b) El conjunto de valores de salida que la función realmente alcanza.
c) El conjunto de valores de entrada $x$ para los que $f$ está definida.
d) El conjunto de todos los números reales.

> **c) El conjunto de valores de entrada $x$ para los que $f$ está definida.**

---

### Pregunta 2

Dada la función $f(x) = x^2$ evaluada en $x = -3, -2, -1, 0, 1, 2, 3$ con codominio $\mathbb{Z}$, ¿cuál es el rango?

a) $\{-3, -2, -1, 0, 1, 2, 3\}$
b) $\{0, 1, 2, 3, 4, 9\}$
c) $\{0, 1, 4, 9\}$
d) $\{1, 4, 9\}$

> **c) $\{0, 1, 4, 9\}$**

---

### Pregunta 3

¿Cuándo una función se dice sobreyectiva?

a) Cuando el dominio es igual al codominio.
b) Cuando el rango coincide con el codominio.
c) Cuando cada valor del dominio se repite al menos dos veces.
d) Cuando el dominio es un subconjunto del rango.

> **b) Cuando el rango coincide con el codominio.**

---

### Pregunta 4

En la función $g(x) = \sqrt{x}$, ¿por qué el dominio se restringe a $x \geq 0$?

a) Porque la función siempre debe dar resultados positivos.
b) Porque los radicandos de raíces de índice par deben ser $\geq 0$.
c) Porque el codominio solo contiene números enteros.
d) Porque no existen números negativos en los reales.

> **b) Porque los radicandos de raíces de índice par deben ser $\geq 0$.**

---

### Pregunta 5

En una fábrica que convierte kilos de material ($x$) en piezas terminadas mediante $f(x) = 2x$, con codominio los enteros $\mathbb{Z}$, ¿por qué la función es sobreyectiva?

a) Porque todo entero par tiene un preimagen entero.
b) Porque el dominio y el codominio son iguales.
c) Porque el rango coincide con el codominio.
d) Porque el rango es un subconjunto propio del codominio.

> **c) Porque el rango coincide con el codominio.**

---

### Pregunta 6

Si el codominio de una función es $\mathbb{R}$ y el rango es $\{0, 1, 4, 9\}$, ¿qué se puede afirmar?

a) La función es sobreyectiva.
b) El rango es igual al codominio.
c) La función no es sobreyectiva porque existen valores en $\mathbb{R}$ que no están en el rango.
d) El dominio es un subconjunto del rango.

> **c) La función no es sobreyectiva porque existen valores en $\mathbb{R}$ que no están en el rango.**

---

### Pregunta 7

En una tienda, la función que asigna unidades compradas a precio total tiene codominio los precios del catálogo. Si un producto no cuesta 50 €, ¿qué relación tiene ese valor con los conjuntos de la función?

a) Está en el dominio pero no en el codominio.
b) Está en el codominio pero no en el rango.
c) Está tanto en el dominio como en el rango.
d) No está en ninguno de los tres conjuntos.

> **b) Está en el codominio pero no en el rango.**

---

### Pregunta 8

¿Qué relación siempre se cumple entre el rango y el codominio de cualquier función?

a) El rango es igual al codominio.
b) El rango es un subconjunto del codominio.
c) El codominio es un subconjunto del rango.
d) No existe relación general entre ambos.

> **b) El rango es un subconjunto del codominio.**

---

### Pregunta 9

En la función $h(x) = 2x$ con dominio $\mathbb{R}$, ¿por qué el rango es también $\mathbb{R}$?

a) Porque la función eleva al cuadrado cada entrada.
b) Porque para cualquier $y$ real existe $x = y/2$ tal que $h(x) = y$.
c) Porque el codominio está restringido a los enteros.
d) Porque el dominio solo contiene valores positivos.

> **b) Porque para cualquier $y$ real existe $x = y/2$ tal que $h(x) = y$.**

---

### Pregunta 10

Un gimnasio registra la cantidad de visitas semanales de cada socio y la asigna a un puntaje de fidelidad definido por $f(x) = x + 5$, con codominio $\mathbb{Z}$. Si el dominio es $\{0, 1, 2, 3, 4\}$, ¿cuál es el rango?

a) $\{0, 1, 2, 3, 4\}$
b) $\{5, 6, 7, 8, 9\}$
c) $\{1, 2, 3, 4, 5\}$
d) $\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$

> **b) $\{5, 6, 7, 8, 9\}$**
