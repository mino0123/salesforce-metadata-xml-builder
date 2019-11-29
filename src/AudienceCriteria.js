const AudienceCriterion = require('./AudienceCriterion');

module.exports = (object, asChild) => {
  var rootTagStart = '<AudienceCriteria>';
  var rootTagEnd = '</AudienceCriteria>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.criterion == null ? '' : object.criterion.map(p => '<criterion>' + AudienceCriterion(p, true) + '</criterion>').join('')}
${rootTagEnd}`;
}