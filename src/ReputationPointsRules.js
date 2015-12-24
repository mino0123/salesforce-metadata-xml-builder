const ReputationPointsRule = require('./ReputationPointsRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationPointsRules>';
  var rootTagEnd = '</ReputationPointsRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.pointsRule == null ? '' : object.pointsRule.map(p => '<pointsRule>' + ReputationPointsRule(p, true) + '</pointsRule>').join('')}
${rootTagEnd}`;
}