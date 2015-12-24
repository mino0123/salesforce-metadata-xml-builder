const DashboardComponentSize = require('./DashboardComponentSize');
const DashboardComponent = require('./DashboardComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardComponentSection>';
  var rootTagEnd = '</DashboardComponentSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.columnSize == null ? '' : '<columnSize>' + DashboardComponentSize(object.columnSize, true) + '</columnSize>'}
	${object.components == null ? '' : object.components.map(p => '<components>' + DashboardComponent(p, true) + '</components>').join('')}
${rootTagEnd}`;
}