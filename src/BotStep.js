const BotInvocation = require('./BotInvocation');
const BotMessage = require('./BotMessage');
const BotNavigation = require('./BotNavigation');
const BotStepCondition = require('./BotStepCondition');
const BotStep = require('./BotStep');
const BotVariableOperation = require('./BotVariableOperation');
const ConversationRecordLookup = require('./ConversationRecordLookup');
const ConversationSystemMessage = require('./ConversationSystemMessage');
const BotStepType = require('./BotStepType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotStep>';
  var rootTagEnd = '</BotStep>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.botInvocation == null ? '' : '<botInvocation>' + BotInvocation(object.botInvocation, true) + '</botInvocation>'}
	${object.botMessages == null ? '' : object.botMessages.map(p => '<botMessages>' + BotMessage(p, true) + '</botMessages>').join('')}
	${object.botNavigation == null ? '' : '<botNavigation>' + BotNavigation(object.botNavigation, true) + '</botNavigation>'}
	${object.botStepConditions == null ? '' : object.botStepConditions.map(p => '<botStepConditions>' + BotStepCondition(p, true) + '</botStepConditions>').join('')}
	${object.botSteps == null ? '' : object.botSteps.map(p => '<botSteps>' + BotStep(p, true) + '</botSteps>').join('')}
	${object.botVariableOperation == null ? '' : '<botVariableOperation>' + BotVariableOperation(object.botVariableOperation, true) + '</botVariableOperation>'}
	${object.conversationRecordLookup == null ? '' : '<conversationRecordLookup>' + ConversationRecordLookup(object.conversationRecordLookup, true) + '</conversationRecordLookup>'}
	${object.conversationSystemMessage == null ? '' : '<conversationSystemMessage>' + ConversationSystemMessage(object.conversationSystemMessage, true) + '</conversationSystemMessage>'}
	${object.type == null ? '' : '<type>' + BotStepType(object.type, true) + '</type>'}
${rootTagEnd}`;
}