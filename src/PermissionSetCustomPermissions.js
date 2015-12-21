
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetCustomPermissions>';
  var rootTagEnd = '</PermissionSetCustomPermissions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}