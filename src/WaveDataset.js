
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveDataset>';
  var rootTagEnd = '</WaveDataset>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.templateAssetSourceName == null ? '' : '<templateAssetSourceName>' + object.templateAssetSourceName + '</templateAssetSourceName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}