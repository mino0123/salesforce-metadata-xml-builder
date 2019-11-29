
module.exports = (object, asChild) => {
  var rootTagStart = '<PrivacySettings>';
  var rootTagEnd = '</PrivacySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableConsentAuditTrail == null ? '' : '<enableConsentAuditTrail>' + object.enableConsentAuditTrail + '</enableConsentAuditTrail>'}
	${object.enableConsentEventStream == null ? '' : '<enableConsentEventStream>' + object.enableConsentEventStream + '</enableConsentEventStream>'}
	${object.enableDefaultMetadataValues == null ? '' : '<enableDefaultMetadataValues>' + object.enableDefaultMetadataValues + '</enableDefaultMetadataValues>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}