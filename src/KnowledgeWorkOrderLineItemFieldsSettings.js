const KnowledgeWorkOrderLineItemField = require('./KnowledgeWorkOrderLineItemField');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeWorkOrderLineItemFieldsSettings>';
  var rootTagEnd = '</KnowledgeWorkOrderLineItemFieldsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + KnowledgeWorkOrderLineItemField(p, true) + '</field>').join('')}
${rootTagEnd}`;
}