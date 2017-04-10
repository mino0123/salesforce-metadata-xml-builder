const DashboardComponentColumnType = require('./DashboardComponentColumnType');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentColumn>';
  var rootTagEnd = '</DashboardComponentColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.breakPoint1 == null ? '' : '<breakPoint1>' + object.breakPoint1 + '</breakPoint1>'}
	${object.breakPoint2 == null ? '' : '<breakPoint2>' + object.breakPoint2 + '</breakPoint2>'}
	${object.breakPointOrder == null ? '' : '<breakPointOrder>' + object.breakPointOrder + '</breakPointOrder>'}
	${object.highRangeColor == null ? '' : '<highRangeColor>' + object.highRangeColor + '</highRangeColor>'}
	${object.lowRangeColor == null ? '' : '<lowRangeColor>' + object.lowRangeColor + '</lowRangeColor>'}
	${object.midRangeColor == null ? '' : '<midRangeColor>' + object.midRangeColor + '</midRangeColor>'}
	${object.reportColumn == null ? '' : '<reportColumn>' + object.reportColumn + '</reportColumn>'}
	${object.showTotal == null ? '' : '<showTotal>' + object.showTotal + '</showTotal>'}
	${object.type == null ? '' : '<type>' + DashboardComponentColumnType(object.type, true) + '</type>'}
${rootTagEnd}`;
}