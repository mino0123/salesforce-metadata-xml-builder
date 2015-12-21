const FlowDataType = require('./FlowDataType');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowScreenFieldType = require('./FlowScreenFieldType');
const FlowInputValidationRule = require('./FlowInputValidationRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreenField>';
  var rootTagEnd = '</FlowScreenField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.choiceReferences == null ? '' : object.choiceReferences.map(p => '<choiceReferences>' + p + '</choiceReferences>')}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.defaultSelectedChoiceReference == null ? '' : '<defaultSelectedChoiceReference>' + object.defaultSelectedChoiceReference + '</defaultSelectedChoiceReference>'}
	${object.defaultValue == null ? '' : '<defaultValue>' + FlowElementReferenceOrValue(object.defaultValue, true) + '</defaultValue>'}
	${object.fieldText == null ? '' : '<fieldText>' + object.fieldText + '</fieldText>'}
	${object.fieldType == null ? '' : '<fieldType>' + FlowScreenFieldType(object.fieldType, true) + '</fieldType>'}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.validationRule == null ? '' : '<validationRule>' + FlowInputValidationRule(object.validationRule, true) + '</validationRule>'}
${rootTagEnd}`;
}