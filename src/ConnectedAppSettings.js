
module.exports = (object, asChild) => {
  var rootTagStart = '<ConnectedAppSettings>';
  var rootTagEnd = '</ConnectedAppSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAdminApprovedAppsOnly == null ? '' : '<enableAdminApprovedAppsOnly>' + object.enableAdminApprovedAppsOnly + '</enableAdminApprovedAppsOnly>'}
	${object.enableSkipUserProvisioningWizardWelcomePage == null ? '' : '<enableSkipUserProvisioningWizardWelcomePage>' + object.enableSkipUserProvisioningWizardWelcomePage + '</enableSkipUserProvisioningWizardWelcomePage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}