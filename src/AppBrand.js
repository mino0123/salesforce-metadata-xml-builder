
module.exports = (object, asChild) => {
  var rootTagStart = '<AppBrand>';
  var rootTagEnd = '</AppBrand>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.footerColor == null ? '' : '<footerColor>' + object.footerColor + '</footerColor>'}
	${object.headerColor == null ? '' : '<headerColor>' + object.headerColor + '</headerColor>'}
	${object.logo == null ? '' : '<logo>' + object.logo + '</logo>'}
	${object.logoVersion == null ? '' : '<logoVersion>' + object.logoVersion + '</logoVersion>'}
	${object.shouldOverrideOrgTheme == null ? '' : '<shouldOverrideOrgTheme>' + object.shouldOverrideOrgTheme + '</shouldOverrideOrgTheme>'}
${rootTagEnd}`;
}