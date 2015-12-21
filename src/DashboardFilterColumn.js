
module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardFilterColumn>';
  var rootTagEnd = '</DashboardFilterColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.column == null ? '' : '<column>' + object.column + '</column>'}
${rootTagEnd}`;
}