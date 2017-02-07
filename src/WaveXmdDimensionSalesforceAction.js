
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdDimensionSalesforceAction>';
  var rootTagEnd = '</WaveXmdDimensionSalesforceAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.salesforceActionName == null ? '' : '<salesforceActionName>' + object.salesforceActionName + '</salesforceActionName>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}