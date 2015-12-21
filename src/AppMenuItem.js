
module.exports = (object, asChild) => {
  var rootTagStart = '<AppMenuItem>';
  var rootTagEnd = '</AppMenuItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}