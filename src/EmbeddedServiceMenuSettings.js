const EmbeddedServiceMenuItem = require('./EmbeddedServiceMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceMenuSettings>';
  var rootTagEnd = '</EmbeddedServiceMenuSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.branding == null ? '' : '<branding>' + object.branding + '</branding>'}
	${object.embeddedServiceMenuItems == null ? '' : object.embeddedServiceMenuItems.map(p => '<embeddedServiceMenuItems>' + EmbeddedServiceMenuItem(p, true) + '</embeddedServiceMenuItems>').join('')}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}