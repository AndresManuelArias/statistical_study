---
titulo: Distribución F
tipo: anotacion-video
tema: Distribución F
tags:
  - estadistica-inferencial
  - distribuciones
---

# Distribución F

## Datos del video
- **Título:** Distribución F | Estadística Inferencial
- **Canal:** José María Hernández Rivera
- **Enlace:** https://www.youtube.com/results?search_query=Distribución+F+|+Estadística+Inferencial
- **Playlist:** https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa

## Resumen
La distribución $F$ surge como cociente de dos varianzas muestrales independientes. Se utiliza principalmente en la prueba ANOVA para comparar medias de varios grupos y para comparar la variabilidad de dos poblaciones. Solo toma valores positivos y depende de dos grados de libertad.

## Contenido

### Definición

Si $U \sim \chi^2(\nu_1)$ y $V \sim \chi^2(\nu_2)$ son independientes, entonces:

$$F = \frac{U / \nu_1}{V / \nu_2}$$

sigue una distribución $F$ de Snedecor con $\nu_1$ grados de libertad en el numerador y $\nu_2$ en el denominador:

$$F \sim F(\nu_1, \nu_2)$$

### Forma práctica

En la práctica, si $s_1^2$ y $s_2^2$ son varianzas muestrales de muestras independientes de poblaciones normales con tamaños $n_1$ y $n_2$:

$$F = \frac{s_1^2 / \sigma_1^2}{s_2^2 / \sigma_2^2}$$

Si las varianzas poblacionales son iguales ($\sigma_1^2 = \sigma_2^2$), entonces:

$$F = \frac{s_1^2}{s_2^2} \sim F(n_1 - 1, \n_2 - 1)$$

### Propiedades

1. **Solo valores positivos:** $F \in (0, \infty)$. No puede ser negativa.

2. **Asimétrica a la derecha:** La distribución está sesgada positivamente.

3. **Dos grados de libertad:**
   - $\nu_1 = n_1 - 1$ (numerador)
   - $\nu_2 = n_2 - 1$ (denominador)

4. **Media:**

$$E(F) = \frac{\nu_2}{\nu_2 - 2}, \quad \nu_2 > 2$$

5. **Relación con $t$:** Si $T \sim t(\nu)$, entonces $T^2 \sim F(1, \nu)$.

### Propiedad recíproca

$$\frac{1}{F} \sim F(\nu_2, \nu_1)$$

Si $F > F_{\alpha, \nu_1, \nu_2}$, equivalentemente $1/F < 1/F_{\alpha, \nu_1, \nu_2}$.

### Valores críticos

La tabla $F$ da valores $F_{\alpha, \nu_1, \nu_2}$ tales que:

$$P(F > F_{\alpha, \nu_1, \nu_2}) = \alpha$$

Para prueba bilateral, se usa $\alpha/2$ en cada cola.

## Ejemplo numérico

Dos máquinas envasan café. Se toman muestras independientes:
- Máquina A: $n_1 = 10$, $s_1^2 = 4.5$
- Máquina B: $n_2 = 10$, $s_2^2 = 1.5$

Se quiere probar si las varianzas son iguales: $H_0: \sigma_1^2 = \sigma_2^2$.

**Estadístico de prueba:**

$$F = \frac{s_1^2}{s_2^2} = \frac{4.5}{1.5} = 3.00$$

**Grados de libertad:**

$$\nu_1 = 10 - 1 = 9, \quad \nu_2 = 10 - 1 = 9$$

**Valor crítico:** Para $\alpha = 0.05$ (prueba bilateral, se usa $\alpha/2 = 0.025$):

$$F_{0.025, \, 9, \, 9} = 4.03$$

Como $F = 3.00 < 4.03$, **no se rechaza** $H_0$. No hay evidencia de que las varianzas difieran significativamente.

**Verificación con la propiedad recíproca:**

$$\frac{1}{F} = \frac{1}{3.00} = 0.333$$

$$\frac{1}{F_{0.025, \, 9, \, 9}} = \frac{1}{4.03} = 0.248$$

$$F_{0.975, \, 9, \, 9} = \frac{1}{F_{0.025, \, 9, \, 9}} = 0.248$$

## Ejemplo de la vida real

Un farmacéutico compara la variabilidad del volumen de llenado de dos líneas de producción de jarabe. Se toman muestras de $n_1 = 20$ frascos de la línea A ($s_1 = 3.2$ mL) y $n_2 = 20$ frascos de la línea B ($s_2 = 1.8$ mL).

$$F = \frac{s_1^2}{s_2^2} = \frac{(3.2)^2}{(1.8)^2} = \frac{10.24}{3.24} = 3.16$$

Grados de libertad: $\nu_1 = \nu_2 = 19$. Valor crítico $F_{0.025, \, 19, \, 19} = 2.53$.

Como $F = 3.16 > 2.53$, se **rechaza** $H_0$: la línea A tiene significativamente más variabilidad que la línea B. El gerente debe investigar la causa en la línea A para reducir la inconsistencia en el llenado.

> [!tip] Relación con el curso
> La distribución $F$ es la base del análisis ANOVA (análisis de varianza), uno de los métodos inferenciales más potentes para comparar medias de más de dos grupos simultáneamente.
