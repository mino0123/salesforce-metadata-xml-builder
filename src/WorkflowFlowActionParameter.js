
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowFlowActionParameter>';
  var rootTagEnd = '</WorkflowFlowActionParameter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}