
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetExternalDataSourceAccess>';
  var rootTagEnd = '</PermissionSetExternalDataSourceAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.externalDataSource == null ? '' : '<externalDataSource>' + object.externalDataSource + '</externalDataSource>'}
${rootTagEnd}`;
}