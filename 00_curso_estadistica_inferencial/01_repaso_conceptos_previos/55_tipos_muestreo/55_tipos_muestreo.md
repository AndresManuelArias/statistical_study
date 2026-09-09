---
titulo: Tipos de Muestreo
tipo: anotacion-video
tema: Tipos de Muestreo
tags:
  - estadistica-inferencial
  - muestreo
---

# Tipos de Muestreo

## 🎬 Datos del video
- **Título:** Tipos de Muestreo | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Tipos+de+Muestreo+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen

Existen dos grandes familias de muestreo: probabilístico (cada individuo tiene probabilidad conocida de ser seleccionado) y no probabilístico (la selección depende del criterio del investigador). Se presentan los principales métodos de cada familia y sus ventajas y desventajas.

## 🧮 Contenido

### Muestreo probabilístico

Cada individuo de la población tiene una probabilidad conocida y distinta de cero de ser seleccionado. Esto permite cuantificar el error de muestreo y aplicar fórmulas de inferencia estadística.

| Método | Descripción | Ventaja | Desventaja |
|---|---|---|---|
| Aleatorio simple | Cada individuo tiene igual probabilidad | Sin sesgo | Lista completa necesaria |
| Sistemático | Se elige cada $k$-ésimo individuo | Fácil de implementar | Riesgo de periodicidad |
| Estratificado | Se divide en estratos y se muestrea cada uno | Mayor precisión | Requiere conocer los estratos |
| Conglomerados | Se eligen grupos completos al azar | Reducción de costo | Mayor error intra-grupo |

### Muestreo no probabilístico

La selección depende del criterio del investigador, no de la probabilidad. No permite calcular el error de muestreo de forma rigurosa.

| Método | Descripción | Ventaja | Desventaja |
|---|---|---|---|
| Conveniencia | Se eligen individuos accesibles | Rápido y barato | Sesgo alto |
| Bola de nieve | Los participantes refieren a otros | Útil para poblaciones ocultas | No representativo |
| Cuota | Se llenan cuotas predefinidas | Control de grupos | Sesgo en selección |
| Juicio | El investigador elige según su criterio | Experiencia aplicada | Subjetividad |

### Sistemático a detalle

En el muestreo sistemático se calcula el paso de selección:

$$k = \frac{N}{n}$$

Se elige un inicio aleatorio $r$ entre $1$ y $k$, y se seleccionan $r, r + k, r + 2k, \ldots$

- Ventaja: muy fácil de implementar en listas ordenadas.
- Riesgo: si la lista tiene un patrón periódico (ej: cada 10 unidades hay un tipo particular), se introduce sesgo.

### Bola de nieve a detalle

Para poblaciones pequeñas u ocultas (ej: usuarios de un deporte minoritario, personas con una enfermedad rara), se entrevista a un primer grupo y estos refieren a otros conocidos. La muestra crece como una avalancha de nieve.

## 💡 Ejemplo numérico

Una empresa tiene 2,000 empleados distribuidos en 4 departamentos:

| Departamento | Empleados ($N_i$) | Proporción |
|---|---|---|
| Ventas | 800 | 0.40 |
| Producción | 600 | 0.30 |
| Administración | 400 | 0.20 |
| Logística | 200 | 0.10 |

Con muestreo estratificado proporcional y $n = 100$, se asignan:

- Ventas: $100 \times 0.40 = 40$ empleados
- Producción: $100 \times 0.30 = 30$ empleados
- Administración: $100 \times 0.20 = 20$ empleados
- Logística: $100 \times 0.10 = 10$ empleados

Total: $40 + 30 + 20 + 10 = 100$ ✓

**Con muestreo sistemático**, con $N = 2,000$ y $n = 100$:

$$k = \frac{2000}{100} = 20$$

Con un inicio aleatorio $r = 7$, se seleccionan los empleados 7, 27, 47, 67, ..., 1987.

## 🌍 Ejemplo de la vida real

Un investigador estudia el nivel de satisfacción de pacientes en un hospital y considera varias opciones:

- **Conveniencia:** Encuestar solo a los pacientes en la sala de espera (rápido pero sesgado).
- **Estratificado:** Dividir por departamento (urgencias, consulta externa, hospitalización) y seleccionar proporcionalmente.
- **Bola de nieve:** Para estudiar a pacientes con una enfermedad rara, pidiendo referencias entre ellos.

> [!tip] Relación con el curso
> Conocer los tipos de muestreo es esencial para elegir el método adecuado y que las inferencias estadísticas sean válidas. Un mal método de muestreo puede invalidar cualquier conclusión.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

¿Cuál de los siguientes es un método de muestreo probabilístico?

a) Conveniencia
b) Cuota
c) Sistemático
d) Juicio

> **c) Sistemático**

### Pregunta 2

En el muestreo estratificado proporcional, si una empresa tiene 2,000 empleados con 600 en Producción (proporción 0.30) y se extrae una muestra de $n = 100$, ¿cuántos empleados se asignan a Producción?

a) 40
b) 20
c) 30
d) 10

> **c) 30**

### Pregunta 3

¿Cuál es la principal ventaja del muestreo sobre muestreo probabilístico frente al no probabilístico?

a) Es más rápido y barato de implementar
b) Permite cuantificar el error de muestreo
c) No requiere conocer la población
d) Siempre produce muestras más pequeñas

> **b) Permite cuantificar el error de muestreo**

### Pregunta 4

En el muestreo sistemático con $N = 2000$ y $n = 100$, ¿cuál es el paso de selección $k$?

a) 10
b) 50
c) 20
d) 200

> **c) 20**

### Pregunta 5

¿Qué método de muestreo es más adecuado cuando se estudia una población oculta o de difícil acceso, como pacientes con una enfermedad rara?

a) Aleatorio simple
b) Sistemático
c) Conveniencia
d) Bola de nieve

> **d) Bola de nieve**

### Pregunta 6

¿Cuál de las siguientes afirmaciones es verdadera sobre el muestreo de conveniencia?

a) Es un método probabilístico
b) Tiene bajo sesgo porque se elige al azar
c) No permite generalizar los resultados a la población
d) Requiere conocer los estratos de la población

> **c) No permite generalizar los resultados a la población**

### Pregunta 7

¿Cuál es la desventaja principal del muestreo aleatorio simple?

a) Alto sesgo en la selección
b) Requiere una lista completa de la población
c) No puede aplicarse a poblaciones grandes
d) Es demasiado costoso siempre

> **b) Requiere una lista completa de la población**

### Pregunta 8

¿Qué método de muestreo es adecuado cuando la población se divide en grupos homogéneos dentro pero heterogéneos entre sí, y se quiere asegurar representación de cada grupo?

a) Conglomerados
b) Conveniencia
c) Estratificado
d) Bola de nieve

> **c) Estratificado**

### Pregunta 9

¿Cuál es el riesgo principal del muestreo sistemático aplicado a una lista ordenada?

a) Que no se pueda calcular el paso $k$
b) Que se introduzca sesgo si la lista tiene un patrón periódico
c) Que requiera conocimiento previo de los estratos
d) Que sea imposible de implementar

> **b) Que se introduzca sesgo si la lista tiene un patrón periódico**

### Pregunta 10

En el ejemplo del hospital, si un investigador encuesta solo a los pacientes que se encuentran en la sala de espera, ¿qué método está utilizando?

a) Estratificado
b) Sistemático
c) Juicio
d) Conveniencia

> **d) Conveniencia**
