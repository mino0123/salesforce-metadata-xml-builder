const CommunityCustomThemeLayoutType = require('./CommunityCustomThemeLayoutType');
const CommunityThemeSetting = require('./CommunityThemeSetting');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityThemeDefinition>';
  var rootTagEnd = '</CommunityThemeDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customThemeLayoutType == null ? '' : object.customThemeLayoutType.map(p => '<customThemeLayoutType>' + CommunityCustomThemeLayoutType(p, true) + '</customThemeLayoutType>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enableExtendedCleanUpOnDelete == null ? '' : '<enableExtendedCleanUpOnDelete>' + object.enableExtendedCleanUpOnDelete + '</enableExtendedCleanUpOnDelete>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.themeSetting == null ? '' : object.themeSetting.map(p => '<themeSetting>' + CommunityThemeSetting(p, true) + '</themeSetting>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}