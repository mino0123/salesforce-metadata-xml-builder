
module.exports = (object, asChild) => {
  var rootTagStart = '<ValidationRuleTranslation>';
  var rootTagEnd = '</ValidationRuleTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}