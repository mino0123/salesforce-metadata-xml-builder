
module.exports = (object, asChild) => {
  var rootTagStart = '<PushNotification>';
  var rootTagEnd = '</PushNotification>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fieldNames == null ? '' : object.fieldNames.map(p => '<fieldNames>' + p + '</fieldNames>')}
	${object.objectName == null ? '' : '<objectName>' + object.objectName + '</objectName>'}
${rootTagEnd}`;
}