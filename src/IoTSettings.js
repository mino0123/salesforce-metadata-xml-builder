
module.exports = (object, asChild) => {
  var rootTagStart = '<IoTSettings>';
  var rootTagEnd = '</IoTSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableIoT == null ? '' : '<enableIoT>' + object.enableIoT + '</enableIoT>'}
	${object.enableIoTInsightsPilot == null ? '' : '<enableIoTInsightsPilot>' + object.enableIoTInsightsPilot + '</enableIoTInsightsPilot>'}
	${object.enableIoTUsageEmail == null ? '' : '<enableIoTUsageEmail>' + object.enableIoTUsageEmail + '</enableIoTUsageEmail>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}