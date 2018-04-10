const FlowInputValidationRuleTranslation = require('./FlowInputValidationRuleTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreenFieldTranslation>';
  var rootTagEnd = '</FlowScreenFieldTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldText == null ? '' : '<fieldText>' + object.fieldText + '</fieldText>'}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.validationRule == null ? '' : '<validationRule>' + FlowInputValidationRuleTranslation(object.validationRule, true) + '</validationRule>'}
${rootTagEnd}`;
}