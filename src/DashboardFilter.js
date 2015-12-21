const DashboardFilterOption = require('./DashboardFilterOption');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardFilter>';
  var rootTagEnd = '</DashboardFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dashboardFilterOptions == null ? '' : object.dashboardFilterOptions.map(p => '<dashboardFilterOptions>' + DashboardFilterOption(p, true) + '</dashboardFilterOptions>')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}