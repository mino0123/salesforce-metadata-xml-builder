
module.exports = (object, asChild) => {
  var rootTagStart = '<Certificate>';
  var rootTagEnd = '</Certificate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caSigned == null ? '' : '<caSigned>' + object.caSigned + '</caSigned>'}
	${object.encryptedWithPlatformEncryption == null ? '' : '<encryptedWithPlatformEncryption>' + object.encryptedWithPlatformEncryption + '</encryptedWithPlatformEncryption>'}
	${object.expirationDate == null ? '' : '<expirationDate>' + object.expirationDate + '</expirationDate>'}
	${object.keySize == null ? '' : '<keySize>' + object.keySize + '</keySize>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.privateKeyExportable == null ? '' : '<privateKeyExportable>' + object.privateKeyExportable + '</privateKeyExportable>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}