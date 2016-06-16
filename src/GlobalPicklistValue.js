
module.exports = (object, asChild) => {
  var rootTagStart = '<GlobalPicklistValue>';
  var rootTagEnd = '</GlobalPicklistValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.color == null ? '' : '<color>' + object.color + '</color>'}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}