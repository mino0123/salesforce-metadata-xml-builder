const KnowledgeCaseField = require('./KnowledgeCaseField');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeCaseFieldsSettings>';
  var rootTagEnd = '</KnowledgeCaseFieldsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : object.field.map(p => '<field>' + KnowledgeCaseField(p, true) + '</field>').join('')}
${rootTagEnd}`;
}