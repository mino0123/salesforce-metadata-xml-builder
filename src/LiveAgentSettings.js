
module.exports = (object, asChild) => {
  var rootTagStart = '<LiveAgentSettings>';
  var rootTagEnd = '</LiveAgentSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableLiveAgent == null ? '' : '<enableLiveAgent>' + object.enableLiveAgent + '</enableLiveAgent>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}