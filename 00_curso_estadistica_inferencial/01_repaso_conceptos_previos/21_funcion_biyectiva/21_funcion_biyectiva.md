---
titulo: "Función biyectiva"
tipo: anotacion-video
tema: "Función biyectiva e inversa"
tags:
  - estadistica-inferencial
  - conjuntos-o-probabilidad
---

# 📘 Función biyectiva

## 🎬 Datos del video
- **Título:** Función biyectiva | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Funci%C3%B3n+biyectiva+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Una función biyectiva combina ser inyectiva y sobreyectiva, estableciendo una correspondencia uno a uno entre dominio y codominio. Esta propiedad garantiza la existencia de una función inversa, útil para "deshacer" transformaciones.

## 🧮 Contenido

### Definición de función biyectiva

Una función $f: A \to B$ es **biyectiva** si es a la vez:

- **Inyectiva**: $a_1 \neq a_2 \implies f(a_1) \neq f(a_2)$.
- **Sobreyectiva**: $\text{Rango}(f) = B$.

Por tanto, cada elemento de $B$ es imagen de exactamente un elemento de $A$: correspondencia uno a uno.

### Función inversa

Si $f$ es biyectiva, existe su **función inversa** $f^{-1}: B \to A$ tal que:

$$f^{-1}(f(x)) = x \quad \text{y} \quad f(f^{-1}(y)) = y$$

La inversa "deshace" lo que hizo $f$: si $f$ convierte $x$ en $y$, la inversa convierte $y$ en $x$.

### Cómo hallar la inversa

1. Escribir $y = f(x)$.
2. Despejar $x$ en función de $y$.
3. Intercambiar $x$ e $y$ en la expresión final.
4. Reescribir como $y = f^{-1}(x)$ y verificar.

### Importancia de la biyectividad

- Con conjuntos finitos, si existe una biyección entre $A$ y $B$ entonces $|A| = |B|$.
- Solo las funciones biyectivas tienen inversa **dentro de los mismos conjuntos** (dominio y codominio originales).
- En el diagrama sagital, cada elemento de $B$ recibe exactamente una flecha.

### Verificación gráfica

- **Línea vertical**: toda vertical corta en a lo sumo un punto (es función).
- **Línea horizontal**: toda horizontal corta en al menos un punto (sobreyectiva sobre el codominio) y en a lo sumo un punto (inyectiva). Si toda horizontal corta en exactamente un punto, la función es biyectiva.

## 💡 Ejemplo numérico

**Problema:** Verificar que $f(x) = 3x + 1$ con dominio y codominio $\mathbb{R}$ es biyectiva y hallar su inversa.

**Paso 1 — ¿Inyectiva?** Si $f(a) = f(b)$ entonces $3a+1 = 3b+1 \implies 3a = 3b \implies a = b$. Sí es inyectiva.

**Paso 2 — ¿Sobreyectiva?** Para todo $y \in \mathbb{R}$, existe $x = \frac{y-1}{3}$ con $f(x) = 3\left(\frac{y-1}{3}\right) + 1 = y$. Sí es sobreyectiva.

**Paso 3 — Conclusión:** Es biyectiva.

**Paso 4 — Hallar la inversa:** Despejar $x$ de $y = 3x + 1$:

$$y - 1 = 3x \implies x = \frac{y-1}{3}$$

**Paso 5 — Inversa:**

$$f^{-1}(y) = \frac{y-1}{3}$$

**Paso 6 — Verificación:**

$$f^{-1}(f(x)) = \frac{(3x+1)-1}{3} = \frac{3x}{3} = x$$

Todo correcto: la inversa revierte la original.

## 💡 Segundo ejemplo: función no biyectiva

**Problema:** ¿Es $g(x) = x^2$ con dominio y codominio $\mathbb{R}$ biyectiva?

- **Inyectiva:** No, porque $g(2) = g(-2) = 4$.
- **Sobreyectiva:** No, porque $y = -1$ no tiene preimagen (un cuadrado nunca es negativo).

**Conclusión:** No es biyectiva, así que no tiene inversa en $\mathbb{R} \to \mathbb{R}$.

## 🌍 Ejemplo de la vida real

En una máquina que convierte grados Celsius a Fahrenheit con $F = \frac{9}{5}C + 32$, la conversión es biyectiva, por lo que se puede invertir (de Fahrenheit a Celsius) con $C = \frac{5}{9}(F - 32)$. Saber si una conversión de unidades es reversible permite a un técnico convertir y reconvertir sin perder información.

> [!tip] Relación con el curso
> La función biyectiva garantiza la reversibilidad de transformaciones, fundamental cuando se estandarizan variables o se transforman datos para aplicar pruebas estadísticas.
