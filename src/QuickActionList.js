const QuickActionListItem = require('./QuickActionListItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionList>';
  var rootTagEnd = '</QuickActionList>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.quickActionListItems == null ? '' : object.quickActionListItems.map(p => '<quickActionListItems>' + QuickActionListItem(p, true) + '</quickActionListItems>').join('')}
${rootTagEnd}`;
}