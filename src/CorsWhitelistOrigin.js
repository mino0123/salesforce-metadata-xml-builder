
module.exports = (object, asChild) => {
  var rootTagStart = '<CorsWhitelistOrigin>';
  var rootTagEnd = '</CorsWhitelistOrigin>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.urlPattern == null ? '' : '<urlPattern>' + object.urlPattern + '</urlPattern>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}