const SortOrder = require('./SortOrder');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeSortField>';
  var rootTagEnd = '</StrategyNodeSortField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.nullsFirst == null ? '' : '<nullsFirst>' + object.nullsFirst + '</nullsFirst>'}
	${object.order == null ? '' : '<order>' + SortOrder(object.order, true) + '</order>'}
${rootTagEnd}`;
}