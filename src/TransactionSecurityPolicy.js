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
	${object.eventType == null ? '' : '<eventType>' + MonitoredEvents(object.eventType, true) + '</eventType>'}
	${object.executionUser == null ? '' : '<executionUser>' + object.executionUser + '</executionUser>'}
	${object.resourceName == null ? '' : '<resourceName>' + object.resourceName + '</resourceName>'}
${rootTagEnd}`;
}