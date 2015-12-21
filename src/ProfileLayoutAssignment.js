
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileLayoutAssignment>';
  var rootTagEnd = '</ProfileLayoutAssignment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.layout == null ? '' : '<layout>' + object.layout + '</layout>'}
	${object.recordType == null ? '' : '<recordType>' + object.recordType + '</recordType>'}
${rootTagEnd}`;
}