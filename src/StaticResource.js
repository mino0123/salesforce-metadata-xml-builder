const StaticResourceCacheControl = require('./StaticResourceCacheControl');

module.exports = (object, asChild) => {
  var rootTagStart = '<StaticResource>';
  var rootTagEnd = '</StaticResource>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cacheControl == null ? '' : '<cacheControl>' + StaticResourceCacheControl(object.cacheControl, true) + '</cacheControl>'}
	${object.contentType == null ? '' : '<contentType>' + object.contentType + '</contentType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
${rootTagEnd}`;
}