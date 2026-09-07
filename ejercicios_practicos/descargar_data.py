import kagglehub
import shutil
import os

# 1. Descargar el dataset (se guarda en la caché de Kaggle)
print("Descargando dataset...")
path = kagglehub.dataset_download("sergionefedov/marriage-longevity-what-makes-relationships-last")

print("Ruta temporal en caché:", path)

# 2. Definir dónde quieres guardar los archivos permanentemente en tu equipo
# (Por ejemplo, en una carpeta llamada 'datos_matrimonio' en la misma ruta donde corres tu script)
carpeta_destino = "./datos_matrimonio"

# Crear la carpeta si no existe
os.makedirs(carpeta_destino, exist_ok=True)

# 3. Copiar los archivos desde la caché de kagglehub hacia tu carpeta destino
for archivo in os.listdir(path):
    origen_archivo = os.path.join(path, archivo)
    destino_archivo = os.path.join(carpeta_destino, archivo)
    if os.path.isfile(origen_archivo):
        shutil.copy(origen_archivo, destino_archivo)

print(f"¡Listo! Los archivos se guardaron permanentemente en: {os.path.abspath(carpeta_destino)}")