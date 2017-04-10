const FlowInputValidationRuleTranslation = require('./FlowInputValidationRuleTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowChoiceUserInputTranslation>';
  var rootTagEnd = '</FlowChoiceUserInputTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.promptText == null ? '' : '<promptText>' + object.promptText + '</promptText>'}
	${object.validationRule == null ? '' : '<validationRule>' + FlowInputValidationRuleTranslation(object.validationRule, true) + '</validationRule>'}
${rootTagEnd}`;
}