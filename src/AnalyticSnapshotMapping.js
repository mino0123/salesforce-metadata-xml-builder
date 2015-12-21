const ReportSummaryType = require('./ReportSummaryType');
const ReportJobSourceTypes = require('./ReportJobSourceTypes');

module.exports = (object, asChild) => {
  var rootTagStart = '<AnalyticSnapshotMapping>';
  var rootTagEnd = '</AnalyticSnapshotMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregateType == null ? '' : '<aggregateType>' + ReportSummaryType(object.aggregateType, true) + '</aggregateType>'}
	${object.sourceField == null ? '' : '<sourceField>' + object.sourceField + '</sourceField>'}
	${object.sourceType == null ? '' : '<sourceType>' + ReportJobSourceTypes(object.sourceType, true) + '</sourceType>'}
	${object.targetField == null ? '' : '<targetField>' + object.targetField + '</targetField>'}
${rootTagEnd}`;
}