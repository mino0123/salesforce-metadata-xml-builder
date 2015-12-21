const EmailToCaseRoutingAddressType = require('./EmailToCaseRoutingAddressType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmailToCaseRoutingAddress>';
  var rootTagEnd = '</EmailToCaseRoutingAddress>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.addressType == null ? '' : '<addressType>' + EmailToCaseRoutingAddressType(object.addressType, true) + '</addressType>'}
	${object.authorizedSenders == null ? '' : '<authorizedSenders>' + object.authorizedSenders + '</authorizedSenders>'}
	${object.caseOrigin == null ? '' : '<caseOrigin>' + object.caseOrigin + '</caseOrigin>'}
	${object.caseOwner == null ? '' : '<caseOwner>' + object.caseOwner + '</caseOwner>'}
	${object.caseOwnerType == null ? '' : '<caseOwnerType>' + object.caseOwnerType + '</caseOwnerType>'}
	${object.casePriority == null ? '' : '<casePriority>' + object.casePriority + '</casePriority>'}
	${object.createTask == null ? '' : '<createTask>' + object.createTask + '</createTask>'}
	${object.emailAddress == null ? '' : '<emailAddress>' + object.emailAddress + '</emailAddress>'}
	${object.routingName == null ? '' : '<routingName>' + object.routingName + '</routingName>'}
	${object.saveEmailHeaders == null ? '' : '<saveEmailHeaders>' + object.saveEmailHeaders + '</saveEmailHeaders>'}
	${object.taskStatus == null ? '' : '<taskStatus>' + object.taskStatus + '</taskStatus>'}
${rootTagEnd}`;
}