const CommunityTemplateBundleInfoType = require('./CommunityTemplateBundleInfoType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityThemeBundleInfo>';
  var rootTagEnd = '</CommunityThemeBundleInfo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.image == null ? '' : '<image>' + object.image + '</image>'}
	${object.order == null ? '' : '<order>' + object.order + '</order>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.type == null ? '' : '<type>' + CommunityTemplateBundleInfoType(object.type, true) + '</type>'}
${rootTagEnd}`;
}