const CommunityThemeLayoutType = require('./CommunityThemeLayoutType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityThemeSetting>';
  var rootTagEnd = '</CommunityThemeSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customThemeLayoutType == null ? '' : '<customThemeLayoutType>' + object.customThemeLayoutType + '</customThemeLayoutType>'}
	${object.themeLayout == null ? '' : '<themeLayout>' + object.themeLayout + '</themeLayout>'}
	${object.themeLayoutType == null ? '' : '<themeLayoutType>' + CommunityThemeLayoutType(object.themeLayoutType, true) + '</themeLayoutType>'}
${rootTagEnd}`;
}