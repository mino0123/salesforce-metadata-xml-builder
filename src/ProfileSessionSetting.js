const SessionSecurityLevel = require('./SessionSecurityLevel');

module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileSessionSetting>';
  var rootTagEnd = '</ProfileSessionSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.forceLogout == null ? '' : '<forceLogout>' + object.forceLogout + '</forceLogout>'}
	${object.profile == null ? '' : '<profile>' + object.profile + '</profile>'}
	${object.requiredSessionLevel == null ? '' : '<requiredSessionLevel>' + SessionSecurityLevel(object.requiredSessionLevel, true) + '</requiredSessionLevel>'}
	${object.sessionTimeout == null ? '' : '<sessionTimeout>' + object.sessionTimeout + '</sessionTimeout>'}
	${object.sessionTimeoutWarning == null ? '' : '<sessionTimeoutWarning>' + object.sessionTimeoutWarning + '</sessionTimeoutWarning>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}