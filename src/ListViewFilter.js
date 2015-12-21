const FilterOperation = require('./FilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<ListViewFilter>';
  var rootTagEnd = '</ListViewFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.operation == null ? '' : '<operation>' + FilterOperation(object.operation, true) + '</operation>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}