
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldSetItem>';
  var rootTagEnd = '</FieldSetItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.isFieldManaged == null ? '' : '<isFieldManaged>' + object.isFieldManaged + '</isFieldManaged>'}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
${rootTagEnd}`;
}