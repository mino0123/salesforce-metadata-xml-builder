module.exports = (value) => {
  if (!value) { return ''; }
  if (["LogACall","LogANote","New","NewRecordType","Update","NewChild","NewChildRecordType","CreateNew","CreateNewRecordType","SendEmail","QuickRecordType","Quick","EditDescription","Defer","ChangeDueDate","ChangePriority","ChangeStatus","SocialPost","Escalate","EscalateToRecord","OfferFeedback","RequestFeedback","AddRecord","AddMember","Reply","ReplyAll","Forward","ScheduleAppointment","EnrollInProgram","ModifyAppointment"].indexOf(value) < 0) {
    throw new Error('Invalid QuickActionLabel value: ' + value);
  }
  return value;
};