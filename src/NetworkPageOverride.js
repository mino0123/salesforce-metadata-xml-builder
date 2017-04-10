const NetworkPageOverrideSetting = require('./NetworkPageOverrideSetting');

module.exports = (object, asChild) => {
  var rootTagStart = '<NetworkPageOverride>';
  var rootTagEnd = '</NetworkPageOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.changePasswordPageOverrideSetting == null ? '' : '<changePasswordPageOverrideSetting>' + NetworkPageOverrideSetting(object.changePasswordPageOverrideSetting, true) + '</changePasswordPageOverrideSetting>'}
	${object.forgotPasswordPageOverrideSetting == null ? '' : '<forgotPasswordPageOverrideSetting>' + NetworkPageOverrideSetting(object.forgotPasswordPageOverrideSetting, true) + '</forgotPasswordPageOverrideSetting>'}
	${object.homePageOverrideSetting == null ? '' : '<homePageOverrideSetting>' + NetworkPageOverrideSetting(object.homePageOverrideSetting, true) + '</homePageOverrideSetting>'}
	${object.loginPageOverrideSetting == null ? '' : '<loginPageOverrideSetting>' + NetworkPageOverrideSetting(object.loginPageOverrideSetting, true) + '</loginPageOverrideSetting>'}
	${object.selfRegProfilePageOverrideSetting == null ? '' : '<selfRegProfilePageOverrideSetting>' + NetworkPageOverrideSetting(object.selfRegProfilePageOverrideSetting, true) + '</selfRegProfilePageOverrideSetting>'}
${rootTagEnd}`;
}