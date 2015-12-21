const BlankValueBehavior = require('./BlankValueBehavior');
const MatchingMethod = require('./MatchingMethod');

module.exports = (object, asChild) => {
  var rootTagStart = '<MatchingRuleItem>';
  var rootTagEnd = '</MatchingRuleItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.blankValueBehavior == null ? '' : '<blankValueBehavior>' + BlankValueBehavior(object.blankValueBehavior, true) + '</blankValueBehavior>'}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.matchingMethod == null ? '' : '<matchingMethod>' + MatchingMethod(object.matchingMethod, true) + '</matchingMethod>'}
${rootTagEnd}`;
}