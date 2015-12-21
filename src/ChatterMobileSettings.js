
module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterMobileSettings>';
  var rootTagEnd = '</ChatterMobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enablePushNotifications == null ? '' : '<enablePushNotifications>' + object.enablePushNotifications + '</enablePushNotifications>'}
${rootTagEnd}`;
}