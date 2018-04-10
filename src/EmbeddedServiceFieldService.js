
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceFieldService>';
  var rootTagEnd = '</EmbeddedServiceFieldService>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appointmentBookingFlowName == null ? '' : '<appointmentBookingFlowName>' + object.appointmentBookingFlowName + '</appointmentBookingFlowName>'}
	${object.cancelApptBookingFlowName == null ? '' : '<cancelApptBookingFlowName>' + object.cancelApptBookingFlowName + '</cancelApptBookingFlowName>'}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.fieldServiceConfirmCardImg == null ? '' : '<fieldServiceConfirmCardImg>' + object.fieldServiceConfirmCardImg + '</fieldServiceConfirmCardImg>'}
	${object.fieldServiceHomeImg == null ? '' : '<fieldServiceHomeImg>' + object.fieldServiceHomeImg + '</fieldServiceHomeImg>'}
	${object.fieldServiceLogoImg == null ? '' : '<fieldServiceLogoImg>' + object.fieldServiceLogoImg + '</fieldServiceLogoImg>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.modifyApptBookingFlowName == null ? '' : '<modifyApptBookingFlowName>' + object.modifyApptBookingFlowName + '</modifyApptBookingFlowName>'}
	${object.shouldShowExistingAppointment == null ? '' : '<shouldShowExistingAppointment>' + object.shouldShowExistingAppointment + '</shouldShowExistingAppointment>'}
	${object.shouldShowNewAppointment == null ? '' : '<shouldShowNewAppointment>' + object.shouldShowNewAppointment + '</shouldShowNewAppointment>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}