## Development Journey  

### Initial Python Implementation  
We initially attempted to build the translator using Python. However, we faced critical issues:  
- **Library Compatibility**: Errors with speech recognition libraries (e.g., `SpeechRecognition`, `pyttsx3`).  
- **API Key Integration**: Authentication failures with translation APIs (e.g., `googletrans`).  
- **Real-Time Limitations**: Python’s threading model caused delays in speech-to-text conversion.  

Example error:  
```python
# Sample Python Code (with error)  
import speech_recognition as sr  
r = sr.Recognizer()  
with sr.Microphone() as source:  
    audio = r.listen(source)  
# Error: AttributeError: 'Recognizer' object has no attribute 'listen'
```

---

### To overcome these challenges, 
We switched to MIT App Inventor because:
- Drag-and-Drop Simplicity: No complex library installations.
- Built-in Blocks: Native support for speech recognition and translation APIs.
- Real-Time Performance: Smooth integration of audio input/output with minimal lag.


---

### Error Documentation  
Created a `Errors in python` folder with:  
- A (Real-Time-Voice-Translator/Errors in python/python_errors.md) file explaining the errors and solutions.    
---
