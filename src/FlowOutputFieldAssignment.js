
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowOutputFieldAssignment>';
  var rootTagEnd = '</FlowOutputFieldAssignment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignToReference == null ? '' : '<assignToReference>' + object.assignToReference + '</assignToReference>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
${rootTagEnd}`;
}