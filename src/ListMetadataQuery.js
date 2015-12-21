
module.exports = (object, asChild) => {
  var rootTagStart = '<ListMetadataQuery>';
  var rootTagEnd = '</ListMetadataQuery>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.folder == null ? '' : '<folder>' + object.folder + '</folder>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}