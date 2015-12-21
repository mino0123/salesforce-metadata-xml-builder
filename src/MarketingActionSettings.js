
module.exports = (object, asChild) => {
  var rootTagStart = '<MarketingActionSettings>';
  var rootTagEnd = '</MarketingActionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMarketingAction == null ? '' : '<enableMarketingAction>' + object.enableMarketingAction + '</enableMarketingAction>'}
${rootTagEnd}`;
}