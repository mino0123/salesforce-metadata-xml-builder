
module.exports = (object, asChild) => {
  var rootTagStart = '<SchemaSettings>';
  var rootTagEnd = '</SchemaSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAdvancedCMTSecurity == null ? '' : '<enableAdvancedCMTSecurity>' + object.enableAdvancedCMTSecurity + '</enableAdvancedCMTSecurity>'}
	${object.enableAdvancedCSSecurity == null ? '' : '<enableAdvancedCSSecurity>' + object.enableAdvancedCSSecurity + '</enableAdvancedCSSecurity>'}
	${object.enableListCustomSettingCreation == null ? '' : '<enableListCustomSettingCreation>' + object.enableListCustomSettingCreation + '</enableListCustomSettingCreation>'}
	${object.enableSOSLOnCustomSettings == null ? '' : '<enableSOSLOnCustomSettings>' + object.enableSOSLOnCustomSettings + '</enableSOSLOnCustomSettings>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}