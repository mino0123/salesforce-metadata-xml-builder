const EmbeddedServiceQuickAction = require('./EmbeddedServiceQuickAction');
const EmbeddedServiceFontSize = require('./EmbeddedServiceFontSize');
const EmbeddedServiceScenario = require('./EmbeddedServiceScenario');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceLiveAgent>';
  var rootTagEnd = '</EmbeddedServiceLiveAgent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.avatarImg == null ? '' : '<avatarImg>' + object.avatarImg + '</avatarImg>'}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.embeddedServiceQuickActions == null ? '' : object.embeddedServiceQuickActions.map(p => '<embeddedServiceQuickActions>' + EmbeddedServiceQuickAction(p, true) + '</embeddedServiceQuickActions>').join('')}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.fontSize == null ? '' : '<fontSize>' + EmbeddedServiceFontSize(object.fontSize, true) + '</fontSize>'}
	${object.headerBackgroundImg == null ? '' : '<headerBackgroundImg>' + object.headerBackgroundImg + '</headerBackgroundImg>'}
	${object.isOfflineCaseEnabled == null ? '' : '<isOfflineCaseEnabled>' + object.isOfflineCaseEnabled + '</isOfflineCaseEnabled>'}
	${object.isQueuePositionEnabled == null ? '' : '<isQueuePositionEnabled>' + object.isQueuePositionEnabled + '</isQueuePositionEnabled>'}
	${object.liveAgentChatUrl == null ? '' : '<liveAgentChatUrl>' + object.liveAgentChatUrl + '</liveAgentChatUrl>'}
	${object.liveAgentContentUrl == null ? '' : '<liveAgentContentUrl>' + object.liveAgentContentUrl + '</liveAgentContentUrl>'}
	${object.liveChatButton == null ? '' : '<liveChatButton>' + object.liveChatButton + '</liveChatButton>'}
	${object.liveChatDeployment == null ? '' : '<liveChatDeployment>' + object.liveChatDeployment + '</liveChatDeployment>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.offlineCaseBackgroundImg == null ? '' : '<offlineCaseBackgroundImg>' + object.offlineCaseBackgroundImg + '</offlineCaseBackgroundImg>'}
	${object.prechatBackgroundImg == null ? '' : '<prechatBackgroundImg>' + object.prechatBackgroundImg + '</prechatBackgroundImg>'}
	${object.prechatEnabled == null ? '' : '<prechatEnabled>' + object.prechatEnabled + '</prechatEnabled>'}
	${object.prechatJson == null ? '' : '<prechatJson>' + object.prechatJson + '</prechatJson>'}
	${object.scenario == null ? '' : '<scenario>' + EmbeddedServiceScenario(object.scenario, true) + '</scenario>'}
	${object.smallCompanyLogoImg == null ? '' : '<smallCompanyLogoImg>' + object.smallCompanyLogoImg + '</smallCompanyLogoImg>'}
	${object.waitingStateBackgroundImg == null ? '' : '<waitingStateBackgroundImg>' + object.waitingStateBackgroundImg + '</waitingStateBackgroundImg>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}