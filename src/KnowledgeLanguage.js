const KnowledgeLanguageLookupValueType = require('./KnowledgeLanguageLookupValueType');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeLanguage>';
  var rootTagEnd = '</KnowledgeLanguage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.defaultAssignee == null ? '' : '<defaultAssignee>' + object.defaultAssignee + '</defaultAssignee>'}
	${object.defaultAssigneeType == null ? '' : '<defaultAssigneeType>' + KnowledgeLanguageLookupValueType(object.defaultAssigneeType, true) + '</defaultAssigneeType>'}
	${object.defaultReviewer == null ? '' : '<defaultReviewer>' + object.defaultReviewer + '</defaultReviewer>'}
	${object.defaultReviewerType == null ? '' : '<defaultReviewerType>' + KnowledgeLanguageLookupValueType(object.defaultReviewerType, true) + '</defaultReviewerType>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}