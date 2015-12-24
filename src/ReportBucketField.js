const ReportBucketFieldType = require('./ReportBucketFieldType');
const ReportFormulaNullTreatment = require('./ReportFormulaNullTreatment');
const ReportBucketFieldValue = require('./ReportBucketFieldValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportBucketField>';
  var rootTagEnd = '</ReportBucketField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.bucketType == null ? '' : '<bucketType>' + ReportBucketFieldType(object.bucketType, true) + '</bucketType>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.nullTreatment == null ? '' : '<nullTreatment>' + ReportFormulaNullTreatment(object.nullTreatment, true) + '</nullTreatment>'}
	${object.otherBucketLabel == null ? '' : '<otherBucketLabel>' + object.otherBucketLabel + '</otherBucketLabel>'}
	${object.sourceColumnName == null ? '' : '<sourceColumnName>' + object.sourceColumnName + '</sourceColumnName>'}
	${object.useOther == null ? '' : '<useOther>' + object.useOther + '</useOther>'}
	${object.values == null ? '' : object.values.map(p => '<values>' + ReportBucketFieldValue(p, true) + '</values>').join('')}
${rootTagEnd}`;
}