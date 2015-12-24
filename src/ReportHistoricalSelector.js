
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportHistoricalSelector>';
  var rootTagEnd = '</ReportHistoricalSelector>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.snapshot == null ? '' : object.snapshot.map(p => '<snapshot>' + p + '</snapshot>').join('')}
${rootTagEnd}`;
}