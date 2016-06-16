
module.exports = (object, asChild) => {
  var rootTagStart = '<OrganizationSettingsDetail>';
  var rootTagEnd = '</OrganizationSettingsDetail>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.settingName == null ? '' : '<settingName>' + object.settingName + '</settingName>'}
	${object.settingValue == null ? '' : '<settingValue>' + object.settingValue + '</settingValue>'}
${rootTagEnd}`;
}