const ConversationInvocableTargetType = require('./ConversationInvocableTargetType');
const BotInvocationMapping = require('./BotInvocationMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotInvocation>';
  var rootTagEnd = '</BotInvocation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.invocationActionName == null ? '' : '<invocationActionName>' + object.invocationActionName + '</invocationActionName>'}
	${object.invocationActionType == null ? '' : '<invocationActionType>' + ConversationInvocableTargetType(object.invocationActionType, true) + '</invocationActionType>'}
	${object.invocationMappings == null ? '' : object.invocationMappings.map(p => '<invocationMappings>' + BotInvocationMapping(p, true) + '</invocationMappings>').join('')}
${rootTagEnd}`;
}