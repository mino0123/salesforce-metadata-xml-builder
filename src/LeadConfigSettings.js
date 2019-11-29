
module.exports = (object, asChild) => {
  var rootTagStart = '<LeadConfigSettings>';
  var rootTagEnd = '</LeadConfigSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesEnableLeadConvertDefaultSubjectBlankTaskCreation == null ? '' : '<doesEnableLeadConvertDefaultSubjectBlankTaskCreation>' + object.doesEnableLeadConvertDefaultSubjectBlankTaskCreation + '</doesEnableLeadConvertDefaultSubjectBlankTaskCreation>'}
	${object.doesHideOpportunityInConvertLeadWindow == null ? '' : '<doesHideOpportunityInConvertLeadWindow>' + object.doesHideOpportunityInConvertLeadWindow + '</doesHideOpportunityInConvertLeadWindow>'}
	${object.doesPreserveLeadStatus == null ? '' : '<doesPreserveLeadStatus>' + object.doesPreserveLeadStatus + '</doesPreserveLeadStatus>'}
	${object.doesSelectNoOpportunityOnConvertLead == null ? '' : '<doesSelectNoOpportunityOnConvertLead>' + object.doesSelectNoOpportunityOnConvertLead + '</doesSelectNoOpportunityOnConvertLead>'}
	${object.doesTrackHistory == null ? '' : '<doesTrackHistory>' + object.doesTrackHistory + '</doesTrackHistory>'}
	${object.enableConversionsOnMobile == null ? '' : '<enableConversionsOnMobile>' + object.enableConversionsOnMobile + '</enableConversionsOnMobile>'}
	${object.enableOrgWideMergeAndDelete == null ? '' : '<enableOrgWideMergeAndDelete>' + object.enableOrgWideMergeAndDelete + '</enableOrgWideMergeAndDelete>'}
	${object.shouldLeadConvertRequireValidation == null ? '' : '<shouldLeadConvertRequireValidation>' + object.shouldLeadConvertRequireValidation + '</shouldLeadConvertRequireValidation>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}