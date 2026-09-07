# 📋 Plan: Actualizar `00_curso_estadistica_inferencial` con los temas de los videos

> **Fuente:** playlist "Curso de Estadística Inferencial" (69 videos) + 2 videos avanzados.
> **Objetivo:** que cada video del curso tenga su carpeta de anotaciones con explicación,
> ejemplo en Python con el dataset real y preguntas de evaluación (formato evaluador).

---

## 1. Estado actual (verificado hoy)

| Rango de videos | Bloque | Carpeta actual | Estado |
|-----------------|--------|----------------|--------|
| 1 | Presentación del curso | `00_contenido` | ✅ |
| 2-13 | Teoría de conjuntos (definición, subconjuntos, vacío/universal, complemento, intersección, unión, diferencia, ejercicios 1-3, cardinalidad, potencia) | `01_repaso_conceptos_previos` | ✅ **Ampliado hoy** (34 preguntas) |
| 14-22 | Carroll Diagrams, Producto de conjuntos, Relations, Domain/Codomain/Range, Functions, Tipos de funciones, Variable dep./indep., Función biyectiva, Conjuntos finitos e infinitos | **NO EXISTE** | ⏳ **PENDIENTE** |
| 23-25, 32-37 | Probabilidad (clásica, geométrica, frecuentista, axiomática, condicional, independientes, excluyentes) | `03_probabilidad` | ✅ |
| 26-31 | Análisis combinatorio (ordenaciones c/r y s/r, muestras, combinaciones, ejercicios) | `02_analisis_combinatorio` | ✅ |
| 38-40 | Variables aleatorias, distribuciones de probabilidad, tipos | `04_variables_aleatorias` | ✅ |
| 41-47 | Bernoulli, Binomial (+parte 2), Momentos, Poisson, **Geométrica**, **Binomial Negativa** | `04_variables_aleatorias` | ⏳ parcial (falta Geométrica, Binomial Negativa, Momentos) |
| 48-52 | **Normal**, Normal Estándar, **t de Student**, **F**, **Ji Cuadrada** | `04_variables_aleatorias` | ⏳ parcial (falta t, F, Ji²) |
| 53, 55-57 | Sampling, Tipos de muestreo, MAS, Estratificado | `06_muestreo` | ✅ |
| 58 | **Cluster Random Sampling** | `06_muestreo` | ⏳ falta verificar |
| 54, 59-61 | Sample Size/LGN, Distribución muestral 1, TLC, Distribución muestral 2 | `05_distribuciones_muestrales` | ✅ |
| 62-69 | Inferencial, hypothesis testing, paramétricas/no paramétricas, muestras ind/dep, requisitos, H0/H1, aplicación, zonas de rechazo | `07_prueba_hipotesis` | ✅ |

> Videos extra fuera de la playlist (ya cubiertos en carpetas avanzadas):
> - **Distribución chi-cuadrado** (gHkMGcn2MsE) → `01_chi_cuadrado`
> - **Método de Mínimos cuadrados** (gUdU6BgnJ2c) → `02_minimos_cuadrados`
> - **Cómo entender el Teorema de Bayes** (Fi6G48j0IZ4) + **EL TEOREMA DE BAYES !EXPLICADO!** (3vtS2qc4t6o) → `03_teorema_bayes`

---

## 2. Brecha principal: bloque de Relaciones y Funciones (videos 14-22)

Es el **único bloque completo sin cobertura**. Son conceptos previos de álgebra superior
que el temario señala como base junto con teoría de conjuntos.

**Propuesta:** crear una carpeta nueva **`08_relaciones_funciones/`** (no renumerar los
temas 01-07 para no romper los JSON de evaluaciones existentes) con la estructura:

```
08_relaciones_funciones/
├── 08_relaciones_funciones.md   → anotaciones + ejemplo Python + preguntas
└── (JSON de evaluación se genera al ejecutar el evaluador)
```

**Contenido por video (9 secciones):**

| Video | Sección en el tema 08 |
|-------|-----------------------|
| 14. Carroll Diagrams | 1. Diagramas de Carroll (vs Venn): tabla de pertenencia |
| 15. Producto de conjuntos | 2. Producto cartesiano A×B (pares ordenados) |
| 16. Relations | 3. Relaciones binarias (subconjuntos de A×B) |
| 17. Domain, Codomain, Range | 4. Dominio, codominio y rango/imagen |
| 18. Functions | 5. Funciones (relación donde cada x tiene un único y) |
| 19. Tipos de funciones | 6. Inyectiva, sobreyectiva, biyectiva |
| 20. Variable dependiente e independiente | 7. Variables dependiente/independiente |
| 21. Función biyectiva | 8. Biyección e inversa (ej.: codificar education_level) |
| 22. Conjuntos finitos e infinitos | 9. Cardinalidad finita/infinita (ℕ, ℝ) |

**Conexión con el dataset real (para el ejemplo Python):**
- Funciones: mapear `education_level` → `divorce_rate` (cada categoría → un valor único).
- Dominio = 5 categorías educativas; rango = tasas de divorcio observadas.
- Producto cartesiano: pares `(education_level, premarital_counseling)` → base para tablas de contingencia (χ²).
- Variable dependiente = `divorced` / independiente = `education_level`.
- Conjunto potencia ya visto en el tema 01; los conjuntos finitos del dataset (45,000) vs infinitos (ℕ).

---

## 3. Brechas secundarias (completar temas existentes)

### 3.1 `04_variables_aleatorias` — completar distribuciones
- Agregar **Distribución Geométrica** (video 46): P(X=k) = (1-p)^(k-1) p; ejemplo: nº de matrimonios hasta el primer divorcio.
- Agregar **Distribución Binomial Negativa** (video 47): nº de ensayos hasta r éxitos.
- Agregar **Momentos de las variables aleatorias** (video 43): μ, E[X²], varianza, asimetría.
- Agregar **t de Student** (video 50), **F** (video 51), **Ji Cuadrada** (video 52): solo teoría/intuición en el tema 04 (la aplicación está en los temas avanzados).

### 3.2 `06_muestreo` — verificar/completar
- Verificar si **Cluster Random Sampling** (video 58) está cubierto; si no, agregar
  comparación MAS vs estratificado vs **conglomerados** con el dataset (muestreo por `state`).

---

## 4. Pasos de implementación (en orden)

### Fase A — Tema nuevo 08 (prioridad alta)
1. Copiar `_plantilla_anotaciones.md` como base.
2. Escribir las 9 secciones del tema 08 (tabla anterior), con formato del tema 01:
   - `## 🎬 Datos del video` (título + enlace + playlist)
   - `## 🧮 Explicación del tema` (una sección por video)
   - `## 🐍 Ejemplo en Python` (verificado contra `marriage_longevity_master.csv`)
   - `## ✅ Evaluación` (preguntas en formato evaluador)
   - `## ❓ Dudas pendientes` y `## 🔗 Temas relacionados`
3. Verificar el ejemplo Python con el entorno local-tk.
4. Ejecutar `parsear_preguntas` para validar (0 LaTeX restante, 0 respuestas sin opción).

### Fase B — Completar distribuciones en tema 04
1. Agregar las secciones faltantes (Geométrica, Binomial Negativa, Momentos, t, F, Ji²).
2. Agregar preguntas nuevas (continuar numeración) y verificar con `parsear_preguntas`.

### Fase C — Completar muestreo (tema 06)
1. Verificar cobertura de Cluster Sampling → agregar si falta.
2. Agregar preguntas si se añade contenido nuevo.

### Fase D — Actualizar índice y registrar
1. Actualizar `00_contenido/00_contenido_curso.md`:
   - Agregar fila "8 | Relaciones y funciones | [[08_relaciones_funciones]] | ⏳ Por estudiar".
   - Actualizar tabla de estructura de carpetas.
2. Actualizar este plan marcando lo completado.
3. Ejecutar `./ejecutar.sh` completo para confirmar que el evaluador descubre 9 temas del curso.

---

## 5. Formato estándar de cada tema (para copiar)

```markdown
# 📚 <Título del tema>

## 🎬 Datos del video
- **Título:** <nombre del video>
- **Enlace:** [Ver video](<url>)
- **Playlist:** [Curso completo](https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa)

## 🧮 Explicación del tema
...

## 🐍 Ejemplo en Python
...

## ✅ Evaluación
### Pregunta 1
a) ...
b) ...
c) ...
d) ...

> **b) ...**

## ❓ Dudas pendientes
- [ ] ...

## 🔗 Temas relacionados
- [[...]]
```

---

## 6. Criterios de "listo"

> ✅ **Actualizado 2026-09-07:** Fases A (tema 08), B (distribuciones) y C (conglomerados) implementadas y verificadas. Pendiente solo **evaluar** los temas con `./ejecutar.sh`.

- [x] Tema 08 creado con 9 secciones + ejemplo Python verificado + 14 preguntas.
- [x] Tema 04 completo con las distribuciones faltantes y preguntas nuevas (22 total).
- [x] Tema 06 con Cluster Sampling verificado (conglomerados en el ejemplo).
- [x] `00_contenido_curso.md` actualizado.
- [x] `parsear_preguntas` da 0 LaTeX restante en todos los temas (178 preguntas).
- [x] Evaluador descubre 13 carpetas (9 curso + 4 avanzadas) y guarda JSON por tema.
