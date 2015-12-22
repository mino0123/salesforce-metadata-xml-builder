const EscalationRule = require('./EscalationRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<EscalationRules>';
  var rootTagEnd = '</EscalationRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.escalationRule == null ? '' : object.escalationRule.map(p => '<escalationRule>' + EscalationRule(p, true) + '</escalationRule>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}