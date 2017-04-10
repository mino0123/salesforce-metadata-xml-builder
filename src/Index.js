const IndexField = require('./IndexField');

module.exports = (object, asChild) => {
  var rootTagStart = '<Index>';
  var rootTagEnd = '</Index>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + IndexField(p, true) + '</fields>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}