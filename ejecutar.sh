#!/usr/bin/env bash
# Ejecuta evaluador.py con el entorno local que incluye tkinter
DIR="$(cd "$(dirname "$0")" && pwd)"
export LD_LIBRARY_PATH="$DIR/mi_entorno/local-tk/usr/lib/x86_64-linux-gnu:$DIR/mi_entorno/local-tk/usr/lib"
export PYTHONPATH="$DIR/mi_entorno/local-tk/usr/lib/python3.12:$DIR/mi_entorno/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="$DIR/mi_entorno/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="$DIR/mi_entorno/local-tk/usr/share/tcltk/tk8.6"
exec "$DIR/mi_entorno/bin/python" "$DIR/evaluador.py" "$@"
