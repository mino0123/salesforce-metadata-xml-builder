const RecommendationAudienceDetail = require('./RecommendationAudienceDetail');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationAudience>';
  var rootTagEnd = '</RecommendationAudience>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.recommendationAudienceDetails == null ? '' : object.recommendationAudienceDetails.map(p => '<recommendationAudienceDetails>' + RecommendationAudienceDetail(p, true) + '</recommendationAudienceDetails>').join('')}
${rootTagEnd}`;
}