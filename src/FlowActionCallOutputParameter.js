
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowActionCallOutputParameter>';
  var rootTagEnd = '</FlowActionCallOutputParameter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignToReference == null ? '' : '<assignToReference>' + object.assignToReference + '</assignToReference>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}