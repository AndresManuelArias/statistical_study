---
titulo: "Análisis combinatorio"
tipo: anotacion-video
tema: Análisis combinatorio
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Análisis Combinatorio

## 🎬 Datos del video
- **Título:** Análisis Combinatorio | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Analisis+Combinatorio+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
El análisis combinatorio estudia las formas de contar. Sus pilares son el principio multiplicativo, el principio de la suma y las diversas técnicas de conteo: permutaciones, variaciones, combinaciones y sus variantes con repetición.

## 🧮 Contenido

### Principio multiplicativo (regla de la cadena)
Si un proceso consta de $k$ etapas sucesivas, donde la etapa $i$ tiene $n_i$ opciones posibles, el número total de formas de completar el proceso es:

$$N = n_1 \times n_2 \times \cdots \times n_k$$

**Ejemplo:** Elegir una comida: 3 platos de fondo × 4 ensaladas × 2 bebidas = $3 \times 4 \times 2 = 24$ combinaciones.

### Principio de la suma (regla de la disyunción)
Si una tarea se puede realizar de $n_1$ formas **o** de $n_2$ formas (sin superposición), el número total es:

$$N = n_1 + n_2$$

**Ejemplo:** Hay 5 camisas azules y 3 camisas rojas en un clóset. Si solo usarás una camisa, tienes $5 + 3 = 8$ opciones.

### Resumen de técnicas de conteo

| Técnica | ¿Orden importa? | ¿Repetición? | Fórmula |
|---|---|---|---|
| Variación con repetición | ✅ | ✅ | $VR(n,r) = n^r$ |
| Variación sin repetición | ✅ | ❌ | $V(n,r) = \frac{n!}{(n-r)!}$ |
| Permutación | ✅ | ❌ | $P(n) = n!$ |
| Combinación | ❌ | ❌ | $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$ |
| Combinación con repetición | ❌ | ✅ | $CR(n,r) = \binom{n+r-1}{r}$ |

### ¿Cuándo usar cada una? — Guía rápida

**¿El orden importa?**
- **Sí** → Variaciones o permutaciones
- **No** → Combinaciones

**¿Se permite repetición?**
- **Sí** → $VR$ o $CR$
- **No** → $V$ o $C$

**¿Se eligen todos los elementos ($r = n$)?**
- **Sí y orden importa** → Permutación $n!$
- **Sí y orden no importa** → Solo 1 forma

### Fórmulas fundamentales

**Permutaciones sin repetición:**
$$P(n) = n!$$

**Variaciones sin repetición:**
$$V(n,r) = \frac{n!}{(n-r)!}$$

**Variaciones con repetición:**
$$VR(n,r) = n^r$$

**Combinaciones sin repetición:**
$$C(n,r) = \binom{n}{r} = \frac{n!}{r!\,(n-r)!}$$

**Combinaciones con repetición:**
$$CR(n,r) = \binom{n+r-1}{r} = \frac{(n+r-1)!}{r!\,(n-1)!}$$

### Relaciones entre fórmulas
- $C(n,r) = \frac{V(n,r)}{r!}$: una combinación es una variación "dividida" entre las formas de ordenar $r$ elementos.
- $V(n,r) = P(n) / (n-r)!$: las variaciones son permutaciones parciales.

## 💡 Ejemplo numérico
De un grupo de **8 personas**, se quiere elegir un **comité de 3** sin orden:

$$C(8,3) = \frac{8!}{3!\,5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56$$

Si el comité tiene **presidente, secretario y tesorero** (el orden importa):

$$V(8,3) = \frac{8!}{5!} = 8 \times 7 \times 6 = 336$$

Si además se pueden repetir personas en varios cargos (por ejemplo, alguien puede ser presidente y secretario):

$$VR(8,3) = 8^3 = 512$$

## 🌍 Ejemplo de la vida real
Un **restaurante** ofrece un menú del día: 4 entradas, 5 platos de fondo, 3 postres y 6 bebidas. Un cliente quiere elegir exactamente 1 de cada categoría. Aplicamos el principio multiplicativo:

$$N = 4 \times 5 \times 3 \times 6 = 360$$

Si el restaurante además ofrece "combo libre" donde el cliente elige **2 items de entre 4 opciones** (sin importar el orden, sin repetición):

$$C(4,2) = \frac{4!}{2!\,2!} = 6$$

> [!tip] Relación con el curso
> El análisis combinatorio es la herramienta que permite contar resultados favorables en un espacio muestral, lo cual es esencial para calcular probabilidades mediante la definición clásica $P(A) = |A|/|\Omega|$.
