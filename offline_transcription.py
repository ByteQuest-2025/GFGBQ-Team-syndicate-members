import speech_recognition as sr

# Initialize recognizer
r = sr.Recognizer()

# Load audio file
FILE_PATH = r"C:\Users\M Suryaveera\Downloads\WhatsApp Audio 2026-01-03 at 5.48.41 PM.wav"

with sr.AudioFile(FILE_PATH) as source:
    audio = r.record(source)

try:
    # Use Google's free speech recognition (requires internet but no API key)
    text = r.recognize_google(audio)
    print("Transcription:")
    print(text)
except sr.UnknownValueError:
    print("Could not understand audio")
except sr.RequestError as e:
    print(f"Error: {e}")