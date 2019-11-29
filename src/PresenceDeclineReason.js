
module.exports = (object, asChild) => {
  var rootTagStart = '<PresenceDeclineReason>';
  var rootTagEnd = '</PresenceDeclineReason>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}