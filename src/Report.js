const ReportAggregate = require('./ReportAggregate');
const Report = require('./Report');
const ReportBlockInfo = require('./ReportBlockInfo');
const ReportBucketField = require('./ReportBucketField');
const ReportChart = require('./ReportChart');
const ReportColorRange = require('./ReportColorRange');
const ReportColumn = require('./ReportColumn');
const ReportCrossFilter = require('./ReportCrossFilter');
const CurrencyIsoCode = require('./CurrencyIsoCode');
const ReportCustomDetailFormula = require('./ReportCustomDetailFormula');
const ReportDataCategoryFilter = require('./ReportDataCategoryFilter');
const ReportFilter = require('./ReportFilter');
const ReportFormat = require('./ReportFormat');
const ReportFormattingRule = require('./ReportFormattingRule');
const ReportGrouping = require('./ReportGrouping');
const ReportHistoricalSelector = require('./ReportHistoricalSelector');
const ReportParam = require('./ReportParam');
const SortOrder = require('./SortOrder');
const ReportTimeFrameFilter = require('./ReportTimeFrameFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<Report>';
  var rootTagEnd = '</Report>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregates == null ? '' : object.aggregates.map(p => '<aggregates>' + ReportAggregate(p, true) + '</aggregates>').join('')}
	${object.block == null ? '' : object.block.map(p => '<block>' + Report(p, true) + '</block>').join('')}
	${object.blockInfo == null ? '' : '<blockInfo>' + ReportBlockInfo(object.blockInfo, true) + '</blockInfo>'}
	${object.buckets == null ? '' : object.buckets.map(p => '<buckets>' + ReportBucketField(p, true) + '</buckets>').join('')}
	${object.chart == null ? '' : '<chart>' + ReportChart(object.chart, true) + '</chart>'}
	${object.colorRanges == null ? '' : object.colorRanges.map(p => '<colorRanges>' + ReportColorRange(p, true) + '</colorRanges>').join('')}
	${object.columns == null ? '' : object.columns.map(p => '<columns>' + ReportColumn(p, true) + '</columns>').join('')}
	${object.crossFilters == null ? '' : object.crossFilters.map(p => '<crossFilters>' + ReportCrossFilter(p, true) + '</crossFilters>').join('')}
	${object.currency == null ? '' : '<currency>' + CurrencyIsoCode(object.currency, true) + '</currency>'}
	${object.customDetailFormulas == null ? '' : object.customDetailFormulas.map(p => '<customDetailFormulas>' + ReportCustomDetailFormula(p, true) + '</customDetailFormulas>').join('')}
	${object.dataCategoryFilters == null ? '' : object.dataCategoryFilters.map(p => '<dataCategoryFilters>' + ReportDataCategoryFilter(p, true) + '</dataCategoryFilters>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.division == null ? '' : '<division>' + object.division + '</division>'}
	${object.filter == null ? '' : '<filter>' + ReportFilter(object.filter, true) + '</filter>'}
	${object.folderName == null ? '' : '<folderName>' + object.folderName + '</folderName>'}
	${object.format == null ? '' : '<format>' + ReportFormat(object.format, true) + '</format>'}
	${object.formattingRules == null ? '' : object.formattingRules.map(p => '<formattingRules>' + ReportFormattingRule(p, true) + '</formattingRules>').join('')}
	${object.groupingsAcross == null ? '' : object.groupingsAcross.map(p => '<groupingsAcross>' + ReportGrouping(p, true) + '</groupingsAcross>').join('')}
	${object.groupingsDown == null ? '' : object.groupingsDown.map(p => '<groupingsDown>' + ReportGrouping(p, true) + '</groupingsDown>').join('')}
	${object.historicalSelector == null ? '' : '<historicalSelector>' + ReportHistoricalSelector(object.historicalSelector, true) + '</historicalSelector>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.numSubscriptions == null ? '' : '<numSubscriptions>' + object.numSubscriptions + '</numSubscriptions>'}
	${object.params == null ? '' : object.params.map(p => '<params>' + ReportParam(p, true) + '</params>').join('')}
	${object.reportType == null ? '' : '<reportType>' + object.reportType + '</reportType>'}
	${object.roleHierarchyFilter == null ? '' : '<roleHierarchyFilter>' + object.roleHierarchyFilter + '</roleHierarchyFilter>'}
	${object.rowLimit == null ? '' : '<rowLimit>' + object.rowLimit + '</rowLimit>'}
	${object.scope == null ? '' : '<scope>' + object.scope + '</scope>'}
	${object.showCurrentDate == null ? '' : '<showCurrentDate>' + object.showCurrentDate + '</showCurrentDate>'}
	${object.showDetails == null ? '' : '<showDetails>' + object.showDetails + '</showDetails>'}
	${object.showGrandTotal == null ? '' : '<showGrandTotal>' + object.showGrandTotal + '</showGrandTotal>'}
	${object.showSubTotals == null ? '' : '<showSubTotals>' + object.showSubTotals + '</showSubTotals>'}
	${object.sortColumn == null ? '' : '<sortColumn>' + object.sortColumn + '</sortColumn>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
	${object.territoryHierarchyFilter == null ? '' : '<territoryHierarchyFilter>' + object.territoryHierarchyFilter + '</territoryHierarchyFilter>'}
	${object.timeFrameFilter == null ? '' : '<timeFrameFilter>' + ReportTimeFrameFilter(object.timeFrameFilter, true) + '</timeFrameFilter>'}
	${object.userFilter == null ? '' : '<userFilter>' + object.userFilter + '</userFilter>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}