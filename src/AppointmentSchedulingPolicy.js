
module.exports = (object, asChild) => {
  var rootTagStart = '<AppointmentSchedulingPolicy>';
  var rootTagEnd = '</AppointmentSchedulingPolicy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appointmentStartTimeInterval == null ? '' : '<appointmentStartTimeInterval>' + object.appointmentStartTimeInterval + '</appointmentStartTimeInterval>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.shouldConsiderCalendarEvents == null ? '' : '<shouldConsiderCalendarEvents>' + object.shouldConsiderCalendarEvents + '</shouldConsiderCalendarEvents>'}
	${object.shouldEnforceExcludedResource == null ? '' : '<shouldEnforceExcludedResource>' + object.shouldEnforceExcludedResource + '</shouldEnforceExcludedResource>'}
	${object.shouldEnforceRequiredResource == null ? '' : '<shouldEnforceRequiredResource>' + object.shouldEnforceRequiredResource + '</shouldEnforceRequiredResource>'}
	${object.shouldMatchSkill == null ? '' : '<shouldMatchSkill>' + object.shouldMatchSkill + '</shouldMatchSkill>'}
	${object.shouldMatchSkillLevel == null ? '' : '<shouldMatchSkillLevel>' + object.shouldMatchSkillLevel + '</shouldMatchSkillLevel>'}
	${object.shouldRespectVisitingHours == null ? '' : '<shouldRespectVisitingHours>' + object.shouldRespectVisitingHours + '</shouldRespectVisitingHours>'}
	${object.shouldUsePrimaryMembers == null ? '' : '<shouldUsePrimaryMembers>' + object.shouldUsePrimaryMembers + '</shouldUsePrimaryMembers>'}
	${object.shouldUseSecondaryMembers == null ? '' : '<shouldUseSecondaryMembers>' + object.shouldUseSecondaryMembers + '</shouldUseSecondaryMembers>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}