
module.exports = (object, asChild) => {
  var rootTagStart = '<TabLimitConfig>';
  var rootTagEnd = '</TabLimitConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.maxNumberOfPrimaryTabs == null ? '' : '<maxNumberOfPrimaryTabs>' + object.maxNumberOfPrimaryTabs + '</maxNumberOfPrimaryTabs>'}
	${object.maxNumberOfSubTabs == null ? '' : '<maxNumberOfSubTabs>' + object.maxNumberOfSubTabs + '</maxNumberOfSubTabs>'}
${rootTagEnd}`;
}