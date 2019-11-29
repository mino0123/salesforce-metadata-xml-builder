
module.exports = (object, asChild) => {
  var rootTagStart = '<IfExpression>';
  var rootTagEnd = '</IfExpression>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.childName == null ? '' : '<childName>' + object.childName + '</childName>'}
	${object.expression == null ? '' : '<expression>' + object.expression + '</expression>'}
${rootTagEnd}`;
}