
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportFormattingRuleValue>';
  var rootTagEnd = '</ReportFormattingRuleValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.backgroundColor == null ? '' : '<backgroundColor>' + object.backgroundColor + '</backgroundColor>'}
	${object.rangeUpperBound == null ? '' : '<rangeUpperBound>' + object.rangeUpperBound + '</rangeUpperBound>'}
${rootTagEnd}`;
}