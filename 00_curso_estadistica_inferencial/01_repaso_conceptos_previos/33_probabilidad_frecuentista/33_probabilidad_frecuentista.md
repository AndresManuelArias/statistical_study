---
titulo: Probabilidad Frecuentista
tipo: anotacion-video
tema: Probabilidad
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Probabilidad Frecuentista

## 🎬 Datos del video
- **Título:** Probabilidad Frecuentista | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Probabilidad+Frecuentista+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
La probabilidad frecuentista define la probabilidad de un evento como el valor al que converge la frecuencia relativa de ese evento cuando se repite un experimento un número muy grande de veces. Es la interpretación más intuitiva y la base de mucha estadística práctica.

## 🧮 Contenido

### Definición de frecuencia relativa
Si repetimos un experimento $n$ veces y el evento $A$ ocurre $n_A$ veces, la **frecuencia relativa** es:

$$f_n(A) = \frac{n_A}{n}$$

Esta fracción representa la proporción observada de veces que $A$ ocurre en $n$ repeticiones.

### La probabilidad como límite
Según la interpretación frecuentista, la probabilidad de $A$ es el valor al que se aproximan las frecuencias relativas cuando el número de repeticiones crece indefinidamente:

$$P(A) = \lim_{n \to \infty} f_n(A) = \lim_{n \to \infty} \frac{n_A}{n}$$

La probabilidad no es una propiedad de un evento aislado, sino un comportamiento **estable** que emerge de la repetición.

### Ley de los Grandes Números
La **Ley Fuerte de los Grandes Números** garantiza que, bajo ciertas condiciones de independencia y homogeneidad, la frecuencia relativa converge a la probabilidad teórica con probabilidad 1:

$$P\left(\lim_{n \to \infty} f_n(A) = P(A)\right) = 1$$

Esto justifica el uso de frecuencias observadas como estimadores de probabilidades poblacionales desconocidas.

### Características de la interpretación frecuentista
- Solo asigna probabilidades a eventos **observables** y **repetibles**.
- Requiere que el experimento sea **reproducible** bajo las mismas condiciones.
- La probabilidad es una propiedad **long-run** (a largo plazo).
- No asigna sentido a preguntas como "¿cuál es la probabilidad de que llueva mañana?" (evento único no repetible).

### Limitaciones
- No puede manejar eventos **únicos** o **no repetibles**.
- Requiere un número **infinito** de experimentos para la definición exacta.
- En la práctica, se usan frecuencias finitas como **aproximaciones**.
- No ofrece una base para creencias subjetivas previas a la observación (eso lo cubre la probabilidad bayesiana).

### Convergencia empírica
El error de la frecuencia relativa tiende a reducirse conforme $n$ crece. Con $n$ ensayos, la desviación típica de la frecuencia relativa es aproximadamente:

$$\sigma_{f_n} \approx \sqrt{\frac{p(1-p)}{n}}$$

Esta fórmula explica por qué las estimaciones mejoran al aumentar el tamaño de muestra: el error decrece como $\frac{1}{\sqrt{n}}$.

## 💡 Ejemplo numérico
Se lanza un dado justo 600 veces y se registran los resultados pares (2, 4, 6):

| Lanzamientos ($n$) | Pares observados ($n_A$) | Frecuencia relativa $f_n(A)$ |
|---|---|---|
| 60 | 32 | 0.5333 |
| 180 | 95 | 0.5278 |
| 360 | 183 | 0.5083 |
| 600 | 306 | 0.5100 |

La probabilidad teórica es $P(\text{par}) = \frac{3}{6} = 0.5$.

Observamos que a medida que crece $n$, la frecuencia relativa se acerca a $0.5$. Con $n = 600$, la diferencia con el valor teórico es solo $0.5100 - 0.5000 = 0.01$.

### Segundo ejemplo: moneda
Se lanza una moneda 1000 veces. Se obtienen 517 caras.
$f_{1000}(\text{cara}) = \frac{517}{1000} = 0.517$.

Si continuamos lanzando, la Ley de los Grandes Números asegura que esta frecuencia convergerá a $P(\text{cara}) = 0.5$. Con $n = 10000$, es probable obtener algo como 5012 caras ($f = 0.5012$), mucho más cerca del valor teórico.

## 🌍 Ejemplo de la vida real
Una fábrica de componentes electrónicos mide la tasa de defectos en una línea de producción. Tras inspeccionar 10,000 piezas, encuentra 150 defectuosas. La frecuencia relativa observada es $\frac{150}{10000} = 0.015$.

La empresa usa este valor como estimación de la probabilidad de defecto ($P(\text{defecto}) \approx 0.015$) para:
- Establecer metas de calidad.
- Calcular costos esperados de retrabajo.
- Comparar con la tasa del mes anterior para detectar tendencias.

Si la tasa del mes anterior fue 0.020, la mejora es significativa y justifica investigar qué cambió en el proceso.

> [!tip] Relación con el curso
> La probabilidad frecuentista es el puente entre datos observados y teoría estadística. En inferencia, usamos muestras para estimar probabilidades poblacionales, asumiendo que las frecuencias muestrales se aproximan a las verdaderas proporciones.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué mide la frecuencia relativa en la probabilidad frecuentista?
a) La probabilidad teórica exacta de un evento en un solo experimento
b) La proporción de veces que un evento ocurre en n repeticiones de un experimento
c) La diferencia entre el valor observado y el valor esperado
d) El número total de resultados posibles en un experimento aleatorio

> **b) La proporción de veces que un evento ocurre en n repeticiones de un experimento**

---

### Pregunta 2

Si lanzamos un dado 600 veces y observamos 306 resultados pares, ¿cuál es la frecuencia relativa?
a) 0.4900
b) 0.5083
c) 0.5100
d) 0.5200

> **c) 0.5100**

---

### Pregunta 3

Según la interpretación frecuentista, ¿qué representa la probabilidad de un evento A?
a) El número de veces que A ocurre dividido por el número total de eventos posibles
b) El límite al que converge la frecuencia relativa cuando el número de repeticiones tiende a infinito
c) La frecuencia relativa observada en un experimento único
d) La suma de todas las frecuencias absolutas de los eventos complementarios

> **b) El límite al que converge la frecuencia relativa cuando el número de repeticiones tiende a infinito**

---

### Pregunta 4

¿Qué establece la Ley Fuerte de los Grandes Números?
a) Que la frecuencia relativa siempre será exactamente igual a la probabilidad teórica
b) Que con suficientes repeticiones, la frecuencia relativa converge a la probabilidad con probabilidad 1
c) Que la desviación estándar de la frecuencia relativa crece con el número de muestras
d) Que solo se pueden calcular probabilidades para eventos con un número finito de resultados

> **b) Que con suficientes repeticiones, la frecuencia relativa converge a la probabilidad con probabilidad 1**

---

### Pregunta 5

Una fábrica inspecciona 10.000 piezas y encuentra 150 defectuosas. ¿Cuál es la frecuencia relativa de defectos?
a) 0.0015
b) 0.015
c) 0.15
d) 1.5

> **b) 0.015**

---

### Pregunta 6

Según la fórmula de convergencia empírica, ¿cómo se comporta el error de la frecuencia relativa cuando se incrementa el número de ensayos?
a) Disminuye proporcionalmente a $1/n$
b) Permanece constante sin importar el tamaño de la muestra
c) Crece a medida que se realizan más repeticiones
d) Se reduce como $1/\sqrt{n}$

> **d) Se reduce como $1/\sqrt{n}$**

---

### Pregunta 7

La interpretación frecuentista de la probabilidad tiene varias restricciones importantes. ¿Cuál de las siguientes NO es una limitación reconocida?
a) No puede asignar probabilidades a eventos que ocurren una sola vez
b) Requiere un número infinito de repeticiones para una definición precisa
c) No permite usar frecuencias observadas como estimadores de probabilidades poblacionales
d) No ofrece fundamento para creencias subjetivas previas a la observación

> **c) No permite usar frecuencias observadas como estimadores de probabilidades poblacionales**

---

### Pregunta 8

Si una moneda se lanza 1000 veces y se observan 517 caras, ¿cuál es la frecuencia relativa?
a) 0.517
b) 0.483
c) 0.500
d) 0.571

> **a) 0.517**

---

### Pregunta 9

En la perspectiva frecuentista, ¿qué caracteriza fundamentalmente la probabilidad?
a) Es una cualidad inherente a cada evento individual
b) Es un comportamiento estable que emerge de la repetición
c) Es una medida de incertidumbre subjetiva del observador
d) Es la cantidad de resultados favorables entre todos los posibles en un solo experimento

> **b) Es un comportamiento estable que emerge de la repetición**

---

### Pregunta 10

Si la desviación típica de la frecuencia relativa es $\sigma_{f_n} \approx \sqrt{\frac{p(1-p)}{n}}$, al duplicar el número de ensayos ($n$), ¿qué ocurre con la desviación típica?
a) Se reduce aproximadamente a la mitad
b) Se reduce en un factor de $\sqrt{2}$
c) Permanece igual
d) Se duplica

> **b) Se reduce en un factor de $\sqrt{2}$**
