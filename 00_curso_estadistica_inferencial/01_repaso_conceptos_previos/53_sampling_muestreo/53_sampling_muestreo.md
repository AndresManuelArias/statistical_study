---
titulo: Sampling - Muestreo
tipo: anotacion-video
tema: Muestreo en Estadística Inferencial
tags:
  - estadistica-inferencial
  - muestreo
---

# Sampling - Muestreo

## 🎬 Datos del video
- **Título:** Sampling | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Sampling+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

El muestreo es el proceso de seleccionar un subconjunto representativo de una población para hacer inferencias sobre ella. Se estudian las razones para muestrear en lugar de censar, la diferencia entre población y muestra, y los conceptos de sesgo y representatividad.

## 🧮 Contenido

### ¿Qué es el muestreo?

El muestreo es el procedimiento estadístico mediante el cual se selecciona un subgrupo de individuos de una población con el fin de estimar características de toda la población. Es la piedra angular de la estadística inferencial y se aplica en prácticamente todas las ciencias empíricas.

### ¿Por qué se muestrea en lugar de censar?

Un censo completo busca medir TODOS los elementos de la población. En la práctica, esto casi nunca es viable por las siguientes razones:

- **Costo elevado:** Un censo puede costar millones de dólares. Encuestar a 100 millones de personas puede costar cientos de veces más que una muestra de 1,000 individuos bien seleccionada.
- **Tiempo excesivo:** Analizar toda la población puede tomar meses o años completos. Una muestra de tamaño adecuado se puede procesar en pocos días.
- **Imposibilidad física:** Algunas poblaciones son literalmente inaccesibles: todos los clientes de una plataforma digital a nivel mundial, peces en el océano, estrellas observables.
- **Destrucción del producto:** Si el test destruye el producto (prueba de resistencia de materiales, prueba de vida útil), no se puede censar porque no quedarían productos para vender.

### Población vs. Muestra

| Concepto | Definición | Ejemplo |
|---|---|---|
| Población (N) | Conjunto completo de individuos de interés | Todos los estudiantes de una universidad |
| Muestra (n) | Subconjunto seleccionado de la población | 200 estudiantes elegidos al azar |
| Parámetro | Valor numérico que describe la población | $\mu$ = media poblacional |
| Estadístico | Valor numérico que describe la muestra | $\bar{X}$ = media muestral |

#### Gráfico: Población vs. muestra (ejemplo de la universidad)

```chart
type: bar
labels: ["Población (N = 5,000)", "Muestra (n = 250)"]
series:
  - title: "Individuos"
    data: [5000, 250]
width: 90%
labelColors: true
fill: true
beginAtZero: true
```

**Interpretación:**
- La **población** ($N = 5{,}000$) es el conjunto completo que nos interesa conocer.
- La **muestra** ($n = 250$) es un subconjunto representativo: en lugar de censar a los 5,000, se estudian 250 y se **infiere** el valor de $\mu$ poblacional.
- Con $n = 250$ de $N = 5{,}000$ se estudia solo el 5% de la población, suficiente para estimar la edad promedio $\mu = 21.5$ años con un sesgo de solo $-0.2$ años.

### Notación clave

- $N$ = tamaño de la población
- $n$ = tamaño de la muestra (siempre $n < N$)
- $\mu$ = media poblacional (parámetro, generalmente desconocido)
- $\bar{X}$ = media muestral (estadístico, calculable)
- $p$ = proporción poblacional (parámetro)
- $\hat{p}$ = proporción muestral (estadístico)

### Sesgo y Representatividad

Una muestra es **representativa** cuando refleja fielmente las características de la población. El **sesgo** ocurre cuando la selección sistemáticamente favorece ciertos grupos sobre otros:

- **Sesgo de selección:** Solo se eligen individuos accesibles.
- **Sesgo de no respuesta:** Ciertos grupos no contestan la encuesta.
- **Sesgo de acompañamiento:** El investigador influye en las respuestas.

El sesgo se cuantifica como la diferencia entre el valor esperado del estadístico y el parámetro real:

$$\text{Sesgo} = \bar{X}_{\text{muestra}} - \mu_{\text{población}}$$

Una muestra sin sesgo cumple $E(\bar{X}) = \mu$.

### Censos históricos famosos

Algunos censos exitosos muestran la complejidad del trabajo a gran escala:

- El censo de Estados Unidos se realiza cada 10 años y cuesta miles de millones de dólares.
- El censo de India toma meses y requiere cientos de miles de enumeradores.
- El censo de China es el más grande del mundo, con más de 1,400 millones de personas.

## 💡 Ejemplo numérico

Una universidad tiene $N = 5,000$ estudiantes. Se toma una muestra aleatoria de $n = 250$ y se obtiene una edad promedio de $\bar{X} = 21.3$ años. La media poblacional real es $\mu = 21.5$ años.

$$\text{Sesgo} = 21.3 - 21.5 = -0.2 \text{ años}$$

La muestra subestimó ligeramente la edad promedio. El sesgo es pequeño y probablemente se debe al azar de la selección, no a un problema sistemático en el método de muestreo.

## 🌍 Ejemplo de la vida real

Una cadena de cafeterías quiere conocer la satisfacción de sus clientes. En lugar de encuestar a los 2,000,000 de clientes mensuales, selecciona una muestra aleatoria de 800 clientes. Obtiene que el 82% está satisfecho. El parámetro poblacional desconocido $p$ se estima con el estadístico $\hat{p} = 0.82$.

> [!tip] Relación con el curso
> El muestreo es la base de la estadística inferencial: a partir de una muestra, se hace inferencia sobre parámetros poblacionales como la media $\mu$ o la proporción $p$. Sin un muestreo correcto, no hay inferencia válida.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué es el muestreo en el contexto de la estadística inferencial?

a) Medir todos los elementos de un grupo de interés
b) Seleccionar un subconjunto representativo de una población para hacer inferencias
c) Calcular la media de una población completa
d) Eliminar los valores atípicos de un conjunto de datos

> **b) Seleccionar un subconjunto representativo de una población para hacer inferencias**

---

### Pregunta 2

¿Cuál de las siguientes razones NO justifica el uso de un muestreo en lugar de un censo?

a) El censo tiene un costo excesivamente elevado
b) La población es demasiado grande para ser encuestada en un plazo razonable
c) El muestreo siempre produce resultados más precisos que un censo
d) El proceso de medición destruye el producto estudiado

> **c) El muestreo siempre produce resultados más precisos que un censo**

---

### Pregunta 3

En el ejemplo del video, los 200 estudiantes elegidos al azar de una universidad representan:

a) La población total de la universidad
b) El parámetro poblacional
c) Una muestra de la población
d) El censo completo

> **c) Una muestra de la población**

---

### Pregunta 4

Un censo completo de una población de 100 millones de personas puede costar cientos de veces más que una muestra de 1,000 individuos. Esta afirmación ilustra principalmente la razón de:

a) Imposibilidad física de acceder a la población
b) Destrucción del producto durante la prueba
c) Costo elevado del censo
d) Tiempo excesivo del censo

> **c) Costo elevado del censo**

---

### Pregunta 5

Una cadena de cafeterías con 2,000,000 de clientes mensuales selecciona 800 clientes al azar para encuestar su satisfacción. En este caso, la población y la muestra son, respectivamente:

a) 800 clientes encuestados y los 2,000,000 de clientes mensuales
b) 2,000,000 de clientes mensuales y los 800 clientes encuestados
c) Los clientes satisfechos y los clientes insatisfechos
d) La cafetería y los clientes

> **b) 2,000,000 de clientes mensuales y los 800 clientes encuestados**

---

### Pregunta 6

En notación estadística, ¿qué representa la letra $\mu$?

a) El tamaño de la muestra
b) La media muestral
c) La proporción muestral
d) La media poblacional

> **d) La media poblacional**

---

### Pregunta 7

En el ejemplo numérico del archivo, una universidad con $N = 5,000$ estudiantes toma una muestra de $n = 250$. El tamaño de la muestra con respecto a la población es:

a) El 50%
b) El 25%
c) El 5%
d) El 10%

> **c) El 5%**

---

### Pregunta 8

Una muestra de una universidad arroja una edad promedio de $\bar{X} = 21.3$ años, mientras que la media poblacional real es $\mu = 21.5$ años. ¿Qué implica este resultado?

a) La muestra está perfectamente sesgada
b) El sesgo es de 0.2 años, lo que indica que la muestra subestimó ligeramente la edad promedio poblacional
c) El parámetro es igual al estadístico, por lo que no hay error
d) El censo habría dado un resultado idéntico

> **b) El sesgo es de 0.2 años, lo que indica que la muestra subestimó ligeramente la edad promedio poblacional**

---

### Pregunta 9

¿Cuál de los siguientes es un tipo de sesgo en el muestreo?

a) Sesgo de selección
b) Sesgo de varianza
c) Sesgo de estimación
d) Sesgo de precisión

> **a) Sesgo de selección**

---

### Pregunta 10

Una cadena de restaurantes quiere saber qué platos son los más populares entre sus clientes. Tiene 5,000 clientes al mes y decide encuestar a 200 de ellos seleccionados al azar. ¿Qué concepto se aplica en este caso?

a) Censo, porque se encuestó a un grupo representativo
b) Muestreo, porque se seleccionó un subconjunto de la población para hacer inferencias sobre ella
c) Muestreo destructivo, porque la encuesta modifica la opinión de los clientes
d) Sesgo de no respuesta, porque los clientes que no responden pueden tener opiniones diferentes

> **b) Muestreo, porque se seleccionó un subconjunto de la población para hacer inferencias sobre ella**
