const EventParameterMap = require('./EventParameterMap');

module.exports = (object, asChild) => {
  var rootTagStart = '<EventSubscription>';
  var rootTagEnd = '</EventSubscription>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.eventParameters == null ? '' : object.eventParameters.map(p => '<eventParameters>' + EventParameterMap(p, true) + '</eventParameters>').join('')}
	${object.eventType == null ? '' : '<eventType>' + object.eventType + '</eventType>'}
	${object.referenceData == null ? '' : '<referenceData>' + object.referenceData + '</referenceData>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}