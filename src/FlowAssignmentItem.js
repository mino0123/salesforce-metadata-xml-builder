const FlowAssignmentOperator = require('./FlowAssignmentOperator');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowAssignmentItem>';
  var rootTagEnd = '</FlowAssignmentItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignToReference == null ? '' : '<assignToReference>' + object.assignToReference + '</assignToReference>'}
	${object.operator == null ? '' : '<operator>' + FlowAssignmentOperator(object.operator, true) + '</operator>'}
	${object.value == null ? '' : '<value>' + FlowElementReferenceOrValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}