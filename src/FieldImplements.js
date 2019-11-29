
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldImplements>';
  var rootTagEnd = '</FieldImplements>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.interfaceField == null ? '' : '<interfaceField>' + object.interfaceField + '</interfaceField>'}
${rootTagEnd}`;
}