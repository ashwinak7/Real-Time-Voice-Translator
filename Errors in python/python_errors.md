# Python Implementation Challenges & MIT App Inventor Solution  

---

## ❗ Error Description  

### **Critical Error in Python Code**  

  The Python translator script failed due to an `AttributeError` in the `googletrans` library:  

```python
text_to_translate = translator.translate(query, dest=to_lang)  

# Error:
AttributeError: 'NoneType' object has no attribute 'group'
```
---

## Cause:
- The googletrans library relies on undocumented Google APIs that frequently change, breaking compatibility.

- The regex pattern in gtoken.py failed to parse Google’s updated authentication token response.
  
---

## 🧪 Debugging Steps Attempted

***1. Library Updates***
- Upgraded `googletrans`, `speech_recognition`, and `pyttsx3` to latest versions.

- ✅ Result: No fix. `googletrans` is unmaintained and incompatible with Google’s API changes.

***2. Alternative Libraries***
- Tried google-cloud-translate (official API), but it required:
   ~ Complex OAuth authentication.
   ~ Paid API credentials.

***3. Error Handling***
- Added try-except blocks to catch AttributeError:
  
```python
try:  
    text_to_translate = translator.translate(query, dest=to_lang)  
except AttributeError:  
    print("Translation API failed!")  
```
### ⚠️ Result: Translations remained unreliable.
---
## ✅ Final Solution: Transition to MIT App Inventor

