
module.exports = (object, asChild) => {
  var rootTagStart = '<RecordTypeTranslation>';
  var rootTagEnd = '</RecordTypeTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}