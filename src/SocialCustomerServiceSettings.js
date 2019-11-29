const CaseSubjectOption = require('./CaseSubjectOption');

module.exports = (object, asChild) => {
  var rootTagStart = '<SocialCustomerServiceSettings>';
  var rootTagEnd = '</SocialCustomerServiceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseSubjectOption == null ? '' : '<caseSubjectOption>' + CaseSubjectOption(object.caseSubjectOption, true) + '</caseSubjectOption>'}
	${object.enableSocialApprovals == null ? '' : '<enableSocialApprovals>' + object.enableSocialApprovals + '</enableSocialApprovals>'}
	${object.enableSocialCaseAssignmentRules == null ? '' : '<enableSocialCaseAssignmentRules>' + object.enableSocialCaseAssignmentRules + '</enableSocialCaseAssignmentRules>'}
	${object.enableSocialCustomerService == null ? '' : '<enableSocialCustomerService>' + object.enableSocialCustomerService + '</enableSocialCustomerService>'}
	${object.enableSocialPersonaHistoryTracking == null ? '' : '<enableSocialPersonaHistoryTracking>' + object.enableSocialPersonaHistoryTracking + '</enableSocialPersonaHistoryTracking>'}
	${object.enableSocialPostHistoryTracking == null ? '' : '<enableSocialPostHistoryTracking>' + object.enableSocialPostHistoryTracking + '</enableSocialPostHistoryTracking>'}
	${object.enableSocialReceiveParentPost == null ? '' : '<enableSocialReceiveParentPost>' + object.enableSocialReceiveParentPost + '</enableSocialReceiveParentPost>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}