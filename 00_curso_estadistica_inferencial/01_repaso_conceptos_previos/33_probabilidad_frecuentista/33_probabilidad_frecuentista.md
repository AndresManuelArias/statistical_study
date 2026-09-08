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
