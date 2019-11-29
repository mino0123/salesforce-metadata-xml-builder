
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldServiceSettings>';
  var rootTagEnd = '</FieldServiceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.capacityUsageCalcClassId == null ? '' : '<capacityUsageCalcClassId>' + object.capacityUsageCalcClassId + '</capacityUsageCalcClassId>'}
	${object.doesAllowEditSaForCrew == null ? '' : '<doesAllowEditSaForCrew>' + object.doesAllowEditSaForCrew + '</doesAllowEditSaForCrew>'}
	${object.doesShareSaParentWoWithAr == null ? '' : '<doesShareSaParentWoWithAr>' + object.doesShareSaParentWoWithAr + '</doesShareSaParentWoWithAr>'}
	${object.doesShareSaWithAr == null ? '' : '<doesShareSaWithAr>' + object.doesShareSaWithAr + '</doesShareSaWithAr>'}
	${object.enableWorkOrders == null ? '' : '<enableWorkOrders>' + object.enableWorkOrders + '</enableWorkOrders>'}
	${object.fieldServiceNotificationsOrgPref == null ? '' : '<fieldServiceNotificationsOrgPref>' + object.fieldServiceNotificationsOrgPref + '</fieldServiceNotificationsOrgPref>'}
	${object.fieldServiceOrgPref == null ? '' : '<fieldServiceOrgPref>' + object.fieldServiceOrgPref + '</fieldServiceOrgPref>'}
	${object.isGeoCodeSyncEnabled == null ? '' : '<isGeoCodeSyncEnabled>' + object.isGeoCodeSyncEnabled + '</isGeoCodeSyncEnabled>'}
	${object.isLocationHistoryEnabled == null ? '' : '<isLocationHistoryEnabled>' + object.isLocationHistoryEnabled + '</isLocationHistoryEnabled>'}
	${object.serviceAppointmentsDueDateOffsetOrgValue == null ? '' : '<serviceAppointmentsDueDateOffsetOrgValue>' + object.serviceAppointmentsDueDateOffsetOrgValue + '</serviceAppointmentsDueDateOffsetOrgValue>'}
	${object.workOrderLineItemSearchFields == null ? '' : object.workOrderLineItemSearchFields.map(p => '<workOrderLineItemSearchFields>' + p + '</workOrderLineItemSearchFields>').join('')}
	${object.workOrderSearchFields == null ? '' : object.workOrderSearchFields.map(p => '<workOrderSearchFields>' + p + '</workOrderSearchFields>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}