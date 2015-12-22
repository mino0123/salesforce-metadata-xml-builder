const PackageVersion = require('./PackageVersion');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApexPage>';
  var rootTagEnd = '</ApexPage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.availableInTouch == null ? '' : '<availableInTouch>' + object.availableInTouch + '</availableInTouch>'}
	${object.confirmationTokenRequired == null ? '' : '<confirmationTokenRequired>' + object.confirmationTokenRequired + '</confirmationTokenRequired>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.packageVersions == null ? '' : object.packageVersions.map(p => '<packageVersions>' + PackageVersion(p, true) + '</packageVersions>')}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}