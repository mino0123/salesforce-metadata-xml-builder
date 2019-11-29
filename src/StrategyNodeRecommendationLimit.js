const StrategyReactionType = require('./StrategyReactionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeRecommendationLimit>';
  var rootTagEnd = '</StrategyNodeRecommendationLimit>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.filterMode == null ? '' : object.filterMode.map(p => '<filterMode>' + StrategyReactionType(p, true) + '</filterMode>').join('')}
	${object.lookbackDuration == null ? '' : '<lookbackDuration>' + object.lookbackDuration + '</lookbackDuration>'}
	${object.maxRecommendationCount == null ? '' : '<maxRecommendationCount>' + object.maxRecommendationCount + '</maxRecommendationCount>'}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}