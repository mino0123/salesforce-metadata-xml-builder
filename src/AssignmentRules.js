const AssignmentRule = require('./AssignmentRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<AssignmentRules>';
  var rootTagEnd = '</AssignmentRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignmentRule == null ? '' : object.assignmentRule.map(p => '<assignmentRule>' + AssignmentRule(p, true) + '</assignmentRule>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}