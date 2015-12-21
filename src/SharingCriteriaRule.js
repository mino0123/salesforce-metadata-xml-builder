const FilterItem = require('./FilterItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingCriteriaRule>';
  var rootTagEnd = '</SharingCriteriaRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + FilterItem(p, true) + '</criteriaItems>')}
${rootTagEnd}`;
}