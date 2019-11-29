
module.exports = (object, asChild) => {
  var rootTagStart = '<VoiceSettings>';
  var rootTagEnd = '</VoiceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCallDisposition == null ? '' : '<enableCallDisposition>' + object.enableCallDisposition + '</enableCallDisposition>'}
	${object.enableVoiceCallList == null ? '' : '<enableVoiceCallList>' + object.enableVoiceCallList + '</enableVoiceCallList>'}
	${object.enableVoiceCallRecording == null ? '' : '<enableVoiceCallRecording>' + object.enableVoiceCallRecording + '</enableVoiceCallRecording>'}
	${object.enableVoiceCoaching == null ? '' : '<enableVoiceCoaching>' + object.enableVoiceCoaching + '</enableVoiceCoaching>'}
	${object.enableVoiceConferencing == null ? '' : '<enableVoiceConferencing>' + object.enableVoiceConferencing + '</enableVoiceConferencing>'}
	${object.enableVoiceLocalPresence == null ? '' : '<enableVoiceLocalPresence>' + object.enableVoiceLocalPresence + '</enableVoiceLocalPresence>'}
	${object.enableVoiceMail == null ? '' : '<enableVoiceMail>' + object.enableVoiceMail + '</enableVoiceMail>'}
	${object.enableVoiceMailDrop == null ? '' : '<enableVoiceMailDrop>' + object.enableVoiceMailDrop + '</enableVoiceMailDrop>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}