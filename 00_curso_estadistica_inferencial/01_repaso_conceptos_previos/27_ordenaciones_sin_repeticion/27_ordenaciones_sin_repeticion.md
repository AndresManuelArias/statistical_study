---
titulo: "Ordenaciones sin repetición"
tipo: anotacion-video
tema: Ordenaciones sin repetición
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Ordenaciones sin Repetición

## 🎬 Datos del video
- **Título:** Ordenaciones sin repetición | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Ordenaciones+sin+repeticion+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Las ordenaciones sin repetición cuentan el número de formas de colocar $r$ elementos de $n$ disponibles, donde **el orden importa** y **no se repiten**. Se subdividen en variaciones $V(n,r)$ cuando $r < n$ y permutaciones $P(n) = n!$ cuando $r = n$.

## 🧮 Contenido

### Variaciones sin repetición — $V(n,r)$

Una **variación** $V(n,r)$ es el número de formas de ordenar $r$ elementos tomados de $n$ elementos **distintos**, donde:
- El **orden** importa.
- **No hay repetición** (cada elemento se usa como máximo una vez).

$$V(n,r) = \frac{n!}{(n-r)!} = n \times (n-1) \times (n-2) \times \cdots \times (n-r+1)$$

**¿Por qué?** La primera posición tiene $n$ opciones, la segunda $n-1$ (ya no podemos repetir), la tercera $n-2$, y así sucesivamente hasta completar $r$ posiciones.

### Permutaciones — $P(n) = n!$

Una **permutación** es el caso particular donde ordenamos **todos** los $n$ elementos ($r = n$):

$$P(n) = n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1$$

Es un caso de variación con $r = n$: $V(n,n) = \frac{n!}{(n-n)!} = \frac{n!}{0!} = n!$.

**Valores comunes de factoriales:**

| $n$ | $n!$ |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5040 |
| 8 | 40320 |

### Nota sobre $0!$
Por definición, $0! = 1$. Esto asegura que la fórmula $V(n,n) = \frac{n!}{0!} = n!$ sea consistente.

### Comparación con variaciones con repetición

| | Variación con repetición $VR(n,r)$ | Variación sin repetición $V(n,r)$ |
|---|---|---|
| Orden importa | ✅ | ✅ |
| Repetición permitida | ✅ | ❌ |
| Fórmula | $n^r$ | $\frac{n!}{(n-r)!}$ |

### Casos típicos de uso

| Situación | $n$ | $r$ | Fórmula |
|---|---|---|---|
| Podium de 3 entre 8 corredores | 8 | 3 | $V(8,3)$ |
| 5 personas sentadas en fila | 5 | 5 | $5!$ |
| 3 letras distintas para una sigla | 26 | 3 | $V(26,3)$ |

## 💡 Ejemplo numérico
De **7 personas** disponibles, se quieren formar un **pódium** de 1°, 2° y 3° lugar.

$$V(7,3) = \frac{7!}{(7-3)!} = \frac{7!}{4!} = \frac{7 \times 6 \times 5 \times \cancel{4!}}{\cancel{4!}} = 7 \times 6 \times 5 = 210$$

**Verificación:** 7 opciones para 1°, luego 6 para 2°, luego 5 para 3°: $7 \times 6 \times 5 = 210$. ✅

Si en cambio queremos ordenar **a las 7 personas en una fila**:
$$P(7) = 7! = 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 5040$$

## 🌍 Ejemplo de la vida real
En un **torneo de ajedrez** con 12 jugadores, se quieren premiar a los 3 mejores (oro, plata y bronce). El número de formas de asignar estos puestos es $V(12,3) = \frac{12!}{9!} = 12 \times 11 \times 10 = 1320$. Cada combinación de ganadores es una ordenación distinta porque el orden (quién queda 1°, 2°, 3°) importa.

> [!tip] Relación con el curso
> Las permutaciones y variaciones sin repetición son esenciales para calcular tamaños de espacios muestrales en problemas de probabilidad donde el orden de los elementos es relevante, como eventos en torneos o ranking.

### Ejemplo con palabras
¿Cuántas formas hay de reorganizar las letras de la palabra **"CASA"**?
$$P(4) = 4! = 24 \text{ ordenaciones}$$

Pero note que la letra "A" se repite 2 veces. El número de ordenaciones **distintas** es:
$$\frac{4!}{2!} = \frac{24}{2} = 12 \text{ palabras distintas}$$

Cuando hay elementos repetidos, dividimos por las permutaciones de los elementos idénticos.

### Ejemplo con selección de libros
De una estantería con **9 libros** distintos, un estudiante quiere elegir **4** para llevarse a la biblioteca y ordenarlos en su mochila (importa el orden de apilamiento):

$$V(9,4) = \frac{9!}{5!} = 9 \times 8 \times 7 \times 6 = 3\,024$$

Si solo importa **cuáles** libros lleva (no el orden):
$$C(9,4) = \frac{V(9,4)}{4!} = \frac{3\,024}{24} = 126$$

### Nota sobre factoriales grandes
Para $n$ grande, $n!$ crece enormemente rápido:
$$10! = 3\,628\,800$$
$$15! = 1\,307\,674\,368\,000$$

Por eso, en la práctica se usan **logaritmos de factoriales** o **aproximaciones de Stirling**:
$$n! \approx \sqrt{2\pi n}\left(\frac{n}{e}\right)^n$$

Esta aproximación es muy precisa para valores grandes de $n$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué caracteriza a las variaciones sin repetición?

a) El orden importa y se permiten repeticiones
b) El orden no importa y no se permiten repeticiones
c) El orden importa y no se permiten repeticiones
d) El orden no importa y se permiten repeticiones

> **c) El orden importa y no se permiten repeticiones**

---

### Pregunta 2

¿Cuál es la fórmula para $V(n,r)$?

a) $n^r$
b) $\frac{n!}{(n-r)!}$
c) $\frac{n!}{r!}$
d) $n \times r$

> **b) $\frac{n!}{(n-r)!}$**

---

### Pregunta 3

¿Cuál es el valor de $V(5,2)$?

a) 10
b) 25
c) 20
d) 120

> **c) 20**

---

### Pregunta 4

¿Cuántas permutaciones hay de 3 libros distintos?

a) 3
b) 6
c) 9
d) 27

> **b) 6**

---

### Pregunta 5

Si $r = n$ en una variación sin repetición, ¿qué tipo de ordenación resulta?

a) Variación con repetición
b) Combinación
c) Permutación
d) Variación sin repetición con redundancia

> **c) Permutación**

---

### Pregunta 6

¿Cuál es el valor de $V(10,3)$?

a) 30
b) 720
c) 210
d) 1000

> **b) 720**

---

### Pregunta 7

En $V(n,r)$, ¿por qué la segunda posición tiene $n-1$ opciones?

a) Porque se eliminó un elemento en la primera posición
b) Porque siempre hay una opción menos
c) Porque el orden no importa
d) Porque los elementos se repiten

> **a) Porque se eliminó un elemento en la primera posición**

---

### Pregunta 8

En un podio de 3 lugares entre 8 corredores, ¿cuántas formas hay de asignar los puestos?

a) 56
b) 336
c) 512
d) 24

> **b) 336**

---

### Pregunta 9

Según el ejemplo del archivo, ¿cuántas formas hay de formar un podio de 1°, 2° y 3° lugar entre 7 personas?

a) 21
b) 35
c) 210
d) 5040

> **c) 210**

---

### Pregunta 10

¿Cuál es la diferencia principal entre $VR(n,r)$ y $V(n,r)$?

a) $VR(n,r)$ permite repetición, $V(n,r)$ no
b) $VR(n,r)$ no importa el orden, $V(n,r)$ sí
c) $VR(n,r)$ siempre tiene más resultados que $V(n,r)$
d) $VR(n,r)$ usa factoriales, $V(n,r)$ no

> **a) $VR(n,r)$ permite repetición, $V(n,r)$ no**
