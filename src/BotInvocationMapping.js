const BotInvocationMappingType = require('./BotInvocationMappingType');
const ConversationVariableType = require('./ConversationVariableType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotInvocationMapping>';
  var rootTagEnd = '</BotInvocationMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.parameterName == null ? '' : '<parameterName>' + object.parameterName + '</parameterName>'}
	${object.type == null ? '' : '<type>' + BotInvocationMappingType(object.type, true) + '</type>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
	${object.variableName == null ? '' : '<variableName>' + object.variableName + '</variableName>'}
	${object.variableType == null ? '' : '<variableType>' + ConversationVariableType(object.variableType, true) + '</variableType>'}
${rootTagEnd}`;
}