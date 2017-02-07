const KnowledgeCaseFieldsSettings = require('./KnowledgeCaseFieldsSettings');
const KnowledgeWorkOrderFieldsSettings = require('./KnowledgeWorkOrderFieldsSettings');
const KnowledgeWorkOrderLineItemFieldsSettings = require('./KnowledgeWorkOrderLineItemFieldsSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeSuggestedArticlesSettings>';
  var rootTagEnd = '</KnowledgeSuggestedArticlesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseFields == null ? '' : '<caseFields>' + KnowledgeCaseFieldsSettings(object.caseFields, true) + '</caseFields>'}
	${object.useSuggestedArticlesForCase == null ? '' : '<useSuggestedArticlesForCase>' + object.useSuggestedArticlesForCase + '</useSuggestedArticlesForCase>'}
	${object.workOrderFields == null ? '' : '<workOrderFields>' + KnowledgeWorkOrderFieldsSettings(object.workOrderFields, true) + '</workOrderFields>'}
	${object.workOrderLineItemFields == null ? '' : '<workOrderLineItemFields>' + KnowledgeWorkOrderLineItemFieldsSettings(object.workOrderLineItemFields, true) + '</workOrderLineItemFields>'}
${rootTagEnd}`;
}