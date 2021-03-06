const SortOrder = require('./SortOrder');

module.exports = (object, asChild) => {
  var rootTagStart = '<RelatedListItem>';
  var rootTagEnd = '</RelatedListItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customButtons == null ? '' : object.customButtons.map(p => '<customButtons>' + p + '</customButtons>').join('')}
	${object.excludeButtons == null ? '' : object.excludeButtons.map(p => '<excludeButtons>' + p + '</excludeButtons>').join('')}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>').join('')}
	${object.relatedList == null ? '' : '<relatedList>' + object.relatedList + '</relatedList>'}
	${object.sortField == null ? '' : '<sortField>' + object.sortField + '</sortField>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
${rootTagEnd}`;
}