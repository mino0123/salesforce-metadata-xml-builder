
module.exports = (object, asChild) => {
  var rootTagStart = '<EncryptionKeySettings>';
  var rootTagEnd = '</EncryptionKeySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canOptOutOfDerivationWithBYOK == null ? '' : '<canOptOutOfDerivationWithBYOK>' + object.canOptOutOfDerivationWithBYOK + '</canOptOutOfDerivationWithBYOK>'}
	${object.enableCacheOnlyKeys == null ? '' : '<enableCacheOnlyKeys>' + object.enableCacheOnlyKeys + '</enableCacheOnlyKeys>'}
	${object.enableReplayDetection == null ? '' : '<enableReplayDetection>' + object.enableReplayDetection + '</enableReplayDetection>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}