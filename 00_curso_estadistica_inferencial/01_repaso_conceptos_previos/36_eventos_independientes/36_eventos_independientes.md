---
titulo: Eventos Independientes
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Eventos Independientes

## 🎬 Datos del video
- **Título:** Eventos Independientes | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Eventos+Independientes+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Dos eventos son independientes si la ocurrencia de uno no afecta la probabilidad del otro. La independencia se verifica cuando $P(A \cap B) = P(A) \cdot P(B)$, lo cual es un concepto **muy diferente** de que los eventos sean disjuntos (mutuamente excluyentes).

## 🧮 Contenido

### Definición formal
Dos eventos $A$ y $B$ son **independientes** si y solo si:

$$P(A \cap B) = P(A) \cdot P(B)$$

Equivalentemente (cuando $P(B) > 0$):
$$P(A|B) = P(A)$$

Esto significa: saber que $B$ ocurrió **no cambia** la probabilidad de $A$.

### Verificación de independencia
Para verificar si dos eventos son independientes, existen tres métodos equivalentes:
1. Calcular $P(A \cap B)$ y comparar con $P(A) \cdot P(B)$.
2. Calcular $P(A|B)$ y verificar que es igual a $P(A)$.
3. Calcular $P(B|A)$ y verificar que es igual a $P(B)$.

### Independencia múltiple
Tres eventos $A$, $B$, $C$ son **mutuamente independientes** si se cumplen **todas** las condiciones:

$$P(A \cap B) = P(A)P(B)$$
$$P(A \cap C) = P(A)P(C)$$
$$P(B \cap C) = P(B)P(C)$$
$$P(A \cap B \cap C) = P(A)P(B)P(C)$$

Cuidado: que cada par sea independiente **no garantiza** la independencia conjunta.

### Independencia vs. disjunción — ¡No confundir!

| Propiedad | Independientes | Disjuntos (excluyentes) |
|---|---|---|
| Relación | Ocurrencia de uno no afecta al otro | **No pueden** ocurrir a la vez |
| Fórmula clave | $P(A \cap B) = P(A)P(B)$ | $A \cap B = \emptyset$, $P(A \cap B) = 0$ |
| Implicación mutua | No implica disjunción | No implica independencia |
| Caso especial | Si $P(A)>0$ y $P(B)>0$: nunca son disjuntos | Si son disjuntos y con prob. > 0, **no** son independientes |

**Regla práctica:** Si $P(A) > 0$, $P(B) > 0$ y $A \cap B = \emptyset$, entonces $A$ y $B$ **no pueden** ser independientes, porque $P(A|B) = 0 \neq P(A)$.

## 💡 Ejemplo numérico
Se lanzan dos dados equilibrados (6 caras cada uno). Definimos:
- $A$ = "el dado 1 muestra 4", $P(A) = \frac{1}{6}$
- $B$ = "el dado 2 muestra un número par" = $\{2, 4, 6\}$, $P(B) = \frac{3}{6} = \frac{1}{2}$

¿Son independientes? Verificamos:
$$P(A \cap B) = \frac{1}{6} \times \frac{1}{2} = \frac{1}{12}$$

Conteo directo: los pares $(4,2)$, $(4,4)$, $(4,6)$ son los casos favorables. Son 3 de 36 posibles:
$$P(A \cap B) = \frac{3}{36} = \frac{1}{12} \checkmark$$

Comprobación condicional: $P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/12}{1/2} = \frac{1}{6} = P(A)$ ✓

**Ejemplo de dependencia:**
Un dado una vez: $A$ = "sale par" ($\{2,4,6\}$), $D$ = "sale 6" ($\{6\}$).
$P(A) = \frac{3}{6} = 0.5$, $P(D) = \frac{1}{6}$.
$A \cap D = \{6\}$, $P(A \cap D) = \frac{1}{6}$.
$P(A) \cdot P(D) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12} \neq \frac{1}{6}$. **No son independientes.**

## 🌍 Ejemplo de la vida real
Una línea de producción ensambla dos componentes de forma simultánea. El componente A tiene una tasa de falla del 2% y el componente B del 3%, y ambos fallan de forma independiente. La probabilidad de que **ambos** fallen al mismo tiempo es:

$$P(A \cap B) = P(A) \cdot P(B) = 0.02 \times 0.03 = 0.0006 = 0.06\%$$

Esto es extremadamente raro. La independencia permite calcular la probabilidad de fallo del sistema como:
$P(\text{sistema falla}) = 1 - P(\text{ambos funcionan}) = 1 - (0.98)(0.97) = 1 - 0.9506 = 0.0494$

Es decir, ~4.94% de probabilidad de que al menos uno falle.

> [!tip] Relación con el curso
> La independencia es clave para construir modelos estadísticos como la distribución binomial (ensayos Bernoulli independientes) y para simplificar cálculos en pruebas de hipótesis.
