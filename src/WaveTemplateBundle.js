
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveTemplateBundle>';
  var rootTagEnd = '</WaveTemplateBundle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetIcon == null ? '' : '<assetIcon>' + object.assetIcon + '</assetIcon>'}
	${object.assetVersion == null ? '' : '<assetVersion>' + object.assetVersion + '</assetVersion>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.templateType == null ? '' : '<templateType>' + object.templateType + '</templateType>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}