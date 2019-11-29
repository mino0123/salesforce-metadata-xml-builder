const FiscalYearSettings = require('./FiscalYearSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<CompanySettings>';
  var rootTagEnd = '</CompanySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCustomFiscalYear == null ? '' : '<enableCustomFiscalYear>' + object.enableCustomFiscalYear + '</enableCustomFiscalYear>'}
	${object.fiscalYear == null ? '' : '<fiscalYear>' + FiscalYearSettings(object.fiscalYear, true) + '</fiscalYear>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}