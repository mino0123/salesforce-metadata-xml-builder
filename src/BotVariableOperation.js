const BotInvocation = require('./BotInvocation');
const BotMessage = require('./BotMessage');
const BotQuickReplyOption = require('./BotQuickReplyOption');
const BotVariableOperand = require('./BotVariableOperand');
const BotNavigation = require('./BotNavigation');
const BotQuickReplyType = require('./BotQuickReplyType');
const BotWidgetType = require('./BotWidgetType');
const ConversationVariableType = require('./ConversationVariableType');
const BotVariableOperationType = require('./BotVariableOperationType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotVariableOperation>';
  var rootTagEnd = '</BotVariableOperation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.botInvocation == null ? '' : '<botInvocation>' + BotInvocation(object.botInvocation, true) + '</botInvocation>'}
	${object.botMessages == null ? '' : object.botMessages.map(p => '<botMessages>' + BotMessage(p, true) + '</botMessages>').join('')}
	${object.botQuickReplyOptions == null ? '' : object.botQuickReplyOptions.map(p => '<botQuickReplyOptions>' + BotQuickReplyOption(p, true) + '</botQuickReplyOptions>').join('')}
	${object.botVariableOperands == null ? '' : object.botVariableOperands.map(p => '<botVariableOperands>' + BotVariableOperand(p, true) + '</botVariableOperands>').join('')}
	${object.invalidInputBotNavigation == null ? '' : '<invalidInputBotNavigation>' + BotNavigation(object.invalidInputBotNavigation, true) + '</invalidInputBotNavigation>'}
	${object.quickReplyOptionTemplate == null ? '' : '<quickReplyOptionTemplate>' + object.quickReplyOptionTemplate + '</quickReplyOptionTemplate>'}
	${object.quickReplyType == null ? '' : '<quickReplyType>' + BotQuickReplyType(object.quickReplyType, true) + '</quickReplyType>'}
	${object.quickReplyWidgetType == null ? '' : '<quickReplyWidgetType>' + BotWidgetType(object.quickReplyWidgetType, true) + '</quickReplyWidgetType>'}
	${object.sourceVariableName == null ? '' : '<sourceVariableName>' + object.sourceVariableName + '</sourceVariableName>'}
	${object.sourceVariableType == null ? '' : '<sourceVariableType>' + ConversationVariableType(object.sourceVariableType, true) + '</sourceVariableType>'}
	${object.type == null ? '' : '<type>' + BotVariableOperationType(object.type, true) + '</type>'}
${rootTagEnd}`;
}