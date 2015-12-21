const PackageVersion = require('./PackageVersion');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApexComponent>';
  var rootTagEnd = '</ApexComponent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.packageVersions == null ? '' : object.packageVersions.map(p => '<packageVersions>' + PackageVersion(p, true) + '</packageVersions>')}
${rootTagEnd}`;
}