const EmailServicesAttOptions = require('./EmailServicesAttOptions');
const EmailServicesErrorAction = require('./EmailServicesErrorAction');
const EmailServicesAddress = require('./EmailServicesAddress');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmailServicesFunction>';
  var rootTagEnd = '</EmailServicesFunction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexClass == null ? '' : '<apexClass>' + object.apexClass + '</apexClass>'}
	${object.attachmentOption == null ? '' : '<attachmentOption>' + EmailServicesAttOptions(object.attachmentOption, true) + '</attachmentOption>'}
	${object.authenticationFailureAction == null ? '' : '<authenticationFailureAction>' + EmailServicesErrorAction(object.authenticationFailureAction, true) + '</authenticationFailureAction>'}
	${object.authorizationFailureAction == null ? '' : '<authorizationFailureAction>' + EmailServicesErrorAction(object.authorizationFailureAction, true) + '</authorizationFailureAction>'}
	${object.authorizedSenders == null ? '' : '<authorizedSenders>' + object.authorizedSenders + '</authorizedSenders>'}
	${object.emailServicesAddresses == null ? '' : object.emailServicesAddresses.map(p => '<emailServicesAddresses>' + EmailServicesAddress(p, true) + '</emailServicesAddresses>').join('')}
	${object.errorRoutingAddress == null ? '' : '<errorRoutingAddress>' + object.errorRoutingAddress + '</errorRoutingAddress>'}
	${object.functionInactiveAction == null ? '' : '<functionInactiveAction>' + EmailServicesErrorAction(object.functionInactiveAction, true) + '</functionInactiveAction>'}
	${object.functionName == null ? '' : '<functionName>' + object.functionName + '</functionName>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.isAuthenticationRequired == null ? '' : '<isAuthenticationRequired>' + object.isAuthenticationRequired + '</isAuthenticationRequired>'}
	${object.isErrorRoutingEnabled == null ? '' : '<isErrorRoutingEnabled>' + object.isErrorRoutingEnabled + '</isErrorRoutingEnabled>'}
	${object.isTextAttachmentsAsBinary == null ? '' : '<isTextAttachmentsAsBinary>' + object.isTextAttachmentsAsBinary + '</isTextAttachmentsAsBinary>'}
	${object.isTlsRequired == null ? '' : '<isTlsRequired>' + object.isTlsRequired + '</isTlsRequired>'}
	${object.overLimitAction == null ? '' : '<overLimitAction>' + EmailServicesErrorAction(object.overLimitAction, true) + '</overLimitAction>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}