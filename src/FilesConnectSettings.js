
module.exports = (object, asChild) => {
  var rootTagStart = '<FilesConnectSettings>';
  var rootTagEnd = '</FilesConnectSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableContentHubAllowed == null ? '' : '<enableContentHubAllowed>' + object.enableContentHubAllowed + '</enableContentHubAllowed>'}
	${object.enableContentHubCvtLinksAllowed == null ? '' : '<enableContentHubCvtLinksAllowed>' + object.enableContentHubCvtLinksAllowed + '</enableContentHubCvtLinksAllowed>'}
	${object.enableContentHubEOSearchLayout == null ? '' : '<enableContentHubEOSearchLayout>' + object.enableContentHubEOSearchLayout + '</enableContentHubEOSearchLayout>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}