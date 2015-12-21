
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportParam>';
  var rootTagEnd = '</ReportParam>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}