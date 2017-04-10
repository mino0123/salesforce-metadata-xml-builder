const FlowTranslation = require('./FlowTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowDefinitionTranslation>';
  var rootTagEnd = '</FlowDefinitionTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.flows == null ? '' : object.flows.map(p => '<flows>' + FlowTranslation(p, true) + '</flows>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}