
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveLens>';
  var rootTagEnd = '</WaveLens>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.datasets == null ? '' : object.datasets.map(p => '<datasets>' + p + '</datasets>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.templateAssetSourceName == null ? '' : '<templateAssetSourceName>' + object.templateAssetSourceName + '</templateAssetSourceName>'}
	${object.visualizationType == null ? '' : '<visualizationType>' + object.visualizationType + '</visualizationType>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}