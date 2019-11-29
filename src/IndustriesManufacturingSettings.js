
module.exports = (object, asChild) => {
  var rootTagStart = '<IndustriesManufacturingSettings>';
  var rootTagEnd = '</IndustriesManufacturingSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableIndManufacturing == null ? '' : '<enableIndManufacturing>' + object.enableIndManufacturing + '</enableIndManufacturing>'}
	${object.enableIndustriesMfgAccountForecast == null ? '' : '<enableIndustriesMfgAccountForecast>' + object.enableIndustriesMfgAccountForecast + '</enableIndustriesMfgAccountForecast>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}