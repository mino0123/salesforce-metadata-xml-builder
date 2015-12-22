const SharedTo = require('./SharedTo');
const AccountSharingRuleSettings = require('./AccountSharingRuleSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingOwnerRule>';
  var rootTagEnd = '</SharingOwnerRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sharedFrom == null ? '' : '<sharedFrom>' + SharedTo(object.sharedFrom, true) + '</sharedFrom>'}
	${object.accessLevel == null ? '' : '<accessLevel>' + object.accessLevel + '</accessLevel>'}
	${object.accountSettings == null ? '' : '<accountSettings>' + AccountSharingRuleSettings(object.accountSettings, true) + '</accountSettings>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + SharedTo(object.sharedTo, true) + '</sharedTo>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}