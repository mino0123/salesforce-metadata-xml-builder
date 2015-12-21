
module.exports = (object, asChild) => {
  var rootTagStart = '<Attachment>';
  var rootTagEnd = '</Attachment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}