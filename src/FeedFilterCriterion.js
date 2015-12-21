const FeedItemType = require('./FeedItemType');
const FeedItemVisibility = require('./FeedItemVisibility');

module.exports = (object, asChild) => {
  var rootTagStart = '<FeedFilterCriterion>';
  var rootTagEnd = '</FeedFilterCriterion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.feedItemType == null ? '' : '<feedItemType>' + FeedItemType(object.feedItemType, true) + '</feedItemType>'}
	${object.feedItemVisibility == null ? '' : '<feedItemVisibility>' + FeedItemVisibility(object.feedItemVisibility, true) + '</feedItemVisibility>'}
	${object.relatedSObjectType == null ? '' : '<relatedSObjectType>' + object.relatedSObjectType + '</relatedSObjectType>'}
${rootTagEnd}`;
}