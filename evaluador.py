import base64
import io
import json
import re
from datetime import datetime
from pathlib import Path
from tkinter import filedialog, messagebox
import tkinter as tk
from tkinter import ttk

try:
    import matplotlib
    matplotlib.use("Agg")
    from matplotlib import mathtext
    from matplotlib.font_manager import FontProperties
    _MATH_OK = True
except Exception:
    _MATH_OK = False

BASE_DIR = Path(__file__).resolve().parent
SCHEMA_PATH = BASE_DIR / "shema_evaluation.schema.json"

RE_PREGUNTA = re.compile(r"^###\s+Pregunta\s+(\d+)\s*$", re.MULTILINE)
RE_OPCION = re.compile(r"^([a-h])\)\s+(.*)$")
RE_RESPUESTA = re.compile(r"^>\s*\*\*([a-h])\)\s*(.*?)\*\*\s*$", re.MULTILINE)

RE_MATH = re.compile(
    r"(\$\$.+?\$\$|\$(?!\$)(?:\\.|[^$\n])+?\$(?!\$))",
    re.DOTALL,
)

_LATEX_UNICODE = [
    # Símbolos de conjuntos y lógica
    (r"\mathbb{N}", "\u2115"),
    (r"\Omega", "\u03a9"),
    (r"\emptyset", "\u2205"),
    (r"\varnothing", "\u2205"),
    (r"\cup", "\u222a"),
    (r"\cap", "\u2229"),
    (r"\in", "\u2208"),
    (r"\notin", "\u2209"),
    (r"\subseteq", "\u2286"),
    (r"\subset", "\u2282"),
    (r"\nsubseteq", "\u2288"),
    (r"\leq", "\u2264"),
    (r"\geq", "\u2265"),
    (r"\neq", "\u2260"),
    (r"\mid", "|"),
    (r"\{", "{"),
    (r"\}", "}"),
    (r"\ ", " "),
    # Puntuación y operadores
    (r"\ldots", "\u2026"),
    (r"\dots", "\u2026"),
    (r"\cdots", "\u22ef"),
    (r"\cdot", "\u00b7"),
    (r"\times", "\u00d7"),
    (r"\div", "\u00f7"),
    (r"\pm", "\u00b1"),
    (r"\to", "\u2192"),
    (r"\rightarrow", "\u2192"),
    (r"\leftarrow", "\u2190"),
    (r"\Rightarrow", "\u21d2"),
    (r"\leftrightarrow", "\u2194"),
    (r"\approx", "\u2248"),
    (r"\infty", "\u221e"),
    (r"\in", "\u2208"),
    (r"\sum", "\u2211"),
    (r"\prod", "\u220f"),
    (r"\forall", "\u2200"),
    (r"\exists", "\u2203"),
    (r"\neg", "\u00ac"),
    (r"\wedge", "\u2227"),
    (r"\vee", "\u2228"),
    (r"\oplus", "\u2295"),
    (r"\otimes", "\u2297"),
    (r"\subset", "\u2282"),
    (r"\supset", "\u2283"),
    (r"\bot", "\u22a5"),
    (r"\top", "\u22a4"),
    # Letras griegas
    (r"\pi", "\u03c0"),
    (r"\alpha", "\u03b1"),
    (r"\beta", "\u03b2"),
    (r"\gamma", "\u03b3"),
    (r"\delta", "\u03b4"),
    (r"\sigma", "\u03c3"),
    (r"\mu", "\u03bc"),
    (r"\lambda", "\u03bb"),
    (r"\theta", "\u03b8"),
    (r"\omega", "\u03c9"),
    (r"\phi", "\u03c6"),
    (r"\psi", "\u03c8"),
    (r"\eta", "\u03b7"),
    (r"\epsilon", "\u03b5"),
    (r"\rho", "\u03c1"),
    (r"\tau", "\u03c4"),
    (r"\kappa", "\u03ba"),
    (r"\nu", "\u03bd"),
    (r"\chi", "\u03c7"),
    (r"\zeta", "\u03b6"),
    (r"\xi", "\u03be"),
    (r"\Delta", "\u0394"),
    (r"\Sigma", "\u03a3"),
    (r"\mathcal{P}", "\U0001d4ab"),
    (r"\mathbb{N}", "\u2115"),
    (r"\mathbb{Z}", "\u2124"),
    (r"\mathbb{Q}", "\u211a"),
    (r"\mathbb{R}", "\u211d"),
    # Modificadores de espaciado y operadores sin símbolo propio
    (r"\,", " "),
    (r"\;", " "),
    (r"\!", ""),
    (r"\quad", "  "),
    (r"\max", "max"),
    (r"\min", "min"),
    (r"\lim", "lim"),
    (r"\log", "log"),
    (r"\ln", "ln"),
    (r"\sin", "sen"),
    (r"\cos", "cos"),
    (r"\tan", "tan"),
]


def _buscar_cierre_llave(texto, inicio):
    """Devuelve el índice del '}' que cierra la '{' en 'inicio'
    (maneja llaves anidadas). Devuelve -1 si no hay cierre."""
    nivel = 0
    for i in range(inicio, len(texto)):
        if texto[i] == "{":
            nivel += 1
        elif texto[i] == "}":
            nivel -= 1
            if nivel == 0:
                return i
    return -1


def _frac_a_unicode(texto):
    """Convierte \frac{numerador}{denominador} a (numerador)/(denominador),
    soportando llaves anidadas (p. ej. \text{...} dentro del numerador)."""
    resultado = []
    i = 0
    n = len(texto)
    while i < n:
        m = re.match(r"\\frac\s*\{", texto[i:])
        if m:
            a1 = i + m.end() - 1          # '{' del numerador
            a2 = _buscar_cierre_llave(texto, a1)
            if a2 != -1 and a2 + 1 < n and texto[a2 + 1] == "{":
                b1 = a2 + 1               # '{' del denominador
                b2 = _buscar_cierre_llave(texto, b1)
                if b2 != -1:
                    num = texto[a1 + 1:a2]
                    den = texto[b1 + 1:b2]
                    resultado.append(f"({num})/({den})")
                    i = b2 + 1
                    continue
        resultado.append(texto[i])
        i += 1
    return "".join(resultado)


def latex_a_unicode(texto):
    """Traduce secuencias LaTeX simples a caracteres Unicode legibles.
    Se usa en las opciones y en el enunciado (texto plano, sin imágenes)."""
    for latex, uni in _LATEX_UNICODE:
        texto = texto.replace(latex, uni)
    texto = _frac_a_unicode(texto)
    texto = re.sub(r"\\sqrt\[?[^\]]*\]?\{([^}]+)\}", r"√(\1)", texto)
    texto = re.sub(r"\\text\{([^}]*)\}", r"\1", texto)
    texto = re.sub(r"\\binom\{([^}]+)\}\{([^}]+)\}", r"C(\1,\2)", texto)
    texto = re.sub(r"\\bar\{([^}]+)\}", lambda m: m.group(1) + "\u0304", texto)
    texto = re.sub(r"\\hat\{([^}]+)\}", lambda m: m.group(1) + "\u0302", texto)
    texto = re.sub(r"\\overline\{([^}]+)\}", lambda m: m.group(1) + "\u0304", texto)
    texto = re.sub(r"\\(?:left|right|displaystyle|limits|large|small)", "",
                   texto)
    texto = re.sub(r"([_^])\{([^{}]*)\}", r"\1\2", texto)
    texto = texto.replace("$", "").replace("**", "")
    return texto.strip()


def render_math_png(tex, fontsize=14, dpi=180):
    """Renderiza una expresión LaTeX a bytes de una imagen PNG en memoria.
    Devuelve None si matplotlib no está disponible o si la expresión falla."""
    if not _MATH_OK:
        return None
    try:
        prop = FontProperties(size=fontsize)
        buf = io.BytesIO()
        mathtext.math_to_image(tex, buf, prop=prop, dpi=dpi, format="png")
        buf.seek(0)
        return buf.getvalue()
    except Exception:
        return None

_math_cache = {}


def math_photoimage(tex, fontsize=14, dpi=180):
    """Devuelve un tk.PhotoImage a partir del LaTeX, con caché. None si no."""
    clave = (tex, fontsize, dpi)
    if clave not in _math_cache:
        _math_cache[clave] = render_math_png(tex, fontsize, dpi)
    png = _math_cache[clave]
    if png is None:
        return None
    try:
        return tk.PhotoImage(data=base64.b64encode(png))
    except Exception:
        return None


def cargar_schema():
    try:
        with open(SCHEMA_PATH, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError):
        return None


def _elegir_md_con_preguntas(mds):
    """Devuelve el primer .md que contenga preguntas; si ninguno las tiene,
    devuelve el primero de la lista (o None si está vacía)."""
    for m in mds:
        if RE_PREGUNTA.search(m.read_text(encoding="utf-8")):
            return m
    return mds[0] if mds else None


CARPETAS_EXCLUIDAS = {
    "mi_entorno", "__pycache__", "ejercicios_practicos",
}


def _es_carpeta_tema(carpeta):
    """True si la carpeta puede contener temas (no es oculta ni de sistema)."""
    if carpeta.name.startswith("."):
        return False
    return carpeta.name not in CARPETAS_EXCLUIDAS


def descubrir_temas():
    """Descubre los temas disponibles recorriendo el árbol de carpetas.

    - Una carpeta SIN subcarpetas se trata como un tema (usa el primer .md
      que contenga preguntas).
    - Una carpeta CON subcarpetas se trata como un agrupador (curso): cada
      subcarpeta se recorre con las mismas reglas (anidamiento arbitrario).

    Devuelve una lista de tuplas:
        (nombre_mostrar, ruta_md, nombre_json)
    donde nombre_json es el nombre de la carpeta que contiene el .md, usado
    como clave corta de tema para nombrar los archivos de evaluación JSON
    dentro de la misma carpeta del tema.
    """

    def recorrer(carpeta, prefijo=""):
        temas = []
        subcarpetas = [p for p in sorted(carpeta.iterdir())
                       if p.is_dir() and _es_carpeta_tema(p)]
        if subcarpetas:
            # Agrupador (curso): cada subcarpeta es un tema (o agrupador)
            for sub in subcarpetas:
                temas.extend(recorrer(sub, f"{prefijo}{carpeta.name}/"))
        else:
            # Tema plano: la carpeta misma
            mds = sorted(carpeta.glob("*.md"))
            if not mds:
                return temas
            elegido = _elegir_md_con_preguntas(mds)
            temas.append((f"{prefijo}{carpeta.name}", elegido, carpeta.name))
        return temas

    temas = []
    for carpeta in sorted(BASE_DIR.iterdir()):
        if not carpeta.is_dir() or not _es_carpeta_tema(carpeta):
            continue
        temas.extend(recorrer(carpeta))
    return temas


def limpiar_enunciado(texto):
    lineas = []
    for linea in texto.splitlines():
        l = linea.rstrip()
        if l.strip() == "---":
            continue
        l = re.sub(r"\*\*(.+?)\*\*", r"\1", l)
        lineas.append(l)
    while lineas and not lineas[0].strip():
        lineas.pop(0)
    while lineas and not lineas[-1].strip():
        lineas.pop()
    return "\n".join(lineas)


def parsear_preguntas(ruta_md):
    texto = ruta_md.read_text(encoding="utf-8")
    matches = list(RE_PREGUNTA.finditer(texto))
    preguntas = []
    for i, m in enumerate(matches):
        fin = matches[i + 1].start() if i + 1 < len(matches) else len(texto)
        bloque = texto[m.end():fin]
        lineas = bloque.splitlines()
        idx_opcion = None
        for j, linea in enumerate(lineas):
            if RE_OPCION.match(linea.strip()):
                idx_opcion = j
                break
        if idx_opcion is None:
            continue
        opciones = []
        for linea in lineas[idx_opcion:]:
            mo = RE_OPCION.match(linea.strip())
            if mo:
                opciones.append(f"{mo.group(1)}) {mo.group(2).strip()}")
        mr = RE_RESPUESTA.search(bloque)
        if not opciones or not mr:
            continue
        letra = mr.group(1)
        correcta = next(
            (o for o in opciones if o.startswith(letra + ")")),
            f"{letra}) {mr.group(2).strip()}",
        )
        preguntas.append({
            "id_pregunta": int(m.group(1)),
            "enunciado": limpiar_enunciado("\n".join(lineas[:idx_opcion])),
            "opciones": opciones,
            "respuesta_correcta": correcta,
            "respuesta_usuario": None,
            "es_correcta": None,
        })
    return preguntas


class SelectorFrame(ttk.Frame):
    def __init__(self, master, app):
        super().__init__(master, padding=20)
        self.app = app
        ttk.Label(
            self, text="Evaluación de Opción Múltiple",
            font=("", 16, "bold")
        ).pack(pady=(0, 5))
        ttk.Label(self, text="Evaluación por temas", font=("", 11)).pack(pady=(0, 15))
        ttk.Label(self, text="Selecciona un tema:").pack(anchor="w")
        self.lista = tk.Listbox(self, height=18, activestyle="dotbox")
        self.lista.pack(fill="both", expand=True, pady=5)
        self.lista.bind("<Double-Button-1>", lambda e: self.iniciar())
        for nombre, _, _ in app.temas:
            self.lista.insert("end", nombre)
        self.refrescar_colores()
        self.btn = ttk.Button(self, text="Iniciar evaluación", command=self.iniciar)
        self.btn.pack(pady=10)
        self.info = ttk.Label(self, text="")
        self.info.pack()
        self.lista.bind("<<ListboxSelect>>", self.mostrar_info)

    def refrescar_colores(self):
        for i in range(len(self.app.temas)):
            calificacion = self.app.calificacion_tema(i)
            if calificacion is not None:
                color = "#c8e6c9" if calificacion >= 80 else "#ffcdd2"
                self.lista.itemconfigure(i, background=color)
            else:
                self.lista.itemconfigure(i, background=self.lista.cget("background"))

    def mostrar_info(self, _event=None):
        sel = self.lista.curselection()
        if not sel:
            return
        _, ruta, _ = self.app.temas[sel[0]]
        n = len(parsear_preguntas(ruta))
        pct = self.app.porcentaje_contestado_tema(sel[0])
        nota = self.app.nota_tema(sel[0])
        calificacion = self.app.calificacion_tema(sel[0])
        texto = f"{n} preguntas encontradas"
        if pct is not None:
            texto += f"  |  Contestadas: {pct}%"
        if calificacion is not None:
            texto += f"  |  Calificación: {calificacion}/100"
        elif nota is not None:
            texto += f"  |  Nota: {nota}/10"
        self.info.config(text=texto)

    def iniciar(self):
        sel = self.lista.curselection()
        if not sel:
            messagebox.showinfo("Atención", "Selecciona un tema de la lista.")
            return
        self.app.iniciar_quiz(sel[0])


class QuizFrame(ttk.Frame):
    def __init__(self, master, app):
        super().__init__(master, padding=15)
        self.app = app
        self.var = tk.StringVar()

        self.header = ttk.Frame(self)
        self.header.pack(fill="x")
        self.lbl_tema = ttk.Label(self.header, text="", font=("", 12, "bold"))
        self.lbl_tema.pack(side="left")
        self.lbl_progreso = ttk.Label(self.header, text="")
        self.lbl_progreso.pack(side="right")

        self.txt_enunciado = tk.Text(
            self, height=9, wrap="word", relief="flat",
            background="#f4f4f4", padx=10, pady=8
        )
        self.txt_enunciado.tag_configure(
            "codigo", font=("Monospace", 10), background="#2d2d2d",
            foreground="#f0f0f0"
        )
        self.txt_enunciado.pack(fill="x", pady=(10, 5))
        self.txt_enunciado.configure(state="disabled")

        self.frame_opciones = ttk.Frame(self)
        self.frame_opciones.pack(fill="x", pady=5)

        self._math_imgs = []

        self.footer = ttk.Frame(self)
        self.footer.pack(fill="x", side="bottom", pady=(10, 0))
        self.btn_ant = ttk.Button(
            self.footer, text="< Anterior", command=self.anterior
        )
        self.btn_ant.pack(side="left")
        self.btn_fin = ttk.Button(
            self.footer, text="Finalizar evaluación", command=self.finalizar
        )
        self.btn_fin.pack(side="right")
        self.btn_sig = ttk.Button(
            self.footer, text="Siguiente >", command=self.siguiente
        )
        self.btn_sig.pack(side="right", padx=5)

    def cargar_pregunta(self):
        p = self.app.preguntas[self.app.indice]
        total = len(self.app.preguntas)
        self.lbl_tema.config(text=self.app.tema_actual)
        self.lbl_progreso.config(
            text=f"Pregunta {self.app.indice + 1} de {total}"
        )
        self.render_enunciado(p["enunciado"])
        for w in self.frame_opciones.winfo_children():
            w.destroy()
        self.var.set(p["respuesta_usuario"] or "")
        for opcion in p["opciones"]:
            rb = ttk.Radiobutton(
                self.frame_opciones, text=latex_a_unicode(opcion), value=opcion,
                variable=self.var, command=self.guardar_respuesta
            )
            rb.pack(anchor="w", pady=2, fill="x")
        self.btn_ant.config(state="normal" if self.app.indice > 0 else "disabled")
        ultimo = self.app.indice == total - 1
        self.btn_sig.config(state="disabled" if ultimo else "normal")

    def render_enunciado(self, texto):
        self.txt_enunciado.configure(state="normal")
        self.txt_enunciado.delete("1.0", "end")
        self._math_imgs = []
        partes = texto.split("```")
        for i, parte in enumerate(partes):
            if i % 2 == 1:
                lineas = parte.splitlines()
                if lineas and re.fullmatch(r"[a-zA-Z0-9+#]+", lineas[0].strip()):
                    lineas = lineas[1:]
                self.txt_enunciado.insert(
                    "end", "\n".join(lineas).strip("\n") + "\n", "codigo"
                )
            elif parte.strip():
                self._insertar_tex(parte.strip("\n") + "\n")
        self.txt_enunciado.configure(state="disabled")

    def _insertar_tex(self, texto):
        """Inserta texto en el enunciado, traduciendo $...$ y $$...$$ a
        caracteres Unicode legibles (sin depender de imágenes o matplotlib)."""
        self.txt_enunciado.insert("end", latex_a_unicode(texto))

    def guardar_respuesta(self):
        self.app.preguntas[self.app.indice]["respuesta_usuario"] = (
            self.var.get() or None
        )

    def anterior(self):
        self.guardar_respuesta()
        if self.app.indice > 0:
            self.app.indice -= 1
            self.cargar_pregunta()

    def siguiente(self):
        self.guardar_respuesta()
        if self.app.indice < len(self.app.preguntas) - 1:
            self.app.indice += 1
            self.cargar_pregunta()

    def finalizar(self):
        self.guardar_respuesta()
        sin_responder = [
            i + 1 for i, p in enumerate(self.app.preguntas)
            if p["respuesta_usuario"] is None
        ]
        if sin_responder:
            if not messagebox.askyesno(
                "Confirmar",
                f"Hay preguntas sin responder: {sin_responder}\n"
                "¿Deseas finalizar de todos modos?"
            ):
                return
        self.app.mostrar_resultados()


class ResultadoFrame(ttk.Frame):
    def __init__(self, master, app):
        super().__init__(master, padding=15)
        self.app = app
        self.lbl_score = ttk.Label(self, text="", font=("", 18, "bold"))
        self.lbl_score.pack(pady=(0, 10))

        columnas = ("num", "estado", "usuario", "correcta")
        self.tabla = ttk.Treeview(self, columns=columnas, show="headings", height=14)
        for col, texto, ancho in (
            ("num", "#", 40),
            ("estado", "Estado", 80),
            ("usuario", "Tu respuesta", 320),
            ("correcta", "Respuesta correcta", 320),
        ):
            self.tabla.heading(col, text=texto)
            self.tabla.column(col, width=ancho, anchor="w")
        self.tabla.tag_configure("ok", foreground="green")
        self.tabla.tag_configure("mal", foreground="red")
        self.tabla.pack(fill="both", expand=True)

        self.footer = ttk.Frame(self)
        self.footer.pack(fill="x", pady=(10, 0))
        ttk.Button(self.footer, text="Guardar resultados (JSON)",
                   command=self.guardar_json).pack(side="left")
        ttk.Button(self.footer, text="Volver al menú",
                   command=self.app.mostrar_selector).pack(side="right")

    def mostrar(self):
        preguntas = self.app.preguntas
        total = len(preguntas)
        correctas = sum(1 for p in preguntas if p["es_correcta"])
        calificacion = round(correctas * 100 / total, 2) if total else 0.0
        self.app.resultado_final = {
            "calificacion": calificacion,
            "total_correctas": correctas,
            "total_preguntas": total,
        }
        self.lbl_score.config(
            text=f"Calificación: {calificacion} / 100  "
                 f"({correctas} de {total} correctas)"
        )
        self.tabla.delete(*self.tabla.get_children())
        for p in preguntas:
            ok = p["es_correcta"]
            tag = "ok" if ok else "mal"
            estado = "Correcta" if ok else "Incorrecta"
            usuario = latex_a_unicode(p["respuesta_usuario"] or "(sin responder)")
            self.tabla.insert(
                "", "end", tags=(tag,),
                values=(p["id_pregunta"], estado, usuario,
                        latex_a_unicode(p["respuesta_correcta"]))
            )

    def guardar_json(self):
        datos = {
            "evaluacion_id": f"{self.app.tema_actual}-{datetime.now():%Y%m%d%H%M%S}",
            "titulo": f"Evaluación {self.app.tema_actual}",
            "usuario": {"nombre": ""},
            "preguntas": self.app.preguntas,
            "resultado_final": self.app.resultado_final,
        }
        schema = cargar_schema()
        requeridos = (schema["required"] if schema
                      else ["evaluacion_id", "preguntas"])
        faltan = [k for k in requeridos if k not in datos]
        if faltan:
            messagebox.showerror("Error", f"Faltan campos: {faltan}")
            return
        ruta = filedialog.asksaveasfilename(
            defaultextension=".json", initialfile=f"{datos['evaluacion_id']}.json",
            initialdir=self.app.carpeta_actual,
            filetypes=[("JSON", "*.json")]
        )
        if not ruta:
            return
        with open(ruta, "w", encoding="utf-8") as f:
            json.dump(datos, f, ensure_ascii=False, indent=2)
        messagebox.showinfo("Guardado", f"Resultados guardados en:\n{ruta}")


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Evaluador Curso C")
        self.geometry("860x640")
        self.minsize(700, 520)
        self.temas = descubrir_temas()
        if not self.temas:
            messagebox.showerror(
                "Error", f"No se encontraron temas en:\n{BASE_DIR}"
            )
            self.destroy()
            return
        self.preguntas = []
        self.indice = 0
        self.tema_actual = ""
        self.resultado_final = None
        self._notas_temas = {}

        self.container = ttk.Frame(self)
        self.container.pack(fill="both", expand=True)
        self.container.rowconfigure(0, weight=1)
        self.container.columnconfigure(0, weight=1)

        self.frames = {}
        for Clase in (SelectorFrame, QuizFrame, ResultadoFrame):
            frame = Clase(self.container, self)
            self.frames[Clase] = frame
            frame.grid(row=0, column=0, sticky="nsew")

        self.bind("<Left>", lambda e: self.frames[QuizFrame].anterior())
        self.bind("<Right>", lambda e: self.frames[QuizFrame].siguiente())
        self.mostrar_selector()

    def mostrar_frame(self, Clase):
        self.frames[Clase].tkraise()

    def mostrar_selector(self):
        self.frames[SelectorFrame].refrescar_colores()
        self.mostrar_frame(SelectorFrame)

    def _resultado_tema(self, indice):
        """Devuelve el diccionario del JSON de evaluación más reciente del
        tema, o None si no existe evaluación guardada."""
        _, ruta, nombre_json = self.temas[indice]
        archivos = sorted(ruta.parent.glob(f"{nombre_json}-*.json"), reverse=True)
        if not archivos:
            return None
        try:
            with open(archivos[0], encoding="utf-8") as f:
                return json.load(f)
        except (OSError, json.JSONDecodeError, KeyError):
            return None

    def porcentaje_contestado_tema(self, indice):
        """Porcentaje (0-100) de preguntas CONTESTADAS (respondidas, no
        necesariamente correctas) en la evaluación más reciente del tema.
        Devuelve None si no hay evaluación guardada."""
        datos = self._resultado_tema(indice)
        if datos is None:
            return None
        preguntas = datos.get("preguntas") or []
        total = (len(preguntas)
                 if preguntas
                 else datos["resultado_final"]["total_preguntas"])
        if total == 0:
            return 0.0
        contestadas = sum(1 for p in preguntas if p.get("respuesta_usuario"))
        return round(contestadas * 100 / total, 1)

    def nota_tema(self, indice):
        """Lee la nota de la evaluación más reciente del tema (JSON dentro
        de su carpeta). La clave de control es nombre_json."""
        _, ruta, nombre_json = self.temas[indice]
        if nombre_json in self._notas_temas:
            return self._notas_temas[nombre_json]
        archivos = sorted(ruta.parent.glob(f"{nombre_json}-*.json"), reverse=True)
        if not archivos:
            return None
        try:
            with open(archivos[0], encoding="utf-8") as f:
                datos = json.load(f)
            total = datos["resultado_final"]["total_preguntas"]
            correctas = datos["resultado_final"]["total_correctas"]
            return round(correctas * 10 / total, 1) if total else 0.0
        except (OSError, json.JSONDecodeError, KeyError):
            return None

    def calificacion_tema(self, indice):
        """Calificación (0-100) de la evaluación más reciente del tema.
        Devuelve None si no hay evaluación guardada o falta el campo."""
        datos = self._resultado_tema(indice)
        if datos is None:
            return None
        try:
            return datos["resultado_final"]["calificacion"]
        except (KeyError, TypeError):
            return None

    def tema_evaluado(self, indice):
        return self.nota_tema(indice) is not None

    def iniciar_quiz(self, indice_tema):
        nombre, ruta, nombre_json = self.temas[indice_tema]
        preguntas = parsear_preguntas(ruta)
        if not preguntas:
            messagebox.showerror(
                "Error", f"No se pudieron leer preguntas de:\n{ruta}"
            )
            return
        self.preguntas = preguntas
        self.indice = 0
        self.tema_actual = nombre_json
        self.carpeta_actual = ruta.parent
        self.resultado_final = None
        self.frames[QuizFrame].cargar_pregunta()
        self.mostrar_frame(QuizFrame)

    def mostrar_resultados(self):
        for p in self.preguntas:
            p["es_correcta"] = p["respuesta_usuario"] == p["respuesta_correcta"]
        total = len(self.preguntas)
        correctas = sum(1 for p in self.preguntas if p["es_correcta"])
        nota = round(correctas * 10 / total, 1) if total else 0.0
        self._notas_temas[self.tema_actual] = nota
        self.frames[ResultadoFrame].mostrar()
        self.mostrar_frame(ResultadoFrame)


if __name__ == "__main__":
    app = App()
    app.mainloop()
