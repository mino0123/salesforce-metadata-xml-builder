const MilestoneTypeRecurrenceType = require('./MilestoneTypeRecurrenceType');

module.exports = (object, asChild) => {
  var rootTagStart = '<MilestoneType>';
  var rootTagEnd = '</MilestoneType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.recurrenceType == null ? '' : '<recurrenceType>' + MilestoneTypeRecurrenceType(object.recurrenceType, true) + '</recurrenceType>'}
${rootTagEnd}`;
}