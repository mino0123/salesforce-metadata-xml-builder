const DashboardComponentGroupingSort = require('./DashboardComponentGroupingSort');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentGroupingSortProperties>';
  var rootTagEnd = '</DashboardComponentGroupingSortProperties>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.groupingSorts == null ? '' : object.groupingSorts.map(p => '<groupingSorts>' + DashboardComponentGroupingSort(p, true) + '</groupingSorts>').join('')}
${rootTagEnd}`;
}