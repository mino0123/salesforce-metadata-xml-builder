const NetworkAccess = require('./NetworkAccess');
const PasswordPolicies = require('./PasswordPolicies');
const SessionSettings = require('./SessionSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<SecuritySettings>';
  var rootTagEnd = '</SecuritySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.networkAccess == null ? '' : '<networkAccess>' + NetworkAccess(object.networkAccess, true) + '</networkAccess>'}
	${object.passwordPolicies == null ? '' : '<passwordPolicies>' + PasswordPolicies(object.passwordPolicies, true) + '</passwordPolicies>'}
	${object.sessionSettings == null ? '' : '<sessionSettings>' + SessionSettings(object.sessionSettings, true) + '</sessionSettings>'}
${rootTagEnd}`;
}