const ReportSummaryType = require('./ReportSummaryType');
const ChartAxis = require('./ChartAxis');

module.exports = (object, asChild) => {
  var rootTagStart = '<ChartSummary>';
  var rootTagEnd = '</ChartSummary>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregate == null ? '' : '<aggregate>' + ReportSummaryType(object.aggregate, true) + '</aggregate>'}
	${object.axisBinding == null ? '' : '<axisBinding>' + ChartAxis(object.axisBinding, true) + '</axisBinding>'}
	${object.column == null ? '' : '<column>' + object.column + '</column>'}
${rootTagEnd}`;
}