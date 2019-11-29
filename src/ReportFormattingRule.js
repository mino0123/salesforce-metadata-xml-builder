const ReportSummaryType = require('./ReportSummaryType');
const ReportFormattingRuleValue = require('./ReportFormattingRuleValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportFormattingRule>';
  var rootTagEnd = '</ReportFormattingRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregate == null ? '' : '<aggregate>' + ReportSummaryType(object.aggregate, true) + '</aggregate>'}
	${object.columnName == null ? '' : '<columnName>' + object.columnName + '</columnName>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + ReportFormattingRuleValue(p, true) + '</values>').join('')}
${rootTagEnd}`;
}