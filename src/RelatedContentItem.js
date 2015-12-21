const LayoutItem = require('./LayoutItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<RelatedContentItem>';
  var rootTagEnd = '</RelatedContentItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.layoutItem == null ? '' : '<layoutItem>' + LayoutItem(object.layoutItem, true) + '</layoutItem>'}
${rootTagEnd}`;
}