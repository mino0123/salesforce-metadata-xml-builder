const FlowConnector = require('./FlowConnector');
const FlowWaitEvent = require('./FlowWaitEvent');
const FlowMetadataValue = require('./FlowMetadataValue');

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
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}