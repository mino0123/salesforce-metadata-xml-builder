const FlowInputValidationRule = require('./FlowInputValidationRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowChoiceUserInput>';
  var rootTagEnd = '</FlowChoiceUserInput>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
	${object.promptText == null ? '' : '<promptText>' + object.promptText + '</promptText>'}
	${object.validationRule == null ? '' : '<validationRule>' + FlowInputValidationRule(object.validationRule, true) + '</validationRule>'}
${rootTagEnd}`;
}