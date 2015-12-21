const FiscalYearSettings = require('./FiscalYearSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<CompanySettings>';
  var rootTagEnd = '</CompanySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fiscalYear == null ? '' : '<fiscalYear>' + FiscalYearSettings(object.fiscalYear, true) + '</fiscalYear>'}
${rootTagEnd}`;
}