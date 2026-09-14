---
titulo: "Ordenaciones con repetición"
tipo: anotacion-video
tema: Ordenaciones con repetición
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Ordenaciones con Repetición

## 🎬 Datos del video
- **Título:** Ordenaciones con repetición | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Ordenaciones+con+repeticion+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/AzNc3zF2RcM?si=PbDGzVH0swBOQ0gi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
Las ordenaciones con repetición (variaciones con repetición) se usan cuando seleccionamos $r$ elementos de $n$ tipos, el **orden importa** y los elementos **pueden repetirse**. La fórmula es $VR(n,r) = n^r$.

## 🧮 Contenido

### Definición
Una **variación con repetición** $VR(n,r)$ es el número de formas de ordenar $r$ elementos seleccionados de un conjunto de $n$ elementos **distintos**, donde:
- El **orden** de los elementos importa.
- Los elementos **pueden repetirse**.

### Fórmula

$$VR(n,r) = n^r$$

Cada una de las $r$ posiciones puede ser ocupada por cualquiera de los $n$ elementos, y las opciones son independientes entre sí.

### ¿Por qué $n^r$?
Si tenemos $r$ casillas que rellenar y en cada casilla podemos elegir cualquiera de los $n$ elementos:

$$\underbrace{n}_{\text{posición 1}} \times \underbrace{n}_{\text{posición 2}} \times \cdots \times \underbrace{n}_{\text{posición r}} = n^r$$

### Casos típicos de uso

| Situación | $n$ | $r$ | Fórmula |
|---|---|---|---|
| Contraseñas de 5 caracteres con 26 letras | 26 | 5 | $26^5$ |
| PIN de 4 dígitos (0-9) | 10 | 4 | $10^4$ |
| Lanzar un dado 3 veces | 6 | 3 | $6^3$ |
| Lanzar una moneda 10 veces | 2 | 10 | $2^{10}$ |

### Relación con el principio multiplicativo
Cada posición es una etapa independiente. El **principio multiplicativo** establece que si hay $n_1$ formas de hacer la primera tarea, $n_2$ formas de hacer la segunda, etc., el número total de formas es $n_1 \times n_2 \times \cdots$. En las variaciones con repetición, todas las etapas tienen $n$ opciones, por lo que:

$$VR(n,r) = \underbrace{n \times n \times \cdots \times n}_{r \text{ veces}} = n^r$$

## 💡 Ejemplo numérico
Un **candado electrónico** tiene 3 ruedas, cada una con los dígitos del 0 al 9. ¿Cuántas combinaciones de código existen?

$$n = 10 \quad (\text{dígitos: 0,1,...,9}), \quad r = 3$$
$$VR(10,3) = 10^3 = 1000$$

Los códigos van desde 000 hasta 999.

Si el candado tuviera **4 ruedas**:
$$VR(10,4) = 10^4 = 10\,000$$

## 🌍 Ejemplo de la vida real
Una **placa vehicular** en cierto país tiene 3 letras seguidas de 3 dígitos. Cada posición de letra puede ser cualquiera de 26 caracteres, y cada posición de dígito puede ser de 10 opciones:

$$VR(26,3) \times VR(10,3) = 26^3 \times 10^3 = 17\,576 \times 1000 = 17\,576\,000$$

Más de 17 millones de placas posibles.

> [!tip] Relación con el curso
> Las ordenaciones con repetición son fundamentales para calcular probabilidades en espacios muestrales donde los elementos se repiten, como lanzamientos de dados o generación de contraseñas, conceptos usados en inferencia para espacios equiprobables.

### Ejemplo con código de colores
Un **sistema de identificación** usa códigos de 4 caracteres, donde cada posición puede ser un número (0-9) o una letra (A-Z), en total 36 posibilidades por posición. Con repetición permitida:

$$VR(36,4) = 36^4 = 1\,679\,616$$

Más de 1.6 millones de códigos posibles.

### Ejemplo con lanzamientos de moneda
Si lanzamos una moneda **4 veces**, el espacio muestral tiene:
$$VR(2,4) = 2^4 = 16 \text{ resultados}$$

Listando todos: CCCC, CCCZ, CCZC, CCZZ, CZCC, CZCZ, CZZC, CZZZ, ZCCC, ZCCZ, ZCZC, ZCZZ, ZZCC, ZZCZ, ZZZC, ZZZZ.

### ¿Por qué importa en probabilidad?
Si cada resultado es igualmente probable, la probabilidad de cualquier evento se calcula dividiendo los casos favorables entre $VR(n,r)$. Por ejemplo, la probabilidad de que en 3 lanzamientos de dado salgan todos 6 es:
$$P(\text{todos 6}) = \frac{1}{6^3} = \frac{1}{216} \approx 0.00463$$

Solo hay **1** caso favorable de **216** posibles.

### Caso especial: $VR(n,2) = n^2$
Si solo elegimos 2 elementos con repetición, el número total es $n^2$. Ejemplo: elegir un plato principal (3 opciones) y una bebida (4 opciones) de un menú, con repetición (se puede pedir el mismo plato dos veces en un día):
$$3^2 \times 4^2 = 9 \times 16 = 144 \text{ combinaciones en dos días}$$

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuáles son las dos condiciones que definen una variación con repetición?

a) El orden importa y los elementos NO se pueden repetir.
b) El orden importa y los elementos SÍ pueden repetirse.
c) El orden NO importa y los elementos se pueden repetir.
d) El orden NO importa y los elementos NO se pueden repetir.

> **b) El orden importa y los elementos SÍ pueden repetirse.**

---

### Pregunta 2

¿Cuál es la fórmula para calcular el número de ordenaciones con repetición de $r$ elementos elegidos de $n$ tipos?

a) $VR(n,r) = \frac{n!}{r!}$
b) $VR(n,r) = \frac{n!}{(n-r)!}$
c) $VR(n,r) = n^r$
d) $VR(n,r) = r^n$

> **c) $VR(n,r) = n^r$**

---

### Pregunta 3

Un candado electrónico tiene 4 ruedas, cada una con los dígitos del 0 al 9. ¿Cuántos códigos diferentes se pueden formar?

a) 1000
b) 40
c) 10000
d) 4000

> **c) 10000**

---

### Pregunta 4

¿Cuántas contraseñas de 3 letras (usando el alfabeto de 26 letras, con repetición permitida) se pueden crear?

a) 78
b) 15600
c) 17576
d) 2600

> **c) 17576**

---

### Pregunta 5

Se lanzan dos dados de 6 caras. ¿Cuántos resultados diferentes son posibles en total?

a) 12
b) 36
c) 64
d) 30

> **b) 36**

---

### Pregunta 6

¿Qué principio justifica que $VR(n,r) = n \times n \times \cdots \times n$ ($r$ veces)?

a) Principio de inclusión-exclusión.
b) Principio multiplicativo.
c) Principio del palomar.
d) Principio deBayes.

> **b) Principio multiplicativo.**

---

### Pregunta 7

Si lanzamos una moneda 4 veces, ¿cuántos resultados diferentes tiene el espacio muestral?

a) 8
b) 16
c) 32
d) 64

> **b) 16**

---

### Pregunta 8

¿En cuál de estos casos se aplica una variación con repetición?

a) Formar un comité de 3 personas de un grupo de 10.
b) Elegir el orden de finish de 5 caballos en una carrera sin empates.
c) Generar un PIN de 4 dígitos con los números del 0 al 9.
d) Seleccionar 3 libros de una estantería de 8.

> **c) Generar un PIN de 4 dígitos con los números del 0 al 9.**

---

### Pregunta 9

Un restaurante ofrece 4 platos principales. Si un cliente elige 3 veces un plato (puede repetir), ¿cuántas secuencias de elección son posibles?

a) 12
b) 64
c) 24
d) 48

> **b) 64**

---

### Pregunta 10

¿Cuántas combinaciones tiene un candado de 3 ruedas numéricas (dígitos 0-9)?

a) 30
b) 100
c) 1000
d) 10000

> **c) 1000**
