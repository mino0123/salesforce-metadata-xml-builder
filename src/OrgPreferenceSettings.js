const OrganizationSettingsDetail = require('./OrganizationSettingsDetail');

module.exports = (object, asChild) => {
  var rootTagStart = '<OrgPreferenceSettings>';
  var rootTagEnd = '</OrgPreferenceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.preferences == null ? '' : object.preferences.map(p => '<preferences>' + OrganizationSettingsDetail(p, true) + '</preferences>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}