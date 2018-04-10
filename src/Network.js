const CommunityRoles = require('./CommunityRoles');
const NavigationLinkSet = require('./NavigationLinkSet');
const NetworkMemberGroup = require('./NetworkMemberGroup');
const NetworkPageOverride = require('./NetworkPageOverride');
const RecommendationAudience = require('./RecommendationAudience');
const RecommendationDefinition = require('./RecommendationDefinition');
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
	${object.allowInternalUserLogin == null ? '' : '<allowInternalUserLogin>' + object.allowInternalUserLogin + '</allowInternalUserLogin>'}
	${object.allowMembersToFlag == null ? '' : '<allowMembersToFlag>' + object.allowMembersToFlag + '</allowMembersToFlag>'}
	${object.allowedExtensions == null ? '' : '<allowedExtensions>' + object.allowedExtensions + '</allowedExtensions>'}
	${object.caseCommentEmailTemplate == null ? '' : '<caseCommentEmailTemplate>' + object.caseCommentEmailTemplate + '</caseCommentEmailTemplate>'}
	${object.changePasswordTemplate == null ? '' : '<changePasswordTemplate>' + object.changePasswordTemplate + '</changePasswordTemplate>'}
	${object.communityRoles == null ? '' : '<communityRoles>' + CommunityRoles(object.communityRoles, true) + '</communityRoles>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.disableReputationRecordConversations == null ? '' : '<disableReputationRecordConversations>' + object.disableReputationRecordConversations + '</disableReputationRecordConversations>'}
	${object.emailFooterLogo == null ? '' : '<emailFooterLogo>' + object.emailFooterLogo + '</emailFooterLogo>'}
	${object.emailFooterText == null ? '' : '<emailFooterText>' + object.emailFooterText + '</emailFooterText>'}
	${object.emailSenderAddress == null ? '' : '<emailSenderAddress>' + object.emailSenderAddress + '</emailSenderAddress>'}
	${object.emailSenderName == null ? '' : '<emailSenderName>' + object.emailSenderName + '</emailSenderName>'}
	${object.enableCustomVFErrorPageOverrides == null ? '' : '<enableCustomVFErrorPageOverrides>' + object.enableCustomVFErrorPageOverrides + '</enableCustomVFErrorPageOverrides>'}
	${object.enableDirectMessages == null ? '' : '<enableDirectMessages>' + object.enableDirectMessages + '</enableDirectMessages>'}
	${object.enableGuestChatter == null ? '' : '<enableGuestChatter>' + object.enableGuestChatter + '</enableGuestChatter>'}
	${object.enableGuestFileAccess == null ? '' : '<enableGuestFileAccess>' + object.enableGuestFileAccess + '</enableGuestFileAccess>'}
	${object.enableInvitation == null ? '' : '<enableInvitation>' + object.enableInvitation + '</enableInvitation>'}
	${object.enableKnowledgeable == null ? '' : '<enableKnowledgeable>' + object.enableKnowledgeable + '</enableKnowledgeable>'}
	${object.enableNicknameDisplay == null ? '' : '<enableNicknameDisplay>' + object.enableNicknameDisplay + '</enableNicknameDisplay>'}
	${object.enablePrivateMessages == null ? '' : '<enablePrivateMessages>' + object.enablePrivateMessages + '</enablePrivateMessages>'}
	${object.enableReputation == null ? '' : '<enableReputation>' + object.enableReputation + '</enableReputation>'}
	${object.enableShowAllNetworkSettings == null ? '' : '<enableShowAllNetworkSettings>' + object.enableShowAllNetworkSettings + '</enableShowAllNetworkSettings>'}
	${object.enableSiteAsContainer == null ? '' : '<enableSiteAsContainer>' + object.enableSiteAsContainer + '</enableSiteAsContainer>'}
	${object.enableTalkingAboutStats == null ? '' : '<enableTalkingAboutStats>' + object.enableTalkingAboutStats + '</enableTalkingAboutStats>'}
	${object.enableTopicAssignmentRules == null ? '' : '<enableTopicAssignmentRules>' + object.enableTopicAssignmentRules + '</enableTopicAssignmentRules>'}
	${object.enableTopicSuggestions == null ? '' : '<enableTopicSuggestions>' + object.enableTopicSuggestions + '</enableTopicSuggestions>'}
	${object.enableUpDownVote == null ? '' : '<enableUpDownVote>' + object.enableUpDownVote + '</enableUpDownVote>'}
	${object.feedChannel == null ? '' : '<feedChannel>' + object.feedChannel + '</feedChannel>'}
	${object.forgotPasswordTemplate == null ? '' : '<forgotPasswordTemplate>' + object.forgotPasswordTemplate + '</forgotPasswordTemplate>'}
	${object.gatherCustomerSentimentData == null ? '' : '<gatherCustomerSentimentData>' + object.gatherCustomerSentimentData + '</gatherCustomerSentimentData>'}
	${object.logoutUrl == null ? '' : '<logoutUrl>' + object.logoutUrl + '</logoutUrl>'}
	${object.maxFileSizeKb == null ? '' : '<maxFileSizeKb>' + object.maxFileSizeKb + '</maxFileSizeKb>'}
	${object.navigationLinkSet == null ? '' : '<navigationLinkSet>' + NavigationLinkSet(object.navigationLinkSet, true) + '</navigationLinkSet>'}
	${object.networkMemberGroups == null ? '' : '<networkMemberGroups>' + NetworkMemberGroup(object.networkMemberGroups, true) + '</networkMemberGroups>'}
	${object.networkPageOverrides == null ? '' : '<networkPageOverrides>' + NetworkPageOverride(object.networkPageOverrides, true) + '</networkPageOverrides>'}
	${object.newSenderAddress == null ? '' : '<newSenderAddress>' + object.newSenderAddress + '</newSenderAddress>'}
	${object.picassoSite == null ? '' : '<picassoSite>' + object.picassoSite + '</picassoSite>'}
	${object.recommendationAudience == null ? '' : '<recommendationAudience>' + RecommendationAudience(object.recommendationAudience, true) + '</recommendationAudience>'}
	${object.recommendationDefinition == null ? '' : '<recommendationDefinition>' + RecommendationDefinition(object.recommendationDefinition, true) + '</recommendationDefinition>'}
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