const RecommendationChannel = require('./RecommendationChannel');

module.exports = (object, asChild) => {
  var rootTagStart = '<ScheduledRecommendationDetail>';
  var rootTagEnd = '</ScheduledRecommendationDetail>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channel == null ? '' : '<channel>' + RecommendationChannel(object.channel, true) + '</channel>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.rank == null ? '' : '<rank>' + object.rank + '</rank>'}
	${object.recommendationAudience == null ? '' : '<recommendationAudience>' + object.recommendationAudience + '</recommendationAudience>'}
${rootTagEnd}`;
}