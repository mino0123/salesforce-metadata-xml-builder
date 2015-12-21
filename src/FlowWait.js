const FlowConnector = require('./FlowConnector');
const FlowWaitEvent = require('./FlowWaitEvent');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowWait>';
  var rootTagEnd = '</FlowWait>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultConnector == null ? '' : '<defaultConnector>' + FlowConnector(object.defaultConnector, true) + '</defaultConnector>'}
	${object.defaultConnectorLabel == null ? '' : '<defaultConnectorLabel>' + object.defaultConnectorLabel + '</defaultConnectorLabel>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.waitEvents == null ? '' : object.waitEvents.map(p => '<waitEvents>' + FlowWaitEvent(p, true) + '</waitEvents>')}
${rootTagEnd}`;
}