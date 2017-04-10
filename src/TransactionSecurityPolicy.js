const TransactionSecurityAction = require('./TransactionSecurityAction');
const TransactionSecurityEventName = require('./TransactionSecurityEventName');
const MonitoredEvents = require('./MonitoredEvents');
const TxnSecurityPolicyType = require('./TxnSecurityPolicyType');

module.exports = (object, asChild) => {
  var rootTagStart = '<TransactionSecurityPolicy>';
  var rootTagEnd = '</TransactionSecurityPolicy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + TransactionSecurityAction(object.action, true) + '</action>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.apexClass == null ? '' : '<apexClass>' + object.apexClass + '</apexClass>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.eventName == null ? '' : '<eventName>' + TransactionSecurityEventName(object.eventName, true) + '</eventName>'}
	${object.eventType == null ? '' : '<eventType>' + MonitoredEvents(object.eventType, true) + '</eventType>'}
	${object.executionUser == null ? '' : '<executionUser>' + object.executionUser + '</executionUser>'}
	${object.flow == null ? '' : '<flow>' + object.flow + '</flow>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.resourceName == null ? '' : '<resourceName>' + object.resourceName + '</resourceName>'}
	${object.type == null ? '' : '<type>' + TxnSecurityPolicyType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}