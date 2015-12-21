const RelatedListItem = require('./RelatedListItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<MiniLayout>';
  var rootTagEnd = '</MiniLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>')}
	${object.relatedLists == null ? '' : object.relatedLists.map(p => '<relatedLists>' + RelatedListItem(p, true) + '</relatedLists>')}
${rootTagEnd}`;
}