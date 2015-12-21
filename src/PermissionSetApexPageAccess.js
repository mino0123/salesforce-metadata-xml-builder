
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetApexPageAccess>';
  var rootTagEnd = '</PermissionSetApexPageAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexPage == null ? '' : '<apexPage>' + object.apexPage + '</apexPage>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
${rootTagEnd}`;
}