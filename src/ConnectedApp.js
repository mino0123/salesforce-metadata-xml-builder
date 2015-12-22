const ConnectedAppAttribute = require('./ConnectedAppAttribute');
const ConnectedAppCanvasConfig = require('./ConnectedAppCanvasConfig');
const ConnectedAppIpRange = require('./ConnectedAppIpRange');
const ConnectedAppMobileDetailConfig = require('./ConnectedAppMobileDetailConfig');
const ConnectedAppOauthConfig = require('./ConnectedAppOauthConfig');
const ConnectedAppSamlConfig = require('./ConnectedAppSamlConfig');

module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedApp>';
  var rootTagEnd = '</ConnectedApp>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.attributes == null ? '' : object.attributes.map(p => '<attributes>' + ConnectedAppAttribute(p, true) + '</attributes>')}
	${object.canvasConfig == null ? '' : '<canvasConfig>' + ConnectedAppCanvasConfig(object.canvasConfig, true) + '</canvasConfig>'}
	${object.contactEmail == null ? '' : '<contactEmail>' + object.contactEmail + '</contactEmail>'}
	${object.contactPhone == null ? '' : '<contactPhone>' + object.contactPhone + '</contactPhone>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.iconUrl == null ? '' : '<iconUrl>' + object.iconUrl + '</iconUrl>'}
	${object.infoUrl == null ? '' : '<infoUrl>' + object.infoUrl + '</infoUrl>'}
	${object.ipRanges == null ? '' : object.ipRanges.map(p => '<ipRanges>' + ConnectedAppIpRange(p, true) + '</ipRanges>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.logoUrl == null ? '' : '<logoUrl>' + object.logoUrl + '</logoUrl>'}
	${object.mobileAppConfig == null ? '' : '<mobileAppConfig>' + ConnectedAppMobileDetailConfig(object.mobileAppConfig, true) + '</mobileAppConfig>'}
	${object.mobileStartUrl == null ? '' : '<mobileStartUrl>' + object.mobileStartUrl + '</mobileStartUrl>'}
	${object.oauthConfig == null ? '' : '<oauthConfig>' + ConnectedAppOauthConfig(object.oauthConfig, true) + '</oauthConfig>'}
	${object.plugin == null ? '' : '<plugin>' + object.plugin + '</plugin>'}
	${object.samlConfig == null ? '' : '<samlConfig>' + ConnectedAppSamlConfig(object.samlConfig, true) + '</samlConfig>'}
	${object.startUrl == null ? '' : '<startUrl>' + object.startUrl + '</startUrl>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}