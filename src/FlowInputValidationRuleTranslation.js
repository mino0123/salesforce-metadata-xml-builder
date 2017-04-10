
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowInputValidationRuleTranslation>';
  var rootTagEnd = '</FlowInputValidationRuleTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
${rootTagEnd}`;
}