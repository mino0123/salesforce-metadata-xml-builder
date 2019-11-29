const FindSimilarOppFilter = require('./FindSimilarOppFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<OpportunitySettings>';
  var rootTagEnd = '</OpportunitySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autoActivateNewReminders == null ? '' : '<autoActivateNewReminders>' + object.autoActivateNewReminders + '</autoActivateNewReminders>'}
	${object.customizableProductSchedulesEnabled == null ? '' : '<customizableProductSchedulesEnabled>' + object.customizableProductSchedulesEnabled + '</customizableProductSchedulesEnabled>'}
	${object.doesAutoAddSplitOwnerAsOpportunityTeamMember == null ? '' : '<doesAutoAddSplitOwnerAsOpportunityTeamMember>' + object.doesAutoAddSplitOwnerAsOpportunityTeamMember + '</doesAutoAddSplitOwnerAsOpportunityTeamMember>'}
	${object.doesEnforceStandardOpportunitySaveLogic == null ? '' : '<doesEnforceStandardOpportunitySaveLogic>' + object.doesEnforceStandardOpportunitySaveLogic + '</doesEnforceStandardOpportunitySaveLogic>'}
	${object.enableFindSimilarOpportunities == null ? '' : '<enableFindSimilarOpportunities>' + object.enableFindSimilarOpportunities + '</enableFindSimilarOpportunities>'}
	${object.enableOpportunityFieldHistoryTracking == null ? '' : '<enableOpportunityFieldHistoryTracking>' + object.enableOpportunityFieldHistoryTracking + '</enableOpportunityFieldHistoryTracking>'}
	${object.enableOpportunityInsightsInMobile == null ? '' : '<enableOpportunityInsightsInMobile>' + object.enableOpportunityInsightsInMobile + '</enableOpportunityInsightsInMobile>'}
	${object.enableOpportunityTeam == null ? '' : '<enableOpportunityTeam>' + object.enableOpportunityTeam + '</enableOpportunityTeam>'}
	${object.enableUpdateReminders == null ? '' : '<enableUpdateReminders>' + object.enableUpdateReminders + '</enableUpdateReminders>'}
	${object.findSimilarOppFilter == null ? '' : '<findSimilarOppFilter>' + FindSimilarOppFilter(object.findSimilarOppFilter, true) + '</findSimilarOppFilter>'}
	${object.promptToAddProducts == null ? '' : '<promptToAddProducts>' + object.promptToAddProducts + '</promptToAddProducts>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}