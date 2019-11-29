
module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionRecommendation>';
  var rootTagEnd = '</RecordActionRecommendation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultStrategy == null ? '' : '<defaultStrategy>' + object.defaultStrategy + '</defaultStrategy>'}
	${object.hasDescription == null ? '' : '<hasDescription>' + object.hasDescription + '</hasDescription>'}
	${object.hasImage == null ? '' : '<hasImage>' + object.hasImage + '</hasImage>'}
	${object.hasRejectAction == null ? '' : '<hasRejectAction>' + object.hasRejectAction + '</hasRejectAction>'}
	${object.hasTitle == null ? '' : '<hasTitle>' + object.hasTitle + '</hasTitle>'}
	${object.maxDisplayRecommendations == null ? '' : '<maxDisplayRecommendations>' + object.maxDisplayRecommendations + '</maxDisplayRecommendations>'}
${rootTagEnd}`;
}