
module.exports = (object, asChild) => {
  var rootTagStart = '<WebToCaseSettings>';
  var rootTagEnd = '</WebToCaseSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseOrigin == null ? '' : '<caseOrigin>' + object.caseOrigin + '</caseOrigin>'}
	${object.defaultResponseTemplate == null ? '' : '<defaultResponseTemplate>' + object.defaultResponseTemplate + '</defaultResponseTemplate>'}
	${object.enableWebToCase == null ? '' : '<enableWebToCase>' + object.enableWebToCase + '</enableWebToCase>'}
${rootTagEnd}`;
}