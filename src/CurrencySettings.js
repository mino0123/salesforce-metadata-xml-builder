
module.exports = (object, asChild) => {
  var rootTagStart = '<CurrencySettings>';
  var rootTagEnd = '</CurrencySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCurrencyEffectiveDates == null ? '' : '<enableCurrencyEffectiveDates>' + object.enableCurrencyEffectiveDates + '</enableCurrencyEffectiveDates>'}
	${object.enableCurrencySymbolWithMultiCurrency == null ? '' : '<enableCurrencySymbolWithMultiCurrency>' + object.enableCurrencySymbolWithMultiCurrency + '</enableCurrencySymbolWithMultiCurrency>'}
	${object.enableMultiCurrency == null ? '' : '<enableMultiCurrency>' + object.enableMultiCurrency + '</enableMultiCurrency>'}
	${object.isMultiCurrencyActivationAllowed == null ? '' : '<isMultiCurrencyActivationAllowed>' + object.isMultiCurrencyActivationAllowed + '</isMultiCurrencyActivationAllowed>'}
	${object.isParenCurrencyConvDisabled == null ? '' : '<isParenCurrencyConvDisabled>' + object.isParenCurrencyConvDisabled + '</isParenCurrencyConvDisabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}