
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveDashboard>';
  var rootTagEnd = '</WaveDashboard>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.templateAssetSourceName == null ? '' : '<templateAssetSourceName>' + object.templateAssetSourceName + '</templateAssetSourceName>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}