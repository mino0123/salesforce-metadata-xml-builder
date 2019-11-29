const FeedItemDisplayFormat = require('./FeedItemDisplayFormat');
const FeedItemType = require('./FeedItemType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FeedItemSettings>';
  var rootTagEnd = '</FeedItemSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.characterLimit == null ? '' : '<characterLimit>' + object.characterLimit + '</characterLimit>'}
	${object.displayFormat == null ? '' : '<displayFormat>' + FeedItemDisplayFormat(object.displayFormat, true) + '</displayFormat>'}
	${object.feedItemType == null ? '' : '<feedItemType>' + FeedItemType(object.feedItemType, true) + '</feedItemType>'}
${rootTagEnd}`;
}