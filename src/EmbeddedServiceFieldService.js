
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceFieldService>';
  var rootTagEnd = '</EmbeddedServiceFieldService>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appointmentBookingFlowName == null ? '' : '<appointmentBookingFlowName>' + object.appointmentBookingFlowName + '</appointmentBookingFlowName>'}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}