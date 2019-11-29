
module.exports = (object, asChild) => {
  var rootTagStart = '<SystemNotificationSettings>';
  var rootTagEnd = '</SystemNotificationSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.disableDowntimeNotifications == null ? '' : '<disableDowntimeNotifications>' + object.disableDowntimeNotifications + '</disableDowntimeNotifications>'}
	${object.disableMaintenanceNotifications == null ? '' : '<disableMaintenanceNotifications>' + object.disableMaintenanceNotifications + '</disableMaintenanceNotifications>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}