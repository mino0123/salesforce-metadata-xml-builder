const PlatformCacheType = require('./PlatformCacheType');

module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformCachePartitionType>';
  var rootTagEnd = '</PlatformCachePartitionType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allocatedCapacity == null ? '' : '<allocatedCapacity>' + object.allocatedCapacity + '</allocatedCapacity>'}
	${object.allocatedPurchasedCapacity == null ? '' : '<allocatedPurchasedCapacity>' + object.allocatedPurchasedCapacity + '</allocatedPurchasedCapacity>'}
	${object.cacheType == null ? '' : '<cacheType>' + PlatformCacheType(object.cacheType, true) + '</cacheType>'}
${rootTagEnd}`;
}