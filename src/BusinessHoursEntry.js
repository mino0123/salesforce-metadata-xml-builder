
module.exports = (object, asChild) => {
  var rootTagStart = '<BusinessHoursEntry>';
  var rootTagEnd = '</BusinessHoursEntry>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.fridayEndTime == null ? '' : '<fridayEndTime>' + object.fridayEndTime + '</fridayEndTime>'}
	${object.fridayStartTime == null ? '' : '<fridayStartTime>' + object.fridayStartTime + '</fridayStartTime>'}
	${object.mondayEndTime == null ? '' : '<mondayEndTime>' + object.mondayEndTime + '</mondayEndTime>'}
	${object.mondayStartTime == null ? '' : '<mondayStartTime>' + object.mondayStartTime + '</mondayStartTime>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.saturdayEndTime == null ? '' : '<saturdayEndTime>' + object.saturdayEndTime + '</saturdayEndTime>'}
	${object.saturdayStartTime == null ? '' : '<saturdayStartTime>' + object.saturdayStartTime + '</saturdayStartTime>'}
	${object.sundayEndTime == null ? '' : '<sundayEndTime>' + object.sundayEndTime + '</sundayEndTime>'}
	${object.sundayStartTime == null ? '' : '<sundayStartTime>' + object.sundayStartTime + '</sundayStartTime>'}
	${object.thursdayEndTime == null ? '' : '<thursdayEndTime>' + object.thursdayEndTime + '</thursdayEndTime>'}
	${object.thursdayStartTime == null ? '' : '<thursdayStartTime>' + object.thursdayStartTime + '</thursdayStartTime>'}
	${object.timeZoneId == null ? '' : '<timeZoneId>' + object.timeZoneId + '</timeZoneId>'}
	${object.tuesdayEndTime == null ? '' : '<tuesdayEndTime>' + object.tuesdayEndTime + '</tuesdayEndTime>'}
	${object.tuesdayStartTime == null ? '' : '<tuesdayStartTime>' + object.tuesdayStartTime + '</tuesdayStartTime>'}
	${object.wednesdayEndTime == null ? '' : '<wednesdayEndTime>' + object.wednesdayEndTime + '</wednesdayEndTime>'}
	${object.wednesdayStartTime == null ? '' : '<wednesdayStartTime>' + object.wednesdayStartTime + '</wednesdayStartTime>'}
${rootTagEnd}`;
}