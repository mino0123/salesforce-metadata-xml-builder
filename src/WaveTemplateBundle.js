
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveTemplateBundle>';
  var rootTagEnd = '</WaveTemplateBundle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetIcon == null ? '' : '<assetIcon>' + object.assetIcon + '</assetIcon>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.templateType == null ? '' : '<templateType>' + object.templateType + '</templateType>'}
${rootTagEnd}`;
}