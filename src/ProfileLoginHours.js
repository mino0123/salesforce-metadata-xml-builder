
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileLoginHours>';
  var rootTagEnd = '</ProfileLoginHours>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fridayEnd == null ? '' : '<fridayEnd>' + object.fridayEnd + '</fridayEnd>'}
	${object.fridayStart == null ? '' : '<fridayStart>' + object.fridayStart + '</fridayStart>'}
	${object.mondayEnd == null ? '' : '<mondayEnd>' + object.mondayEnd + '</mondayEnd>'}
	${object.mondayStart == null ? '' : '<mondayStart>' + object.mondayStart + '</mondayStart>'}
	${object.saturdayEnd == null ? '' : '<saturdayEnd>' + object.saturdayEnd + '</saturdayEnd>'}
	${object.saturdayStart == null ? '' : '<saturdayStart>' + object.saturdayStart + '</saturdayStart>'}
	${object.sundayEnd == null ? '' : '<sundayEnd>' + object.sundayEnd + '</sundayEnd>'}
	${object.sundayStart == null ? '' : '<sundayStart>' + object.sundayStart + '</sundayStart>'}
	${object.thursdayEnd == null ? '' : '<thursdayEnd>' + object.thursdayEnd + '</thursdayEnd>'}
	${object.thursdayStart == null ? '' : '<thursdayStart>' + object.thursdayStart + '</thursdayStart>'}
	${object.tuesdayEnd == null ? '' : '<tuesdayEnd>' + object.tuesdayEnd + '</tuesdayEnd>'}
	${object.tuesdayStart == null ? '' : '<tuesdayStart>' + object.tuesdayStart + '</tuesdayStart>'}
	${object.wednesdayEnd == null ? '' : '<wednesdayEnd>' + object.wednesdayEnd + '</wednesdayEnd>'}
	${object.wednesdayStart == null ? '' : '<wednesdayStart>' + object.wednesdayStart + '</wednesdayStart>'}
${rootTagEnd}`;
}