const SearchSettingsByObject = require('./SearchSettingsByObject');

module.exports = (object, asChild) => {
  var rootTagStart = '<SearchSettings>';
  var rootTagEnd = '</SearchSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.documentContentSearchEnabled == null ? '' : '<documentContentSearchEnabled>' + object.documentContentSearchEnabled + '</documentContentSearchEnabled>'}
	${object.enableAdvancedSearchInAlohaSidebar == null ? '' : '<enableAdvancedSearchInAlohaSidebar>' + object.enableAdvancedSearchInAlohaSidebar + '</enableAdvancedSearchInAlohaSidebar>'}
	${object.enableEinsteinSearchPersonalization == null ? '' : '<enableEinsteinSearchPersonalization>' + object.enableEinsteinSearchPersonalization + '</enableEinsteinSearchPersonalization>'}
	${object.enableQuerySuggestionPigOn == null ? '' : '<enableQuerySuggestionPigOn>' + object.enableQuerySuggestionPigOn + '</enableQuerySuggestionPigOn>'}
	${object.enableSalesforceGeneratedSynonyms == null ? '' : '<enableSalesforceGeneratedSynonyms>' + object.enableSalesforceGeneratedSynonyms + '</enableSalesforceGeneratedSynonyms>'}
	${object.enableSetupSearch == null ? '' : '<enableSetupSearch>' + object.enableSetupSearch + '</enableSetupSearch>'}
	${object.optimizeSearchForCJKEnabled == null ? '' : '<optimizeSearchForCJKEnabled>' + object.optimizeSearchForCJKEnabled + '</optimizeSearchForCJKEnabled>'}
	${object.recentlyViewedUsersForBlankLookupEnabled == null ? '' : '<recentlyViewedUsersForBlankLookupEnabled>' + object.recentlyViewedUsersForBlankLookupEnabled + '</recentlyViewedUsersForBlankLookupEnabled>'}
	${object.searchSettingsByObject == null ? '' : '<searchSettingsByObject>' + SearchSettingsByObject(object.searchSettingsByObject, true) + '</searchSettingsByObject>'}
	${object.sidebarAutoCompleteEnabled == null ? '' : '<sidebarAutoCompleteEnabled>' + object.sidebarAutoCompleteEnabled + '</sidebarAutoCompleteEnabled>'}
	${object.sidebarDropDownListEnabled == null ? '' : '<sidebarDropDownListEnabled>' + object.sidebarDropDownListEnabled + '</sidebarDropDownListEnabled>'}
	${object.sidebarLimitToItemsIOwnCheckboxEnabled == null ? '' : '<sidebarLimitToItemsIOwnCheckboxEnabled>' + object.sidebarLimitToItemsIOwnCheckboxEnabled + '</sidebarLimitToItemsIOwnCheckboxEnabled>'}
	${object.singleSearchResultShortcutEnabled == null ? '' : '<singleSearchResultShortcutEnabled>' + object.singleSearchResultShortcutEnabled + '</singleSearchResultShortcutEnabled>'}
	${object.spellCorrectKnowledgeSearchEnabled == null ? '' : '<spellCorrectKnowledgeSearchEnabled>' + object.spellCorrectKnowledgeSearchEnabled + '</spellCorrectKnowledgeSearchEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}