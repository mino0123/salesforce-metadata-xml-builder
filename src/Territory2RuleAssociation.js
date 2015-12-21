
module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2RuleAssociation>';
  var rootTagEnd = '</Territory2RuleAssociation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.inherited == null ? '' : '<inherited>' + object.inherited + '</inherited>'}
	${object.ruleName == null ? '' : '<ruleName>' + object.ruleName + '</ruleName>'}
${rootTagEnd}`;
}