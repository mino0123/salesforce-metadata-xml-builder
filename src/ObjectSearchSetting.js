
module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectSearchSetting>';
  var rootTagEnd = '</ObjectSearchSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enhancedLookupEnabled == null ? '' : '<enhancedLookupEnabled>' + object.enhancedLookupEnabled + '</enhancedLookupEnabled>'}
	${object.lookupAutoCompleteEnabled == null ? '' : '<lookupAutoCompleteEnabled>' + object.lookupAutoCompleteEnabled + '</lookupAutoCompleteEnabled>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.resultsPerPageCount == null ? '' : '<resultsPerPageCount>' + object.resultsPerPageCount + '</resultsPerPageCount>'}
${rootTagEnd}`;
}