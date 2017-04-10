const SamlIdentityLocationType = require('./SamlIdentityLocationType');
const SamlIdentityType = require('./SamlIdentityType');
const SamlType = require('./SamlType');
const SamlSpSLOBinding = require('./SamlSpSLOBinding');

module.exports = (object, asChild) => {
  var rootTagStart = '<SamlSsoConfig>';
  var rootTagEnd = '</SamlSsoConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.attributeName == null ? '' : '<attributeName>' + object.attributeName + '</attributeName>'}
	${object.attributeNameIdFormat == null ? '' : '<attributeNameIdFormat>' + object.attributeNameIdFormat + '</attributeNameIdFormat>'}
	${object.decryptionCertificate == null ? '' : '<decryptionCertificate>' + object.decryptionCertificate + '</decryptionCertificate>'}
	${object.errorUrl == null ? '' : '<errorUrl>' + object.errorUrl + '</errorUrl>'}
	${object.executionUserId == null ? '' : '<executionUserId>' + object.executionUserId + '</executionUserId>'}
	${object.identityLocation == null ? '' : '<identityLocation>' + SamlIdentityLocationType(object.identityLocation, true) + '</identityLocation>'}
	${object.identityMapping == null ? '' : '<identityMapping>' + SamlIdentityType(object.identityMapping, true) + '</identityMapping>'}
	${object.issuer == null ? '' : '<issuer>' + object.issuer + '</issuer>'}
	${object.loginUrl == null ? '' : '<loginUrl>' + object.loginUrl + '</loginUrl>'}
	${object.logoutUrl == null ? '' : '<logoutUrl>' + object.logoutUrl + '</logoutUrl>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.oauthTokenEndpoint == null ? '' : '<oauthTokenEndpoint>' + object.oauthTokenEndpoint + '</oauthTokenEndpoint>'}
	${object.redirectBinding == null ? '' : '<redirectBinding>' + object.redirectBinding + '</redirectBinding>'}
	${object.requestSignatureMethod == null ? '' : '<requestSignatureMethod>' + object.requestSignatureMethod + '</requestSignatureMethod>'}
	${object.requestSigningCertId == null ? '' : '<requestSigningCertId>' + object.requestSigningCertId + '</requestSigningCertId>'}
	${object.salesforceLoginUrl == null ? '' : '<salesforceLoginUrl>' + object.salesforceLoginUrl + '</salesforceLoginUrl>'}
	${object.samlEntityId == null ? '' : '<samlEntityId>' + object.samlEntityId + '</samlEntityId>'}
	${object.samlJitHandlerId == null ? '' : '<samlJitHandlerId>' + object.samlJitHandlerId + '</samlJitHandlerId>'}
	${object.samlVersion == null ? '' : '<samlVersion>' + SamlType(object.samlVersion, true) + '</samlVersion>'}
	${object.singleLogoutBinding == null ? '' : '<singleLogoutBinding>' + SamlSpSLOBinding(object.singleLogoutBinding, true) + '</singleLogoutBinding>'}
	${object.singleLogoutUrl == null ? '' : '<singleLogoutUrl>' + object.singleLogoutUrl + '</singleLogoutUrl>'}
	${object.userProvisioning == null ? '' : '<userProvisioning>' + object.userProvisioning + '</userProvisioning>'}
	${object.validationCert == null ? '' : '<validationCert>' + object.validationCert + '</validationCert>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}