const MatchingRule = require('./MatchingRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<MatchingRules>';
  var rootTagEnd = '</MatchingRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.matchingRules == null ? '' : object.matchingRules.map(p => '<matchingRules>' + MatchingRule(p, true) + '</matchingRules>')}
${rootTagEnd}`;
}