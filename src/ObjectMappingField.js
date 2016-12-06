
module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectMappingField>';
  var rootTagEnd = '</ObjectMappingField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.inputField == null ? '' : '<inputField>' + object.inputField + '</inputField>'}
	${object.outputField == null ? '' : '<outputField>' + object.outputField + '</outputField>'}
${rootTagEnd}`;
}