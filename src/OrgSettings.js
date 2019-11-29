
module.exports = (object, asChild) => {
  var rootTagStart = '<OrgSettings>';
  var rootTagEnd = '</OrgSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCustomerSuccessPortal == null ? '' : '<enableCustomerSuccessPortal>' + object.enableCustomerSuccessPortal + '</enableCustomerSuccessPortal>'}
	${object.enableExtendedMailMerge == null ? '' : '<enableExtendedMailMerge>' + object.enableExtendedMailMerge + '</enableExtendedMailMerge>'}
	${object.enableIncludeContractStatus == null ? '' : '<enableIncludeContractStatus>' + object.enableIncludeContractStatus + '</enableIncludeContractStatus>'}
	${object.enableMakeDeploymentsMandatory == null ? '' : '<enableMakeDeploymentsMandatory>' + object.enableMakeDeploymentsMandatory + '</enableMakeDeploymentsMandatory>'}
	${object.enableManageSelfServiceUsers == null ? '' : '<enableManageSelfServiceUsers>' + object.enableManageSelfServiceUsers + '</enableManageSelfServiceUsers>'}
	${object.enableOrgFeedSentimentAnalysis == null ? '' : '<enableOrgFeedSentimentAnalysis>' + object.enableOrgFeedSentimentAnalysis + '</enableOrgFeedSentimentAnalysis>'}
	${object.enableRADeploymentAttributeOnly == null ? '' : '<enableRADeploymentAttributeOnly>' + object.enableRADeploymentAttributeOnly + '</enableRADeploymentAttributeOnly>'}
	${object.enableResetDivisionOnLogin == null ? '' : '<enableResetDivisionOnLogin>' + object.enableResetDivisionOnLogin + '</enableResetDivisionOnLogin>'}
	${object.saveMailMergeDocsAsSalesforceDocs == null ? '' : '<saveMailMergeDocsAsSalesforceDocs>' + object.saveMailMergeDocsAsSalesforceDocs + '</saveMailMergeDocsAsSalesforceDocs>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}