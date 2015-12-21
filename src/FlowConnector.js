
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowConnector>';
  var rootTagEnd = '</FlowConnector>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.targetReference == null ? '' : '<targetReference>' + object.targetReference + '</targetReference>'}
${rootTagEnd}`;
}