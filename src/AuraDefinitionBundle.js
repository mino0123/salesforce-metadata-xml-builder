const PackageVersion = require('./PackageVersion');
const AuraBundleType = require('./AuraBundleType');

module.exports = (object, asChild) => {
  var rootTagStart = '<AuraDefinitionBundle>';
  var rootTagEnd = '</AuraDefinitionBundle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SVGContent == null ? '' : '<SVGContent>' + object.SVGContent + '</SVGContent>'}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.controllerContent == null ? '' : '<controllerContent>' + object.controllerContent + '</controllerContent>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.designContent == null ? '' : '<designContent>' + object.designContent + '</designContent>'}
	${object.documentationContent == null ? '' : '<documentationContent>' + object.documentationContent + '</documentationContent>'}
	${object.helperContent == null ? '' : '<helperContent>' + object.helperContent + '</helperContent>'}
	${object.markup == null ? '' : '<markup>' + object.markup + '</markup>'}
	${object.modelContent == null ? '' : '<modelContent>' + object.modelContent + '</modelContent>'}
	${object.packageVersions == null ? '' : object.packageVersions.map(p => '<packageVersions>' + PackageVersion(p, true) + '</packageVersions>')}
	${object.rendererContent == null ? '' : '<rendererContent>' + object.rendererContent + '</rendererContent>'}
	${object.styleContent == null ? '' : '<styleContent>' + object.styleContent + '</styleContent>'}
	${object.testsuiteContent == null ? '' : '<testsuiteContent>' + object.testsuiteContent + '</testsuiteContent>'}
	${object.type == null ? '' : '<type>' + AuraBundleType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}