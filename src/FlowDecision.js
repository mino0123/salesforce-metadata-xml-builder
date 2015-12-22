const FlowConnector = require('./FlowConnector');
const FlowRule = require('./FlowRule');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowDecision>';
  var rootTagEnd = '</FlowDecision>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultConnector == null ? '' : '<defaultConnector>' + FlowConnector(object.defaultConnector, true) + '</defaultConnector>'}
	${object.defaultConnectorLabel == null ? '' : '<defaultConnectorLabel>' + object.defaultConnectorLabel + '</defaultConnectorLabel>'}
	${object.rules == null ? '' : object.rules.map(p => '<rules>' + FlowRule(p, true) + '</rules>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}