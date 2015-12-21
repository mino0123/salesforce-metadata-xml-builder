const FilterItem = require('./FilterItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<LookupFilter>';
  var rootTagEnd = '</LookupFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.filterItems == null ? '' : object.filterItems.map(p => '<filterItems>' + FilterItem(p, true) + '</filterItems>')}
	${object.infoMessage == null ? '' : '<infoMessage>' + object.infoMessage + '</infoMessage>'}
	${object.isOptional == null ? '' : '<isOptional>' + object.isOptional + '</isOptional>'}
${rootTagEnd}`;
}