
module.exports = (object, asChild) => {
  var rootTagStart = '<Certificate>';
  var rootTagEnd = '</Certificate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caSigned == null ? '' : '<caSigned>' + object.caSigned + '</caSigned>'}
	${object.expirationDate == null ? '' : '<expirationDate>' + object.expirationDate + '</expirationDate>'}
	${object.keySize == null ? '' : '<keySize>' + object.keySize + '</keySize>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}