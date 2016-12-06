
module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionSendEmailOptions>';
  var rootTagEnd = '</QuickActionSendEmailOptions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultEmailTemplateName == null ? '' : '<defaultEmailTemplateName>' + object.defaultEmailTemplateName + '</defaultEmailTemplateName>'}
	${object.ignoreDefaultEmailTemplateSubject == null ? '' : '<ignoreDefaultEmailTemplateSubject>' + object.ignoreDefaultEmailTemplateSubject + '</ignoreDefaultEmailTemplateSubject>'}
${rootTagEnd}`;
}