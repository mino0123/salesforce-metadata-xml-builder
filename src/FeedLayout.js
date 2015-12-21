const FeedLayoutFilterPosition = require('./FeedLayoutFilterPosition');
const FeedLayoutFilter = require('./FeedLayoutFilter');
const FeedLayoutComponent = require('./FeedLayoutComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<FeedLayout>';
  var rootTagEnd = '</FeedLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autocollapsePublisher == null ? '' : '<autocollapsePublisher>' + object.autocollapsePublisher + '</autocollapsePublisher>'}
	${object.compactFeed == null ? '' : '<compactFeed>' + object.compactFeed + '</compactFeed>'}
	${object.feedFilterPosition == null ? '' : '<feedFilterPosition>' + FeedLayoutFilterPosition(object.feedFilterPosition, true) + '</feedFilterPosition>'}
	${object.feedFilters == null ? '' : object.feedFilters.map(p => '<feedFilters>' + FeedLayoutFilter(p, true) + '</feedFilters>')}
	${object.fullWidthFeed == null ? '' : '<fullWidthFeed>' + object.fullWidthFeed + '</fullWidthFeed>'}
	${object.hideSidebar == null ? '' : '<hideSidebar>' + object.hideSidebar + '</hideSidebar>'}
	${object.highlightExternalFeedItems == null ? '' : '<highlightExternalFeedItems>' + object.highlightExternalFeedItems + '</highlightExternalFeedItems>'}
	${object.leftComponents == null ? '' : object.leftComponents.map(p => '<leftComponents>' + FeedLayoutComponent(p, true) + '</leftComponents>')}
	${object.rightComponents == null ? '' : object.rightComponents.map(p => '<rightComponents>' + FeedLayoutComponent(p, true) + '</rightComponents>')}
	${object.useInlineFiltersInConsole == null ? '' : '<useInlineFiltersInConsole>' + object.useInlineFiltersInConsole + '</useInlineFiltersInConsole>'}
${rootTagEnd}`;
}