
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileRecordTypeVisibility>';
  var rootTagEnd = '</ProfileRecordTypeVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.personAccountDefault == null ? '' : '<personAccountDefault>' + object.personAccountDefault + '</personAccountDefault>'}
	${object.recordType == null ? '' : '<recordType>' + object.recordType + '</recordType>'}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}