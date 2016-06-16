
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceConfig>';
  var rootTagEnd = '</EmbeddedServiceConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.domain == null ? '' : '<domain>' + object.domain + '</domain>'}
	${object.liveChatButton == null ? '' : '<liveChatButton>' + object.liveChatButton + '</liveChatButton>'}
	${object.liveChatDeployment == null ? '' : '<liveChatDeployment>' + object.liveChatDeployment + '</liveChatDeployment>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}