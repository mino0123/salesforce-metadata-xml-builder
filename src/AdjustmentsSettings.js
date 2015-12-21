
module.exports = (object, asChild) => {
  var rootTagStart = '<AdjustmentsSettings>';
  var rootTagEnd = '</AdjustmentsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAdjustments == null ? '' : '<enableAdjustments>' + object.enableAdjustments + '</enableAdjustments>'}
	${object.enableOwnerAdjustments == null ? '' : '<enableOwnerAdjustments>' + object.enableOwnerAdjustments + '</enableOwnerAdjustments>'}
${rootTagEnd}`;
}