const IfExpression = require('./IfExpression');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeIf>';
  var rootTagEnd = '</StrategyNodeIf>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.childNodeExpression == null ? '' : object.childNodeExpression.map(p => '<childNodeExpression>' + IfExpression(p, true) + '</childNodeExpression>').join('')}
	${object.onlyFirstMatch == null ? '' : '<onlyFirstMatch>' + object.onlyFirstMatch + '</onlyFirstMatch>'}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}