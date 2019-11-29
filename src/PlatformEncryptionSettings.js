
module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformEncryptionSettings>';
  var rootTagEnd = '</PlatformEncryptionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canEncryptManagedPackageFields == null ? '' : '<canEncryptManagedPackageFields>' + object.canEncryptManagedPackageFields + '</canEncryptManagedPackageFields>'}
	${object.enableDeterministicEncryption == null ? '' : '<enableDeterministicEncryption>' + object.enableDeterministicEncryption + '</enableDeterministicEncryption>'}
	${object.enableEncryptFieldHistory == null ? '' : '<enableEncryptFieldHistory>' + object.enableEncryptFieldHistory + '</enableEncryptFieldHistory>'}
	${object.enableEventBusEncryption == null ? '' : '<enableEventBusEncryption>' + object.enableEventBusEncryption + '</enableEventBusEncryption>'}
	${object.isMEKForEncryptionRequired == null ? '' : '<isMEKForEncryptionRequired>' + object.isMEKForEncryptionRequired + '</isMEKForEncryptionRequired>'}
	${object.isUseHighAssuranceKeysRequired == null ? '' : '<isUseHighAssuranceKeysRequired>' + object.isUseHighAssuranceKeysRequired + '</isUseHighAssuranceKeysRequired>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}