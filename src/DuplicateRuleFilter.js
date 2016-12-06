const DuplicateRuleFilterItem = require('./DuplicateRuleFilterItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<DuplicateRuleFilter>';
  var rootTagEnd = '</DuplicateRuleFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.duplicateRuleFilterItems == null ? '' : object.duplicateRuleFilterItems.map(p => '<duplicateRuleFilterItems>' + DuplicateRuleFilterItem(p, true) + '</duplicateRuleFilterItems>').join('')}
${rootTagEnd}`;
}