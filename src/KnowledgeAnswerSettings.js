
module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeAnswerSettings>';
  var rootTagEnd = '</KnowledgeAnswerSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignTo == null ? '' : '<assignTo>' + object.assignTo + '</assignTo>'}
	${object.defaultArticleType == null ? '' : '<defaultArticleType>' + object.defaultArticleType + '</defaultArticleType>'}
	${object.enableArticleCreation == null ? '' : '<enableArticleCreation>' + object.enableArticleCreation + '</enableArticleCreation>'}
${rootTagEnd}`;
}