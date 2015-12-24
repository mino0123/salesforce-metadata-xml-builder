const ReportSummaryType = require('./ReportSummaryType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportColumn>';
  var rootTagEnd = '</ReportColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregateTypes == null ? '' : object.aggregateTypes.map(p => '<aggregateTypes>' + ReportSummaryType(p, true) + '</aggregateTypes>').join('')}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.reverseColors == null ? '' : '<reverseColors>' + object.reverseColors + '</reverseColors>'}
	${object.showChanges == null ? '' : '<showChanges>' + object.showChanges + '</showChanges>'}
${rootTagEnd}`;
}