
module.exports = (object, asChild) => {
  var rootTagStart = '<PersonListSettings>';
  var rootTagEnd = '</PersonListSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enablePersonList == null ? '' : '<enablePersonList>' + object.enablePersonList + '</enablePersonList>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}