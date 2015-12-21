
module.exports = (object, asChild) => {
  var rootTagStart = '<SharingRecalculation>';
  var rootTagEnd = '</SharingRecalculation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.className == null ? '' : '<className>' + object.className + '</className>'}
${rootTagEnd}`;
}