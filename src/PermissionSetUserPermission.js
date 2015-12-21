
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetUserPermission>';
  var rootTagEnd = '</PermissionSetUserPermission>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}