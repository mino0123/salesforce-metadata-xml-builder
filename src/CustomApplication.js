const AppActionOverride = require('./AppActionOverride');
const AppBrand = require('./AppBrand');
const ServiceCloudConsoleConfig = require('./ServiceCloudConsoleConfig');
const FormFactor = require('./FormFactor');
const NavType = require('./NavType');
const AppPreferences = require('./AppPreferences');
const AppProfileActionOverride = require('./AppProfileActionOverride');
const UiType = require('./UiType');
const AppWorkspaceConfig = require('./AppWorkspaceConfig');

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
	${object.consoleConfig == null ? '' : '<consoleConfig>' + ServiceCloudConsoleConfig(object.consoleConfig, true) + '</consoleConfig>'}
	${object.defaultLandingTab == null ? '' : '<defaultLandingTab>' + object.defaultLandingTab + '</defaultLandingTab>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.formFactors == null ? '' : object.formFactors.map(p => '<formFactors>' + FormFactor(p, true) + '</formFactors>').join('')}
	${object.isNavAutoTempTabsDisabled == null ? '' : '<isNavAutoTempTabsDisabled>' + object.isNavAutoTempTabsDisabled + '</isNavAutoTempTabsDisabled>'}
	${object.isNavPersonalizationDisabled == null ? '' : '<isNavPersonalizationDisabled>' + object.isNavPersonalizationDisabled + '</isNavPersonalizationDisabled>'}
	${object.isServiceCloudConsole == null ? '' : '<isServiceCloudConsole>' + object.isServiceCloudConsole + '</isServiceCloudConsole>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.logo == null ? '' : '<logo>' + object.logo + '</logo>'}
	${object.navType == null ? '' : '<navType>' + NavType(object.navType, true) + '</navType>'}
	${object.preferences == null ? '' : '<preferences>' + AppPreferences(object.preferences, true) + '</preferences>'}
	${object.profileActionOverrides == null ? '' : object.profileActionOverrides.map(p => '<profileActionOverrides>' + AppProfileActionOverride(p, true) + '</profileActionOverrides>').join('')}
	${object.setupExperience == null ? '' : '<setupExperience>' + object.setupExperience + '</setupExperience>'}
	${object.subscriberTabs == null ? '' : object.subscriberTabs.map(p => '<subscriberTabs>' + p + '</subscriberTabs>').join('')}
	${object.tabs == null ? '' : object.tabs.map(p => '<tabs>' + p + '</tabs>').join('')}
	${object.uiType == null ? '' : '<uiType>' + UiType(object.uiType, true) + '</uiType>'}
	${object.utilityBar == null ? '' : '<utilityBar>' + object.utilityBar + '</utilityBar>'}
	${object.workspaceConfig == null ? '' : '<workspaceConfig>' + AppWorkspaceConfig(object.workspaceConfig, true) + '</workspaceConfig>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}