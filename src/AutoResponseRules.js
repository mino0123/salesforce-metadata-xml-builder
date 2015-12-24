const AutoResponseRule = require('./AutoResponseRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<AutoResponseRules>';
  var rootTagEnd = '</AutoResponseRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autoResponseRule == null ? '' : object.autoResponseRule.map(p => '<autoResponseRule>' + AutoResponseRule(p, true) + '</autoResponseRule>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}