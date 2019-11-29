const Territory2SettingsOpportunityFilter = require('./Territory2SettingsOpportunityFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2Settings>';
  var rootTagEnd = '</Territory2Settings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultAccountAccessLevel == null ? '' : '<defaultAccountAccessLevel>' + object.defaultAccountAccessLevel + '</defaultAccountAccessLevel>'}
	${object.defaultCaseAccessLevel == null ? '' : '<defaultCaseAccessLevel>' + object.defaultCaseAccessLevel + '</defaultCaseAccessLevel>'}
	${object.defaultContactAccessLevel == null ? '' : '<defaultContactAccessLevel>' + object.defaultContactAccessLevel + '</defaultContactAccessLevel>'}
	${object.defaultOpportunityAccessLevel == null ? '' : '<defaultOpportunityAccessLevel>' + object.defaultOpportunityAccessLevel + '</defaultOpportunityAccessLevel>'}
	${object.enableTerritoryManagement2 == null ? '' : '<enableTerritoryManagement2>' + object.enableTerritoryManagement2 + '</enableTerritoryManagement2>'}
	${object.opportunityFilterSettings == null ? '' : '<opportunityFilterSettings>' + Territory2SettingsOpportunityFilter(object.opportunityFilterSettings, true) + '</opportunityFilterSettings>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}