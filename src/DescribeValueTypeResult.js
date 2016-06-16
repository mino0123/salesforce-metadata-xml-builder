const ValueTypeField = require('./ValueTypeField');

module.exports = (object, asChild) => {
  var rootTagStart = '<DescribeValueTypeResult>';
  var rootTagEnd = '</DescribeValueTypeResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiCreatable == null ? '' : '<apiCreatable>' + object.apiCreatable + '</apiCreatable>'}
	${object.apiDeletable == null ? '' : '<apiDeletable>' + object.apiDeletable + '</apiDeletable>'}
	${object.apiReadable == null ? '' : '<apiReadable>' + object.apiReadable + '</apiReadable>'}
	${object.apiUpdatable == null ? '' : '<apiUpdatable>' + object.apiUpdatable + '</apiUpdatable>'}
	${object.parentField == null ? '' : '<parentField>' + ValueTypeField(object.parentField, true) + '</parentField>'}
	${object.valueTypeFields == null ? '' : object.valueTypeFields.map(p => '<valueTypeFields>' + ValueTypeField(p, true) + '</valueTypeFields>').join('')}
${rootTagEnd}`;
}