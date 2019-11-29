
module.exports = (object, asChild) => {
  var rootTagStart = '<ExperienceBundleSettings>';
  var rootTagEnd = '</ExperienceBundleSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableExperienceBundleMetadata == null ? '' : '<enableExperienceBundleMetadata>' + object.enableExperienceBundleMetadata + '</enableExperienceBundleMetadata>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}