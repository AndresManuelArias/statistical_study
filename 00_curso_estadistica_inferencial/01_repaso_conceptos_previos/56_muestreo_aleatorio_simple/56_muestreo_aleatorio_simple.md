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

$$\binom{30}{5} = \frac{30!}{5! \cdot 25!} = 142{,}506$$

Todos los estudiantes tienen exactamente la misma probabilidad de ser seleccionados.

## 🌍 Ejemplo de la vida real

Una universidad tiene un directorio de 2,500 estudiantes activos. El administrador necesita seleccionar 125 estudiantes para una encuesta sobre infraestructura. Asigna a cada estudiante un número del 0001 al 2500 y usa un generador de números aleatorios para producir 125 números únicos en ese rango. Cada estudiante tiene probabilidad $125/2500 = 0.05$ (5%) de ser incluido.

> [!tip] Relación con el curso
> El muestreo aleatorio simple es la base de todos los métodos de muestreo probabilístico. Las fórmulas de distribuciones muestrales asumen que la muestra fue obtenida mediante este método.
