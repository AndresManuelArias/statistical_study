# 📚 Contenido del Curso de Estadística Inferencial

## 🎬 Datos del Video
- **Título:** Presentación del curso | Estadística Inferencial
- **Enlace:** [Ver video](https://www.youtube.com/watch?v=ma-3oipQ7uM)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

---

## 📋 Descripción General

Este curso cubre los fundamentos de la **Estadística Inferencial**, partiendo desde conceptos previos (álgebra, conjuntos, funciones) hasta las pruebas de hipótesis paramétricas y no paramétricas.

> 📊 **Datos para practicar:** Dispones de un dataset real en `ejercicios_practicos/datos_matrimonio/` (longitud de matrimonios) que puedes usar para aplicar cada tema con datos reales.

---

## 📌 Índice de Temas del Curso

**Leyenda de estado:**
- ✅ **Listo para practicar** → ya hay datos reales para aplicarlo
- ⏳ **Por estudiar** → tema pendiente de ver el video
- 🔧 **En preparación** → tema con datos pero falta definir el ejercicio

| # | Tema | Archivo de Anotaciones | Estado |
|---|------|------------------------|--------|
| 1 | Repaso de conceptos previos (álgebra, conjuntos, funciones) | [[01_repaso_conceptos_previos]] | ✅ **Evaluado: 8.0/10** |
| 2 | Análisis combinatorio (permutaciones y combinaciones) | [[02_analisis_combinatorio]] | ⏳ Por estudiar |
| 3 | Probabilidad (simple, geométrica, axiomática, frecuentista) | [[03_probabilidad]] | 🔧 Ejercicio por definir |
| 4 | Variables aleatorias y distribuciones de probabilidad | [[04_variables_aleatorias]] | 🔧 Ejercicio por definir |
| 5 | Distribuciones muestrales, ley de los grandes números, TLC | [[05_distribuciones_muestrales]] | 🔧 Ejercicio por definir |
| 6 | Población, muestras y técnicas de muestreo | [[06_muestreo]] | ✅ Aplicable al dataset |
| 7 | Prueba de hipótesis (significancia, valor $p$, potencia, errores) | [[07_prueba_hipotesis]] | ✅ Aplicable al dataset |

---

## 📌 Temas Avanzados Relacionados

| Tema | Archivo | Estado | Ejemplo con datos reales |
|------|---------|--------|--------------------------|
| Prueba t de Student | [[t_student]] | ✅ Aplicable | Comparar `years_married` entre divorciados y no divorciados |
| ANOVA | [[anova]] | ✅ Aplicable | Comparar `years_married` según nivel educativo (3+ grupos) |
| Chi-Cuadrado (independencia) | [[chi_cuadrado_prueba]] | ✅ Aplicable | Dependencia entre `education_level` y `divorced` |
| Pruebas no paramétricas | [[no_parametricas]] | ✅ Aplicable | Mann-Whitney/Wilcoxon si no hay normalidad |
| Distribución Chi-Cuadrado | [[teoria\|Chi-Cuadrado Teoría]] | ✅ Aplicable | Tablas de contingencia del dataset |
| Mínimos Cuadrados (regresión) | [[teoria\|Mínimos Cuadrados]] | ✅ Aplicable | Predecir `years_married` con `age_at_marriage` |
| Teorema de Bayes | [[teoria\|Teorema de Bayes]] | ✅ Aplicable | P(divorcio | premarital_counseling) |
| Muestreo | [[06_muestreo]] | ✅ Aplicable | Extraer una muestra del dataset |

---

## 📌 Ejercicios Propuestos con Datos Reales

Partiendo del dataset `marriage_longevity_master.csv`:

| # | Tema a Practicar | Pregunta de Investigación |
|---|------------------|---------------------------|
| 1 | **Chi-Cuadrado (χ²)** | ¿Existe dependencia entre el nivel educativo (`education_level`) y el divorcio (`divorced`)? |
| 2 | **Mínimos Cuadrados** | ¿Puede la edad al casarse (`age_at_marriage`) predecir los años de matrimonio (`years_married`)? |
| 3 | **Teorema de Bayes** | ¿Cuál es la probabilidad de que un matrimonio haya durado 10+ años sabiendo que hicieron terapia prematrimonial (`premarital_counseling=1`)? |
| 4 | **t-Student / Mann-Whitney** | ¿Difieren los años de matrimonio entre quienes se divorciaron vs. quienes siguen casados? |
| 5 | **ANOVA** | ¿Hay diferencia en los años de matrimonio según el nivel educativo? |
| 6 | **Muestreo** | Extraer una muestra aleatoria y comparar medias con la población |

## 📁 Estructura de Carpetas por Tema

Cada tema del curso vive en su propia carpeta dentro de `00_curso_estadistica_inferencial/`.
El evaluador (`evaluador.py`) entra a esta carpeta, descubre cada tema y guarda el
control de evaluaciones (JSON) dentro de la carpeta de cada tema.

```
00_curso_estadistica_inferencial/
├── 00_contenido/                 → este archivo (índice del curso)
├── 01_repaso_conceptos_previos/  → anotaciones + evaluaciones JSON
├── 02_analisis_combinatorio/
├── 03_probabilidad/
├── 04_variables_aleatorias/
├── 05_distribuciones_muestrales/
├── 06_muestreo/
└── 07_prueba_hipotesis/
```

> 💡 Para evaluar un tema: ejecuta `./ejecutar.sh` y selecciona la carpeta del curso.
> El tema aparecerá en verde si su nota guardada es ≥ 8.0 y en rojo si es menor.

---

## 🔗 Temas Relacionados
- [[_plantilla_anotaciones|Plantilla de anotaciones]]
- [[03_probabilidad|Probabilidad]]
- [[07_prueba_hipotesis|Prueba de hipótesis]]
- [[consulta_datos_practica|Guía de práctica con datos]]
- [[data_dictionary|Diccionario de datos]]
