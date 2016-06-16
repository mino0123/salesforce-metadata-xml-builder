const KnowledgeCaseFieldsSettings = require('./KnowledgeCaseFieldsSettings');

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
${rootTagEnd}`;
}