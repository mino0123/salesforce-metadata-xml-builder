const FlowDataType = require('./FlowDataType');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowScreenFieldType = require('./FlowScreenFieldType');
const FlowScreenFieldInputParameter = require('./FlowScreenFieldInputParameter');
const FlowScreenFieldOutputParameter = require('./FlowScreenFieldOutputParameter');
const FlowInputValidationRule = require('./FlowInputValidationRule');
const FlowVisibilityRule = require('./FlowVisibilityRule');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreenField>';
  var rootTagEnd = '</FlowScreenField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.choiceReferences == null ? '' : object.choiceReferences.map(p => '<choiceReferences>' + p + '</choiceReferences>').join('')}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.defaultSelectedChoiceReference == null ? '' : '<defaultSelectedChoiceReference>' + object.defaultSelectedChoiceReference + '</defaultSelectedChoiceReference>'}
	${object.defaultValue == null ? '' : '<defaultValue>' + FlowElementReferenceOrValue(object.defaultValue, true) + '</defaultValue>'}
	${object.extensionName == null ? '' : '<extensionName>' + object.extensionName + '</extensionName>'}
	${object.fieldText == null ? '' : '<fieldText>' + object.fieldText + '</fieldText>'}
	${object.fieldType == null ? '' : '<fieldType>' + FlowScreenFieldType(object.fieldType, true) + '</fieldType>'}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
	${object.inputParameters == null ? '' : object.inputParameters.map(p => '<inputParameters>' + FlowScreenFieldInputParameter(p, true) + '</inputParameters>').join('')}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
	${object.isVisible == null ? '' : '<isVisible>' + object.isVisible + '</isVisible>'}
	${object.outputParameters == null ? '' : object.outputParameters.map(p => '<outputParameters>' + FlowScreenFieldOutputParameter(p, true) + '</outputParameters>').join('')}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.storeOutputAutomatically == null ? '' : '<storeOutputAutomatically>' + object.storeOutputAutomatically + '</storeOutputAutomatically>'}
	${object.validationRule == null ? '' : '<validationRule>' + FlowInputValidationRule(object.validationRule, true) + '</validationRule>'}
	${object.visibilityRule == null ? '' : '<visibilityRule>' + FlowVisibilityRule(object.visibilityRule, true) + '</visibilityRule>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}