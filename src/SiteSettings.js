
module.exports = (object, asChild) => {
  var rootTagStart = '<SiteSettings>';
  var rootTagEnd = '</SiteSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableProxyLoginICHeader == null ? '' : '<enableProxyLoginICHeader>' + object.enableProxyLoginICHeader + '</enableProxyLoginICHeader>'}
	${object.enableTopicsInSites == null ? '' : '<enableTopicsInSites>' + object.enableTopicsInSites + '</enableTopicsInSites>'}
	${object.enableVisualforceApiAccessAllowed == null ? '' : '<enableVisualforceApiAccessAllowed>' + object.enableVisualforceApiAccessAllowed + '</enableVisualforceApiAccessAllowed>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}