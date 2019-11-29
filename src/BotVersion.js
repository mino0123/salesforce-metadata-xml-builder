const BotDialogGroup = require('./BotDialogGroup');
const BotDialog = require('./BotDialog');
const ConversationVariable = require('./ConversationVariable');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotVersion>';
  var rootTagEnd = '</BotVersion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.botDialogGroups == null ? '' : object.botDialogGroups.map(p => '<botDialogGroups>' + BotDialogGroup(p, true) + '</botDialogGroups>').join('')}
	${object.botDialogs == null ? '' : object.botDialogs.map(p => '<botDialogs>' + BotDialog(p, true) + '</botDialogs>').join('')}
	${object.conversationVariables == null ? '' : object.conversationVariables.map(p => '<conversationVariables>' + ConversationVariable(p, true) + '</conversationVariables>').join('')}
	${object.entryDialog == null ? '' : '<entryDialog>' + object.entryDialog + '</entryDialog>'}
	${object.mainMenuDialog == null ? '' : '<mainMenuDialog>' + object.mainMenuDialog + '</mainMenuDialog>'}
	${object.responseDelayMilliseconds == null ? '' : '<responseDelayMilliseconds>' + object.responseDelayMilliseconds + '</responseDelayMilliseconds>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}