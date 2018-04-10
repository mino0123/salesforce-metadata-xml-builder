const AppComponentList = require('./AppComponentList');
const KeyboardShortcuts = require('./KeyboardShortcuts');
const ListPlacement = require('./ListPlacement');
const LiveAgentConfig = require('./LiveAgentConfig');
const PushNotification = require('./PushNotification');
const TabLimitConfig = require('./TabLimitConfig');

module.exports = (object, asChild) => {
  var rootTagStart = '<ServiceCloudConsoleConfig>';
  var rootTagEnd = '</ServiceCloudConsoleConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentList == null ? '' : '<componentList>' + AppComponentList(object.componentList, true) + '</componentList>'}
	${object.detailPageRefreshMethod == null ? '' : '<detailPageRefreshMethod>' + object.detailPageRefreshMethod + '</detailPageRefreshMethod>'}
	${object.footerColor == null ? '' : '<footerColor>' + object.footerColor + '</footerColor>'}
	${object.headerColor == null ? '' : '<headerColor>' + object.headerColor + '</headerColor>'}
	${object.keyboardShortcuts == null ? '' : '<keyboardShortcuts>' + KeyboardShortcuts(object.keyboardShortcuts, true) + '</keyboardShortcuts>'}
	${object.listPlacement == null ? '' : '<listPlacement>' + ListPlacement(object.listPlacement, true) + '</listPlacement>'}
	${object.listRefreshMethod == null ? '' : '<listRefreshMethod>' + object.listRefreshMethod + '</listRefreshMethod>'}
	${object.liveAgentConfig == null ? '' : '<liveAgentConfig>' + LiveAgentConfig(object.liveAgentConfig, true) + '</liveAgentConfig>'}
	${object.primaryTabColor == null ? '' : '<primaryTabColor>' + object.primaryTabColor + '</primaryTabColor>'}
	${object.pushNotifications == null ? '' : object.pushNotifications.map(p => '<pushNotifications>' + PushNotification(p, true) + '</pushNotifications>').join('')}
	${object.tabLimitConfig == null ? '' : '<tabLimitConfig>' + TabLimitConfig(object.tabLimitConfig, true) + '</tabLimitConfig>'}
	${object.whitelistedDomains == null ? '' : object.whitelistedDomains.map(p => '<whitelistedDomains>' + p + '</whitelistedDomains>').join('')}
${rootTagEnd}`;
}