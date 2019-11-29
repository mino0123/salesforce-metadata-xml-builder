
module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectPersonalization>';
  var rootTagEnd = '</CMSConnectPersonalization>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connectorPage == null ? '' : '<connectorPage>' + object.connectorPage + '</connectorPage>'}
	${object.connectorPageAsset == null ? '' : '<connectorPageAsset>' + object.connectorPageAsset + '</connectorPageAsset>'}
${rootTagEnd}`;
}