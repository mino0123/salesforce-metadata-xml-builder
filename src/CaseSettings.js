const FeedItemSettings = require('./FeedItemSettings');
const EmailToCaseSettings = require('./EmailToCaseSettings');
const WebToCaseSettings = require('./WebToCaseSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<CaseSettings>';
  var rootTagEnd = '</CaseSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseAssignNotificationTemplate == null ? '' : '<caseAssignNotificationTemplate>' + object.caseAssignNotificationTemplate + '</caseAssignNotificationTemplate>'}
	${object.caseAutoProcUser == null ? '' : '<caseAutoProcUser>' + object.caseAutoProcUser + '</caseAutoProcUser>'}
	${object.caseCloseNotificationTemplate == null ? '' : '<caseCloseNotificationTemplate>' + object.caseCloseNotificationTemplate + '</caseCloseNotificationTemplate>'}
	${object.caseCommentNotificationTemplate == null ? '' : '<caseCommentNotificationTemplate>' + object.caseCommentNotificationTemplate + '</caseCommentNotificationTemplate>'}
	${object.caseCreateNotificationTemplate == null ? '' : '<caseCreateNotificationTemplate>' + object.caseCreateNotificationTemplate + '</caseCreateNotificationTemplate>'}
	${object.caseFeedItemSettings == null ? '' : object.caseFeedItemSettings.map(p => '<caseFeedItemSettings>' + FeedItemSettings(p, true) + '</caseFeedItemSettings>').join('')}
	${object.caseFeedReadUnreadLtng == null ? '' : '<caseFeedReadUnreadLtng>' + object.caseFeedReadUnreadLtng + '</caseFeedReadUnreadLtng>'}
	${object.caseMergeInLightning == null ? '' : '<caseMergeInLightning>' + object.caseMergeInLightning + '</caseMergeInLightning>'}
	${object.closeCaseThroughStatusChange == null ? '' : '<closeCaseThroughStatusChange>' + object.closeCaseThroughStatusChange + '</closeCaseThroughStatusChange>'}
	${object.defaultCaseFeedLayoutOn == null ? '' : '<defaultCaseFeedLayoutOn>' + object.defaultCaseFeedLayoutOn + '</defaultCaseFeedLayoutOn>'}
	${object.defaultCaseOwner == null ? '' : '<defaultCaseOwner>' + object.defaultCaseOwner + '</defaultCaseOwner>'}
	${object.defaultCaseOwnerType == null ? '' : '<defaultCaseOwnerType>' + object.defaultCaseOwnerType + '</defaultCaseOwnerType>'}
	${object.defaultCaseUser == null ? '' : '<defaultCaseUser>' + object.defaultCaseUser + '</defaultCaseUser>'}
	${object.emailActionDefaultsHandlerClass == null ? '' : '<emailActionDefaultsHandlerClass>' + object.emailActionDefaultsHandlerClass + '</emailActionDefaultsHandlerClass>'}
	${object.emailToCase == null ? '' : '<emailToCase>' + EmailToCaseSettings(object.emailToCase, true) + '</emailToCase>'}
	${object.enableCaseFeed == null ? '' : '<enableCaseFeed>' + object.enableCaseFeed + '</enableCaseFeed>'}
	${object.enableCollapseEmailThread == null ? '' : '<enableCollapseEmailThread>' + object.enableCollapseEmailThread + '</enableCollapseEmailThread>'}
	${object.enableDraftEmails == null ? '' : '<enableDraftEmails>' + object.enableDraftEmails + '</enableDraftEmails>'}
	${object.enableEarlyEscalationRuleTriggers == null ? '' : '<enableEarlyEscalationRuleTriggers>' + object.enableEarlyEscalationRuleTriggers + '</enableEarlyEscalationRuleTriggers>'}
	${object.enableEmailActionDefaultsHandler == null ? '' : '<enableEmailActionDefaultsHandler>' + object.enableEmailActionDefaultsHandler + '</enableEmailActionDefaultsHandler>'}
	${object.enableSuggestedArticlesApplication == null ? '' : '<enableSuggestedArticlesApplication>' + object.enableSuggestedArticlesApplication + '</enableSuggestedArticlesApplication>'}
	${object.enableSuggestedArticlesCustomerPortal == null ? '' : '<enableSuggestedArticlesCustomerPortal>' + object.enableSuggestedArticlesCustomerPortal + '</enableSuggestedArticlesCustomerPortal>'}
	${object.enableSuggestedArticlesPartnerPortal == null ? '' : '<enableSuggestedArticlesPartnerPortal>' + object.enableSuggestedArticlesPartnerPortal + '</enableSuggestedArticlesPartnerPortal>'}
	${object.enableSuggestedSolutions == null ? '' : '<enableSuggestedSolutions>' + object.enableSuggestedSolutions + '</enableSuggestedSolutions>'}
	${object.escalateCaseBefore == null ? '' : '<escalateCaseBefore>' + object.escalateCaseBefore + '</escalateCaseBefore>'}
	${object.genericMessageEnabled == null ? '' : '<genericMessageEnabled>' + object.genericMessageEnabled + '</genericMessageEnabled>'}
	${object.keepRecordTypeOnAssignmentRule == null ? '' : '<keepRecordTypeOnAssignmentRule>' + object.keepRecordTypeOnAssignmentRule + '</keepRecordTypeOnAssignmentRule>'}
	${object.notifyContactOnCaseComment == null ? '' : '<notifyContactOnCaseComment>' + object.notifyContactOnCaseComment + '</notifyContactOnCaseComment>'}
	${object.notifyDefaultCaseOwner == null ? '' : '<notifyDefaultCaseOwner>' + object.notifyDefaultCaseOwner + '</notifyDefaultCaseOwner>'}
	${object.notifyOwnerOnCaseComment == null ? '' : '<notifyOwnerOnCaseComment>' + object.notifyOwnerOnCaseComment + '</notifyOwnerOnCaseComment>'}
	${object.notifyOwnerOnCaseOwnerChange == null ? '' : '<notifyOwnerOnCaseOwnerChange>' + object.notifyOwnerOnCaseOwnerChange + '</notifyOwnerOnCaseOwnerChange>'}
	${object.predictiveSupportEnabled == null ? '' : '<predictiveSupportEnabled>' + object.predictiveSupportEnabled + '</predictiveSupportEnabled>'}
	${object.showEmailAttachmentsInCaseAttachmentsRL == null ? '' : '<showEmailAttachmentsInCaseAttachmentsRL>' + object.showEmailAttachmentsInCaseAttachmentsRL + '</showEmailAttachmentsInCaseAttachmentsRL>'}
	${object.showFewerCloseActions == null ? '' : '<showFewerCloseActions>' + object.showFewerCloseActions + '</showFewerCloseActions>'}
	${object.systemUserEmail == null ? '' : '<systemUserEmail>' + object.systemUserEmail + '</systemUserEmail>'}
	${object.useSystemEmailAddress == null ? '' : '<useSystemEmailAddress>' + object.useSystemEmailAddress + '</useSystemEmailAddress>'}
	${object.useSystemUserAsDefaultCaseUser == null ? '' : '<useSystemUserAsDefaultCaseUser>' + object.useSystemUserAsDefaultCaseUser + '</useSystemUserAsDefaultCaseUser>'}
	${object.webToCase == null ? '' : '<webToCase>' + WebToCaseSettings(object.webToCase, true) + '</webToCase>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}