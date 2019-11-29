
module.exports = (object, asChild) => {
  var rootTagStart = '<NotificationsSettings>';
  var rootTagEnd = '</NotificationsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableMobileAppPushNotifications == null ? '' : '<enableMobileAppPushNotifications>' + object.enableMobileAppPushNotifications + '</enableMobileAppPushNotifications>'}
	${object.enableNotifications == null ? '' : '<enableNotifications>' + object.enableNotifications + '</enableNotifications>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}