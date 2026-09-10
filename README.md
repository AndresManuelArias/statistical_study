# Curso Estadística Inferencial

Este proyecto contiene un curso de estadística inferencial con un evaluador interactivo y documentación con mkdocs.

## Configuración Inicial

### 1. Activar el Entorno Virtual

El proyecto incluye un entorno virtual preconfigurado en la carpeta `mi_entorno`. Para activarlo:

```bash
source mi_entorno/bin/activate
```

El entorno virtual ya contiene tkinter configurado en `mi_entorno/local-tk/`.

### 2. Descargar Dependencias

Si es necesario instalar o actualizar las dependencias, usa:

```bash
pip install -r requirements.txt
```

Para exportar las dependencias actuales del entorno:

```bash
pip freeze > requirements.txt
```

## Uso del Proyecto

### Ejecutar el Evaluador

Existen dos formas de ejecutar el evaluador:

#### Opción 1: Script Simplificado (Recomendado)

Desde la raíz del proyecto:

```bash
./ejecutar.sh
```

#### Opción 2: Comando Manual

Si prefieres ejecutar directamente con configuración de variables de entorno:

```bash
export LD_LIBRARY_PATH="mi_entorno/local-tk/usr/lib/x86_64-linux-gnu:mi_entorno/local-tk/usr/lib"
export PYTHONPATH="mi_entorno/local-tk/usr/lib/python3.12:mi_entorno/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tk8.6"
mi_entorno/bin/python evaluador.py
```

### Arrancar el Servidor mkdocs

Primero, activa el entorno virtual:

```bash
source mi_entorno/bin/activate
```

Luego inicia el servidor de documentación:

```bash
mkdocs serve -a 0.0.0.0:8000
```

Accede a la documentación en tu navegador:
- Local: http://localhost:8000
- Red local: http://<tu-ip>:8000

Para ver tu IP en Linux:

```bash
hostname -I
```

## Mantenimiento

### Limpiar Evaluaciones Guardadas

Cada vez que se responde una evaluación, `evaluador.py` guarda un archivo JSON con el patrón `carpeta-YYYYMMDDHHMMSS.json` dentro de la carpeta del tema (por ejemplo: `20_variable_dependiente_independiente-20260909105935.json`).

Para **ver** las evaluaciones guardadas (vista previa, no borra nada):

```bash
find 00_curso_estadistica_inferencial -name "*-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9].json" -print
```

Para **eliminar** todas las evaluaciones guardadas del curso:

```bash
find 00_curso_estadistica_inferencial -name "*-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9].json" -delete
```

> El patrón `*-14 dígitos.json` solo coincide con las evaluaciones guardadas; no afecta a otros JSON del proyecto (como `shema_evaluation.schema.json` o los `package.json`).

## Estructura del Proyecto


```
etapa-2/
├── 00_curso_estadistica_inferencial/
│   ├── 00_contenido/
│   ├── 01_repaso_conceptos_previos/
│   ├── 02_analisis_combinatorio/
│   ├── 03_probabilidad/
│   ├── 04_variables_aleatorias/
│   ├── 05_distribuciones_muestrales/
│   ├── 06_muestreo/
│   ├── 07_prueba_hipotesis/
│   └── 08_relaciones_funciones/
├── 01_chi_cuadrado/
├── 02_minimos_cuadrados/
├── 03_teorema_bayes/
├── 04_pruebas_estadisticas/
├── docs/
├── ejercicios_practicos/
├── mi_entorno/          # Entorno virtual (incluye tkinter)
├── evaluador.py         # Script evaluador
├── ejecutar.sh          # Script para ejecutar evaluador
├── mkdocs.yml           # Configuración de mkdocs
└── requirements.txt     # Dependencias de Python
```

## Archivos Importantes

- **evaluador.py**: Script principal del evaluador interactivo
- **ejecutar.sh**: Script que configura las variables de entorno y ejecuta el evaluador
- **mkdocs.yml**: Configuración de la documentación
- **requirements.txt**: Lista de dependencias de Python

## Notas

- El entorno virtual ya incluye tkinter preconfigurado
- Para compilar verificando sintaxis: `mi_entorno/bin/python -m py_compile evaluador.py`
- El bytecode se genera en `__pycache__/evaluador.cpython-312.pyc`
