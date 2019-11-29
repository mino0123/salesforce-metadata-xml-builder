const RecommendationConditionValueType = require('./RecommendationConditionValueType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationConditionValue>';
  var rootTagEnd = '</RecommendationConditionValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.type == null ? '' : '<type>' + RecommendationConditionValueType(object.type, true) + '</type>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}