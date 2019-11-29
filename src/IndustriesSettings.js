
module.exports = (object, asChild) => {
  var rootTagStart = '<IndustriesSettings>';
  var rootTagEnd = '</IndustriesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowMultipleProducersToWorkOnSamePolicy == null ? '' : '<allowMultipleProducersToWorkOnSamePolicy>' + object.allowMultipleProducersToWorkOnSamePolicy + '</allowMultipleProducersToWorkOnSamePolicy>'}
	${object.enableAccessToMasterListOfCoverageTypes == null ? '' : '<enableAccessToMasterListOfCoverageTypes>' + object.enableAccessToMasterListOfCoverageTypes + '</enableAccessToMasterListOfCoverageTypes>'}
	${object.enableBlockResourceAvailabilityOrgPref == null ? '' : '<enableBlockResourceAvailabilityOrgPref>' + object.enableBlockResourceAvailabilityOrgPref + '</enableBlockResourceAvailabilityOrgPref>'}
	${object.enableEventManagementOrgPref == null ? '' : '<enableEventManagementOrgPref>' + object.enableEventManagementOrgPref + '</enableEventManagementOrgPref>'}
	${object.enableHCReferralScoring == null ? '' : '<enableHCReferralScoring>' + object.enableHCReferralScoring + '</enableHCReferralScoring>'}
	${object.enableManyToManyRelationships == null ? '' : '<enableManyToManyRelationships>' + object.enableManyToManyRelationships + '</enableManyToManyRelationships>'}
	${object.enableMortgageRlaTotalsOrgPref == null ? '' : '<enableMortgageRlaTotalsOrgPref>' + object.enableMortgageRlaTotalsOrgPref + '</enableMortgageRlaTotalsOrgPref>'}
	${object.enableMultiResourceOrgPref == null ? '' : '<enableMultiResourceOrgPref>' + object.enableMultiResourceOrgPref + '</enableMultiResourceOrgPref>'}
	${object.enableObjectDetection == null ? '' : '<enableObjectDetection>' + object.enableObjectDetection + '</enableObjectDetection>'}
	${object.enableOverbookingOrgPref == null ? '' : '<enableOverbookingOrgPref>' + object.enableOverbookingOrgPref + '</enableOverbookingOrgPref>'}
	${object.enableProviderSearchSyncOrgPref == null ? '' : '<enableProviderSearchSyncOrgPref>' + object.enableProviderSearchSyncOrgPref + '</enableProviderSearchSyncOrgPref>'}
	${object.enableReferralScoring == null ? '' : '<enableReferralScoring>' + object.enableReferralScoring + '</enableReferralScoring>'}
	${object.enableSentimentAnalysis == null ? '' : '<enableSentimentAnalysis>' + object.enableSentimentAnalysis + '</enableSentimentAnalysis>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}