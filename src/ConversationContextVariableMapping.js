const MessageType = require('./MessageType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConversationContextVariableMapping>';
  var rootTagEnd = '</ConversationContextVariableMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.messageType == null ? '' : '<messageType>' + MessageType(object.messageType, true) + '</messageType>'}
${rootTagEnd}`;
}