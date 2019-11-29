const DashboardMobileSettings = require('./DashboardMobileSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<MobileSettings>';
  var rootTagEnd = '</MobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dashboardMobile == null ? '' : '<dashboardMobile>' + DashboardMobileSettings(object.dashboardMobile, true) + '</dashboardMobile>'}
	${object.enableImportContactFromDevice == null ? '' : '<enableImportContactFromDevice>' + object.enableImportContactFromDevice + '</enableImportContactFromDevice>'}
	${object.enableLightningOnMobile == null ? '' : '<enableLightningOnMobile>' + object.enableLightningOnMobile + '</enableLightningOnMobile>'}
	${object.enableOfflineDraftsEnabled == null ? '' : '<enableOfflineDraftsEnabled>' + object.enableOfflineDraftsEnabled + '</enableOfflineDraftsEnabled>'}
	${object.enablePopulateNameManuallyInToday == null ? '' : '<enablePopulateNameManuallyInToday>' + object.enablePopulateNameManuallyInToday + '</enablePopulateNameManuallyInToday>'}
	${object.enableS1EncryptedStoragePref2 == null ? '' : '<enableS1EncryptedStoragePref2>' + object.enableS1EncryptedStoragePref2 + '</enableS1EncryptedStoragePref2>'}
	${object.enableS1OfflinePref == null ? '' : '<enableS1OfflinePref>' + object.enableS1OfflinePref + '</enableS1OfflinePref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}