const DashboardGridComponent = require('./DashboardGridComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardGridLayout>';
  var rootTagEnd = '</DashboardGridLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dashboardGridComponents == null ? '' : object.dashboardGridComponents.map(p => '<dashboardGridComponents>' + DashboardGridComponent(p, true) + '</dashboardGridComponents>').join('')}
	${object.numberOfColumns == null ? '' : '<numberOfColumns>' + object.numberOfColumns + '</numberOfColumns>'}
	${object.rowHeight == null ? '' : '<rowHeight>' + object.rowHeight + '</rowHeight>'}
${rootTagEnd}`;
}