
module.exports = (object, asChild) => {
  var rootTagStart = '<DiscoverySettings>';
  var rootTagEnd = '</DiscoverySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEinsteinAnswersPref == null ? '' : '<enableEinsteinAnswersPref>' + object.enableEinsteinAnswersPref + '</enableEinsteinAnswersPref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}