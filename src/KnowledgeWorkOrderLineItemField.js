
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeWorkOrderLineItemField>';
  var rootTagEnd = '</KnowledgeWorkOrderLineItemField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}