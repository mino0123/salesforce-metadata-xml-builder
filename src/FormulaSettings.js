
module.exports = (object, asChild) => {
  var rootTagStart = '<FormulaSettings>';
  var rootTagEnd = '</FormulaSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableDSTAwareDatevalue == null ? '' : '<enableDSTAwareDatevalue>' + object.enableDSTAwareDatevalue + '</enableDSTAwareDatevalue>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}