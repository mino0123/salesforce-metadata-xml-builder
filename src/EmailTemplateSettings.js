
module.exports = (object, asChild) => {
  var rootTagStart = '<EmailTemplateSettings>';
  var rootTagEnd = '</EmailTemplateSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableLwcEmailTemplateBuilder == null ? '' : '<enableLwcEmailTemplateBuilder>' + object.enableLwcEmailTemplateBuilder + '</enableLwcEmailTemplateBuilder>'}
	${object.enableTemplateEnhancedFolderPref == null ? '' : '<enableTemplateEnhancedFolderPref>' + object.enableTemplateEnhancedFolderPref + '</enableTemplateEnhancedFolderPref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}