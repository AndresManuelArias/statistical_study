import json
import re
from datetime import datetime
from pathlib import Path
from tkinter import filedialog, messagebox
import tkinter as tk
from tkinter import ttk

BASE_DIR = Path(__file__).resolve().parent
SCHEMA_PATH = BASE_DIR / "shema_evaluation.schema.json"

RE_PREGUNTA = re.compile(r"^###\s+Pregunta\s+(\d+)\s*$", re.MULTILINE)
RE_OPCION = re.compile(r"^([a-h])\)\s+(.*)$")
RE_RESPUESTA = re.compile(r"^>\s*\*\*([a-h])\)\s*(.*?)\*\*\s*$", re.MULTILINE)


def cargar_schema():
    try:
        with open(SCHEMA_PATH, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError):
        return None


def descubrir_temas():
    temas = []
    for carpeta in sorted(BASE_DIR.iterdir()):
        if carpeta.is_dir():
            mds = sorted(carpeta.glob("*.md"))
            if mds:
                temas.append((carpeta.name, mds[0]))
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
        ttk.Label(self, text="Curso C", font=("", 11)).pack(pady=(0, 15))
        ttk.Label(self, text="Selecciona un tema:").pack(anchor="w")
        self.lista = tk.Listbox(self, height=18, activestyle="dotbox")
        self.lista.pack(fill="both", expand=True, pady=5)
        self.lista.bind("<Double-Button-1>", lambda e: self.iniciar())
        for nombre, _ in app.temas:
            self.lista.insert("end", nombre)
        self.refrescar_colores()
        self.btn = ttk.Button(self, text="Iniciar evaluación", command=self.iniciar)
        self.btn.pack(pady=10)
        self.info = ttk.Label(self, text="")
        self.info.pack()
        self.lista.bind("<<ListboxSelect>>", self.mostrar_info)

    def refrescar_colores(self):
        for i in range(len(self.app.temas)):
            nota = self.app.nota_tema(i)
            if nota is not None:
                color = "#c8e6c9" if nota >= 8 else "#ffcdd2"
                self.lista.itemconfigure(i, background=color)
            else:
                self.lista.itemconfigure(i, background=self.lista.cget("background"))

    def mostrar_info(self, _event=None):
        sel = self.lista.curselection()
        if not sel:
            return
        _, ruta = self.app.temas[sel[0]]
        n = len(parsear_preguntas(ruta))
        self.info.config(text=f"{n} preguntas encontradas")

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
                self.frame_opciones, text=opcion, value=opcion,
                variable=self.var, command=self.guardar_respuesta
            )
            rb.pack(anchor="w", pady=2)
        self.btn_ant.config(state="normal" if self.app.indice > 0 else "disabled")
        ultimo = self.app.indice == total - 1
        self.btn_sig.config(state="disabled" if ultimo else "normal")

    def render_enunciado(self, texto):
        self.txt_enunciado.configure(state="normal")
        self.txt_enunciado.delete("1.0", "end")
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
                self.txt_enunciado.insert("end", parte.strip("\n") + "\n")
        self.txt_enunciado.configure(state="disabled")

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
            usuario = p["respuesta_usuario"] or "(sin responder)"
            self.tabla.insert(
                "", "end", tags=(tag,),
                values=(p["id_pregunta"], estado, usuario,
                        p["respuesta_correcta"])
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

    def nota_tema(self, indice):
        nombre, ruta = self.temas[indice]
        if nombre in self._notas_temas:
            return self._notas_temas[nombre]
        archivos = sorted(ruta.parent.glob(f"{nombre}-*.json"), reverse=True)
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

    def tema_evaluado(self, indice):
        return self.nota_tema(indice) is not None

    def iniciar_quiz(self, indice_tema):
        nombre, ruta = self.temas[indice_tema]
        preguntas = parsear_preguntas(ruta)
        if not preguntas:
            messagebox.showerror(
                "Error", f"No se pudieron leer preguntas de:\n{ruta}"
            )
            return
        self.preguntas = preguntas
        self.indice = 0
        self.tema_actual = nombre
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
