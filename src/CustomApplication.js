const AppActionOverride = require('./AppActionOverride');
const AppBrand = require('./AppBrand');
const CustomApplicationComponents = require('./CustomApplicationComponents');
const DomainWhitelist = require('./DomainWhitelist');
const FormFactor = require('./FormFactor');
const KeyboardShortcuts = require('./KeyboardShortcuts');
const ListPlacement = require('./ListPlacement');
const LiveAgentConfig = require('./LiveAgentConfig');
const NavType = require('./NavType');
const PushNotifications = require('./PushNotifications');
const TabLimitConfig = require('./TabLimitConfig');
const UiType = require('./UiType');
const WorkspaceMappings = require('./WorkspaceMappings');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomApplication>';
  var rootTagEnd = '</CustomApplication>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionOverrides == null ? '' : object.actionOverrides.map(p => '<actionOverrides>' + AppActionOverride(p, true) + '</actionOverrides>').join('')}
	${object.brand == null ? '' : '<brand>' + AppBrand(object.brand, true) + '</brand>'}
	${object.customApplicationComponents == null ? '' : '<customApplicationComponents>' + CustomApplicationComponents(object.customApplicationComponents, true) + '</customApplicationComponents>'}
	${object.defaultLandingTab == null ? '' : '<defaultLandingTab>' + object.defaultLandingTab + '</defaultLandingTab>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.detailPageRefreshMethod == null ? '' : '<detailPageRefreshMethod>' + object.detailPageRefreshMethod + '</detailPageRefreshMethod>'}
	${object.domainWhitelist == null ? '' : '<domainWhitelist>' + DomainWhitelist(object.domainWhitelist, true) + '</domainWhitelist>'}
	${object.enableCustomizeMyTabs == null ? '' : '<enableCustomizeMyTabs>' + object.enableCustomizeMyTabs + '</enableCustomizeMyTabs>'}
	${object.enableKeyboardShortcuts == null ? '' : '<enableKeyboardShortcuts>' + object.enableKeyboardShortcuts + '</enableKeyboardShortcuts>'}
	${object.enableListViewHover == null ? '' : '<enableListViewHover>' + object.enableListViewHover + '</enableListViewHover>'}
	${object.enableListViewReskin == null ? '' : '<enableListViewReskin>' + object.enableListViewReskin + '</enableListViewReskin>'}
	${object.enableMultiMonitorComponents == null ? '' : '<enableMultiMonitorComponents>' + object.enableMultiMonitorComponents + '</enableMultiMonitorComponents>'}
	${object.enablePinTabs == null ? '' : '<enablePinTabs>' + object.enablePinTabs + '</enablePinTabs>'}
	${object.enableTabHover == null ? '' : '<enableTabHover>' + object.enableTabHover + '</enableTabHover>'}
	${object.enableTabLimits == null ? '' : '<enableTabLimits>' + object.enableTabLimits + '</enableTabLimits>'}
	${object.footerColor == null ? '' : '<footerColor>' + object.footerColor + '</footerColor>'}
	${object.formFactors == null ? '' : object.formFactors.map(p => '<formFactors>' + FormFactor(p, true) + '</formFactors>').join('')}
	${object.headerColor == null ? '' : '<headerColor>' + object.headerColor + '</headerColor>'}
	${object.isServiceCloudConsole == null ? '' : '<isServiceCloudConsole>' + object.isServiceCloudConsole + '</isServiceCloudConsole>'}
	${object.keyboardShortcuts == null ? '' : '<keyboardShortcuts>' + KeyboardShortcuts(object.keyboardShortcuts, true) + '</keyboardShortcuts>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.listPlacement == null ? '' : '<listPlacement>' + ListPlacement(object.listPlacement, true) + '</listPlacement>'}
	${object.listRefreshMethod == null ? '' : '<listRefreshMethod>' + object.listRefreshMethod + '</listRefreshMethod>'}
	${object.liveAgentConfig == null ? '' : '<liveAgentConfig>' + LiveAgentConfig(object.liveAgentConfig, true) + '</liveAgentConfig>'}
	${object.logo == null ? '' : '<logo>' + object.logo + '</logo>'}
	${object.navType == null ? '' : '<navType>' + NavType(object.navType, true) + '</navType>'}
	${object.primaryTabColor == null ? '' : '<primaryTabColor>' + object.primaryTabColor + '</primaryTabColor>'}
	${object.pushNotifications == null ? '' : '<pushNotifications>' + PushNotifications(object.pushNotifications, true) + '</pushNotifications>'}
	${object.saveUserSessions == null ? '' : '<saveUserSessions>' + object.saveUserSessions + '</saveUserSessions>'}
	${object.tab == null ? '' : object.tab.map(p => '<tab>' + p + '</tab>').join('')}
	${object.tabLimitConfig == null ? '' : '<tabLimitConfig>' + TabLimitConfig(object.tabLimitConfig, true) + '</tabLimitConfig>'}
	${object.uiType == null ? '' : '<uiType>' + UiType(object.uiType, true) + '</uiType>'}
	${object.utilityBar == null ? '' : '<utilityBar>' + object.utilityBar + '</utilityBar>'}
	${object.workspaceMappings == null ? '' : '<workspaceMappings>' + WorkspaceMappings(object.workspaceMappings, true) + '</workspaceMappings>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}