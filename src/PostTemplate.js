
module.exports = (object, asChild) => {
  var rootTagStart = '<PostTemplate>';
  var rootTagEnd = '</PostTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}