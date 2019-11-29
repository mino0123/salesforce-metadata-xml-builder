
module.exports = (object, asChild) => {
  var rootTagStart = '<PartyDataModelSettings>';
  var rootTagEnd = '</PartyDataModelSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAutoSelectIndividualOnMerge == null ? '' : '<enableAutoSelectIndividualOnMerge>' + object.enableAutoSelectIndividualOnMerge + '</enableAutoSelectIndividualOnMerge>'}
	${object.enableConsentManagement == null ? '' : '<enableConsentManagement>' + object.enableConsentManagement + '</enableConsentManagement>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}