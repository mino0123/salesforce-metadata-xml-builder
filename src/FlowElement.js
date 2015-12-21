
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowElement>';
  var rootTagEnd = '</FlowElement>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}