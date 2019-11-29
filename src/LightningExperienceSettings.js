
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningExperienceSettings>';
  var rootTagEnd = '</LightningExperienceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAccessCheckCrucPref == null ? '' : '<enableAccessCheckCrucPref>' + object.enableAccessCheckCrucPref + '</enableAccessCheckCrucPref>'}
	${object.enableApiUserLtngOutAccessPref == null ? '' : '<enableApiUserLtngOutAccessPref>' + object.enableApiUserLtngOutAccessPref + '</enableApiUserLtngOutAccessPref>'}
	${object.enableAuraCDNPref == null ? '' : '<enableAuraCDNPref>' + object.enableAuraCDNPref + '</enableAuraCDNPref>'}
	${object.enableFeedbackInMobile == null ? '' : '<enableFeedbackInMobile>' + object.enableFeedbackInMobile + '</enableFeedbackInMobile>'}
	${object.enableIE11DeprecationMsgHidden == null ? '' : '<enableIE11DeprecationMsgHidden>' + object.enableIE11DeprecationMsgHidden + '</enableIE11DeprecationMsgHidden>'}
	${object.enableIE11LEXCrucPref == null ? '' : '<enableIE11LEXCrucPref>' + object.enableIE11LEXCrucPref + '</enableIE11LEXCrucPref>'}
	${object.enableInAppTooltips == null ? '' : '<enableInAppTooltips>' + object.enableInAppTooltips + '</enableInAppTooltips>'}
	${object.enableLEXOnIpadEnabled == null ? '' : '<enableLEXOnIpadEnabled>' + object.enableLEXOnIpadEnabled + '</enableLEXOnIpadEnabled>'}
	${object.enableLexEndUsersNoSwitching == null ? '' : '<enableLexEndUsersNoSwitching>' + object.enableLexEndUsersNoSwitching + '</enableLexEndUsersNoSwitching>'}
	${object.enableNavPersonalizationOptOut == null ? '' : '<enableNavPersonalizationOptOut>' + object.enableNavPersonalizationOptOut + '</enableNavPersonalizationOptOut>'}
	${object.enableRemoveThemeBrandBanner == null ? '' : '<enableRemoveThemeBrandBanner>' + object.enableRemoveThemeBrandBanner + '</enableRemoveThemeBrandBanner>'}
	${object.enableS1BannerPref == null ? '' : '<enableS1BannerPref>' + object.enableS1BannerPref + '</enableS1BannerPref>'}
	${object.enableS1BrowserEnabled == null ? '' : '<enableS1BrowserEnabled>' + object.enableS1BrowserEnabled + '</enableS1BrowserEnabled>'}
	${object.enableS1DesktopEnabled == null ? '' : '<enableS1DesktopEnabled>' + object.enableS1DesktopEnabled + '</enableS1DesktopEnabled>'}
	${object.enableS1UiLoggingEnabled == null ? '' : '<enableS1UiLoggingEnabled>' + object.enableS1UiLoggingEnabled + '</enableS1UiLoggingEnabled>'}
	${object.enableTryLightningOptOut == null ? '' : '<enableTryLightningOptOut>' + object.enableTryLightningOptOut + '</enableTryLightningOptOut>'}
	${object.enableUseS1AlohaDesktop == null ? '' : '<enableUseS1AlohaDesktop>' + object.enableUseS1AlohaDesktop + '</enableUseS1AlohaDesktop>'}
	${object.enableUsersAreLightningOnly == null ? '' : '<enableUsersAreLightningOnly>' + object.enableUsersAreLightningOnly + '</enableUsersAreLightningOnly>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}