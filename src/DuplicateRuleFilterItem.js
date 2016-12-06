const FilterOperation = require('./FilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<DuplicateRuleFilterItem>';
  var rootTagEnd = '</DuplicateRuleFilterItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
	${object.table == null ? '' : '<table>' + object.table + '</table>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.operation == null ? '' : '<operation>' + FilterOperation(object.operation, true) + '</operation>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
	${object.valueField == null ? '' : '<valueField>' + object.valueField + '</valueField>'}
${rootTagEnd}`;
}