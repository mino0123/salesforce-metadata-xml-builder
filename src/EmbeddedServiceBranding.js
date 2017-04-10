
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceBranding>';
  var rootTagEnd = '</EmbeddedServiceBranding>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.contrastInvertedColor == null ? '' : '<contrastInvertedColor>' + object.contrastInvertedColor + '</contrastInvertedColor>'}
	${object.contrastPrimaryColor == null ? '' : '<contrastPrimaryColor>' + object.contrastPrimaryColor + '</contrastPrimaryColor>'}
	${object.embeddedServiceConfig == null ? '' : '<embeddedServiceConfig>' + object.embeddedServiceConfig + '</embeddedServiceConfig>'}
	${object.font == null ? '' : '<font>' + object.font + '</font>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.navBarColor == null ? '' : '<navBarColor>' + object.navBarColor + '</navBarColor>'}
	${object.primaryColor == null ? '' : '<primaryColor>' + object.primaryColor + '</primaryColor>'}
	${object.secondaryColor == null ? '' : '<secondaryColor>' + object.secondaryColor + '</secondaryColor>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}