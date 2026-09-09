---
titulo: "Combinaciones"
tipo: anotacion-video
tema: Combinaciones
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Combinaciones

## 🎬 Datos del video
- **Título:** Combinaciones | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Combinaciones+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Las combinaciones $C(n,r)$ cuentan el número de formas de elegir $r$ elementos de $n$ elementos **distintos**, donde el **orden no importa** y **no hay repetición**. Se aplican a comités, equipos, lotería y otros problemas de selección.

## 🧮 Contenido

### Definición
Una **combinación** $C(n,r)$ es el número de subconjuntos de $r$ elementos que se pueden formar a partir de un conjunto de $n$ elementos **distintos**, donde:
- El **orden NO importa** (una elección es igual a otra si contiene los mismos elementos).
- **No hay repetición** (cada elemento se elige como máximo una vez).

### Fórmula

$$C(n,r) = \binom{n}{r} = \frac{n!}{r!\,(n-r)!}$$

Esta expresión se lee "n combinaciones de r" o "n elementos tomados de a r".

### Propiedades fundamentales

**1. Propiedad de simetría:**
$$C(n,r) = C(n, n-r)$$

Elige $r$ elementos para incluir es lo mismo que elegir $n-r$ para excluir.

**2. Casos especiales:**
$$C(n,0) = 1 \quad \text{(solo hay un subconjunto vacío)}$$
$$C(n,1) = n \quad \text{(elegir 1 de n)}$$
$$C(n,n) = 1 \quad \text{(solo hay un subconjunto con todos los elementos)}$$
$$C(n,n-1) = n \quad \text{(excluir 1 de n)}$$

**3. Relación con permutaciones:**
$$C(n,r) = \frac{V(n,r)}{r!} = \frac{V(n,r)}{P(r)}$$

Una combinación es una variación donde nos "olvidamos" del orden dividiendo entre las $r!$ formas de ordenar los $r$ elementos.

### ¿Por qué dividir entre $r!$?
Cuando calculamos $V(n,r)$, contamos cada grupo de $r$ elementos en todas sus permutaciones posibles. Como en una combinación el orden no importa, cada grupo aparece $r!$ veces, así que dividimos para eliminar esas repeticiones.

### Casos típicos de uso

| Situación | $n$ | $r$ | $C(n,r)$ |
|---|---|---|---|
| Elegir 3 de 10 candidatos | 10 | 3 | $C(10,3)$ |
| Elegir 2 de 5 colores | 5 | 2 | $C(5,2)$ |
| Lotería: 6 de 45 | 45 | 6 | $C(45,6)$ |

## 💡 Ejemplo numérico
De **10 estudiantes**, se quieren elegir **3** para formar un comité organizador. El orden no importa (todos son miembros, sin cargo específico):

$$C(10,3) = \frac{10!}{3!\,7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = \frac{720}{6} = 120$$

Hay **120 combinaciones** posibles de comité.

**Verificación con la propiedad de simetría:**
$$C(10,3) = C(10,7) = \frac{10!}{7!\,3!} = 120 \quad \checkmark$$

Elegir 3 para incluir equivale a elegir 7 para excluir.

**Otro ejemplo:** Elegir **2 de 5** candidatos para un premio:
$$C(5,2) = \frac{5!}{2!\,3!} = \frac{5 \times 4}{2 \times 1} = 10$$

## 🌍 Ejemplo de la vida real
En una **lotería** tradicional, un jugador marca **6 números de un total de 45**. El número de combinaciones posibles es:

$$C(45,6) = \frac{45!}{6!\,39!} = \frac{45 \times 44 \times 43 \times 42 \times 41 \times 40}{6 \times 5 \times 4 \times 3 \times 2 \times 1}$$
$$= \frac{5\,864\,443\,200}{720} = 8\,145\,060$$

Solo hay **1** combinación ganadora entre más de **8 millones** posibles. La probabilidad de ganar la lotería con un boleto es:

$$P(\text{ganar}) = \frac{1}{8\,145\,060} \approx 0.000\,000\,123$$

## 🌍 Ejemplo de la vida real (adicional)
Un **director de equipo de fútbol** tiene 16 jugadores en su plantilla y debe elegir **11** para el once titular. Las opciones son:

$$C(16,11) = C(16,5) = \frac{16 \times 15 \times 14 \times 13 \times 12}{5 \times 4 \times 3 \times 2 \times 1} = \frac{524\,160}{120} = 4\,368$$

Más de 4 mil formas de elegir el once inicial.

> [!tip] Relación con el curso
> Las combinaciones se usan constantemente en probabilidad para contar muestras posibles sin orden, como en el muestreo sin reposición, un pilar de la inferencia estadística.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué representa una combinación $C(n,r)$?

a) El número de formas de ordenar los $n$ elementos del conjunto
b) El número de formas de elegir $r$ elementos de $n$ elementos distintos donde el orden NO importa y no hay repetición
c) El número de formas de elegir $r$ elementos de $n$ elementos distintos donde el orden sí importa
d) El número de formas de elegir $r$ elementos permitiendo repetir cada elemento varias veces

> **b) El número de formas de elegir $r$ elementos de $n$ elementos distintos donde el orden NO importa y no hay repetición**

---

### Pregunta 2

¿Cuál es la fórmula correcta de una combinación $C(n,r)$?

a) $C(n,r) = \frac{n!}{r!\,(n-r)!}$
b) $C(n,r) = \frac{n!}{r!}$
c) $C(n,r) = \frac{n!}{(n-r)!}$
d) $C(n,r) = \frac{r!}{n!\,(n-r)!}$

> **a) $C(n,r) = \frac{n!}{r!\,(n-r)!}$**

---

### Pregunta 3

Calcular $\binom{4}{2}$.

a) 4
b) 6
c) 8
d) 12

> **b) 6**

---

### Pregunta 4

Calcular $\binom{5}{3}$.

a) 10
b) 15
c) 20
d) 25

> **a) 10**

---

### Pregunta 5

¿Cuál de las siguientes combinaciones es igual a $\binom{10}{3}$?

a) $\binom{10}{2}$
b) $\binom{3}{10}$
c) $\binom{10}{7}$
d) $\binom{7}{10}$

> **c) $\binom{10}{7}$**

---

### Pregunta 6

¿Cómo se relaciona una combinación con la variación $V(n,r)$?

a) $C(n,r) = V(n,r) \times r!$
b) $C(n,r) = \frac{V(n,r)}{r!}$
c) $C(n,r)$ y $V(n,r)$ siempre son iguales
d) $C(n,r) = n! - V(n,r)$

> **b) $C(n,r) = \frac{V(n,r)}{r!}$**

---

### Pregunta 7

¿Cuánto vale la combinación $\binom{n}{1}$?

a) 0
b) 1
c) $n$
d) $n!$

> **c) $n$**

---

### Pregunta 8

Se quieren elegir 3 de 10 estudiantes para formar un comité. ¿Cuántas combinaciones posibles hay?

a) 720
b) 30
c) 60
d) 120

> **d) 120**

---

### Pregunta 9

En una lotería un jugador marca 6 números de un total de 45. ¿Cuántas combinaciones posibles hay?

a) 8,145,060
b) 5,864,443,200
c) 720
d) 45

> **a) 8,145,060**

---

### Pregunta 10

Un director de fútbol elige 11 jugadores de una plantilla de 16. ¿Cuántos equipos iniciales distintos puede formar?

a) 524,160
b) 4,368
c) 120
d) 16

> **b) 4,368**
