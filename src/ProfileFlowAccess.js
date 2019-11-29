
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileFlowAccess>';
  var rootTagEnd = '</ProfileFlowAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.flow == null ? '' : '<flow>' + object.flow + '</flow>'}
${rootTagEnd}`;
}