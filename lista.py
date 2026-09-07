from yt_dlp import YoutubeDL
print("init")
PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLu7vaSuV9737IPl1ZABxsby7SSEN3AZHa"

options = {
    "extract_flat": True,
    "skip_download": True,
    "quiet": True,
}

with YoutubeDL(options) as ydl:
    info = ydl.extract_info(PLAYLIST_URL, download=False)

videos = info.get("entries", [])

print(f"Playlist: {info.get('title')}")
print(f"Total de videos: {len(videos)}\n")

for i, video in enumerate(videos, 1):
    print(f"{i}. {video.get('title')}")
