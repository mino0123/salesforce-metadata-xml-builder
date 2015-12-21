
module.exports = (object, asChild) => {
  var rootTagStart = '<LicensedCustomPermissions>';
  var rootTagEnd = '</LicensedCustomPermissions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customPermission == null ? '' : '<customPermission>' + object.customPermission + '</customPermission>'}
	${object.licenseDefinition == null ? '' : '<licenseDefinition>' + object.licenseDefinition + '</licenseDefinition>'}
${rootTagEnd}`;
}