---
titulo: "Probabilidad geométrica"
tipo: anotacion-video
tema: Probabilidad geométrica
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Probabilidad Geométrica

## 🎬 Datos del video
- **Título:** Probabilidad Geométrica | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Probabilidad+Geometrica+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa
<iframe width="560" height="315" src="https://www.youtube.com/embed/rXawT-JR1Rk?si=J69hHb_w4GHOd1RQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Resumen
La probabilidad geométrica se aplica cuando los resultados de un experimento aleatorio son **valores continuos** (longitudes, áreas, volúmenes o tiempos). La probabilidad se calcula como la medida del evento favorable dividida entre la medida del espacio muestral total.

## 🧮 Contenido

### ¿Cuándo se usa la probabilidad geométrica?
Se usa cuando el espacio muestral no es un conjunto finito y discreto, sino un **intervalo continuo** o una **región del espacio**. No se pueden contar casos individuales; en su lugar, se usan medidas geométricas:
- **Longitud** (en una dimensión)
- **Área** (en dos dimensiones)
- **Volumen** (en tres dimensiones)

### Definición general

$$P(A) = \frac{\text{Medida del evento favorable}}{\text{Medida del espacio muestral total}}$$

Si el espacio muestral es una longitud $L$, un área $A_{total}$ o un volumen $V_{total}$, y el evento $A$ tiene medida respectiva, entonces:

$$P(A) = \frac{L_A}{L_{\text{total}}} \quad \text{o} \quad P(A) = \frac{A_A}{A_{\text{total}}} \quad \text{o} \quad P(A) = \frac{V_A}{V_{\text{total}}}$$

### Propiedades
1. $0 \le P(A) \le 1$ para todo evento.
2. $P(\Omega) = 1$.
3. Si $A$ y $B$ son disjuntos: $P(A \cup B) = P(A) + P(B)$.

### Ejemplos clásicos

**Intervalos de tiempo:** Si un evento puede ocurrir en cualquier momento del intervalo $[0, T]$, y nos interesa el subintervalo $[a,b] \subseteq [0,T]$:

$$P(a \le X \le b) = \frac{b - a}{T}$$

**Dardos en un tablero:** Si un dardo cae al azar en un rectángulo de área $A_{total}$ y el evento es impactar una región de área $A_{evento}$:

$$P(\text{impacto}) = \frac{A_{evento}}{A_{total}}$$

**Corte de cuerda:** Si se corta una cuerda de longitud $L$ en un punto elegido al azar, la probabilidad de que el fragmento tenga longitud mayor a $\ell$ es:

$$P(X > \ell) = \frac{L - \ell}{L}$$

## 💡 Ejemplo numérico
Un **dardo** se lanza al azar sobre un tablero cuadrado de **20 cm × 20 cm** (área total $= 400 \text{ cm}^2$). En el centro hay un **círculo de radio 5 cm** (área $= \pi r^2 = \pi(5)^2 = 25\pi \approx 78.54 \text{ cm}^2$).

La probabilidad de que el dardo caiga dentro del círculo es:

$$P(\text{círculo}) = \frac{A_{\text{círculo}}}{A_{\text{tablero}}} = \frac{25\pi}{400} = \frac{25\pi}{400} = \frac{\pi}{16} \approx 0.1963$$

Aproximadamente un **19.6%** de probabilidad.

**Otro ejemplo:** Un autobús pasa cada **15 minutos**. Si llegas al paradero en un momento al azar, la probabilidad de esperar **menos de 5 minutos** es:

$$P(\text{espera} < 5) = \frac{5}{15} = \frac{1}{3} \approx 0.3333$$

## 🌍 Ejemplo de la vida real
Un **repartidor** tiene una ruta de **12 km** y en algún punto del camino hay un **bache** de 200 metros ($0.2$ km). Si el repartidor no sabe dónde está el bache, la probabilidad de que sus llantas lo golpeen es:

$$P(\text{bache}) = \frac{0.2}{12} = \frac{1}{60} \approx 0.0167$$

O sea, aproximadamente un **1.7%** de probabilidad por viaje.

> [!tip] Relación con el curso
> La probabilidad geométrica extiende el concepto de probabilidad a espacios muestrales continuos, lo cual es esencial en inferencia estadística para variables continuas como el peso, la estatura o el tiempo, que se modelan con distribuciones de probabilidad continuas.

### Ejemplo con tiempos de espera
Si un **semáforo** tiene ciclos de **90 segundos** (30 seg en rojo, 30 seg en amarillo, 30 seg en verde), y llegas al cruce en un instante al azar, la probabilidad de que el semáforo esté **verde** es:

$$P(\text{verde}) = \frac{30}{90} = \frac{1}{3} \approx 0.333$$

Si quieres que esté **verde o amarillo** (cualquier color que no sea rojo):

$$P(\text{no rojo}) = \frac{30 + 30}{90} = \frac{60}{90} = \frac{2}{3} \approx 0.667$$

### Ejemplo con distribución espacial
Un **parque rectangular** mide $100\text{ m} \times 60\text{ m}$ (área $= 6000 \text{ m}^2$). En una esquina hay una **fuente circular** de radio $8\text{ m}$ (área $= \pi(8)^2 = 64\pi \approx 201.06 \text{ m}^2$). Si alguien se para al azar dentro del parque:

$$P(\text{junto a la fuente}) = \frac{64\pi}{6000} \approx \frac{201.06}{6000} \approx 0.0335$$

Aproximadamente un **3.4%** de probabilidad.

### Relación con distribuciones continuas
La probabilidad geométrica es la base de las **distribuciones de probabilidad continuas** que se estudiarán en el curso:
- **Distribución uniforme continua:** $X \sim U(a,b)$, donde todos los intervalos de igual longitud dentro de $[a,b]$ tienen la misma probabilidad.
- **Distribución normal, exponencial, etc.:** se derivan de integrales sobre regiones geométricas.

La probabilidad de que una variable uniforme $U(a,b)$ caiga en un intervalo $[c,d] \subseteq [a,b]$ es exactamente:
$$P(c \le X \le d) = \frac{d - c}{b - a}$$

Esto es idéntico al cálculo geométrico de longitud favorable entre longitud total.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Qué tipo de espacio muestral requiere la probabilidad geométrica?

a) Un conjunto finito y discreto de resultados
b) Un intervalo continuo o una región del espacio con medida (longitud, área o volumen)
c) Un conjunto numerable e infinito
d) Una tabla de frecuencias absolutas

> **b) Un intervalo continuo o una región del espacio con medida (longitud, área o volumen)**

---

### Pregunta 2

¿Cómo se calcula la probabilidad geométrica cuando el espacio muestral es un área?

a) Se cuenta el número de resultados favorables entre el total de resultados posibles
b) Se divide la longitud favorable entre la longitud total
c) Se divide el área favorable entre el área total del espacio muestral
d) Se multiplica la probabilidad de cada punto por el número de puntos

> **c) Se divide el área favorable entre el área total del espacio muestral**

---

### Pregunta 3

Un rectángulo mide $6 \text{ cm} \times 10 \text{ cm}$ y contiene un cuadrado favorable de $6 \text{ cm} \times 6 \text{ cm}$. ¿Cuál es la probabilidad geométrica de caer en el cuadrado?

a) $0,6$
b) $0,36$
c) $0,67$
d) $0,5$

> **a) $0,6$**

---

### Pregunta 4

Si un autobús pasa cada 20 minutos y llegas al paradero en un momento al azar, ¿cuál es la probabilidad de esperar menos de 5 minutos?

a) $0,10$
b) $0,33$
c) $0,25$
d) $0,20$

> **c) $0,25$**

---

### Pregunta 5

¿Qué propiedad es válida para cualquier evento $A$ en probabilidad geométrica?

a) $P(A) = 1$ siempre
b) $0 \leq P(A) \leq 1$
c) $P(A) > 0$ siempre
d) $P(A) = 0,5$ en promedio

> **b) $0 \leq P(A) \leq 1$**

---

### Pregunta 6

Un dardo se lanza al azar en un círculo de radio $10$ cm que contiene un anillo interno de radio $4$ cm. El área del anillo (región entre el círculo grande y el pequeño) es $\pi(10)^2 - \pi(4)^2 = 84\pi$. ¿Cuál es la probabilidad de que el dardo caiga en el anillo?

a) $0,16$
b) $0,20$
c) $0,84$
d) $0,40$

> **c) $0,84$**

---

### Pregunta 7

Si se elige un punto al azar en un intervalo $[0, 8]$ y se define el evento $A = \{X \geq 3\}$, la probabilidad geométrica $P(A)$ es:

a) $\frac{5}{8} = 0,625$
b) $\frac{3}{8} = 0,375$
c) $\frac{1}{2} = 0,5$
d) $\frac{8}{3} \approx 2,67$

> **a) $\frac{5}{8} = 0,625$**

---

### Pregunta 8

Un semáforo tiene un ciclo total de 120 segundos distribuidos en: 50 s en rojo, 30 s en amarillo y 40 s en verde. Si llegas al cruce en un instante al azar, ¿cuál es la probabilidad de que el semáforo esté en verde o amarillo?

a) $\frac{2}{3} \approx 0,667$
b) $\frac{1}{3} \approx 0,333$
c) $\frac{7}{12} \approx 0,583$
d) $\frac{1}{2} = 0,5$

> **c) $\frac{7}{12} \approx 0,583$**

---

### Pregunta 9

Una cuerda mide 15 cm y se corta en un punto al azar. ¿Cuál es la probabilidad de que el fragmento más largo mida más de 10 cm?

a) $\frac{2}{3} \approx 0,667$
b) $\frac{1}{3} \approx 0,333$
c) $\frac{3}{5} = 0,6$
d) $\frac{1}{2} = 0,5$

> **a) $\frac{2}{3} \approx 0,667$**

---

### Pregunta 10

¿Cuál es la diferencia fundamental entre la probabilidad clásica (equiprobable) y la probabilidad geométrica?

a) La clásica usa áreas, mientras que la geométrica usa conteos
b) La clásica requiere que todos los resultados sean equally likely y se usa un cociente de conteos; la geométrica trabaja con medidas continuas (longitud, área, volumen)
c) La geométrica solo sirve para circunferencias y círculos
d) No hay diferencia; son exactamente lo mismo

> **b) La clásica requiere que todos los resultados sean equally likely y se usa un cociente de conteos; la geométrica trabaja con medidas continuas (longitud, área, volumen)**
