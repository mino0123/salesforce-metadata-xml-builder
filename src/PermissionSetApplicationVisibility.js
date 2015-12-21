
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetApplicationVisibility>';
  var rootTagEnd = '</PermissionSetApplicationVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}