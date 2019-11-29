const EmbeddedServiceComponentBundleType = require('./EmbeddedServiceComponentBundleType');
const EmbeddedServiceCustomComponentType = require('./EmbeddedServiceCustomComponentType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceCustomComponent>';
  var rootTagEnd = '</EmbeddedServiceCustomComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentBundleType == null ? '' : '<componentBundleType>' + EmbeddedServiceComponentBundleType(object.componentBundleType, true) + '</componentBundleType>'}
	${object.customComponent == null ? '' : '<customComponent>' + object.customComponent + '</customComponent>'}
	${object.customComponentType == null ? '' : '<customComponentType>' + EmbeddedServiceCustomComponentType(object.customComponentType, true) + '</customComponentType>'}
${rootTagEnd}`;
}