const DashboardComponent = require('./DashboardComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardGridComponent>';
  var rootTagEnd = '</DashboardGridComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.colSpan == null ? '' : '<colSpan>' + object.colSpan + '</colSpan>'}
	${object.columnIndex == null ? '' : '<columnIndex>' + object.columnIndex + '</columnIndex>'}
	${object.dashboardComponent == null ? '' : '<dashboardComponent>' + DashboardComponent(object.dashboardComponent, true) + '</dashboardComponent>'}
	${object.rowIndex == null ? '' : '<rowIndex>' + object.rowIndex + '</rowIndex>'}
	${object.rowSpan == null ? '' : '<rowSpan>' + object.rowSpan + '</rowSpan>'}
${rootTagEnd}`;
}