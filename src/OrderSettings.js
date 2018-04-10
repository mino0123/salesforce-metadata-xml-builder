
module.exports = (object, asChild) => {
  var rootTagStart = '<OrderSettings>';
  var rootTagEnd = '</OrderSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableNegativeQuantity == null ? '' : '<enableNegativeQuantity>' + object.enableNegativeQuantity + '</enableNegativeQuantity>'}
	${object.enableOrders == null ? '' : '<enableOrders>' + object.enableOrders + '</enableOrders>'}
	${object.enableReductionOrders == null ? '' : '<enableReductionOrders>' + object.enableReductionOrders + '</enableReductionOrders>'}
	${object.enableZeroQuantity == null ? '' : '<enableZeroQuantity>' + object.enableZeroQuantity + '</enableZeroQuantity>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}