
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningMessageField>';
  var rootTagEnd = '</LightningMessageField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
${rootTagEnd}`;
}