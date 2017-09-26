const BrandingSetProperty = require('./BrandingSetProperty');

module.exports = (object, asChild) => {
  var rootTagStart = '<BrandingSet>';
  var rootTagEnd = '</BrandingSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.brandingSetProperty == null ? '' : object.brandingSetProperty.map(p => '<brandingSetProperty>' + BrandingSetProperty(p, true) + '</brandingSetProperty>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}