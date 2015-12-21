const ReportSummaryType = require('./ReportSummaryType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportColorRange>';
  var rootTagEnd = '</ReportColorRange>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregate == null ? '' : '<aggregate>' + ReportSummaryType(object.aggregate, true) + '</aggregate>'}
	${object.columnName == null ? '' : '<columnName>' + object.columnName + '</columnName>'}
	${object.highBreakpoint == null ? '' : '<highBreakpoint>' + object.highBreakpoint + '</highBreakpoint>'}
	${object.highColor == null ? '' : '<highColor>' + object.highColor + '</highColor>'}
	${object.lowBreakpoint == null ? '' : '<lowBreakpoint>' + object.lowBreakpoint + '</lowBreakpoint>'}
	${object.lowColor == null ? '' : '<lowColor>' + object.lowColor + '</lowColor>'}
	${object.midColor == null ? '' : '<midColor>' + object.midColor + '</midColor>'}
${rootTagEnd}`;
}