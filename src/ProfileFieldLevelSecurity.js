
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileFieldLevelSecurity>';
  var rootTagEnd = '</ProfileFieldLevelSecurity>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.editable == null ? '' : '<editable>' + object.editable + '</editable>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.readable == null ? '' : '<readable>' + object.readable + '</readable>'}
${rootTagEnd}`;
}