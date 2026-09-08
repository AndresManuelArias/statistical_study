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

Una universidad tiene $N = 5{,}000$ estudiantes. Se toma una muestra aleatoria de $n = 250$ y se obtiene una edad promedio de $\bar{X} = 21.3$ años. La media poblacional real es $\mu = 21.5$ años.

$$\text{Sesgo} = 21.3 - 21.5 = -0.2 \text{ años}$$

La muestra subestimó ligeramente la edad promedio. El sesgo es pequeño y probablemente se debe al azar de la selección, no a un problema sistemático en el método de muestreo.

## 🌍 Ejemplo de la vida real

Una cadena de cafeterías quiere conocer la satisfacción de sus clientes. En lugar de encuestar a los 2,000,000 de clientes mensuales, selecciona una muestra aleatoria de 800 clientes. Obtiene que el 82% está satisfecho. El parámetro poblacional desconocido $p$ se estima con el estadístico $\hat{p} = 0.82$.

> [!tip] Relación con el curso
> El muestreo es la base de la estadística inferencial: a partir de una muestra, se hace inferencia sobre parámetros poblacionales como la media $\mu$ o la proporción $p$. Sin un muestreo correcto, no hay inferencia válida.
