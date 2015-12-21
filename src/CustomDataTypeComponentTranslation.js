
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomDataTypeComponentTranslation>';
  var rootTagEnd = '</CustomDataTypeComponentTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.developerSuffix == null ? '' : '<developerSuffix>' + object.developerSuffix + '</developerSuffix>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}