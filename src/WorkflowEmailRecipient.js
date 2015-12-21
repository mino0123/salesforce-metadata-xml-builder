const ActionEmailRecipientTypes = require('./ActionEmailRecipientTypes');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowEmailRecipient>';
  var rootTagEnd = '</WorkflowEmailRecipient>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.recipient == null ? '' : '<recipient>' + object.recipient + '</recipient>'}
	${object.type == null ? '' : '<type>' + ActionEmailRecipientTypes(object.type, true) + '</type>'}
${rootTagEnd}`;
}