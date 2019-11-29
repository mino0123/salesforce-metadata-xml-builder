const FlowStartFrequency = require('./FlowStartFrequency');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowSchedule>';
  var rootTagEnd = '</FlowSchedule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.frequency == null ? '' : '<frequency>' + FlowStartFrequency(object.frequency, true) + '</frequency>'}
	${object.startDate == null ? '' : '<startDate>' + object.startDate + '</startDate>'}
	${object.startTime == null ? '' : '<startTime>' + object.startTime + '</startTime>'}
${rootTagEnd}`;
}