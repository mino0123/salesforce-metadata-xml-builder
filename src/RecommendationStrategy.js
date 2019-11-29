const StrategyAction = require('./StrategyAction');
const StrategyNodeFilter = require('./StrategyNodeFilter');
const StrategyNodeIf = require('./StrategyNodeIf');
const StrategyNodeInvocableAction = require('./StrategyNodeInvocableAction');
const StrategyNodeMap = require('./StrategyNodeMap');
const StrategyNodeExclusive = require('./StrategyNodeExclusive');
const StrategyNodeRecommendationLimit = require('./StrategyNodeRecommendationLimit');
const StrategyNodeRecommendationLoad = require('./StrategyNodeRecommendationLoad');
const StrategyNodeSort = require('./StrategyNodeSort');
const StrategyNodeUnion = require('./StrategyNodeUnion');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationStrategy>';
  var rootTagEnd = '</RecommendationStrategy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionContext == null ? '' : object.actionContext.map(p => '<actionContext>' + StrategyAction(p, true) + '</actionContext>').join('')}
	${object.contextRecordType == null ? '' : '<contextRecordType>' + object.contextRecordType + '</contextRecordType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.filter == null ? '' : object.filter.map(p => '<filter>' + StrategyNodeFilter(p, true) + '</filter>').join('')}
	${object.if == null ? '' : object.if.map(p => '<if>' + StrategyNodeIf(p, true) + '</if>').join('')}
	${object.invocableAction == null ? '' : object.invocableAction.map(p => '<invocableAction>' + StrategyNodeInvocableAction(p, true) + '</invocableAction>').join('')}
	${object.isTemplate == null ? '' : '<isTemplate>' + object.isTemplate + '</isTemplate>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.map == null ? '' : object.map.map(p => '<map>' + StrategyNodeMap(p, true) + '</map>').join('')}
	${object.mutuallyExclusive == null ? '' : object.mutuallyExclusive.map(p => '<mutuallyExclusive>' + StrategyNodeExclusive(p, true) + '</mutuallyExclusive>').join('')}
	${object.onBehalfOfExpression == null ? '' : '<onBehalfOfExpression>' + object.onBehalfOfExpression + '</onBehalfOfExpression>'}
	${object.recommendationLimit == null ? '' : object.recommendationLimit.map(p => '<recommendationLimit>' + StrategyNodeRecommendationLimit(p, true) + '</recommendationLimit>').join('')}
	${object.recommendationLoad == null ? '' : object.recommendationLoad.map(p => '<recommendationLoad>' + StrategyNodeRecommendationLoad(p, true) + '</recommendationLoad>').join('')}
	${object.sort == null ? '' : object.sort.map(p => '<sort>' + StrategyNodeSort(p, true) + '</sort>').join('')}
	${object.union == null ? '' : object.union.map(p => '<union>' + StrategyNodeUnion(p, true) + '</union>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}