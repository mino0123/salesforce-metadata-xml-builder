const ValueTypeField = require('./ValueTypeField');

module.exports = (object, asChild) => {
  var rootTagStart = '<DescribeValueTypeResult>';
  var rootTagEnd = '</DescribeValueTypeResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.valueTypeFields == null ? '' : object.valueTypeFields.map(p => '<valueTypeFields>' + ValueTypeField(p, true) + '</valueTypeFields>')}
${rootTagEnd}`;
}