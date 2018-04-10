
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveDataflow>';
  var rootTagEnd = '</WaveDataflow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataflowType == null ? '' : '<dataflowType>' + object.dataflowType + '</dataflowType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}