---
titulo: "Experimentos aleatorios y deterministas"
tipo: anotacion-video
tema: Experimentos aleatorios y deterministas
tags:
  - estadistica-inferencial
  - probabilidad
---

# 📘 Experimentos Aleatorios y Deterministas

## 🎬 Datos del video
- **Título:** Random and Deterministic Experiments | Inferential Statistics
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Random+and+Deterministic+Experiments+Inferential+Statistics
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## 📋 Resumen
Un experimento determinista produce siempre el mismo resultado bajo las mismas condiciones, mientras que un experimento aleatorio tiene resultados que no se pueden predecir con certeza. La probabilidad estudia precisamente los experimentos aleatorios.

## 🧮 Contenido

### ¿Qué es un experimento?
Un **experimento** es cualquier proceso que se puede repetir y cuyo resultado puede observarse. Según la naturaleza del resultado, los clasificamos en dos tipos.

### Experimento determinista
Un experimento es **determinista** si, conocidas todas las condiciones iniciales, el resultado es **totalmente predecible**. Siempre se obtiene el mismo resultado al repetirlo bajo las mismas condiciones.

- Lanzar un objeto verticalmente hacia arriba en el vacío: la altura máxima depende de la velocidad inicial y la gravedad.
- Calcular el área de un rectángulo de base $b$ y altura $h$: siempre se obtiene $A = b \times h$.
- Calcular la distancia recorrida por un auto que viaja a velocidad constante $v$ durante tiempo $t$: $d = v \times t$.

En todos estos casos no hay incertidumbre: el resultado está completamente determinado por las condiciones iniciales.

### Experimento aleatorio
Un experimento es **aleatorio** si, aun conociendo todas las condiciones iniciales, **no se puede predecir con certeza** el resultado que se obtendrá. Al repetirlo bajo las mismas condiciones, pueden aparecer resultados diferentes.

- Lanzar un dado: puede salir 1, 2, 3, 4, 5 o 6.
- Tirar una moneda al aire: puede caer cara o cruz.
- Seleccionar una persona al azar de una ciudad: no sabemos de antemano su edad.
- Medir la contaminación del aire en una zona industrial: varía día a día.

### ¿Por qué importa esta distinción?
La **Estadística Inferencial** y la **Teoría de la Probabilidad** se ocupan de los experimentos aleatorios. Queremos cuantificar la incertidumbre: determinar qué tan probable es que ocurra un evento dado.

Para un experimento aleatorio, definimos:
- **Espacio muestral** ($\Omega$): el conjunto de todos los resultados posibles.
- **Evento**: un subconjunto del espacio muestral.

### Ejemplo concreto comparativo

| Experimento | Tipo | Resultado |
|---|---|---|
| Lanzar un dado de 6 caras | Aleatorio | Cualquier número del 1 al 6 |
| Calcular la raíz cuadrada de 9 | Determinista | Siempre 3 |
| Lanzar una moneda | Aleatorio | Cara o cruz |
| Calcular el perímetro de un círculo de radio 5 | Determinista | Siempre $2\pi(5) = 10\pi$ |

### Forma rigurosa de definir un experimento aleatorio
Un experimento aleatorio $E$ cumple:
1. Se puede **repetir** bajo condiciones controladas.
2. Cada repetición produce un **único resultado**.
3. El resultado de una repetición individual es **impredecible**.
4. El conjunto de resultados posibles es **conocido** de antemano.

## 💡 Ejemplo numérico
Supongamos que lanzamos un dado de 6 caras equilibrado 600 veces. Si el dado es perfecto, esperamos que cada cara aparezca aproximadamente $600 \div 6 = 100$ veces. Si en realidad la cara 4 sale 150 veces, podría indicar que el dado está sesgado. Este tipo de razonamiento conecta directamente con la inferencia: a partir de datos observados hacemos conclusiones sobre el proceso que los generó.

## 🌍 Ejemplo de la vida real
Cuando un **cajero de supermercado** pesa una fruta, el peso exacto nunca es el mismo: hay una variación natural. El peso es una variable aleatoria porque depende de factores que no podemos controlar perfectamente (humedad, tamaño de cada pieza, etc.). La tienda puede usar la probabilidad para estimar cuánto producto necesita comprar y cuánta variación esperar en cada venta.

> [!tip] Relación con el curso
> Comprender la diferencia entre experimentos deterministas y aleatorios es el punto de partida para estudiar probabilidad: solo los experimentos aleatorios requieren un marco probabilístico, que es la base de toda la Estadística Inferencial.

### Ejemplo detallado con diagrama de árbol
Considere el experimento de lanzar una moneda y luego un dado. El diagrama de árbol muestra claramente que es un experimento aleatorio: en la primera etapa hay 2 ramas (Cara o Cruz) y en la segunda 6 ramas por cada rama anterior, giving 12 hojas en total.

Cada hoja del árbol representa un resultado elemental del espacio muestral:
$$\Omega = \{(C,1),(C,2),(C,3),(C,4),(C,5),(C,6),(Z,1),(Z,2),(Z,3),(Z,4),(Z,5),(Z,6)\}$$

La probabilidad de cada hoja es $\frac{1}{12}$ si la moneda y el dado son equilibrados.

### Criterios para identificar un experimento
Para determinar si un experimento es determinista o aleatorio, pregúntate:
1. **¿Puedo predecir el resultado exacto?** Si sí → determinista.
2. **¿Se puede repetir con el mismo resultado siempre?** Si sí → determinista.
3. **¿El resultado varía entre repeticiones "iguales"?** Si sí → aleatorio.

### Proceso de medición como ejemplo
Un proceso de **medición** siempre tiene un componente aleatorio debido a errores instrumentales. Aunque midamos una cantidad fija (como la longitud de una mesa), cada medición producirá un valor ligeramente diferente. Esto convierte una medición en un experimento aleatorio, y la variabilidad se estudia con la teoría de la probabilidad.
