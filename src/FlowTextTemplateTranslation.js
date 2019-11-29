
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowTextTemplateTranslation>';
  var rootTagEnd = '</FlowTextTemplateTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.text == null ? '' : '<text>' + object.text + '</text>'}
${rootTagEnd}`;
}