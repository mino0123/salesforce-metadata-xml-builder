
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldServiceSettings>';
  var rootTagEnd = '</FieldServiceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldServiceNotificationsOrgPref == null ? '' : '<fieldServiceNotificationsOrgPref>' + object.fieldServiceNotificationsOrgPref + '</fieldServiceNotificationsOrgPref>'}
	${object.fieldServiceOrgPref == null ? '' : '<fieldServiceOrgPref>' + object.fieldServiceOrgPref + '</fieldServiceOrgPref>'}
	${object.serviceAppointmentsDueDateOffsetOrgValue == null ? '' : '<serviceAppointmentsDueDateOffsetOrgValue>' + object.serviceAppointmentsDueDateOffsetOrgValue + '</serviceAppointmentsDueDateOffsetOrgValue>'}
	${object.workOrderLineItemSearchFields == null ? '' : object.workOrderLineItemSearchFields.map(p => '<workOrderLineItemSearchFields>' + p + '</workOrderLineItemSearchFields>').join('')}
	${object.workOrderSearchFields == null ? '' : object.workOrderSearchFields.map(p => '<workOrderSearchFields>' + p + '</workOrderSearchFields>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}