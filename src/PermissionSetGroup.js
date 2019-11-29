
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetGroup>';
  var rootTagEnd = '</PermissionSetGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mutingPermissionSets == null ? '' : object.mutingPermissionSets.map(p => '<mutingPermissionSets>' + p + '</mutingPermissionSets>').join('')}
	${object.permissionSets == null ? '' : object.permissionSets.map(p => '<permissionSets>' + p + '</permissionSets>').join('')}
	${object.status == null ? '' : '<status>' + object.status + '</status>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}