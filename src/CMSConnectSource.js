const CMSConnectAsset = require('./CMSConnectAsset');
const CMSConnectLanguage = require('./CMSConnectLanguage');
const CMSConnectPersonalization = require('./CMSConnectPersonalization');
const CMSConnectResourceType = require('./CMSConnectResourceType');
const CMSSourceConnectionType = require('./CMSSourceConnectionType');
const CMSConnectionStatus = require('./CMSConnectionStatus');
const CMSConnectionSourceType = require('./CMSConnectionSourceType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectSource>';
  var rootTagEnd = '</CMSConnectSource>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cmsConnectAsset == null ? '' : object.cmsConnectAsset.map(p => '<cmsConnectAsset>' + CMSConnectAsset(p, true) + '</cmsConnectAsset>').join('')}
	${object.cmsConnectLanguage == null ? '' : object.cmsConnectLanguage.map(p => '<cmsConnectLanguage>' + CMSConnectLanguage(p, true) + '</cmsConnectLanguage>').join('')}
	${object.cmsConnectPersonalization == null ? '' : '<cmsConnectPersonalization>' + CMSConnectPersonalization(object.cmsConnectPersonalization, true) + '</cmsConnectPersonalization>'}
	${object.cmsConnectResourceType == null ? '' : object.cmsConnectResourceType.map(p => '<cmsConnectResourceType>' + CMSConnectResourceType(p, true) + '</cmsConnectResourceType>').join('')}
	${object.connectionType == null ? '' : '<connectionType>' + CMSSourceConnectionType(object.connectionType, true) + '</connectionType>'}
	${object.cssScope == null ? '' : '<cssScope>' + object.cssScope + '</cssScope>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.languageEnabled == null ? '' : '<languageEnabled>' + object.languageEnabled + '</languageEnabled>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.namedCredential == null ? '' : '<namedCredential>' + object.namedCredential + '</namedCredential>'}
	${object.personalizationEnabled == null ? '' : '<personalizationEnabled>' + object.personalizationEnabled + '</personalizationEnabled>'}
	${object.rootPath == null ? '' : '<rootPath>' + object.rootPath + '</rootPath>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
	${object.status == null ? '' : '<status>' + CMSConnectionStatus(object.status, true) + '</status>'}
	${object.type == null ? '' : '<type>' + CMSConnectionSourceType(object.type, true) + '</type>'}
	${object.websiteUrl == null ? '' : '<websiteUrl>' + object.websiteUrl + '</websiteUrl>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}