#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
export LD_LIBRARY_PATH="$DIR/.venv/local-tk/usr/lib/x86_64-linux-gnu:$DIR/.venv/local-tk/usr/lib"
export PYTHONPATH="$DIR/.venv/local-tk/usr/lib/python3.12:$DIR/.venv/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="$DIR/.venv/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="$DIR/.venv/local-tk/usr/share/tcltk/tk8.6"
exec "$DIR/.venv/bin/python" "$DIR/evaluador.py" "$@"
