const ReportBucketFieldSourceValue = require('./ReportBucketFieldSourceValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportBucketFieldValue>';
  var rootTagEnd = '</ReportBucketFieldValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sourceValues == null ? '' : object.sourceValues.map(p => '<sourceValues>' + ReportBucketFieldSourceValue(p, true) + '</sourceValues>')}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}