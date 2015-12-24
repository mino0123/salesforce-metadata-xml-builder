const FlowConnector = require('./FlowConnector');
const FlowSubflowInputAssignment = require('./FlowSubflowInputAssignment');
const FlowSubflowOutputAssignment = require('./FlowSubflowOutputAssignment');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowSubflow>';
  var rootTagEnd = '</FlowSubflow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.flowName == null ? '' : '<flowName>' + object.flowName + '</flowName>'}
	${object.inputAssignments == null ? '' : object.inputAssignments.map(p => '<inputAssignments>' + FlowSubflowInputAssignment(p, true) + '</inputAssignments>').join('')}
	${object.outputAssignments == null ? '' : object.outputAssignments.map(p => '<outputAssignments>' + FlowSubflowOutputAssignment(p, true) + '</outputAssignments>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}