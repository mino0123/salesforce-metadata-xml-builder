
module.exports = (object, asChild) => {
  var rootTagStart = '<SharingReason>';
  var rootTagEnd = '</SharingReason>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}