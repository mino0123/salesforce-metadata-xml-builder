
module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectLinkingSettings>';
  var rootTagEnd = '</ObjectLinkingSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableObjectLinking == null ? '' : '<enableObjectLinking>' + object.enableObjectLinking + '</enableObjectLinking>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}