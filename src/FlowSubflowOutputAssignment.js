
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowSubflowOutputAssignment>';
  var rootTagEnd = '</FlowSubflowOutputAssignment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignToReference == null ? '' : '<assignToReference>' + object.assignToReference + '</assignToReference>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}