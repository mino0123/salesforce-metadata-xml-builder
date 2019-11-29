const ReportSummaryType = require('./ReportSummaryType');
const DashboardComponentFilter = require('./DashboardComponentFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardTableColumn>';
  var rootTagEnd = '</DashboardTableColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregateType == null ? '' : '<aggregateType>' + ReportSummaryType(object.aggregateType, true) + '</aggregateType>'}
	${object.calculatePercent == null ? '' : '<calculatePercent>' + object.calculatePercent + '</calculatePercent>'}
	${object.column == null ? '' : '<column>' + object.column + '</column>'}
	${object.decimalPlaces == null ? '' : '<decimalPlaces>' + object.decimalPlaces + '</decimalPlaces>'}
	${object.showSubTotal == null ? '' : '<showSubTotal>' + object.showSubTotal + '</showSubTotal>'}
	${object.showTotal == null ? '' : '<showTotal>' + object.showTotal + '</showTotal>'}
	${object.sortBy == null ? '' : '<sortBy>' + DashboardComponentFilter(object.sortBy, true) + '</sortBy>'}
${rootTagEnd}`;
}