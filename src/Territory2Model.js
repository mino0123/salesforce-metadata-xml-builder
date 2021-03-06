const FieldValue = require('./FieldValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2Model>';
  var rootTagEnd = '</Territory2Model>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customFields == null ? '' : object.customFields.map(p => '<customFields>' + FieldValue(p, true) + '</customFields>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}