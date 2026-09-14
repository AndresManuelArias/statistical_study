# 📝 Ejercicios: Distribución Chi-Cuadrado

## 🎬 Datos del Video
- **Título:** Distribución chi-cuadrado
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=gHkMGcn2MsE)

---

## 📋 Resumen
Ejercicios resueltos paso a paso sobre la prueba de independencia con **χ²**, usando datos reales del dataset de matrimonios.

---

## 📌 Ejercicio 1: Independencia entre nivel educativo y divorcio

**Enunciado:**
```
Tomamos el dataset de matrimonios (N = 45000) y cruzamos el nivel
educativo con la variable divorced. ¿Existe dependencia estadística
entre el nivel educativo y el divorcio?
```

**Tabla de contingencia (frecuencias observadas $O$):**

| Nivel educativo | No divorciado | Divorciado | Total fila |
|-----------------|---------------|------------|-----------|
| less_than_hs | 1503 | 2571 | 4074 |
| high_school | 5616 | 6925 | 12541 |
| some_college | 5907 | 4980 | 10887 |
| bachelors | 7199 | 4501 | 11700 |
| graduate | 4067 | 1731 | 5798 |
| **Total columna** | 24292 | 20708 | **45000** |

**Solución:**
1. **Hipótesis:** $H_0$: las variables son **independientes**; $H_1$: existe **dependencia**.
2. **Frecuencias esperadas:** $E_{ij} = \frac{(\text{total fila})(\text{total columna})}{\text{total general}}$. Por ejemplo, para bachelors divorciado: $E = \frac{11700 \times 20708}{45000} = 5384$.
3. **Grados de libertad:** $GL = (r-1)(c-1) = (5-1)(2-1) = 4$.
4. **Estadístico:** aplicando $\chi^2 = \sum \frac{(O-E)^2}{E}$ sobre las 10 celdas se obtiene:
   $$
   \chi^2 = 1784.74
   $$
5. **Valor crítico** para $GL=4$ y $\alpha=0.05$: $\chi^2_{crit} = 9.488$.
6. **Conclusión:** como $1784.74 > 9.488$, se **rechaza $H_0$**: existe una **dependencia estadística significativa** entre el nivel educativo y el divorcio.

---

## 📌 Ejercicio 2: Calcular una frecuencia esperada

**Enunciado:**
```
En la tabla del Ejercicio 1, calcula la frecuencia esperada de
matrimonios con educación "high_school" que NO se divorcian.
```

**Solución:**
1. Total fila (high_school) = 12541.
2. Total columna (no divorciado) = 24292.
3. $E = \frac{12541 \times 24292}{45000} = 6770$.

---

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py`.

### Pregunta 1

La prueba **chi-cuadrado** se usa principalmente para:

a) Comparar medias de dos grupos
b) Determinar si dos variables **categóricas** son independientes
c) Estimar la pendiente de una regresión
d) Calcular la media de una población

> **b) Determinar si dos variables categóricas son independientes**

---

### Pregunta 2

En la prueba chi-cuadrado, la **hipótesis nula** afirmarque:

a) Las variables son dependientes
b) Las variables son **independientes**
c) La media es 0
d) La varianza es 1

> **b) Las variables son independientes**

---

### Pregunta 3

La fórmula de los **grados de libertad** en una tabla de contingencia es:

a) $r \times c$
b) $(r-1)(c-1)$
c) $r + c$
d) $rc - 1$

> **b) $(r-1)(c-1)$**

---

### Pregunta 4

La **frecuencia esperada** $E_{ij}$ en cada celda se calcula como:

a) $\frac{\text{total fila} \times \text{total columna}}{\text{total general}}$
b) $\text{total fila} \times \text{total general}$
c) $\frac{\text{total general}}{\text{total fila}}$
d) $\frac{\text{observada}}{\text{total general}}$

> **a) $\frac{\text{total fila} \times \text{total columna}}{\text{total general}}$**

---

### Pregunta 5

El estadístico chi-cuadrado se calcula como:

a) $\chi^2 = \sum (O_i - E_i)$
b) $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$
c) $\chi^2 = \sum \frac{E_i}{O_i}$
d) $\chi^2 = \sum O_i E_i$

> **b) $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$**

---

### Pregunta 6

En la tabla del Ejercicio 1, con $GL = 4$ y $\alpha = 0.05$, el valor crítico es 9.488. Como $\chi^2 = 1784.74$:

a) No se rechaza $H_0$
b) Se rechaza $H_0$: hay evidencia de dependencia
c) Se aceptan ambas hipótesis
d) No hay datos suficientes

> **b) Se rechaza H0: hay evidencia de dependencia**

---

### Pregunta 7

La frecuencia esperada de matrimonios con educación `bachelors` y divorciados se calculó con $E = \frac{11700 \times 20708}{45000} = 5384$. Esto se compara con la frecuencia **observada** que fue:

a) 7199
b) 4501
c) 5384
d) 11700

> **b) 4501**

---

### Pregunta 8

¿Cuál es la condición habitual para usar la prueba chi-cuadrado de independencia?

a) Que las frecuencias esperadas sean grandes (≥ 5)
b) Que los datos sean numéricos continuos
c) Que $n \geq 30$
d) Que la población sea normal

> **a) Que las frecuencias esperadas sean grandes (≥ 5)**

---

### Pregunta 9

Con los grados de libertad de la tabla del Ejercicio 1 (5 niveles educativos × 2 estados de divorcio), $GL$ vale:

a) 10
b) 4
c) 8
d) 5

> **b) 4**

---

### Pregunta 10

En el Ejercicio 1, la conclusión estadística (rechazar $H_0$) significa que:

a) El divorcio causa el nivel educativo
b) Existe una **dependencia estadística** entre nivel educativo y divorcio
c) No hay ninguna relación entre las variables
d) Se debe repetir el experimento

> **b) Existe una dependencia estadística entre nivel educativo y divorcio**

---

## 🔗 Temas Relacionados
- [[teoria|Teoría Chi-Cuadrado]]
- [[tabla_chi_cuadrado|Tabla χ²]]
- [[chi_cuadrado_prueba|Prueba Chi-Cuadrado]]
- [[07_prueba_hipotesis|Prueba de hipótesis]]