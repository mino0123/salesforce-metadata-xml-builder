
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportBucketFieldSourceValue>';
  var rootTagEnd = '</ReportBucketFieldSourceValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.from == null ? '' : '<from>' + object.from + '</from>'}
	${object.sourceValue == null ? '' : '<sourceValue>' + object.sourceValue + '</sourceValue>'}
	${object.to == null ? '' : '<to>' + object.to + '</to>'}
${rootTagEnd}`;
}