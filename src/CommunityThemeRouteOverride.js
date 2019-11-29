const CommunityThemeLayoutType = require('./CommunityThemeLayoutType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityThemeRouteOverride>';
  var rootTagEnd = '</CommunityThemeRouteOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customThemeLayoutType == null ? '' : '<customThemeLayoutType>' + object.customThemeLayoutType + '</customThemeLayoutType>'}
	${object.pageAttributes == null ? '' : '<pageAttributes>' + object.pageAttributes + '</pageAttributes>'}
	${object.pageType == null ? '' : '<pageType>' + object.pageType + '</pageType>'}
	${object.themeLayoutType == null ? '' : '<themeLayoutType>' + CommunityThemeLayoutType(object.themeLayoutType, true) + '</themeLayoutType>'}
${rootTagEnd}`;
}