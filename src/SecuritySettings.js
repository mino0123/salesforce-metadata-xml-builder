const NetworkAccess = require('./NetworkAccess');
const PasswordPolicies = require('./PasswordPolicies');
const SessionSettings = require('./SessionSettings');
const SingleSignOnSettings = require('./SingleSignOnSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<SecuritySettings>';
  var rootTagEnd = '</SecuritySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canUsersGrantLoginAccess == null ? '' : '<canUsersGrantLoginAccess>' + object.canUsersGrantLoginAccess + '</canUsersGrantLoginAccess>'}
	${object.enableAdminLoginAsAnyUser == null ? '' : '<enableAdminLoginAsAnyUser>' + object.enableAdminLoginAsAnyUser + '</enableAdminLoginAsAnyUser>'}
	${object.enableAuditFieldsInactiveOwner == null ? '' : '<enableAuditFieldsInactiveOwner>' + object.enableAuditFieldsInactiveOwner + '</enableAuditFieldsInactiveOwner>'}
	${object.enableAuraSecureEvalPref == null ? '' : '<enableAuraSecureEvalPref>' + object.enableAuraSecureEvalPref + '</enableAuraSecureEvalPref>'}
	${object.enableRequireHttpsConnection == null ? '' : '<enableRequireHttpsConnection>' + object.enableRequireHttpsConnection + '</enableRequireHttpsConnection>'}
	${object.isTLSv12Required == null ? '' : '<isTLSv12Required>' + object.isTLSv12Required + '</isTLSv12Required>'}
	${object.isTLSv12RequiredCommunities == null ? '' : '<isTLSv12RequiredCommunities>' + object.isTLSv12RequiredCommunities + '</isTLSv12RequiredCommunities>'}
	${object.networkAccess == null ? '' : '<networkAccess>' + NetworkAccess(object.networkAccess, true) + '</networkAccess>'}
	${object.passwordPolicies == null ? '' : '<passwordPolicies>' + PasswordPolicies(object.passwordPolicies, true) + '</passwordPolicies>'}
	${object.sessionSettings == null ? '' : '<sessionSettings>' + SessionSettings(object.sessionSettings, true) + '</sessionSettings>'}
	${object.singleSignOnSettings == null ? '' : '<singleSignOnSettings>' + SingleSignOnSettings(object.singleSignOnSettings, true) + '</singleSignOnSettings>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}