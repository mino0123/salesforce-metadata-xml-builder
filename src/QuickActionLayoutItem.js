const UiBehavior = require('./UiBehavior');

module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionLayoutItem>';
  var rootTagEnd = '</QuickActionLayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.emptySpace == null ? '' : '<emptySpace>' + object.emptySpace + '</emptySpace>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.uiBehavior == null ? '' : '<uiBehavior>' + UiBehavior(object.uiBehavior, true) + '</uiBehavior>'}
${rootTagEnd}`;
}