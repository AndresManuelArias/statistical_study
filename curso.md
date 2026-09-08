prueba de codigo estan aqui

existen palabras reservadas

![[Pasted image 20260814092414.png]]

[[curso_1]]



ejecutar preguntas

```sh
cd estudios/curso_c && ./ejecutar.sh
```

ejecutar evaluador.py directamente

```sh

export LD_LIBRARY_PATH="mi_entorno/local-tk/usr/lib/x86_64-linux-gnu:mi_entorno/local-tk/usr/lib"
export PYTHONPATH="mi_entorno/local-tk/usr/lib/python3.12:mi_entorno/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tk8.6"
mi_entorno/bin/python evaluador.py
```

compilar evaluador.py (verifica sintaxis y genera bytecode)

```sh
cd estudios/curso_c
.venv/bin/python -m py_compile evaluador.py
```

el bytecode queda en `__pycache__/evaluador.cpython-312.pyc`

compilar ambiente (primera vez)

```sh
cd estudios/curso_c
python3 -m venv --without-pip .venv
curl -sSL https://bootstrap.pypa.io/get-pip.py -o /tmp/opencode/get-pip.py
.venv/bin/python /tmp/opencode/get-pip.py
mkdir -p .venv/local-tk
apt-get download python3-tk tk8.6 libtk8.6 libtcl8.6 blt tk8.6-blt2.5
for d in *.deb; do dpkg-deb -x "$d" .venv/local-tk; done
rm -f *.deb
```

crear ejecutar.sh

```sh
cd estudios/curso_c
cat > ejecutar.sh << 'EOF'
#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
export LD_LIBRARY_PATH="$DIR/.venv/local-tk/usr/lib/x86_64-linux-gnu:$DIR/.venv/local-tk/usr/lib"
export PYTHONPATH="$DIR/.venv/local-tk/usr/lib/python3.12:$DIR/.venv/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="$DIR/.venv/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="$DIR/.venv/local-tk/usr/share/tcltk/tk8.6"
exec "$DIR/.venv/bin/python" "$DIR/evaluador.py" "$@"
EOF
chmod +x ejecutar.sh
```


---

## Ejecutar evaluador.py en etapa-2

Desde la raíz del proyecto (`etapa-2`), con el entorno `mi_entorno` que ya trae tkinter:

```sh
export LD_LIBRARY_PATH="mi_entorno/local-tk/usr/lib/x86_64-linux-gnu:mi_entorno/local-tk/usr/lib"
export PYTHONPATH="mi_entorno/local-tk/usr/lib/python3.12:mi_entorno/local-tk/usr/lib/python3.12/lib-dynload"
export TCL_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tcl8.6"
export TK_LIBRARY="mi_entorno/local-tk/usr/share/tcltk/tk8.6"
mi_entorno/bin/python evaluador.py
```

## ✅ Comando único (script)

Ya existe `ejecutar.sh` en la raíz de `etapa-2` (con tkinter copiado a `mi_entorno/local-tk`):

```sh
./ejecutar.sh
```



exportar librerias

```sh
pip freeze > requirements.txt
```