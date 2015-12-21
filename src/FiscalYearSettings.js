
module.exports = (object, asChild) => {
  var rootTagStart = '<FiscalYearSettings>';
  var rootTagEnd = '</FiscalYearSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fiscalYearNameBasedOn == null ? '' : '<fiscalYearNameBasedOn>' + object.fiscalYearNameBasedOn + '</fiscalYearNameBasedOn>'}
	${object.startMonth == null ? '' : '<startMonth>' + object.startMonth + '</startMonth>'}
${rootTagEnd}`;
}