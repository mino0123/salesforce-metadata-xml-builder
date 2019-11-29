
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceAppointmentSettings>';
  var rootTagEnd = '</EmbeddedServiceAppointmentSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appointmentConfirmImg == null ? '' : '<appointmentConfirmImg>' + object.appointmentConfirmImg + '</appointmentConfirmImg>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.homeImg == null ? '' : '<homeImg>' + object.homeImg + '</homeImg>'}
	${object.logoImg == null ? '' : '<logoImg>' + object.logoImg + '</logoImg>'}
	${object.shouldShowExistingAppointment == null ? '' : '<shouldShowExistingAppointment>' + object.shouldShowExistingAppointment + '</shouldShowExistingAppointment>'}
	${object.shouldShowNewAppointment == null ? '' : '<shouldShowNewAppointment>' + object.shouldShowNewAppointment + '</shouldShowNewAppointment>'}
${rootTagEnd}`;
}