const ReportAggrType = require('./ReportAggrType');
const UserDateGranularity = require('./UserDateGranularity');
const SortOrder = require('./SortOrder');
const ReportSortType = require('./ReportSortType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportGrouping>';
  var rootTagEnd = '</ReportGrouping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregateType == null ? '' : '<aggregateType>' + ReportAggrType(object.aggregateType, true) + '</aggregateType>'}
	${object.dateGranularity == null ? '' : '<dateGranularity>' + UserDateGranularity(object.dateGranularity, true) + '</dateGranularity>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.sortByName == null ? '' : '<sortByName>' + object.sortByName + '</sortByName>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + SortOrder(object.sortOrder, true) + '</sortOrder>'}
	${object.sortType == null ? '' : '<sortType>' + ReportSortType(object.sortType, true) + '</sortType>'}
${rootTagEnd}`;
}