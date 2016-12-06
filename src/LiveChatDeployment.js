const LiveChatDeploymentDomainWhitelist = require('./LiveChatDeploymentDomainWhitelist');

module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatDeployment>';
  var rootTagEnd = '</LiveChatDeployment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.brandingImage == null ? '' : '<brandingImage>' + object.brandingImage + '</brandingImage>'}
	${object.connectionTimeoutDuration == null ? '' : '<connectionTimeoutDuration>' + object.connectionTimeoutDuration + '</connectionTimeoutDuration>'}
	${object.connectionWarningDuration == null ? '' : '<connectionWarningDuration>' + object.connectionWarningDuration + '</connectionWarningDuration>'}
	${object.displayQueuePosition == null ? '' : '<displayQueuePosition>' + object.displayQueuePosition + '</displayQueuePosition>'}
	${object.domainWhiteList == null ? '' : '<domainWhiteList>' + LiveChatDeploymentDomainWhitelist(object.domainWhiteList, true) + '</domainWhiteList>'}
	${object.enablePrechatApi == null ? '' : '<enablePrechatApi>' + object.enablePrechatApi + '</enablePrechatApi>'}
	${object.enableTranscriptSave == null ? '' : '<enableTranscriptSave>' + object.enableTranscriptSave + '</enableTranscriptSave>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mobileBrandingImage == null ? '' : '<mobileBrandingImage>' + object.mobileBrandingImage + '</mobileBrandingImage>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.windowTitle == null ? '' : '<windowTitle>' + object.windowTitle + '</windowTitle>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}