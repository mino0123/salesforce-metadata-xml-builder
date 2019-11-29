const MCNodeType = require('./MCNodeType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ManagedContentNodeType>';
  var rootTagEnd = '</ManagedContentNodeType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.isLocalizable == null ? '' : '<isLocalizable>' + object.isLocalizable + '</isLocalizable>'}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
	${object.nodeLabel == null ? '' : '<nodeLabel>' + object.nodeLabel + '</nodeLabel>'}
	${object.nodeName == null ? '' : '<nodeName>' + object.nodeName + '</nodeName>'}
	${object.nodeType == null ? '' : '<nodeType>' + MCNodeType(object.nodeType, true) + '</nodeType>'}
	${object.placeholderText == null ? '' : '<placeholderText>' + object.placeholderText + '</placeholderText>'}
${rootTagEnd}`;
}