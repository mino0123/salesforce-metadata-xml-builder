
module.exports = (object, asChild) => {
  var rootTagStart = '<ModeratedEntityField>';
  var rootTagEnd = '</ModeratedEntityField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.entityName == null ? '' : '<entityName>' + object.entityName + '</entityName>'}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.keywordList == null ? '' : '<keywordList>' + object.keywordList + '</keywordList>'}
${rootTagEnd}`;
}