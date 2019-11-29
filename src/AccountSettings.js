
module.exports = (object, asChild) => {
  var rootTagStart = '<AccountSettings>';
  var rootTagEnd = '</AccountSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAccountHistoryTracking == null ? '' : '<enableAccountHistoryTracking>' + object.enableAccountHistoryTracking + '</enableAccountHistoryTracking>'}
	${object.enableAccountInsightsInMobile == null ? '' : '<enableAccountInsightsInMobile>' + object.enableAccountInsightsInMobile + '</enableAccountInsightsInMobile>'}
	${object.enableAccountOwnerReport == null ? '' : '<enableAccountOwnerReport>' + object.enableAccountOwnerReport + '</enableAccountOwnerReport>'}
	${object.enableAccountTeams == null ? '' : '<enableAccountTeams>' + object.enableAccountTeams + '</enableAccountTeams>'}
	${object.enableContactHistoryTracking == null ? '' : '<enableContactHistoryTracking>' + object.enableContactHistoryTracking + '</enableContactHistoryTracking>'}
	${object.enableRelateContactToMultipleAccounts == null ? '' : '<enableRelateContactToMultipleAccounts>' + object.enableRelateContactToMultipleAccounts + '</enableRelateContactToMultipleAccounts>'}
	${object.showViewHierarchyLink == null ? '' : '<showViewHierarchyLink>' + object.showViewHierarchyLink + '</showViewHierarchyLink>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}