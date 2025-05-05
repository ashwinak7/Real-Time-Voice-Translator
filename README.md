# Real-Time Voice Translator Using MIT App Inventor

🌐 **Break language barriers with real-time speech translation**  

---

## Description  
This project is a real-time voice translation application developed using MIT App Inventor. It leverages speech recognition and translation APIs to enable seamless multilingual communication. The app translates spoken words instantly, supports 6+ languages, and features an intuitive interface accessible to users of all technical levels. Designed for an academic project at SASTRA University.

---

## Features  
✅ **Multi-language Support**: Translate between Tamil, English, Hindi, Malayalam, Kannada, and Telugu.  
✅ **Real-Time Speech Recognition**: Converts spoken words to text instantly.  
✅ **Text-to-Speech Output**: Plays translated audio for effortless communication.  
✅ **User-Friendly Interface**: Simple design for easy navigation.  
✅ **API Integration**: Utilizes Google Translation API for accurate results.  

---

## Screenshots  
| App Interface | Language Selection | Speech Recognition | Translation Result |  
|---------------|--------------------|--------------------|---------------------|  
|![Picture2](https://github.com/user-attachments/assets/cdbbbf58-58b9-4999-a3db-1389d966ba63)|![Picture4](https://github.com/user-attachments/assets/6632758a-af22-4704-9a92-f0edd100634b)|![Picture3](https://github.com/user-attachments/assets/287f382c-dca5-465a-af2f-45daef4bfd24)|![Picture5](https://github.com/user-attachments/assets/de2c4050-e068-4567-969f-62c83562d943)|

---

## Installation  

### 1. Import the MIT App Inventor Project  
- Download the `.aia` file from the [`src/`](src/) directory.  
- Open [MIT App Inventor](https://appinventor.mit.edu/), go to **Projects → Import project (.aia)** and upload the file.  

### 2. Configure API Keys  
- **Obtain a Google Cloud Translation API Key**:  
  1. Create a project on [Google Cloud Console](https://console.cloud.google.com/).  
  2. Enable the **Translation API**.  
  3. Generate an API key under "Credentials".  
- **Integrate the Key**:  
  - In MIT App Inventor, navigate to the `Translation` block.  
  - Replace the placeholder `API_KEY_HERE` with your actual key.  
  - **Never commit or share your API key publicly!**  

---

## Usage  
1. **Select Languages**:  
   - Open the app and choose your **source language** and **target language** from the dropdown menus.  
2. **Speak**:  
   - Tap the microphone icon and speak clearly into your device.  
3. **Translate**:  
   - Click the "Translate" button. The app will convert speech to text, translate it, and display the result.  
4. **Listen**:  
   - Use the "Play" button to hear the translated text aloud.  

---

## Acknowledgments  
- **Guide**: Dr. G. Bagyalakshmi (School of Electrical and Electronics Engineering, SASTRA University).  
- **Institution**: SASTRA Deemed-to-be-University for infrastructure and support.  
- **APIs**: Google Cloud Translation and Speech-to-Text services.  

---

## References  
1. Gamal Bohouta et al., *Real-Time Speech Translation* (2018).  
2. Google Translation API Documentation.  
3. MIT App Inventor Official Guides.  

