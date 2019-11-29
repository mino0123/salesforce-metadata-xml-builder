const ConnectionPropertyName = require('./ConnectionPropertyName');

module.exports = (object, asChild) => {
  var rootTagStart = '<ExternalConnectionProperty>';
  var rootTagEnd = '</ExternalConnectionProperty>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.propertyName == null ? '' : '<propertyName>' + ConnectionPropertyName(object.propertyName, true) + '</propertyName>'}
	${object.propertyValue == null ? '' : '<propertyValue>' + object.propertyValue + '</propertyValue>'}
${rootTagEnd}`;
}