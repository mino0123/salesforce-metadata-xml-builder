const KnowledgeWorkOrderField = require('./KnowledgeWorkOrderField');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeWorkOrderFieldsSettings>';
  var rootTagEnd = '</KnowledgeWorkOrderFieldsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + KnowledgeWorkOrderField(p, true) + '</field>').join('')}
${rootTagEnd}`;
}