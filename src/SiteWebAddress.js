
module.exports = (object, asChild) => {
  var rootTagStart = '<SiteWebAddress>';
  var rootTagEnd = '</SiteWebAddress>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.certificate == null ? '' : '<certificate>' + object.certificate + '</certificate>'}
	${object.domainName == null ? '' : '<domainName>' + object.domainName + '</domainName>'}
	${object.primary == null ? '' : '<primary>' + object.primary + '</primary>'}
${rootTagEnd}`;
}