const ScheduledRecommendation = require('./ScheduledRecommendation');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecommendationDefinitionDetail>';
  var rootTagEnd = '</RecommendationDefinitionDetail>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionUrl == null ? '' : '<actionUrl>' + object.actionUrl + '</actionUrl>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.linkText == null ? '' : '<linkText>' + object.linkText + '</linkText>'}
	${object.scheduledRecommendations == null ? '' : '<scheduledRecommendations>' + ScheduledRecommendation(object.scheduledRecommendations, true) + '</scheduledRecommendations>'}
	${object.setupName == null ? '' : '<setupName>' + object.setupName + '</setupName>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
${rootTagEnd}`;
}