
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetFieldPermissions>';
  var rootTagEnd = '</PermissionSetFieldPermissions>';
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