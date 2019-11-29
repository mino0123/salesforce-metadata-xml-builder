
module.exports = (object, asChild) => {
  var rootTagStart = '<OrderManagementSettings>';
  var rootTagEnd = '</OrderManagementSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableOrderManagement == null ? '' : '<enableOrderManagement>' + object.enableOrderManagement + '</enableOrderManagement>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}