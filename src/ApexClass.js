const PackageVersion = require('./PackageVersion');
const ApexCodeUnitStatus = require('./ApexCodeUnitStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApexClass>';
  var rootTagEnd = '</ApexClass>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.packageVersions == null ? '' : object.packageVersions.map(p => '<packageVersions>' + PackageVersion(p, true) + '</packageVersions>')}
	${object.status == null ? '' : '<status>' + ApexCodeUnitStatus(object.status, true) + '</status>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}