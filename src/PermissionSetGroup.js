
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetGroup>';
  var rootTagEnd = '</PermissionSetGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isCalculatingChanges == null ? '' : '<isCalculatingChanges>' + object.isCalculatingChanges + '</isCalculatingChanges>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.permissionSets == null ? '' : object.permissionSets.map(p => '<permissionSets>' + p + '</permissionSets>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}