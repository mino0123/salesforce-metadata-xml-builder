
module.exports = (object, asChild) => {
  var rootTagStart = '<TimeSheetTemplateAssignment>';
  var rootTagEnd = '</TimeSheetTemplateAssignment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignedTo == null ? '' : '<assignedTo>' + object.assignedTo + '</assignedTo>'}
${rootTagEnd}`;
}