
module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetRecordTypeVisibility>';
  var rootTagEnd = '</PermissionSetRecordTypeVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.recordType == null ? '' : '<recordType>' + object.recordType + '</recordType>'}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}