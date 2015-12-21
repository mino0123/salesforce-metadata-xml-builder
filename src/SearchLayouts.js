
module.exports = (object, asChild) => {
  var rootTagStart = '<SearchLayouts>';
  var rootTagEnd = '</SearchLayouts>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customTabListAdditionalFields == null ? '' : object.customTabListAdditionalFields.map(p => '<customTabListAdditionalFields>' + p + '</customTabListAdditionalFields>')}
	${object.excludedStandardButtons == null ? '' : object.excludedStandardButtons.map(p => '<excludedStandardButtons>' + p + '</excludedStandardButtons>')}
	${object.listViewButtons == null ? '' : object.listViewButtons.map(p => '<listViewButtons>' + p + '</listViewButtons>')}
	${object.lookupDialogsAdditionalFields == null ? '' : object.lookupDialogsAdditionalFields.map(p => '<lookupDialogsAdditionalFields>' + p + '</lookupDialogsAdditionalFields>')}
	${object.lookupFilterFields == null ? '' : object.lookupFilterFields.map(p => '<lookupFilterFields>' + p + '</lookupFilterFields>')}
	${object.lookupPhoneDialogsAdditionalFields == null ? '' : object.lookupPhoneDialogsAdditionalFields.map(p => '<lookupPhoneDialogsAdditionalFields>' + p + '</lookupPhoneDialogsAdditionalFields>')}
	${object.searchFilterFields == null ? '' : object.searchFilterFields.map(p => '<searchFilterFields>' + p + '</searchFilterFields>')}
	${object.searchResultsAdditionalFields == null ? '' : object.searchResultsAdditionalFields.map(p => '<searchResultsAdditionalFields>' + p + '</searchResultsAdditionalFields>')}
	${object.searchResultsCustomButtons == null ? '' : object.searchResultsCustomButtons.map(p => '<searchResultsCustomButtons>' + p + '</searchResultsCustomButtons>')}
${rootTagEnd}`;
}