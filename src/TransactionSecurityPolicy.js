const TransactionSecurityAction = require('./TransactionSecurityAction');
const MonitoredEvents = require('./MonitoredEvents');

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
	${object.eventType == null ? '' : '<eventType>' + MonitoredEvents(object.eventType, true) + '</eventType>'}
	${object.executionUser == null ? '' : '<executionUser>' + object.executionUser + '</executionUser>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.resourceName == null ? '' : '<resourceName>' + object.resourceName + '</resourceName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}