const FlowConnector = require('./FlowConnector');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowStep>';
  var rootTagEnd = '</FlowStep>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connectors == null ? '' : object.connectors.map(p => '<connectors>' + FlowConnector(p, true) + '</connectors>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}