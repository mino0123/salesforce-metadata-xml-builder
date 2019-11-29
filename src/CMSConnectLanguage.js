
module.exports = (object, asChild) => {
  var rootTagStart = '<CMSConnectLanguage>';
  var rootTagEnd = '</CMSConnectLanguage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cmsLanguage == null ? '' : '<cmsLanguage>' + object.cmsLanguage + '</cmsLanguage>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
${rootTagEnd}`;
}