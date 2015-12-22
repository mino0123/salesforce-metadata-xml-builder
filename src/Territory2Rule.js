const Territory2RuleItem = require('./Territory2RuleItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2Rule>';
  var rootTagEnd = '</Territory2Rule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.objectType == null ? '' : '<objectType>' + object.objectType + '</objectType>'}
	${object.ruleItems == null ? '' : object.ruleItems.map(p => '<ruleItems>' + Territory2RuleItem(p, true) + '</ruleItems>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}