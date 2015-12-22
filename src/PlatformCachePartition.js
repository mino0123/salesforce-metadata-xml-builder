const PlatformCachePartitionType = require('./PlatformCachePartitionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformCachePartition>';
  var rootTagEnd = '</PlatformCachePartition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isDefaultPartition == null ? '' : '<isDefaultPartition>' + object.isDefaultPartition + '</isDefaultPartition>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.platformCachePartitionTypes == null ? '' : object.platformCachePartitionTypes.map(p => '<platformCachePartitionTypes>' + PlatformCachePartitionType(p, true) + '</platformCachePartitionTypes>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}