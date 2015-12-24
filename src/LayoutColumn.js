const LayoutItem = require('./LayoutItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<LayoutColumn>';
  var rootTagEnd = '</LayoutColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.layoutItems == null ? '' : object.layoutItems.map(p => '<layoutItems>' + LayoutItem(p, true) + '</layoutItems>').join('')}
	${object.reserved == null ? '' : '<reserved>' + object.reserved + '</reserved>'}
${rootTagEnd}`;
}