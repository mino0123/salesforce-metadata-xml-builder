const EmbeddedServiceFeature = require('./EmbeddedServiceFeature');
const EmbeddedServiceLabelKey = require('./EmbeddedServiceLabelKey');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceCustomLabel>';
  var rootTagEnd = '</EmbeddedServiceCustomLabel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customLabel == null ? '' : '<customLabel>' + object.customLabel + '</customLabel>'}
	${object.feature == null ? '' : '<feature>' + EmbeddedServiceFeature(object.feature, true) + '</feature>'}
	${object.labelKey == null ? '' : '<labelKey>' + EmbeddedServiceLabelKey(object.labelKey, true) + '</labelKey>'}
${rootTagEnd}`;
}