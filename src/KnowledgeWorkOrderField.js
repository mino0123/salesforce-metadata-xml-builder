
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeWorkOrderField>';
  var rootTagEnd = '</KnowledgeWorkOrderField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}