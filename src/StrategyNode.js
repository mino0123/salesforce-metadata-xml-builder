
module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNode>';
  var rootTagEnd = '</StrategyNode>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.definition == null ? '' : '<definition>' + object.definition + '</definition>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.parentNode == null ? '' : '<parentNode>' + object.parentNode + '</parentNode>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}