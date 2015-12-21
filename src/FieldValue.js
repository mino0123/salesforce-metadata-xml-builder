
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldValue>';
  var rootTagEnd = '</FieldValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}