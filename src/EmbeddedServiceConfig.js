
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceConfig>';
  var rootTagEnd = '</EmbeddedServiceConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}