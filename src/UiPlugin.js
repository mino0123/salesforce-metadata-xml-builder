
module.exports = (object, asChild) => {
  var rootTagStart = '<UiPlugin>';
  var rootTagEnd = '</UiPlugin>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.extensionPointIdentifier == null ? '' : '<extensionPointIdentifier>' + object.extensionPointIdentifier + '</extensionPointIdentifier>'}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}