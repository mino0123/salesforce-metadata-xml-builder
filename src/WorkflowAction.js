
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowAction>';
  var rootTagEnd = '</WorkflowAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}