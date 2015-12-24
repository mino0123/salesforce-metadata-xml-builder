const RuleEntry = require('./RuleEntry');

module.exports = (object, asChild) => {
  var rootTagStart = '<AutoResponseRule>';
  var rootTagEnd = '</AutoResponseRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.ruleEntry == null ? '' : object.ruleEntry.map(p => '<ruleEntry>' + RuleEntry(p, true) + '</ruleEntry>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}