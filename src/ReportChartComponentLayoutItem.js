const ReportChartComponentSize = require('./ReportChartComponentSize');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportChartComponentLayoutItem>';
  var rootTagEnd = '</ReportChartComponentLayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cacheData == null ? '' : '<cacheData>' + object.cacheData + '</cacheData>'}
	${object.contextFilterableField == null ? '' : '<contextFilterableField>' + object.contextFilterableField + '</contextFilterableField>'}
	${object.error == null ? '' : '<error>' + object.error + '</error>'}
	${object.hideOnError == null ? '' : '<hideOnError>' + object.hideOnError + '</hideOnError>'}
	${object.includeContext == null ? '' : '<includeContext>' + object.includeContext + '</includeContext>'}
	${object.reportName == null ? '' : '<reportName>' + object.reportName + '</reportName>'}
	${object.showTitle == null ? '' : '<showTitle>' + object.showTitle + '</showTitle>'}
	${object.size == null ? '' : '<size>' + ReportChartComponentSize(object.size, true) + '</size>'}
${rootTagEnd}`;
}