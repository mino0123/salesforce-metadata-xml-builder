const DevicePlatformType = require('./DevicePlatformType');

module.exports = (object, asChild) => {
  var rootTagStart = '<MobileApplicationDetail>';
  var rootTagEnd = '</MobileApplicationDetail>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.applicationBinaryFile == null ? '' : '<applicationBinaryFile>' + object.applicationBinaryFile + '</applicationBinaryFile>'}
	${object.applicationBinaryFileName == null ? '' : '<applicationBinaryFileName>' + object.applicationBinaryFileName + '</applicationBinaryFileName>'}
	${object.applicationBundleIdentifier == null ? '' : '<applicationBundleIdentifier>' + object.applicationBundleIdentifier + '</applicationBundleIdentifier>'}
	${object.applicationFileLength == null ? '' : '<applicationFileLength>' + object.applicationFileLength + '</applicationFileLength>'}
	${object.applicationIconFile == null ? '' : '<applicationIconFile>' + object.applicationIconFile + '</applicationIconFile>'}
	${object.applicationIconFileName == null ? '' : '<applicationIconFileName>' + object.applicationIconFileName + '</applicationIconFileName>'}
	${object.applicationInstallUrl == null ? '' : '<applicationInstallUrl>' + object.applicationInstallUrl + '</applicationInstallUrl>'}
	${object.devicePlatform == null ? '' : '<devicePlatform>' + DevicePlatformType(object.devicePlatform, true) + '</devicePlatform>'}
	${object.deviceType == null ? '' : '<deviceType>' + object.deviceType + '</deviceType>'}
	${object.minimumOsVersion == null ? '' : '<minimumOsVersion>' + object.minimumOsVersion + '</minimumOsVersion>'}
	${object.privateApp == null ? '' : '<privateApp>' + object.privateApp + '</privateApp>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}