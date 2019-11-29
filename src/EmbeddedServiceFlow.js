const EmbeddedServiceFlowType = require('./EmbeddedServiceFlowType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceFlow>';
  var rootTagEnd = '</EmbeddedServiceFlow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.flow == null ? '' : '<flow>' + object.flow + '</flow>'}
	${object.flowType == null ? '' : '<flowType>' + EmbeddedServiceFlowType(object.flowType, true) + '</flowType>'}
	${object.isAuthenticationRequired == null ? '' : '<isAuthenticationRequired>' + object.isAuthenticationRequired + '</isAuthenticationRequired>'}
${rootTagEnd}`;
}