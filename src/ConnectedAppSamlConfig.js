const SamlEncryptionType = require('./SamlEncryptionType');
const SamlNameIdFormatType = require('./SamlNameIdFormatType');
const SamlSubjectType = require('./SamlSubjectType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppSamlConfig>';
  var rootTagEnd = '</ConnectedAppSamlConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.acsUrl == null ? '' : '<acsUrl>' + object.acsUrl + '</acsUrl>'}
	${object.certificate == null ? '' : '<certificate>' + object.certificate + '</certificate>'}
	${object.encryptionCertificate == null ? '' : '<encryptionCertificate>' + object.encryptionCertificate + '</encryptionCertificate>'}
	${object.encryptionType == null ? '' : '<encryptionType>' + SamlEncryptionType(object.encryptionType, true) + '</encryptionType>'}
	${object.entityUrl == null ? '' : '<entityUrl>' + object.entityUrl + '</entityUrl>'}
	${object.issuer == null ? '' : '<issuer>' + object.issuer + '</issuer>'}
	${object.samlNameIdFormat == null ? '' : '<samlNameIdFormat>' + SamlNameIdFormatType(object.samlNameIdFormat, true) + '</samlNameIdFormat>'}
	${object.samlSubjectCustomAttr == null ? '' : '<samlSubjectCustomAttr>' + object.samlSubjectCustomAttr + '</samlSubjectCustomAttr>'}
	${object.samlSubjectType == null ? '' : '<samlSubjectType>' + SamlSubjectType(object.samlSubjectType, true) + '</samlSubjectType>'}
${rootTagEnd}`;
}