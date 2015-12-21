
module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppIpRange>';
  var rootTagEnd = '</ConnectedAppIpRange>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.end == null ? '' : '<end>' + object.end + '</end>'}
	${object.start == null ? '' : '<start>' + object.start + '</start>'}
${rootTagEnd}`;
}