
module.exports = (object, asChild) => {
  var rootTagStart = '<EmailIntegrationSettings>';
  var rootTagEnd = '</EmailIntegrationSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesEmailLogAsEmailMessageInOutlook == null ? '' : '<doesEmailLogAsEmailMessageInOutlook>' + object.doesEmailLogAsEmailMessageInOutlook + '</doesEmailLogAsEmailMessageInOutlook>'}
	${object.doesGmailStayConnectedToSalesforce == null ? '' : '<doesGmailStayConnectedToSalesforce>' + object.doesGmailStayConnectedToSalesforce + '</doesGmailStayConnectedToSalesforce>'}
	${object.enableContactAndEventSync == null ? '' : '<enableContactAndEventSync>' + object.enableContactAndEventSync + '</enableContactAndEventSync>'}
	${object.enableEmailTrackingInMobile == null ? '' : '<enableEmailTrackingInMobile>' + object.enableEmailTrackingInMobile + '</enableEmailTrackingInMobile>'}
	${object.enableEngageForOutlook == null ? '' : '<enableEngageForOutlook>' + object.enableEngageForOutlook + '</enableEngageForOutlook>'}
	${object.enableGmailIntegration == null ? '' : '<enableGmailIntegration>' + object.enableGmailIntegration + '</enableGmailIntegration>'}
	${object.enableOutlookIntegration == null ? '' : '<enableOutlookIntegration>' + object.enableOutlookIntegration + '</enableOutlookIntegration>'}
	${object.enableProductivityFeatures == null ? '' : '<enableProductivityFeatures>' + object.enableProductivityFeatures + '</enableProductivityFeatures>'}
	${object.enableSupplementalContactInfoInMobile == null ? '' : '<enableSupplementalContactInfoInMobile>' + object.enableSupplementalContactInfoInMobile + '</enableSupplementalContactInfoInMobile>'}
	${object.isLayoutCustomizationAllowed == null ? '' : '<isLayoutCustomizationAllowed>' + object.isLayoutCustomizationAllowed + '</isLayoutCustomizationAllowed>'}
	${object.shouldUseTrustedDomainsList == null ? '' : '<shouldUseTrustedDomainsList>' + object.shouldUseTrustedDomainsList + '</shouldUseTrustedDomainsList>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}