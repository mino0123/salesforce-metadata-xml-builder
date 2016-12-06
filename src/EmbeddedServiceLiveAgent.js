
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceLiveAgent>';
  var rootTagEnd = '</EmbeddedServiceLiveAgent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.liveAgentChatUrl == null ? '' : '<liveAgentChatUrl>' + object.liveAgentChatUrl + '</liveAgentChatUrl>'}
	${object.liveAgentContentUrl == null ? '' : '<liveAgentContentUrl>' + object.liveAgentContentUrl + '</liveAgentContentUrl>'}
	${object.liveChatButton == null ? '' : '<liveChatButton>' + object.liveChatButton + '</liveChatButton>'}
	${object.liveChatDeployment == null ? '' : '<liveChatDeployment>' + object.liveChatDeployment + '</liveChatDeployment>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}