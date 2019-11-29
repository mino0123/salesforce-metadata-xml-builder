const ConversationVariableOperandSourceType = require('./ConversationVariableOperandSourceType');
const ConversationVariableType = require('./ConversationVariableType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotVariableOperand>';
  var rootTagEnd = '</BotVariableOperand>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.disableAutoFill == null ? '' : '<disableAutoFill>' + object.disableAutoFill + '</disableAutoFill>'}
	${object.sourceName == null ? '' : '<sourceName>' + object.sourceName + '</sourceName>'}
	${object.sourceType == null ? '' : '<sourceType>' + ConversationVariableOperandSourceType(object.sourceType, true) + '</sourceType>'}
	${object.sourceValue == null ? '' : '<sourceValue>' + object.sourceValue + '</sourceValue>'}
	${object.targetName == null ? '' : '<targetName>' + object.targetName + '</targetName>'}
	${object.targetType == null ? '' : '<targetType>' + ConversationVariableType(object.targetType, true) + '</targetType>'}
${rootTagEnd}`;
}