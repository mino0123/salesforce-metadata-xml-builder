
module.exports = (object, asChild) => {
  var rootTagStart = '<CompactLayout>';
  var rootTagEnd = '</CompactLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}