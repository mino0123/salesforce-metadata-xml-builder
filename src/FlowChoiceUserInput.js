const FlowInputValidationRule = require('./FlowInputValidationRule');
const FlowMetadataValue = require('./FlowMetadataValue');

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
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}