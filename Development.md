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

#### 2. **Error Documentation**  
Create a `docs/errors/` folder with:  
- A `python_errors.md` file explaining the errors and solutions.  
- Screenshots of error messages (e.g., Figure 3.1.2 from your report).  

```markdown
<!-- docs/errors/python_errors.md -->  
# Python Implementation Challenges  

### 1. Speech Recognition Library Errors  
**Issue**: Inconsistent behavior with `speech_recognition` library.  
**Solution**: Switched to MIT App Inventor’s built-in `SpeechRecognizer` component.  

![Error Message](images/error_status.png)  
*Figure 3.1.2: Python Speech Recognition Error*  
