const ScheduledRecommendationDetail = require('./ScheduledRecommendationDetail');

module.exports = (object, asChild) => {
  var rootTagStart = '<ScheduledRecommendation>';
  var rootTagEnd = '</ScheduledRecommendation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.scheduledRecommendationDetails == null ? '' : object.scheduledRecommendationDetails.map(p => '<scheduledRecommendationDetails>' + ScheduledRecommendationDetail(p, true) + '</scheduledRecommendationDetails>').join('')}
${rootTagEnd}`;
}