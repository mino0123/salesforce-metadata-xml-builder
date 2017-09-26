const SiteClickjackProtectionLevel = require('./SiteClickjackProtectionLevel');
const SiteWebAddress = require('./SiteWebAddress');
const SiteRedirectMapping = require('./SiteRedirectMapping');
const SiteType = require('./SiteType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomSite>';
  var rootTagEnd = '</CustomSite>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.allowHomePage == null ? '' : '<allowHomePage>' + object.allowHomePage + '</allowHomePage>'}
	${object.allowStandardAnswersPages == null ? '' : '<allowStandardAnswersPages>' + object.allowStandardAnswersPages + '</allowStandardAnswersPages>'}
	${object.allowStandardIdeasPages == null ? '' : '<allowStandardIdeasPages>' + object.allowStandardIdeasPages + '</allowStandardIdeasPages>'}
	${object.allowStandardLookups == null ? '' : '<allowStandardLookups>' + object.allowStandardLookups + '</allowStandardLookups>'}
	${object.allowStandardPortalPages == null ? '' : '<allowStandardPortalPages>' + object.allowStandardPortalPages + '</allowStandardPortalPages>'}
	${object.allowStandardSearch == null ? '' : '<allowStandardSearch>' + object.allowStandardSearch + '</allowStandardSearch>'}
	${object.analyticsTrackingCode == null ? '' : '<analyticsTrackingCode>' + object.analyticsTrackingCode + '</analyticsTrackingCode>'}
	${object.authorizationRequiredPage == null ? '' : '<authorizationRequiredPage>' + object.authorizationRequiredPage + '</authorizationRequiredPage>'}
	${object.bandwidthExceededPage == null ? '' : '<bandwidthExceededPage>' + object.bandwidthExceededPage + '</bandwidthExceededPage>'}
	${object.changePasswordPage == null ? '' : '<changePasswordPage>' + object.changePasswordPage + '</changePasswordPage>'}
	${object.chatterAnswersForgotPasswordConfirmPage == null ? '' : '<chatterAnswersForgotPasswordConfirmPage>' + object.chatterAnswersForgotPasswordConfirmPage + '</chatterAnswersForgotPasswordConfirmPage>'}
	${object.chatterAnswersForgotPasswordPage == null ? '' : '<chatterAnswersForgotPasswordPage>' + object.chatterAnswersForgotPasswordPage + '</chatterAnswersForgotPasswordPage>'}
	${object.chatterAnswersHelpPage == null ? '' : '<chatterAnswersHelpPage>' + object.chatterAnswersHelpPage + '</chatterAnswersHelpPage>'}
	${object.chatterAnswersLoginPage == null ? '' : '<chatterAnswersLoginPage>' + object.chatterAnswersLoginPage + '</chatterAnswersLoginPage>'}
	${object.chatterAnswersRegistrationPage == null ? '' : '<chatterAnswersRegistrationPage>' + object.chatterAnswersRegistrationPage + '</chatterAnswersRegistrationPage>'}
	${object.clickjackProtectionLevel == null ? '' : '<clickjackProtectionLevel>' + SiteClickjackProtectionLevel(object.clickjackProtectionLevel, true) + '</clickjackProtectionLevel>'}
	${object.customWebAddresses == null ? '' : object.customWebAddresses.map(p => '<customWebAddresses>' + SiteWebAddress(p, true) + '</customWebAddresses>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.favoriteIcon == null ? '' : '<favoriteIcon>' + object.favoriteIcon + '</favoriteIcon>'}
	${object.fileNotFoundPage == null ? '' : '<fileNotFoundPage>' + object.fileNotFoundPage + '</fileNotFoundPage>'}
	${object.forgotPasswordPage == null ? '' : '<forgotPasswordPage>' + object.forgotPasswordPage + '</forgotPasswordPage>'}
	${object.genericErrorPage == null ? '' : '<genericErrorPage>' + object.genericErrorPage + '</genericErrorPage>'}
	${object.guestProfile == null ? '' : '<guestProfile>' + object.guestProfile + '</guestProfile>'}
	${object.inMaintenancePage == null ? '' : '<inMaintenancePage>' + object.inMaintenancePage + '</inMaintenancePage>'}
	${object.inactiveIndexPage == null ? '' : '<inactiveIndexPage>' + object.inactiveIndexPage + '</inactiveIndexPage>'}
	${object.indexPage == null ? '' : '<indexPage>' + object.indexPage + '</indexPage>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.myProfilePage == null ? '' : '<myProfilePage>' + object.myProfilePage + '</myProfilePage>'}
	${object.portal == null ? '' : '<portal>' + object.portal + '</portal>'}
	${object.requireHttps == null ? '' : '<requireHttps>' + object.requireHttps + '</requireHttps>'}
	${object.requireInsecurePortalAccess == null ? '' : '<requireInsecurePortalAccess>' + object.requireInsecurePortalAccess + '</requireInsecurePortalAccess>'}
	${object.robotsTxtPage == null ? '' : '<robotsTxtPage>' + object.robotsTxtPage + '</robotsTxtPage>'}
	${object.rootComponent == null ? '' : '<rootComponent>' + object.rootComponent + '</rootComponent>'}
	${object.selfRegPage == null ? '' : '<selfRegPage>' + object.selfRegPage + '</selfRegPage>'}
	${object.serverIsDown == null ? '' : '<serverIsDown>' + object.serverIsDown + '</serverIsDown>'}
	${object.siteAdmin == null ? '' : '<siteAdmin>' + object.siteAdmin + '</siteAdmin>'}
	${object.siteRedirectMappings == null ? '' : object.siteRedirectMappings.map(p => '<siteRedirectMappings>' + SiteRedirectMapping(p, true) + '</siteRedirectMappings>').join('')}
	${object.siteTemplate == null ? '' : '<siteTemplate>' + object.siteTemplate + '</siteTemplate>'}
	${object.siteType == null ? '' : '<siteType>' + SiteType(object.siteType, true) + '</siteType>'}
	${object.subdomain == null ? '' : '<subdomain>' + object.subdomain + '</subdomain>'}
	${object.urlPathPrefix == null ? '' : '<urlPathPrefix>' + object.urlPathPrefix + '</urlPathPrefix>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}