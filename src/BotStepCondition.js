const ConversationVariableType = require('./ConversationVariableType');
const BotStepConditionOperatorType = require('./BotStepConditionOperatorType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotStepCondition>';
  var rootTagEnd = '</BotStepCondition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.leftOperandName == null ? '' : '<leftOperandName>' + object.leftOperandName + '</leftOperandName>'}
	${object.leftOperandType == null ? '' : '<leftOperandType>' + ConversationVariableType(object.leftOperandType, true) + '</leftOperandType>'}
	${object.operatorType == null ? '' : '<operatorType>' + BotStepConditionOperatorType(object.operatorType, true) + '</operatorType>'}
	${object.rightOperandValue == null ? '' : '<rightOperandValue>' + object.rightOperandValue + '</rightOperandValue>'}
${rootTagEnd}`;
}