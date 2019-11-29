
module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentGroupingSort>';
  var rootTagEnd = '</DashboardComponentGroupingSort>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.groupingLevel == null ? '' : '<groupingLevel>' + object.groupingLevel + '</groupingLevel>'}
	${object.inheritedReportGroupingSort == null ? '' : '<inheritedReportGroupingSort>' + object.inheritedReportGroupingSort + '</inheritedReportGroupingSort>'}
	${object.sortColumn == null ? '' : '<sortColumn>' + object.sortColumn + '</sortColumn>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
${rootTagEnd}`;
}