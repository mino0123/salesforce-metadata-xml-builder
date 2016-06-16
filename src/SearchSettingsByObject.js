const ObjectSearchSetting = require('./ObjectSearchSetting');

module.exports = (object, asChild) => {
  var rootTagStart = '<SearchSettingsByObject>';
  var rootTagEnd = '</SearchSettingsByObject>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.searchSettingsByObject == null ? '' : object.searchSettingsByObject.map(p => '<searchSettingsByObject>' + ObjectSearchSetting(p, true) + '</searchSettingsByObject>').join('')}
${rootTagEnd}`;
}