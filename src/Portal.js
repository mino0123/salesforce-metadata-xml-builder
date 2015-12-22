const PortalRoles = require('./PortalRoles');
const PortalType = require('./PortalType');

module.exports = (object, asChild) => {
  var rootTagStart = '<Portal>';
  var rootTagEnd = '</Portal>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.admin == null ? '' : '<admin>' + object.admin + '</admin>'}
	${object.defaultLanguage == null ? '' : '<defaultLanguage>' + object.defaultLanguage + '</defaultLanguage>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.emailSenderAddress == null ? '' : '<emailSenderAddress>' + object.emailSenderAddress + '</emailSenderAddress>'}
	${object.emailSenderName == null ? '' : '<emailSenderName>' + object.emailSenderName + '</emailSenderName>'}
	${object.enableSelfCloseCase == null ? '' : '<enableSelfCloseCase>' + object.enableSelfCloseCase + '</enableSelfCloseCase>'}
	${object.footerDocument == null ? '' : '<footerDocument>' + object.footerDocument + '</footerDocument>'}
	${object.forgotPassTemplate == null ? '' : '<forgotPassTemplate>' + object.forgotPassTemplate + '</forgotPassTemplate>'}
	${object.headerDocument == null ? '' : '<headerDocument>' + object.headerDocument + '</headerDocument>'}
	${object.isSelfRegistrationActivated == null ? '' : '<isSelfRegistrationActivated>' + object.isSelfRegistrationActivated + '</isSelfRegistrationActivated>'}
	${object.loginHeaderDocument == null ? '' : '<loginHeaderDocument>' + object.loginHeaderDocument + '</loginHeaderDocument>'}
	${object.logoDocument == null ? '' : '<logoDocument>' + object.logoDocument + '</logoDocument>'}
	${object.logoutUrl == null ? '' : '<logoutUrl>' + object.logoutUrl + '</logoutUrl>'}
	${object.newCommentTemplate == null ? '' : '<newCommentTemplate>' + object.newCommentTemplate + '</newCommentTemplate>'}
	${object.newPassTemplate == null ? '' : '<newPassTemplate>' + object.newPassTemplate + '</newPassTemplate>'}
	${object.newUserTemplate == null ? '' : '<newUserTemplate>' + object.newUserTemplate + '</newUserTemplate>'}
	${object.ownerNotifyTemplate == null ? '' : '<ownerNotifyTemplate>' + object.ownerNotifyTemplate + '</ownerNotifyTemplate>'}
	${object.selfRegNewUserUrl == null ? '' : '<selfRegNewUserUrl>' + object.selfRegNewUserUrl + '</selfRegNewUserUrl>'}
	${object.selfRegUserDefaultProfile == null ? '' : '<selfRegUserDefaultProfile>' + object.selfRegUserDefaultProfile + '</selfRegUserDefaultProfile>'}
	${object.selfRegUserDefaultRole == null ? '' : '<selfRegUserDefaultRole>' + PortalRoles(object.selfRegUserDefaultRole, true) + '</selfRegUserDefaultRole>'}
	${object.selfRegUserTemplate == null ? '' : '<selfRegUserTemplate>' + object.selfRegUserTemplate + '</selfRegUserTemplate>'}
	${object.showActionConfirmation == null ? '' : '<showActionConfirmation>' + object.showActionConfirmation + '</showActionConfirmation>'}
	${object.stylesheetDocument == null ? '' : '<stylesheetDocument>' + object.stylesheetDocument + '</stylesheetDocument>'}
	${object.type == null ? '' : '<type>' + PortalType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}