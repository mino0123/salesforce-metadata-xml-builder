const FieldSetItem = require('./FieldSetItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<FieldSet>';
  var rootTagEnd = '</FieldSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.availableFields == null ? '' : object.availableFields.map(p => '<availableFields>' + FieldSetItem(p, true) + '</availableFields>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.displayedFields == null ? '' : object.displayedFields.map(p => '<displayedFields>' + FieldSetItem(p, true) + '</displayedFields>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}