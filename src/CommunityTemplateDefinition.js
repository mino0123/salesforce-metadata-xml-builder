const CommunityTemplateBundleInfo = require('./CommunityTemplateBundleInfo');
const CommunityTemplateCategory = require('./CommunityTemplateCategory');
const CommunityTemplatePageSetting = require('./CommunityTemplatePageSetting');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityTemplateDefinition>';
  var rootTagEnd = '</CommunityTemplateDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.bundlesInfo == null ? '' : object.bundlesInfo.map(p => '<bundlesInfo>' + CommunityTemplateBundleInfo(p, true) + '</bundlesInfo>').join('')}
	${object.category == null ? '' : '<category>' + CommunityTemplateCategory(object.category, true) + '</category>'}
	${object.defaultThemeDefinition == null ? '' : '<defaultThemeDefinition>' + object.defaultThemeDefinition + '</defaultThemeDefinition>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enableExtendedCleanUpOnDelete == null ? '' : '<enableExtendedCleanUpOnDelete>' + object.enableExtendedCleanUpOnDelete + '</enableExtendedCleanUpOnDelete>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.pageSetting == null ? '' : object.pageSetting.map(p => '<pageSetting>' + CommunityTemplatePageSetting(p, true) + '</pageSetting>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}