const MatchingRuleItem = require('./MatchingRuleItem');
const MatchingRuleStatus = require('./MatchingRuleStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<MatchingRule>';
  var rootTagEnd = '</MatchingRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.matchingRuleItems == null ? '' : object.matchingRuleItems.map(p => '<matchingRuleItems>' + MatchingRuleItem(p, true) + '</matchingRuleItems>')}
	${object.ruleStatus == null ? '' : '<ruleStatus>' + MatchingRuleStatus(object.ruleStatus, true) + '</ruleStatus>'}
${rootTagEnd}`;
}