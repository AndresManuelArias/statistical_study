# 📝 Ejercicios: Teorema de Bayes

## 🎬 Datos del Video
- **Título:** Cómo entender el Teorema de Bayes en minutos
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=Fi6G48j0IZ4)

---

## 📋 Resumen
Ejercicios prácticos resueltos paso a paso mediante **diagramas de árbol** y el **Teorema de Bayes**, usando datos reales del dataset de matrimonios.

---

## 📌 Ejercicio 1: ¿Quién hizo terapia entre los divorciados?

**Enunciado:**
```
En el dataset (N = 45000):
  P(T) = P(hizo terapia prematrimonial) = 10972/45000 = 0.2438
  P(D) = P(divorciado) = 20708/45000 = 0.4602
  P(D|T) = 0.3719   (divorcio dado que hizo terapia)
  P(D|noT) = 0.4887 (divorcio dado que no hizo terapia)
Si un matrimonio resultó DIVORCIADO, ¿cuál es la probabilidad de
que HAYA hecho terapia prematrimonial?
```

**Solución (diagrama de árbol):**
```
            P(T) = 0.2438
           /        \
   P(D|T)=0.3719   P(D|T)=0.4887   ← (D|noT)
        → 0.0907  → 0.3695
```

1. **Probabilidad total de D:**
   $$
   P(D) = P(T)P(D|T) + P(noT)P(D|noT) = 0.2438(0.3719) + 0.7562(0.4887) = 0.4602
   $$
2. **Teorema de Bayes:**
   $$
   P(T|D) = \frac{P(T)P(D|T)}{P(D)} = \frac{0.2438 \times 0.3719}{0.4602} = 0.1970
   $$
3. Un matrimonio divorciado tiene probabilidad **0.1970 (19.7%)** de haber hecho terapia.

---

## 📌 Ejercicio 2: Verificar la probabilidad total

**Enunciado:**
```
Con los mismos datos, verifica que la probabilidad P(D) obtenida por
la ley de la probabilidad total coincide con 20708/45000.
```

**Solución:**
1. **Primera rama (terapia):** $P(T)P(D|T) = 0.2438 \times 0.3719 = 0.0907$
2. **Segunda rama (sin terapia):** $P(noT)P(D|noT) = 0.7562 \times 0.4887 = 0.3695$
3. **Suma:** $0.0907 + 0.3695 = 0.4602$ = $\frac{20708}{45000}$ ✔

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

El **Teorema de Bayes** permite calcular:

a) La probabilidad condicional inversa a la dada ($P(A|B)$ a partir de $P(B|A)$)
b) La media de la muestra
c) El error estándar
d) La recta de regresión

> **a) La probabilidad condicional inversa a la dada (P(A|B) a partir de P(B|A))**

---

### Pregunta 2

La fórmula del **Teorema de Bayes** es:

a) $P(A_i|B) = \frac{P(A_i)P(B|A_i)}{\sum_j P(A_j)P(B|A_j)}$
b) $P(A_i|B) = P(A_i) + P(B|A_i)$
c) $P(A_i|B) = \frac{P(B)}{P(A_i)}$
d) $P(A_i|B) = P(B|A_i)$

> **a) $P(A_i|B) = \frac{P(A_i)P(B|A_i)}{\sum_j P(A_j)P(B|A_j)}$**

---

### Pregunta 3

En el teorema de Bayes, $P(A_i)$ se denomina probabilidad:

a) **a priori**
b) a posteriori
c) marginal del convexo
d) muestral

> **a) a priori**

---

### Pregunta 4

En el teorema de Bayes, $P(A_i|B)$ se denomina probabilidad:

a) a priori
b) **a posteriori**
c) total
d) condicional del denominador

> **b) a posteriori**

---

### Pregunta 5

El **denominador** en el teorema de Bayes representa:

a) La varianza poblacional
b) La **probabilidad total** de $B$
c) La media muestral
d) El tamaño de la muestra

> **b) La probabilidad total de B**

---

### Pregunta 6

En el Ejercicio 1, la probabilidad $P(D)$ calculada por la ley de probabilidad total fue:

a) 0.2438
b) 0.3719
c) **0.4602**
d) 0.1970

> **c) 0.4602**

---

### Pregunta 7

En el Ejercicio 1, el resultado del teorema de Bayes $P(T|D) = 0.1970$ significa que:

a) El 19.7% de todos los matrimonios hizo terapia
b) **Entre los divorciados, el 19.7% había hecho terapia**
c) El 19.7% de los que hicieron terapia se divorcian
d) El 19.7% de los casados se divorcia

> **b) Entre los divorciados, el 19.7% había hecho terapia**

---

### Pregunta 8

Para aplicar Bayes, el conjunto de eventos $A_1, A_2, \ldots, A_n$ debe:

a) Ser disjuntos y cubrir todo el espacio muestral (una partición)
b) Ser independientes de $B$
c) Tener la misma probabilidad
d) Ser continuos

> **a) Ser disjuntos y cubrir todo el espacio muestral (una partición)**

---

### Pregunta 9

Con los datos del Ejercicio 1, la rama "sin terapia" aporta a $P(D)$ un valor de:

a) 0.0907
b) **0.3695**
c) 0.4602
d) 0.7562

> **b) 0.3695**

---

### Pregunta 10

Si $P(T|D) = 0.1970$ pero $P(T) = 0.2438$, se puede decir que el evento "hacer terapia" es:

a) Más probable entre divorciados que en la población general
b) **Menos probable entre divorciados que en la población general**
c) Igual de probable
d) Independiente del divorcio

> **b) Menos probable entre divorciados que en la población general**

---

## 🔗 Temas Relacionados
- [[teoria|Teoría de Bayes]]
- [[formula_referencia|Fórmulas de referencia]]
- [[03_probabilidad|Probabilidad]]