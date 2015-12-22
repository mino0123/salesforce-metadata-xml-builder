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
	${object.caseCloseNotificationTemplate == null ? '' : '<caseCloseNotificationTemplate>' + object.caseCloseNotificationTemplate + '</caseCloseNotificationTemplate>'}
	${object.caseCommentNotificationTemplate == null ? '' : '<caseCommentNotificationTemplate>' + object.caseCommentNotificationTemplate + '</caseCommentNotificationTemplate>'}
	${object.caseCreateNotificationTemplate == null ? '' : '<caseCreateNotificationTemplate>' + object.caseCreateNotificationTemplate + '</caseCreateNotificationTemplate>'}
	${object.caseFeedItemSettings == null ? '' : object.caseFeedItemSettings.map(p => '<caseFeedItemSettings>' + FeedItemSettings(p, true) + '</caseFeedItemSettings>')}
	${object.closeCaseThroughStatusChange == null ? '' : '<closeCaseThroughStatusChange>' + object.closeCaseThroughStatusChange + '</closeCaseThroughStatusChange>'}
	${object.defaultCaseOwner == null ? '' : '<defaultCaseOwner>' + object.defaultCaseOwner + '</defaultCaseOwner>'}
	${object.defaultCaseOwnerType == null ? '' : '<defaultCaseOwnerType>' + object.defaultCaseOwnerType + '</defaultCaseOwnerType>'}
	${object.defaultCaseUser == null ? '' : '<defaultCaseUser>' + object.defaultCaseUser + '</defaultCaseUser>'}
	${object.emailActionDefaultsHandlerClass == null ? '' : '<emailActionDefaultsHandlerClass>' + object.emailActionDefaultsHandlerClass + '</emailActionDefaultsHandlerClass>'}
	${object.emailToCase == null ? '' : '<emailToCase>' + EmailToCaseSettings(object.emailToCase, true) + '</emailToCase>'}
	${object.enableCaseFeed == null ? '' : '<enableCaseFeed>' + object.enableCaseFeed + '</enableCaseFeed>'}
	${object.enableDraftEmails == null ? '' : '<enableDraftEmails>' + object.enableDraftEmails + '</enableDraftEmails>'}
	${object.enableEarlyEscalationRuleTriggers == null ? '' : '<enableEarlyEscalationRuleTriggers>' + object.enableEarlyEscalationRuleTriggers + '</enableEarlyEscalationRuleTriggers>'}
	${object.enableEmailActionDefaultsHandler == null ? '' : '<enableEmailActionDefaultsHandler>' + object.enableEmailActionDefaultsHandler + '</enableEmailActionDefaultsHandler>'}
	${object.enableSuggestedArticlesApplication == null ? '' : '<enableSuggestedArticlesApplication>' + object.enableSuggestedArticlesApplication + '</enableSuggestedArticlesApplication>'}
	${object.enableSuggestedArticlesCustomerPortal == null ? '' : '<enableSuggestedArticlesCustomerPortal>' + object.enableSuggestedArticlesCustomerPortal + '</enableSuggestedArticlesCustomerPortal>'}
	${object.enableSuggestedArticlesPartnerPortal == null ? '' : '<enableSuggestedArticlesPartnerPortal>' + object.enableSuggestedArticlesPartnerPortal + '</enableSuggestedArticlesPartnerPortal>'}
	${object.enableSuggestedSolutions == null ? '' : '<enableSuggestedSolutions>' + object.enableSuggestedSolutions + '</enableSuggestedSolutions>'}
	${object.keepRecordTypeOnAssignmentRule == null ? '' : '<keepRecordTypeOnAssignmentRule>' + object.keepRecordTypeOnAssignmentRule + '</keepRecordTypeOnAssignmentRule>'}
	${object.notifyContactOnCaseComment == null ? '' : '<notifyContactOnCaseComment>' + object.notifyContactOnCaseComment + '</notifyContactOnCaseComment>'}
	${object.notifyDefaultCaseOwner == null ? '' : '<notifyDefaultCaseOwner>' + object.notifyDefaultCaseOwner + '</notifyDefaultCaseOwner>'}
	${object.notifyOwnerOnCaseComment == null ? '' : '<notifyOwnerOnCaseComment>' + object.notifyOwnerOnCaseComment + '</notifyOwnerOnCaseComment>'}
	${object.notifyOwnerOnCaseOwnerChange == null ? '' : '<notifyOwnerOnCaseOwnerChange>' + object.notifyOwnerOnCaseOwnerChange + '</notifyOwnerOnCaseOwnerChange>'}
	${object.showFewerCloseActions == null ? '' : '<showFewerCloseActions>' + object.showFewerCloseActions + '</showFewerCloseActions>'}
	${object.useSystemEmailAddress == null ? '' : '<useSystemEmailAddress>' + object.useSystemEmailAddress + '</useSystemEmailAddress>'}
	${object.webToCase == null ? '' : '<webToCase>' + WebToCaseSettings(object.webToCase, true) + '</webToCase>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}