const ContentAssetAccess = require('./ContentAssetAccess');

module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAssetLink>';
  var rootTagEnd = '</ContentAssetLink>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.access == null ? '' : '<access>' + ContentAssetAccess(object.access, true) + '</access>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}