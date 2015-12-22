const RuleEntry = require('./RuleEntry');

module.exports = (object, asChild) => {
  var rootTagStart = '<AssignmentRule>';
  var rootTagEnd = '</AssignmentRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.ruleEntry == null ? '' : object.ruleEntry.map(p => '<ruleEntry>' + RuleEntry(p, true) + '</ruleEntry>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}