
module.exports = (object, asChild) => {
  var rootTagStart = '<PersonalJourneySettings>';
  var rootTagEnd = '</PersonalJourneySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableExactTargetForSalesforceApps == null ? '' : '<enableExactTargetForSalesforceApps>' + object.enableExactTargetForSalesforceApps + '</enableExactTargetForSalesforceApps>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}