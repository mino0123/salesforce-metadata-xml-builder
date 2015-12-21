const SummaryLayoutItem = require('./SummaryLayoutItem');
const SummaryLayoutStyle = require('./SummaryLayoutStyle');

module.exports = (object, asChild) => {
  var rootTagStart = '<SummaryLayout>';
  var rootTagEnd = '</SummaryLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.sizeX == null ? '' : '<sizeX>' + object.sizeX + '</sizeX>'}
	${object.sizeY == null ? '' : '<sizeY>' + object.sizeY + '</sizeY>'}
	${object.sizeZ == null ? '' : '<sizeZ>' + object.sizeZ + '</sizeZ>'}
	${object.summaryLayoutItems == null ? '' : object.summaryLayoutItems.map(p => '<summaryLayoutItems>' + SummaryLayoutItem(p, true) + '</summaryLayoutItems>')}
	${object.summaryLayoutStyle == null ? '' : '<summaryLayoutStyle>' + SummaryLayoutStyle(object.summaryLayoutStyle, true) + '</summaryLayoutStyle>'}
${rootTagEnd}`;
}