
module.exports = (object, asChild) => {
  var rootTagStart = '<InstalledPackage>';
  var rootTagEnd = '</InstalledPackage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.activateRSS == null ? '' : '<activateRSS>' + object.activateRSS + '</activateRSS>'}
	${object.password == null ? '' : '<password>' + object.password + '</password>'}
	${object.versionNumber == null ? '' : '<versionNumber>' + object.versionNumber + '</versionNumber>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}