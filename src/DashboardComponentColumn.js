const DashboardComponentColumnType = require('./DashboardComponentColumnType');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentColumn>';
  var rootTagEnd = '</DashboardComponentColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.reportColumn == null ? '' : '<reportColumn>' + object.reportColumn + '</reportColumn>'}
	${object.showTotal == null ? '' : '<showTotal>' + object.showTotal + '</showTotal>'}
	${object.type == null ? '' : '<type>' + DashboardComponentColumnType(object.type, true) + '</type>'}
${rootTagEnd}`;
}