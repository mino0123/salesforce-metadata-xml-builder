
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeCaseField>';
  var rootTagEnd = '</KnowledgeCaseField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}