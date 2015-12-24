const PushNotification = require('./PushNotification');

module.exports = (object, asChild) => {
  var rootTagStart = '<PushNotifications>';
  var rootTagEnd = '</PushNotifications>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.pushNotification == null ? '' : object.pushNotification.map(p => '<pushNotification>' + PushNotification(p, true) + '</pushNotification>').join('')}
${rootTagEnd}`;
}