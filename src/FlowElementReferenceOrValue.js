
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowElementReferenceOrValue>';
  var rootTagEnd = '</FlowElementReferenceOrValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanValue == null ? '' : '<booleanValue>' + object.booleanValue + '</booleanValue>'}
	${object.dateTimeValue == null ? '' : '<dateTimeValue>' + object.dateTimeValue + '</dateTimeValue>'}
	${object.dateValue == null ? '' : '<dateValue>' + object.dateValue + '</dateValue>'}
	${object.elementReference == null ? '' : '<elementReference>' + object.elementReference + '</elementReference>'}
	${object.numberValue == null ? '' : '<numberValue>' + object.numberValue + '</numberValue>'}
	${object.stringValue == null ? '' : '<stringValue>' + object.stringValue + '</stringValue>'}
${rootTagEnd}`;
}