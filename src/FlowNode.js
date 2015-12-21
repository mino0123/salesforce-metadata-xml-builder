
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowNode>';
  var rootTagEnd = '</FlowNode>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
${rootTagEnd}`;
}