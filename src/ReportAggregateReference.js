
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportAggregateReference>';
  var rootTagEnd = '</ReportAggregateReference>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregate == null ? '' : '<aggregate>' + object.aggregate + '</aggregate>'}
${rootTagEnd}`;
}