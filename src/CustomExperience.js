const CustomExperienceBranding = require('./CustomExperienceBranding');
const CustomExperienceTabSet = require('./CustomExperienceTabSet');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomExperience>';
  var rootTagEnd = '</CustomExperience>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowInternalUserLogin == null ? '' : '<allowInternalUserLogin>' + object.allowInternalUserLogin + '</allowInternalUserLogin>'}
	${object.branding == null ? '' : '<branding>' + CustomExperienceBranding(object.branding, true) + '</branding>'}
	${object.changePasswordEmailTemplate == null ? '' : '<changePasswordEmailTemplate>' + object.changePasswordEmailTemplate + '</changePasswordEmailTemplate>'}
	${object.emailFooterLogo == null ? '' : '<emailFooterLogo>' + object.emailFooterLogo + '</emailFooterLogo>'}
	${object.emailFooterText == null ? '' : '<emailFooterText>' + object.emailFooterText + '</emailFooterText>'}
	${object.emailSenderAddress == null ? '' : '<emailSenderAddress>' + object.emailSenderAddress + '</emailSenderAddress>'}
	${object.emailSenderName == null ? '' : '<emailSenderName>' + object.emailSenderName + '</emailSenderName>'}
	${object.enableErrorPageOverridesForVisualforce == null ? '' : '<enableErrorPageOverridesForVisualforce>' + object.enableErrorPageOverridesForVisualforce + '</enableErrorPageOverridesForVisualforce>'}
	${object.forgotPasswordEmailTemplate == null ? '' : '<forgotPasswordEmailTemplate>' + object.forgotPasswordEmailTemplate + '</forgotPasswordEmailTemplate>'}
	${object.picassoSite == null ? '' : '<picassoSite>' + object.picassoSite + '</picassoSite>'}
	${object.sObjectType == null ? '' : '<sObjectType>' + object.sObjectType + '</sObjectType>'}
	${object.sendWelcomeEmail == null ? '' : '<sendWelcomeEmail>' + object.sendWelcomeEmail + '</sendWelcomeEmail>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.siteAsContainerEnabled == null ? '' : '<siteAsContainerEnabled>' + object.siteAsContainerEnabled + '</siteAsContainerEnabled>'}
	${object.tabs == null ? '' : '<tabs>' + CustomExperienceTabSet(object.tabs, true) + '</tabs>'}
	${object.urlPathPrefix == null ? '' : '<urlPathPrefix>' + object.urlPathPrefix + '</urlPathPrefix>'}
	${object.welcomeEmailTemplate == null ? '' : '<welcomeEmailTemplate>' + object.welcomeEmailTemplate + '</welcomeEmailTemplate>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}