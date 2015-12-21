
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileExternalDataSourceAccess>';
  var rootTagEnd = '</ProfileExternalDataSourceAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.externalDataSource == null ? '' : '<externalDataSource>' + object.externalDataSource + '</externalDataSource>'}
${rootTagEnd}`;
}