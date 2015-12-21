
module.exports = (object, asChild) => {
  var rootTagStart = '<QuickActionTranslation>';
  var rootTagEnd = '</QuickActionTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}