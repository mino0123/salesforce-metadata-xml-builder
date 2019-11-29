const MapExpression = require('./MapExpression');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeMap>';
  var rootTagEnd = '</StrategyNodeMap>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.mapExpression == null ? '' : object.mapExpression.map(p => '<mapExpression>' + MapExpression(p, true) + '</mapExpression>').join('')}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}