const RecommendationLoadCondition = require('./RecommendationLoadCondition');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeRecommendationLoad>';
  var rootTagEnd = '</StrategyNodeRecommendationLoad>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.condition == null ? '' : object.condition.map(p => '<condition>' + RecommendationLoadCondition(p, true) + '</condition>').join('')}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}