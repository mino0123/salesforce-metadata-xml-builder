
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowTextTemplate>';
  var rootTagEnd = '</FlowTextTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.text == null ? '' : '<text>' + object.text + '</text>'}
${rootTagEnd}`;
}