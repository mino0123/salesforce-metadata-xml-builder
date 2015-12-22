
module.exports = (object, asChild) => {
  var rootTagStart = '<EntitlementSettings>';
  var rootTagEnd = '</EntitlementSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetLookupLimitedToActiveEntitlementsOnAccount == null ? '' : '<assetLookupLimitedToActiveEntitlementsOnAccount>' + object.assetLookupLimitedToActiveEntitlementsOnAccount + '</assetLookupLimitedToActiveEntitlementsOnAccount>'}
	${object.assetLookupLimitedToActiveEntitlementsOnContact == null ? '' : '<assetLookupLimitedToActiveEntitlementsOnContact>' + object.assetLookupLimitedToActiveEntitlementsOnContact + '</assetLookupLimitedToActiveEntitlementsOnContact>'}
	${object.assetLookupLimitedToSameAccount == null ? '' : '<assetLookupLimitedToSameAccount>' + object.assetLookupLimitedToSameAccount + '</assetLookupLimitedToSameAccount>'}
	${object.assetLookupLimitedToSameContact == null ? '' : '<assetLookupLimitedToSameContact>' + object.assetLookupLimitedToSameContact + '</assetLookupLimitedToSameContact>'}
	${object.enableEntitlementVersioning == null ? '' : '<enableEntitlementVersioning>' + object.enableEntitlementVersioning + '</enableEntitlementVersioning>'}
	${object.enableEntitlements == null ? '' : '<enableEntitlements>' + object.enableEntitlements + '</enableEntitlements>'}
	${object.entitlementLookupLimitedToActiveStatus == null ? '' : '<entitlementLookupLimitedToActiveStatus>' + object.entitlementLookupLimitedToActiveStatus + '</entitlementLookupLimitedToActiveStatus>'}
	${object.entitlementLookupLimitedToSameAccount == null ? '' : '<entitlementLookupLimitedToSameAccount>' + object.entitlementLookupLimitedToSameAccount + '</entitlementLookupLimitedToSameAccount>'}
	${object.entitlementLookupLimitedToSameAsset == null ? '' : '<entitlementLookupLimitedToSameAsset>' + object.entitlementLookupLimitedToSameAsset + '</entitlementLookupLimitedToSameAsset>'}
	${object.entitlementLookupLimitedToSameContact == null ? '' : '<entitlementLookupLimitedToSameContact>' + object.entitlementLookupLimitedToSameContact + '</entitlementLookupLimitedToSameContact>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}