const CustomApplicationComponents = require('./CustomApplicationComponents');
const DomainWhitelist = require('./DomainWhitelist');
const KeyboardShortcuts = require('./KeyboardShortcuts');
const ListPlacement = require('./ListPlacement');
const LiveAgentConfig = require('./LiveAgentConfig');
const PushNotifications = require('./PushNotifications');
const WorkspaceMappings = require('./WorkspaceMappings');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomApplication>';
  var rootTagEnd = '</CustomApplication>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customApplicationComponents == null ? '' : '<customApplicationComponents>' + CustomApplicationComponents(object.customApplicationComponents, true) + '</customApplicationComponents>'}
	${object.defaultLandingTab == null ? '' : '<defaultLandingTab>' + object.defaultLandingTab + '</defaultLandingTab>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.detailPageRefreshMethod == null ? '' : '<detailPageRefreshMethod>' + object.detailPageRefreshMethod + '</detailPageRefreshMethod>'}
	${object.domainWhitelist == null ? '' : '<domainWhitelist>' + DomainWhitelist(object.domainWhitelist, true) + '</domainWhitelist>'}
	${object.enableCustomizeMyTabs == null ? '' : '<enableCustomizeMyTabs>' + object.enableCustomizeMyTabs + '</enableCustomizeMyTabs>'}
	${object.enableKeyboardShortcuts == null ? '' : '<enableKeyboardShortcuts>' + object.enableKeyboardShortcuts + '</enableKeyboardShortcuts>'}
	${object.enableListViewReskin == null ? '' : '<enableListViewReskin>' + object.enableListViewReskin + '</enableListViewReskin>'}
	${object.enableMultiMonitorComponents == null ? '' : '<enableMultiMonitorComponents>' + object.enableMultiMonitorComponents + '</enableMultiMonitorComponents>'}
	${object.enablePinTabs == null ? '' : '<enablePinTabs>' + object.enablePinTabs + '</enablePinTabs>'}
	${object.footerColor == null ? '' : '<footerColor>' + object.footerColor + '</footerColor>'}
	${object.headerColor == null ? '' : '<headerColor>' + object.headerColor + '</headerColor>'}
	${object.isServiceCloudConsole == null ? '' : '<isServiceCloudConsole>' + object.isServiceCloudConsole + '</isServiceCloudConsole>'}
	${object.keyboardShortcuts == null ? '' : '<keyboardShortcuts>' + KeyboardShortcuts(object.keyboardShortcuts, true) + '</keyboardShortcuts>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.listPlacement == null ? '' : '<listPlacement>' + ListPlacement(object.listPlacement, true) + '</listPlacement>'}
	${object.listRefreshMethod == null ? '' : '<listRefreshMethod>' + object.listRefreshMethod + '</listRefreshMethod>'}
	${object.liveAgentConfig == null ? '' : '<liveAgentConfig>' + LiveAgentConfig(object.liveAgentConfig, true) + '</liveAgentConfig>'}
	${object.logo == null ? '' : '<logo>' + object.logo + '</logo>'}
	${object.primaryTabColor == null ? '' : '<primaryTabColor>' + object.primaryTabColor + '</primaryTabColor>'}
	${object.pushNotifications == null ? '' : '<pushNotifications>' + PushNotifications(object.pushNotifications, true) + '</pushNotifications>'}
	${object.saveUserSessions == null ? '' : '<saveUserSessions>' + object.saveUserSessions + '</saveUserSessions>'}
	${object.tab == null ? '' : object.tab.map(p => '<tab>' + p + '</tab>')}
	${object.workspaceMappings == null ? '' : '<workspaceMappings>' + WorkspaceMappings(object.workspaceMappings, true) + '</workspaceMappings>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}