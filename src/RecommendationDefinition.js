const RecommendationDefinitionDetail = require('./RecommendationDefinitionDetail');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationDefinition>';
  var rootTagEnd = '</RecommendationDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.recommendationDefinitionDetails == null ? '' : object.recommendationDefinitionDetails.map(p => '<recommendationDefinitionDetails>' + RecommendationDefinitionDetail(p, true) + '</recommendationDefinitionDetails>').join('')}
${rootTagEnd}`;
}