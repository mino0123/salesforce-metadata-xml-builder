
module.exports = (object, asChild) => {
  var rootTagStart = '<EACSettings>';
  var rootTagEnd = '</EACSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEACForEveryonePref == null ? '' : '<enableEACForEveryonePref>' + object.enableEACForEveryonePref + '</enableEACForEveryonePref>'}
	${object.enableInboxActivitySharing == null ? '' : '<enableInboxActivitySharing>' + object.enableInboxActivitySharing + '</enableInboxActivitySharing>'}
	${object.enableInsightsInTimeline == null ? '' : '<enableInsightsInTimeline>' + object.enableInsightsInTimeline + '</enableInsightsInTimeline>'}
	${object.enableInsightsInTimelineEacStd == null ? '' : '<enableInsightsInTimelineEacStd>' + object.enableInsightsInTimelineEacStd + '</enableInsightsInTimelineEacStd>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}