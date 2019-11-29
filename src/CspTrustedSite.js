const CspTrustedSiteContext = require('./CspTrustedSiteContext');

module.exports = (object, asChild) => {
  var rootTagStart = '<CspTrustedSite>';
  var rootTagEnd = '</CspTrustedSite>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.context == null ? '' : '<context>' + CspTrustedSiteContext(object.context, true) + '</context>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.endpointUrl == null ? '' : '<endpointUrl>' + object.endpointUrl + '</endpointUrl>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}