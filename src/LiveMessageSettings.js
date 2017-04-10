
module.exports = (object, asChild) => {
  var rootTagStart = '<LiveMessageSettings>';
  var rootTagEnd = '</LiveMessageSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableLiveMessage == null ? '' : '<enableLiveMessage>' + object.enableLiveMessage + '</enableLiveMessage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}