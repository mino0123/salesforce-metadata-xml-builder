const DescribeMetadataObject = require('./DescribeMetadataObject');

module.exports = (object, asChild) => {
  var rootTagStart = '<DescribeMetadataResult>';
  var rootTagEnd = '</DescribeMetadataResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.metadataObjects == null ? '' : object.metadataObjects.map(p => '<metadataObjects>' + DescribeMetadataObject(p, true) + '</metadataObjects>')}
	${object.organizationNamespace == null ? '' : '<organizationNamespace>' + object.organizationNamespace + '</organizationNamespace>'}
	${object.partialSaveAllowed == null ? '' : '<partialSaveAllowed>' + object.partialSaveAllowed + '</partialSaveAllowed>'}
	${object.testRequired == null ? '' : '<testRequired>' + object.testRequired + '</testRequired>'}
${rootTagEnd}`;
}