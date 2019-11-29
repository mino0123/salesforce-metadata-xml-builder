const AudienceCriteriaValue = require('./AudienceCriteriaValue');
const AudienceCriterionOperator = require('./AudienceCriterionOperator');
const AudienceCriterionType = require('./AudienceCriterionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<AudienceCriterion>';
  var rootTagEnd = '</AudienceCriterion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.criteriaNumber == null ? '' : '<criteriaNumber>' + object.criteriaNumber + '</criteriaNumber>'}
	${object.criterionValue == null ? '' : '<criterionValue>' + AudienceCriteriaValue(object.criterionValue, true) + '</criterionValue>'}
	${object.operator == null ? '' : '<operator>' + AudienceCriterionOperator(object.operator, true) + '</operator>'}
	${object.type == null ? '' : '<type>' + AudienceCriterionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}