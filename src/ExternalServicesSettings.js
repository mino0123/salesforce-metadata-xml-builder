
module.exports = (object, asChild) => {
  var rootTagStart = '<ExternalServicesSettings>';
  var rootTagEnd = '</ExternalServicesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEnhancedExternalServices == null ? '' : '<enableEnhancedExternalServices>' + object.enableEnhancedExternalServices + '</enableEnhancedExternalServices>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}