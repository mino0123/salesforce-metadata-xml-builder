const FilterOperation = require('./FilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<FilterItem>';
  var rootTagEnd = '</FilterItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.operation == null ? '' : '<operation>' + FilterOperation(object.operation, true) + '</operation>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
	${object.valueField == null ? '' : '<valueField>' + object.valueField + '</valueField>'}
${rootTagEnd}`;
}