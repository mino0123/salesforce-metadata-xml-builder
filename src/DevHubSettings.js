
module.exports = (object, asChild) => {
  var rootTagStart = '<DevHubSettings>';
  var rootTagEnd = '</DevHubSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableShapeExportPref == null ? '' : '<enableShapeExportPref>' + object.enableShapeExportPref + '</enableShapeExportPref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}