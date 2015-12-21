
module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationPointsRule>';
  var rootTagEnd = '</ReputationPointsRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.eventType == null ? '' : '<eventType>' + object.eventType + '</eventType>'}
	${object.points == null ? '' : '<points>' + object.points + '</points>'}
${rootTagEnd}`;
}