
module.exports = (object, asChild) => {
  var rootTagStart = '<AnalyticsCloudComponentLayoutItem>';
  var rootTagEnd = '</AnalyticsCloudComponentLayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetType == null ? '' : '<assetType>' + object.assetType + '</assetType>'}
	${object.devName == null ? '' : '<devName>' + object.devName + '</devName>'}
	${object.error == null ? '' : '<error>' + object.error + '</error>'}
	${object.filter == null ? '' : '<filter>' + object.filter + '</filter>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.hideOnError == null ? '' : '<hideOnError>' + object.hideOnError + '</hideOnError>'}
	${object.showSharing == null ? '' : '<showSharing>' + object.showSharing + '</showSharing>'}
	${object.showTitle == null ? '' : '<showTitle>' + object.showTitle + '</showTitle>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}