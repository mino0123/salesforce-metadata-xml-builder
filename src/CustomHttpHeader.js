
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomHttpHeader>';
  var rootTagEnd = '</CustomHttpHeader>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.headerFieldName == null ? '' : '<headerFieldName>' + object.headerFieldName + '</headerFieldName>'}
	${object.headerFieldValue == null ? '' : '<headerFieldValue>' + object.headerFieldValue + '</headerFieldValue>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
${rootTagEnd}`;
}