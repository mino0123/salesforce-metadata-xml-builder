
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningComponentBundle>';
  var rootTagEnd = '</LightningComponentBundle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.isExposed == null ? '' : '<isExposed>' + object.isExposed + '</isExposed>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}