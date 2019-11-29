
module.exports = (object, asChild) => {
  var rootTagStart = '<MapExpression>';
  var rootTagEnd = '</MapExpression>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.expression == null ? '' : '<expression>' + object.expression + '</expression>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}