const DashboardFilterOperation = require('./DashboardFilterOperation');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardFilterOption>';
  var rootTagEnd = '</DashboardFilterOption>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.operator == null ? '' : '<operator>' + DashboardFilterOperation(object.operator, true) + '</operator>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + p + '</values>').join('')}
${rootTagEnd}`;
}