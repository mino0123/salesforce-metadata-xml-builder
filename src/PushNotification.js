
module.exports = (object, asChild) => {
  var rootTagStart = '<PushNotification>';
  var rootTagEnd = '</PushNotification>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldNames == null ? '' : object.fieldNames.map(p => '<fieldNames>' + p + '</fieldNames>').join('')}
	${object.objectName == null ? '' : '<objectName>' + object.objectName + '</objectName>'}
${rootTagEnd}`;
}