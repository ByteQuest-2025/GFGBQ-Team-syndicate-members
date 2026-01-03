import requests

# Constants
GLADIA_API_URL = "https://api.gladia.io/v2/transcription"
GLADIA_KEY = "37839836-c0ef-4790-b7f0-49ce593bac65"
FILE_PATH = r"C:\Users\M Suryaveera\Downloads\WhatsApp Audio 2026-01-03 at 5.48.41 PM.wav"

def transcribe_audio():
    with open(FILE_PATH, "rb") as audio_file:
        files = {"audio": ("audio.wav", audio_file, "audio/wav")}
        headers = {"X-Gladia-Key": GLADIA_KEY}
        data = {"language": "en"}
        
        response = requests.post(GLADIA_API_URL, headers=headers, files=files, data=data)
        
        if response.ok:
            result = response.json()
            print("Transcription:")
            print(result.get("transcription", "No transcription found"))
        else:
            print(f"Error: {response.status_code} - {response.text}")

if __name__ == "__main__":
    transcribe_audio()