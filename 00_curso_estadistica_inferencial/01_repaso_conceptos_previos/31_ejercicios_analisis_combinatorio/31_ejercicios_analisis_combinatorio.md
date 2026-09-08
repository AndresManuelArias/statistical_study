---
titulo: "Ejercicios de análisis combinatorio"
tipo: anotacion-video
tema: Ejercicios de análisis combinatorio
tags:
  - estadistica-inferencial
  - combinatoria
---

# 📘 Ejercicios de Análisis Combinatorio

## 🎬 Datos del video
- **Título:** Ejercicios de Análisis Combinatorio | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Ejercicios+de+Analisis+Combinatorio+Estadistica+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
En este archivo resolvemos varios ejercicios donde se debe elegir la técnica combinatoria adecuada: principio multiplicativo, variaciones con/sin repetición, combinaciones y combinaciones con repetición. La clave es preguntarse: **¿importa el orden?** y **¿hay repetición?**

## 🧮 Contenido

### Tabla de decisión rápida

| Criterio | Respuesta | Técnica |
|---|---|---|
| ¿El orden importa? | **Sí** + con repetición | $VR(n,r) = n^r$ |
| ¿El orden importa? | **Sí** + sin repetición | $V(n,r) = \frac{n!}{(n-r)!}$ |
| ¿El orden importa? | **No** + sin repetición | $C(n,r) = \frac{n!}{r!(n-r)!}$ |
| ¿El orden importa? | **No** + con repetición | $CR(n,r) = \binom{n+r-1}{r}$ |
| ¿Son etapas independientes? | Sí | Principio multiplicativo |

### Mini-problema 1 — Contraseña (variación con repetición)

**Problema:** ¿Cuántas contraseñas de **5 caracteres** se pueden crear usando las 26 letras del alfabeto (sin distinguir mayúsculas de minúsculas) si las letras **pueden repetirse**?

**Análisis:**
- ¿El orden importa? **Sí** (ABCDA ≠ ABDAA).
- ¿Hay repetición? **Sí** (se puede reutilizar letras).

**Técnica:** Variación con repetición.

$$VR(26,5) = 26^5 = 26 \times 26 \times 26 \times 26 \times 26 = 11\,881\,376$$

Más de **11 millones** de contraseñas posibles.

---

### Mini-problema 2 — Equipo sin cargos (combinación)

**Problema:** De **12 candidatos**, se debe formar un equipo de **4 personas** sin asignar roles específicos (todos son miembros equivalentes). ¿Cuántos equipos se pueden formar?

**Análisis:**
- ¿El orden importa? **No** (el equipo {Ana, Luis, María, Pedro} es igual a {Pedro, Ana, Luis, María}).
- ¿Hay repetición? **No** (una persona no puede estar dos veces en el equipo).

**Técnica:** Combinación.

$$C(12,4) = \frac{12!}{4!\,8!} = \frac{12 \times 11 \times 10 \times 9}{4 \times 3 \times 2 \times 1} = \frac{11\,880}{24} = 495$$

**495** equipos posibles.

---

### Mini-problema 3 — Reparto de caramelos (combinación con repetición)

**Problema:** Un tendero tiene **5 tipos de caramelos** (menta, fresa, chocolate, limón, naranja) y un cliente quiere llevar **7 caramelos** en total. Puede elegir cuántos de cada tipo. ¿Cuántas formas hay de elegir los caramelos?

**Análisis:**
- ¿El orden importa? **No** (solo importa cuántos hay de cada tipo).
- ¿Hay repetición? **Sí** (puede llevar varias mentas, por ejemplo).

**Técnica:** Combinación con repetición.

$$CR(5,7) = \binom{5+7-1}{7} = \binom{11}{7} = \binom{11}{4} = \frac{11 \times 10 \times 9 \times 8}{4 \times 3 \times 2 \times 1} = \frac{7\,920}{24} = 330$$

**330** formas de elegir los caramelos.

---

### Mini-problema 4 — Podium con restricciones (variación sin repetición)

**Problema:** En una carrera con **9 participantes**, se premian los **3 primeros** lugares (oro, plata, bronce). Sin embargo, el corredor en posición 1 no puede quedar en segundo lugar. ¿Cuántas formas hay de asignar el pódium bajo esta restricción?

**Análisis sin restricción:**
Primero calculemos el total sin restricciones. El orden importa y no hay repetición:

$$V(9,3) = \frac{9!}{6!} = 9 \times 8 \times 7 = 504$$

**Análisis con restricción:**
El corredor 1 no puede quedar en 2° lugar, así que solo puede quedar en **1° o 3°**:

- Corredor 1 en **1° lugar**: quedan 2 posiciones (2° y 3°) para 2 de los 8 corredores restantes, y el orden importa → $V(8,2) = 8 \times 7 = 56$
- Corredor 1 en **3° lugar**: quedan 2 posiciones (1° y 2°) para 2 de los 8 corredores restantes → $V(8,2) = 8 \times 7 = 56$

$$\text{Total} = 56 + 56 = 112$$

Bajo la restricción, hay **112** formas de asignar el pódium.

---

### Mini-problema 5 — Señales luminosas (principio multiplicativo + variación con repetición)

**Problema:** Un edificio tiene **4 colores de luces** (rojo, verde, azul, amarillo) y una secuencia de **6 luces** en su fachada. ¿Cuántas combinaciones de secuencias se pueden crear?

**Análisis:**
Cada posición puede ser de 4 colores, y los colores pueden repetirse.

$$VR(4,6) = 4^6 = 4096$$

**¿Cuántas secuencias con todos los colores diferentes?**
Esto requiere usar cada color exactamente una vez (pero hay 6 posiciones y solo 4 colores). Imposible, así que si exigimos **sin repetición**, necesitamos $r \le n$. Si la pregunta fuera "3 luces, 4 colores, sin repetición":

$$V(4,3) = \frac{4!}{1!} = 4 \times 3 \times 2 = 24$$

**24** secuencias de 3 luces con colores distintos.

## 🌍 Ejemplo de la vida real
En una **tienda de juguetes**, un niño quiere comprar **6 juguetes** de entre 4 tipos: carros, muñecas, rompecabezas y pelotas. El orden no importa y puede repetir tipos. La cantidad de opciones es $CR(4,6) = \binom{9}{6} = \binom{9}{3} = 84$ formas de elegir. Si el niño además quisiera **ordenarlos** en una estantería, necesitaríamos otra técnica.

> [!tip] Relación con el curso
> Elegir la técnica combinatoria correcta es el paso previo para calcular probabilidades. En inferencia estadística, contar correctamente los casos favorables y posibles es fundamental para estimaciones y pruebas de hipótesis.
