
module.exports = (object, asChild) => {
  var rootTagStart = '<SFDCMobileSettings>';
  var rootTagEnd = '</SFDCMobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMobileLite == null ? '' : '<enableMobileLite>' + object.enableMobileLite + '</enableMobileLite>'}
	${object.enableUserToDeviceLinking == null ? '' : '<enableUserToDeviceLinking>' + object.enableUserToDeviceLinking + '</enableUserToDeviceLinking>'}
${rootTagEnd}`;
}