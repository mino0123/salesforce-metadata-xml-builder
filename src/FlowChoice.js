const FlowDataType = require('./FlowDataType');
const FlowChoiceUserInput = require('./FlowChoiceUserInput');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowChoice>';
  var rootTagEnd = '</FlowChoice>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.choiceText == null ? '' : '<choiceText>' + object.choiceText + '</choiceText>'}
	${object.dataType == null ? '' : '<dataType>' + FlowDataType(object.dataType, true) + '</dataType>'}
	${object.userInput == null ? '' : '<userInput>' + FlowChoiceUserInput(object.userInput, true) + '</userInput>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}