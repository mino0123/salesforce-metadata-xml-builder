const ObjectMapping = require('./ObjectMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<DuplicateRuleMatchRule>';
  var rootTagEnd = '</DuplicateRuleMatchRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.matchRuleSObjectType == null ? '' : '<matchRuleSObjectType>' + object.matchRuleSObjectType + '</matchRuleSObjectType>'}
	${object.matchingRule == null ? '' : '<matchingRule>' + object.matchingRule + '</matchingRule>'}
	${object.objectMapping == null ? '' : '<objectMapping>' + ObjectMapping(object.objectMapping, true) + '</objectMapping>'}
${rootTagEnd}`;
}