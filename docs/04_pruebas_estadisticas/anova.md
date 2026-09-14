# 📊 ANOVA (Análisis de Varianza)

## 🎬 Datos del Video
- **Curso:** Estadística Inferencial (tema del curso)
- **Enlace:** [Ver playlist](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

---

## 📋 Resumen General
**ANOVA** (Análisis de Varianza) compara las **medias de tres o más grupos** mediante el análisis de la varianza entre grupos y dentro de los grupos.

---

## 🔑 Conceptos Clave
- **Hipótesis nula ($H_0$):** todas las medias son iguales
- **Varianza entre grupos** vs **varianza dentro de grupos**
- **Estadístico $F$**
- **ANOVA de una vía** (un factor)

---

## 📐 Fórmulas / Ecuaciones

**Hipótesis:**

$$
H_0: \mu_1 = \mu_2 = \cdots = \mu_k \qquad H_a: \text{al menos una } \mu_i \text{ distinta}
$$

**Estadístico F:**

$$
F = \frac{\text{MS}_{entre}}{\text{MS}_{dentro}} = \frac{SC_{entre}/(k-1)}{SC_{dentro}/(n-k)}
$$

Donde:
- $k$ = número de grupos
- $n$ = total de observaciones
- $SC_{entre}$ = suma de cuadrados entre grupos
- $SC_{dentro}$ = suma de cuadrados dentro de los grupos

---

## 💡 Ejemplo Resuelto: `years_to_divorce` según nivel educativo

**Enunciado:**
```
Entre los divorciados del dataset (n = 20708) se comparan los años
hasta el divorcio (years_to_divorce) entre los 5 niveles educativos.
```

**Solución:**
1. **Hipótesis:** $H_0$: la media de `years_to_divorce` es igual en los 5 niveles; $H_a$: al menos una difiere.
2. Se calculan las **medias por grupo** y la **tabla ANOVA** (sumas de cuadrados entre y dentro de grupos).
3. Se obtiene el estadístico $F$ y su valor-p.
4. Si el valor-p < 0.05, se **rechaza $H_0$** y se concluye que el nivel educativo está asociado con el tiempo hasta el divorcio. Aplicable cuando se verifican normalidad y homogeneidad de varianzas; de lo contrario se usa **Kruskal-Wallis** (no paramétrica).

---

## ❓ Dudas Pendientes
- [ ] ¿Cuándo usar ANOVA vs t-Student?

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

**ANOVA** (Análisis de Varianza) sirve para:

a) Comparar las **medias de tres o más grupos**
b) Comparar solo dos grupos
c) Estimar la pendiente de una recta
d) Medir la independencia de variables

> **a) Comparar las medias de tres o más grupos**

---

### Pregunta 2

La **hipótesis nula** en ANOVA es:

a) $\mu_1 \neq \mu_2$
b) **$\mu_1 = \mu_2 = \cdots = \mu_k$ (todas las medias iguales)**
c) $\sigma^2_1 = 1$
d) Al menos una media difiere

> **b) $\mu_1 = \mu_2 = \cdots = \mu_k$ (todas las medias iguales)**

---

### Pregunta 3

El estadístico de ANOVA se llama:

a) $Z$
b) $t$
c) **$F$**
d) $\chi^2$

> **c) $F$**

---

### Pregunta 4

El estadístico $F$ se calcula como el cociente entre:

a) La varianza **entre grupos** y la varianza **dentro de los grupos**
b) La media y la mediana
c) La suma y el producto
d) Dos desviaciones estándar

> **a) La varianza entre grupos y la varianza dentro de los grupos**

---

### Pregunta 5

ANOVA compara las medias de los **niveles educativos**. En el dataset hay 5 niveles (`less_than_hs`, `high_school`, `some_college`, `bachelors`, `graduate`), por lo que $k$ vale:

a) 3
b) **5**
c) 45000
d) 2

> **b) 5**

---

### Pregunta 6

La alternativa **no paramétrica** al ANOVA de una vía es:

a) t de Student
b) Mann-Whitney U
c) **Kruskal-Wallis**
d) Wilcoxon

> **c) Kruskal-Wallis**

---

### Pregunta 7

La **prueba t de Student** se usa para comparar:

a) Las medias de **uno o dos grupos**
b) Tres o más grupos
c) Variables categóricas
d) La mediana de la población

> **a) Las medias de uno o dos grupos**

---

### Pregunta 8

La prueba **Mann-Whitney U** es la equivalente no paramétrica de:

a) ANOVA
b) **t de Student para grupos independientes**
c) t pareada
d) chi-cuadrado

> **b) t de Student para grupos independientes**

---

### Pregunta 9

La prueba **Wilcoxon** es la equivalente no paramétrica de:

a) ANOVA de una vía
b) t de Student independiente
c) **t de Student pareada (grupos relacionados)**
d) chi-cuadrado

> **c) t de Student pareada (grupos relacionados)**

---

### Pregunta 10

Las **pruebas no paramétricas** se usan cuando:

a) Se cumplen los supuestos de normalidad
b) **No se cumplen los supuestos de normalidad u homogeneidad de varianzas, o los datos son ordinales**
c) La muestra es muy grande
d) Siempre, sin importar los datos

> **b) No se cumplen los supuestos de normalidad u homogeneidad de varianzas, o los datos son ordinales**

---

### Pregunta 11

La **prueba chi-cuadrado** se usa para:

a) Comparar medias
b) Determinar si dos variables **categóricas** son independientes
c) Estimar la recta de regresión
d) Comparar varianzas de dos grupos

> **b) Determinar si dos variables categóricas son independientes**

---

### Pregunta 12

En ANOVA, si el valor-p es **menor** que $\alpha$ (0.05), se concluye que:

a) Las medias son todas iguales
b) **Al menos una de las medias difiere de las demás**
c) La varianza es 0
d) No hay evidencia

> **b) Al menos una de las medias difiere de las demás**

---

### Pregunta 13

Los **grados de libertad** del numerador del estadístico $F$ en ANOVA de una vía son:

a) $n-k$
b) **$k-1$**
c) $(r-1)(c-1)$
d) $n-1$

> **b) $k-1$**

---

### Pregunta 14

La prueba t de Student **pareada** se aplica cuando:

a) Los grupos son independientes
b) **Las mediciones están relacionadas (misma muestra en dos momentos)**
c) Hay más de 3 grupos
d) Los datos son categóricos

> **b) Las mediciones están relacionadas (misma muestra en dos momentos)**

---

## 🔗 Temas Relacionados
- [[t_student|t-Student]]
- [[07_prueba_hipotesis|Prueba de hipótesis]]
- [[no_parametricas|Alternativa: Kruskal-Wallis]]
- [[05_distribuciones_muestrales|Distribuciones muestrales]]
- [[00_contenido_curso|Contenido del curso]]
