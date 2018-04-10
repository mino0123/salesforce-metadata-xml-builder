
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningExperienceTheme>';
  var rootTagEnd = '</LightningExperienceTheme>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultBrandingSet == null ? '' : '<defaultBrandingSet>' + object.defaultBrandingSet + '</defaultBrandingSet>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.shouldOverrideLoadingImage == null ? '' : '<shouldOverrideLoadingImage>' + object.shouldOverrideLoadingImage + '</shouldOverrideLoadingImage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}