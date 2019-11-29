
module.exports = (object, asChild) => {
  var rootTagStart = '<DeploymentSettings>';
  var rootTagEnd = '</DeploymentSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesSkipAsyncApexValidation == null ? '' : '<doesSkipAsyncApexValidation>' + object.doesSkipAsyncApexValidation + '</doesSkipAsyncApexValidation>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}