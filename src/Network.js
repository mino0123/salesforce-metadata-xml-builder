const Branding = require('./Branding');
const NetworkMemberGroup = require('./NetworkMemberGroup');
const ReputationLevelDefinitions = require('./ReputationLevelDefinitions');
const ReputationPointsRules = require('./ReputationPointsRules');
const NetworkStatus = require('./NetworkStatus');
const NetworkTabSet = require('./NetworkTabSet');

module.exports = (object, asChild) => {
  var rootTagStart = '<Network>';
  var rootTagEnd = '</Network>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowMembersToFlag == null ? '' : '<allowMembersToFlag>' + object.allowMembersToFlag + '</allowMembersToFlag>'}
	${object.branding == null ? '' : '<branding>' + Branding(object.branding, true) + '</branding>'}
	${object.caseCommentEmailTemplate == null ? '' : '<caseCommentEmailTemplate>' + object.caseCommentEmailTemplate + '</caseCommentEmailTemplate>'}
	${object.changePasswordTemplate == null ? '' : '<changePasswordTemplate>' + object.changePasswordTemplate + '</changePasswordTemplate>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.emailSenderAddress == null ? '' : '<emailSenderAddress>' + object.emailSenderAddress + '</emailSenderAddress>'}
	${object.emailSenderName == null ? '' : '<emailSenderName>' + object.emailSenderName + '</emailSenderName>'}
	${object.enableGuestChatter == null ? '' : '<enableGuestChatter>' + object.enableGuestChatter + '</enableGuestChatter>'}
	${object.enableInvitation == null ? '' : '<enableInvitation>' + object.enableInvitation + '</enableInvitation>'}
	${object.enableKnowledgeable == null ? '' : '<enableKnowledgeable>' + object.enableKnowledgeable + '</enableKnowledgeable>'}
	${object.enableNicknameDisplay == null ? '' : '<enableNicknameDisplay>' + object.enableNicknameDisplay + '</enableNicknameDisplay>'}
	${object.enablePrivateMessages == null ? '' : '<enablePrivateMessages>' + object.enablePrivateMessages + '</enablePrivateMessages>'}
	${object.enableReputation == null ? '' : '<enableReputation>' + object.enableReputation + '</enableReputation>'}
	${object.feedChannel == null ? '' : '<feedChannel>' + object.feedChannel + '</feedChannel>'}
	${object.forgotPasswordTemplate == null ? '' : '<forgotPasswordTemplate>' + object.forgotPasswordTemplate + '</forgotPasswordTemplate>'}
	${object.logoutUrl == null ? '' : '<logoutUrl>' + object.logoutUrl + '</logoutUrl>'}
	${object.networkMemberGroups == null ? '' : '<networkMemberGroups>' + NetworkMemberGroup(object.networkMemberGroups, true) + '</networkMemberGroups>'}
	${object.newSenderAddress == null ? '' : '<newSenderAddress>' + object.newSenderAddress + '</newSenderAddress>'}
	${object.picassoSite == null ? '' : '<picassoSite>' + object.picassoSite + '</picassoSite>'}
	${object.reputationLevels == null ? '' : '<reputationLevels>' + ReputationLevelDefinitions(object.reputationLevels, true) + '</reputationLevels>'}
	${object.reputationPointsRules == null ? '' : '<reputationPointsRules>' + ReputationPointsRules(object.reputationPointsRules, true) + '</reputationPointsRules>'}
	${object.selfRegProfile == null ? '' : '<selfRegProfile>' + object.selfRegProfile + '</selfRegProfile>'}
	${object.selfRegistration == null ? '' : '<selfRegistration>' + object.selfRegistration + '</selfRegistration>'}
	${object.sendWelcomeEmail == null ? '' : '<sendWelcomeEmail>' + object.sendWelcomeEmail + '</sendWelcomeEmail>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.status == null ? '' : '<status>' + NetworkStatus(object.status, true) + '</status>'}
	${object.tabs == null ? '' : '<tabs>' + NetworkTabSet(object.tabs, true) + '</tabs>'}
	${object.urlPathPrefix == null ? '' : '<urlPathPrefix>' + object.urlPathPrefix + '</urlPathPrefix>'}
	${object.welcomeTemplate == null ? '' : '<welcomeTemplate>' + object.welcomeTemplate + '</welcomeTemplate>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}