
module.exports = (object, asChild) => {
  var rootTagStart = '<QuoteSettings>';
  var rootTagEnd = '</QuoteSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableQuote == null ? '' : '<enableQuote>' + object.enableQuote + '</enableQuote>'}
	${object.enableQuotesWithoutOppEnabled == null ? '' : '<enableQuotesWithoutOppEnabled>' + object.enableQuotesWithoutOppEnabled + '</enableQuotesWithoutOppEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}