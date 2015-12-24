
module.exports = (object, asChild) => {
  var rootTagStart = '<Holiday>';
  var rootTagEnd = '</Holiday>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.activityDate == null ? '' : '<activityDate>' + object.activityDate + '</activityDate>'}
	${object.businessHours == null ? '' : object.businessHours.map(p => '<businessHours>' + p + '</businessHours>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.endTime == null ? '' : '<endTime>' + object.endTime + '</endTime>'}
	${object.isRecurring == null ? '' : '<isRecurring>' + object.isRecurring + '</isRecurring>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.recurrenceDayOfMonth == null ? '' : '<recurrenceDayOfMonth>' + object.recurrenceDayOfMonth + '</recurrenceDayOfMonth>'}
	${object.recurrenceDayOfWeek == null ? '' : object.recurrenceDayOfWeek.map(p => '<recurrenceDayOfWeek>' + p + '</recurrenceDayOfWeek>').join('')}
	${object.recurrenceDayOfWeekMask == null ? '' : '<recurrenceDayOfWeekMask>' + object.recurrenceDayOfWeekMask + '</recurrenceDayOfWeekMask>'}
	${object.recurrenceEndDate == null ? '' : '<recurrenceEndDate>' + object.recurrenceEndDate + '</recurrenceEndDate>'}
	${object.recurrenceInstance == null ? '' : '<recurrenceInstance>' + object.recurrenceInstance + '</recurrenceInstance>'}
	${object.recurrenceInterval == null ? '' : '<recurrenceInterval>' + object.recurrenceInterval + '</recurrenceInterval>'}
	${object.recurrenceMonthOfYear == null ? '' : '<recurrenceMonthOfYear>' + object.recurrenceMonthOfYear + '</recurrenceMonthOfYear>'}
	${object.recurrenceStartDate == null ? '' : '<recurrenceStartDate>' + object.recurrenceStartDate + '</recurrenceStartDate>'}
	${object.recurrenceType == null ? '' : '<recurrenceType>' + object.recurrenceType + '</recurrenceType>'}
	${object.startTime == null ? '' : '<startTime>' + object.startTime + '</startTime>'}
${rootTagEnd}`;
}