
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomNotificationType>';
  var rootTagEnd = '</CustomNotificationType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customNotifTypeName == null ? '' : '<customNotifTypeName>' + object.customNotifTypeName + '</customNotifTypeName>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.desktop == null ? '' : '<desktop>' + object.desktop + '</desktop>'}
	${object.email == null ? '' : '<email>' + object.email + '</email>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.mobile == null ? '' : '<mobile>' + object.mobile + '</mobile>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}