const FlowConnector = require('./FlowConnector');
const FlowSubflowInputAssignment = require('./FlowSubflowInputAssignment');
const FlowSubflowOutputAssignment = require('./FlowSubflowOutputAssignment');

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
	${object.inputAssignments == null ? '' : object.inputAssignments.map(p => '<inputAssignments>' + FlowSubflowInputAssignment(p, true) + '</inputAssignments>')}
	${object.outputAssignments == null ? '' : object.outputAssignments.map(p => '<outputAssignments>' + FlowSubflowOutputAssignment(p, true) + '</outputAssignments>')}
${rootTagEnd}`;
}