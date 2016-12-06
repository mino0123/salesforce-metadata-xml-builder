const ContentAssetLink = require('./ContentAssetLink');

module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAssetRelationships>';
  var rootTagEnd = '</ContentAssetRelationships>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.organization == null ? '' : '<organization>' + ContentAssetLink(object.organization, true) + '</organization>'}
${rootTagEnd}`;
}