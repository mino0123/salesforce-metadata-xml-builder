const BusinessHoursEntry = require('./BusinessHoursEntry');
const Holiday = require('./Holiday');

module.exports = (object, asChild) => {
  var rootTagStart = '<BusinessHoursSettings>';
  var rootTagEnd = '</BusinessHoursSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.businessHours == null ? '' : object.businessHours.map(p => '<businessHours>' + BusinessHoursEntry(p, true) + '</businessHours>')}
	${object.holidays == null ? '' : object.holidays.map(p => '<holidays>' + Holiday(p, true) + '</holidays>')}
${rootTagEnd}`;
}