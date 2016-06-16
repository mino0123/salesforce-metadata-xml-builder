const ReputationLevels = require('./ReputationLevels');

module.exports = (object, asChild) => {
  var rootTagStart = '<Community>';
  var rootTagEnd = '</Community>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.chatterAnswersFacebookSsoUrl == null ? '' : '<chatterAnswersFacebookSsoUrl>' + object.chatterAnswersFacebookSsoUrl + '</chatterAnswersFacebookSsoUrl>'}
	${object.communityFeedPage == null ? '' : '<communityFeedPage>' + object.communityFeedPage + '</communityFeedPage>'}
	${object.dataCategoryName == null ? '' : '<dataCategoryName>' + object.dataCategoryName + '</dataCategoryName>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.emailFooterDocument == null ? '' : '<emailFooterDocument>' + object.emailFooterDocument + '</emailFooterDocument>'}
	${object.emailHeaderDocument == null ? '' : '<emailHeaderDocument>' + object.emailHeaderDocument + '</emailHeaderDocument>'}
	${object.emailNotificationUrl == null ? '' : '<emailNotificationUrl>' + object.emailNotificationUrl + '</emailNotificationUrl>'}
	${object.enableChatterAnswers == null ? '' : '<enableChatterAnswers>' + object.enableChatterAnswers + '</enableChatterAnswers>'}
	${object.enablePrivateQuestions == null ? '' : '<enablePrivateQuestions>' + object.enablePrivateQuestions + '</enablePrivateQuestions>'}
	${object.expertsGroup == null ? '' : '<expertsGroup>' + object.expertsGroup + '</expertsGroup>'}
	${object.portal == null ? '' : '<portal>' + object.portal + '</portal>'}
	${object.reputationLevels == null ? '' : '<reputationLevels>' + ReputationLevels(object.reputationLevels, true) + '</reputationLevels>'}
	${object.showInPortal == null ? '' : '<showInPortal>' + object.showInPortal + '</showInPortal>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}