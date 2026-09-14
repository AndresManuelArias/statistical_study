---
titulo: Grafos y árboles
tipo: unidad-didactica
tema: grafos
tags:
  - matematica-discreta
  - grafos
---

# Grafos y árboles

> [!abstract] ¿De qué trata esta unidad?
> Un **grafo** es un conjunto de **vértices** (puntos) conectados por **aristas** (líneas). Es un mapa abstracto de conexiones: redes sociales, calles, cables, páginas web, moléculas, procesos y tareas.

> [!tip] Analogía
> Una **red social**: cada persona es un vértice y cada amistad una arista. Un grafo también modela calles, cables, páginas web, moléculas, procesos y tareas.

## 7.1 Definición formal

Un grafo es un par $G = (V, E)$, donde:
- $V$ = conjunto de **vértices** (nodos).
- $E$ = conjunto de **aristas** (conexiones entre pares de vértices).

| Concepto | Notación | Ejemplo |
|----------|----------|---------|
| Vértices | $V = \{A, B, C\}$ | 3 nodos |
| Arista | $(A,B) \in E$ | Conexión entre A y B |
| Grado de un vértice | $\deg(A)$ | Número de aristas que tocan a A |
| Grafo completo con $n$ vértices | $K_n$ | $\binom{n}{2}$ aristas (todos conectados con todos) |

> [!example] Suma de grados
> En cualquier grafo, la suma de los grados es el **doble** de las aristas: $\sum \deg(v) = 2|E|$.
> Por eso en un grafo con 4 aristas la suma de grados es 8: ¡cada arista "cuenta" en sus dos extremos!

---

## 7.2 Tipos de grafos (con diagramas)

### 1. Grafo simple (no dirigido)

Las aristas son de **dos vías** (amistad de Facebook: si A es amigo de B, B es amigo de A). Sin lazos ni aristas múltiples.

```mermaid
flowchart LR
    A --- B
    A --- C
    B --- D
    C --- D
    B --- C
```

> Amistades: A—B, A—C, B—C, B—D, C—D. Todos los grados: $\deg(A)=2$, $\deg(B)=3$, $\deg(C)=3$, $\deg(D)=2$. Suma $10 = 2 \cdot 5$ aristas ✅

### 2. Grafo dirigido (digrafo)

Las aristas tienen **flecha** (Instagram: tú sigues a alguien, no al revés). El orden del par importa: $(u,v) \neq (v,u)$.

```mermaid
flowchart LR
    A --> B
    A --> C
    B --> C
    C --> D
    D --> B
```

> Aristas: $A \to B$, $A \to C$, $B \to C$, $C \to D$, $D \to B$. Ahora distinguimos **grado de entrada** (flechas que llegan) y **grado de salida** (flechas que salen): $\deg^-(B)=2$ (llegan de A y D), $\deg^+(B)=1$ (sale a C).

### 3. Grafo ponderado

Cada arista tiene un **peso** (kilómetros, costo, tiempo). Es el modelo de los mapas de navegación y rutas.

```mermaid
flowchart LR
    A -- "5" --- B
    A -- "3" --- C
    B -- "2" --- C
    B -- "7" --- D
    C -- "1" --- D
```

> La ruta más barata de A a D es $A \to C \to D$ con $3+1=4$, ¡más corta que $A \to B \to D$ ($5+7=12$)!

### 4. Grafo completo $K_n$

Cada vértice está conectado con **todos** los demás. Con $n$ vértices tiene $\binom{n}{2}$ aristas.

```mermaid
flowchart LR
    A --- B
    A --- C
    A --- D
    B --- C
    B --- D
    C --- D
```

> $K_4$: 4 vértices, $\binom{4}{2} = 6$ aristas. Cada vértice tiene grado $n-1 = 3$.

### 5. Grafo bipartito

Los vértices se dividen en **dos grupos** (por ejemplo, trabajadores y tareas) y las aristas **solo** conectan un grupo con el otro.

```mermaid
flowchart LR
    subgraph GrupoX["Grupo X"]
        direction TB
        x1["X1"]
        x2["X2"]
        x3["X3"]
    end
    subgraph GrupoY["Grupo Y"]
        direction TB
        y1["Y1"]
        y2["Y2"]
    end
    x1 --- y1
    x1 --- y2
    x2 --- y1
    x3 --- y2
```

> Modela asignaciones: 3 trabajadores, 2 tareas. Ninguna arista conecta dos personas entre sí ni dos tareas entre sí.

### 6. Grafo conexo vs. no conexo

- **Conexo:** desde cualquier vértice se llega a cualquier otro (un solo "pedazo").
- **No conexo:** tiene dos o más **componentes** separadas.

```mermaid
flowchart LR
    A --- B
    B --- C
    D --- E
    D --- H
```

> Este grafo es **no conexo**: la componente $\{A,B,C\}$ y la componente $\{D,E,H\}$ están aisladas. No hay camino de A a D.

### 7. Ciclo y camino

- Un **camino** recorre vértices distintos sin repetir.
- Un **ciclo** es un camino que empieza y termina en el mismo vértice sin repetir otros.

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- D
    D --- A
    D --- E
```

> $A \to B \to C \to D \to A$ es un **ciclo** de longitud 4. $A \to B \to C \to D \to E$ es un **camino** simple.

### 8. Grafo con lazo (bucle)

Un **lazo** es una arista que conecta un vértice **consigo mismo**. (En mermaid se dibuja una flecha que regresa al mismo nodo.)

```mermaid
flowchart LR
    A --> A
    B --- A
    B --- C
    C --- C
```

> El vértice A tiene un lazo ($A \to A$) y B tiene otro. Un lazo aporta **2** al grado del vértice.

**Resumen rápido de tipos:**

| Tipo | ¿Flechas? | ¿Pesos? | Ejemplo real |
|------|-----------|---------|--------------|
| Simple | No | No | Mapa de amistades |
| Dirigido | Sí | No | Red social de seguidores |
| Ponderado | Según caso | Sí | GPS / rutas |
| Completo | No | No | Torneo round-robin (todos contra todos) |
| Bipartito | No | No | Asignación trabajador–tarea |
| Conexo / no conexo | Según caso | Según caso | Red de fibra óptica |

---

## 7.3 Representaciones computables

**1) Matriz de adyacencia:** tabla $n \times n$ con $1$ si hay arista, $0$ si no.

> [!example] Para el grafo simple $A-B$, $A-C$ (con vértices A, B, C):
>
> | | A | B | C |
> |---|---|---|---|
> | **A** | 0 | 1 | 1 |
> | **B** | 1 | 0 | 0 |
> | **C** | 1 | 0 | 0 |

**2) Lista de adyacencia:** cada vértice guarda la lista de sus vecinos.

$$A: [B, C],\quad B: [A],\quad C: [A]$$

> [!tip] ¿Matriz o lista?
> **Matriz** → rápida para preguntar "¿hay arista entre u y v?" pero ocupa $O(n^2)$ memoria. **Lista** → ahorra memoria en grafos dispersos (pocas aristas) y es la estándar en DFS/BFS.

---

## 7.4 Caminos, cadenas y ciclos

> [!abstract] Tres tipos de recorridos
> Un **camino**, una **cadena** y un **ciclo** son distintas formas de "recorrer" un grafo. La diferencia está en **qué se permite repetir**: vértices, aristas, o ninguna de las dos.

### 7.4.1 Longitud de un recorrido

La **longitud** de un recorrido es el número de **aristas** que usa (no de vértices). Un recorrido de $A$ a $D$ por las aristas $(A,B), (B,C), (C,D)$ tiene **longitud 3**.

```mermaid
flowchart LR
    A ---|"1"| B
    B ---|"2"| C
    C ---|"3"| D
```

> El recorrido $A \to B \to C \to D$ tiene longitud 3: usa 3 aristas para visitar 4 vértices.

---

### 7.4.2 Camino (path)

Un **camino** es un recorrido que **no repite vértices** (y por tanto tampoco aristas). Es la forma "limpia" de ir de un punto a otro sin dar vueltas.

| Propiedad | Valor |
|-----------|-------|
| ¿Repite vértices? | ❌ No |
| ¿Repite aristas? | ❌ No |
| Ejemplo | $A \to B \to C \to D$ |

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- D
    D --- B
    B --- E
```

> El camino $A \to B \to C \to D$ usa 3 aristas y **4 vértices distintos**. No puede volver a pasar por B (ya lo visitó).

> [!tip] Camino más corto
> En Google Maps, la ruta sugerida es el **camino más corto** entre dos vértices en un grafo ponderado: el algoritmo de Dijkstra lo encuentra en tiempo $O(E \log V)$.

---

### 7.4.3 Cadena (trail)

Una **cadena** es un recorrido que **no repite aristas**, pero **puede repetir vértices**. Es más permisiva que un camino.

| Propiedad | Valor |
|-----------|-------|
| ¿Repite vértices? | ✅ Sí (permitido) |
| ¿Repite aristas? | ❌ No |
| Ejemplo | $A \to B \to C \to B \to D$ |

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- B2["B (vuelta)"]
    B2 --- D
```

> La cadena $A \to B \to C \to B \to D$ **repasa el vértice B** (dos veces), pero cada arista se usa **una sola vez**. Su longitud es 4.

> [!example] En la vida real
> Un cartero que reparte cartas puede **pasar dos veces por la misma esquina** (vértice) pero no debe **recorrer la misma cuadra** (arista) dos veces en un mismo trayecto. Eso es una cadena.

---

### 7.4.4 Ciclo (cycle)

Un **ciclo** es un camino **cerrado**: empieza y termina en el mismo vértice, sin repetir otros vértices. En un grafo simple, un ciclo tiene longitud **al menos 3**.

| Propiedad | Valor |
|-----------|-------|
| Inicio = final | ✅ Sí |
| ¿Repite vértices? | Solo el primero/último |
| Longitud mínima | 3 (grafo simple) |

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- D
    D --- A
```

> El ciclo $A \to B \to C \to D \to A$ tiene longitud 4: cada vértice se visita **una sola vez** y se regresa al punto de partida.

**Ciclo simple vs circuito:**

| Concepto | Definición |
|----------|------------|
| **Ciclo** | Camino cerrado que **no repite vértices** (salvo el inicial = final) |
| **Circuito** | Cadena cerrada que puede repetir vértices pero **no aristas** (recorrido euleriano cerrado) |

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- A
    A --- D
    D --- E
    E --- B
```

> Recorrido $A \to B \to C \to A \to D \to E \to B \to A$: es un **circuito** (repasa A y B, pero ninguna arista se usa dos veces). No es un ciclo porque repite A y B.

> [!warning] Error común
> Un **ciclo no es "cerrar un camino cualquiera"**: debe empezar y terminar en el mismo vértice **sin repetir otros en el medio**. $A \to B \to C \to A$ es ciclo; $A \to B \to C \to B \to A$ no lo es (B se repite).

---

### 7.4.5 Resumen de recorridos

| Recorrido | ¿Repite vértices? | ¿Repite aristas? | ¿Cerrado? |
|-----------|:-----------------:|:----------------:|:---------:|
| **Paseo** (walk) | ✅ | ✅ | Opcional |
| **Cadena** (trail) | ✅ | ❌ | Opcional |
| **Camino** (path) | ❌ | ❌ | Opcional |
| **Circuito** | ✅ | ❌ | ✅ |
| **Ciclo** (cycle) | ❌ (salvo inicio=final) | ❌ | ✅ |

> [!tip] Cadena de memoria
> **Camino** = no repito vértices → es el más "limpio". **Cadena** = no repito aristas → puedo volver a un vértice. **Ciclo** = camino cerrado → regreso al inicio.

---

### 7.4.6 Caminos y ciclos eulerianos y hamiltonianos

Los dos problemas más famosos de la teoría de grafos preguntan por recorridos especiales:

> [!abstract] La gran diferencia
> - **Euleriano:** recorre cada **arista** exactamente una vez (como pintar todas las líneas sin levantar el lápiz).
> - **Hamiltoniano:** visita cada **vértice** exactamente una vez (como recorrer todas las ciudades sin repetir ninguna).

---

### 7.4.7 Camino y ciclo euleriano

Un **camino euleriano** recorre **cada arista una sola vez**. Si además empieza y termina en el mismo vértice, se llama **ciclo euleriano** (o circuito euleriano).

> [!tip] Criterio de Euler (fácil de verificar)
> En un grafo **conexo**:
> - Hay **ciclo euleriano** si **todos** los vértices tienen grado **par**.
> - Hay **camino euleriano** (abierto) si hay **exactamente 0 o 2** vértices con grado **impar**.

**Ejemplo de ciclo euleriano** (todos los grados pares):

```mermaid
flowchart LR
    A["A (grado 4)"] --- B
    A --- C
    B --- C
    A --- D
    A --- E
    D --- E
```

> Grados: $\\deg(A)=4$, $\\deg(B)=2$, $\\deg(C)=2$, $\\deg(D)=2$, $\\deg(E)=2$ — **todos pares**, así que hay ciclo euleriano. Por ejemplo: $A \\to B \\to C \\to A \\to D \\to E \\to A$. Cada arista se usa una vez.

**Ejemplo de camino euleriano** (exactamente 2 impares):

```mermaid
flowchart LR
    A --- B
    B --- C
    C --- D
```

> Grados: $\\deg(A)=1$ (impar), $\\deg(B)=2$, $\\deg(C)=2$, $\\deg(D)=1$ (impar). Hay camino euleriano de $A$ a $D$: $A \\to B \\to C \\to D$. Como hay 2 impares, el camino **empieza en uno y termina en el otro**.

> [!warning] El problema de los puentes de Königsberg
> La ciudad tenía 4 zonas (orillas e isla) conectadas por 7 puentes. El grafo tiene grados **3, 3, 3, 5**: los **cuatro impares**. Como se necesitan 0 o 2 impares, **no existe** recorrido que cruce cada puente exactamente una vez. Este problema dio origen a la teoría de grafos (Euler, 1736).

---

### 7.4.8 Camino y ciclo hamiltoniano

Un **camino hamiltoniano** visita **cada vértice exactamente una vez**. Un **ciclo hamiltoniano** vuelve al inicio al final (visita todos los vértices una vez y cierra).

> [!example] Ciclo hamiltoniano
>
> ```mermaid
> flowchart LR
>     A --- B
>     B --- C
>     C --- D
>     D --- E
>     E --- A
> ```
>
> El recorrido $A \\to B \\to C \\to D \\to E \\to A$ visita los 5 vértices una sola vez y regresa al inicio: es un **ciclo hamiltoniano**.

**Problema del vendedor viajero (TSP):** encontrar el ciclo hamiltoniano de **costo mínimo** en un grafo ponderado. Aparece en logística (rutas de reparto), diseño de circuitos y planificación.

> [!warning] A diferencia de Euler, no hay criterio simple
> Decidir si un grafo tiene ciclo hamiltoniano es un problema **NP-completo**: no se conoce algoritmo rápido y, en la práctica, hay que probar muchas combinaciones (casi $n!$ rutas posibles). Hay criterios **suficientes** (Dirac, Ore) que garantizan su existencia en ciertos casos, pero son condiciones fuertes:
>
> - **Teorema de Dirac:** si $n \\geq 3$ y todo vértice tiene grado $\\geq n/2$, hay ciclo hamiltoniano.
> - **Teorema de Ore:** si para todo par de vértices no adyacentes $\\deg(u)+\\deg(v) \\geq n$, hay ciclo hamiltoniano.

---

### 7.4.9 Comparativa final: Euler vs Hamilton

| Criterio | Euleriano | Hamiltoniano |
|----------|-----------|--------------|
| Qué recorre | Cada **arista** una vez | Cada **vértice** una vez |
| Versión cerrada | Ciclo euleriano | Ciclo hamiltoniano |
| Criterio fácil | Sí: contar grados pares/impares | No: NP-completo |
| Problema famoso | Puentes de Königsberg | Vendedor viajero (TSP) |
| Analogía | Pintar un dibujo sin levantar el lápiz | Tour que visita todas las ciudades |
| Complejidad de decisión | Polinomial (fácil) | NP-completo (difícil) |

> [!tip] Regla práctica
> - ¿El grafo es conexo y tiene **0 o 2 grados impares**? → hay Euler: busca el recorrido con confianza.
> - ¿Necesitas visitar todas las **ciudades** sin repetir? → es Hamilton: no prometas un algoritmo rápido, usa heurísticas (vecino más cercano, 2-opt).
---

## 7.5 Árboles

Un **árbol** es un grafo **conexo sin ciclos**. Es la estructura natural de las **jerarquías**: sistemas de archivos, DOM de una página, árboles genealógicos, y los árboles de decisión de machine learning.

> [!abstract] Propiedades equivalentes de un árbol con $n$ vértices
> Se dice que las siguientes afirmaciones son equivalentes (si una se cumple, se cumplen todas):
> 1. Es conexo y sin ciclos.
> 2. Tiene exactamente $n-1$ aristas.
> 3. Entre cualquier par de vértices hay **un único** camino.
> 4. Es conexo, pero si quitas una arista cualquiera, se desconecta.

---

### 7.5.1 Terminología de árboles

- **Raíz:** nodo especial (designado o elegido) que está "arriba" de todo.
- **Padre / Hijo:** si hay arista de $u$ a $v$, el padre de $v$ es $u$.
- **Hermanos:** nodos con el mismo padre.
- **Hoja (nodo hoja):** nodo sin hijos.
- **Nodo interno:** al menos un hijo.
- **Profundidad (nivel):** distancia desde la raíz ($d=0$).
- **Altura:** la mayor profundidad de cualquier nodo (un árbol con un solo nodo tiene altura 0).

```mermaid
flowchart TB
    A["Raíz (d=0)"] --> B["Hijo 1 (d=1)"]
    A --> C["Hijo 2 (d=1)"]
    B --> D["Nieto 1 (d=2) hoja"]
    B --> E["Nieto 2 (d=2)"]
    C --> F["Nieto 3 (d=2) hoja"]
    E --> G["Tataranieto (d=3) hoja"]
```

---

### 7.5.2 Tipos de árboles

**Árbol binario:** cada nodo tiene **a lo sumo 2 hijos** (izquierdo y derecho). Es el más usado en programación.

```mermaid
flowchart TB
    A["A"] --> B["B"]
    A --> C["C"]
    B --> D["D"]
    B --> E["E"]
    C --> F["F"]
    E --> G["G"]
```

**Árbol binario de búsqueda (BST):** árbol binario con regla: izquierdo < nodo < derecho. Permite buscar en $O(\log n)$ si está balanceado.

```mermaid
flowchart TB
    N8["8"] --> N3["3"]
    N8 --> N10["10"]
    N3 --> N1["1"]
    N3 --> N6["6"]
    N10 --> N14["14"]
    N6 --> N4["4"]
    N6 --> N7["7"]
    N14 --> N13["13"]
```

> [!example] Búsqueda en BST
> Para buscar 7: 8→3→6→7 ✓. Cada paso descarta la mitad (igual que búsqueda binaria en vector ordenado). Complejidad: $O(h)$ donde $h$ es la altura; $h = \log n$ si está balanceado.

**Árbol AVL:** BST que se **re-balancea** automáticamente después de cada inserción/eliminación. Garantiza $h \leq 1.44 \log_2(n+2)$, así que búsqueda siempre $O(\log n)$.

**Árbol N-ario:** cada nodo tiene hasta $N$ hijos (ej. árbol de directorios).

**Montículo (heap):** árbol binario completo (todos los niveles llenos salvo quizás el último, rellenado de izq. a der.) donde el padre es siempre ≥ (max-heap) o ≤ (min-heap) sus hijos. Base de **colas de prioridad**.

**Árbol B:** árbol N-ario balanceado usado en **bases de datos** y sistemas de archivos (ext4, NTFS). Cada nodo contiene varias claves y garantiza altura baja con millones de registros.

---

### 7.5.3 Recorridos de árboles (DFS y BFS)

En árboles, el recorrido DFS tiene tres variantes según **cuándo se visita** el nodo actual:

```mermaid
flowchart TB
    A["1"] --> B["2"]
    A --> C["3"]
    B --> D["4"]
    B --> E["5"]
    C --> F["6"]
    C --> G["7"]
```

| Recorrido | Orden | Resultado |
|-----------|-------|-----------|
| **Preorden** | Padre → Izq → Der | 1, 2, 4, 5, 3, 6, 7 |
| **Inorden** | Izq → Padre → Der | 4, 2, 5, 1, 6, 3, 7 |
| **Postorden** | Izq → Der → Padre | 4, 5, 2, 6, 7, 3, 1 |
| **Por niveles (BFS)** | Nivel 0, nivel 1, … | 1, 2, 3, 4, 5, 6, 7 |

> [!example] ¿Para qué sirve cada recorrido?
> - **Preorden:** copiar/serializar un árbol (el padre va primero, así lo reconstruyes después).
> - **Inorden:** en un BST, produce los valores **ordenados de menor a mayor**.
> - **Postorden:** borrar un árbol (borras hijos antes del padre) o calcular tamaño de carpetas.

```python
# Preorden (recursivo)
def preorden(nodo):
    if nodo is None: return
    print(nodo.valor)    # visitar padre
    preorden(nodo.izq)
    preorden(nodo.der)

# Inorden (recursivo)
def inorden(nodo):
    if nodo is None: return
    inorden(nodo.izq)
    print(nodo.valor)    # padre entre hijos
    inorden(nodo.der)

# Postorden (recursivo)
def postorden(nodo):
    if nodo is None: return
    postorden(nodo.izq)
    postorden(nodo.der)
    print(nodo.valor)    # padre después
```

**Recorrido por niveles (BFS):** usa una **cola (queue)**, no recursión:

```python
from collections import deque

def bfs(raiz):
    if not raiz: return
    cola = deque([raiz])
    while cola:
        nodo = cola.popleft()
        print(nodo.valor)
        if nodo.izq: cola.append(nodo.izq)
        if nodo.der: cola.append(nodo.der)
```

---

### 7.5.4 Árboles de expansión mínima (MST)

Dado un grafo **ponderado y conexo**, un **árbol de expansión mínima (MST)** es un subconjunto de aristas que conecta todos los vértices con el **menor costo total**, sin ciclos. Tiene exactamente $n-1$ aristas.

> [!abstract] Propiedad clave
> Si todas las aristas tienen pesos diferentes, el MST es **único**. Si hay empates, puede haber varios MST.

Los dos algoritmos clásicos para encontrarlo son **Kruskal** y **Prim**. Ambos son *greedy* (avaros): en cada paso eligen la mejor opción local con la esperanza de lograr el óptimo global — y en este problema esa estrategia **sí funciona** (se puede demostrar con la propiedad del corte).

---

### 7.5.4.1 Algoritmo de Prim: crecer un árbol desde una semilla 🪴

**La idea en una frase:** Prim **crece un árbol poco a poco** — empieza en un vértice cualquiera (la *semilla*) y en cada paso agrega la **arista más barata** que conecta el árbol que ya tiene con un vértice que todavía no está dentro. Asociado a un ejemplo del mundo real:

> [!example] Analogía: cablear una colonia 🏘️
> Imagina que hay 7 casas (A–G) y quieres conectarlas a internet con fibra óptica gastando lo **mínimo posible**. Solo puedes tender cables entre casas específicas (las aristas) y cada cable tiene un costo (el peso).
>
> **Kruskal** diría: "pongamos todos los cables posibles, y ordenémoslos de barato a caro; vamos tendiendo el más barato que no forme un ciclo".
> **Prim** diría: "empecemos en mi casa A; desde ahí, tendamos el cable más barato que salga de *mi red actual* hacia una casa nueva, y así hasta cubrir todas".

---

**El grafo de ejemplo (7 casas, 11 cables posibles):**

```mermaid
flowchart LR
    A ---|"7"| B
    A ---|"5"| D
    B ---|"8"| C
    B ---|"9"| D
    B ---|"7"| E
    C ---|"5"| E
    D ---|"15"| E
    D ---|"6"| F
    E ---|"8"| F
    E ---|"9"| G
    F ---|"11"| G
```

**Reglas del juego (los 3 pasos de Prim):**

1. **Elige la semilla** — un vértice inicial cualquiera. (Tomaremos **A**.)
2. **Mira la frontera** — observa todas las aristas que salen del árbol actual y llegan a un vértice **todavía no incluido**. Elige la de **menor peso**.
3. **Agrega** ese vértice y esa arista al árbol. **Repite** el paso 2 hasta incluir los $n$ vértices (tendrás $n-1$ aristas).

> [!warning] Regla de oro
> Nunca agregues una arista que **cierre un ciclo**. Si ambos extremos ya están en el árbol, esa arista sobra (crearía un círculo) → descártala aunque sea barata.

---

**Prim paso a paso (sigue las casillas amarillas 👉):**

| Paso | Árbol actual | ¿Cuál es la arista más barata hacia afuera? | Se agrega | Costo acumulado |
|------|--------------|---------------------------------------------|-----------|-----------------|
| 1 | {A} | A-D = 5 (más barata que A-B = 7) | **A-D** | 5 |
| 2 | {A, D} | D-F = 6 (más barata que A-B=7, D-B=9, D-E=15) | **D-F** | 11 |
| 3 | {A, D, F} | A-B = 7 (D-B=9, F-E=8, F-G=11) | **A-B** | 18 |
| 4 | {A, D, F, B} | B-E = 7 (B-C=8, F-E=8, F-G=11, D-B→ciclo ✘, D-E=15) | **B-E** | 25 |
| 5 | {A, D, F, B, E} | E-C = 5 (más barata que B-C=8, F-G=11, E-G=9) | **E-C** | 30 |
| 6 | {A, D, F, B, E, C} | E-G = 9 (más barata que F-G = 11) | **E-G** | 39 |

**Resultado:** el MST es {A-D, D-F, A-B, B-E, E-C, E-G} con **costo total = 39**. Es el mismo costo que obtendrías con Kruskal (¡debe coincidir! si el MST es único, ambos algoritmos llegan a las mismas aristas).

**Visualización del crecimiento (pasos 1-6):**

```mermaid
flowchart LR
    P1["Paso 1: A-D (5)"] --> P2["Paso 2: +D-F (6)"]
    P2 --> P3["Paso 3: +A-B (7)"]
    P3 --> P4["Paso 4: +B-E (7)"]
    P4 --> P5["Paso 5: +E-C (5)"]
    P5 --> P6["Paso 6: +E-G (9) = 39"]
```

**Pseudo-código:**

```
Prim(grafo, semilla):
    árbol = {semilla}
    aristas_MST = []
    mientras árbol no contenga todos los vértices:
        # arista de menor peso con un extremo dentro y otro fuera
        e = min{ (u,v) con peso w  |  u ∈ árbol  y  v ∉ árbol }
        agregar e a aristas_MST
        agregar v al árbol
    devolver aristas_MST
```

**Implementación en Python (con cola de prioridad):**

```python
import heapq

def prim(grafo, semilla):
    """
    grafo: dict {vértice: [(vecino, peso), ...]}
    Devuelve el costo total del MST y las aristas elegidas.
    """
    visitados = {semilla}
    # frontera: (costo, u, v) con u dentro, v fuera
    frontera = [(w, semilla, v) for v, w in grafo[semilla]]
    heapq.heapify(frontera)
    aristas = []
    costo_total = 0

    while frontera:
        w, u, v = heapq.heappop(frontera)
        if v in visitados:
            continue            # crearía ciclo → descartar
        visitados.add(v)
        aristas.append((u, v, w))
        costo_total += w
        for vecino, peso in grafo[v]:
            if vecino not in visitados:
                heapq.heappush(frontera, (peso, v, vecino))
    return costo_total, aristas

# Grafo del ejemplo (7 casas)
G = {
    "A": [("B",7), ("D",5)],
    "B": [("A",7), ("C",8), ("D",9), ("E",7)],
    "C": [("B",8), ("E",5)],
    "D": [("A",5), ("B",9), ("E",15), ("F",6)],
    "E": [("B",7), ("C",5), ("D",15), ("F",8), ("G",9)],
    "F": [("D",6), ("E",8), ("G",11)],
    "G": [("E",9), ("F",11)],
}
print(prim(G, "A"))   # (39, [('A','D',5), ('D','F',6), ('A','B',7), ...])
```

> 🎮 **Ahora practica tú:** el ejercicio interactivo de abajo usa el **mismo grafo de las 7 casas**. Haz clic en las aristas **en el orden que Prim las elegiría** (empieza en la semilla A). El sistema te dirá si vas bien, y con 💡 Ayuda verás la frontera actual.

<div class="grafo-ejercicio" data-tipo="prim" data-nodos="A,B,C,D,E,F,G" data-semilla="A" data-aristas="A-B:7,A-D:5,B-C:8,B-D:9,B-E:7,C-E:5,D-E:15,D-F:6,E-F:8,E-G:9,F-G:11">

### Precisa los clics: orden de Prim

Haz **clic sobre una arista** de la frontera (las que salen de tu árbol a un vértice nuevo). Prim siempre elige la **más barata** de esa frontera: si aciertas, la arista se pone verde y el árbol crece. ¡Consigue el costo total 39!

</div>


> [!tip] ¿Por qué funciona Prim? (la propiedad del corte)
> En cualquier momento, el árbol en crecimiento está "dentro" de un corte y el resto del grafo "afuera". El MST global **tiene que** incluir la arista más barata que cruza ese corte (si no la tuviera, cambiarla por esa arista no aumentaría el costo). Prim simplemente toma siempre esa arista → cuando termina, es el MST. Esta misma idea demuestra que Kruskal también es correcto.

**Complejidad:** con una cola de prioridad (heap), cada vértice se inserta y extrae una vez, y cada arista se mira una vez: **O(m log n)**, donde m = aristas y n = vértices.

---

> [!tip] Kruskal vs Prim
> - **Kruskal:** ordena aristas y agrega las baratas si no forman ciclo. Mejor para grafos **dispersos** (pocas aristas relativas a vértices). Complejidad O(m log m).
> - **Prim:** crece un árbol desde una semilla tomando la frontera más barata. Mejor para grafos **densos** (muchas aristas, pocos vértices). Complejidad O(m log n).
> - Ambos son *greedy*, ambos dan el MST correcto, y con los mismos pesos del ejemplo llegan al **mismo costo (39)**.

### 7.5.5 Aplicaciones de los árboles

| Árbol | Aplicación |
|-------|------------|
| **BST / AVL** | Búsqueda e inserción rápida en colecciones ordenadas |
| **Heap (montículo)** | Colas de prioridad, Dijkstra, heapsort |
| **Árbol B / B+** | Índices en bases de datos (millones de registros en disco) |
| **AST (árbol de sintaxis)** | Compiladores: representar expresiones `(+ (* 2 3) 4)` |
| **DOM (HTML)** | El navegador interpreta el árbol del documento |
| **Directorios (ext4)** | Sistema de archivos en tu computadora |
| **Huffman** | Compresión de datos (ZIP, JPEG, MP3) |
| **Decision Tree** | Machine Learning (Random Forest = muchos árboles) |

> [!tip] Para practicar
> - Dibuja el BST que resulta de insertar: 5, 3, 7, 1, 4, 6, 8.
> - Escribe los recorridos preorden, inorden y postorden de ese BST.
> - Aplica Kruskal al grafo $K_4$ con pesos 1,2,3,4,5,6 y calcula el costo del MST.

## 7.6 Aplicaciones en el mundo real

- **Google Maps:** grafo ponderado de calles + algoritmo de Dijkstra (ruta más corta).
- **Redes sociales:** grafos dirigidos/no dirigidos; "amigos en común" son vecindades compartidas.
- **Internet:** la web es un digrafo donde cada página enlaza a otras; el *PageRank* usa su estructura.
- **Bases de datos:** las relaciones clave–foránea forman un grafo de dependencias.
- **Optimización:** árbol de expansión mínima (cableado con el menor costo total).

## 7.7 🧪 Ejercicios interactivos: matrices de adyacencia e incidencia

> [!tip] ¿Cómo funcionan?
> Se muestra una **matriz** (de adyacencia o de incidencia) en la tabla y debes **conectar los nodos** haciendo clic sobre ellos para que el grafo coincida con la matriz. Pulsa **Comprobar** para verificar tu respuesta. Todo ocurre en tu navegador con Cytoscape.js.

---

### 🎯 Ejercicio 1 — Matriz de adyacencia (5 vértices)

Conecta los nodos **A–E** de forma que la **matriz de adyacencia** de la tabla coincida con el grafo. Recuerda: un `1` en la fila i, columna j significa que existe la arista entre el vértice i y el vértice j.

<div class="grafo-ejercicio" data-tipo="adyacencia" data-nodos="A,B,C,D,E" data-matriz="0,1,1,0,0|1,0,1,0,0|1,1,0,1,1|0,0,1,0,1|0,0,1,1,0"></div>

---

### 🎯 Ejercicio 2 — Matriz de incidencia (4 vértices, 5 aristas)

Cada fila `e1 … e5` de la tabla representa una **arista**; las columnas **A–D** son los vértices. Un `1` indica que esa arista toca a ese vértice. Conecta el grafo para que coincida con la matriz de incidencia.

<div class="grafo-ejercicio" data-tipo="incidencia" data-nodos="A,B,C,D" data-matriz="1,1,0,0|1,0,1,0|0,1,1,0|0,0,1,1|1,0,0,1"></div>

---

### 🎯 Ejercicio 3 — Matriz de adyacencia (4 vértices)

Un segundo ejemplo, esta vez con 4 vértices. Interpreta la matriz y conecta las aristas correspondientes.

<div class="grafo-ejercicio" data-tipo="adyacencia" data-nodos="A,B,C,D" data-matriz="0,1,0,1|1,0,1,1|0,1,0,1|1,1,1,0"></div>

## ✅ Evaluación

A continuación se presentan las preguntas de opción múltiple sobre el tema. Se responden en la aplicación `evaluador.py` o directamente en esta página web.

### Pregunta 1

Un grafo en el que **las aristas tienen dirección** se llama:

a) Grafo simple
b) Grafo dirigido (digrafo)
c) Grafo bipartito
d) Árbol

> **b) Grafo dirigido (digrafo)**

---

### Pregunta 2

En cualquier grafo, la suma de los grados de todos los vértices es:

a) Igual al número de aristas
b) El doble del número de aristas
c) La mitad del número de aristas
d) Siempre 0

> **b) El doble del número de aristas**

---

### Pregunta 3

Un **camino** (path) es un recorrido que:

a) Puede repetir aristas
b) No repite vértices
c) Puede repetir vértices
d) Empieza y termina en el mismo vértice

> **b) No repite vértices**

---

### Pregunta 4

Un **ciclo** es:

a) Un camino cerrado que no repite vértices (salvo inicio=final)
b) Una cadena abierta
c) Un vértice aislado
d) Un grafo sin aristas

> **a) Un camino cerrado que no repite vértices (salvo inicio=final)**

---

### Pregunta 5

El **grafo completo** $K_4$ tiene exactamente:

a) 4 aristas
b) 5 aristas
c) 6 aristas
d) 8 aristas

> **c) 6 aristas**

---
