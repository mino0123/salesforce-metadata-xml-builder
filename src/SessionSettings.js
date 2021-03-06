const SessionTimeout = require('./SessionTimeout');

module.exports = (object, asChild) => {
  var rootTagStart = '<SessionSettings>';
  var rootTagEnd = '</SessionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.disableTimeoutWarning == null ? '' : '<disableTimeoutWarning>' + object.disableTimeoutWarning + '</disableTimeoutWarning>'}
	${object.enableCSPOnEmail == null ? '' : '<enableCSPOnEmail>' + object.enableCSPOnEmail + '</enableCSPOnEmail>'}
	${object.enableCSRFOnGet == null ? '' : '<enableCSRFOnGet>' + object.enableCSRFOnGet + '</enableCSRFOnGet>'}
	${object.enableCSRFOnPost == null ? '' : '<enableCSRFOnPost>' + object.enableCSRFOnPost + '</enableCSRFOnPost>'}
	${object.enableCacheAndAutocomplete == null ? '' : '<enableCacheAndAutocomplete>' + object.enableCacheAndAutocomplete + '</enableCacheAndAutocomplete>'}
	${object.enableClickjackNonsetupSFDC == null ? '' : '<enableClickjackNonsetupSFDC>' + object.enableClickjackNonsetupSFDC + '</enableClickjackNonsetupSFDC>'}
	${object.enableClickjackNonsetupUser == null ? '' : '<enableClickjackNonsetupUser>' + object.enableClickjackNonsetupUser + '</enableClickjackNonsetupUser>'}
	${object.enableClickjackNonsetupUserHeaderless == null ? '' : '<enableClickjackNonsetupUserHeaderless>' + object.enableClickjackNonsetupUserHeaderless + '</enableClickjackNonsetupUserHeaderless>'}
	${object.enableClickjackSetup == null ? '' : '<enableClickjackSetup>' + object.enableClickjackSetup + '</enableClickjackSetup>'}
	${object.enableContentSniffingProtection == null ? '' : '<enableContentSniffingProtection>' + object.enableContentSniffingProtection + '</enableContentSniffingProtection>'}
	${object.enablePostForSessions == null ? '' : '<enablePostForSessions>' + object.enablePostForSessions + '</enablePostForSessions>'}
	${object.enableSMSIdentity == null ? '' : '<enableSMSIdentity>' + object.enableSMSIdentity + '</enableSMSIdentity>'}
	${object.enableUpgradeInsecureRequests == null ? '' : '<enableUpgradeInsecureRequests>' + object.enableUpgradeInsecureRequests + '</enableUpgradeInsecureRequests>'}
	${object.enableXssProtection == null ? '' : '<enableXssProtection>' + object.enableXssProtection + '</enableXssProtection>'}
	${object.enforceIpRangesEveryRequest == null ? '' : '<enforceIpRangesEveryRequest>' + object.enforceIpRangesEveryRequest + '</enforceIpRangesEveryRequest>'}
	${object.forceLogoutOnSessionTimeout == null ? '' : '<forceLogoutOnSessionTimeout>' + object.forceLogoutOnSessionTimeout + '</forceLogoutOnSessionTimeout>'}
	${object.forceRelogin == null ? '' : '<forceRelogin>' + object.forceRelogin + '</forceRelogin>'}
	${object.hstsOnForcecomSites == null ? '' : '<hstsOnForcecomSites>' + object.hstsOnForcecomSites + '</hstsOnForcecomSites>'}
	${object.identityConfirmationOnEmailChange == null ? '' : '<identityConfirmationOnEmailChange>' + object.identityConfirmationOnEmailChange + '</identityConfirmationOnEmailChange>'}
	${object.identityConfirmationOnTwoFactorRegistrationEnabled == null ? '' : '<identityConfirmationOnTwoFactorRegistrationEnabled>' + object.identityConfirmationOnTwoFactorRegistrationEnabled + '</identityConfirmationOnTwoFactorRegistrationEnabled>'}
	${object.lockSessionsToDomain == null ? '' : '<lockSessionsToDomain>' + object.lockSessionsToDomain + '</lockSessionsToDomain>'}
	${object.lockSessionsToIp == null ? '' : '<lockSessionsToIp>' + object.lockSessionsToIp + '</lockSessionsToIp>'}
	${object.logoutURL == null ? '' : '<logoutURL>' + object.logoutURL + '</logoutURL>'}
	${object.redirectionWarning == null ? '' : '<redirectionWarning>' + object.redirectionWarning + '</redirectionWarning>'}
	${object.referrerPolicy == null ? '' : '<referrerPolicy>' + object.referrerPolicy + '</referrerPolicy>'}
	${object.requireHttpOnly == null ? '' : '<requireHttpOnly>' + object.requireHttpOnly + '</requireHttpOnly>'}
	${object.requireHttps == null ? '' : '<requireHttps>' + object.requireHttps + '</requireHttps>'}
	${object.securityCentralKillSession == null ? '' : '<securityCentralKillSession>' + object.securityCentralKillSession + '</securityCentralKillSession>'}
	${object.sessionTimeout == null ? '' : '<sessionTimeout>' + SessionTimeout(object.sessionTimeout, true) + '</sessionTimeout>'}
${rootTagEnd}`;
}