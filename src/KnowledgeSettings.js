const KnowledgeAnswerSettings = require('./KnowledgeAnswerSettings');
const KnowledgeCaseSettings = require('./KnowledgeCaseSettings');
const KnowledgeLanguageSettings = require('./KnowledgeLanguageSettings');
const KnowledgeSuggestedArticlesSettings = require('./KnowledgeSuggestedArticlesSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeSettings>';
  var rootTagEnd = '</KnowledgeSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.answers == null ? '' : '<answers>' + KnowledgeAnswerSettings(object.answers, true) + '</answers>'}
	${object.cases == null ? '' : '<cases>' + KnowledgeCaseSettings(object.cases, true) + '</cases>'}
	${object.defaultLanguage == null ? '' : '<defaultLanguage>' + object.defaultLanguage + '</defaultLanguage>'}
	${object.enableChatterQuestionKBDeflection == null ? '' : '<enableChatterQuestionKBDeflection>' + object.enableChatterQuestionKBDeflection + '</enableChatterQuestionKBDeflection>'}
	${object.enableCreateEditOnArticlesTab == null ? '' : '<enableCreateEditOnArticlesTab>' + object.enableCreateEditOnArticlesTab + '</enableCreateEditOnArticlesTab>'}
	${object.enableExternalMediaContent == null ? '' : '<enableExternalMediaContent>' + object.enableExternalMediaContent + '</enableExternalMediaContent>'}
	${object.enableKnowledge == null ? '' : '<enableKnowledge>' + object.enableKnowledge + '</enableKnowledge>'}
	${object.languages == null ? '' : '<languages>' + KnowledgeLanguageSettings(object.languages, true) + '</languages>'}
	${object.showArticleSummariesCustomerPortal == null ? '' : '<showArticleSummariesCustomerPortal>' + object.showArticleSummariesCustomerPortal + '</showArticleSummariesCustomerPortal>'}
	${object.showArticleSummariesInternalApp == null ? '' : '<showArticleSummariesInternalApp>' + object.showArticleSummariesInternalApp + '</showArticleSummariesInternalApp>'}
	${object.showArticleSummariesPartnerPortal == null ? '' : '<showArticleSummariesPartnerPortal>' + object.showArticleSummariesPartnerPortal + '</showArticleSummariesPartnerPortal>'}
	${object.showValidationStatusField == null ? '' : '<showValidationStatusField>' + object.showValidationStatusField + '</showValidationStatusField>'}
	${object.suggestedArticles == null ? '' : '<suggestedArticles>' + KnowledgeSuggestedArticlesSettings(object.suggestedArticles, true) + '</suggestedArticles>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}