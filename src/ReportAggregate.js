const ReportAggregateDatatype = require('./ReportAggregateDatatype');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportAggregate>';
  var rootTagEnd = '</ReportAggregate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.acrossGroupingContext == null ? '' : '<acrossGroupingContext>' + object.acrossGroupingContext + '</acrossGroupingContext>'}
	${object.calculatedFormula == null ? '' : '<calculatedFormula>' + object.calculatedFormula + '</calculatedFormula>'}
	${object.datatype == null ? '' : '<datatype>' + ReportAggregateDatatype(object.datatype, true) + '</datatype>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.downGroupingContext == null ? '' : '<downGroupingContext>' + object.downGroupingContext + '</downGroupingContext>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.isCrossBlock == null ? '' : '<isCrossBlock>' + object.isCrossBlock + '</isCrossBlock>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.reportType == null ? '' : '<reportType>' + object.reportType + '</reportType>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
${rootTagEnd}`;
}