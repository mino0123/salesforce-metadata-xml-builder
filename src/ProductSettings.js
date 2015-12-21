
module.exports = (object, asChild) => {
  var rootTagStart = '<ProductSettings>';
  var rootTagEnd = '</ProductSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCascadeActivateToRelatedPrices == null ? '' : '<enableCascadeActivateToRelatedPrices>' + object.enableCascadeActivateToRelatedPrices + '</enableCascadeActivateToRelatedPrices>'}
	${object.enableQuantitySchedule == null ? '' : '<enableQuantitySchedule>' + object.enableQuantitySchedule + '</enableQuantitySchedule>'}
	${object.enableRevenueSchedule == null ? '' : '<enableRevenueSchedule>' + object.enableRevenueSchedule + '</enableRevenueSchedule>'}
${rootTagEnd}`;
}