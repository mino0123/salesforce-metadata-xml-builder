
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveRecipe>';
  var rootTagEnd = '</WaveRecipe>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataflow == null ? '' : '<dataflow>' + object.dataflow + '</dataflow>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.securityPredicate == null ? '' : '<securityPredicate>' + object.securityPredicate + '</securityPredicate>'}
	${object.targetDatasetAlias == null ? '' : '<targetDatasetAlias>' + object.targetDatasetAlias + '</targetDatasetAlias>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}