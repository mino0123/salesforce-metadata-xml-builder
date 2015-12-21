
module.exports = (object, asChild) => {
  var rootTagStart = '<MetadataWithContent>';
  var rootTagEnd = '</MetadataWithContent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
${rootTagEnd}`;
}