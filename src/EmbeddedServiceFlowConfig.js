
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceFlowConfig>';
  var rootTagEnd = '</EmbeddedServiceFlowConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}