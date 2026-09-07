---
titulo: Muestreo y diseño experimental
tipo: anotacion-video
tema: muestreo y diseño experimental
tags:
  - estadistica-inferencial
  - muestreo
  - diseño-experimental
---

# 🧪 Muestreo y Diseño Experimental

## 🎬 Datos del video

- **Título:** Muestreo y diseño experimental
- **Canal:** José María Hernández Rivera
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 📋 Resumen

Para hacer **inferencia** (sacar conclusiones sobre la población a partir de una muestra) necesitamos que la muestra sea **representativa**. El **muestreo** es el conjunto de técnicas para seleccionar esa muestra, y el **diseño experimental** organiza cómo recolectar los datos para poder atribuir **causa-efecto** de manera confiable.

> [!info] Idea principal
> Una mala muestra (sesgada) conduce a conclusiones equivocadas, sin importar cuán buenos sean los métodos estadísticos posteriores. La aleatorización es la herramienta principal para evitar el sesgo.

## 🧮 Explicación del tema

## Población y muestra

- **Población:** el conjunto completo de individuos (o unidades) de interés.
- **Muestra:** un subconjunto de la población que se observa realmente.
- **Estadístico:** valor calculado a partir de la muestra (ej. $\bar{x}$, $\hat{p}$).
- **Parámetro:** valor de la población que se desea estimar (ej. $\mu$, $p$).

> [!warning] Ojo
> El objetivo es estimar el **parámetro** con el **estadístico**. La diferencia entre ambos se llama **error de muestreo** y se controla con el **tamaño de muestra** y el **diseño**.

## Tipos de muestreo

### Muestreo probabilístico (aleatorio)

Cada elemento de la población tiene una **probabilidad conocida y no nula** de ser elegido. Permite cuantificar el error de muestreo.

1. **Muestreo aleatorio simple (MAS):** todos los elementos se eligen al azar con igual probabilidad.
2. **Muestreo sistemático:** se ordena la población y se toma cada $k$-ésimo elemento.
3. **Muestreo estratificado:** la población se divide en **estratos** (grupos homogéneos) y se toma una muestra aleatoria de cada uno.
4. **Muestreo por conglomerados:** la población se divide en **clusters** y se toman clusters completos al azar.

### Muestreo no probabilístico

No se garantiza la representatividad. Útil en exploración, pero **no permite** inferencia formal.

1. **Conveniencia:** se toman sujetos fáciles de conseguir.
2. **Intencional (juicio):** el investigador elige "a propósito".
3. **Bola de nieve:** los sujetos reclutan a más sujetos.

> [!example] Ejemplo
> Estratificado: para estimar la tasa de divorcio en un país, se divide la población en **estratos** por nivel educativo y se muestrea cada estrato. Así la muestra respeta la proporción de cada nivel en la población.
>
> Por conglomerados: si se quieren encuestar escuelas, se eligen algunas **escuelas completas** al azar (cluster) en lugar de muestrear estudiantes dispersos.

## Error de muestreo y sesgo

- **Error de muestreo:** variación debida al azar; se reduce aumentando $n$ (idealmente con $SE = \sigma/\sqrt{n}$, tema 05).
- **Sesgo (bias):** error sistemático que **no** desaparece al aumentar $n$. Lo causan, por ejemplo, muestras de conveniencia o preguntas mal formuladas.

| Fuente | Error aleatorio | Sesgo |
|--------|-----------------|-------|
| ¿Se reduce con $n$? | Sí | No |
| Ejemplo | Muestra con extrema | Encuestar solo en centros comerciales |

## Diseño experimental

En un **experimento**, el investigador controla las condiciones y **asigna los tratamientos al azar**.

### Elementos básicos

- **Tratamiento:** condición o intervención aplicada (ej. hacer terapia prematrimonial).
- **Unidad experimental:** el individuo o grupo sobre el que se aplica el tratamiento.
- **Variable de respuesta:** lo que se mide (ej. `years_to_divorce`).
- **Control:** mantener constantes las demás condiciones (ej. misma cohorte, mismo entorno).
- **Aleatorización:** asignar tratamientos al azar para balancear variables desconocidas.
- **Replicación:** aplicar el tratamiento a más de una unidad para medir la variabilidad.

> [!tip] Aleatorización, control y replicación
> Son los **tres principios** del diseño experimental. La aleatorización protege del **sesgo de selección**; el control evita **confusión** con variables extrañas; la replicación permite estimar el **error experimental**.

### Ciego y doble ciego

- **Simple ciego:** el sujeto no sabe qué tratamiento recibió (evita efectos placebo).
- **Doble ciego:** ni el sujeto ni quien evalúa saben la asignación (evita sesgo del evaluador).

### Observacional vs experimental

- **Estudio observacional:** solo se observa (ej. el dataset de matrimonios). Permite asociación, **no** causalidad.
- **Experimento:** se interviene y se aleatoriza. Permite inferir **causa-efecto**.

> [!warning] Causalidad
> En un **estudio observacional** como el dataset de matrimonios, encontrar que la terapia está asociada con menor divorcio **no prueba** que la terapia cause el divorcio: puede haber **variables de confusión** (edad, nivel educativo, etc.).

---

## 🐍 Ejemplo en Python: comparando métodos de muestreo con el dataset

Comparamos 4 métodos de muestreo sobre el dataset real para estimar la proporción de divorcios ($p = 0.4602$) y la media de años de matrimonio ($\mu = 10.70$).

```python
import csv
import statistics
import random
from pathlib import Path

random.seed(2026)

RUTA = Path("ejercicios_practicos/datos_matrimonio/marriage_longevity_master.csv")

with open(RUTA, encoding="utf-8") as f:
    filas = list(csv.DictReader(f))

N = len(filas)
div = sum(1 for f in filas if f["divorced"] == "1")
p = div / N
años = [float(f["years_married"]) for f in filas]
mu = statistics.mean(años)

print(f"Población: N = {N}")
print(f"Parámetros reales: p = {p:.4f}, μ(years_married) = {mu:.2f}")
print()

n = 200

def resumen(nombre, muestra):
    m = [float(f["years_married"]) for f in muestra]
    d = sum(1 for f in muestra if f["divorced"] == "1") / len(muestra)
    print(f"{nombre:22s}: p̂ = {d:.4f} (error {abs(d-p):.4f}) | "
          f"x̄ = {statistics.mean(m):.2f} (error {abs(statistics.mean(m)-mu):.2f})")

# 1. Muestreo aleatorio simple
mas = random.sample(filas, n)
resumen("Aleatorio simple", mas)

# 2. Muestreo sistemático: tomar cada k-ésimo
k = N // n
sis = [filas[i] for i in range(0, N, k)][:n]
resumen("Sistemático", sis)

# 3. Muestreo estratificado por divorcio (proporcional al estrato)
div_m = [f for f in filas if f["divorced"] == "1"]
cas_m = [f for f in filas if f["divorced"] == "0"]
n_div = int(n * p)
n_cas = n - n_div
est = random.sample(div_m, n_div) + random.sample(cas_m, n_cas)
resumen("Estratificado", est)

# 4. Muestreo de conveniencia: solo registros con years_married > 20
conv = [f for f in filas if float(f["years_married"]) > 20][:n]
resumen("Conveniencia (sesgado)", conv)
```

**Salida real del script (verificada con el dataset):**

```
Población: N = 45000
Parámetros reales: p = 0.4602, μ(years_married) = 10.70

Aleatorio simple     : p̂ = 0.4650 (error 0.0048) | x̄ = 10.46 (error 0.24)
Sistemático          : p̂ = 0.4400 (error 0.0202) | x̄ = 10.44 (error 0.26)
Estratificado        : p̂ = 0.4600 (error 0.0002) | x̄ = 11.45 (error 0.75)
Conveniencia (sesgado): p̂ = 0.0900 (error 0.3702) | x̄ = 27.38 (error 16.68)
```

> [!note] Lectura estadística
> - Los métodos **probabilísticos** (aleatorio simple, sistemático, estratificado) estiman $p$ y $\mu$ con errores **pequeños**.
> - El **muestreo de conveniencia** (con `years_married > 20`) produce un **sesgo enorme**: la media estimada (27.38) está a 16.7 años de la real. El sesgo **no se corrige** aumentando $n$.
> - El **estratificado** controla directamente la proporción del estrato, por eso su error en $p̂$ es casi cero.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La **población** en estadística es:

a) Un subconjunto aleatorio de individuos
b) El conjunto completo de individuos de interés
c) La muestra observada
d) El estadístico calculado

> **b) El conjunto completo de individuos de interés**

---

### Pregunta 2

En el **muestreo aleatorio simple**, cada elemento de la población:

a) Tiene la misma probabilidad de ser elegido
b) Es elegido por conveniencia
c) Tiene probabilidad 0
d) Solo se elige una vez cada 10

> **a) Tiene la misma probabilidad de ser elegido**

---

### Pregunta 3

En el **muestreo estratificado**:

a) Se toma cada $k$-ésimo elemento
b) Se divide la población en estratos y se muestrea cada uno
c) Se eligen clusters completos
d) Los sujetos reclutan a otros sujetos

> **b) Se divide la población en estratos y se muestrea cada uno**

---

### Pregunta 4

Una diferencia clave entre **sesgo** y **error aleatorio** es que:

a) El sesgo se reduce aumentando $n$; el error aleatorio no
b) El sesgo no se reduce aumentando $n$; el error aleatorio sí
c) Ambos se reducen aumentando $n$
d) Ninguno se reduce aumentando $n$

> **b) El sesgo no se reduce aumentando $n$; el error aleatorio sí**

---

### Pregunta 5

El **muestreo por conveniencia**:

a) Es probabilístico
b) Utiliza sujetos fáciles de conseguir y puede introducir sesgo
c) Siempre da estimadores insesgados
d) Requiere estratificar la población

> **b) Utiliza sujetos fáciles de conseguir y puede introducir sesgo**

---

### Pregunta 6

Los **tres principios** básicos del diseño experimental son:

a) Aleatorización, control y replicación
b) Media, mediana y moda
c) Población, muestra y parámetro
d) Observar, medir y predecir

> **a) Aleatorización, control y replicación**

---

### Pregunta 7

En un **estudio doble ciego**:

a) Solo el sujeto no sabe el tratamiento
b) Ni el sujeto ni quien evalúa saben la asignación del tratamiento
c) El investigador no conoce al sujeto
d) Los datos son anónimos

> **b) Ni el sujeto ni quien evalúa saben la asignación del tratamiento**

---

### Pregunta 8

¿En qué caso se puede establecer **causa-efecto** con mayor seguridad?

a) Estudio observacional
b) Experimento con aleatorización, control y replicación
c) Encuesta por conveniencia
d) Muestreo de bola de nieve

> **b) Experimento con aleatorización, control y replicación**

---

### Pregunta 9

En el **muestreo sistemático**:

a) Se ordena la población y se toma cada $k$-ésimo elemento
b) Se eligen todos los elementos
c) Se divide en estratos
d) Se eligen solo voluntarios

> **a) Se ordena la población y se toma cada k-ésimo elemento**

---

### Pregunta 10

En la simulación con el dataset, el método con el **mayor error** al estimar $\mu = 10.70$ (media de años de matrimonio) fue:

a) Aleatorio simple (error 0.24)
b) Sistemático (error 0.26)
c) Estratificado (error 0.75)
d) Conveniencia con `years_married > 20` (error 16.68)

> **d) Conveniencia con `years_married > 20` (error 16.68)**

---

### Pregunta 11

Un **estudio observacional** permite:

a) Establecer causa-efecto directamente
b) Encontrar asociaciones, pero no probar causalidad
c) Cambiar la población
d) Eliminar todas las variables de confusión

> **b) Encontrar asociaciones, pero no probar causalidad**

---

### Pregunta 12

La **variable de respuesta** en un experimento es:

a) La condición aplicada
b) Lo que se mide como resultado
c) El control
d) La unidad experimental

> **b) Lo que se mide como resultado**

---

### Pregunta 13

Si se quiere estimar la proporción de divorcios respetando las proporciones de niveles educativos de la población, el método más adecuado es:

a) Aleatorio simple
b) Estratificado por nivel educativo
c) Bola de nieve
d) Conveniencia

> **b) Estratificado por nivel educativo**

---

### Pregunta 14

El **error de muestreo** se define como:

a) La diferencia entre el estadístico y el parámetro debida al azar
b) Un error de tipeo
c) El sesgo sistemático
d) La varianza poblacional

> **a) La diferencia entre el estadístico y el parámetro debida al azar**

---

## ❓ Dudas pendientes

- [ ] ¿Cuándo conviene usar conglomerados en lugar de estratos?
- [ ] ¿Cómo se calcula el tamaño de muestra óptimo para un error máximo?

## 🔗 Temas relacionados

- [[05_distribuciones_muestrales|Distribuciones muestrales]]
- [[01_repaso_conceptos_previos|Estadísticos descriptivos]]
- [[03_probabilidad|Probabilidad]]
- [[00_contenido_curso|Contenido del curso]]