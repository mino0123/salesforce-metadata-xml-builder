const RecommendationConditionOperator = require('./RecommendationConditionOperator');
const RecommendationConditionValue = require('./RecommendationConditionValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationLoadCondition>';
  var rootTagEnd = '</RecommendationLoadCondition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.operator == null ? '' : '<operator>' + RecommendationConditionOperator(object.operator, true) + '</operator>'}
	${object.value == null ? '' : '<value>' + RecommendationConditionValue(object.value, true) + '</value>'}
${rootTagEnd}`;
}