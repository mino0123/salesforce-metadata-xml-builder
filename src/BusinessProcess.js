const PicklistValue = require('./PicklistValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<BusinessProcess>';
  var rootTagEnd = '</BusinessProcess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + PicklistValue(p, true) + '</values>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}