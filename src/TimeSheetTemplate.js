const TimeSheetFrequency = require('./TimeSheetFrequency');
const TimeSheetTemplateAssignment = require('./TimeSheetTemplateAssignment');
const DaysOfWeek = require('./DaysOfWeek');

module.exports = (object, asChild) => {
  var rootTagStart = '<TimeSheetTemplate>';
  var rootTagEnd = '</TimeSheetTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.frequency == null ? '' : '<frequency>' + TimeSheetFrequency(object.frequency, true) + '</frequency>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.startDate == null ? '' : '<startDate>' + object.startDate + '</startDate>'}
	${object.timeSheetTemplateAssignments == null ? '' : object.timeSheetTemplateAssignments.map(p => '<timeSheetTemplateAssignments>' + TimeSheetTemplateAssignment(p, true) + '</timeSheetTemplateAssignments>').join('')}
	${object.workWeekEndDay == null ? '' : '<workWeekEndDay>' + DaysOfWeek(object.workWeekEndDay, true) + '</workWeekEndDay>'}
	${object.workWeekStartDay == null ? '' : '<workWeekStartDay>' + DaysOfWeek(object.workWeekStartDay, true) + '</workWeekStartDay>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}