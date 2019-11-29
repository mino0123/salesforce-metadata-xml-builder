const ContentAssetFormat = require('./ContentAssetFormat');
const ContentAssetRelationships = require('./ContentAssetRelationships');
const ContentAssetVersions = require('./ContentAssetVersions');

module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAsset>';
  var rootTagEnd = '</ContentAsset>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.format == null ? '' : '<format>' + ContentAssetFormat(object.format, true) + '</format>'}
	${object.isVisibleByExternalUsers == null ? '' : '<isVisibleByExternalUsers>' + object.isVisibleByExternalUsers + '</isVisibleByExternalUsers>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.originNetwork == null ? '' : '<originNetwork>' + object.originNetwork + '</originNetwork>'}
	${object.relationships == null ? '' : '<relationships>' + ContentAssetRelationships(object.relationships, true) + '</relationships>'}
	${object.versions == null ? '' : '<versions>' + ContentAssetVersions(object.versions, true) + '</versions>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}