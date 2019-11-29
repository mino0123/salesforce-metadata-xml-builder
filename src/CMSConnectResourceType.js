const CMSConnectResourceDefinition = require('./CMSConnectResourceDefinition');

module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectResourceType>';
  var rootTagEnd = '</CMSConnectResourceType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cmsConnectResourceDefinition == null ? '' : object.cmsConnectResourceDefinition.map(p => '<cmsConnectResourceDefinition>' + CMSConnectResourceDefinition(p, true) + '</cmsConnectResourceDefinition>').join('')}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.resourceType == null ? '' : '<resourceType>' + object.resourceType + '</resourceType>'}
${rootTagEnd}`;
}