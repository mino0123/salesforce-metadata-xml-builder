const FlowAssignmentItem = require('./FlowAssignmentItem');
const FlowConnector = require('./FlowConnector');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowAssignment>';
  var rootTagEnd = '</FlowAssignment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignmentItems == null ? '' : object.assignmentItems.map(p => '<assignmentItems>' + FlowAssignmentItem(p, true) + '</assignmentItems>')}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
${rootTagEnd}`;
}