
module.exports = (object, asChild) => {
  var rootTagStart = '<MarketingActionSettings>';
  var rootTagEnd = '</MarketingActionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMarketingAction == null ? '' : '<enableMarketingAction>' + object.enableMarketingAction + '</enableMarketingAction>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}