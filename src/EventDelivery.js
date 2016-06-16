const EventParameterMap = require('./EventParameterMap');
const EventDeliveryType = require('./EventDeliveryType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EventDelivery>';
  var rootTagEnd = '</EventDelivery>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.eventParameters == null ? '' : object.eventParameters.map(p => '<eventParameters>' + EventParameterMap(p, true) + '</eventParameters>').join('')}
	${object.eventSubscription == null ? '' : '<eventSubscription>' + object.eventSubscription + '</eventSubscription>'}
	${object.referenceData == null ? '' : '<referenceData>' + object.referenceData + '</referenceData>'}
	${object.type == null ? '' : '<type>' + EventDeliveryType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}