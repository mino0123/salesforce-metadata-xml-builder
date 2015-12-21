
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkspaceMapping>';
  var rootTagEnd = '</WorkspaceMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.tab == null ? '' : '<tab>' + object.tab + '</tab>'}
${rootTagEnd}`;
}