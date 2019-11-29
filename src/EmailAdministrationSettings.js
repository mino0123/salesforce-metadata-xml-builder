
module.exports = (object, asChild) => {
  var rootTagStart = '<EmailAdministrationSettings>';
  var rootTagEnd = '</EmailAdministrationSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableComplianceBcc == null ? '' : '<enableComplianceBcc>' + object.enableComplianceBcc + '</enableComplianceBcc>'}
	${object.enableEmailConsentManagement == null ? '' : '<enableEmailConsentManagement>' + object.enableEmailConsentManagement + '</enableEmailConsentManagement>'}
	${object.enableEmailSenderIdCompliance == null ? '' : '<enableEmailSenderIdCompliance>' + object.enableEmailSenderIdCompliance + '</enableEmailSenderIdCompliance>'}
	${object.enableEmailSpfCompliance == null ? '' : '<enableEmailSpfCompliance>' + object.enableEmailSpfCompliance + '</enableEmailSpfCompliance>'}
	${object.enableEmailToSalesforce == null ? '' : '<enableEmailToSalesforce>' + object.enableEmailToSalesforce + '</enableEmailToSalesforce>'}
	${object.enableEmailWorkflowApproval == null ? '' : '<enableEmailWorkflowApproval>' + object.enableEmailWorkflowApproval + '</enableEmailWorkflowApproval>'}
	${object.enableEnhancedEmailEnabled == null ? '' : '<enableEnhancedEmailEnabled>' + object.enableEnhancedEmailEnabled + '</enableEnhancedEmailEnabled>'}
	${object.enableHandleBouncedEmails == null ? '' : '<enableHandleBouncedEmails>' + object.enableHandleBouncedEmails + '</enableHandleBouncedEmails>'}
	${object.enableHtmlEmail == null ? '' : '<enableHtmlEmail>' + object.enableHtmlEmail + '</enableHtmlEmail>'}
	${object.enableListEmailLogActivities == null ? '' : '<enableListEmailLogActivities>' + object.enableListEmailLogActivities + '</enableListEmailLogActivities>'}
	${object.enableResendBouncedEmails == null ? '' : '<enableResendBouncedEmails>' + object.enableResendBouncedEmails + '</enableResendBouncedEmails>'}
	${object.enableRestrictTlsToDomains == null ? '' : '<enableRestrictTlsToDomains>' + object.enableRestrictTlsToDomains + '</enableRestrictTlsToDomains>'}
	${object.enableSendThroughGmailPref == null ? '' : '<enableSendThroughGmailPref>' + object.enableSendThroughGmailPref + '</enableSendThroughGmailPref>'}
	${object.enableSendViaExchangePref == null ? '' : '<enableSendViaExchangePref>' + object.enableSendViaExchangePref + '</enableSendViaExchangePref>'}
	${object.enableSendViaGmailPref == null ? '' : '<enableSendViaGmailPref>' + object.enableSendViaGmailPref + '</enableSendViaGmailPref>'}
	${object.enableSetMatchingEmailsOnBounce == null ? '' : '<enableSetMatchingEmailsOnBounce>' + object.enableSetMatchingEmailsOnBounce + '</enableSetMatchingEmailsOnBounce>'}
	${object.enableUseOrgFootersForExtTrans == null ? '' : '<enableUseOrgFootersForExtTrans>' + object.enableUseOrgFootersForExtTrans + '</enableUseOrgFootersForExtTrans>'}
	${object.sendEmailsEvenWhenAutomationUpdatesSameRecord == null ? '' : '<sendEmailsEvenWhenAutomationUpdatesSameRecord>' + object.sendEmailsEvenWhenAutomationUpdatesSameRecord + '</sendEmailsEvenWhenAutomationUpdatesSameRecord>'}
	${object.sendMassEmailNotification == null ? '' : '<sendMassEmailNotification>' + object.sendMassEmailNotification + '</sendMassEmailNotification>'}
	${object.sendTextOnlySystemEmails == null ? '' : '<sendTextOnlySystemEmails>' + object.sendTextOnlySystemEmails + '</sendTextOnlySystemEmails>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}