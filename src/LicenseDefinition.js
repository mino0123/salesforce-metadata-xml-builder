const LicensedCustomPermissions = require('./LicensedCustomPermissions');

module.exports = (object, asChild) => {
  var rootTagStart = '<LicenseDefinition>';
  var rootTagEnd = '</LicenseDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregationGroup == null ? '' : '<aggregationGroup>' + object.aggregationGroup + '</aggregationGroup>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isPublished == null ? '' : '<isPublished>' + object.isPublished + '</isPublished>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.licensedCustomPermissions == null ? '' : object.licensedCustomPermissions.map(p => '<licensedCustomPermissions>' + LicensedCustomPermissions(p, true) + '</licensedCustomPermissions>').join('')}
	${object.licensingAuthority == null ? '' : '<licensingAuthority>' + object.licensingAuthority + '</licensingAuthority>'}
	${object.licensingAuthorityProvider == null ? '' : '<licensingAuthorityProvider>' + object.licensingAuthorityProvider + '</licensingAuthorityProvider>'}
	${object.minPlatformVersion == null ? '' : '<minPlatformVersion>' + object.minPlatformVersion + '</minPlatformVersion>'}
	${object.origin == null ? '' : '<origin>' + object.origin + '</origin>'}
	${object.revision == null ? '' : '<revision>' + object.revision + '</revision>'}
	${object.trialLicenseDuration == null ? '' : '<trialLicenseDuration>' + object.trialLicenseDuration + '</trialLicenseDuration>'}
	${object.trialLicenseQuantity == null ? '' : '<trialLicenseQuantity>' + object.trialLicenseQuantity + '</trialLicenseQuantity>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}