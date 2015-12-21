const PagesToOpen = require('./PagesToOpen');

module.exports = (object, asChild) => {
  var rootTagStart = '<LiveAgentConfig>';
  var rootTagEnd = '</LiveAgentConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableLiveChat == null ? '' : '<enableLiveChat>' + object.enableLiveChat + '</enableLiveChat>'}
	${object.openNewAccountSubtab == null ? '' : '<openNewAccountSubtab>' + object.openNewAccountSubtab + '</openNewAccountSubtab>'}
	${object.openNewCaseSubtab == null ? '' : '<openNewCaseSubtab>' + object.openNewCaseSubtab + '</openNewCaseSubtab>'}
	${object.openNewContactSubtab == null ? '' : '<openNewContactSubtab>' + object.openNewContactSubtab + '</openNewContactSubtab>'}
	${object.openNewLeadSubtab == null ? '' : '<openNewLeadSubtab>' + object.openNewLeadSubtab + '</openNewLeadSubtab>'}
	${object.openNewVFPageSubtab == null ? '' : '<openNewVFPageSubtab>' + object.openNewVFPageSubtab + '</openNewVFPageSubtab>'}
	${object.pagesToOpen == null ? '' : '<pagesToOpen>' + PagesToOpen(object.pagesToOpen, true) + '</pagesToOpen>'}
	${object.showKnowledgeArticles == null ? '' : '<showKnowledgeArticles>' + object.showKnowledgeArticles + '</showKnowledgeArticles>'}
${rootTagEnd}`;
}