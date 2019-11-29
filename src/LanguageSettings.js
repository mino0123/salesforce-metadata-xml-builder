
module.exports = (object, asChild) => {
  var rootTagStart = '<LanguageSettings>';
  var rootTagEnd = '</LanguageSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCanadaIcuFormat == null ? '' : '<enableCanadaIcuFormat>' + object.enableCanadaIcuFormat + '</enableCanadaIcuFormat>'}
	${object.enableEndUserLanguages == null ? '' : '<enableEndUserLanguages>' + object.enableEndUserLanguages + '</enableEndUserLanguages>'}
	${object.enableICULocaleDateFormat == null ? '' : '<enableICULocaleDateFormat>' + object.enableICULocaleDateFormat + '</enableICULocaleDateFormat>'}
	${object.enablePlatformLanguages == null ? '' : '<enablePlatformLanguages>' + object.enablePlatformLanguages + '</enablePlatformLanguages>'}
	${object.enableTranslationWorkbench == null ? '' : '<enableTranslationWorkbench>' + object.enableTranslationWorkbench + '</enableTranslationWorkbench>'}
	${object.useLanguageFallback == null ? '' : '<useLanguageFallback>' + object.useLanguageFallback + '</useLanguageFallback>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}