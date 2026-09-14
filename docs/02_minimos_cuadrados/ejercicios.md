# 📝 Ejercicios: Mínimos Cuadrados

## 🎬 Datos del Video
- **Título:** Método de Mínimos Cuadrados
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=gUdU6BgnJ2c)

---

## 📋 Resumen
Ejercicios prácticos paso a paso para calcular la **recta de regresión** y hacer **predicciones** con datos reales del dataset de matrimonios.

---

## 📌 Ejercicio 1: Recta de regresión entre edad de matrimonio y años hasta el divorcio

**Enunciado:**
```
Con los divorciados del dataset (n = 20708), tomamos:
  X = age_at_marriage (edad al casarse)
  Y = years_to_divorce (años hasta el divorcio)
Calcula la recta de mínimos cuadrados  y = m·x + b.
```

**Solución:**
1. **Sumas auxiliares** (calculadas sobre los 20708 divorciados):
   - $\sum x = 621873$, $\sum y = 159887$
   - $\sum xy = 4753756$, $\sum x^2 = 20023845$
   - $\bar{x} = 30.031$, $\bar{y} = 7.721$
2. **Pendiente:**
   $$
   m = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2} = -0.0354
   $$
3. **Intersección:**
   $$
   b = \bar{y} - m\bar{x} = 7.721 - (-0.0354)(30.031) = 8.7840
   $$
4. **Recta de regresión:**
   $$
   y = -0.0354 \, x + 8.7840
   $$

---

## 📌 Ejercicio 2: Predicción

**Enunciado:**
```
Usando la recta del Ejercicio 1, ¿cuántos años hasta el divorcio se
predicen para alguien que se casó a los 30 años?
```

**Solución:**
1. Sustituir $x = 30$ en la recta:
   $$
   y = -0.0354(30) + 8.7840 = 7.72
   $$
2. El modelo predice **7.72 años** hasta el divorcio para quien se casa a los 30.

**Asociación:**
- Coeficiente de correlación $r = -0.0589$ → asociación **negativa y débil**.
- Coeficiente de determinación $r^2 = 0.0035$ → solo el 0.35% de la variación se explica por la edad.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

El método de **mínimos cuadrados** busca la recta que:

a) Pasa por el mayor número de puntos
b) **Minimiza la suma de los errores al cuadrado**
c) Maximiza la suma de cuadrados
d) Pasa por el origen siempre

> **b) Minimiza la suma de los errores al cuadrado**

---

### Pregunta 2

La forma general de la **recta de regresión** es:

a) $y = mx + b$
b) $y = \frac{1}{x}$
c) $x = y^2$
d) $y = \sqrt{x}$

> **a) $y = mx + b$**

---

### Pregunta 3

La fórmula de la **pendiente** $m$ es:

a) $m = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}$
b) $m = \frac{\sum y}{\sum x}$
c) $m = \bar{y} + b\bar{x}$
d) $m = \frac{\sum x^2}{n}$

> **a) $m = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}$**

---

### Pregunta 4

La **intersección** $b$ se calcula como:

a) $b = \bar{y} - m\bar{x}$
b) $b = \bar{y} + m\bar{x}$
c) $b = \bar{x} - m\bar{y}$
d) $b = m\bar{x}$

> **a) $b = \bar{y} - m\bar{x}$**

---

### Pregunta 5

En el Ejercicio 1, la recta de mínimos cuadrados calculada fue:

a) $y = 8.7840\,x - 0.0354$
b) $y = -0.0354\,x + 8.7840$
c) $y = 0.0354\,x - 8.7840$
d) $y = -8.7840\,x + 0.0354$

> **b) $y = -0.0354\,x + 8.7840$**

---

### Pregunta 6

Con la recta calculada, la **predicción** de años hasta el divorcio para alguien que se casó a los 30 años es:

a) 9.04
b) 7.72
c) 5.50
d) 12.3

> **b) 7.72**

---

### Pregunta 7

El coeficiente de correlación $r = -0.0589$ indica:

a) Asociación positiva fuerte
b) Asociación **negativa y débil**
c) Asociación nula exacta
d) Asociación perfecta

> **b) Asociación negativa y débil**

---

### Pregunta 8

El coeficiente de determinación $r^2 = 0.0035$ interpreta que:

a) El 99.65% de la variación se explica por el modelo
b) Solo el **0.35%** de la variación de $Y$ se explica por $X$
c) La regresión es perfecta
d) $X$ y $Y$ no tienen error

> **b) Solo el 0.35% de la variación de Y se explica por X**

---

### Pregunta 9

Una pendiente **negativa** ($m = -0.0354$) significa que:

a) A mayor $x$, mayor $y$
b) A mayor $x$, **menor** $y$
c) $x$ no influye en $y$
d) La recta es horizontal

> **b) A mayor x, menor y**

---

### Pregunta 10

¿Qué papel juegan las **tablas auxiliares** en el método de mínimos cuadrados?

a) Solo se usan para graficar
b) Organizan los cálculos de sumas de $x$, $y$, $xy$, $x^2$, $y^2$
c) Son opcionales y no aportan
d) Guardan los resultados de la prueba

> **b) Organizan los cálculos de sumas de x, y, xy, x², y²**

---

## 🔗 Temas Relacionados
- [[teoria|Teoría de mínimos cuadrados]]
- [[tablas_calculo|Tablas auxiliares]]
- [[04_variables_aleatorias|Variables aleatorias]]