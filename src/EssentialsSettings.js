
module.exports = (object, asChild) => {
  var rootTagStart = '<EssentialsSettings>';
  var rootTagEnd = '</EssentialsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.emailConnectorEnabled == null ? '' : '<emailConnectorEnabled>' + object.emailConnectorEnabled + '</emailConnectorEnabled>'}
	${object.essentialsAppEnabled == null ? '' : '<essentialsAppEnabled>' + object.essentialsAppEnabled + '</essentialsAppEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}