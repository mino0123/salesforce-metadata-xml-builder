const AudienceCriteriaType = require('./AudienceCriteriaType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationAudienceDetail>';
  var rootTagEnd = '</RecommendationAudienceDetail>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.audienceCriteriaType == null ? '' : '<audienceCriteriaType>' + AudienceCriteriaType(object.audienceCriteriaType, true) + '</audienceCriteriaType>'}
	${object.audienceCriteriaValue == null ? '' : '<audienceCriteriaValue>' + object.audienceCriteriaValue + '</audienceCriteriaValue>'}
	${object.setupName == null ? '' : '<setupName>' + object.setupName + '</setupName>'}
${rootTagEnd}`;
}