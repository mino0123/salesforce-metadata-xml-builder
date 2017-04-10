const ChartRangeType = require('./ChartRangeType');
const ChartSummary = require('./ChartSummary');
const DashboardComponentType = require('./DashboardComponentType');
const DashboardFilterColumn = require('./DashboardFilterColumn');
const DashboardTableColumn = require('./DashboardTableColumn');
const ChartUnits = require('./ChartUnits');
const DashboardFlexTableComponentProperties = require('./DashboardFlexTableComponentProperties');
const ChartLegendPosition = require('./ChartLegendPosition');
const DashboardComponentFilter = require('./DashboardComponentFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponent>';
  var rootTagEnd = '</DashboardComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autoselectColumnsFromReport == null ? '' : '<autoselectColumnsFromReport>' + object.autoselectColumnsFromReport + '</autoselectColumnsFromReport>'}
	${object.chartAxisRange == null ? '' : '<chartAxisRange>' + ChartRangeType(object.chartAxisRange, true) + '</chartAxisRange>'}
	${object.chartAxisRangeMax == null ? '' : '<chartAxisRangeMax>' + object.chartAxisRangeMax + '</chartAxisRangeMax>'}
	${object.chartAxisRangeMin == null ? '' : '<chartAxisRangeMin>' + object.chartAxisRangeMin + '</chartAxisRangeMin>'}
	${object.chartSummary == null ? '' : object.chartSummary.map(p => '<chartSummary>' + ChartSummary(p, true) + '</chartSummary>').join('')}
	${object.componentType == null ? '' : '<componentType>' + DashboardComponentType(object.componentType, true) + '</componentType>'}
	${object.dashboardFilterColumns == null ? '' : object.dashboardFilterColumns.map(p => '<dashboardFilterColumns>' + DashboardFilterColumn(p, true) + '</dashboardFilterColumns>').join('')}
	${object.dashboardTableColumn == null ? '' : object.dashboardTableColumn.map(p => '<dashboardTableColumn>' + DashboardTableColumn(p, true) + '</dashboardTableColumn>').join('')}
	${object.displayUnits == null ? '' : '<displayUnits>' + ChartUnits(object.displayUnits, true) + '</displayUnits>'}
	${object.drillDownUrl == null ? '' : '<drillDownUrl>' + object.drillDownUrl + '</drillDownUrl>'}
	${object.drillEnabled == null ? '' : '<drillEnabled>' + object.drillEnabled + '</drillEnabled>'}
	${object.drillToDetailEnabled == null ? '' : '<drillToDetailEnabled>' + object.drillToDetailEnabled + '</drillToDetailEnabled>'}
	${object.enableHover == null ? '' : '<enableHover>' + object.enableHover + '</enableHover>'}
	${object.expandOthers == null ? '' : '<expandOthers>' + object.expandOthers + '</expandOthers>'}
	${object.flexComponentProperties == null ? '' : '<flexComponentProperties>' + DashboardFlexTableComponentProperties(object.flexComponentProperties, true) + '</flexComponentProperties>'}
	${object.footer == null ? '' : '<footer>' + object.footer + '</footer>'}
	${object.gaugeMax == null ? '' : '<gaugeMax>' + object.gaugeMax + '</gaugeMax>'}
	${object.gaugeMin == null ? '' : '<gaugeMin>' + object.gaugeMin + '</gaugeMin>'}
	${object.groupingColumn == null ? '' : object.groupingColumn.map(p => '<groupingColumn>' + p + '</groupingColumn>').join('')}
	${object.header == null ? '' : '<header>' + object.header + '</header>'}
	${object.indicatorBreakpoint1 == null ? '' : '<indicatorBreakpoint1>' + object.indicatorBreakpoint1 + '</indicatorBreakpoint1>'}
	${object.indicatorBreakpoint2 == null ? '' : '<indicatorBreakpoint2>' + object.indicatorBreakpoint2 + '</indicatorBreakpoint2>'}
	${object.indicatorHighColor == null ? '' : '<indicatorHighColor>' + object.indicatorHighColor + '</indicatorHighColor>'}
	${object.indicatorLowColor == null ? '' : '<indicatorLowColor>' + object.indicatorLowColor + '</indicatorLowColor>'}
	${object.indicatorMiddleColor == null ? '' : '<indicatorMiddleColor>' + object.indicatorMiddleColor + '</indicatorMiddleColor>'}
	${object.legendPosition == null ? '' : '<legendPosition>' + ChartLegendPosition(object.legendPosition, true) + '</legendPosition>'}
	${object.maxValuesDisplayed == null ? '' : '<maxValuesDisplayed>' + object.maxValuesDisplayed + '</maxValuesDisplayed>'}
	${object.metricLabel == null ? '' : '<metricLabel>' + object.metricLabel + '</metricLabel>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.pageHeightInPixels == null ? '' : '<pageHeightInPixels>' + object.pageHeightInPixels + '</pageHeightInPixels>'}
	${object.report == null ? '' : '<report>' + object.report + '</report>'}
	${object.scontrol == null ? '' : '<scontrol>' + object.scontrol + '</scontrol>'}
	${object.scontrolHeightInPixels == null ? '' : '<scontrolHeightInPixels>' + object.scontrolHeightInPixels + '</scontrolHeightInPixels>'}
	${object.showPercentage == null ? '' : '<showPercentage>' + object.showPercentage + '</showPercentage>'}
	${object.showPicturesOnCharts == null ? '' : '<showPicturesOnCharts>' + object.showPicturesOnCharts + '</showPicturesOnCharts>'}
	${object.showPicturesOnTables == null ? '' : '<showPicturesOnTables>' + object.showPicturesOnTables + '</showPicturesOnTables>'}
	${object.showTotal == null ? '' : '<showTotal>' + object.showTotal + '</showTotal>'}
	${object.showValues == null ? '' : '<showValues>' + object.showValues + '</showValues>'}
	${object.sortBy == null ? '' : '<sortBy>' + DashboardComponentFilter(object.sortBy, true) + '</sortBy>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.useReportChart == null ? '' : '<useReportChart>' + object.useReportChart + '</useReportChart>'}
${rootTagEnd}`;
}