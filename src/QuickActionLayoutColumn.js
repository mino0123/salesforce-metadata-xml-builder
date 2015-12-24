const QuickActionLayoutItem = require('./QuickActionLayoutItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionLayoutColumn>';
  var rootTagEnd = '</QuickActionLayoutColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.quickActionLayoutItems == null ? '' : object.quickActionLayoutItems.map(p => '<quickActionLayoutItems>' + QuickActionLayoutItem(p, true) + '</quickActionLayoutItems>').join('')}
${rootTagEnd}`;
}