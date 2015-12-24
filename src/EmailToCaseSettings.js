const EmailToCaseOnFailureActionType = require('./EmailToCaseOnFailureActionType');
const EmailToCaseRoutingAddress = require('./EmailToCaseRoutingAddress');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmailToCaseSettings>';
  var rootTagEnd = '</EmailToCaseSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEmailToCase == null ? '' : '<enableEmailToCase>' + object.enableEmailToCase + '</enableEmailToCase>'}
	${object.enableHtmlEmail == null ? '' : '<enableHtmlEmail>' + object.enableHtmlEmail + '</enableHtmlEmail>'}
	${object.enableOnDemandEmailToCase == null ? '' : '<enableOnDemandEmailToCase>' + object.enableOnDemandEmailToCase + '</enableOnDemandEmailToCase>'}
	${object.enableThreadIDInBody == null ? '' : '<enableThreadIDInBody>' + object.enableThreadIDInBody + '</enableThreadIDInBody>'}
	${object.enableThreadIDInSubject == null ? '' : '<enableThreadIDInSubject>' + object.enableThreadIDInSubject + '</enableThreadIDInSubject>'}
	${object.notifyOwnerOnNewCaseEmail == null ? '' : '<notifyOwnerOnNewCaseEmail>' + object.notifyOwnerOnNewCaseEmail + '</notifyOwnerOnNewCaseEmail>'}
	${object.overEmailLimitAction == null ? '' : '<overEmailLimitAction>' + EmailToCaseOnFailureActionType(object.overEmailLimitAction, true) + '</overEmailLimitAction>'}
	${object.preQuoteSignature == null ? '' : '<preQuoteSignature>' + object.preQuoteSignature + '</preQuoteSignature>'}
	${object.routingAddresses == null ? '' : object.routingAddresses.map(p => '<routingAddresses>' + EmailToCaseRoutingAddress(p, true) + '</routingAddresses>').join('')}
	${object.unauthorizedSenderAction == null ? '' : '<unauthorizedSenderAction>' + EmailToCaseOnFailureActionType(object.unauthorizedSenderAction, true) + '</unauthorizedSenderAction>'}
${rootTagEnd}`;
}