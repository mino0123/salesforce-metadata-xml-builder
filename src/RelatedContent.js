const RelatedContentItem = require('./RelatedContentItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<RelatedContent>';
  var rootTagEnd = '</RelatedContent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.relatedContentItems == null ? '' : object.relatedContentItems.map(p => '<relatedContentItems>' + RelatedContentItem(p, true) + '</relatedContentItems>').join('')}
${rootTagEnd}`;
}