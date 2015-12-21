const FilterItem = require('./FilterItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalEntryCriteria>';
  var rootTagEnd = '</ApprovalEntryCriteria>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + FilterItem(p, true) + '</criteriaItems>')}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
${rootTagEnd}`;
}