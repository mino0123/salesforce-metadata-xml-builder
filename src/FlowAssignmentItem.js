const FlowAssignmentOperator = require('./FlowAssignmentOperator');
const FlowElementReferenceOrValue = require('./FlowElementReferenceOrValue');
const FlowMetadataValue = require('./FlowMetadataValue');

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
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}