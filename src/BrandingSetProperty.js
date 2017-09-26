
module.exports = (object, asChild) => {
  var rootTagStart = '<BrandingSetProperty>';
  var rootTagEnd = '</BrandingSetProperty>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.propertyName == null ? '' : '<propertyName>' + object.propertyName + '</propertyName>'}
	${object.propertyValue == null ? '' : '<propertyValue>' + object.propertyValue + '</propertyValue>'}
${rootTagEnd}`;
}