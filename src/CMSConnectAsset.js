
module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectAsset>';
  var rootTagEnd = '</CMSConnectAsset>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetPath == null ? '' : '<assetPath>' + object.assetPath + '</assetPath>'}
	${object.assetType == null ? '' : '<assetType>' + object.assetType + '</assetType>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
${rootTagEnd}`;
}