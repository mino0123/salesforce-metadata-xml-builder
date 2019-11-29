
module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectResourceDefinition>';
  var rootTagEnd = '</CMSConnectResourceDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.options == null ? '' : '<options>' + object.options + '</options>'}
	${object.payloadType == null ? '' : '<payloadType>' + object.payloadType + '</payloadType>'}
	${object.resourceIdPath == null ? '' : '<resourceIdPath>' + object.resourceIdPath + '</resourceIdPath>'}
	${object.resourceNamePath == null ? '' : '<resourceNamePath>' + object.resourceNamePath + '</resourceNamePath>'}
	${object.resourcePath == null ? '' : '<resourcePath>' + object.resourcePath + '</resourcePath>'}
	${object.rootNodePath == null ? '' : '<rootNodePath>' + object.rootNodePath + '</rootNodePath>'}
${rootTagEnd}`;
}