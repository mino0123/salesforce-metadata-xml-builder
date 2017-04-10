const StrategyNode = require('./StrategyNode');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationStrategy>';
  var rootTagEnd = '</RecommendationStrategy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.recommendationStrategyName == null ? '' : '<recommendationStrategyName>' + object.recommendationStrategyName + '</recommendationStrategyName>'}
	${object.strategyNode == null ? '' : object.strategyNode.map(p => '<strategyNode>' + StrategyNode(p, true) + '</strategyNode>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}