
module.exports = (object, asChild) => {
  var rootTagStart = '<CommandActionParam>';
  var rootTagEnd = '</CommandActionParam>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultValue == null ? '' : '<defaultValue>' + object.defaultValue + '</defaultValue>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.required == null ? '' : '<required>' + object.required + '</required>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}