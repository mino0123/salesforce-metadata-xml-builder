const LayoutColumn = require('./LayoutColumn');
const LayoutSectionStyle = require('./LayoutSectionStyle');

module.exports = (object, asChild) => {
  var rootTagStart = '<LayoutSection>';
  var rootTagEnd = '</LayoutSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customLabel == null ? '' : '<customLabel>' + object.customLabel + '</customLabel>'}
	${object.detailHeading == null ? '' : '<detailHeading>' + object.detailHeading + '</detailHeading>'}
	${object.editHeading == null ? '' : '<editHeading>' + object.editHeading + '</editHeading>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.layoutColumns == null ? '' : object.layoutColumns.map(p => '<layoutColumns>' + LayoutColumn(p, true) + '</layoutColumns>')}
	${object.style == null ? '' : '<style>' + LayoutSectionStyle(object.style, true) + '</style>'}
${rootTagEnd}`;
}