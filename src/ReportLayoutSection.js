const ReportTypeColumn = require('./ReportTypeColumn');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportLayoutSection>';
  var rootTagEnd = '</ReportLayoutSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.columns == null ? '' : object.columns.map(p => '<columns>' + ReportTypeColumn(p, true) + '</columns>')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
${rootTagEnd}`;
}