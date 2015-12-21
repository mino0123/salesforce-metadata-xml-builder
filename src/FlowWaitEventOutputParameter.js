
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowWaitEventOutputParameter>';
  var rootTagEnd = '</FlowWaitEventOutputParameter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignToReference == null ? '' : '<assignToReference>' + object.assignToReference + '</assignToReference>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}