const FeedLayoutFilterType = require('./FeedLayoutFilterType');
const FeedItemType = require('./FeedItemType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FeedLayoutFilter>';
  var rootTagEnd = '</FeedLayoutFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.feedFilterName == null ? '' : '<feedFilterName>' + object.feedFilterName + '</feedFilterName>'}
	${object.feedFilterType == null ? '' : '<feedFilterType>' + FeedLayoutFilterType(object.feedFilterType, true) + '</feedFilterType>'}
	${object.feedItemType == null ? '' : '<feedItemType>' + FeedItemType(object.feedItemType, true) + '</feedItemType>'}
${rootTagEnd}`;
}