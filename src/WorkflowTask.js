const ActionTaskAssignedToTypes = require('./ActionTaskAssignedToTypes');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowTask>';
  var rootTagEnd = '</WorkflowTask>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignedTo == null ? '' : '<assignedTo>' + object.assignedTo + '</assignedTo>'}
	${object.assignedToType == null ? '' : '<assignedToType>' + ActionTaskAssignedToTypes(object.assignedToType, true) + '</assignedToType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.dueDateOffset == null ? '' : '<dueDateOffset>' + object.dueDateOffset + '</dueDateOffset>'}
	${object.notifyAssignee == null ? '' : '<notifyAssignee>' + object.notifyAssignee + '</notifyAssignee>'}
	${object.offsetFromField == null ? '' : '<offsetFromField>' + object.offsetFromField + '</offsetFromField>'}
	${object.priority == null ? '' : '<priority>' + object.priority + '</priority>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.status == null ? '' : '<status>' + object.status + '</status>'}
	${object.subject == null ? '' : '<subject>' + object.subject + '</subject>'}
${rootTagEnd}`;
}