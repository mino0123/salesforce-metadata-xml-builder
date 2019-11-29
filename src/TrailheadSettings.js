
module.exports = (object, asChild) => {
  var rootTagStart = '<TrailheadSettings>';
  var rootTagEnd = '</TrailheadSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMyTrailheadPref == null ? '' : '<enableMyTrailheadPref>' + object.enableMyTrailheadPref + '</enableMyTrailheadPref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}