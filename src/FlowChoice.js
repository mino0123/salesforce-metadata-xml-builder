const FlowDataType = require('./FlowDataType');
const FlowChoiceUserInput = require('./FlowChoiceUserInput');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

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
${rootTagEnd}`;
}