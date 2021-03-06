
module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityTemplatePageSetting>';
  var rootTagEnd = '</CommunityTemplatePageSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.themeLayout == null ? '' : '<themeLayout>' + object.themeLayout + '</themeLayout>'}
${rootTagEnd}`;
}