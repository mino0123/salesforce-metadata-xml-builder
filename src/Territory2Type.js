
module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2Type>';
  var rootTagEnd = '</Territory2Type>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.priority == null ? '' : '<priority>' + object.priority + '</priority>'}
${rootTagEnd}`;
}