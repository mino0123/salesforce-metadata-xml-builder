
module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeBase>';
  var rootTagEnd = '</StrategyNodeBase>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}