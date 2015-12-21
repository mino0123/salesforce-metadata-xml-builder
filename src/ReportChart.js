const ChartBackgroundDirection = require('./ChartBackgroundDirection');
const ChartSummary = require('./ChartSummary');
const ChartType = require('./ChartType');
const ChartLegendPosition = require('./ChartLegendPosition');
const ChartPosition = require('./ChartPosition');
const ReportChartSize = require('./ReportChartSize');
const ChartRangeType = require('./ChartRangeType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportChart>';
  var rootTagEnd = '</ReportChart>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.backgroundColor1 == null ? '' : '<backgroundColor1>' + object.backgroundColor1 + '</backgroundColor1>'}
	${object.backgroundColor2 == null ? '' : '<backgroundColor2>' + object.backgroundColor2 + '</backgroundColor2>'}
	${object.backgroundFadeDir == null ? '' : '<backgroundFadeDir>' + ChartBackgroundDirection(object.backgroundFadeDir, true) + '</backgroundFadeDir>'}
	${object.chartSummaries == null ? '' : object.chartSummaries.map(p => '<chartSummaries>' + ChartSummary(p, true) + '</chartSummaries>')}
	${object.chartType == null ? '' : '<chartType>' + ChartType(object.chartType, true) + '</chartType>'}
	${object.enableHoverLabels == null ? '' : '<enableHoverLabels>' + object.enableHoverLabels + '</enableHoverLabels>'}
	${object.expandOthers == null ? '' : '<expandOthers>' + object.expandOthers + '</expandOthers>'}
	${object.groupingColumn == null ? '' : '<groupingColumn>' + object.groupingColumn + '</groupingColumn>'}
	${object.legendPosition == null ? '' : '<legendPosition>' + ChartLegendPosition(object.legendPosition, true) + '</legendPosition>'}
	${object.location == null ? '' : '<location>' + ChartPosition(object.location, true) + '</location>'}
	${object.secondaryGroupingColumn == null ? '' : '<secondaryGroupingColumn>' + object.secondaryGroupingColumn + '</secondaryGroupingColumn>'}
	${object.showAxisLabels == null ? '' : '<showAxisLabels>' + object.showAxisLabels + '</showAxisLabels>'}
	${object.showPercentage == null ? '' : '<showPercentage>' + object.showPercentage + '</showPercentage>'}
	${object.showTotal == null ? '' : '<showTotal>' + object.showTotal + '</showTotal>'}
	${object.showValues == null ? '' : '<showValues>' + object.showValues + '</showValues>'}
	${object.size == null ? '' : '<size>' + ReportChartSize(object.size, true) + '</size>'}
	${object.summaryAxisManualRangeEnd == null ? '' : '<summaryAxisManualRangeEnd>' + object.summaryAxisManualRangeEnd + '</summaryAxisManualRangeEnd>'}
	${object.summaryAxisManualRangeStart == null ? '' : '<summaryAxisManualRangeStart>' + object.summaryAxisManualRangeStart + '</summaryAxisManualRangeStart>'}
	${object.summaryAxisRange == null ? '' : '<summaryAxisRange>' + ChartRangeType(object.summaryAxisRange, true) + '</summaryAxisRange>'}
	${object.textColor == null ? '' : '<textColor>' + object.textColor + '</textColor>'}
	${object.textSize == null ? '' : '<textSize>' + object.textSize + '</textSize>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.titleColor == null ? '' : '<titleColor>' + object.titleColor + '</titleColor>'}
	${object.titleSize == null ? '' : '<titleSize>' + object.titleSize + '</titleSize>'}
${rootTagEnd}`;
}