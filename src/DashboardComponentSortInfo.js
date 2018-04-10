
module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentSortInfo>';
  var rootTagEnd = '</DashboardComponentSortInfo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sortColumn == null ? '' : '<sortColumn>' + object.sortColumn + '</sortColumn>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
${rootTagEnd}`;
}