
module.exports = (object, asChild) => {
  var rootTagStart = '<SearchLayouts>';
  var rootTagEnd = '</SearchLayouts>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customTabListAdditionalFields == null ? '' : object.customTabListAdditionalFields.map(p => '<customTabListAdditionalFields>' + p + '</customTabListAdditionalFields>').join('')}
	${object.excludedStandardButtons == null ? '' : object.excludedStandardButtons.map(p => '<excludedStandardButtons>' + p + '</excludedStandardButtons>').join('')}
	${object.listViewButtons == null ? '' : object.listViewButtons.map(p => '<listViewButtons>' + p + '</listViewButtons>').join('')}
	${object.lookupDialogsAdditionalFields == null ? '' : object.lookupDialogsAdditionalFields.map(p => '<lookupDialogsAdditionalFields>' + p + '</lookupDialogsAdditionalFields>').join('')}
	${object.lookupFilterFields == null ? '' : object.lookupFilterFields.map(p => '<lookupFilterFields>' + p + '</lookupFilterFields>').join('')}
	${object.lookupPhoneDialogsAdditionalFields == null ? '' : object.lookupPhoneDialogsAdditionalFields.map(p => '<lookupPhoneDialogsAdditionalFields>' + p + '</lookupPhoneDialogsAdditionalFields>').join('')}
	${object.massQuickActions == null ? '' : object.massQuickActions.map(p => '<massQuickActions>' + p + '</massQuickActions>').join('')}
	${object.searchFilterFields == null ? '' : object.searchFilterFields.map(p => '<searchFilterFields>' + p + '</searchFilterFields>').join('')}
	${object.searchResultsAdditionalFields == null ? '' : object.searchResultsAdditionalFields.map(p => '<searchResultsAdditionalFields>' + p + '</searchResultsAdditionalFields>').join('')}
	${object.searchResultsCustomButtons == null ? '' : object.searchResultsCustomButtons.map(p => '<searchResultsCustomButtons>' + p + '</searchResultsCustomButtons>').join('')}
${rootTagEnd}`;
}