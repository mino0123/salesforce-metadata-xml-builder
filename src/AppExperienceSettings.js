
module.exports = (object, asChild) => {
  var rootTagStart = '<AppExperienceSettings>';
  var rootTagEnd = '</AppExperienceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesHideAllAppsInAppLauncher == null ? '' : '<doesHideAllAppsInAppLauncher>' + object.doesHideAllAppsInAppLauncher + '</doesHideAllAppsInAppLauncher>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}