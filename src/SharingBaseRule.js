const AccountSharingRuleSettings = require('./AccountSharingRuleSettings');
const SharedTo = require('./SharedTo');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingBaseRule>';
  var rootTagEnd = '</SharingBaseRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessLevel == null ? '' : '<accessLevel>' + object.accessLevel + '</accessLevel>'}
	${object.accountSettings == null ? '' : '<accountSettings>' + AccountSharingRuleSettings(object.accountSettings, true) + '</accountSettings>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + SharedTo(object.sharedTo, true) + '</sharedTo>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}