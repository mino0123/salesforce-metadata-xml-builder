
module.exports = (object, asChild) => {
  var rootTagStart = '<DescribeMetadataObject>';
  var rootTagEnd = '</DescribeMetadataObject>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.childXmlNames == null ? '' : object.childXmlNames.map(p => '<childXmlNames>' + p + '</childXmlNames>')}
	${object.directoryName == null ? '' : '<directoryName>' + object.directoryName + '</directoryName>'}
	${object.inFolder == null ? '' : '<inFolder>' + object.inFolder + '</inFolder>'}
	${object.metaFile == null ? '' : '<metaFile>' + object.metaFile + '</metaFile>'}
	${object.suffix == null ? '' : '<suffix>' + object.suffix + '</suffix>'}
	${object.xmlName == null ? '' : '<xmlName>' + object.xmlName + '</xmlName>'}
${rootTagEnd}`;
}