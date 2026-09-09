---
titulo: Muestreo Aleatorio Simple
tipo: anotacion-video
tema: Muestreo Aleatorio Simple
tags:
  - estadistica-inferencial
  - muestreo
---

# Muestreo Aleatorio Simple

## 🎬 Datos del video
- **Título:** Muestreo Aleatorio Simple | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Muestreo+Aleatorio+Simple+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El muestreo aleatorio simple es el método fundamental del muestreo probabilístico: cada elemento de la población tiene exactamente la misma probabilidad de ser seleccionado. Se puede realizar con tablas de números aleatorios o con generadores computacionales, y puede ser con o sin reemplazo.

## 🧮 Contenido

### Definición formal

En un muestreo aleatorio simple de tamaño $n$ de una población de tamaño $N$, cada subconjunto de $n$ individuos tiene la misma probabilidad de ser seleccionado.

**Probabilidad de selección individual (sin reemplazo):**

$$P(\text{elemento } i \text{ se selecciona}) = \frac{n}{N}$$

### Número de muestras posibles

El número de muestras (subconjuntos) de tamaño $n$ que se pueden formar de una población de tamaño $N$ es:

$$\binom{N}{n} = \frac{N!}{n! (N - n)!}$$

Cada una de ellas es igualmente probable de ser seleccionada.

### Métodos de selección

1. **Tablas de números aleatorios:** Se asigna un número a cada individuo y se leen dígitos al azar de la tabla.
2. **Generador de números aleatorios:** Función computacional que genera secuencias pseudoaleatorias uniformes.
3. **Método de la urna:** Se escriben los nombres en papelitos y se extraen al azar (método clásico para poblaciones pequeñas).

### Con y sin reemplazo

| Tipo | Característica | Uso |
|---|---|---|
| Sin reemplazo | Un individuo no puede ser seleccionado dos veces | Muestreo más común en encuestas |
| Con reemplazo | Un individuo puede ser seleccionado múltiples veces | Menos común, usado en bootstrapping |

La diferencia es relevante cuando $n$ es una fracción significativa de $N$ (más del 5% de la población). En ese caso se aplica el factor de corrección por población finita:

$$FCP = \sqrt{\frac{N - n}{N - 1}}$$

### Procedimiento paso a paso

1. Numerar a todos los individuos de la población de $1$ a $N$.
2. Determinar el tamaño de muestra $n$.
3. Generar $n$ números aleatorios distintos entre $1$ y $N$.
4. Seleccionar los individuos correspondientes a esos números.

### Ventajas

- Simple de entender y de implementar.
- No requiere información previa sobre la población.
- Produce muestras sin sesgo sistemático.

### Limitaciones

- Requiere una lista completa de la población.
- Con poblaciones muy dispersas, el costo logístico puede ser alto.

## 💡 Ejemplo numérico

Un grupo de 30 estudiantes ($N = 30$) se numeran del 1 al 30. Se quiere seleccionar una muestra de $n = 5$ sin reemplazo.

Usando un generador aleatorio se obtienen: 7, 23, 12, 3, 18.

**Probabilidad de que cualquier estudiante sea seleccionado:**

$$P = \frac{n}{N} = \frac{5}{30} = \frac{1}{6} \approx 0.1667$$

**Número de muestras posibles:**

$$\binom{30}{5} = \frac{30!}{5! \cdot 25!} = 142,506$$

Todos los estudiantes tienen exactamente la misma probabilidad de ser seleccionados.

## 🌍 Ejemplo de la vida real

Una universidad tiene un directorio de 2,500 estudiantes activos. El administrador necesita seleccionar 125 estudiantes para una encuesta sobre infraestructura. Asigna a cada estudiante un número del 0001 al 2500 y usa un generador de números aleatorios para producir 125 números únicos en ese rango. Cada estudiante tiene probabilidad $125/2500 = 0.05$ (5%) de ser incluido.

> [!tip] Relación con el curso
> El muestreo aleatorio simple es la base de todos los métodos de muestreo probabilístico. Las fórmulas de distribuciones muestrales asumen que la muestra fue obtenida mediante este método.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

En un muestreo aleatorio simple de tamaño $n$ de una población de tamaño $N$, ¿cuál es la probabilidad de que un elemento específico sea seleccionado?

a) $\frac{N}{n}$
b) $\frac{n}{N}$
c) $\frac{1}{N}$
d) $\frac{1}{n}$

> **b) $\frac{n}{N}$**

---

### Pregunta 2

Para una población de $N = 40$ y una muestra de $n = 10$, ¿cuál es la probabilidad de que un elemento específico sea seleccionado?

a) 0.10
b) 0.40
c) 0.25
d) 0.025

> **c) 0.25**

---

### Pregunta 3

En un muestreo aleatorio simple sin reemplazo, ¿cuál es la probabilidad de que el mismo elemento sea seleccionado dos veces?

a) $\frac{1}{N}$
b) $\frac{1}{n}$
c) 0
d) 1

> **c) 0**

---

### Pregunta 4

El número de muestras posibles de tamaño $n$ que se pueden formar de una población de tamaño $N$ se calcula con:

a) $N^n$
b) $n^N$
c) $\binom{N}{n}$
d) $\binom{n}{N}$

> **c) $\binom{N}{n}$**

---

### Pregunta 5

Para una población de $N = 40$ y una muestra de $n = 10$, ¿cuántas muestras diferentes son posibles?

a) 400
b) 847,660,528
c) 10,000
d) 1,000,000

> **b) 847,660,528**

---

### Pregunta 6

La fracción de muestreo se define como:

a) $\frac{n}{N}$
b) $\frac{N}{n}$
c) $n \times N$
d) $n + N$

> **a) $\frac{n}{N}$**

---

### Pregunta 7

Para una población de $N = 40$ y una muestra de $n = 10$, ¿cuál es la fracción de muestreo?

a) 0.25
b) 0.40
c) 0.10
d) 0.025

> **a) 0.25**

---

### Pregunta 8

¿Cuál de los siguientes NO es un método utilizado para realizar un muestreo aleatorio simple?

a) Tablas de números aleatorios
b) Generadores de números aleatorios por computadora
c) Método de la urna
d) Muestreo por conveniencia

> **d) Muestreo por conveniencia**

---

### Pregunta 9

¿Cuál es una limitación del muestreo aleatorio simple?

a) Requiere una lista completa de la población
b) Siempre se realiza con reemplazo
c) Produce muestras sesgadas
d) Requiere información previa sobre la población

> **a) Requiere una lista completa de la población**

---

### Pregunta 10

En una población de $N = 2,500$ estudiantes, se selecciona una muestra de $n = 125$. ¿Cuál es la probabilidad de que un estudiante específico sea seleccionado?

a) 0.05
b) 0.125
c) 0.025
d) 0.5

> **a) 0.05**
