const WorkflowEmailRecipient = require('./WorkflowEmailRecipient');
const ActionEmailSenderType = require('./ActionEmailSenderType');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowAlert>';
  var rootTagEnd = '</WorkflowAlert>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.ccEmails == null ? '' : object.ccEmails.map(p => '<ccEmails>' + p + '</ccEmails>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.recipients == null ? '' : object.recipients.map(p => '<recipients>' + WorkflowEmailRecipient(p, true) + '</recipients>')}
	${object.senderAddress == null ? '' : '<senderAddress>' + object.senderAddress + '</senderAddress>'}
	${object.senderType == null ? '' : '<senderType>' + ActionEmailSenderType(object.senderType, true) + '</senderType>'}
	${object.template == null ? '' : '<template>' + object.template + '</template>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}