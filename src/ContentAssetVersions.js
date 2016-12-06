const ContentAssetVersion = require('./ContentAssetVersion');

module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAssetVersions>';
  var rootTagEnd = '</ContentAssetVersions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.version == null ? '' : object.version.map(p => '<version>' + ContentAssetVersion(p, true) + '</version>').join('')}
${rootTagEnd}`;
}