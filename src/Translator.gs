function doGet(e) {
  let sourceLang = e.parameters.sl;
  let destLang = e.parameters.dl;
  let text = e.parameters.text;
  let transletedText = LanguageApp.translate(text.toString(), sourceLang.toString(), destLang.toString());
  return ContentService.createTextOutput(transletedText).setMimeType(ContentService.MimeType.JSON);
}
