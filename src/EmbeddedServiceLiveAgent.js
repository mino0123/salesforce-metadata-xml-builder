const EmbeddedServiceQuickAction = require('./EmbeddedServiceQuickAction');
const EmbeddedServiceScenario = require('./EmbeddedServiceScenario');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceLiveAgent>';
  var rootTagEnd = '</EmbeddedServiceLiveAgent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.embeddedServiceQuickActions == null ? '' : object.embeddedServiceQuickActions.map(p => '<embeddedServiceQuickActions>' + EmbeddedServiceQuickAction(p, true) + '</embeddedServiceQuickActions>').join('')}
	${object.liveAgentChatUrl == null ? '' : '<liveAgentChatUrl>' + object.liveAgentChatUrl + '</liveAgentChatUrl>'}
	${object.liveAgentContentUrl == null ? '' : '<liveAgentContentUrl>' + object.liveAgentContentUrl + '</liveAgentContentUrl>'}
	${object.liveChatButton == null ? '' : '<liveChatButton>' + object.liveChatButton + '</liveChatButton>'}
	${object.liveChatDeployment == null ? '' : '<liveChatDeployment>' + object.liveChatDeployment + '</liveChatDeployment>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.prechatEnabled == null ? '' : '<prechatEnabled>' + object.prechatEnabled + '</prechatEnabled>'}
	${object.prechatJson == null ? '' : '<prechatJson>' + object.prechatJson + '</prechatJson>'}
	${object.scenario == null ? '' : '<scenario>' + EmbeddedServiceScenario(object.scenario, true) + '</scenario>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}