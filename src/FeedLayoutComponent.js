const FeedLayoutComponentType = require('./FeedLayoutComponentType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FeedLayoutComponent>';
  var rootTagEnd = '</FeedLayoutComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentType == null ? '' : '<componentType>' + FeedLayoutComponentType(object.componentType, true) + '</componentType>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
${rootTagEnd}`;
}