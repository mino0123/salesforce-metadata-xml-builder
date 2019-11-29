const CommunityThemeBundleInfo = require('./CommunityThemeBundleInfo');
const CommunityCustomThemeLayoutType = require('./CommunityCustomThemeLayoutType');
const CommunityThemeRouteOverride = require('./CommunityThemeRouteOverride');
const CommunityThemeSetting = require('./CommunityThemeSetting');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityThemeDefinition>';
  var rootTagEnd = '</CommunityThemeDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.bundlesInfo == null ? '' : object.bundlesInfo.map(p => '<bundlesInfo>' + CommunityThemeBundleInfo(p, true) + '</bundlesInfo>').join('')}
	${object.customThemeLayoutType == null ? '' : object.customThemeLayoutType.map(p => '<customThemeLayoutType>' + CommunityCustomThemeLayoutType(p, true) + '</customThemeLayoutType>').join('')}
	${object.defaultBrandingSet == null ? '' : '<defaultBrandingSet>' + object.defaultBrandingSet + '</defaultBrandingSet>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enableExtendedCleanUpOnDelete == null ? '' : '<enableExtendedCleanUpOnDelete>' + object.enableExtendedCleanUpOnDelete + '</enableExtendedCleanUpOnDelete>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.publisher == null ? '' : '<publisher>' + object.publisher + '</publisher>'}
	${object.themeRouteOverride == null ? '' : object.themeRouteOverride.map(p => '<themeRouteOverride>' + CommunityThemeRouteOverride(p, true) + '</themeRouteOverride>').join('')}
	${object.themeSetting == null ? '' : object.themeSetting.map(p => '<themeSetting>' + CommunityThemeSetting(p, true) + '</themeSetting>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}