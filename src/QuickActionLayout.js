const LayoutSectionStyle = require('./LayoutSectionStyle');
const QuickActionLayoutColumn = require('./QuickActionLayoutColumn');

module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionLayout>';
  var rootTagEnd = '</QuickActionLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.layoutSectionStyle == null ? '' : '<layoutSectionStyle>' + LayoutSectionStyle(object.layoutSectionStyle, true) + '</layoutSectionStyle>'}
	${object.quickActionLayoutColumns == null ? '' : object.quickActionLayoutColumns.map(p => '<quickActionLayoutColumns>' + QuickActionLayoutColumn(p, true) + '</quickActionLayoutColumns>').join('')}
${rootTagEnd}`;
}