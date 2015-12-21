
module.exports = (object, asChild) => {
  var rootTagStart = '<PackageVersion>';
  var rootTagEnd = '</PackageVersion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.majorNumber == null ? '' : '<majorNumber>' + object.majorNumber + '</majorNumber>'}
	${object.minorNumber == null ? '' : '<minorNumber>' + object.minorNumber + '</minorNumber>'}
	${object.namespace == null ? '' : '<namespace>' + object.namespace + '</namespace>'}
${rootTagEnd}`;
}