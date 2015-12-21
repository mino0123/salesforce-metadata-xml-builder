
module.exports = (object, asChild) => {
  var rootTagStart = '<Metadata>';
  var rootTagEnd = '</Metadata>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}